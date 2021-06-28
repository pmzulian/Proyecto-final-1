const express = require("express");
const routerCarrito = express.Router();

const carrito = require("../api/Carrito");

//=====================================================================
routerCarrito.get("/agregar/:id_prod", (req, res) => {
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