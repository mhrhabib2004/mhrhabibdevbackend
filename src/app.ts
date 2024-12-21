import express, { Request, Response } from "express";
import router from "./app/routes";


const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// application routes
app.use('/api', router);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is live",
  });
});

export default app;