// Capitulo 2

// Arrays
let arraysEjemplo = ["ignacio", 26, "la serena"];
let arrayFrutas = ["banana", "manzana", "pera", "frutilla"];

console.log(arrayFrutas);

// Arrays Asociativos
let objetoPc = {
  nombre: "Ignacio-PC",
  CPU: "Ryzen 5 5600x",
  RAM: "16 GB",
  SSD: "500GB",
};

let arrayPc = ["Ignacio-PC", "Ryzen 5 5600x", "16 GB", "500GB"];

console.log(arrayPc);

// Bucles e Iteración

let numeroEjemplo = 0;

// if
if (numeroEjemplo < 10) {
  console.log("Es menor que 10");
}

// while
while (numeroEjemplo < 5) {
  numeroEjemplo++;
  console.log(numeroEjemplo);
}

// while con break
while (numeroEjemplo < 5) {
  numeroEjemplo++;
  console.log(numeroEjemplo);
  if (numeroEjemplo == 2) {
    break;
  }
}
console.log("FIN");

// for se compone de 3 partes (declaramos las variables, condición, las iteramos)
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// for in y for of
// in nos devuelve la posición de cada elemento y of nos devuelve el contenido del elemento
let arrayAnimales = ["Perro", "Gato", "Nutria"];

for (let animal in arrayAnimales) {
  console.log(animal);
}

for (let animal of arrayAnimales) {
  console.log(animal);
}

// Sentencia label
arrayNombres1 = ["Pedro", "Maria", "Dulce Maria"];
arrayNombres2 = ["Miguel", "Francisca", arrayNombres1, "Javiera"];

// Sirve si necesito para un el for padre.
forLabel: for (let array in arrayNombres2) {
  if (array == 2) {
    for (let array of arrayNombres1) {
      console.log(array);
      break forLabel;
    }
  } else {
    console.log(arrayNombres2[array]);
  }
}

// Funciones, sirve para la reutilización de codigo.

function saludar() {
  let respuesta = prompt("Hola, Como fue tu dia?");
  if (respuesta == "bien") {
    alert("Me alegro");
  } else {
    alert("Que mal");
  }
}

//saludar();

// Funciones con parametros, se pueden declarar variables dentro de la funciones 
// y asociarlas a los parametros, o directamente utilizar los parametros que recibimos
function sumarNumeros(num1, num2) {
    //let numeroSuma1 = num1;
    //let numeroSuma2 = num2;
    let resultadoSuma = num1 + num2;

    console.log(resultadoSuma);
}

sumarNumeros(5, 3);

function saludarNombre(nombre) {
    let fraseSaludar = `Hola ${nombre}, Como estas?`;
    console.log(fraseSaludar);
}

//saludarNombre('Ignacio');

// Otra forma de declarar una función
const saludarNombre2 = function(nombre) {
    let fraseSaludar = `Hola ${nombre}, Como estas?`;
    console.log(fraseSaludar);
}

//saludarNombre2('Augusto');

// Funciones flecha, la palabra funcion cambio por la flecha
const saludarFlecha = (nombre) => {
    let fraseSaludar = `Hola ${nombre}, Como estas?`;
    console.log(fraseSaludar);
}
saludarFlecha('Flecha');
