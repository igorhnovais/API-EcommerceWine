import { Request, Response } from "express";
import cartService from "../../services/carts";

export async function getBalanceProducts(req:Request, res: Response){
    const userId: number = res.locals.info;
    //const userId = 2

    try{

        const balance = await cartService.getBalanceCart(userId);
        res.status(200).send(balance);

    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}