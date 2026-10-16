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
    let palabraArray=palabra.toLowerCase().split("")
    while(!palabraArray.every(letra => LETRAS.includes(letra))){
        alert("tienes que introducir una palabra válida!")
        let palabra = prompt(message)
        palabraArray=palabra.toLowerCase().split("")
    }
    return palabraArray
}

function findPalabra(mensaje, palabra){
    const palabras=mensaje.split('')
    const posiciones=[]
    
    

    return posiciones
}

let mensaje = pedirMensaje("Introduce una frase:")
let palabraArray = pedirPalabra("Introduce una palabra ")

//"La casa de mi vecino es una casa verde"
//["La","casa"]