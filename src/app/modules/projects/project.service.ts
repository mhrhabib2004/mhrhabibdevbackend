import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

// Create Project
const createProjectIntoDB = async (payload: TProject) => {
  const newPayload = { ...payload };
  const result = await Project.create(newPayload);
  return result;
};

// Get All Projects
const getAllProjectFromDB = async () => {
  const projects = await Project.find();
  return projects;
};

// Get Single Project by ID
const getSingleProjectFromDB = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "This project is not found!");
  }
  return project;
};

// Update Project
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const updatedProject = await Project.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!updatedProject) {
    throw new AppError(httpStatus.NOT_FOUND, "This project is not found!");
  }
  return updatedProject;
};

// Delete Project
const deleteProjectFromDB = async (id: string) => {
  const deletedProject = await Project.findByIdAndDelete(id);
  if (!deletedProject) {
    throw new AppError(httpStatus.NOT_FOUND, "This project is not found!");
  }
  return deletedProject;
};

// Exporting all services
export const projectService = {
  createProjectIntoDB,
  getAllProjectFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
