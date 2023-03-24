import { Router } from "express";

import {postOneProduct} from "../controllers/cart/postOneProduct.controller";
import { getProductsCart } from "../controllers/cart/getProductsCart.controller";
import { deleteProductCart } from "../controllers/cart/deleteProductCart.controller";
import { authVerification } from "../middlewares/authVerification.middleware";


const router = Router();

router.post("/cart", authVerification, postOneProduct);
router.get("/cart", getProductsCart );
router.delete("/cart", deleteProductCart)


export default router;