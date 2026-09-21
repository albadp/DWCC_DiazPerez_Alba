/***************************************************************************************************************
 *
 *   Objetivo: Aprender a modificar el documento HTML
 *             Reforzar en el uso de template strings
 *             Reforzar el uso de estructuras de control repetitivas y condicionales
 *             Reforzar en la validación de datos de entrada
 *             Aprender a detectar y corregir errores
 *             Aprender a definir funciones y arrays (adicional)
 *             Aprender métodos de programación funcional (adicional)
 * 
 *   Tarea: Solicitaremos un número entero entre 1 y 9. Repetimos la solicitud mientras no esté entre 1 y 9.
 *          Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
 *
 *   Entrada : numero     1 <= numero <= 9
 *
 *   Salida  : 1 x numero = numero
 *             2 x numero = ....
 *             3 x numero = ....
 *                   ....
 *             9 x numero = ....
 *
 *   Nota: Formatea la salida en el documento HTML empleando una tabla con 5 columnas y nueve filas
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1 || num > 9)){
        alert("Tienes que introducir un número del 1 al 9:")
        num = parseInt(prompt(message))
    }
    return num
}

function crearArray(num){
    let arraySalida = []
    const rows = 9
    const col = 5
    for(let i = 1; i < rows; i++){
        arraySalida[i] = `${i} x ${num} = ${i*num}`
    }
    return arraySalida
}

let num = pedirNum("Introduce un número del 1 al 9:")

document.write(`<table>${crearArray(num).map(fila=>`<tr>${fila.split(" ").map(el=>`<td>${el}</td>`).join('')}</tr>`).join('')}<table>`)

