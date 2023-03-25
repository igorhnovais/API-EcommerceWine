import { Router } from "express";

import { signUp } from "../controllers/users/signUp.controller";
import { signIn } from "../controllers/users/signIn.controller";
import { logOut } from "../controllers/users/logOut.controller";
import { emailValidation } from "../middlewares/emailValidation.middleware";
import { userValidation } from "../middlewares/userValidation.middleware";
import { authVerification } from "../middlewares/authVerification.middleware";


const router = Router();

router.post("/sign-up", emailValidation, signUp);
router.post("/sign-in", userValidation, signIn);
router.delete("/session", authVerification, logOut)

export default router;