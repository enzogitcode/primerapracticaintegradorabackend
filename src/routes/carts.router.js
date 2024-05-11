import express from "express";
const cartRouter = express.Router();

import CartManager from "../controllers/carts.manager.js";
import CartModel from "../models/carts.model.js";

//Visualizar todos los carritos existentes //Funciona
cartRouter.get("/api/carts/", async (req, res) => {
    const carts = await CartModel.find().lean();
    res.render("cartsContainer", { carts: carts })
})
//Visualizar un solo carrito
cartRouter.get("/api/carts/:cid", async (req, res) => {
    let cartId  = req.params.cid
    try {
        const cart = await CartModel.findById(cartId)
        res.render("cartsContainer", { carts:cart })
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
        res.render("index", { carts: newCart })
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
        const foundedCart = await CartManager.getCartById({ _id: cartId })
        const deletedProduct = await CartModel.findByIdandDelete({ _id: productId })

    } catch (error) {
        res.status(500).json({ message: "Error: No se pudo eliminar el producto seleccionado" })
    }

})
//actualizar la cantidad de ejemplares de un determinado producto
cartRouter.put("/api/carts/:cid/products/:pid", async (req, res) => {
    let cartId = req.params.cid
    let productId = req.params.pid

    try {
        const deletedProduct = await CartModel.findByIdandDelete({ _id: productId })
        res.send.json("Producto eliminado con exito")

    } catch (error) {
        res.status(500).json({ message: "Error: No se pudo actualizar la cantidad" })

    }

})
//Eliminar todos los productos del carrito seleccionado
cartRouter.delete("/api/carts/:cid", async (req, res) => {
    let cid  = req.params.cid
    try {
        await CartManager.findByIdandDelete(cid)
        await carts.save();
        res.json({ message: "Carrito eliminado con éxito" })
    } catch (error) {
        res.status(500).json({ message: "Error: No se pudo actualizar la cantidad" })

    }
})
export default cartRouter