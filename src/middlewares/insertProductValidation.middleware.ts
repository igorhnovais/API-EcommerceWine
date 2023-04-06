import { Request, Response, NextFunction } from "express";
import { newProduct } from "../models/newProduct.models";
import { product } from "../protocols/index";

export async function insertProductValidation(req: Request, res: Response, next: NextFunction){
    const infoNewProduct = req.body as product;

    try{
        const {error} = newProduct.validate(infoNewProduct, {abortEarly: false});

        if (error){
            const erros = error.details.map(detail => detail.message);
            return res.status(422).send(erros);
        }

        res.locals.info = infoNewProduct;
        next();

    } catch (err){
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}