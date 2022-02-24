// Capitulo 6 Parte 1

/*  Nodo = 
Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o 
incluso las etiquetas de una lista

Document = El nodo document es el nodo raiz, a partir del cual deriva el 
resto de nodos. 

Element = Nodos definidos por etiquetas HTML

Text = El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto)

Attribute = los atributos de las etiquetas definen nodos, (en JS no los veremos como nodos)

Comentarios y otros = Los comentarios y otros elementos como las declaraciones doctype en cabecera

con . se selecciona por clase en css y # para los id
*/

/*  Document = Metodos de selección de elementos

- getElementById() = Selecciona un elemento por ID

- getElementByTagName() = Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada

- querySelector() = Devuelve el primer elemento que coincida con el grupo especificado de selectores

- querySelectorAll() = Devuelve todos los elementos que coincidadn con el grupo especificado de selectores

- Se aplica para los documentos, ejemplo: document.getElementById()

parrafoById = document.getElementById('parrafo');

parrafoByTagName = document.getElementsByTagName('p');

parrafoQuerySelector = document.querySelector(#parrafo);

parrafoQuerySelectorAll = document.querySelectorAll(#parrafo);

*/

/*  Metodos para Definir, Obtener y Eliminar valores de atributos

- setAttribute() = Modifica el valor de un atributo

- getAttribute() = Obtiene el valor de un atributo

- removeAttribute() = Remueve el valor de un atributo

- Se aplica a los elementos, ejemplo: element.setAttribute()

const rangoEtario = document.querySelector('.rangoEtario');

rangoEtario.setAttribute('type', 'number');

let valorAtributo = rangoEtario.getAttribute('type');

document.write(valorAtributo);

*/

/* Atributos Globales

- class = Lista de clases del elemento separadas por espacios

- contenteditable = Indica si el elemento puede ser modificable por el usuario (bool)

- dir = Indica la direccionalidad del texto

- hidden = Indica si el elemento aún no es, o ya no es, relevante

- id = Define un identificador único

- style = Contiene declaraciones de estilo CSS para ser aplicadas al elemento

- tabindex = Indica si el elemento puede obtener un focus de input

- title = Contiene un texto con información relacionada al elemento al que pertenecer


const titulo = document.querySelector(".titulo");

titulo.setAttribute('contentEditable', 'true');

titulo.setAttribute('dir', 'rtl');

titulo.setAttribute('hidden', 'true');

titulo2.setAttribute('tabindex', '0');

*/

/* Atributos de Input's 

- className
- value
- type
- accept
- form
- minlength
- placeholder
- required


const inputNormal = document.querySelector('.input-normal');

document.write(inputNormal.className, '<br><br>');
inputNormal.placeholder = 'Hola, como estas?';

*/


/* Atributos Style */

let variable5;

const tituloH1 = document.querySelector('.tituloh1');

tituloH1.style.color = 'blue';
tituloH1.style.backgroundColor = 'red';
tituloH1.style.padding = '40px';