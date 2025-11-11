import { validationResult } from "express-validator";
import { Project } from "../models/project.model.js";

const createProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description } = req.body;

  try {
    const newProject = await Project.create({
      title,
      description,
      user: req.user._id,
    });
    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project: newProject,
    });
  } catch (error) {
    console.error("Error creating project: ", error);
    req.status(500).json({
      success: false,
      message: "Error creating project",
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully",
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving projects",
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById({
      _id: req.params.id,
      user: req.user._id,
    }).populate("user", "-password");

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project retrieved successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving project",
    });
  }
};

const updateProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const project = await Project.findByIdAndUpdate(
      { _id: id, user: req.user._id },
      {
        title,
        description,
        updatedAt: new Date(),
      },
      { new: true },
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating project",
    });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByIdAndDelete({
      _id: id,
      user: req.user._id,
    });
    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting project",
    });
  }
};

export {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
