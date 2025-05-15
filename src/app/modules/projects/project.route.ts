import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';
import { ProjectControllers } from './project.controller';

const router = express.Router();

// ✅ Create a new project
router.post(
  '/create-project',
  validateRequest(ProjectValidation.createProjectValidation),
  ProjectControllers.createProject
);

// ✅ Get all projects
router.get('/', ProjectControllers.getAllProject);

// ✅ Get single project by ID
router.get('/:id', ProjectControllers.getSingleProject);

// ✅ Update a project
router.patch(
  '/:id',
  validateRequest(ProjectValidation.updateProjectValidation),
  ProjectControllers.updateProject
);

// ✅ Delete a project
router.delete('/:id', ProjectControllers.deleteProject);

export const ProjectRoutes = router;
