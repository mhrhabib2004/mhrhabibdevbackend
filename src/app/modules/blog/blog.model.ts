

import { Model, model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";
import { User } from "../user/user.model";

// Spasific filter interface data
interface BlogModel extends Model<Tblog> {
    getBlogData(userId: string): Promise<Pick<Tblog, '_id' | 'title' | 'content' | 'author'>>;
}

const blogSchema = new Schema<Tblog>(
    {
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        content: {
            type: String,
            required: [true, "Content is required"]
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, "Author Id is requred"]
        },
        isPublished: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
    },
);




//creating a custom static method
blogSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await User.findOne({ id });
    return existingUser;
};

// Spasic data send function with populated author
blogSchema.statics.getBlogData = function (blogId: string) {
    return this.findById(blogId)
        .select('_id title content author')
        .populate('author', 'name email');
};

// Query Middleware
blogSchema.pre('find', function (next) {
    this.find({ isPublished: { $ne: false } });
    next();
});

blogSchema.pre('findOne', function (next) {
    this.find({ isPublished: { $ne: false } });
    next();
});

blogSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isPublished: { $ne: false } } });
    next();
});



export const Blogs = model<Tblog, BlogModel>(
    'Blog',
    blogSchema,
);