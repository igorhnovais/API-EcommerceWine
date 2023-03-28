import { Router } from "express";
import { webhook } from "../controllers/webhook/index";
const webhookRouter = Router();

webhookRouter.post("/", webhook);

export { webhookRouter };