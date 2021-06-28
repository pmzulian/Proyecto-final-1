const {productos: existencias} = require("../routers/productos")

function buscarProd(id_prod){
    return existencias.productos.find(p => p.id == id_prod)
}

class Carrito {

    constructor(id) {
        this.id = 1;
        this.timestamp = new Date().toLocaleString();
        this.productos_carrito = [];
    }

    listar() {
        const prodCarrito = this.productos_carrito
        return prodCarrito.length > 0 ? prodCarrito : "No hay productos en el carrito" ;
    }

    agregar(id_prod){
        const prod = buscarProd(id_prod);

        if(prod !== undefined){
            this.productos_carrito.push(prod)
            return prod
        }else{
            return `No existe producto con el id ${id_prod}`
        }
    }

    borrar(id_prod){
        let index = this.productos_carrito.findIndex((prod) => prod.id == id_prod);
        if(index !== -1){
            // return this.productos[index]
            return this.productos_carrito.splice(index, 1);
        }else{
            return `No hay producto con el id ${id_prod}`;
        }
    }
}

module.exports = new Carrito;