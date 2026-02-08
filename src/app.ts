import express, { Application, Request, Response } from "express";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes


// Not Found Route
app.use((req: Request, res: Response) => {
  res.status(404).json({
    ok: false,
    message: "Invalid Path"
  })
})

export default app;