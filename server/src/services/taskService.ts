import { Task } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { FastifyRequest } from "fastify";
import zod from "zod";
import { prisma } from "../db/prisma";
import { exceptionObject } from "../modules/exception";

export async function getTasksByProjectId(request: FastifyRequest): Promise<Task[]> {
    const getParams = zod.object({
        projectId: zod.string()
    });
    const id = getParams.parse(request.params).projectId;
    const tasks = await prisma.task.findMany({where: {projectId: id}});

    return tasks;
}

export async function postTask(request: FastifyRequest): Promise<void> {
    const getBody = zod.object({
        content: zod.string(),
        projectId: zod.string(),
        status: zod.number()
    });
    const body = getBody.parse(request.body);
    const status = 
        body.status < 0 ? 0 :
        body.status > 3 ? 3 : body.status; 
    try {
        await prisma.task.create({
            data: {
                content: body.content,
                projectId: body.projectId,
                status: status
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

export async function updateTask(request: FastifyRequest): Promise<void> {
    const getParams = zod.object({
        id: zod.string()
    });
    const getBody = zod.object({
        content: zod.string(),
        status: zod.number()
    });
    const id = getParams.parse(request.params).id;
    const body = getBody.parse(request.body);
    const task = await prisma.task.findUnique({where: {id: id}});
    if(!task) throw exceptionObject(`Task ${id} not found.`, 404);

    const status = 
        body.status < 0 ? 0 :
        body.status > 3 ? 3 : body.status;
 
    try {
        await prisma.task.update({
            where: {id: id},
            data: {
                content: body.content,
                status: status
            }
        })
    }catch(e) {
        if(e instanceof PrismaClientKnownRequestError) {
            throw exceptionObject(e.message, Number(e.code));
        }else {
            throw exceptionObject("Some error has occurred.", 500);
        }
    }
}

export async function deleteTask(request: FastifyRequest) {
    const getParams = zod.object({
        id: zod.string()
    });
    const id = getParams.parse(request.params).id;
    try {
        await prisma.task.delete({where: {id: id}});
    }catch(e) {
        if(e instanceof PrismaClientKnownRequestError) {
            throw exceptionObject(e.message, Number(e.code));
        }else {
            throw exceptionObject("Some error has occurred.", 500);
        }
    }
}