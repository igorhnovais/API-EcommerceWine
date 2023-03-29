import supertest from "supertest";
import app from "../../src/app";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";

import { cleanDb, init } from "../helper";
import productsFactory from "../factories/products.factory.ts";
import cartsFactory from "../factories/cart.factory.ts";
import usersFactories from "../factories/users.factory.ts";

beforeAll(async() => {
    await init();
});

beforeEach(async() => {
    await cleanDb();
});

const server = supertest(app);

describe("GET /cart", () => {

    it("should respond with status 401 if no token is given", async () => {
        const response = await server.get("/cart");
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();
        const response = await server.get("/cart").set("Authorization", `Bearer ${token}`);
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe("when token is valid", () => {

        // it("should response status 200 with cart data", async () => {
        //     const body = await usersFactories.generateUser();          
        //     await usersFactories.createNewUser(body);

        //     const oi = await server.post("/sign-in").send(body);
    
        //     await cartsFactory.createOneProductCart();

        //     const response = await server.get("/cart").set("Authorization", `Bearer ${oi.body.token}`);
        //     expect(response.status).toBe(httpStatus.OK);
        //     expect(response.body).toEqual(
        //         expect.arrayContaining([
        //             expect.objectContaining({
        //                 id: expect.any(Number),
        //                 user_id: expect.any(Number),
        //                 product_id: expect.any(Number),
        //                 status: expect.any(String),
        //                 inserted: expect.any(String),
        //                 products: {
        //                     id:expect.any(Number),
        //                     name: expect.any(String),
        //                     image: expect.any(String),
        //                     description: expect.any(String),
        //                     type: expect.any(String),
        //                     alcohol: expect.any(String),
        //                     value: expect.any(Number),
        //                     type_product: expect.any(String)
        //                 }
        //             })
        //         ])
        //     );
        // });

        // it("should response status 200 with cart data empty", async () => {
        //     const body = await usersFactories.generateUser();          
        //     await usersFactories.createNewUser(body);

        //     const user = await server.post("/sign-in").send(body);
        //     const token = user.body.token;

        //     const response = await server.get("/cart").set("Authorization", `Bearer ${token}`);
        //     expect(response.status).toBe(httpStatus.OK);
        //     expect(response.body).toEqual(
        //         expect.arrayContaining([])
        //     );

        // });

    })
});

describe("POST /cart", () => {

    it("should respond with status 401 if no token is given", async () => {
        const response = await server.post("/cart");
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();
        const response = await server.post("/cart").set("Authorization", `Bearer ${token}`);
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe("when token is valid", () => {
        it("should respond with status 201 when created new product cart", async () => {
            
        });
    });
});