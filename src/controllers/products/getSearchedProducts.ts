import { Request, Response } from "express";
import productsService from "../../services/products";

export async function getSearchedProducts(req:Request, res: Response){
    const {search} = req.body;

    try{
        const products = await productsService.findSearchedProducts(search);
        res.status(200).send(products);
    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}