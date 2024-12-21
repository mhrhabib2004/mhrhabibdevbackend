

import { model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";
import { User } from "../user/user.model";


const blogSchema = new Schema<Tblog>(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: [true, "Content is required"]
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        isPublished: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    },
);


// blogSchema.pre('find', function (next) {
//     this.find({ isPublished: { $ne: true } });
//     next();
// });

// blogSchema.pre('findOne', function (next) {
//     this.find({ isPublished: { $ne: true } });
//     next();
// });

// blogSchema.pre('aggregate', function (next) {
//     this.pipeline().unshift({ $match: { isPublished: { $ne: true } } });
//     next();
// });

//creating a custom static method
blogSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await User.findOne({ id });
    return existingUser;
};


export const Blogs = model<Tblog>(
    'Blog',
    blogSchema,
);