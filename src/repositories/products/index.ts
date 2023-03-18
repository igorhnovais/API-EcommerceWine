import prisma from "../../database/db";

async function findmanyProducts(){
    return prisma.products.findMany();
}

async function findFirstProduct(idProduct: number){
    return prisma.products.findFirst({
        where:{
            id: idProduct
        }      
    })
}

const productsRepositories = {
    findmanyProducts,
    findFirstProduct
}

export default productsRepositories;