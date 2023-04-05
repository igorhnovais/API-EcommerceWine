import { Request, Response } from "express";
import usersServices from "../../services/users";

export async function deleteProductAdm(req:Request, res: Response){
    const {id} = req.params;
    const idProduct = Number(id);
    
    try{
        await usersServices.deleteProductByAdm(idProduct);
        res.sendStatus(202);
    } catch (err) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
}