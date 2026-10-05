/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear estructuras de control repetitivas.
 *             Aprender a emplear funciones definidas por el usuario.
 *             Aprender difetentes formas de crear arrays
 *             Entender las funciones anónimas
 *             Aprender a emplear métodos del objeto Array para programación funcional
 *
 *   Tarea: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 2 hasta ese numero
 *          Realizar 4 versiones: con for, while, do..while, con arrays y el método join
 *
 *   Entrada : numero entero n, n>=2
 *
 *   Salida  : 2, 4, 6, ..., n  (incluidas las coma y el espacio detras de cada número excepto el último)
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 2)){
        alert("Tienes que introducir un número par positivo en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function pares1(num){
    let stringPares = ""
    for(let i = 2; i<=num; i+=2){
        stringPares += `${i}, `
    }
    returnPares = stringPares.slice(0,-2)
    return returnPares
}

function pares2(num){
    let stringPares = ""
    let pares = 2
    do {
        stringPares += `${pares}, `
        pares += 2
    } while (pares <= num)
    returnPares = stringPares.slice(0,-2)
    return returnPares
}

function pares3(num){
    let stringPares = ""
    let pares = 2
    while (pares <= num){
        stringPares += `${pares}, `
        pares += 2
    }
    returnPares = stringPares.slice(0,-2)
    return returnPares
}

function pares4(num){
    let arrayPares = []
    for(let i = 2; i <= num; i += 2) {
        arrayPares.push(`${i}`)
    }
    let stringPares = arrayPares.join(", ")
    return stringPares
}

let num = pedirNum("Introduce un número entero mayor o igual a 2:")

console.log(pares4(num))