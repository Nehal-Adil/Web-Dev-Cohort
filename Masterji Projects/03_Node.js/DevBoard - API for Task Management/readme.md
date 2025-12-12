# 📋 Task Manager API

A production-ready, secure REST API for a Trello-like task management system. Users can create projects, manage tasks, and integrate via API keys — all with robust authentication and authorization.

> Built with **Express.js**, **MongoDB**, **JWT**, and **API Key** authentication.

## ✨ Features

- 🔐 **Dual Authentication**:
  - **JWT** for user sessions (web/mobile)
  - **API Keys** for programmatic access (scripts, integrations)
- 📁 **Projects CRUD**: Create, read, update, delete projects
- ✅ **Tasks CRUD**: Manage tasks within projects (status: `todo`/`in_progress`/`done`)
- 👥 **Ownership Enforcement**: Users can only access their own projects/tasks
- 🛡️ **Security Hardened**:
  - Rate limiting
  - Helmet.js headers
  - Input sanitization
  - CORS restrictions
- 🧪 **Validation**: Express-validator for all inputs
- 🧩 **Modular Code**: Clean MVC-like structure
- 📦 **Production Ready**: Environment config, error handling, logging

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** (Mongoose ODM)
- **JWT** for session-based auth
- **API Keys** for service-to-service auth
- **Express-validator** for input validation
- **Helmet**, **CORS**, **Rate Limiting** for security
- **Dotenv** for environment management

## 📁 Project Structure

```
task-manager-api/
├── src/
│ ├── config/ # DB, env setup
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth, error handling
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── utils/ # Helpers, constants
│ ├── validations/ # express-validator schemas
│ ├── app.js # Express app
│ └── index.js # Server entry
├── .env.sample # Env template
├── .gitignore
└── package.json
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

### 3. Run MongoDB locally using Docker or use MongoDB Atlas

### 4. Run the server

```bash
npm run start
```

## 🔌 API Endpoints

### Auth & API Key

| Method | Endpoint         | Description                             |
| ------ | ---------------- | --------------------------------------- |
| POST   | `/auth/register` | Register a new user                     |
| POST   | `/auth/login`    | Login with email/password, return JWT   |
| POST   | `/auth/api-key`  | Generate API key for authenticated user |
| GET    | `/auth/me`       | Get current user details                |

### Project Routes

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| POST   | `/projects`     | Create a new project     |
| GET    | `/projects`     | List all user’s projects |
| GET    | `/projects/:id` | Get project by ID        |
| PUT    | `/projects/:id` | Update project           |
| DELETE | `/projects/:id` | Delete project           |

### Task Routes

| Method | Endpoint                     | Description                              |
| ------ | ---------------------------- | ---------------------------------------- |
| POST   | `/projects/:projectId/tasks` | Create a new task in a project           |
| GET    | `/projects/:projectId/tasks` | List all tasks for a project             |
| GET    | `/tasks/:id`                 | Get task by ID                           |
| PUT    | `/tasks/:id`                 | Update task (status, title, description) |
| DELETE | `/tasks/:id`                 | Delete task                              |

## Credits

Developed by [Nehal Adil](https://github.com/Nehal-Adil).
