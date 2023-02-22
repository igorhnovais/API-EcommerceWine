import prisma from "../database/db.js";

export async function findEmail(email: string){

    return prisma.users.findUnique({
        where:{
            email
        },
    })
}