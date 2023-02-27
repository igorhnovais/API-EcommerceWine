import supertest from "supertest";
import app from "../../src/app";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";

import { cleanDb, init } from "../helper";
import usersFactories from "../factories/users.factory.ts";

beforeAll(async() => {
    await init();
});

beforeEach(async() => {
    await cleanDb();
})

const server = supertest(app);

describe("POST /sign-up", () => {
    it("should respond with status 422 when body is not given", async() =>{
        const response = await server.post("/sign-up");
        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it("should respond with status 409 when email exists yet", async() => {

        const unique = faker.lorem.word(6);
        const uniqueEmail = faker.internet.email()

        const body = {
            email: uniqueEmail,
            name: faker.lorem.word(3),
            password: unique,
            confirmPassword:unique 
        }

        await server.post("/sign-up").send(body);
        const response = await server.post("/sign-up").send(body);

        expect(response.status).toBe(httpStatus.CONFLICT);
    });

    describe("when the body is valid", () => {
        it("should respond 201 when inserted user", async () => {

            const unique = faker.lorem.word(6);

            const body = {
                email: faker.internet.email(),
                name: faker.lorem.word(6),
                password: unique,
                confirmPassword: unique 
            };

            const response = await server.post("/sign-up").send(body);

            expect(response.status).toBe(httpStatus.CREATED);
        })
    });
});

describe("POST /sign-in", () => {
    it("should respond with status 422 when body is not given", async() =>{
        const response = await server.post("/sign-in");
        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    describe("when the body is valid", () => {
        it("should respond with status 401 if there is no user for given email", async() => {
            const body = await usersFactories.generateUser();
    
            const response = await server.post("/sign-in").send(body);
    
            expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    
        });

        it("should respond with status 401 if there is a user for given email but password is not correct", async() => {
            const body = await usersFactories.generateUser();
            await usersFactories.createUser(body);

            const response = await server.post("/sign-in").send({...body, password: faker.internet.password(6)});
            expect(response.status).toBe(httpStatus.UNAUTHORIZED);
        });

        it("should respond with status 200 when user and password is correct", async() => {
            const body = await usersFactories.generateUser();          
            await usersFactories.createNewUser(body);

            const response = await server.post("/sign-in").send(body);
            expect(response.status).toBe(httpStatus.OK)
        });

        it("should respond with session token", async() => {
            const body = await usersFactories.generateUser();          
            await usersFactories.createNewUser(body);

            const response = await server.post("/sign-in").send(body);
    
            expect(response.body.token).toEqual(expect.any(String));
        });

    });

    
});