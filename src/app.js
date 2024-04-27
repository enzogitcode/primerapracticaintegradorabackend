import express from 'express';
const app = express();
const PUERTO = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('./src/public'))

/* import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
 */
import { Server } from 'socket.io';

const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

//const io = new Server(httpServer)

import mongoose from 'mongoose';
import productsRouter from './routes/products.router.js';

mongoose.connect("mongodb+srv://coder:codercoder1@cluster0.j9ubv2z.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Funciona"))
    .catch((error) => console.log("Error", error))

app.use("/", productsRouter);










