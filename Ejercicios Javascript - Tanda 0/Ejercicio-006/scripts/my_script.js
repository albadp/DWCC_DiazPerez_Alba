/***************************************************************************************************************
 *
 *   Objetivo: Reforzar lógica de programación
 *             Aprender a realizar operaciones matemáticas
 *
 *   Tarea: Solicitamos el número de caramelos y el número de niños, y calcule
 *          cuantos caramelos tocan por niño y cuantos sobran.
 *
 *   Entrada : nCaramelos, nPeques
 *
 *   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
 *                   El número de caramelos por niño es: XXXX
 *                   El número de caramelos que sobran es: YYYY
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let nVar = parseInt(prompt(message))
    while (isNaN(nVar)){
        alert("Tienes que introducir un número")
        nVar = parseInt(prompt(message))
    }
    return nVar
}

function asignarValor(message1, message2){
    let nCaramelos = pedirNum(message1)
    let nPeques = pedirNum(message2)
    return { nCaramelos, nPeques }
}

function calculoDiv(caramelos, peques){
    return caramelos/peques
}

function calculoMod(caramelos, peques){
    return caramelos%peques
}

let { nCaramelos, nPeques } = asignarValor("Introduce el número de caramelos: ", "Introduce el número de niños: ")

console.log(`El número de caramelos por niño es: ${calculoDiv(nCaramelos, nPeques)}`)
console.log(`El número de caramelos que sobran es: ${calculoMod(nCaramelos,nPeques)}`)

