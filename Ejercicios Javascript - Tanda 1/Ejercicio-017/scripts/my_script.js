/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear estructuras de control repetitivas.
 *             Aprender a emplear funciones definidas por el usuario.
 *             Aprender difetentes formas de crear arrays
 *             Entender las funciones anónimas
 *             Aprender a emplear métodos del objeto Array para programación funcional
 *
 *   Tarea: Definir una función a la que se le pase un array de enteros y devuelva el número total de bumeranes
 *          de un array de números enteros e imprima cada uno de ellos:
 *              - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos,
 *                en el que el primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
 *              - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

// Se permiten solapamientos
// Aunque un numero ya pertenezca a un boomerang, puede pertenecer a otro
function getBoomerangs1(numeros) {
  const boomerangs = [];

  for (let i = 1; i < numeros.length - 1; i++) {
    if (numeros[i - 1] == numeros[i + 1] && numeros[i - 1] !== numeros[i]) {
      let boomerang = [];
      boomerang.push(numeros[i - 1]);
      boomerang.push(numeros[i]);
      boomerang.push(numeros[i + 1]);
      boomerangs.push(boomerang);
    }
  }
  return boomerangs;
}

// No se permiten solapamientos
// Si un numero ya pertenece a un boomerang, no puede pertenecer a otro
function getBoomerangs2(numeros) {
  const boomerangs = [];

  let i = 1;
  while (i < numeros.length - 1) {
    if (numeros[i - 1] == numeros[i + 1] && numeros[i - 1] !== numeros[i]) {
      let boomerang = [];
      boomerang.push(numeros[i - 1]);
      boomerang.push(numeros[i]);
      boomerang.push(numeros[i + 1]);
      boomerangs.push(boomerang);
      i += 3;
    } else {
      i++;
    }
  }
  return boomerangs;
}

const vector1 = [2, 1, 2, 3, 3, 4, 2, 4];
const vector2 = [2, 1, 2, 4, 2, 4, 2, 4];
console.log(getBoomerangs1(vector1));
console.log(getBoomerangs1(vector2));
console.log(getBoomerangs2(vector2));
