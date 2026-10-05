/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear métodos del objeto Math
 *             Reforzar el uso de estructuras repetitivas
 *             Aprender a definir arrays con el método estático Array.from
 *             Aprender a usar funciones anónimas
 *             Aprender a emplear el método map del objeto Array para la programación funcional
 *
 *   Tarea: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
 *
 *   Entrada : inicio, fin
 *
 *   Salida  : inicio², (inicio+1)², ..... (fin)²
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num)){
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function cuadrado(num1,num2){
    let stringCuadrado = ""
    if(num1<num2){
        for(let i = num1; i<=num2; i++){
            stringCuadrado += (`${i**2} `)
        }
    } else if(num1>num2){
        for(let i = num2; i<=num1; i++){
            stringCuadrado += (`${i**2} `)
        }
    } else{
        stringCuadrado += (`${num1**2}`)
    }
    return stringCuadrado
}

let num1 = pedirNum("Introduce el primer número entero:")
let num2 = pedirNum("Introduce el segundo número entero:")

console.log(cuadrado(num1,num2))