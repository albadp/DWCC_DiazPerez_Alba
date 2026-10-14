/***************************************************************************************************************
 *
 *   Objetivo: Aprender a buscar soluciones "no clásicas"
 *             Conocer métodos del objeto String
 *             Resolver problemas empleando programación funcional
 *
 *   Tarea: Mostrar un array de cadenas en forma rectangular
 *
 *   Entrada : una frase de texto
 *             P. ej.: Hola Mundo en un cuadrado
 *
 *   Salida  : la frase en un cuadrado
 * 
 *              ************
 *              * Hola     *
 *              * Mundo    *
 *              * en       *
 *              * un       *
 *              * cuadrado *
 *              ************
 *
 ***************************************************************************************************************/

function pedirMensaje(message){
    let mensaje = prompt(message)
    return mensaje
}

function encuadrar(mensaje){
    let arrayMensaje = mensaje.split(" ")
    let longitud = Math.max(...arrayMensaje.map(el => el.length)) + 4
    let cadena = "*".repeat(longitud) + "\n"
    for (const palabra of arrayMensaje){
        cadena += "* " + palabra + " ".repeat(longitud-palabra.length-3) + "*" + "\n"
    }
    cadena += "*".repeat(longitud) + "\n"
    return cadena
}

let mensaje = pedirMensaje("Introduce una frase:")

console.log(encuadrar(mensaje))

