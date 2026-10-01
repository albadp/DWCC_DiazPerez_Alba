/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear métodos del objeto Math
 *             Reforzar el uso de estructuras repetitivas
 *             Aprender a definir arrays con el método estático Array.from
 *             Aprender a usar funciones anónimas
 *             Aprender a emplear el método map del objeto Array para la programación funcional
 *
 *   Tarea: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
 *
 *   Entrada : inicio, fin
 *
 *   Salida  : inicio², (inicio+1)², ..... (fin)²
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

// Version SIN array. Acumulamos cadenas y "quitamos" los ultimos 2 caracteres (, ) en el último
function cuadrados1(inicio, fin) {
  let resultado = "";
  for (let i = inicio; i <= fin; i++) {
    resultado += `${i * i}, `;
  }
  return resultado.slice(0, -2);
}

// Version clásica con array
function cuadrados2(numeros) {
  let cuadrados = [];
  if (numeros.length) {
    for (let i = 0; i < numeros.length; i++)
      cuadrados.push(numeros[i] * numeros[i]);
  }
  return cuadrados;
}

// Versión más moderna que la anterior con array
function cuadrados3(numeros) {
  let cuadrados = [];
  numeros.forEach((el) => cuadrados.push(el * el));
  return cuadrados;
}

// Versión con "programación funcional" con array
// Arrow function que calcula el cuadrado de todos los números del array
const cuadrados4 = (numeros) => numeros.map((el) => el * el);

let numero1 = getDato("Inicio", "int", 1);
let numero2 = getDato("Fin", "int", 1);
while (numero2 < numero1) {
  alert("El fin debe ser mayor o igual al inicio");
  numero2 = getDato("Fin", "int", 1);
}

// SIN ARRAY
console.log(cuadrados1(numero1, numero2));

// CON ARRAYs
// Creamos un array con los numeros desde numero1 a numero2
// longitud del array: numero2-numero1+1
const numeros = Array.from(
  { length: numero2 - numero1 + 1 },
  (el, i) => numero1 + i,
);

console.log(cuadrados2(numeros).join(", "));
