import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: { type: String },
    code: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    status: { type: Boolean },
    category: {
        type: String,
        required: true
    },
    thumbnails: { 
        type: String, 
        required: true }
})

const ProductsModel = mongoose.model("products", productsSchema)

export default ProductsModel;
