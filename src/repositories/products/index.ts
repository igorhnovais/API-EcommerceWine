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

async function findWines(){
    return prisma.products.findMany({
        where:{
            type_product: "wine"
        }
    })
}

const productsRepositories = {
    findmanyProducts,
    findFirstProduct,
    findWines
}

export default productsRepositories;