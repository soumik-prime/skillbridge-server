import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../../generated/prisma/client";
import env_variable from "../config/env";
// import { PrismaClient } from '@/generated/prisma/client';

const connectionString = env_variable.db_url;

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }