import { Request, Response } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { profileServices } from "./profile.service";

export const profileController = {
  // ! CREATE CONTROLLERS
  // Create Own Profile
  createOwnProfile: async (req: Request, res: Response) => {
    try {
      const { user } = req;
      if (!user) return res.status(404).json({
        ok: false,
        message: "Login required!"
      });

      switch (user.role) {
        case UserRole.STUDENT:
          // TODO: Request body validation
          await profileServices.createStudentProfile({
            id: user.id,
            ...req.body
          })
          return res.status(200).json({
            ok: true,
            massege: "Student Profile Creation Successfull!"
          })
        case UserRole.TUTOR:
          // TODO: Request body validation
          await profileServices.createTutorProfile({
            id: user.id,
            ...req.body
          })
          return res.status(200).json({
            ok: true,
            massege: "Student Profile Creation Successfull!"
          })
        default:
          return res.status(401).json({
            ok: false,
            message: "Invalid Request",
          });
      }

    } catch (err) {
      // todo-------
    }
  },

  // ! GET CONTROLLERS
  // Get Own Profile Data
  getOwnProfile: async (req: Request, res: Response) => {
    try {
      if (!req.user) return res.status(404).json({
        ok: false,
        message: "Login required!"
      });
      switch (req.user.role) {
        case UserRole.STUDENT:
          const student = await profileServices.getStudentProfileById(req.user.id);
          return res.status(200).json(student);
        case UserRole.TUTOR:
          const tutor = await profileServices.getTutorProfileById(req.user.id);
          return res.status(200).json(tutor);
        default:
          return res.status(401).json({
            ok: false,
            message: "Invalid Request",
          });
      }
    } catch (err) {
      // todo-------
    }
  },
  // Get Student Profile Data by Id
  getStudentProfileById: async (req: Request, res: Response) => {
    try {
      const { profileId } = req.params;
      if (!profileId) throw new Error("Profile id required");
      const result = await profileServices.getStudentProfileById(profileId as string);
      if(!result){
        return res.status(404).json({
          ok: false,
          messange: "Student not found!"
        })
      }
      return res.status(200).json(result);
    } catch (err) {
      // todo
    }
  },
  // Get Tutor Profile Data by Id
  getTutorProfileById: async (req: Request, res: Response) => {
    try {
      const { profileId } = req.params;
      if (!profileId) throw new Error("Profile id required");
      const result = await profileServices.getTutorProfileById(profileId as string);
      if(!result){
        return res.status(404).json({
          ok: false,
          messange: "Tutor not found!"
        })
      }
      return res.status(200).json(result);
    } catch (err) {
      // todo
    }
  },

  // ! UPDATE CONTROLLERS
  // Update Own Profile Data
  updateOwnProfile: async (req: Request, res: Response) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          error: "Unauthorized!",
        });
      }
      switch (user.role) {
        case UserRole.STUDENT:
          // TODO: Request body validation
          await profileServices.upsertStudentProfileById(user.id, req.body);
          return res.status(200).json({
            ok: true,
            message: "Profile Updated Successfully",
          });
        case UserRole.TUTOR:
          // TODO: Request body validation
          await profileServices.updateTutorProfileById(user.id, req.body);
          return res.status(200).json({
            ok: true,
            message: "Profile Updated Successfull",
          });
        default:
          return res.status(401).json({
            ok: false,
            message: "Profile Update failed"
          });
      }
    } catch (err) {
      // todo
    }
  },
};
