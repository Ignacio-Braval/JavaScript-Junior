// Capitulo 5

/*Funciones de Registro   

//  assert() = Aparece un mensaje de error en la consola si la afirmación es falsa, si la afirmación es verdadera, no aparecera nda (NO estandar).
console.assert(5 > 3);

//  clear() = Limpia la consola
console.clear();

//  error() = Muestra un mensaje de error en la consola web
console.error('Ocurrio un error');

//  info() = Emite un mensaje informativo a la consola web, firefox y chrome, se muestra un pequeño icono 'i' junto a estos elementos en el registro de la consola web
console.info('Mensaje informativo');

//  log() = Muestra un mensaje en la consola web (o del intérprete de JS)
console.log('Mensaje desde el log');

//  table() = Esta función toma argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en la consola web
console.table(['Cristiano', 'Toni', 'Luka', 'Gareth']);

//  warn() = Imprime un mensaje de advertencia en la consola web
console.warn('Esta es una advertencia');

//  dir() = Despliega una lista interactiva de las propiedades del objeto JS especificado (No estandar)
console.dir(['Cristiano', 'Toni', 'Luka', 'Gareth']); 
*/

/* Funciones de conteo 

//  count() = Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.
console.count();
console.count();

//  countReset() = Resetea el contador console.count()
console.countReset();

*/


/* Funciones de Agrupación 

//  group() = Crea un nuevo grupo en linea en el registro de la consola web
console.group();
console.error('Mensaje de error dentro de un grupo');
console.log('Mensaje log dentro de un grupo');
console.table(['Mensaje table', 'dentro',, 'de un grupo']);

//  groupEnd() = Remueve un grupo en linea en el registro de la consola web
console.groupEnd();

//  groupCollapsed() = Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo
console.groupCollapsed('Grupo Collapsed');
console.error('Mensaje de error dentro de un grupo collapsed');
console.log('Mensaje log dentro de un grupo collapsed');
console.table(['Mensaje table', 'dentro',, 'de un grupo', 'collapsed']);

*/

/* Funciones de temporización 

//  time() = inicia un temporizador
console.time();

//  timeLog() = Detiene un temporizador
console.timeLog();

//  timeEnd() = Registra el valor actual de un temporizador
console.timeEnd();

*/

/* Modificar presentación del texto en consola 

console.log('%c Hola', 'color:red');
*/