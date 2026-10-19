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
    let mensajeArray = mensaje.split("")
    let copiaArray = mensaje.split("")
    copiaArray.reverse()

    /*
    let bool = true
    for(let i = 0; i < mensajeArray.length; i++){
        if (mensajeArray[i] != copiaArray[i]){
            bool = false
        }
    }
    return bool
   */
    return mensajeArray.join('') == copiaArray.join('')
}

function esPalindromoRecursivo(mensaje){
    if(mensaje.length < 2){
        return true
    }
    return mensaje[0] == mensaje[mensaje.length-1] && esPalindromoRecursivo(mensaje.slice(1,-1))
}

let mensaje = pedirMensaje("Introduce una frase:")
let sinEspacios = mensaje.replaceAll(" ","")
let mensajeMin = sinEspacios.toLowerCase()

let msg = esPalindromo(mensajeMin) ? "Es palíndromo" : "No es palíndromo"
console.log(msg)
console.log("______________________________________________")

let msgRec = esPalindromoRecursivo(mensajeMin) ? "Es palíndromo" : "No es palíndromo"
console.log(msgRec)


