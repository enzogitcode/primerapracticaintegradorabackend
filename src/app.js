import express from 'express';
const app= express();
const PUERTO= 8080;
app.use (express.json ());
app.use (express.urlencoded ({extended:true}));
app.use(express.json());
app.use(express.static('./src/public'))

import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

import { Server } from 'socket.io';

const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})

const io= new Server (httpServer)

import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://coder:c0derc0der@cluster0.j9ubv2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")












