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
src/
├── db/                 # Prisma client
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
cd Masterji\ Projects/03_Node.js/DevBoard\ -\ API\ for\ Task\ Management
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

| Method | Endpoint         | Description                             |
| ------ | ---------------- | --------------------------------------- |
| POST   | `/auth/register` | Register a new user                     |
| POST   | `/auth/login`    | Login with email/password, return JWT   |
| POST   | `/auth/api-key`  | Generate API key for authenticated user |
| GET    | `/auth/me`       | Get current user details                |

### Book Routes (public)

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/books`     | List all books |
| GET    | `/books/:id` | Get book by ID |

### Book Routes (admin)

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/books`        | Add a new book    |
| GET    | `/books/:id`    | Get book by ID    |
| GET    | `/projects/:id` | Get project by ID |
| PUT    | `/projects/:id` | Update project    |
| DELETE | `/projects/:id` | Delete project    |

### Review Routes

| Method | Endpoint                     | Description                              |
| ------ | ---------------------------- | ---------------------------------------- |
| POST   | `/projects/:projectId/tasks` | Create a new task in a project           |
| GET    | `/projects/:projectId/tasks` | List all tasks for a project             |
| GET    | `/tasks/:id`                 | Get task by ID                           |
| PUT    | `/tasks/:id`                 | Update task (status, title, description) |
| DELETE | `/tasks/:id`                 | Delete task                              |

### Order Routes

| Method | Endpoint                     | Description                              |
| ------ | ---------------------------- | ---------------------------------------- |
| POST   | `/projects/:projectId/tasks` | Create a new task in a project           |
| GET    | `/projects/:projectId/tasks` | List all tasks for a project             |
| GET    | `/tasks/:id`                 | Get task by ID                           |
| PUT    | `/tasks/:id`                 | Update task (status, title, description) |
| DELETE | `/tasks/:id`                 | Delete task                              |
