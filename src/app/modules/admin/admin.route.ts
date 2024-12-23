
import express from 'express';
import { AdminControllers } from './admin.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

// User Blocked Route
router.patch(
    '/users/:userId/block', auth(USER_ROLE.admin),  AdminControllers.userBlocked,
);

// User unBlocked Route
router.patch(
    '/users/:userId/unblock', auth(USER_ROLE.admin), AdminControllers.userunBlocked,
);

// Delete Blog by Admin Route
router.delete(
    '/blogs/:id', auth(USER_ROLE.admin), AdminControllers.deleteBlogByAdmin,
);

export const AdminRoutes = router;