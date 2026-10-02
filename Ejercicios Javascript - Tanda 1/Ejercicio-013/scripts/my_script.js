/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas / condicionales
 *             Mejorar la lógica de programación
 *             Aprender a definir arrays
 *             Aprender a convertir cadenas en arrays
 *             Aprender a emplear métodos de programación funcional
 *             
 *   Tarea: Calcular los puntos de una palabra:
 *            - Cada letra tiene un valor asignado. Por ejemplo, en el abecedario español de 27 letras, la A vale 1 y la Z 27.
 *            - El valor de la palabra es la suma del valor de las letras
 *            - Se muestra el valor de los puntos de cada palabra introducida y finalizamos si introducimos una palabra de 100 puntos.
 * 
 *   Entrada : palabra (de forma repetida mientras no tenga 100 puntos)
 *
 *   Salida  : La palabra es de XXX puntos. 
 *
 ***************************************************************************************************************/


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

function puntuarPalabra(palabraArray){

}

let palabraArray = pedirPalabra("Introduce una palabra (hasta llegar a 100 puntos):")