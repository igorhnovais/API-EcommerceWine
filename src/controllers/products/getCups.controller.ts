import { Request, Response } from "express";
import productsService from "../../services/products";

export async function getCups(req:Request, res: Response){
    try{
        const cup = await productsService.findOnlyCups();
        res.status(200).send(cup);

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}