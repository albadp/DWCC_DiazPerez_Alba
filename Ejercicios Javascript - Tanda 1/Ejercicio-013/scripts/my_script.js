/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas / condicionales
 *             Mejorar la lógica de programación
 *             Aprender a definir arrays
 *             Aprender a convertir cadenas en arrays
 *             Aprender a emplear métodos de programación funcional
 *
 *   Tarea: Calcular los puntos de una palabra:
 *            - Cada letra tiene un valor asignado. Por ejemplo, en el abecedario español de 27 letras, la A vale 1 y la Z 27.
 *            - El valor de la palabra es la suma del valor de las letras
 *            - Se muestra el valor de los puntos de cada palabra introducida y finalizamos si introducimos una palabra de 100 puntos.
 *
 *   Entrada : palabra (de forma repetida mientras no tenga 100 puntos)
 *
 *   Salida  : La palabra es de XXX puntos.
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

const ABCEDARIO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let palabra = getDato("Palabra", "string");
let letrasPalabra = palabra.toUpperCase().split("");

// Repetimos el proceso mientras tengamos letras en la palabra
// que no se encuentren en ABC
while (!letrasPalabra.every((letra) => ABCEDARIO.includes(letra))) {
  alert("La palabra solo con letras del abecedario inglés");
  palabra = getDato("Palabra", "string");
  letrasPalabra = palabra.toUpperCase().split("");
}

// Calculamos la suma del valor de cada letra
// El valor de cada letra es la posicion de la letra en ABC + 1
let puntosPalabra = letrasPalabra.reduce(
  (anterior, actual) => anterior + ABCEDARIO.indexOf(actual) + 1,
  0,
);

console.log(`La palabra es de ${puntosPalabra} puntos`);
