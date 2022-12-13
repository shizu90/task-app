import { FastifyInstance } from "fastify";
import { auth } from "../plugins/auth";
import { deleteProject, getProjectByProjectId, getProjectsByOwnerId, postProject, updateProject } from "../services/projectService";

export async function projectController(fastify: FastifyInstance) {
    fastify.get("/projects/all/:ownerId", {onRequest: [auth]}, async (request) => {
        const projects = await getProjectsByOwnerId(request);
        return { projects };
    });

    fastify.get("/projects/:id", {onRequest: [auth]}, async (request) => {
        const project = await getProjectByProjectId(request);
        return { project };
    });

    fastify.post("/projects", {onRequest: [auth]}, async (request, response) => {
        await postProject(request);
        return response.status(201).send("Project created.");
    });
    
    fastify.delete("/projects/:id", {onRequest: [auth]}, async (request, response) => {
        await deleteProject(request);
        return response.status(204).send("Project deleted.");
    });
    
    fastify.put("/projects/:id", {onRequest: [auth]}, async (request, response) => {
        await updateProject(request);
        return response.status(204).send("Project updated.");
    });
}