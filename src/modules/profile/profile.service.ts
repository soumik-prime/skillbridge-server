import { prisma } from "../../lib/prisma";

export const profileServices = {
  // ! CREATE SERVICES
  // Create Student Profile
  createStudentProfile: async (payload: { id: string; bios: string }) => {
    return await prisma.studentProfile.create({
      data: { ...payload },
    });
  },
  // Create Tutor Profile
  createTutorProfile: async (payload: {
    id: string;
    categoryId: string;
    bios: string;
    affiliation: string;
    experience: number;
  }) => {
    return await prisma.tutorProfile.create({
      data: { ...payload },
    });
  },

  // ! GET SERVICES
  // Get Student Profile
  getStudentProfileById: async (id: string) => {
    return await prisma.studentProfile.findUnique({
      where: { id },
    });
  },
  // Get Tutor Profile
  getTutorProfileById: async (id: string) => {
    return await prisma.tutorProfile.findUnique({
      where: { id },
    });
  },
  // Get All Student Profiles
  getAllStudentProfile: async () => {
    return await prisma.studentProfile.findMany();
  },
  // Get All Tutor Profile
  getAllTutorProfile: async () => {
    return await prisma.tutorProfile.findMany();
  },

  // ! UPDATE SERVICES
  // Update Student Profile
  upsertStudentProfileById: async (
    id: string,
    payload: {
      bios?: string;
    },
  ) => {
    // console.log(payload);
    return await prisma.studentProfile.update({
      where: { id },
      data: { id, ...payload },
    });
  },
  // Update Tutor Profile
  updateTutorProfileById: async (
    id: string,
    payload: {
      categoryId?: string;
      bios?: string;
      affiliation?: string;
      experience?: number;
    },
  ) => {
    return await prisma.tutorProfile.update({
      where: { id },
      data: { id, ...payload },
    });
  },
};
