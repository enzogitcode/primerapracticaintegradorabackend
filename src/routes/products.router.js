import express from 'express'
const router = express.Router();
import ProductsModel from "../models/products.model.js";

router.get("/", async (req, res) => {
    try {
        const products = await ProductsModel.find().lean()
        res.render('index', { products: products })
    } catch (error) {
        res.status(500).json("Error en el servidor")
    }
})
router.get("/products", async (req, res) => {
    let limit = req.query.limit
    let page = req.query.page || 1
    const { query, sort } = req.query
    try {
        const products = await ProductsModel.paginate({}, { limit, page })

        const productsFinal = products.docs.map(product => {
            const { _id, ...rest } = product.toObject();
            return rest;
        })
        res.render("index", {
            products: productsFinal,
            hasPrevPage: products.hasPrevPage,
            hasNextPage: products.hasNextPage,
            prevPage: products.prevPage,
            nextPage: products.nextPage,
            currentPage: products.page,
            totalPages: products.totalPages
        })

        console.log(products)
        console.log(productsFinal)
    } catch (error) {
        res.status(500).json("Error en el servidor")
    }
})

router.post("/products", async (req, res) => {
    const newProduct = req.body
    try {
        const product = new ProductsModel(newProduct)
        await product.save();
        res.send({
            message: "Producto agregado exitosamente", product: product,
        })
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" })
    }
})
//router.post FUNCIONA
router.put("/product/:pid", async (req, res) => {
    const idProduct = req.params.pid
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

router.delete("/product/:pid", async (req, res) => {
    const idProduct = req.params.pid
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