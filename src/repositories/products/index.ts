import prisma from "../../database/db";

async function findmanyProducts(){
    return prisma.products.findMany();
}

const productsRepositories = {
    findmanyProducts
}

export default productsRepositories;