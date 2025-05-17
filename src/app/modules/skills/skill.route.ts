import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SkillValidation } from './skill.validation';
import { SkillsControllers } from './skill.controller';



const router = express.Router();

// Creat Blogs Data Route
router.post(
    '/create-skill',
    validateRequest( SkillValidation.createSkillValidation ),
    SkillsControllers.createSkill,
);

// All Data get of Blog Route
router.get('/getallskills', SkillsControllers.getAllSkill);


// Single Blog data get Route
router.get("/getsingleskill/:id", SkillsControllers.getSingleSkill)


// Update Blog Route
router.patch(
    '/updateskill/:id',
    validateRequest( SkillValidation.updateSkillValidation ),
    SkillsControllers.updateSkill,
);

// Delete Blog Route
router.delete(
    '/deleteskill/:id',  SkillsControllers.deleteSkill,
);

export const SkillsRoutes = router;