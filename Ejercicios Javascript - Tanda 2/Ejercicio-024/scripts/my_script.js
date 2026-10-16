/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso de métodos de los objetos String, Array, Math, ...
 *             Aprender a definir funciones
 *             Aprender a crear una función expresada
 *             Aprender a crear una función anónima
 *             ¿Conoces los métodos endswith, padStart y padEnd de las cadenas?
 *
 *   Tarea: n es automorfico si su cuadrado termina en n
 *
 *   Entrada : n
 *
 *   Salida  : true o false
 *
 ***************************************************************************************************************/

function pedirNum(message) {
    let num = parseInt(prompt(message))
    while (isNaN(num)) {
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function automorfico(num) {
    let cuadrado = `${Math.pow(num,2)}`
    return cuadrado.endsWith(`${num}`)
}

let num = pedirNum("Introduce un número entero: ")

automorfico(num) ? console.log("Es automórfico") : console.log("No es automórfico")


