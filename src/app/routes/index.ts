import { SkillsRoutes } from './../modules/skills/skill.route';
import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.router";
import { AdminRoutes } from "../modules/admin/admin.route";
import { ProjectRoutes } from "../modules/projects/project.route";
import { BlogsRoutes } from "../modules/blog/blog.route";


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
    {
        path: '/projects',
        route: ProjectRoutes,
    },
    {
        path: '/skills',
        route: SkillsRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;