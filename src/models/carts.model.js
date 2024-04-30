import mongoose from "mongoose";

const cartsSchema = mongoose.Schema({
    products: [
        {
            products: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
                required: true
            }],
            quatity: {
                type: String, required: true
            }
        }
    ]

})

const CartsModel = mongoose.model("carts", cartsSchema)

export default CartsModel;