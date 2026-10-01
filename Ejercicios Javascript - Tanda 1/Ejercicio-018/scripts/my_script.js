/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir y usar funciones
 *             Entender la diferencia entre funciones declaradas y funciones expresadas
 *             Mejorar la lógica de programación
 *             Aprender a usar funciones anónimas (adicional)
 *             Aprender a definir arrays con el método estático Array.from (adicional)
 *             Aprender a emplear métodos del objeto Array para la programación funcional (adicional)
 *
 *   Tarea: Generar los primeros n números primos
 *
 *          Nota: Un número n es primo si sólo es divisible por 1 y por n
 *
 *   Entrada : numero entero
 *
 *   Salida  : 1, 3, 5, 7, ...
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

// Con for y ruptura con break si encuentra algún divisor
function isPrime1(n) {
  let esPrimo = false;

  // Hay que asegurarse que introducimos un entero positivo
  if (n > 0) {
    esPrimo = true;
    // Si n es 1, 2 o 3 es primo
    if (n > 3) {
      for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i == 0) {
          esPrimo = false;
          break;
        }
      }
    }
  }

  return esPrimo;
}

// La misma que la anterior pero con un bucle do while
// Empleamos la variable centinela "end" para salir del bucle
function isPrime2(n) {
  let esPrimo = false;

  // Hay que asegurarse que introducimos un entero positivo
  if (n > 0) {
    let end = false;
    esPrimo = true;

    // Si n es 1, 2 o 3, es primo
    if (n > 3) {
      let i = 2;
      do {
        if (n % i == 0) {
          esPrimo = false;
          end = true;
        }
        i++;
      } while (!end && i <= Math.sqrt(n));
    }
  }

  return esPrimo;
}

// Con programacion funcional
function isPrime3(n) {
  let esPrimo = false;

  if (n > 0) {
    esPrimo = true;

    if (n > 3) {
      // Generamos un array con números desde 2 hasta n-1
      const numeros = Array.from({ length: n - 2 }, (el, i) => i + 2);

      // Nos quedamos sólo con aquellos elementos del array que dividan a n
      // Como no incluimos en el array a 1 y n, será primo si la longitud del array es cero
      //esPrimo = numeros.filter((el) => n % el == 0).length == 0 ? true : false;
      esPrimo = !numeros.filter((el) => n % el == 0).length;
    }
  }
  return esPrimo;
}

// OBTENER LOS n PRIMEROS PRIMOS

// Obtiene directamente los n primeros primos
function getPrimes1(n) {
  let esPrimo;
  const primos = [];

  let i = 1;
  do {
    let end = false;
    esPrimo = true;
    if (i > 3) {
      let j = 2;
      do {
        if (i % j == 0) {
          esPrimo = false;
          end = true;
        }
        j++;
      } while (!end && j <= Math.sqrt(i));
    }

    if (esPrimo) {
      primos.push(i);
    }
    i++;
  } while (primos.length < n);

  return primos;
}

// Obtiene los n primeros primos comprobando si cada número es primo
// llamando a isPrime (podemos emplear isPrime1, isPrime2 o isPrime3)
function getPrimes2(n) {
  const primos = [];

  let i = 1;
  do {
    if (isPrime3(i)) {
      primos.push(i);
    }
    i++;
  } while (primos.length < n);

  return primos;
}

let limite = getDato("Cuantos primos quieres ?", "int", 1);
console.log(getPrimes1(limite).join(", "));
console.log(getPrimes2(limite).join(", "));

// OBTENER LOS PRIMOS HASTA n
/*
// Obtiene directamente los primos hasta n
function primes1(n) {
  let esPrimo;
  const primos = [];
  for (let i = 1; i <= n; i++) {
    let end = false;
    esPrimo = true;
    if (i > 3) {
      let j = 2;
      do {
        if (i % j == 0) {
          esPrimo = false;
          end = true;
        }
        j++;
      } while (!end && j <= Math.sqrt(i));
    }

    if (esPrimo) {
      primos.push(i);
    }
  }
  return primos;
}

// Obtiene los primos hasta n comprobando si cada número es primo
// llamando a isPrime
function primes2(n) {
  const primos = [];

  for (let i = 1; i <= n; i++) {
    if (isPrime1(i)) {
      primos.push(i);
    }
  }

  return primos;
}

// Obtiene los primos hasta n comprobando si cada número es primo
// programacion funcional
function primes3(n) {
  // Array con los números de 1 hasta n
  const primos = Array.from({ length: n }, (el, i) => i + 1);

  // Los filtramos empleando isPrime
  //return primos.filter((el) => isPrime1(el));
  return primos.filter((el) => isPrime2(el));
  //return primos.filter((el) => isPrime3(el));
}

let limite = getDato("Numeros primos hasta el....", "int", 1);
console.log(primes1(limite));
console.log(primes2(limite));
console.log(primes3(limite));
*/
