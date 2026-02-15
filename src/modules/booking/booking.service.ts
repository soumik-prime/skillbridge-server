import { bookingStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

export const bookingService = {
  // ! CREATE SERVICES
  // Create booking
  createBooking: async (payload: {
    tutorId: string;
    tutorNote: string;
    startAt: Date;
    endAt: Date;
    fee: number;
  }) => {
    return await prisma.booking.create({
      data: {
        ...payload,
        status: bookingStatus.OPEN,
      },
    });
  },

  // ! GET SERVICES
  // Get a Specific Booking By Id
  getBookingById: async (id: string) => {
    return await prisma.booking.findUnique({
      where: { id },
    });
  },
  getAllBookings: async () => {
    return await prisma.booking.findMany();
  },

  // ! UPDATE SERVICES
  // Add Student who Wants to Book the session
  addStudentInfo: async (
    bookingId: string,
    studentinfo: {
      studentId: string;
      studentNote?: string;
    },
  ) => {
    const check = await prisma.booking.findUnique({
      where: { id: bookingId },
    });
    if (!check) throw new Error("Booking Not Found");
    if (check.studentId) throw new Error("Student Info Already Exist");
    else
      return await prisma.booking.update({
        where: { id: bookingId },
        data: {
          ...studentinfo,
          status: bookingStatus.BOOKED,
        },
      });
  },
  // Cancel Booking By Id
  cancelBookingById: async (id: string) => {
    return await prisma.booking.update({
      where: { id },
      data: {
        status: bookingStatus.CANCELED,
      },
    });
  },
  // Update Status as Expire if Current Time is greater then Start At
  statusUpdateAsExpiredById: async (id: string) => {
    return await prisma.booking.update({
      where: { id },
      data: {
        status: bookingStatus.EXPIRED,
      },
    });
  },
};
