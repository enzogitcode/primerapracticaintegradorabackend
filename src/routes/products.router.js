import express from 'express'
const router = express.Router(); 
import ProductsModel from "../models/products.model.js";

router.get ("/", async (req, res)=> {
    try {
        const products= await ProductsModel.find()
        res.json(products)
        console.log (products)
    } catch (error) {
        res.status(500).json("Error en el servidor")
    }
})

export default router