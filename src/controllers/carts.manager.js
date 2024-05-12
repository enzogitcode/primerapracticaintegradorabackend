import CartModel from "../models/carts.model.js";
import ProductsModel from "../models/products.model.js";

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
                return null
            }
            return cart;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async addProducts(cartId, productId, quantity) {
        try {
            const cart = await this.getCartById(cartId);
            const productExist = cart.products.find(item => item.product.toString() === productId);

            if (productExist) {
                productExist.quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }

            cart.markModified("products");

            await cart.save();
            return cart;

        } catch (error) {
            console.log("Error al agregar un producto", error);
            throw error;
        }
    }
    async deleteProducts(cartId, productId){
        try {
            const cart= await CartModel.findById(cartId)
            if (!cart) {
                throw new Error("Carrito no encontrado")
            }
            const product= await ProductsModel.findByIdandDelete(productId)
            if (!product) {
                throw new Error ("No existe un producto con ese Id")
            }

            cart.markModified("products");
            await cart.save();
            return cart;
        } catch (error) {
            console.log("Error no se pudo eliminar el producto del carrito", error);

            throw error
        }
    }
}


export default CartManager;