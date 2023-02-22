import prisma from "../database/db.js";

async function findEmail(email: string){

    return prisma.users.findUnique({
        where:{
            email
        },
    })
}

async function createUser(email:string, name:string, password:string){
    return prisma.users.create({
        data:{
            email,
            name,
            password
        }
    })
}

const usersRepositories = {
    findEmail,
    createUser
}

export default usersRepositories