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

import productsRouter from './routes/products.router.js';
import viewsRouter from './routes/views.router.js';

app.get("/", (req, res) => {
    res.render('index')
})

app.use("/", productsRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})











