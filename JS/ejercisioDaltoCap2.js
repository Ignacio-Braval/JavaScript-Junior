/* Explicación ejercisio entregado por dalto capitulo2

A) Un joven afortunado logro ganar el primer premio de la loteria...
   cofla decide hacer una fiesta para festejar solo para mayores de edad.

   - Dejar pasar solo a mayores de edad
   - La primer persona que entre despues de las 2AM, no paga.

*/

/* Función para generar un numero aleatorio   
function aleatorio(inferior = 0, superior = 24) {
   var numPosibilidades = superior - inferior;
   var aleatorio = Math.random() * (numPosibilidades + 1);
   aleatorio = Math.floor(aleatorio);
   console.log(aleatorio);
   return inferior + aleatorio;
   
}
*/

//aleatorio();

/*Solución Definitiva, incluye un ramdom para que genere la hora de entrada al azar*/
function celebracionCofla() {
  let dimeEdad = prompt("Dime tu edad por favor");
  if (dimeEdad >= 18) {
    let superior = 24;
    let inferior = 0;
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    alert(aleatorio);
    if (aleatorio == 2) {
      alert("Es GRATIS");
      alert("Puedes pasar a la celebración");
    } else {
      alert("Debes pagar");
    }
  } else {
    alert("Lo lamento eres menor de edad, NO puedes entrar");
  }
}

celebracionCofla();
