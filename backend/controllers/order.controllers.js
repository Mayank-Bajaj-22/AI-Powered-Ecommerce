import Order from "../models/order.model.js";
import User from "../models/user.model.js";

export const PlaceOrder = async (req, res) => {
    try {
        console.log("===== PLACE ORDER DEBUG =====")
            console.log("USER ID:", req.userId)
            console.log("BODY:", req.body)
        const { items, amount , address } = req.body;
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized - No userId" });
        }

        const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()            
        }

        const newOrder = new Order(orderData);
        await newOrder.save()

        await User.findByIdAndUpdate(userId, { cartData: {} })

        return res.status(201).json({ message: "Order Place"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Order Place error'})
    }
}

export const UserOrders = async (req,res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({userId})
        return res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"userOrders error"})
    }
}

// admin
export const AllOrders = async (req,res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"adminAllOrders error"})
        
    }
}

export const UpdateStatus = async (req,res) => {    
    try {
        const {orderId , status} = req.body
        await Order.findByIdAndUpdate(orderId , { status })
        return res.status(201).json({message:'Status Updated'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}