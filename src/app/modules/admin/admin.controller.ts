import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AdminServices } from "./admin.service";
// import { AdminServices } from "./admin.service";

// Blocked user
const userBlocked = catchAsync(async (req, res) => {

    const userId = req.params.userId;

    await AdminServices.userBlockWithAdminFromDB(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User blocked successfully',
        data: undefined,
    });
});

// User Unblocked Route
const userunBlocked = catchAsync(async (req, res) => {

    const userId = req.params.userId;

    await AdminServices.userunBlockWithAdminFromDB(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User unBlocked successfully',
        data: undefined,
    });
});

// Delete Blog Data By Admin
const deleteBlogByAdmin = catchAsync(async (req, res) => {
    const id = req.params.id;

    await AdminServices.deleteBlogByAdminFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog deleted succesfully',
        data: undefined
    });
});


export const AdminControllers = {
    userBlocked,
    userunBlocked,
    deleteBlogByAdmin

};