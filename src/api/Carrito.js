const {productos} = require("../routers/productos")

function buscarProd(id_prod){
    return productos.find(p => p.id == id_prod)
}

class Carrito {

    constructor(id) {
        this.id = id;
        this.timestamp = new Date().toLocaleString();
        this.productos = [];
    }

    listar(){
        return this.productos;
    }

    agregar(id_prod){
        const prod = buscarProd(id_prod);

        if(prod !== -1){
            this.productos.push(prod)
        }else{
            return `No existe producto con el id ${id_prod}`
        }
    }

    borrar(id_prod){
        let index = this.productos.findIndex((prod) => prod.id == id_prod);
        if(index !== -1){
            // return this.productos[index]
            return this.productos.splice(index, 1);
        }else{
            return `No hay producto con el id ${id_prod}`;
        }
    }
}

module.exports = new Carrito();