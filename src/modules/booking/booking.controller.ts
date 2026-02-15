import { Request, Response } from "express";
import { UserRole } from "../../../generated/prisma/enums";
import { bookingService } from "./booking.service";

export const bookingController = {
  // ! CREATE CONTROLLERS
  // Create Booking
  createBooking: async (req: Request, res: Response) => {
    try {
      const { user } = req;
      if (!user)
        return res.status(404).json({
          ok: false,
          message: "Login required!",
        });
      if (user.role !== UserRole.TUTOR)
        return res.status(401).json({
          ok: false,
          message: "Unauthorized!",
        });

      const payload = {
        tutorId: req.user!.id,
        tutorNote: (req.body.tutorNote as string) || "",
        startAt: new Date(req.body.startAt),
        endAt: new Date(req.body.endAt),
        fee: Number(req.body.fee) || 0,
      };
      const result = await bookingService.createBooking(payload);
      return res.status(200).json(result);
    } catch (err) {
      // todo -------
    }
  },

  // ! GET CONTROLLERS
  // Get All Open Bookings
  getAllOpenBookins: async (req: Request, res: Response) => {
    try {
      
    } catch(err) {
      // todo---------
    }
  },

  // ! UPDATE CONTROLLERS

};
