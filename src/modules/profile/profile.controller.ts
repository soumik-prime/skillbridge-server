import { Request, Response } from 'express';
import { UserRole } from '../../../generated/prisma/enums';
import { profileServices } from './profile.service';


export const profileController = {
  getProfile: async(req: Request, res: Response) => {
    try{
      // todo
      if(!req.user) return res.status(404);
      switch (req.user.role) {
        case UserRole.STUDENT:
          const result = await profileServices.getStudentProfileById(req.user.id);
          return res.status(200).json(result);
      }
    } catch(err) {
      // todo-------
    }
  }
}