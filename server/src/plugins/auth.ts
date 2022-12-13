import { FastifyRequest } from "fastify";

export async function auth(request: FastifyRequest) {
    await request.jwtVerify();
}