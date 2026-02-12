import { Request, Response } from "express";

export default () => (req: Request, res: Response) => {
  // console.log(req);
  res.status(404).json({
    ok: false,
    message: "(g)Invalid Path",
    path: req.originalUrl,
    date: Date()
  })
}
