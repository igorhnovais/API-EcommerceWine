import prisma from "../../database/db";

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

async function findNameUser(user_id: number){
    const response =  await prisma.users.findFirst({
        where:{
            id: user_id
        }
    })

    return response.name
}

const usersRepositories = {
    findEmail,
    createUser,
    findNameUser
}

export default usersRepositories