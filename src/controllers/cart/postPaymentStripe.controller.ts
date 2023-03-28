import { Request, Response } from "express";
import cartService from "../../services/carts";

export async function postPaymentStripe(req:Request, res: Response){
    const userId: number = res.locals.info;

    try {
        const sessionUrl = await cartService.paymentWithStripe(userId);
        res.send(sessionUrl).status(201);
      } catch (error) {
        if (error.name === "RequestError") {
          res.sendStatus(500);
        }
      }
}