import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { addToCart, getUserCart, UpdateCart } from "../controllers/cart.controllers.js";

const cartRouter = express.Router()

cartRouter.post('/get', isAuth, getUserCart)
cartRouter.post('/add', isAuth, addToCart)
cartRouter.post('/update', isAuth, UpdateCart)

export default cartRouter