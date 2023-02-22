import prisma from "../../database/db.js";

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

const sessionsRepositories = {
    upsertToken
}

export default sessionsRepositories;