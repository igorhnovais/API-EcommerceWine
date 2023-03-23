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
        }
    })
}

const cartsRepositories = {
    addProduct,
    findManyProductsCart
};

export default cartsRepositories;