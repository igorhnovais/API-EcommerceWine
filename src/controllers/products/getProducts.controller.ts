import { Request, Response } from "express";

import productsService from "../../services/products"

export async function getProducts(req:Request, res: Response){
    try {

        const products = await productsService.findProduts();
        res.status(200).send(products);

        
    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}