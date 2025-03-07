



// Create Project
// const createProjectIntoDB = async (payload: TProject, file: any) => {

import AppError from "../../errors/AppError";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

//     if (file) {
//         const imageName = `${payload?.title}`;
//         const path = file?.path;

//         //send image to cloudinary
//         const { secure_url } = await sendImageToCloudinary(imageName, path);
//         payload.image = secure_url as string;
//     }

//     const newproject = await Project.create([payload]);

//     // const newStudent = await Student.create([payload], { session });

//     const result = await Project.create(newproject);

//     return result;
// };

const createProjectIntoDB = async (payload: TProject) => {

    const newPayload = { ...payload };

    const result = await Project.create(newPayload);

    return result;
};


// Get all Project
const getAllProjectFromDB = async () => {

    const blog = Project.find()

    return blog;
};


// Get Single Project
const getSingleProjectFromDB = async (id: string) => {

    const project = await Project.findById({ _id: id })

    if (!project) {
        throw new AppError(httpStatus.NOT_FOUND, 'This project is not found !');
    }

    const result = await Project.findById(id)

    return result;
};


// Update Project
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {


    // if (file) {
    //     const imageName = `${file.filename}`;
    //     const path = file?.path;

    //     //send image to cloudinary
    //     const { secure_url } = await sendImageToCloudinary(imageName, path);
    //     payload.image = secure_url as string;
    // }
    // console.log(payload);

    const project = await Project.findById({ _id: id })

    if (!project) {
        throw new AppError(httpStatus.NOT_FOUND, 'This project is not found !');
    }


    const result = await Project.findOneAndUpdate({ _id: id }, payload,
        {
            new: true,
        },
    )

    return result;
};


// Delete Project
const deleteProjectFromDB = async (id: string) => {

    const project = await Project.findById(id);

    // Check Project Exist
    if (!project) {
        throw new Error('This project not found !')
    }

    const result = Project.findByIdAndDelete(id)
    return result;
};


export const projectService = {
    createProjectIntoDB,
    getAllProjectFromDB,
    updateProjectIntoDB,
    deleteProjectFromDB,
    getSingleProjectFromDB
};