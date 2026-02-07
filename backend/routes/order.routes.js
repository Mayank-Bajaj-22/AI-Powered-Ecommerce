import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { PlaceOrder } from "../controllers/order.controllers.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", isAuth, PlaceOrder)

export default orderRouter