import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../errors";
import sessionsRepositories from "../repositories/sessions";

export async function authVerification(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try{

        if (!authorization){
            throw unauthorizedError();
        }

        const session = await sessionsRepositories.findSession(token);

        if(!session){
            throw unauthorizedError();
        }
        
        res.locals.info = session.user_id
        next();

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}