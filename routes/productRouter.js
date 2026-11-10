import express from "express";
import { getProducts, saveProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.post("/products", saveProducts);

export default productRouter;