// Capitulo 1

// Variables
/*
Tipos de datos:
undefined, null, boolean, string, symbol, number y object.
*/

var miVariable = 'Agregar el tipo de dato que quieran, dependiendo de su sintaxis';
console.log(miVariable);// Para mostrar un dato por consola usar el sgt codigo:

// Operador de Asignación
var a;
var b = 2; // = es el operador de asignación en JS
console.log(a); // undefined
console.log(b); // tiene un valor para mostrar


// Asignar el valor de una variable a otro variable
var asignar1 = 5;
var asignar2 = asignar1;
console.log(asignar1);
console.log(asignar2);

var asignar1 = 10;
var asignar2;
asignar2 = asignar1;// Otra forma de asignar un valor a otra variable
console.log(asignar1);
console.log(asignar2);

// Inicializar variables
var x = 9; // Iniciarlizar la variable
var miIdioma = 'Español'; // Utilizar la nomesclatura camelCase

// Mayúsculas y Minúsculas
var miVariable = 5;
//console.log(MIVARIABLE); // error
//console.log(Mivariable); // error
//console.log(MIvARIABLE); // error

// Suma
var valorSuma1 = 5 + 15;
console.log(valorSuma1);

// Resta
var valorResta = 15 - 5; // Resultado positivo
console.log(valorResta);
var valorResta2 = 5 - 15; // Resultado negativo
console.log(valorResta2);

// Multiplicación
var valorMultiplicacion = 5 * 3; // * Se utiliza para multiplicar valores
console.log(valorMultiplicacion);

// División
var valorDivision = 10 / 5; // (/) Se utiliza para dividir valores
console.log(valorDivision); 
var valorDivision2 = 17 / 31; 
console.log(valorDivision2);// Multiples decimales
var valorDivision3 = 3 / 0; 
console.log(valorDivision3);// Valor infinito (infinity)

// Números decimales
var valorDecimal = 23.4; // el . indica que es un valor decimal
console.log(valorDecimal);

// Múltiplicar valores decimales
var valorMultiplicacionDecimal = 3.4 * 10.4;
console.log(valorMultiplicacionDecimal);

// Dividir números decimales
var valorDivisionDecimal = 5.0 / 2.0;
console.log(valorDivisionDecimal);

// Resto de una división
var resto = 15 % 5;
console.log(resto); // El resto seria 0
var resto2 = 5 % 3;
console.log(resto2);// El resto seria 2

// Incrementar el valor de una variable
var librosComprados = 105;
console.log(librosComprados); // Inicialmente
librosComprados = librosComprados + 1; // Opción 1
console.log(librosComprados);
librosComprados++; // Opción 2
console.log(librosComprados);

// Reducir el valor de un variable
var numeroDeEstudiantes = 256;
console.log(numeroDeEstudiantes); // Inicialmente
numeroDeEstudiantes = numeroDeEstudiantes - 1; // Opción 1
console.log(numeroDeEstudiantes);
numeroDeEstudiantes--;
console.log(numeroDeEstudiantes);

// Asignación de suma
var asignacionSuma = 23;
asignacionSuma = asignacionSuma + 7; // Opción 1
console.log(asignacionSuma);
asignacionSuma += 5; // Opción 2
console.log(asignacionSuma);

// Asignación de resta
var asignacionResta = 23;
asignacionResta = asignacionResta - 3; // Opción 1
console.log(asignacionResta);
asignacionResta -= 5; // Opción 2
console.log(asignacionResta);

// Asignación de múltiplicación
var asignacionMultiplicacion = 23;
asignacionMultiplicacion = asignacionMultiplicacion * 2; // Opción 1
console.log(asignacionMultiplicacion);
asignacionMultiplicacion *= 2;
console.log(asignacionMultiplicacion);

// Asignación de división
var asignacionDivision = 40;
asignacionDivision = asignacionDivision / 2; // Opción 1
console.log(asignacionDivision);
asignacionDivision /=  2; // Opción 2
console.log(asignacionDivision);

// variables con cadenas de caracteres
var cadenaCaracteres = 'tu nombre'; // Todo lo que este dentro de las comillas es una cadena, incluyendo los espacios o cualquier simbolo 
console.log(cadenaCaracteres);


// Escapar comillas en cadena de caracteres
var miCadena = 'Soy una cadena de caracteres \' con comillas \' ';
console.log(miCadena);

// Cadenas de caracteres con comillas simples
var miMeta = 'Aprender a programar "Rapido" ';
console.log(miMeta);

/* Secuencias de escape

Codigo | Resultado
------------------
\'      Comilla Simple
\"      Comilla Doble
\\      Barra Invertida
\n      Linea Nueva
\r      Retorno de carro
\t      Tabulación
\b      Retroceso
\f      Salto de Página

*/