# DevBoard – API for Task Management System

## Description

Build a production-ready REST API for a task management system where users can organize projects and tasks like a simplified Trello.

### End Goal

To create a fully working Express.js API that supports:

- User registration/login (with JWT)
- API Key generation (to use the API)
- CRUD operations for Projects & Tasks
- Proper project-task-user relationship handling
- Postman collection for all routes
- Production-ready code quality (modular structure, environment configs)

### Tables to be Created

- users
- api_keys
- projects
- tasks
- collaborators (optional: for project sharing)

## API Routes to Build

### Auth & API Key

- POST /auth/register → Register a user
- POST /auth/login → Login with email/password, return JWT
- POST /auth/api-key → Generate API key for authenticated user
- GET /auth/me → Get current user details
  Middleware Required
- JWT middleware
- API Key middleware for project/task routes

### Project Routes

- POST /projects → Create project
- GET /projects → List all user’s projects
- GET /projects/:id → Get project by ID
- PUT /projects/:id → Update project
- DELETE /projects/:id → Delete project ✅

### Task Routes:

- POST /projects/:projectId/tasks → Create task
- GET /projects/:projectId/tasks → List all tasks for project
- PUT /tasks/:id → Update task status, title, description
- DELETE /tasks/:id → Delete task

### Security

- JWT-based auth for user login
- API Key is mandatory to access all project/task-related routes
- Rate limit middleware (bonus)

### Bonus

- Collaborators on a project (collaborators table)
- Task priority and due dates
- Pagination on the task list
- Soft delete with timestamps
- Export project data as JSON

## ✅ Deliverables Checklist

- User auth (register/login with JWT)
- API key generation & usage
- CRUD for projects & tasks
- Middleware (JWT + API key)
- DB design & relationships
- Clean code & folder structure
- Postman collection with all routes
- Bonus stuff (collaborators, pagination, etc.)
