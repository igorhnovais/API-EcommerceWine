import { faker } from "@faker-js/faker";
import prisma from "../../../src/database/db";
import bcrypt from "bcrypt";

async function createNewUser(params){

    const passOk = bcrypt.hashSync(params.password, 12);

    return await prisma.users.create({

        data:{
            email: params.email,
            name: faker.lorem.word(6),
            password: passOk
        }
    })

}

async function generateUser(){

    const body = {
        email: faker.internet.email(),
        password: faker.lorem.word(6)
    }

    return body;
}

async function createUser(body){

    const passwordReceived = body.password
    const hashedPassword = await bcrypt.hash(passwordReceived, 10);

    return prisma.users.create({
        data:{
            email: body.email,
            password: hashedPassword
        }
    })
}

const usersFactories = {
    generateUser,
    createUser, 
    createNewUser
}

export default usersFactories;