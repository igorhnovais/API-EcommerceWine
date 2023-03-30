import { Request, Response } from "express";
import productsService from "../../services/products";

export async function getTaboos(req:Request, res: Response){
    try {
        const taboo = await productsService.findOnlyTaboos();
        res.status(200).send(taboo);

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}