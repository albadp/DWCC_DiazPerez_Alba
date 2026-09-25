/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *
 *   Tarea: Solicitamos tres números al usuario e indicamos cual es el mayor
 *
 *   Entrada : numero1, numero2, numero3
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1)){
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

const mayor1=(num1, num2, num3)=>{
    if ((num1 >= num2) && (num1 >= num3)){
        return num1
    } else if (num2>=num3){
        return num2
    } else{
        return num3
    }
}

const mayor2=(num1, num2, num3)=>{
    let grande=num1

    if (num2>grande)
        grande=num2

    if (num3>grande)
        grande=num3

    return grande
}

let num1 = pedirNum("Introduce un número:")
let num2 = pedirNum("Introduce un número:")
let num3 = pedirNum("Introduce un número:")
console.log(`El número mayor es ${mayor(num1, num2, num3)}`)

//Math.max(num1,num2,num3)

//const numeros=[num1,num2,num3]
//Math.max(...numeros)

const mayor3=(...numeros)=>{
    let grande=numeros.length?numeros[0]:null

    for(let i=1;i<numeros.length;i++)
        if (numeros[i]>grande)
            grande=numeros[i]

    return grande
}

mayor3(num1,num2,num3)

