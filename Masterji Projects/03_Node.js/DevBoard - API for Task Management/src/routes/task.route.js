import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasksByProject,
  updateTask,
} from "../controllers/task.controller.js";
import { requireJwtOrApiKey } from "../middlewares/jwtOrApikey.middleware.js";
import {
  createTaskValidator,
  updateTaskValidator,
  taskIdValidator,
} from "../validators/task.validator.js";

const router = Router();

router.post(
  "/projects/:projectId/tasks",
  requireJwtOrApiKey,
  createTaskValidator,
  createTask,
);

router.get("/projects/:projectId/tasks", requireJwtOrApiKey, getTasksByProject);

router.get("/tasks/:id", requireJwtOrApiKey, taskIdValidator, getTaskById);

router.put(
  "/tasks/:id",
  requireJwtOrApiKey,
  taskIdValidator,
  updateTaskValidator,
  updateTask,
);

router.delete("/tasks/:id", requireJwtOrApiKey, taskIdValidator, deleteTask);

export default router;
