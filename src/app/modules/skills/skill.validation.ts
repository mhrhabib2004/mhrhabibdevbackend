
import { z } from "zod";


// Create blog validation
const createSkillValidation = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
        }),
        category: z.string({
            required_error: 'category is required',
        }),
        image: z.string().optional(),
    }),
});


// Update blog validation
const updateSkillValidation = z.object({
    body: z.object({
        name: z.string().optional(),
        image: z.string().optional(),
        categoty: z.string().optional(),
    }),
});


export const SkillValidation = {
    createSkillValidation,
    updateSkillValidation
};