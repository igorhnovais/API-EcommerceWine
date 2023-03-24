import { Request, Response } from "express";
import cartService from "../../services/carts";

export async function getProductsCart(req:Request, res: Response){
    //const userId: number = res.locals.info
    const userId = 2;
    
    try{
        const products = await cartService.getAllProducts(userId);
        res.status(200).send(products)

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}