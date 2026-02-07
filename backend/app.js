import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";

const app = express();

app.use(
    cors({
        origin: ["https://ai-powered-ecommerce-frontend.onrender.com", "https://ai-powered-ecommerce-7z2v.onrender.com"],
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/product", productRoutes)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter)

export { app }