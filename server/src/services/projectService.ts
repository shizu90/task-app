import { Project } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { FastifyRequest } from "fastify";
import zod from "zod";
import { prisma } from "../db/prisma";
import { exceptionObject } from "../modules/exception";

export async function getProjectsByOwnerId(request: FastifyRequest): Promise<Project[]> {
    const getParams = zod.object({
        ownerId: zod.string()
    });
    const id = getParams.parse(request.params).ownerId;
    const projects = await prisma.project.findMany({where: {userId: id}});

    return projects;
}

export async function getProjectByProjectId(request: FastifyRequest): Promise<Project> {
    const getParams = zod.object({
        id: zod.string()
    });
    const id = getParams.parse(request.params).id;
    const project = await prisma.project.findUnique({where: {id: id}});
    if(!project) throw exceptionObject(`Project ${id} not found.`, 404);

    return project;
}

export async function postProject(request: FastifyRequest): Promise<void> {
    const getBody = zod.object({
        title: zod.string(),
        description: zod.string(),
        userId: zod.string()
    });
    const body = getBody.parse(request.body);

    const user = await prisma.user.findUnique({where: {id: body.userId}});
    if(!user) throw exceptionObject(`User ${body.userId} not found.`, 404);

    try {
        await prisma.project.create({
            data: {
                title: body.title,
                description: body.description,
                userId: body.userId
            }
        }); 
    }catch(e) {
        if(e instanceof PrismaClientKnownRequestError) {
            throw exceptionObject(e.message, Number(e.code));
        }else {
            throw exceptionObject("Some error has occurred.", 500);
        }
    }
}

export async function deleteProject(request: FastifyRequest): Promise<void> {
    const getParams = zod.object({
        id: zod.string()
    });
    const id = getParams.parse(request.params).id;
    const project = await prisma.project.findUnique({where: {id: id}});
    if(!project) throw exceptionObject(`Project ${id} not found.`, 404);
    
    try {
        await prisma.project.delete({where: {id: id}});
    }catch(e) {
        if(e instanceof PrismaClientKnownRequestError) {
            throw exceptionObject(e.message, Number(e.code));
        }else {
            throw exceptionObject("Some error has occurred.", 500);
        }
    }
}

export async function updateProject(request: FastifyRequest): Promise<void> {
    const getParams = zod.object({
        id: zod.string()
    });
    const getBody = zod.object({
        title: zod.string(),
        description: zod.string()
    });
    const id = getParams.parse(request.params).id;
    const body = getBody.parse(request.body);
    const project = await prisma.project.findUnique({where: {id: id}});
    if(!project) throw exceptionObject(`Project ${id} not found.`, 404);

    try {
        await prisma.project.update({where: {
            id: id
        }, data: {
            title: body.title,
            description: body.description
        }});
    }catch(e) {
        if(e instanceof PrismaClientKnownRequestError) {
            throw exceptionObject(e.message, Number(e.code));
        }else {
            throw exceptionObject("Some error has occurred.", 500);
        }
    }

}