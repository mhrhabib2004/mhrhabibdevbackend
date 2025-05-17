import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { skillService } from "./skill.service";


// Create Blogs
const createSkill = catchAsync(async (req, res) => {

    const result = await skillService.createSkillIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Blog is created succesfully',
        data: result,
    });
});

// All Blog data
const getAllSkill = catchAsync(async (req, res) => {


    const result = await skillService.getAllSkillFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blogs fetched successfully',
        data: result,
    });
});


// Get Single Project
const getSingleSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await skillService.getSingleSkillFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single Blog is retrieved succesfully',
        data: result,
    });
});


// Update Blog
const updateSkill = catchAsync(async (req, res) => {
    // console.log('test', req.user);
    const { id } = req.params;
    const result = await skillService.updateSkillIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog is updated succesfully',
        data: result,
    });
});

// Delete Blog Data
const deleteSkill = catchAsync(async (req, res) => {
    const id = req.params.id;

    await skillService.deleteSkillFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog deleted succesfully',
        data: undefined
    });
});



export const SkillsControllers = {
    createSkill,
    getAllSkill,
    updateSkill,
    deleteSkill,
    getSingleSkill

};