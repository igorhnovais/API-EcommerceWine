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
            password,
            adm: false
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

async function findAdmPermission(id: number){
    const response = await prisma.users.findFirst({
        where:{
            id
        }
    })

    return response.adm
}

const usersRepositories = {
    findEmail,
    createUser,
    findNameUser,
    findAdmPermission
}

export default usersRepositories