import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcryptjs"
import { genToken } from "../config/token.js"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
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
            sameSite: "none",
            maxAge: 7*24*60*60*1000,
        });

        return res.status(201).json({ message: "User created", user });

    } catch (error) {
        console.log("register error")
        return res.status(500).json({ message: `error in register controllers: ${error}` });
    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "incorrect password"});
        }

        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7*24*60*60*1000,
        });

        return res.status(201).json({ message: "user login successfully", user });  

    } catch (error) {
        console.log("login error")
        return res.status(500).json({ message: `error in login controllers: ${error}` });
    }
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            sameSite: true,
            secure: true
        })

        return res.status(200).json({ message: "logout successfully"})
        
    } catch (error) {
        console.log("logOut error")
        return res.status(500).json({ message: `error in logOut controllers: ${error}` });
    }
}

export const googleLogin = async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log("📦 Google Auth received:", req.body);
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                name, email
            })
        }

        const token = await genToken(user._id)

        res.cookie("token", token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000,
            httpOnly: true 
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json(`google auth error ${error}`)
    }
}