const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

const puerto = 8080 || process.env.PUERTO;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Espacio público del servidor
app.use(express.static(__dirname + "/public"));

//Importo las rutas y las uso con el prefijo /productos
const routerProductos = require('./routers/productos')
app.use('/productos', routerProductos);

app
    .listen(puerto, () =>
        console.log(`Escuchando peticiones puerto localhost:${puerto}`)
    )
    .on("error", (error) => console.log(`Error en servidor ${error}`));
