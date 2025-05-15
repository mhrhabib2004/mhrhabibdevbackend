import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";
import httpStatus from "http-status";

// ✅ Create Project
const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

// ✅ Get All Projects
const getAllProject = catchAsync(async (req, res) => {
  const result = await projectService.getAllProjectFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result,
  });
});

// ✅ Get Single Project
const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await projectService.getSingleProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

// ✅ Update Project
const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await projectService.updateProjectIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

// ✅ Delete Project
const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;

  await projectService.deleteProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully",
    data: null,
  });
});

// ✅ Export Controllers
export const ProjectControllers = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
