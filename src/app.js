import express from 'express';
const app = express();
const PUERTO = 8080;
import './database.js';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))

import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js';
 import cartsRouter from './routes/carts.router.js'
 
app.use("/", cartsRouter)
app.use("/", productsRouter);
app.use("/", viewsRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

//Las query van en las rutas










