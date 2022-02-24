// Capitulo 4

/* Métodos para las cadenas

let cadena = "Cadena de prueba";
let cadena2 = "prueba";
let cadenaSplit = 'Hola como estas?';
let cadenaSubString = 'ABCDEFG';
let cadenaToString = ['Pedro', 'Martin'];
let cadenaTrim = '  hola    ';

//  concat () = Junta 2 o mas cadenas y retorna una nueva
let pruebaConcat = cadena.concat(" Con concat");
console.log(pruebaConcat);

//  startWith() = Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false  
let pruebaStartWith = cadena.startsWith(cadena2);
console.log(pruebaStartWith);

//  endsWith() = Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false  
let pruebaEndstWith = cadena.endsWith(cadena2);
console.log(pruebaEndstWith);

//  includes() = Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
let pruebaIncludes = cadena.includes(cadena2);
console.log(pruebaIncludes);

//  indexOf() = Devuelve el indice (posición) del primer caracter de la cadena, si no existe, devuelve -1
let pruebaIndexOf = cadena.indexOf(cadena2);
console.log(pruebaIndexOf);

//  lastIndexOf() = Devuelve el ultimo indice (posición) del primer caracter de la cadena, si no existe, devuelve -1
let pruebaLastIndexOf = cadena.lastIndexOf(cadena2);
console.log(pruebaLastIndexOf);

//  padStart() = [Propuesta de ECMA] - Rellenar cadena al principio con los caracteres deseados
let pruebaPadStart = cadena.padStart(20, 'a');
console.log(pruebaPadStart);

//  padEnd() = [Propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados
let pruebaPadEnd = cadena.padEnd(20, 'b');
console.log(pruebaPadEnd);

//  repeat() = Devuelve la misma cadena pero repetida la cantidad
let pruebaRepeat = cadena.repeat(2);
console.log(pruebaRepeat);

//  split() = Divide la cadena como le pidamos
let pruebaSplit = cadenaSplit.split('como');
console.log(pruebaSplit);

//  substring() = Nos retorna un pedazo de la cadena que seleccionamos
let pruebaSubString = cadenaSubString.substring(0, 4);
console.log(pruebaSubString);

//  toLowerCase() = Convierte una cadena a minúsculas
let pruebaToLowerCase = cadena2.toLowerCase();
console.log(pruebaToLowerCase);

//  toUpperCase() = Convierte una cadena a mayúsculas
let pruebaToUpperCase = cadena2.toUpperCase();
console.log(pruebaToUpperCase);

//  toString() = Método devuelve una cadena que representa al objeto especificado
let pruebaToString = cadenaToString.toString(cadenaToString);
console.log(pruebaToString);

//  trim() = Elimina los espacios en blancos al principio y al final de una cadena
let pruebaTrim = cadenaTrim.trim();
console.log(pruebaTrim);

//  trimEnd() = Elimina los espacios en blanco al final de la cadena
let pruebaTrimEnd = cadenaTrim.trimEnd();
console.log(pruebaTrimEnd);

//  trimStart() = Elimina los espacios en blancos al comienzo de la cadena
let pruebaTrimStart = cadenaTrim.trimStart();
console.log(pruebaTrimStart);

//  valueOf() = Retorna el valor primitivo de un objeto string
console.log();

*/


/* Métodos para los array 

let arrayNombres = ['Pedro', 'Maria', 'Jorge'];
let arrayNombres2 = ['Heung', 'Cristiano'];

//  pop() = Elimina el ultimo elemento de un array y lo devuelve
let pruebaPop = arrayNombres.pop();
console.log(pruebaPop);

//  shift() = Elimina el primer elemento de un array y lo devuelve
let pruebaShift = arrayNombres.shift();
console.log(pruebaShift);

// push() = Agrega un elemento al array al final de la lista
let pruebaPush = arrayNombres.push('Marco');
console.log(arrayNombres);

// reverse() = Invierte el orden de los elementos de un array
let pruebaReverse = arrayNombres.reverse();
console.log(pruebaReverse);

// unshift() = Agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array
let pruebaUnshift = arrayNombres.unshift('Son');
console.log(pruebaUnshift);

// sort() = Ordena los elementos (array), localmente y devuelve el arreglo ordenado
let pruebaSort = arrayNombres.sort();
console.log(pruebaSort);

// splice() = cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
let pruebaSplice = arrayNombres.splice(0,1);
console.log(arrayNombres);
*/

/* Métodos Accesores 

let arrayAccesores = ['Kylian', 'karim', 'Luka', 'Toni'];

//  join() = Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuleve
let pruebaJoin = arrayAccesores.join(' - ');
console.log(pruebaJoin);

//  slice() = Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
let pruebaSlice = arrayAccesores.slice(0,2);
console.log(pruebaSlice);
*/


/* Métodos de Repetición 

let arrayRepeticion = ['Dicaprio', 'redmayne', 'lee Dong-Wook', 'seo taiji'];

// filter() = Crea un nuevo array con todos los elementos que cumplan la condición
let pruebaFilter = arrayRepeticion.filter(repeticionFilter => repeticionFilter.length > 10);
console.log(pruebaFilter);

// ForEach() = Ejecuta la función indicada una vez por cada elemento del array
arrayRepeticion.forEach(repeticion => console.log(repeticion));

*/

/*  Objeto Math 

//  sqrt() = Devuelve la raíz cuadrada positiva de un número
let pruebaSqrt = Math.sqrt(25);
console.log(pruebaSqrt);

//  cbrt() = Devulev la raíz cúbica de un número
let pruebaCbrt = Math.cbrt(27);
console.log(pruebaCbrt);

//  max() = Devuelve el mayor de cero o más números
let pruebaMax = Math.max(4,1,3,56,90);
console.log(pruebaMax);

//  min() = Devulve el más pequeño de cero o más números
let pruebaMin = Math.min(4,1,3,56,90);
console.log(pruebaMin);

//  ramdom() = Devuelve un número pseudo-aleatorio entre 0 y 1
let pruebaRamdom = Math.random() * 100;
console.log(pruebaRamdom);

//  round() = Devuelve el valor de un número redondeado al número entero mas cercano
let pruebaRound = Math.round(pruebaRamdom);
console.log(pruebaRound);

//  fround() = Devuelve la representación flotante de precisión simple más cercana de un número
let pruebaFround = Math.fround(9.759999999);
console.log(pruebaFround);

//  trunc() = Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios
let pruebaTrunc = Math.trunc(9.8);
console.log(pruebaTrunc);

*/