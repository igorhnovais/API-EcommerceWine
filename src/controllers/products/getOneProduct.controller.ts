import { Request, Response } from "express";
import productsService from "../../services/products";

export async function getOneProduct(req:Request, res: Response){
    const {id} = req.params;
    const idProduct = Number(id);

    try{
        const oneProduct = await productsService.findOneProduct(idProduct);
        res.send(oneProduct);

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}