const existencias = require("/ArregloProd");

function buscarProd(id_prod){
    return existencias.find(p => p.id == id_prod)
}

class Carrito {
    #privatefield

    constructor(id) {
        this.#privatefield.id = id;
        this.#privatefield.timestamp = new Date.toLocaleString();
        this.#privatefield.productos = [];
    }

    listar(){
        return this.#privatefield.productos;
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
        let index = this.#privatefield.productos.findIndex((prod) => prod.id == id_prod);
        if(index !== -1){
            // return this.productos[index]
            return this.#privatefield.productos.splice(index, 1);
        }else{
            return `No hay producto con el id ${id_prod}`;
        }
    }
}

module.exports = new Carrito;