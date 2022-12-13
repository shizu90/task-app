import { UserDto, UserRegistrationDto } from "../models/userDto";
import zod from "zod";
import { prisma } from "../db/prisma";
import { FastifyInstance, FastifyRequest } from "fastify";
import { encrypt } from "../modules/bcrypt";
import { exceptionObject } from "../modules/exception";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { User } from "@prisma/client";
import { compare } from "../modules/bcrypt";

async function validate(data: UserRegistrationDto) {
    const foundUserByUsername = await prisma.user.findFirst({where: {username: data.username}});
    const foundUserByEmail = await prisma.user.findFirst({where:{email: data.email}});
    if(foundUserByEmail) {
        throw exceptionObject("Email already in use.", 403);
    }else if(foundUserByUsername) {
        throw exceptionObject("Username already taken.", 403);
    }else if(data.password.length < 6 || data.password.length > 16) {
        throw exceptionObject("Invalid password.", 400);
    }else if(!data.confirmPassword.match(data.password)) {
        throw exceptionObject("Password confirmation don't match.", 400);
    }
}

export async function getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
}

export async function getUserById(request: FastifyRequest): Promise<UserDto> {
    const getParams = zod.object({
        id: zod.string()
    });

    const id = getParams.parse(request.params).id;
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    });
    if(user) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            imgUrl: user.imgUrl
        };
    }else {
        throw exceptionObject(`User ${id} not found.`, 404);
    }
}

export async function postUser(request: FastifyRequest) {
    const getBody = zod.object({
        username: zod.string(),
        email: zod.string(),
        password: zod.string(),
        confirmPassword: zod.string()
    });

    const user = getBody.parse(request.body);
    if(!user) throw exceptionObject("User not found.", 404);

    await validate(user);

    try {
        const createdUser = await prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: await encrypt(user.password),
                imgUrl: ""
            }
        });
        return createdUser.id;
    }catch(e) {
        if(e instanceof PrismaClientKnownRequestError) {
            throw exceptionObject(e.message, Number(e.code));
        }else {
            throw exceptionObject("Some error has occurred.", 500);
        }
    }
}

export async function deleteUser(request: FastifyRequest): Promise<void> {
    const getParams = zod.object({
        id: zod.string()
    });

    const id = getParams.parse(request.params).id;
    const foundUser = await prisma.user.findUniqueOrThrow({where: {id: id}});
    if(foundUser) {
        await prisma.user.delete({where: {id: id}});
    }
}

export async function updateUser(request: FastifyRequest): Promise<void> {
    const getParams = zod.object({
        id: zod.string()
    });
    const getBody = zod.object({
        username: zod.string() || zod.null(),
        email: zod.string() || zod.null(),
        password: zod.string() || zod.null()
    });

    const id = getParams.parse(request.params).id;
    const body = getBody.parse(request.body);
    const user = await prisma.user.findUnique({where: {id: id}});
    if(!user) throw exceptionObject("User not found.", 404);

    if(body.username === user.username && body.email === user.email && !body.password) return;

    await validate({
        username: body.username !== user.username ? body.username : "",
        email: body.email !== user.email ? body.email : "",
        password: body.password ? body.password : "",
        confirmPassword: body.password || ""
    });

    if(body.password !== null) {
        await prisma.user.update({where: {id: id}, data: {
            username: body.username ? body.username : user.username,
            email: body.email ? body.email : user.email,
            password: await encrypt(body.password)
        }});
    }else{
        await prisma.user.update({where: {id: id}, data: {
            username: body.username ? body.username : user.username,
            email: body.email ? body.email : user.email
        }})
    }
}

export async function login(request: FastifyRequest, fastify: FastifyInstance): Promise<string> {
    const getBody = zod.object({
        email: zod.string(),
        password: zod.string()
    });
    const body = getBody.parse(request.body);

    const foundByEmail = await prisma.user.findFirst({where: {email: body.email}});
    if(!foundByEmail) throw exceptionObject("Email not found.", 404);
    if(!await compare(body.password, foundByEmail.password)) throw exceptionObject("Invalid password.", 400);

    const token = fastify.jwt.sign({
        name: foundByEmail.username,
        imgUrl: foundByEmail.imgUrl
    }, {
        sub: foundByEmail.id,
        expiresIn: "7 days"
    });

    return token;
}