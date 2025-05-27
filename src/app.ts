import express, { Request, Response } from "express";
import router from "./app/routes";
import cors from "cors";

const app = express();

// ✅ CORS middleware must come BEFORE any routes
app.use(cors({
  origin: ['http://localhost:3000', 'https://mhrhabibdev.vercel.app',"https://mhrhabibdevadmin.vercel.app"], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware to parse JSON
app.use(express.json());

// Application routes
app.use('/api', router);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is live",
  });
});

export default app;
