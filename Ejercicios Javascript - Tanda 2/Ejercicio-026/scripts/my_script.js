/***************************************************************************************************************
 *
 *   Objetivo: Reformar en lógica de programación
 *             Aprender nuevos métodos de String/Array
 *             Aprender a programar pensando en datos de entrada
 *             Reforzar en la programación funcional
 *             Reforzar en el uso de métodos de array
 *
 *   Tarea: Solicita un texto y una palabra.
 *
 *   Entrada : cadenas de texto: texto, palabra
 *
 *   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
 *
 ***************************************************************************************************************/

function pedirMensaje(message){
    let mensaje = prompt(message)
    return mensaje
}

const LETRAS = "abcdefghijklmnopqrstuvexyz"

function pedirPalabra(message){
    let palabra = prompt(message)
    let palabraArray = palabra.toLowerCase().split("")
    while(!palabraArray.every(letra => LETRAS.includes(letra))){
        alert("tienes que introducir una palabra válida!")
        let palabra = prompt(message)
        palabraArray = palabra.toLowerCase().split("")
    }
    return palabraArray
}

function findPalabra(mensaje, palabra) {
    let mensajeMin = mensaje.toLowerCase()
    let pal = palabra.toString()
    let palabraStr = pal.replaceAll(",","")
    const posiciones = []
    for (let i = 0; i < mensajeMin.length; i++){
        if(mensajeMin.startsWith(palabraStr,i)){
            posiciones.push(i)
        }
    }
    return posiciones
}

let mensaje = pedirMensaje("Introduce una frase:")
let palabraArray = pedirPalabra("Introduce una palabra ")

let msg = findPalabra(mensaje,palabraArray)!=[] ? "Las posiciones son: "+ findPalabra(mensaje,palabraArray) : "La palabra no está en el mensaje"
//"La casa de mi vecino es una casa verde" -> 3,28
console.log(msg)