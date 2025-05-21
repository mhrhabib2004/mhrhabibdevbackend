import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ContactService } from "./contact.service";
import { sendMail } from "../../lib/mailer";
import { TContact } from "./contact.interface";


export const createContact = catchAsync(async (req, res) => {
  const contactData: TContact = req.body;

  const result = await ContactService.createContactIntoDB(contactData);

  // Send email notification
  await sendMail(contactData);

  sendResponse<TContact>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "email sent successfully",
    data: result,
  });
});


// All Blog data
const getAllContact = catchAsync(async (req, res) => {


    const result = await ContactService.getAllContactFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Contact fetched successfully',
        data: result,
    });
});



// Delete Blog Data
const deleteContact = catchAsync(async (req, res) => {
    const id = req.params.id;

    await ContactService.deleteContactFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Contact deleted succesfully',
        data: undefined
    });
});



export const ContactControllers = {
    createContact,
    getAllContact,
    deleteContact

};