import prisma from "../../database/db";
import { product } from "../../protocols/index";

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

async function deleteProduct(id: number){
    return prisma.products.delete({
        where:{
            id
        }
    })
}

async function insertProduct(body: product){
    return prisma.products.create({
        data:{
            name: body.name,
            image: body.image,
            description: body.description,
            type: body.type,
            value: Number(body.value),
            type_product: body.type_product
        }
    })
}

const productsRepositories = {
    findmanyProducts,
    findFirstProduct,
    findWines,
    findCups,
    findTaboos,
    findManySearchedProducts,
    deleteProduct,
    insertProduct
}

export default productsRepositories;