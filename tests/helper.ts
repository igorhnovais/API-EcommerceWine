import prisma from "../src/database/db";
import { Express } from "express";
import app from "../src/app";


export function init(): Promise<Express> {
    return Promise.resolve(app);
}

export async function cleanDb() {
    await prisma.session.deleteMany({});
    await prisma.users.deleteMany({});
    await prisma.products.deleteMany({});
    await prisma.cart.deleteMany({});
}
