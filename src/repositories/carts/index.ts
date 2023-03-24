import { truncate } from "fs";
import prisma from "../../database/db";

async function addProduct(user_id: number, id:number){
    return prisma.cart.create({
        data:{
            user_id,
            product_id: id,
            status: "reserved"
        }
    })
}

async function findManyProductsCart(id: number){
    return prisma.cart.findMany({
        where:{
            user_id: id
        },
        include:{
            products: true
        }
    })
}

async function deleteProduct(idCart:number){
    return prisma.cart.delete({
        where:{
            id: idCart
        }
    })
}

async function findFirstproductCart(id: number){
    return prisma.cart.findFirst({
        where:{
            id
        }
    })
}

const cartsRepositories = {
    addProduct,
    findManyProductsCart,
    deleteProduct, 
    findFirstproductCart
};

export default cartsRepositories;