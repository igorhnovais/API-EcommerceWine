import { Request, Response, NextFunction } from "express";
import { userSignInSchema } from "../models/userSignin.models";
import { users } from "../protocols/index";


export async function userValidation(req: Request, res: Response, next: NextFunction){
    const infoUser = req.body as users;

    try{

        const {error} = userSignInSchema.validate(infoUser, {abortEarly: false});

        if (error){
            const erros = error.details.map(detail => detail.message);
            return res.status(422).send(erros);
        }

        next();

    } catch(err){

        console.log(err.message)
        res.status(err.status).send(err.message)
    }
}