import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;
  const timestamp = new Date().toLocaleTimeString();

  let userAgent: string = req.get("user-Agent") || "Unknown app";

  console.log(`[${timestamp}] ${method} '${url}' ->{${userAgent}}`);
  next();
};

export default logger;
