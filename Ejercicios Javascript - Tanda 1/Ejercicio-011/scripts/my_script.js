/***************************************************************************************************************
 *
 *   Objetivo: Aprender a programar para mejorar la eficiencia en el uso de recursos en programación
 *
 *   Tarea: Solicitamos un número tras otro al usuario hasta que ingresamos el número 0 (que no se tendrá en cuenta)
 *          Una vez terminada la lectura de números se informará cuál fue el mayor de los números y la suma de los mismos
 *
 *   Entrada : numero1, numero2, numero3,.....
 *
 *   Salida  : El mayor de numero1, numero2, numero3,.... es ..... La suma de todos ellos es ....
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let variosNum = []
    let num
    do {
        num = parseInt(prompt(message))
        returnNums = variosNum.push(num)
    } while (num != 0)
    return returnNums
}

function grande(numLeidos){
    let big = numLeidos[0]
    for (let i = 1; i < numLeidos.length; i++){
        if (numLeidos[i] >= big){
            numLeidos[i] = big
        }
    }
    return big
}

function suma(numLeidos){
    let total 
    for (let i = 0; i < numLeidos.length; i++){
        total += numLeidos[i]
    }
    return total
}

let numLeidos = pedirNum("Introduce un número (para parar 0):")

console.log(`El mayor es ${grande(numLeidos)}. La suma es ${suma(numLeidos)}.`)
