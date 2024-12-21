import { Tblog } from "./blog.interface";
import { Blogs } from "./blog.model";

// Create Blog
const createBlogIntoDB = async (payload: Tblog) => {
    const result = await Blogs.create(payload);
    return result;
};


// All Blog Data Get
const getAllBlogFromDB = async () => {

    const result = await Blogs.find().populate('author');

    return result;
};

// Single Blog data get
const getSingleBlogFromDB = async (id: string) => {
    const result =
        await Blogs.findById(id).populate('author');
    return result;
};

// Update bloge Data
const updateBlogIntoDB = async (
    id: string,
    payload: Partial<Tblog>,
) => {
    const result = await Blogs.findOneAndUpdate(
        { _id: id },
        payload,
        {
            new: true,
        },
    );
    return result;
};

// Delete Blog
const deleteBlogFromDB = async (id: string) => {
    const result = await Blogs.findByIdAndUpdate(
        {_id: id},
        { isPublished: false },
        { new: true },
    );
    return result;
};



export const blogService = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB

};