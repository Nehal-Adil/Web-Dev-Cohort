# 📚 BookBazaar – REST API for Online Bookstore

A secure, production-ready REST API for an online bookstore built with Node.js, Express, Prisma, and PostgreSQL (NeonDB). Supports book browsing, reviews, orders, and JWT-based authentication.

## ✨ Features

- 🔐 JWT Authentication: Register, login, and protected routes
- 👥 Role-Based Access: Admins can manage books; users can review and order
- 📚 Book Management: Full CRUD with admin protection
- ✍️ Reviews: One review per user per book
- 🛒 Orders: Place orders, view history, and validate stock
- 🛡️ Security: Helmet, CORS, rate limiting, input validation (Zod)
- 🧪 Test-Ready: Complete Postman collection with examples
- ☁️ Cloud DB: PostgreSQL on Neon.tech (serverless, free tier)

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **PostgreSQL** (Prisma ORM & NeonDB)
- **JWT** for session-based auth
- **Zod** for input validation
- **Helmet**, **CORS**, **Rate Limiting** for security
- **Dotenv** for environment management
- **Postman** for API testing
- **ESLint**, **Prettier** for formatting

## 📁 Project Structure

```
generated/
└── prisma/              # Prisma client
src/
├── db/                 # db connection
├── routes/             # API routes
├── controllers/        # Business logic
├── middleware/         # Auth, validation, ownership
├── validation/         # Zod schemas
├── utils/              # Helpers (JWT, validators)
├── app.js              # Express app config
└── index.js            # Server entry point
prisma/
└── schema.prisma       # Database models
docs/                   # Postman collection
.env.example            # Environment template
```

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Nehal-Adil/Web-Dev-Cohort.git
cd Masterji\ Projects/03_Node.js/BookBazaar\ -\ API\ for\ Online\ Bookstore

npm install
```

### 2. Create .env file

Copy `.env.sample` to `.env` and fill in the required values.

### 3. Setup PostgreSQL database

1. Create a project in Neon.tech

2. Copy the Connection URI → paste into DATABASE_URL

3. Push Prisma schema:

```bash
npx prisma db push
```

4. Generate Prisma Client:

```bash
npx prisma generate
```

5. Run the Server

```bash
npm run start
```

Server runs at http://localhost:5000

## 🔌 API Endpoints

### Auth

| Method | Endpoint         | Description                              |
| ------ | ---------------- | ---------------------------------------- |
| POST   | `/auth/register` | Register a new user                      |
| POST   | `/auth/login`    | Login with email/password, return JWT    |
| GET    | `/auth/me`       | Get current user details (auth required) |

### Book Routes (public)

| Method | Endpoint     | Description                                   |
| ------ | ------------ | --------------------------------------------- |
| GET    | `/books`     | List all books (supports ?genre=, ?minPrice=) |
| GET    | `/books/:id` | Get book by ID                                |

### Book Routes (admin)

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/books`     | Add a new book |
| PUT    | `/books/:id` | Update Book    |
| DELETE | `/books/:id` | Delete book    |

### Review Routes

| Method | Endpoint                 | Description                     |
| ------ | ------------------------ | ------------------------------- |
| POST   | `/books/:bookId/reviews` | Add review (auth required)      |
| GET    | `/books/:bookId/reviews` | List all the reviews for a book |
| DELETE | `/reviews/:reviewId`     | Delete review (owner only)      |

### Order Routes

| Method | Endpoint           | Description                  |
| ------ | ------------------ | ---------------------------- |
| POST   | `/orders`          | Place order (auth required)  |
| GET    | `/orders`          | List user's orders           |
| DELETE | `/orders/:orderId` | Delete an order (owner only) |

## 🔒 Security Measures

- **Helmet**: Secure HTTP headers
- **CORS**: Restrict origins in production via FRONTEND_URL
- **Rate Limiting**: 10 requests/15 mins on auth routes
- **Input Validation**: Zod schemas for all mutations
- **Ownership Checks**: Users can only access their own reviews/orders
- **JWT**: Short-lived tokens with strong secrets

## 🧪 Testing with Postman

1. Import the collection:

```
docs/BookBazaar-API.postman_collection.json
```

2. Import the environment:

```
docs/BookBazaar-Dev.postman_environment.json
```

3. Update **base_url** to **http://localhost:5000/api/v1**

4. Run the **Auth → Books → Reviews → Orders** flow

> ✅ All tests include positive/negative cases and dynamic variable capture.

## 🚧 Future Enhancements (Bonus)

- Cart system (cart_items table)
- Docker deployment
- Razorpay integration (mock/real) with callback simulation
- Add search, sort, and filters to book list (e.g., by author, genre)
- Cart system using cart_items table
- Pagination for listing endpoints
- Email confirmation on order (mocked or real with Mailtrap)

## Credits

Developed by [Nehal Adil](https://github.com/Nehal-Adil).
