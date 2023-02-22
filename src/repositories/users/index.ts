import prisma from "../../database/db.js";

async function findEmail(email: string){

    return await  prisma.users.findUnique({
        where:{
            email
        },
    })
}

async function createUser(email:string, name:string, password:string){
    
    return await prisma.users.create({
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