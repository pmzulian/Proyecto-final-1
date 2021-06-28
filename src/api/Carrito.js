const existencias = require("/ArregloProd");

function buscarProd(id_prod){
    return existencias.find(p => p.id == id_prod)
}

class Carrito {
    #privatefield

    constructor(id, timestamp, productos) {
        this.#privatefield.id = id;
        this.#privatefield.timestamp = new Date.toLocaleString();
        this.#privatefield.productos = [];
    }

    listar(id){

    }

    agregar(id_prod){
        const prod = buscarProd(id_prod);

        if(prod !== -1){
            this.#privatefield.productos.push(prod)
        }else{
            return `No existe producto con el id ${id_prod}`
        }
    }

    borrar(id_prod){

    }
}

module.exports = new Carrito;