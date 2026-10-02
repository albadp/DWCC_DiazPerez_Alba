/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas
 *             
 *   Tarea: Se solicita un número entero n entre 1 y 10 al usuario. 
 *          Se mostrará una pirámide de la siguiente forma:
 *
 *                 1
 *                2 2
 *               3 3 3
 *              4 4 4 4
 *                ...
 *          n n n n n n n (n veces)
 *
 *          Realizar en ejercicio con for, while, do while
 * 
 *   Entrada : numero entero: n
 *
 *   Salida  : La pirámide mostrada en la tarea del ejercicio
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1) || (num > 10)){
        alert("Tienes que introducir un número en dígito entre 1 y 10")
        num = parseInt(prompt(message))
    }
    return num
}

function hacerPiramide1(num){
    let piramide = ""
    for(let i = 1; i <= num; i ++){
        let espacios = (num-i)
        piramide += `${" ".repeat(espacios)}${`${i} `.repeat(i)}\n`;
    }
    return piramide
}

function hacerPiramide2(num){
    let piramide = ""
    let piso = 1
    do {
        let espacios = (num - piso)
        piramide += `${" ".repeat(espacios)}${`${piso} `.repeat(piso)}\n`
        piso ++
    } while(num >= piso)
    return piramide
}

function hacerPiramide3(num){
    let piramide=""
    let piso = 1
    while(num >= piso){
        let espacios = (num - piso)
        piramide += `${" ".repeat(espacios)}${`${piso} `.repeat(piso)}\n`
        piso ++
    }
    return piramide
}

let num = pedirNum("Introduce un número del 1 al 10")

console.log(hacerPiramide1(num))
console.log(hacerPiramide2(num))
console.log(hacerPiramide3(num))




