import { faker } from "@faker-js/faker";
import prisma from "../../../src/database/db";

async function  createOneProductCart(){
    return prisma.cart.create({
        data:{
            user_id: 1,
            product_id: 1,
            status: "reserved"
        }
    })
}

const cartsFactory = {
    createOneProductCart
}

export default cartsFactory;