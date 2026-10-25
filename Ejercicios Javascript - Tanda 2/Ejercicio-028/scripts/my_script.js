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
    const SEGUNDOS_SEMANA = 7 * 24 * 60 * 60
    const SEGUNDOS_DIA = 24 * 60 * 60
    const SEGUNDOS_HORA = 60 * 60
    const SEGUNDOS_MINUTO = 60

    let semanas = Math.floor(num / SEGUNDOS_SEMANA)
    num = num % SEGUNDOS_SEMANA
    let dias = Math.floor(num / SEGUNDOS_DIA)
    num = num % SEGUNDOS_DIA
    let horas = Math.floor(num / SEGUNDOS_HORA)
    num = num % SEGUNDOS_HORA
    let minutos = Math.floor(num / SEGUNDOS_MINUTO)
    let segundos = num % SEGUNDOS_MINUTO

    return `Hemos estado confinados ${semanas} semanas, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
}



let num = pedirNum("Introduce la cantidad de segundos: ")

console.log(getTiempo(num))