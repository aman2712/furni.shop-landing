import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
const router = express.Router();
import { checkToken, checkAdmin } from "../middlewares/authMiddleware.js";

router.route("/").post(checkToken, checkAdmin, addProduct).get(getProducts);

export default router;
