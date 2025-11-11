import { Router } from "express";
import {
  createProjectValidator,
  projectIdValidator,
  updateProjectValidator,
} from "../validators/project.validator.js";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../controllers/project.controller.js";
import { requireJwtOrApiKey } from "../middlewares/jwtOrApikey.middleware.js";

const router = Router();

router.post("/", requireJwtOrApiKey, createProjectValidator, createProject);

router.get("/", requireJwtOrApiKey, getProjects);

router.get("/:id", requireJwtOrApiKey, projectIdValidator, getProjectById);

router.put(
  "/:id",
  requireJwtOrApiKey,
  projectIdValidator,
  updateProjectValidator,
  updateProject,
);

router.delete("/:id", requireJwtOrApiKey, projectIdValidator, deleteProject);

export default router;
