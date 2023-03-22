import supertest from "supertest";
import app from "../../src/app";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";

import { cleanDb, init } from "../helper";
import productsFactory from "../factories/products.factory.ts";

beforeAll(async() => {
    await init();
});

beforeEach(async() => {
    await cleanDb();
});

const server = supertest(app);

describe("GET /products", () => {
    it("should response with status 200 and a list of products", async () => {
        
        await productsFactory.createProduct();
        const response = await server.get("/products"); 

        expect(response.status).toEqual(httpStatus.OK);
        expect(response.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(Number),
                image: expect.any(String),
                name: expect.any(String),
                description: expect.any(String),
                type: expect.any(String),
                alcohol: expect.any(String),
                value: expect.any(Number),
                type_product: expect.any(String)
            })
        ]))
    });
});

describe("GET /product/:id", () => {
    it("should response with status 400 if dont have id", async () => {
        const response = await server.get("/product/:id");
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should response with status 404 if the product not found", async () => {
        const response = await server.get("/product/123456789");
        expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    describe("when the body is valid", () => {
        it("should response with status 200 when found the product", async () => {
            const product = await productsFactory.createProduct();
            const response = await server.get(`/product/${product.id}`)

            expect(response.status).toEqual(httpStatus.OK);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    description: product.description,
                    type: product.type,
                    alcohol: product.alcohol,
                    value: product.value,
                    type_product: product.type_product
                })
            )

        });

    });
});