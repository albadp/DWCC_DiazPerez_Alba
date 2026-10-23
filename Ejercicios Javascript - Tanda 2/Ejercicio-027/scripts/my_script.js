/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en la lógica de programación
 *
 *   Tarea: Obtener la secuencia más larga de ceros indicando la posición de inicio. En caso de que existan varias,
 *          se indicará la primera.
 *
 *   Entrada : "011000010110000"
 *
 *   Salida  : Secuencia: "0000"   Posicion: 3
 *
 ***************************************************************************************************************/

function pedirNum(message) {
    let num = prompt(message)
    while (isNaN(num)) {
        alert("Tienes que introducir un número en dígito")
        num = prompt(message)
    }
    return num
}

function secuenciaCeros(num, char){
    if (num && num.includes(char)) {
        let length = 1
        let position = num.indexOf(char.repeat(length))
        while(position != -1) {
            length++
            position = num.indexOf(char.repeat(length))
        }
        length--
        position = num.indexOf(char.repeat(length))
        secuencia = char.repeat(length)
    
    return {position, secuencia}
    }
    return "No se encuentra"
}


let num = pedirNum("Introduce un número para hayar la secuencia de ceros: ")
console.log(secuenciaCeros(num,"0"))
