import express from 'express'
const viewsRouter= express.Router();

viewsRouter.get("/products", (req, res)=>{
    res.render('index')
})

export default viewsRouter