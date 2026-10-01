/***************************************************************************************************************
 *
 *   Objetivo: Aprender a programar para mejorar la eficiencia en el uso de recursos en programación
 *
 *   Tarea: Solicitamos un número tras otro al usuario hasta que ingresamos el número 0 (que no se tendrá en cuenta)
 *          Una vez terminada la lectura de números se informará cuál fue el mayor de los números y la suma de los mismos
 *
 *   Entrada : numero1, numero2, numero3,.....
 *
 *   Salida  : El mayor de numero1, numero2, numero3,.... es ..... La suma de todos ellos es ....
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

// Versión: Leemos los datos y los metemos en un array
//          Conforme los leemos, vamos viendo cual es el máximo y calculando la suma de todos ellos

const numeros = [];
let sumaTotal = 0;
let max = -Infinity;

let numero = getDato("Introduce un número (0 para terminar)", "float");
while (numero !== 0) {
  numeros.push(numero);
  sumaTotal += numero;
  if (numero > max) {
    max = numero;
  }
  numero = getDato("Introduce un número (0 para terminar)", "float");
}

let message = isFinite(max)
  ? `El mayor de ${numeros.join(
      ", ",
    )} es ${max}. La suma de todos ellos es ${sumaTotal}`
  : "Tienes que introducir números";

console.log(message);

/*
// Versión: Leemos los datos y acumulamos los números en una cadena
//          Conforme los leemos, vamos viendo cual es el máximo y calculando la suma de todos ellos

let numeros = "";
let sumaTotal = 0;
let max = -Infinity;

let numero = getDato("Introduce un número (0 para terminar)", "float");
while (numero !== 0) {
  numeros += `${numero}, `;
  sumaTotal += numero;
  if (numero > max) {
    max = numero;
  }
  numero = getDato("Introduce un número (0 para terminar)", "float");
}

let message = isFinite(max)
  ? `El mayor de ${numeros.slice(
      0,
      -2
    )} es ${max}. La suma de todos ellos es ${sumaTotal}`
  : "Tienes que introducir números";

console.log(message);
*/
