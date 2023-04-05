import { Router } from "express";

import { signUp } from "../controllers/users/signUp.controller";
import { signIn } from "../controllers/users/signIn.controller";
import { logOut } from "../controllers/users/logOut.controller";
import { emailValidation } from "../middlewares/emailValidation.middleware";
import { userValidation } from "../middlewares/userValidation.middleware";
import { authVerification } from "../middlewares/authVerification.middleware";
import { getAdm } from "../controllers/users/getAdm.controller";
import { deleteProductAdm } from "../controllers/users/deleteProductAdm";


const router = Router();

router.post("/sign-up", emailValidation, signUp);
router.post("/sign-in", userValidation, signIn);
router.delete("/session", authVerification, logOut);
router.get("/adm", authVerification, getAdm);
router.delete("/adm/:id", deleteProductAdm)

export default router;