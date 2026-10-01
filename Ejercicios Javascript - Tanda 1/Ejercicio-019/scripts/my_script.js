/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en la programación funcional
 *             Reforzar en la lógica de programación
 *
 *   Tarea: Generar los n primeros números perfectos
 *
 *          Nota: Un número es perfecto cuando el número es igual a la suma de sus divisores. (6,28,496,8128,etc)
 *
 *   Entrada : número entero n
 *
 *   Salida  :
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

// Con programación imperativa
function isPerfect1(n) {
  let sumaDivisores = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sumaDivisores += i;
    }
  }
  return n == sumaDivisores;
}

// Con programaciopn funcional
function isPerfect2(n) {
  const numeros = Array.from({ length: n - 1 }, (el, i) => i + 1);
  return (
    n ==
    numeros
      .filter((el) => n % el == 0)
      .reduce((anterior, actual) => anterior + actual, 0)
  );
}

// Los n PRIMEROS NÚMEROS PERFECTOS

function getPerfects1(n) {
  const perfectos = [];

  let i = 1;
  do {
    // Obtenemos la suma de los divisores
    let sumaDivisores = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        sumaDivisores += j;
      }
    }
    // Si la suma de los divisores coincide con el número,
    // es perfecto
    if (i == sumaDivisores) {
      perfectos.push(i);
    }
    i++;
  } while (perfectos.length < n);

  return perfectos;
}

function getPerfects2(n) {
  const perfectos = [];

  let i = 1;
  do {
    if (isPerfect1(i)) {
      perfectos.push(i);
    }
    i++;
  } while (perfectos.length < n);

  return perfectos;
}

console.log(getPerfects1(4));
console.log(getPerfects2(4));

/*
// NUMEROS PERFECTOS HASTA n

// Obtenemos directamente los números perfectos y los almacenamos
// en un array
function perfects1(n) {
  const perfectos = [];
  for (let i = 1; i < n; i++) {
    let sumaDivisores = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        sumaDivisores += j;
      }
    }
    if (i == sumaDivisores) {
      perfectos.push(i);
    }
  }
  return perfectos;
}

// Obtenemos los números perfectos yendo desde 1 a n
// y comprobando si cada una es perfecto llamando a isPerfect
// Los almacenamos en un array
function perfects2(n) {
  const perfectos = [];
  for (let i = 1; i < n; i++) {
    if (isPerfect1(i)) {
      perfectos.push(i);
    }
  }
  return perfectos;
}

// Obtenemos los números perfectos con programacion funcional
// Creamos un array que tenga enteros desde 1 a n y los filtramos
// comprobando si son perfectos
function perfects3(n) {
  const numeros = Array.from({ length: n }, (el, i) => i + 1);
  return numeros.filter((el) => isPerfect2(el));
}

console.log(perfects1(9500));
console.log(perfects2(9500));
*/
