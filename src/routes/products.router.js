import express from 'express'
const router = express.Router();
import ProductsModel from "../models/products.model.js";

router.get("/products", async (req, res) => {
    try {
        const products = await ProductsModel.find()
        res.json(products)
    } catch (error) {
        res.status(500).json("Error en el servidor")
    }
})

router.post("/products", async (req, res) => {
    const newProduct = req.body
    try {
        const product = new ProductsModel(newProduct)
        await product.save();
        res.send({ message: "Producto agregado exitosamente", product: product })
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" })
    }
})
//router.post FUNCIONA
router.put("/product/:id", async (req, res) => {
    const idProduct = req.params._id
    const newData = req.body
    try {
        if (!idProduct) {
            return res.status(404).json({ message: "Error: Producto no encontrado" })
        }
        else {
            const product = await ProductsModel.findByIdAndUpdate(idProduct, newData)
            res.status(200).send({ message: "Producto actualizado exitosamente" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto" })
    }
})

router.delete("/product/:id", async (req, res) => {
    const idProduct = req.params.id
    try {
        if (!idProduct) {
            return res.status(404).json({ message: "Error: Producto no encontrado" })
        }
        else {
            const product = await ProductsModel.findByIdAndDelete(idProduct)
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto" })

    }
})

export default router