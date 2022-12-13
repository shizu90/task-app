import { FastifyInstance } from "fastify";
import { auth } from "../plugins/auth";
import { deleteTask, getTasksByProjectId, postTask, updateTask } from "../services/taskService";

export async function taskController(fastify: FastifyInstance) {
    fastify.get("/tasks/:projectId", {onRequest: [auth]}, async (request) => {
        const tasks = await getTasksByProjectId(request);
        return { tasks };
    });

    fastify.post("/tasks", {onRequest: [auth]}, async (request, response) => {
        await postTask(request);
        return response.status(201).send("Task created.");
    });

    fastify.put("/tasks/:id", {onRequest: [auth]}, async (request, response) => {
        await updateTask(request);
        return response.status(204).send("Task updated.");
    });

    fastify.delete("/tasks/:id", {onRequest: [auth]}, async (request, response) => {
        await deleteTask(request);
        return response.status(204).send("Task deleted.");
    });
}