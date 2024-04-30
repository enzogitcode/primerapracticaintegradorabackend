import express from "express";
const cartRouter = express.Router();
import CartManager from "../controllers/carts.manager.js";
import CartModel from "../models/carts.model.js";

//Visualizar todos los carritos existentes
cartRouter.get("/api/carts/", async (req, res) => {
    const carts = await CartModel.find().lean();
    res.render("cartsContainer", { carts: carts })
})
//Visualizar un solo carrito
cartRouter.get("/api/carts/:cid", async (req, res) => {
    let { cartId } = req.params
    try {
        const cart = await CartModel.findById({_id: cartId})
        res.json(cart.products)
        if (!cartId) {
            console.log("No existe un carrito con ese Id")
            res.send.json("No existe un carrito con ese Id")
        }
    } catch (error) {
        res.status(500).json({ message: "Error: No se puede visualizar el carrito" })
    }
})
//Crear un nuevo carrito
cartRouter.post("/api/carts", async (req, res) => {
    try {
        const newCart = await new CartManager.createCart();
        res.json(newCart)
    } catch (error) {
        console.log("Error al crear el carrito", error)
        res.status(500).json({ message: "Error: No se pudo crear el carrito" })
    }
})

/* Eliminar del carrito el producto seleccionado. */
cartRouter.delete("/api/carts/:cid/products/:pid", async (req, res) => {
    let cartId = req.params.cid
    let productId = req.params.pid

    try {
        const deletedProduct = await CartManager.findByIdandDelete({_id})
    } catch (error) {

    }

})
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