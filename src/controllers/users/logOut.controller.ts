import { Request, Response } from "express";
import usersServices from "../../services/users";

export async function logOut(req: Request, res:Response){
    const userId: number = res.locals.info;

    try{
        await usersServices.deleteUserSession(userId);
        res.sendStatus(200);
        return;
    } catch (err){
        console.log(err.message);
        res.status(err.status).send(err.message);
    }  
}