const express = require('express');
const app = express();

//importamos las rutas a traves de una constante
const indiceRutas=require('./rutas/index');

// Usar las Rutas
app.use("/" , indiceRutas);

//Servidor que este escuchando 
app.listen(3000, () => {
    console.log("Servidor escuchando puerto 3000");
} )