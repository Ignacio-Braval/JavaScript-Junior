/*  Clases, classList y Métodos de classList

- add() = Añade una clase

- remove() = Remueve una clase

- item() = Devuelve la clase del indice especificado

- contains() = Verifica si ese elemento posee o no, la clase especificada

- replace() = Reemplaza una clase por otra

- toggle() = Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina

const titulo = document.querySelector('.titulo');

//titulo.classList.add('clase');
//titulo.classList.remove('grande');
let valorItem = titulo.classList.item(2, '<br>');
document.write(valorItem, '<br><br>');

let valorContains = titulo.classList.contains('rojo');
if (valorContains) {
    document.write('La clase existe', '<br><br>');
} else {
    document.write('La clase NO existe', '<br><br>');
}

//titulo.classList.toggle('grande');

let valorReplace = titulo.classList.replace('chico', 'grande');
document.write(valorReplace);

*/

/* Obtención y Modificación de Elementos

textContent() = Devuelve el texto de cualquier nodo

innertext() = Devuelve el texto visible de un nodo element, NO se usa más

outerText = Devuelve el texto que de las etiquetas html incluidas las etiquetas  NO se usa más

innerHTML = Devuelve el contenido html de un elemento

outerHTML = Devuelve el codigo HTML completo del elemento


const titulo = document.querySelector('.tituloP');

let resultadoContent = titulo.textContent;
//let resultadoInner = titulo.innerText;
//let resultadoOuter = titulo.outerText;
let resultadoInnerHtml = titulo.innerHTML;
let resultadoOuterHtml = titulo.outerHTML;

alert(resultadoInnerHtml);
alert(resultadoOuterHtml);

*/

/* Creación de Elementos 

- createElements()

- createTextNode()

- createDocumentFragment()


const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const item = document.createElement("LI");

  item.innerHTML = 'Esto es un item de la lista';

  fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);

*/

/* Obtención y Modificación de Childs (Hijos) 

- firstChild

- lastChild

- firstElementChild

- lastElementChild

- childNodes

- children

const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;

const ultimoHijo = contenedor.lastChild;

const primerElementoHijo = contenedor.firstElementChild;

const ultimoElementoHijo = contenedor.lastElementChild;

const nodoHijo = contenedor.childNodes;

const nodoHijos = contenedor.children;

console.log(primerHijo);
console.log(ultimoHijo);
console.log(primerElementoHijo);
console.log(ultimoElementoHijo);
console.log(nodoHijo);
console.log(nodoHijos);

*/

/* Métodos de Childs (hijos) 

- replaceChild()

- removeChild()

- hasChildNodes()

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement('P').innerHTML = 'Parrafo';
const h2Nuevo = document.createElement('H2');
h2Nuevo.innerHTML = 'Titulo';

const h2Antiguo = document.querySelector('.h2');

//contenedor.replaceChild(h2Nuevo, h2Antiguo);
//contenedor.removeChild(h2Antiguo);

let respuesta = contenedor.hasChildNodes();

if (respuesta) {
    document.writeln('El elemento tiene hijos');
} else {
    document.writeln('El elemento NO tiene hijos');
}

*/

/* Propiedades de parents (Padres) 

- parentElement

- parentNode

const contenedor = document.querySelector(".contenedor");
const h2Antiguo = document.querySelector('.h2');

console.log(contenedor.parentElement);
console.log(h2Antiguo.parentElement);

*/

/* Propiedades de los siblings (Hermanos)

- nextSibling

- previousSibling

- nextElementSibling

- previousElementSibling


const contenedor = document.querySelector(".contenedor");
const h2Antiguo = document.querySelector(".h2");

console.log(contenedor.nextSibling);
console.log(h2Antiguo.previousSibling);
console.log(h2Antiguo.nextElementSibling);
console.log(h2Antiguo.previousElementSibling);


*/

/* Nodos - Extras

- closest()

const div3 = document.querySelector(".div-3");

console.log(div3.closest('.div'));

*/
