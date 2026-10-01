/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear estructuras de control repetitivas.
 *             Aprender a emplear funciones definidas por el usuario.
 *             Aprender difetentes formas de crear arrays
 *             Entender las funciones anónimas
 *             Aprender a emplear métodos del objeto Array para programación funcional
 *
 *   Tarea: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 2 hasta ese numero
 *          Realizar 4 versiones: con for, while, do..while, con arrays y el método join
 *
 *   Entrada : numero entero n, n>=2
 *
 *   Salida  : 2, 4, 6, ..., n  (incluidas las coma y el espacio detras de cada número excepto el último)
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

function paresFor(n) {
  let pares = "";

  for (let i = 2; i <= n; i += 2) {
    pares += `${i}, `;
  }

  return pares.slice(0, -2);
}

function paresWhile(n) {
  let pares = "";

  let i = 2;
  while (i <= n) {
    pares += `${i}, `;
    i += 2;
  }

  return pares.slice(0, -2);
}

function paresDoWhile(n) {
  let pares = "";

  let i = 2;
  do {
    pares += `${i}, `;
    i += 2;
  } while (i <= n);

  return pares.slice(0, -2);
}

function paresArray1(n) {
  // Creamos un array con números desde 1 a n
  // Filtramos los pares
  // Los unimos en una única cadena
  return Array.from({ length: n }, (el, i) => i + 1)
    .filter((el) => el % 2 == 0)
    .join(", ");
}

function paresArray2(n) {
  // Creamos un array con los números pares directamente
  // Si n es par, la longitud del array es n/2, pero
  // si es impar tiene que ser (n-1)/2
  // Los valores en el array son 2*(i+1) donde i es el indice del array
  // Tenemos que tener en cuenta que i empieza en 0
  let longitud = n % 2 == 0 ? n / 2 : (n - 1) / 2;
  return Array.from({ length: longitud }, (el, i) => 2 * (i + 1)).join(", ");
}

let numero = getDato("Numero", "int", 2);

console.log(paresFor(numero));
console.log(paresWhile(numero));
console.log(paresDoWhile(numero));
console.log(paresArray1(numero));
console.log(paresArray2(numero));
