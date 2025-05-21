import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";



// Create Blog
const createContactIntoDB = async (payload: TContact) => {

    const newPayload = { ...payload };

    const result = await Contact.create(newPayload);

    return result;
};


// Get All Blog
const getAllContactFromDB = async () => {

    // Execute the query
    const blog = Contact.find() 
     

    return blog;
};



// Delete Blog
const deleteContactFromDB = async (id: string) => {
    const blog = await Contact.findById(id);

    // Check blog Exist
    if (!blog) {
        throw new Error('This blog not found !')
    }

    const result = Contact.findByIdAndDelete(id)
    return result;
};

export const ContactService = {
    createContactIntoDB,
    getAllContactFromDB,
    deleteContactFromDB,
};