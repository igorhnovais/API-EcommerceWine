import { Request, Response, NextFunction } from "express";
import { userSignUpSchema } from "../models/userSignUp.models.js";
import { findEmail } from "../repositories/findEmail.repository.js";
import { users } from "../protocols/index.js";

export async function emailValidation(req: Request, res: Response, next: NextFunction): Promise<void>{
    const infosNewUser = req.body as users;

    try{

        const {error} = userSignUpSchema.validate(infosNewUser, {abortEarly: false});

        if(error){
            const erros = error.details.map(detail => detail.message);
            res.status(422).send(erros);
            return;
        }

        const user = await findEmail(infosNewUser.email);
        
        if(user){
            res.sendStatus(409);
            return;
        }

        res.locals.info = infosNewUser;
        next();

    } catch (err){
        console.log(err.message);
        res.status(500).send('Server not running');
    }
}