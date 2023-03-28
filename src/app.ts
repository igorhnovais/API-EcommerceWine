import express from 'express';
import cors from "cors";

import userRouters from "./routes/user.route";
import productsRouters from "./routes/products.route";
import cartsRouter from "./routes/cart.route";
import { webhookRouter } from './routes/webhook.route';

const app = express();
app.use(cors());
app.use("/webhook", express.raw({ type: "application/json" }), webhookRouter)
app.use(express.json());

app.use(userRouters);
app.use(productsRouters);
app.use(cartsRouter);



export default app;