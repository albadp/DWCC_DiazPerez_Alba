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

function pedirFloatante(message){
    let fahrenheit = parseFloat(prompt(message))
    while (isNaN(fahrenheit)){
        alert("Tienes que introducir un numero")
        fahrenheit = parseFloat(prompt(message))
    }
    return fahrenheit
}

const toCelsius=fahrenheit=>(5/9 + (fahrenheit-32)).toFixed(2)

let fahrenheit=pedirFloatante("Introduce los grados Fahrenheit:")
console.log(toCelsius(fahrenheit))
