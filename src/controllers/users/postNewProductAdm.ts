import { Request, Response } from "express";
import productsService from "../../services/products";
import { product } from "../../protocols/index";

export async function postNewProductAdm(req: Request, res:Response){
    const product = res.locals.info as product;

    try{
        await productsService.insertNewProductByAdm(product);
        res.status(201).send("inserted");
    } catch (err){
        console.log(err.message);
        res.status(err.status).send(err.message);
    } 
}