import supertest from "supertest";
import app from "../../src/app.js";

import { cleanDb, init } from "../helper";

beforeAll(async() => {
    await init();
})

beforeEach(async() => {
    await cleanDb();
});