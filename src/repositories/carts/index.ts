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

const cartsRepositories = {
    addProduct
};

export default cartsRepositories;