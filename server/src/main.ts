import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { userController } from "./controllers/userController";
import { projectController } from "./controllers/projectController";
import { taskController } from "./controllers/taskController";

async function bootstrap() {
    const fastify = Fastify({
        logger: true
    });

    await fastify.register(cors, {
        origin: true
    });

    await fastify.register(jwt, {
        secret: process.env.JWT_PASSWORD as string
    });

    await fastify.register(userController);
    await fastify.register(projectController);
    await fastify.register(taskController);
    
    await fastify.listen({ port: 3333 });
}

bootstrap();