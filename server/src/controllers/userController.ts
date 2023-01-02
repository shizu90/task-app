import { FastifyInstance } from "fastify";
import { auth } from "../plugins/auth";
import { deleteUser, getUserById, getUsers, login, postUser, updateUser } from "../services/userService";

export async function userController(fastify: FastifyInstance) {
    fastify.get("/users", {onRequest: [auth]}, async () => {
        const users = await getUsers();
        return { users };
    });

    fastify.get("/users/:id", {onRequest: [auth]}, async (request) => {
        const user = await getUserById(request).then(user => {return user;});
        return { user };
    });

    fastify.post("/users", async (request, response) => {
        const id = await postUser(request);
        return response.status(201).send(`User ${id} created.`);
    });

    fastify.post("/users/login", async (request) => {
        const token = await login(request, fastify);
        return token;
    });

    fastify.delete("/users/:id", {onRequest: [auth]}, async (request, response) => {
        await deleteUser(request);
        return response.status(204).send("User deleted.");
    });

    fastify.put("/users/:id", {onRequest: [auth]}, async (request, response) => {
        await updateUser(request);

        return response.status(204).send("User updated.");
    });
}