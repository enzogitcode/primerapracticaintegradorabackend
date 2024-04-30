import CartModel from "../models/carts.model.js";

class CartManager {
    async createCart() {
        try {
            const newCart = new CartModel({ products: [] });
            await newCart.save();
            return newCart;
        } catch (error) {
            console.log("Error al crear el nuevo carrito", error)
            throw error;
        }
    }
    async getCartById(cartId) {
        try {
            const cart = await CartModel.findById(cartId)
            if (!cart) {
                console.log("No existe un carrito con ese Id");
            }
            return cart;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async addProducts({ cartId, productId, quantity }) {
        try {
            const cart = await this.getCartById(cartId);
            const productExist = cart.products.find(item => item.product.toString() === productId);

            if (productExist) {
                productExist.quantity += quantity;
            } else {
                carrito.products.push({ product: productId, quantity });
            }

            cart.markModified("products");

            await cart.save();
            return cart;

        } catch (error) {
            console.log("Error al agregar un producto", error);
            throw error;
        }
    }
}

export default CartManager;