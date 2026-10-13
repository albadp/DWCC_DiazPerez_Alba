/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir y usar funciones
 *             Entender la diferencia entre funciones declaradas y funciones expresadas
 *             Mejorar la lógica de programación
 *             Aprender a usar funciones anónimas (adicional)
 *             Aprender a definir arrays con el método estático Array.from (adicional)
 *             Aprender a emplear métodos del objeto Array para la programación funcional (adicional)
 *
 *   Tarea: Generar los primeros n números primos
 *
 *          Nota: Un número n es primo si sólo es divisible por 1 y por n
 *
 *   Entrada : numero entero
 *
 *   Salida  : 1, 3, 5, 7, ...
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1)){
        alert("Tienes que introducir un número positivo en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function primos(num){
    let nums = [1]
    for(let i = 2; i <= num; i++){
        let esPrimo = true
        for(let j = 2; j < i; j++){
            if (i % j == 0){
                esPrimo = false
                break
            }
        }
        if (esPrimo){
            nums.push(i)
        }
    }
    return nums
}

let num = pedirNum("Introduce un número entero: ")

console.log(primos(num))







