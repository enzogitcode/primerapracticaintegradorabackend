import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: tru
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
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true,
        index:true
    },
    thumbnails: {
        type: [String]
    }
})

const ProductsModel = mongoose.model("products", productsSchema)

export default ProductsModel;
