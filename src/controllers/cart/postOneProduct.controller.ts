import { Request, Response } from "express";
import cartService from "../../services/carts";
import productsService from "../../services/products";

export async function postOneProduct(req:Request, res: Response){
    const {id} = req.body;
    const idProduct = Number(id);

    const userId: number = res.locals.info

    try {
        await productsService.findOneProduct(idProduct); // verificação se existe ou se mandou algo

        await cartService.postOneCart(userId, idProduct)
        res.status(201).send("inserted");
        return;

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}