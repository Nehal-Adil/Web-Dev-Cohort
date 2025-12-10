import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

// import Routes
import authRouter from "./routes/auth.route.js";
import bookRouter from "./routes/book.route.js";
import reviewRouter from "./routes/review.route.js";
import orderRouter from "./routes/order.route.js";

const app = express();

// Middlewares
app.use(helmet()); //secure HTTP headers

const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "*", // ← Allow any origin in development
  credentials: true,
};
app.use(cors(corsOptions));

// logging
app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/", (req, res) => {
  res.json({ message: "Bookbazaar API is running" });
});

// routes
// ✅ CORRECT ORDER: Specific first, general last
app.use("/api/v1/auth", authRouter);

// Nested under /books/:bookId
app.use("/api/v1/books/:bookId/reviews", reviewRouter);
// for delete
app.use("/api/v1/reviews", reviewRouter);

app.use("/api/v1/books", bookRouter);

app.use("/api/v1/orders", orderRouter);

// 🚨 Centralized error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  // Handle Zod validation errors (if any bypass middleware)
  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
    });
  }

  // Handle Prisma errors
  if (err.code?.startsWith("P2")) {
    return res.status(400).json({
      success: false,
      message: "Database error",
    });
  }

  // Generic 500
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });

  // Handle 404
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  });
});

export default app;
