const express = require("express");
const routerCarrito = express.Router();
const fs = require("fs");

const carrito = require("../api/Carrito");
// console.log(carrito)

const {loggerUser} = require("./auth")

const {persistir} = require("../persistencia/funciones")
const ruta = "./src/persistencia/carrito.txt";

routerCarrito.use(loggerUser)
//=====================================================================
routerCarrito.get("/agregar/:id", (req, res) => {
    res.send(carrito.agregar(req.params.id));
    persistir(ruta, carrito);
});

//=====================================================================
routerCarrito.get("/listar", (req, res) => {
    //res.send(carrito.listar());
    fs.readFile(ruta, "utf-8", (error, contenido) => {
        if(error){
            res.send(error)
        }else{
            try{
                res.send(JSON.parse(contenido))
            }catch{
                res.send("No hay productos en el carrito")
            }

        }
    })
});

//=====================================================================
routerCarrito.delete("/borrar/:id", (req, res) => {
    res.send(carrito.borrar(req.params.id))
    persistir(ruta, carrito);
});

module.exports = routerCarrito;