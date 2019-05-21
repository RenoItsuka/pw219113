const express = require('express');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importamos las rutas a traves de una constante
const indiceRutas=require('./rutas/index');

//Configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Middeleware
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database:'crudenodemysql13'
},'single'));
app.use(express.urlencoded({extended: false}));

// Usar las Rutas
app.use("/" , indiceRutas);

//Servidor que este escuchando 
app.listen(app.get('port'), () => {
    console.log("Servidor escuchando puerto 3000");
} )