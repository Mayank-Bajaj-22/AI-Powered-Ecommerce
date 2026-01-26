import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcryptjs"
import { genToken } from "../config/token.js"

export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "user already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "enter valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "enter strong password" })
        }

        let hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashPassword });

        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7*24*60*60*1000,
        });

        return res.status(201).json({ message: "User created", user });

    } catch (error) {
        console.log("register error")
        return res.status(500).json({ message: `error in register controllers: ${error}` });
    }
}
