/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas
 *
 *   Tarea: Se solicita un número entero n entre 1 y 10 al usuario.
 *          Se mostrará una pirámide de la siguiente forma:
 *
 *                 1
 *                2 2
 *               3 3 3
 *              4 4 4 4
 *                ...
 *          n n n n n n n (n veces)
 *
 *          Realizar en ejercicio con for, while, do while
 *
 *   Entrada : numero entero: n
 *
 *   Salida  : La pirámide mostrada en la tarea del ejercicio
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

function piramide(base) {
  let figura = "";
  for (let i = 1; i <= base; i++) {
    //figura += " ".repeat(base - i) + `${i} `.repeat(i) + "\n";
    figura += `${" ".repeat(base - i)} ${(i + " ").repeat(i)}\n`;
  }
  return figura;
}

let n = getDato("Base", "int", 1, 9);
console.log(piramide(n));
