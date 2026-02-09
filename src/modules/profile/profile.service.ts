import { prisma } from "../../lib/prisma";

export const profileServices = {
  getStudentProfileById: async (id: string) => {
    return await prisma.studentProfile.findUnique({
      where: {
        id: id,
      },
    });
  },

  createStudentProfileByid: async() => {
    
  }
};
