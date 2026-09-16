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

let numero1 = prompt("Introduce el primer número:")
let numero2 = prompt("Introduce el segundo número:")

let suma = Number(numero1) + Number(numero2)
let resta = Number(numero1) - Number(numero2)
let multiplicacion = Number(numero1) * Number(numero2)
let division = Number(numero1) / Number(numero2)

if(isNaN.numero1 && isNaN.numero2){
    alert("Introduce un número en formato de dígito!")
} else {
    console.log(`La suma de numero1 y numero2 es: ${suma.toFixed(2)}`)
    console.log(`La resta de numero1 y numero2 es: ${resta.toFixed(2)}`)
    console.log(`El producto de numero1 y numero2 es: ${multiplicacion.toFixed(2)}`)
    console.log(`La division de numero1 entre numero2 es: ${division.toFixed(2)}`)
}


