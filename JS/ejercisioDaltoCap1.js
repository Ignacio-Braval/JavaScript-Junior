/* Explicación del ejercisio entregado por DALTO

A) 3 chicos de 23 años perfectamente normales entran en la heladeria a comprar un helado 
   pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado.
   Ellos quieren comprar el helado mas caro que puedan con el dinero que tienen, asi que...
   veamos que como podemos ayudarlos.

   Roberto tiene $1.5 USD
   Pedro tiene $1.7 USD
   Cofla tiene $3 USD

   Los precios de helados son los siguientes:
   Palito de helado de agua: $0.6 USD
     ||   ||   ||   ||  crema: $1 USD
   bombóm helado marca heladix: $1.6 USD
   bombóm helado marca heladovich: $1.7 USD
   bombóm helado marca helardo: $1.8 USD
   Potecito de helado con confites: $2.9 USD
   Pote de 1/4 KG: $2.9 USD

   Crear las soluciones:

   - Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro
   - Si hay 2 o mas helados con el mismo precio, mostrar ambos
   - Cofla quiere saber cuanto es el vuelto

*/

/* codigo para recorrer todo un array y sus elementos 

let arrayHelados = ['Helado Agua', 'Helado Crema', 'Bombóm Heladix', 'Bombóm Heladovich', 'Bombóm Helardo', 'Pote Confites', 'Pote 1/4 KG'];

arrayHelados.forEach(function(elemento, indice, array) {
    console.log(elemento);
})

*/

/*Solución propia 1 Intento de forEach*/

let roberto = 1.5;
let pedro = 1.7;
let cofla = 3;
let arrayHelados = [
  "Helado Agua",
  "Helado Crema",
  "Bombóm Heladix",
  "Bombóm Heladovich",
  "Bombóm Helardo",
  "Pote Confites",
  "Pote 1/4 KG",
];
let montoCliente = prompt("Ingrese su monto por favor");

if (montoCliente == roberto) {
  alert(`Le alcanza solo para: ${arrayHelados[0]}, ${arrayHelados[1]}`);

  alert(`Si lleva ${arrayHelados[0]}, su vuelto es de: $0.9 USD,
    si lleva ${arrayHelados[1]}, su vuelto es de: $0.5 USD`);
} else if (montoCliente == pedro) {
  alert(`le alcanza para: ${arrayHelados[(0, 1, 2, 3)]}`);

  alert(`Si elige ${arrayHelados[0]}, su vuelto sera de: $1.1 USD,
    Si elige ${arrayHelados[1]}, su vuelto sera de: $0.7 USD,
    Si elige ${arrayHelados[2]}, su vuelto sera de: $0.1 USD,
    Si elige ${arrayHelados[3]}, no tendra vuelto.`);
} else if (montoCliente == cofla) {
  //alert(`le alcanza para: ${arrayHelados}`);
  arrayHelados.forEach(function (elemento, indice, array) {
    alert(`le alcanza para: ${elemento}`);
  });
  alert(`Si elige ${arrayHelados[0]}, su vuelto sera de: $2.4 USD,
    Si elige ${arrayHelados[1]}, su vuelto sera de: $2 USD,
    Si elige ${arrayHelados[2]}, su vuelto sera de: $1.4 USD,
    Si elige ${arrayHelados[3]}, su vuelto sera de: $1.3 USD,
    Si elige ${arrayHelados[4]}, su vuelto sera de: $1.2 USD,
    Si elige ${arrayHelados[5]}, su vuelto sera de: $0.1 USD,
    Si elige ${arrayHelados[6]}, su vuelto sera de: $0.1 USD,.`);
} else {
  alert("Ingrese un monto correcto!!!!,");
}

/* Solución 2

if (montoCliente == roberto) {
    alert(`Le alcanza solo para: ${arrayHelados[0]}, ${arrayHelados[i]}`);

    alert(`Si lleva ${arrayHelados[0]}, su vuelto es de: $0.9 USD,
        si lleva ${arrayHelados[1]}, su vuelto es de: $0.5 USD`);
}
else if (montoCliente == pedro) {
    alert(`le alcanza para: ${arrayHelados[0, 1, 2, 3]}`);

    alert(`Si elige ${arrayHelados[0]}, su vuelto sera de: $1.1 USD,
           Si elige ${arrayHelados[1]}, su vuelto sera de: $0.7 USD,
           Si elige ${arrayHelados[2]}, su vuelto sera de: $0.1 USD,
           Si elige ${arrayHelados[3]}, no tendra vuelto.`);
}
else if (montoCliente == cofla) {
    alert(`le alcanza para: ${cantidadHelados}`);

    alert(`Si elige ${arrayHelados[0]}, su vuelto sera de: $2.4 USD,
           Si elige ${arrayHelados[1]}, su vuelto sera de: $2 USD,
           Si elige ${arrayHelados[2]}, su vuelto sera de: $1.4 USD,
           Si elige ${arrayHelados[3]}, su vuelto sera de: $1.3 USD,
           Si elige ${arrayHelados[4]}, su vuelto sera de: $1.2 USD,
           Si elige ${arrayHelados[5]}, su vuelto sera de: $0.1 USD,
           Si elige ${arrayHelados[6]}, su vuelto sera de: $0.1 USD,.`)
}
else {
    alert('Ingrese yn monto correcto!!!!,');
}
*/


/* Solución DALTO

dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla; comprate el helado de agua");
	alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("cofla; comprate el helado de crema");
	alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla; comprate el helado de heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("cofla; comprate el helado de heladovich");
	alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla; comprate el helado de helardo");
	alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroCofla - 2.9));

} else {
	alert("lo siento cofla, pobre de mierda, no te alcanza para ningun helado");
}





if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento roberto, pobre de mierda, no te alcanza para ningun helado");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento pedro, pobre de mierda, no te alcanza para ningun helado");
}

*/