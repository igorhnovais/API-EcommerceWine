import { Router } from "express";

import {postOneProduct} from "../controllers/cart/postOneProduct.controller";
import { getProductsCart } from "../controllers/cart/getProductsCart.controller";
import { deleteProductCart } from "../controllers/cart/deleteProductCart.controller";
import { authVerification } from "../middlewares/authVerification.middleware";
import { getBalanceProducts } from "../controllers/cart/getBalanceProducts.controller"


const router = Router();

router.all("/*", authVerification);
router.post("/cart", postOneProduct);
router.get("/cart", getProductsCart );
router.delete("/cart/:id", deleteProductCart);
router.get("/cart-balance", getBalanceProducts);


export default router;