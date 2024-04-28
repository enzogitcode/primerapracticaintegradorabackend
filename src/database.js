import mongoose from "mongoose"
mongoose.connect("mongodb+srv://coder:codercoder1@cluster0.j9ubv2z.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Funciona"))
    .catch((error) => console.log("Error", error))
