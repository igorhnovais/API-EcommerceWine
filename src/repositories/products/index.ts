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

async function findCups(){
    return prisma.products.findMany({
        where:{
            type_product: "cup"
        }
    })
}

async function findTaboos(){
    return prisma.products.findMany({
        where:{
            type_product: "taboo"
        }
    })
}

async function findManySearchedProducts(search: string){
    return prisma.products.findMany({
        where:{
            name:{
                contains: search,
                mode: "insensitive"
            }
        }
    })
}

const productsRepositories = {
    findmanyProducts,
    findFirstProduct,
    findWines,
    findCups,
    findTaboos,
    findManySearchedProducts
}

export default productsRepositories;