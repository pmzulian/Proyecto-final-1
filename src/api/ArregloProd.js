const Producto = require("./Producto");

class ArregloProd {
    constructor() {
        this.productos = [];
    }

    getId() {
        return this.productos.length + 1;
    }

    guardar(producto) {
        this.productos.push(producto);
    }

    listarTodos() {
        let todos = this.productos;
        if (todos.length > 0) {
            return this.productos
        }else{
            return "No hay productos cargados"
        }

    }

    listarIndividual(id) {
       let found = this.productos.find(prod => prod.id == id);
       return found ? found : `No existe producto con el id ${id}`
    }

    actualizar(id, body){
        let found = this.productos.find(prod => prod.id == id);

        if (found){
            found = Object.assign(found, body)
            return found
        }else{
            return `No hay producto con el id ${id}`;
        }
    }

    borrar(id) {
        let index = this.productos.findIndex((prod) => prod.id == id);
        if(index != -1){
            // return this.productos[index]
            return this.productos.splice(index, 1);
        }else{
            return `No hay producto con el id ${id}`;
        }
    }
}

/*const nuevosProductos = new ArregloProd();

nuevosProductos.guardar(new Producto(
    0,
    "Lenovo Legion 5i",
    "Laptop Gamer",
    "001",
    "No",
    160000,
    35
))*/

//nuevosProductos.guardar(new Producto(0, "Lenovo Legion 5i", "Laptop Gamer", "001", "No", 160000, 35))

/*nuevosProductos.guardar({
    id: nuevosProductos.getId(),
    title: "Computadora Desktop",
    price: 120000,
    thumbnail:
        "https://www.flaticon.es/icono-gratis/ordenador-de-sobremesa_1792525",
});

nuevosProductos.guardar({
    id: nuevosProductos.getId(),
    title: "Televisor SmarTV",
    price: 90000,
    thumbnail: "https://www.flaticon.es/icono-gratis/televisor_4384367",
});*/



/*const producto1 = new Producto(0, "Lenovo Legion", "Computadora Gamer", "001", "No", 160000, 30)
console.log(producto1)*/

// nuevosProductos.listarIndividual(2)
// nuevosProductos.productos.forEach(index => console.log(index))

// nuevosProductos.borrar(1)

// console.log(nuevosProductos.listarTodos())


module.exports = new ArregloProd();
