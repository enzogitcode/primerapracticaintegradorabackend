import mongoose from "mongoose";

const cartsSchema = mongoose.Schema({
    products: [
        {
            products: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            quatity: {
                type: String, required: true
            }
        }
    ]

})

const CartModel = mongoose.model("carts", cartsSchema)

export default CartModel;