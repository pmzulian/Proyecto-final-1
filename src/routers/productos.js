const express = require("express");
const routerProductos = express.Router();

const productos = require("../api/ArregloProd");
const Producto = require("../api/Producto");

//=====================================================================
routerProductos.post("/agregar", (req, res) => {
    const productoNuevo = new Producto(
        req.body.id,
        req.body.nombre,
        req.body.descripcion,
        req.body.codigo,
        req.body.foto,
        req.body.precio,
        req.body.stock
    )
    productos.guardar(productoNuevo);
    res.send(productoNuevo);
    //res.redirect("/productos/vista");
});

routerProductos.get("/listar", (req, res) => {
    res.send(productos.listarTodos());
});

routerProductos.get("/listar/:id", (req, res) => {
    res.send(productos.listarIndividual(req.params.id));
    console.log(productos.listarIndividual(req.params.id));
});

//=====================================================================
//Creamos la estructura con express.router
routerProductos.put("/actualizar/:id", (req, res) => {
    const ubicacion = req.params.id;
    const actualizar = req.body;

    if (ubicacion <= productos.productos.length) {
        productos.productos = productos.productos.map((p) => {
            if (p.id == ubicacion) {
                p = Object.assign(p, actualizar);
            }
            return p;
        });
        res.json({
            ...productos.productos,
        });
    } else {
        res.send("No hay producto con el índice " + ubicacion);
    }
});

routerProductos.delete("/borrar/:id", (req, res) => {
    let id = req.params.id;

    let productoBuscado = productos.productos.find((p) => {
        return p.id == id;
    });

    if (productoBuscado) {
        let borrado = productos.borrar(id);

        res.send(borrado);
    } else {
        res.send("No exite el produco");
    }
});

routerProductos.get("/vista", (req, res) => {
    let prods = productos.listarTodos();
    res.render("lista.hbs", { productos: prods, hayProductos: prods.length });
});

module.exports = routerProductos;