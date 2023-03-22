import { faker } from "@faker-js/faker";
import prisma from "../../../src/database/db";

async function createProduct(){
    return prisma.products.create({
        data:{
            image: faker.image.imageUrl(),
            name: faker.lorem.word(),
            description: faker.lorem.words(),
            type: faker.lorem.word(),
            alcohol: faker.lorem.word(),
            value: 100,
            type_product: "wine"
        }
    })
}

const productsFactory = {
    createProduct
}

export default productsFactory;
