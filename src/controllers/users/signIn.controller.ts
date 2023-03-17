import { Request, Response } from "express";
import usersServices from "../../services/users/index";
import { users } from "../../protocols/index";

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