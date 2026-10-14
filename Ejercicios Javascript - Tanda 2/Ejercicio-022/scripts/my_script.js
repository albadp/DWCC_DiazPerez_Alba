/***************************************************************************************************************
 *
 *   Tarea: Solicitamnos un número entero n positivo. Si n es par, se divide por 2 y su n es
 *          impar se multiplica por tres y suma uno. El proceso se repite hasta que n tenga el valor de 1.
 *          Por ejemplo, la secuencia para n=3 será:
 *
 *                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
 *
 *          Resolverlo iterativa y recursivamente.
 * 
 *   Entrada : numero entero n entre 1 y 100
 *
 *
 *   Salida  : La secuencia de valores obtenida
 *
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1 || num > 100)){
        alert("Tienes que introducir un número entre -20 y 20 en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function iterativa(num){
    let numero = num
    while(numero != 1){
        if (numero % 2 == 0){
            numero /= 2
            console.log(numero)
        } else {
            numero *= 3
            numero++
            console.log(numero)
        }
    }
}

function recursiva(num){
    if(num == 1){
        return
    } else if (num % 2 == 0){
        recursiva(num/2)
        console.log(num/2)
    } else {
        recursiva(num * 3 + 1)
        console.log(num * 3 + 1)
    }
}

let num = pedirNum("Introduce un número entero: ")

iterativa(num)
console.log("________________________________________________")
recursiva(num)
