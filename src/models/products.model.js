import mongoose from "mongoose";

const productsSchema= mongoose.Schema ({
    title: String,
    description: String,
    price: Number,
    img: String,
    code: String,
    stock: Number,
    status:Boolean,
    category: String,
    thumbnails: String
})

const ProductsModel= mongoose.model("products", productsSchema) 

export default ProductsModel;
