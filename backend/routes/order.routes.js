import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { AllOrders, PlaceOrder, placeOrderRazorpay, UpdateStatus, UserOrders } from "../controllers/order.controllers.js";
import adminAuth from "../middlewares/adminAuth.js";

const orderRouter = express.Router();

// user
orderRouter.post("/placeorder", isAuth, PlaceOrder)
orderRouter.post("/razorpay", isAuth, placeOrderRazorpay)
orderRouter.post("/userorder", isAuth, UserOrders)

// admin
orderRouter.post("/list", adminAuth, AllOrders)
orderRouter.post("/status", adminAuth, UpdateStatus)

export default orderRouter;