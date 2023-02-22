import { Request, Response } from "express";
import usersServices from "../../services/index.js";
import { users } from "../../protocols/index.js";

export async function signIn(req: Request, res:Response){

    const {email, password} = req.body as users;

    try{
        
        const token = await usersServices.findUserRegistration(email, password);
        res.status(200).send(token);

    } catch (err){
        console.log(err.message);
        res.status(err.status).send(err.message);
    }  
}