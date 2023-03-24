import { Router } from "express";

import {postOneProduct} from "../controllers/cart/postOneProduct.controller";
import { getProductsCart } from "../controllers/cart/getProductsCart.controller";
import { authVerification } from "../middlewares/authVerification.middleware";


const router = Router();

router.post("/cart", authVerification, postOneProduct);
router.get("/cart", getProductsCart )


export default router;