import { ISkill } from "./skill.interface";
import { Skills } from "./skill.model";



// Create Blog
const createSkillIntoDB = async (payload: ISkill) => {

    const newPayload = { ...payload };

    const result = await Skills.create(newPayload);

    return result;
};


// Get All Blog
const getAllSkillFromDB = async () => {

    // Execute the query
    const blog = Skills.find() 
     

    return blog;
};


// Get Single Blog
const getSingleSkillFromDB = async (id: string) => {

    const result = await Skills.findById(id)
    
    return result;
};


// Update bloge Data
const updateSkillIntoDB = async (id: string, payload: Partial<ISkill>) => {

    const result = await Skills.findOneAndUpdate({ _id: id }, payload,
        {
            new: true,
        },
    )

    return result;
};

// Delete Blog
const deleteSkillFromDB = async (id: string) => {
    const blog = await Skills.findById(id);

    // Check blog Exist
    if (!blog) {
        throw new Error('This blog not found !')
    }

    const result = Skills.findByIdAndDelete(id)
    return result;
};

export const skillService = {
    createSkillIntoDB,
    getAllSkillFromDB,
    updateSkillIntoDB,
    deleteSkillFromDB,
    getSingleSkillFromDB

};