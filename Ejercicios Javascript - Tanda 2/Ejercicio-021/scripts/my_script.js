/***************************************************************************************************************
 *
 *   Objetivo: Comprender la programación recursiva
 *
 *   Tarea: Realizar dos funciones para:
 *                - Imprimir por consola los números desde n al 0 iterativamente
 *                - Imprimir por consola los números del n al 0 recursivamente
 *
 *   Entrada : numero entero n entre -20 y 20
 *
 ***************************************************************************************************************/


// Imprimimos directamente cada número

// No es una buena solución si quisieramos procesar más tarde
// los datos para otra cosa

/*
function imprimirIterativo(n) {
  console.log(n)
  while (n!=0) {
    n >0 ? --n : ++n;
    console.log(n);
  } 
}

function imprimirRecursivo(n) {
  console.log(n);
  if (n == 0) return;
  n>0 ? imprimirRecursivo(n - 1): imprimirRecursivo(n + 1);
}

imprimirIterativo(-4);
imprimirRecursivo(-4);
*/

// Almacenamos los datos en un array y los devolvemos
function storeIterativo(n){
  let numbers=[n]
  while (n!=0) {
    n = n >0 ? --n : ++n;
    numbers.push(n)
  } 
  return numbers
}

function storageRecursivo(...n){
  if (n[n.length-1]==0) {
    return n
  }

  (n[n.length-1]>0) 
      ? n.push(n[n.length-1]-1) 
      : n.push(n[n.length-1]+1)

  return storageRecursivo(...n)
}

console.log(storeIterativo(-4).join(", "))
console.log(storageRecursivo(-4).join(", "))

