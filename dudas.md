## Sobre persistencia
### Existe una dependencia de la sesión.
Es decir, si cargo productos al archivo de productos.txt y luego,
productos a un carrito, al cerrar la ejecución **ambos archivos permanecen
en el sistema** con los datos cargados.

Pero, una vez vuelvo a ejecutar, listo productos y carrito, figuran los
productos cargados en la anterior ejecución, pero **si cargo un nuevo producto**,
entonces se borran los anteriores y tengo solo el nuevo producto.

Entiendo que todo este se debe a que no tenemos un método mediante el fileSystem
que nos permita hacer ``fs.appendFile()`` de manera inteligente.
Tenemos que reescribir todo el archivo .txt de persistencia con los datos cargados
en memoria en cada ejecución.

> Hay una dependencia del arreglo de productos cargados en memoria.

## Sobre el carrito
### Cantidad de carritos
Se entiende que no hay posibilidad de que haya más de un carrito,
ya que eso requeriría armar una clase adicional que contenga y genere
un arreglo de carritos.
### ID del carrito
Puesto que no se dan más precisiones en el enunciado, el ID del 
carrito no se genera contando la cantidad de carritos en un arreglo,
sino mediante una libreria especial llamada ***uuid***.