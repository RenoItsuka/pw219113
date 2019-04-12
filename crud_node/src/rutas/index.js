const express = require('express');
const rutas = express.Router();

rutas.get("/", (req,res) => {
    res.send("Hola Mundo nwn, pero en Node owo (Literal xd) pd. JAJAJAJA XD")
});

module.exports = rutas;



