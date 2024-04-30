import express from "express";
const cartRouter = express.Router();
import CartModel from "../models/carts.model.js";

cartRouter.get ("/api/carts/", (req, res)=>{
    //visualizar un solo carrito
    
    res.render ("cartsContainer", carts)
    
} )

cartRouter.put ("/api/carts/:cid", async (req, res)=>{
    //visualizar un solo carrito
    
} )
//delete
cartRouter.delete("/api/carts/:cid/products/:pid", async (req, res) => {
    /* deberá eliminar del carrito el producto seleccionado. */

})
//put
cartRouter.get("/api/carts/:cid/products", async (req, res) => {

})
//put
cartRouter.get("/api/carts/:cid/products/:pid", async (req, res) => {
})
/* 
ropiedad products, el id
de cada producto generado
dentro del array tiene que hacer
referencia al modelo de Products.
Modificar la ruta /:cid para que al
tra */

export default cartRouter