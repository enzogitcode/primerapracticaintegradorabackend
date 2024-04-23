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
const io= new Server (httpServer)
const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
})







