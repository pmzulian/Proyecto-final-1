const express = require("express");
const routerProductos = express.Router();
const fs = require("fs");

const productos = require("../api/ArregloProd");
// console.log((productos))
const Producto = require("../api/Producto");

const {loggerAdmin, loggerUser} = require("./auth")

const ruta = "./src/persistencia/productos.txt";
const persistir = require("../persistencia/funciones");

//=====================================================================
routerProductos.use(loggerUser)
routerProductos.get("/listar", (req, res) => {
    //res.send(productos.listarTodos());
    fs.readFile(ruta, "utf-8", (error, contenido) => {
        if(error){
            res.send(error)
        }else{
            const objeto = JSON.parse(contenido)
            res.send(objeto)
        }
    })
})

//=====================================================================
routerProductos.use(loggerAdmin)
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

    persistir(ruta, productos)

});

/*routerProductos.get("/listar/:id", (req, res) => {
    res.send(productos.listarIndividual(req.params.id));
    console.log(productos.listarIndividual(req.params.id));
});*/

//=====================================================================
routerProductos.put("/actualizar/:id", (req, res) => {
    res.send(productos.actualizar(req.params.id, req.body));
    persistir(ruta, productos);
});

routerProductos.delete("/borrar/:id", (req, res) => {
    res.send(productos.borrar(req.params.id));
    persistir(ruta, productos);
});

//=====================================================================
routerProductos.get("/vista", (req, res) => {
    let prods = productos.listarTodos();
    res.render("lista.hbs", { productos: prods, hayProductos: prods.length });
});

// exports.routerProductos = routerProductos;
// exports.existencias = productos;

/*const producto1 = new Producto(
    0, "Auriculares Sony", "Sony Noise Cancelling", "002", "", 30000, 200
)

const producto2 = new Producto(
    1, "Auriculares Philips", "Philips Blutooth", "003", "", 10000, 150
)*/

// productos.guardar(producto1);
// productos.guardar(producto2);

module.exports = {
    routerProductos,
    productos
}