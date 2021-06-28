const express = require("express");
const routerCarrito = express.Router();

const carrito = require("../api/Carrito");
// console.log(carrito)
//=====================================================================
routerCarrito.get("/agregar/:id", (req, res) => {
    res.send(carrito.agregar(req.params.id))
});

//=====================================================================
routerCarrito.get("/listar", (req, res) => {
    res.send(carrito.listar());
});

//=====================================================================
routerCarrito.delete("/borrar/:id", (req, res) => {
    res.send(carrito.borrar(req.params.id))

});

module.exports = routerCarrito;