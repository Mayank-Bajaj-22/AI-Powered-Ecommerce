import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { PlaceOrder, UserOrders } from "../controllers/order.controllers.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", isAuth, PlaceOrder)
orderRouter.post("/userorder", isAuth, UserOrders)

export default orderRouter