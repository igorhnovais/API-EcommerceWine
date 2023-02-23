import { Request, Response, NextFunction } from "express";
import { userSignUpSchema } from "../models/userSignUp.models";
import { users } from "../protocols/index";

export async function emailValidation(req: Request, res: Response, next: NextFunction): Promise<void>{
    const infosNewUser = req.body as users;

    try{

        const {error} = userSignUpSchema.validate(infosNewUser, {abortEarly: false});

        if(error){
            const erros = error.details.map(detail => detail.message);
            res.status(422).send(erros);
            return;
        }

        res.locals.info = infosNewUser;
        next();

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    }
}