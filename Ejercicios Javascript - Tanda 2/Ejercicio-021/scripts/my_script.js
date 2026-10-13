/***************************************************************************************************************
 *
 *   Objetivo: Comprender la programación recursiva
 * 
 *   Tarea: Realizar dos funciones para:
 *                - Imprimir por consola los números desde n al 0 iterativamente
 *                - Imprimir por consola los números del n al 0 recursivamente
 *
 *   Entrada : numero entero n entre -20 y 20
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < -20 || num > 20)){
        alert("Tienes que introducir un número entre -20 y 20 en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function iterativo(num){
    if (num > 0){
        for(let i = num; i >= 0 ; i--){
            console.log(i)
        }
    } else if (num < 0){
        for(let i = num; i <= 0 ; i++){
            console.log(i)
        }
    }
}

function recursivo(num){
    console.log(num)
    if (num == 0){
        return
    } 
    if (num > 0){
        recursivo(num-1)
        
    } else if (num < 0){
        recursivo(num+1)
    }
}

let num = pedirNum("Introduce un número entero: ")

recursivo(num)

console.log("________________________________________________")

iterativo(num)


