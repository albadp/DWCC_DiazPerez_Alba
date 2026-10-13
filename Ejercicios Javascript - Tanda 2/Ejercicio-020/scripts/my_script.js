/***************************************************************************************************************
 *
 *   Objetivo: Refuerzo en la programación según las especificaciones del programa a resolver
 *             Aprender a plantearse la solución de formas menos convencionales
 *             Aprender a emplear programación funcional
 *             Aprender las diferencias entre objetos String y Array
 *             Aprender a definir objetos
 *
 *   Tarea: Solicitar al usuario una cadena de texto. Crear y mostrar un objeto con la frecuencia del número de vocales
 *
 *   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
 *
 *   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
 *
 ***************************************************************************************************************/

const CHAR = "abcdefghijklmnopqrstuvexyzáéíóú "

function pedirMensaje(message){
    let mensaje = prompt(message)
    let mensajeArray=mensaje.toLowerCase().split("")
    while(!mensajeArray.every(caracter => CHAR.includes(caracter))){
        alert("tienes que introducir un mensaje válido!")
        let mensaje = prompt(message)
        mensajeArray = mensaje.toLowerCase().split("")
    }
    return mensajeArray
}

function vocales(mensaje){
    let vocalA = 0
    let vocalE = 0
    let vocalI = 0
    let vocalO = 0
    let vocalU = 0
    for (let i = 0; i < mensaje.length; i++){
        if(mensaje[i] == "a" || mensaje[i] == "á" ){
            ++vocalA
        } else if (mensaje[i] == "e" || mensaje[i] == "é"){
            ++vocalE
        } else if (mensaje[i] == "i" || mensaje[i] =="í"){
            ++vocalI
        } else if (mensaje[i] == "o" || mensaje[i] == "ó"){
            ++vocalO
        } else if (mensaje[i] == "u" || mensaje[i] == "ú"){
            ++vocalU
        }
    }
    return `En el mensaje hay ${vocalA} a, ${vocalE} e, ${vocalI} i, ${vocalO} o y ${vocalU} u`
}

let mensaje = pedirMensaje("Introduce una cadena de texto:")

console.log(vocales(mensaje))



