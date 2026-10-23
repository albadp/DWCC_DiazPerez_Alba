/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a plantearse mejorar la forma de resolver un problema una vez ya fue resuelto
 *
 *   Tarea: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
 *          por una pandemia
 *
 *   Entrada : segundos
 *
 *   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
 *
 ***************************************************************************************************************/


function pedirNum(message) {
    let num = prompt(message)
    while (isNaN(num) && num > 0) {
        alert("Tienes que introducir un número positivo en dígito")
        num = prompt(message)
    }
    return num
}

function getTiempo(num){
    
}



let num = pedirNum("Introduce un número para hayar la secuencia de ceros: ")
