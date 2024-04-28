import express from 'express'
const viewsRouter= express.Router();
import ProductsModel from '../models/products.model.js';

viewsRouter.get("/products", (req, res)=>{
    res.render(ProductsModel)
})

export default viewsRouter