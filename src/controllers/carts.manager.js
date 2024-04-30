import CartModel from "../models/carts.model.js";

class CartManager {
 async createCart () {
    try {
        const newCart= new CartModel({products: []});
        await newCart.save();
        return newCart;
    } catch (error) {
        console.log ("Error al crear el nuevo carrito", error)
        throw error;
    }
 }
 async getCartById () {}
 async addProducts () {}
    
}