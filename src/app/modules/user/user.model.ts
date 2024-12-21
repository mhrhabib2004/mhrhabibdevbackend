
import bcrypt from 'bcrypt';
import {  Model, model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from '../../config';

// Spasific filter interface data
interface UserModel extends Model<TUser> {
    getPublicUserData(userId: string): Promise<Pick<TUser, '_id' | 'name' | 'email'>>;
}

// user Model
const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            maxlength: 20,
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            validate: {
                validator: function (value: string) {
                    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
                },
                message: '{VALUE} is not a valid email',
            },
            immutable: true,
        },
        password: {
            type: String,
            required: [true, 'Password is Required'],
            select: false
        },
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: '{VALUE} is not valid, please provide a valid role',
            },
            default: 'user',
            required: true,
        },
        isBlocked: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        // versionKey: false
    },
);
// Password hassing Function
userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

// Spasic data send function
userSchema.statics.getPublicUserData = function (userId: string) {
    return this.findById(userId).select('_id name email');
};


export const User = model<TUser, UserModel>('User', userSchema);