import { model, Schema } from "mongoose";
import { TContact } from "./contact.interface";


const contactSchema = new Schema<TContact>(
  {
    name: {
      type: String,
      required: [true, "name is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"]
    },
    subject: {
      type: String,
    },
        message: {
      type: String,
      required: [true, "message is required"]
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const Contact = model<TContact>("Contact", contactSchema );
