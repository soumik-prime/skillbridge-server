import express, { Application } from "express";
import notfound from "./middlewares/not-found"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import logger from "./middlewares/logger";
import { auth as abc } from './middlewares/auth';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(logger);

app.get('/abc', abc());
// Better-Auth Mount Handler
app.all("/api/auth/*splat", toNodeHandler(auth));


// Not Found Route
app.use(notfound())

export default app;