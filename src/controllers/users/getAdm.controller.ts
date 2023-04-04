import { Request, Response } from "express";
import usersServices from "../../services/users";

export async function getAdm(req:Request, res: Response){
    const userId: number = res.locals.info;

    try {
        const adm = await usersServices.findAdmTrue(userId);
        res.status(200).send(adm)

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}