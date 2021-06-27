class Carrito {
    #privatefield

    constructor(id, timestamp, productos) {
        this.#privatefield.id = id;
        this.#privatefield.timestamp = Date.now();
        this.#privatefield.productos = new Array(Producto);
    }
}