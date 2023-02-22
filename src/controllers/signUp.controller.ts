import { Request, Response } from "express";
import { users } from "../protocols/index.js";
import usersServices from "../services/index.js";

export async function signUp (req:Request, res: Response){
    const {email, name, password}= res.locals.info as users;

    try{

        await usersServices.findEmailExists(email, name, password);
        res.status(201).send("created");
        return;

    } catch (err){
        console.log(err.message);
        res.status(err.status).send(err.message);
        }
}