import { Request, Response } from 'express';
import { userServices } from './user.service';

export const userController = {
  // ! Get Controllers
  // Get Own User Informations
  getOwnUser: async(req: Request, res: Response) => {
    try{
      if (!req.user) return res.status(404).json({
        ok: false,
        message: "Login required!"
      });
      const result = await userServices.getUserById(req.user.id);
      res.status(200).json(result);
    } catch(error) {
      // todo-----
    }
  },
  // // Get Own User Informations by Id
  // getUserById: async(req: Request, res: Response) => {
  //   try{
  //     const { userId } = req.params;
  //     if (!userId) throw new Error("User id required");
  //     const result = await userServices.getUserById(userId as string);
  //     res.status(200).json(result);
  //   } catch(error) {
  //     // todo-----
  //   }
  // },
  // Get All User
  getAllUser: async(req: Request, res: Response) => {
    try{
      const result = await userServices.getAllUser();
      res.status(200).json(result);
    } catch(err){
      // todo----
    }
  },

  // ! Patch Controller
  // Updata Own Profile
  updateOwnUser: async(req: Request, res: Response) => {
    try{
      if (!req.user) return res.status(404).json({
        ok: false,
        message: "Login required!"
      });
      const { name, image } = req.body;
      const payload: { name?: string, image?: string } = {};
      if(name) payload.name = name;
      if(image) payload.image = image;
      const result = await userServices.updateUserById(req.user.id, payload);
      res.status(200).json(result);
    } catch(err){
      // todo----
    }
  },
  // Ban User By Id
  banUserById: async(req: Request, res: Response) => {
    try{
      const { userId } = req.params;
      if (!userId) throw new Error("User id required");
      const result = await userServices.updateBanStatusById(userId as string, true);
      res.status(200).json(result);
    } catch(error) {
      // todo-----
    }
  },
  // Unban User By Id
  unbanUserById: async(req: Request, res: Response) => {
    try{
      const { userId } = req.params;
      if (!userId) throw new Error("User id required");
      const result = await userServices.updateBanStatusById(userId as string, false);
      res.status(200).json(result);
    } catch(error) {
      // todo-----
    }
  },


};