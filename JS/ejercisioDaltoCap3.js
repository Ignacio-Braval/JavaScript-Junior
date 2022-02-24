/* 
Explicación del ejercisio dado por DALTO

A) Cofla entro a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular
   de todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención especificamente,
   El problema es que ningun vendedor sabe algo al respecto, entonces no pueden recomendarle absolutamente nada...:
   el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí
   entramos nosotros.

   Crear Soluciones:
   - Crear un sistema para mostrarle a cofla las particularidades de los celulares.
   - Cada celular color, peso, resolución de pantalla, resolución de camara, y memoria ram.
   - Cada celular de poder prender, reiniciar, apagar, tomar fotos y grabar.

*/

/* Solución Ejercisio */

class Celular {
  constructor(marca, color, peso, resolucion, camara, ram) {
    this.marca = marca;
    this.color = color;
    this.peso = peso;
    this.resolucion = resolucion;
    this.camara = camara;
    this.ram = ram;
    this.infoCelular = `El celular es marca: ${this.marca}, Es de color: ${this.color}, Tiene un peso de: ${this.peso}, Posee una resolución de pantalla de: ${this.resolucion}, Tiene una resolución de camara de: ${this.camara}, Contiene ${this.ram} de RAM.`;
  }
  verInfoCelular() {
    console.log(this.infoCelular);
  }
}

// Intanciación
const celular = new Celular(
  "Samsung",
  "Gold",
  "125gr",
  "4K Qled",
  "80MPX",
  "8GB"
);
// Llamada del objeto creado
console.log(celular);
console.log(celular.infoCelular);
