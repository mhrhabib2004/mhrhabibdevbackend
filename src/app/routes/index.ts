import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BlogsRoutes } from "../modules/blog/blog.route";
import { AuthRoutes } from "../modules/auth/auth.router";

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/blogs',
        route: BlogsRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;