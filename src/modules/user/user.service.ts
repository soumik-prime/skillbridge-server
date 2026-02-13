import { prisma } from "../../lib/prisma"

export const userServices = {
  // ! GET SERVICES
  // Get User Informations by Id
  getUserById: async(id: string) => {
    return await prisma.user.findUnique({
      where:{ id }
    })
  },
  // Get All User Infomation
  getAllUser: async () => {
    return await prisma.user.findMany();
  },

  // ! UPDATE SERVICES
  // Update Name and Image of a Specific User
  updateUserById: async(
    id: string,
    payload: {
      name?: string,
      image?: string
    }
  ) => {
    return await prisma.user.update({
      where: { id },
      data: payload
    })
  },
  // Ban or Unban User by Id
  updateBanStatusById: async(id: string, isBanned: boolean) => {
    return await prisma.user.update({
      where: { id },
      data: { isBanned }
    })
  },

}