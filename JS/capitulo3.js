/*Programación orientada a objetos POO

Definición = La POO nos sirve para programar objetos a como lo hariamos en la vida real
             es un paradigma de la programación.

Metodo = Es una función dentro de una clase, si esta afuera se le llama simplemente función.
         las funciones flechas no pueden ser creadas dentro de una clase.

NO puedo tener un objeto con el mismo nombre de la clase
ejemplo = objeto perro -> clase perro

Metodos estaticos = sirven para crear metodos que no reciban algun atributo

los objetos se deben crear con const JAMAS con let o var
*/

//Conceptos basicos de la POO
class Animal {
  // Constructor de la clase
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
  }
  // Creando metodo de la clase
  verInfo() {
    console.log(this.info);
  }
}
// Intanciar
const gato = new Animal("egipcio", 2, "blanco");
const oso = new Animal("panda", 6, "blanco / negro");

/* Llamada a los objetos manualmente
console.log(perro);
console.log(perro.info);
console.log(gato);
console.log(gato.info);
console.log(oso);
console.log(oso.info);
*/

/* Mostrar la info de los objetos a traves de un metodo
perro.verInfo();
gato.verInfo();
oso.verInfo();
 */

// Herencia

class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = null;
  }
  ladrar() {
    // Metodo común
    console.log("¡Wouw!");
  }
  static ladrarStatic() {
    // Metodo static
    console.log("Wouw desde un metodo static!");
  }
  set setRaza(newRaza) {
    // Prueba set en la modificación de la raza
    this.raza = newRaza;
  }
  get getEdad() {
    return this.edad;
  }
}
const perroNuevo = new Perro("Perro Domestico", 10, "Cafe", "Labrador");
perroNuevo.setRaza = "Nueva Raza desde set";
console.log(perroNuevo.raza);
console.log(perroNuevo.getEdad);
Perro.ladrarStatic();
perroNuevo.ladrar();
