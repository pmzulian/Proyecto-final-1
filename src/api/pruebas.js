const Producto = require("./Producto");
const {productos: existencias} = require("../routers/productos")

const producto1 = new Producto(
    0, "Auriculares Sony", "Sony Noise Cancelling", "002", "", 30000, 200
)

const producto2 = new Producto(
    1, "Auriculares Philips", "Philips Bluetooth", "003", "", 10000, 150
)
existencias.guardar(producto1);
existencias.guardar(producto2);

// existencias.productos.find(p => p.id == 1)

console.log(existencias.productos.find(p => p.id == 1))