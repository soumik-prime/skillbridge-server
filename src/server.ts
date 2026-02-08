import app from "./app";
import env_variable from "./config/env";
import { prisma } from "./lib/pisma"

const server = async() => {
  try{
    const { port } = env_variable;
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`Server is running in port: ${port}`);
    })
  } catch(err){
    await prisma.$disconnect();
    console.error("Server Crashed: ", err);
    process.exit(1);
  }
}

server();