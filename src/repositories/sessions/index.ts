import prisma from "../../database/db";

async function upsertToken(idUser: number, newToken: string){
    
    return await prisma.session.upsert({
        where:{
            user_id: idUser
        },
        update:{
            token: newToken
        },
        create:{
            user_id: idUser,
            token: newToken
        },
    }) 
}

async function findSession(token:string){
    return prisma.session.findFirst({
        where:{
            token
        }
    })
}

const sessionsRepositories = {
    upsertToken,
    findSession
}

export default sessionsRepositories;