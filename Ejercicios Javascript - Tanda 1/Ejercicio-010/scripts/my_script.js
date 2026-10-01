/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *
 *   Tarea: Solicitamos tres números al usuario e indicamos cual es el mayor
 *
 *   Entrada : numero1, numero2, numero3
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 ***************************************************************************************************************/

import getDato from "../../../pedirDatos.js";

// Devuelve el maximo de n1,n2 y n3
function maximo1(n1, n2, n3) {
  let max = n1;

  if (n2 > max) {
    max = n2;
  }
  if (n3 > max) {
    max = n3;
  }
  return max;
}

// Empleando Math.max
const maximo2 = (n1, n2, n3) => Math.max(n1, n2, n3);

// Convirtiendo la entrada en un array
function maximo3(...numeros) {
  console.log(numeros);
  let max = numeros.length ? numeros[0] : null;

  numeros.forEach((el) => (max = el > max ? (max = el) : max));

  return max;
}

// numeros: Array
function maximo4(numeros) {
  /* 
     Puede que no pasemos el array como parámetro por lo que tenemos que
     emplear el operador optional chaining para evitar errores 
  */
  let max = numeros?.length ? numeros[0] : null;

  numeros?.forEach((el) => (max = el > max ? (max = el) : max));

  return max;
}

// numeros: Array
function maximo5(numeros) {
  /* 
     Puede que no pasemos el array como parámetro por lo que tenemos que
     emplear el operador optional chaining para evitar errores 
  */
  return numeros?.length ? Math.max(...numeros) : null;
}

let numero1 = getDato("Numero 1", "float");
let numero2 = getDato("Numero 2", "float");
let numero3 = getDato("Numero 2", "float");

console.log(maximo1(numero1, numero2, numero3));
console.log(maximo2(numero1, numero2, numero3));
console.log(maximo3(numero1, numero2, numero3));

console.log(maximo4([numero1, numero2, numero3]));
console.log(maximo5([numero1, numero2, numero3]));
