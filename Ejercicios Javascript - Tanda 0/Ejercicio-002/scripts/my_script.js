/***************************************************************************************************************
 *
 *   Objetivo: Aprender a validar datos de entrada y realizar operaciones aritméticas entre datos solicitados.
 *             Aprender a emplear algún método del objeto Math.
 *             Emplear template strings con expresiones.
 *             Emplear funciones expresadas (arrow functions).
 *             Conocer las conversiones de tipos implícitas.
 *             Entender los errores de tipos de datos.
 *
 *   Tarea: Solicitar al usuario que visita la página dos números enteros y mostrar en la consola el resultado de
 *          sumarlos, restarlos, multiplicarlos y dividirlos
 *
 *   Entrada : Dos números enteros: numero1, numero2
 *
 *   Salida  : La suma de numero1 y numero2 es: numero1+numero2
 *             La resta de numero1 y numero2 es: numero1-numero2
 *             El producto de numero1 y numero2 es: numero1*numero2
 *             La division de numero1 entre numero2 es: numero1/numero2
 *
 *   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
 *             ¿Cómo podemos limitar el número de decimales que se mostrarán?
 *             ¿Qué pasa si dividimos por 0?
 *             ¿Qué pasa si introducimos una cadena en vez de un número?
 *
 ***************************************************************************************************************/

/*
Dado que tenemos que solicitar dos números comprobando que sean enteros 
es preferible emplear una función
*/

function getInteger(message) {
  let dato = prompt(message);
  while (isNaN(dato) || parseInt(dato) !== parseFloat(dato)) {
    alert("Error: El número debe ser un entero !");
    dato = prompt(message);
  }
  return parseInt(dato);
}

// Podríamos haber definido funciones para realizar los cálculos:
const suma = (num1, num2) => num1 + num2;
//o emplear expresiones directamente en el template string ${numero1-numero2}

// Función que muestra el resultado
function showMessage(numero1, numero2) {
  console.log(`La suma de numero1 y numero2 es: ${suma(numero1, numero2)}`);
  console.log(`La resta de numero1 y numero2 es: ${numero1 - numero2}`);
  console.log(
    `La multiplicación de numero1 y numero2 es: ${numero1 * numero2}`
  );

  // ¿ Qué pasa si numero1 y numero2 son cero ?
  if (numero1 == 0 && numero2 == 0) console.log("No puedo dividir 0 por 0");
  else
    console.log(
      `La división de numero1 y numero2 es: ${(numero1 / numero2).toFixed(2)}`
    );
}

// CODIGO
let numero1 = getInteger("Introduce el primer numero");
let numero2 = getInteger("Introduce el segundo numero");
showMessage(numero1, numero2);
