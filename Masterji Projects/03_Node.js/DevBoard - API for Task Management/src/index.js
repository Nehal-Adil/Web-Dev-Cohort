import app from "./app.js";
import connectDB from "./config/dbConnect.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`❌ Error connecting to MongoDB: `, error);
    process.exit(1);
  });
