import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(400).json({message: "not authorized login again"})
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!verifyToken) {
            return res.status(400).json({message: "invalid token"})
        }
        
        req.adminEmail = process.env.ADMIN_EMAIL

        next()

    } catch (error) {
        return res.status(500).json({message: "adminAuth error"})
    }
}

export default adminAuth;
