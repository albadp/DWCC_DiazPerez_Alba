/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Métodos inplace de arrays ! (ej. sort, reverse)
 *
 *   Tarea: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *          P.ej: Dabale arroz a la zorra el abad
 *
 *   Entrada : Cadena de texto
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *
 ***************************************************************************************************************/

function pedirMensaje(message){
    let mensaje = prompt(message)
    return mensaje
}

function esPalindromo(mensaje){
    let sinEspacios = mensaje.replaceAll(" ","")
    let mensajeArray = sinEspacios.toLowerCase().split("")
    //Por revisar
    // let bool = true
    //     if (mensajeArray != mensajeArray.reverse()){
    //         bool = false
    //     }
    return bool
}

let mensaje = pedirMensaje("Introduce una frase:")

esPalindromo(mensaje) ? console.log("Es palíndromo") : console.log("No es palíndromo")



