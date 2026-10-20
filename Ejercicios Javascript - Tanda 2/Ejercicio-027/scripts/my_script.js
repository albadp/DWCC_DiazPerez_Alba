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

function posicionesCeros(num){
    const posiciones = []
    for (let i = 0; i < num.length; i++){
        if(num.startsWith("0",i)){
            posiciones.push(i)
        }
    }
    return posiciones
}

function secuenciaCeros(posiciones){
    
}


let num = pedirNum("Introduce un número para hayar la secuencia de ceros: ")