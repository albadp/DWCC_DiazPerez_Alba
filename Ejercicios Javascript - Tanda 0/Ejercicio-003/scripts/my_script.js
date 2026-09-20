/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear operadores aritméticos
 *             Aprender a emplear funciones definidas y expresadas
 *             Aprender a emplear métodos del objeto Math
 *
 *   Tarea: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
 *          a hacer frio o calor.
 *          Crear un script Javascript que solicite una temperatura en grados Fahrenheit y la convierta
 *          a grados Celsius.
 *          Ten en cuenta que la temperatura Celsius se calcula a través de
 *
 *                  Celsius = 5/9 * (Fahrenheit-32)
 *
 *   Entrada : un número flotante que representa la temperatura Fahrenheit
 *
 *   Salida  : un número flotante con 2 decimales como máximo que representa la temperatura Celsius correspondiente
 *
 *
 ***************************************************************************************************************/

// Obtenemos un número entero o flotante
function getNumber(message) {
  let dato = prompt(message);
  while (isNaN(dato)) {
    alert("Error: Debes introducir un número !");
    dato = prompt(message);
  }
  return parseFloat(dato);
}

let fahrenheit = getNumber("Introduce la temperatura en Farenheit:");

//Podemos realizar el cálculo directamente y almacenarlo en una variable:
// let celsius = (5 / 9) * (fahrenheit - 32);
// o emplear una función (más útil en el caso de querer llamarla desde varios puntos)
const toCelsius = (fahrenheit) => ((5 / 9) * (fahrenheit - 32)).toFixed(2);
alert(`La temperatura en Celsius es de ${toCelsius(fahrenheit)}`);
