import { Router } from "express";
import { BlogsRoutes } from "../modules/blog/blog.route";
import { AuthRoutes } from "../modules/auth/auth.router";
import { AdminRoutes } from "../modules/admin/admin.route";


const router = Router();

const moduleRoutes = [
    {
        path: '/admin',
        route: AdminRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/blogs',
        route: BlogsRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;