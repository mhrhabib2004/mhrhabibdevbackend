/* eslint-disable @typescript-eslint/no-explicit-any */

import { Tblog } from "./blog.interface";
import { Blogs } from "./blog.model";

// Create Blog
const createBlogIntoDB = async (payload: Tblog, tokenId: string) => {

    const newPayload = { ...payload, author: tokenId };

    const blogUserData = await Blogs.create(newPayload);
    const result = await Blogs.getBlogData(blogUserData._id);
    return result;
};


const getAllBlogFromDB = async (query: Record<string, unknown>) => {

    const { search, sortBy, sortOrder, filter } = query as {
        search?: string;
        sortBy?: string;
        sortOrder?: string;
        filter?: string;
    };

    const queryObj: any = {};

    // Handle search query
    if (search) {
        queryObj.$or = [
            { title: { $regex: search, $options: 'i' } },
            { content: { $regex: search, $options: 'i' } },
        ];
    }

    // Handle filter query for author _id
    if (filter) {
        queryObj['author._id'] = filter;
    }

    // Handle sorting
    const sortOptions: any = {};
    if (sortBy) {
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }

    // Execute the query
    const blogQuery = Blogs.find(queryObj)
        .select('_id title content author')
        .populate('author', 'name email')
        .sort(sortOptions);

    // Return the result
    return blogQuery;
};

// Single Blog data get
// const getSingleBlogFromDB = async (id: string, payload: Partial<Tblog>) => {

//     const result = await Blogs.findById({ id },
//         payload,
//     ).select('_id title content author')
//         .populate('author', 'name email');
//     return result;
// };

// Update bloge Data
const updateBlogIntoDB = async (
    id: string,
    payload: Partial<Tblog>
) => {

    const result = await Blogs.findOneAndUpdate(
        { _id: id },
        payload,
        {
            new: true,
        },
    )
        .select('_id title content author')
        .populate('author', 'name email');
    return result;
};

// Delete Blog
const deleteBlogFromDB = async (id: string) => {
    const blog = await Blogs.findById(id);

    // Check blog Exist
    if (!blog) {
        throw new Error('This blog is already deleted !')
    }

    const result = Blogs.findByIdAndDelete(id)
    return result;
};

export const blogService = {
    createBlogIntoDB,
    getAllBlogFromDB,
    // getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB

};