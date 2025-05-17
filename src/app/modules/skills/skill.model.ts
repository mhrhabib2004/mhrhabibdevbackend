import {  model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";




const skiilSchema = new Schema<ISkill>(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        category: {
            type: String,
            required: [true, "Category is required"]
        },
        image: { type: String, required: false },
    },
    {
        timestamps: true,
        versionKey: false
    },
);




export const Skills = model<ISkill>( 'skills', skiilSchema );