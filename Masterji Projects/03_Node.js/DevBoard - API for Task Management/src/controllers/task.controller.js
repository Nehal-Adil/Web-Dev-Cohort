import { Task } from "../models/task.model.js";
import { Project } from "../models/project.model.js";
import { validationResult } from "express-validator";

const userOwnsProject = async (userId, projectId) => {
  const project = await Project.findById({ _id: projectId, owner: userId });
  return !!project;
};

const createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, status, project, owner } = req.body;

  try {
    const ownsProject = await userOwnsProject(req.user._id, project);
    if (!ownsProject) {
      return res.status(403).json({
        success: false,
        error: "You do not own this project",
      });
    }

    const newTask = await Task.create({
      title,
      description,
      status,
      project,
      owner,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating task",
    });
  }
};

const getTasksByProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const ownsProject = await userOwnsProject(req.user._id, projectId);
    if (!ownsProject) {
      return res.status(403).json({
        success: false,
        error: "You do not own this project",
      });
    }

    const tasks = await Task.find({ project: projectId });

    // .populate('owner') tells Mongoose:
    // “After fetching the task, go look up the user with that _id and embed their data in the response.”

    // Without populate, you’d get:
    // "owner": "66a1b2c3d4e5f67890123456"

    // With populate('owner', 'name email'), you get:
    // "owner": {
    //   "name": "John Doe",
    //   "email": "johndoe@example.com"
    // }

    res.status(200).json({
      success: true,
      message: "Tasks retrieved successfully",
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error retrieving tasks",
    });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const ownsProject = await userOwnsProject(req.user._id, id);
    if (!ownsProject) {
      return res.status(403).json({
        success: false,
        error: "You do not own this project",
      });
    }

    const task = await Task.findById({ _id: id }).populate(
      "owner",
      "username email",
    );

    res.status(200).json({
      success: true,
      message: "Task retrieved successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error retrieving task",
    });
  }
};

const updateTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { title, description, status, project, owner } = req.body;

  try {
    const ownsProject = await userOwnsProject(req.user._id, project);
    if (!ownsProject) {
      return res.status(403).json({
        success: false,
        error: "You do not own this project",
      });
    }

    const task = await Task.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        status,
        project,
        owner,
        updatedAt: new Date(),
      },
      { new: true },
    );

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating task",
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById({ _id: id });
    if (!task) {
      return res.status(404).json({
        success: false,
        error: "Task not found",
      });
    }

    const ownsProject = await userOwnsProject(req.user._id, task.project);
    if (!ownsProject) {
      return res.status(403).json({
        success: false,
        error: "You do not own this project",
      });
    }

    await Task.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting task",
    });
  }
};

export { createTask, getTasksByProject, getTaskById, updateTask, deleteTask };
