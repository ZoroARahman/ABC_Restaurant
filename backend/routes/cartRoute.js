import express from "express"
import {addToCart, getCart, removeFormCart} from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter=express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFormCart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;