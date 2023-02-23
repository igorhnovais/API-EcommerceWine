import supertest from "supertest";
import app from "../../src/app";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";

import { cleanDb, init } from "../helper";

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

    it("should respond with status 409 when body is invalid", async() => {

        const unique = faker.lorem.word(6);
        const uniqueEmail = faker.internet.email()

        const body = {
            email: uniqueEmail,
            name: faker.lorem.word(),
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
                name: faker.lorem.word(),
                password: unique,
                confirmPassword: unique 
            };

            const response = await server.post("/sign-up").send(body);

            expect(response.status).toBe(httpStatus.CREATED);
        })
    });
});