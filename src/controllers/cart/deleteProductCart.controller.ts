import { Request, Response } from "express";
import productsService from "../../services/products";
import cartService from "../../services/carts";

export async function deleteProductCart(req:Request, res: Response){
    const {id} = req.body;
    const idProduct = Number(id);
    
    try{
        await cartService.deleteProductCart(idProduct);
        res.sendStatus(202);
    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}