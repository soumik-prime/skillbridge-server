import { Request, Response, NextFunction } from 'express';
import { auth as betterAuth } from '../lib/auth';




export const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try{
      const session = await betterAuth.api.getSession({
        headers: req.headers as any
      })
      
      if (!session?.user.id) {
        res.status(401).send("Unauthorized");
        return;
      }

      console.log(session);
    } catch (err) {
      res.send("error");
    }
  }
}

