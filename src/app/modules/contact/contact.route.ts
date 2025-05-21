import express from 'express';
import { ContactControllers } from './contact.controller';


const router = express.Router();

// Creat Blogs Data Route
router.post(
    '/create-contact',
    ContactControllers.createContact,
);

// All Data get of Blog Route
router.get('/', ContactControllers.getAllContact);


// Delete Blog Route
router.delete(
    '/:id',  ContactControllers.deleteContact,
);

export const ContactRoutes = router;