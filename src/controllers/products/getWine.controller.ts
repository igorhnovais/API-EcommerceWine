import { Request, Response } from "express";
import productsService from "../../services/products";

export async function getwine(req:Request, res: Response){
    try{
        const wine = await productsService.findOnlyWines();
        res.status(200).send(wine);

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}