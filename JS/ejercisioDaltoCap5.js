/* Explicación del ejercisio cap5 

A)  Terminó el primer semestre y cofla no sabe si aprobara o no las materias,
    para lograrlo necesitara: Contar con al menos el 90% de asistencia
    El promedio por materia debe ser de al menos 7 / 10
    Debe tener al menos del 75% de los trabajos prácticos entregados

    Crear Soluciones:

    - Solicitar los datos y decirle si aprueba o no.
    - Mostrar todo esto con colores representativos en la consola (ej: no aprobar en rojo)

*/

/* Solución  
let asistenciaPromedio = prompt('Ingrese su porcentaje de asistencia: ');
let promedioMateria = prompt('Ingrese su promedio de materias: ');
let promedioTrabajosEntregados = prompt('Ingrese el porcentaje de trabajos entregados: ');

function cierreSemestre(asis, promateria, proentrega) {
    if (asis >= 90 && promateria >= 7 && promateria >= 7) {
        console.log('%c Felicidades aprobaste el semestre', 'color: green');
    }
    else if (asis < 90 || promateria < 7 || promateria < 7) {
        console.log('%c Lo lamento reprobaste el semestre', 'color: red');
    }
    else {
        console.error('Ingrese un dato valido');
    }
}

cierreSemestre(asistenciaPromedio, promedioMateria, promedioTrabajosEntregados);

*/