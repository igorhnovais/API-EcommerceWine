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

async function findSessionIdUser(id: number){
    return prisma.session.findFirst({
        where:{
            user_id: id
        }
    })
}

async function deleteSession(id: number){
    return prisma.session.delete({
        where:{
            user_id: id
        }
    })
}

const sessionsRepositories = {
    upsertToken,
    findSession,
    findSessionIdUser,
    deleteSession
}

export default sessionsRepositories;