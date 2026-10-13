/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en la programación funcional
 *             Reforzar en la lógica de programación
 *
 *   Tarea: Generar los n primeros números perfectos
 *
 *          Nota: Un número es perfecto cuando el número es igual a la suma de sus divisores.
 *
 *   Entrada : número entero n
 *
 *   Salida  :
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

function perfectos(num) {
    let nums = [];
    for (let i = 2; i < num; i++) {
        let suma = 0;
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                suma += j;
            }
        }
        if (suma === i) {
            nums.push(i);
        }
    }

    if(nums.length == 0){
        return 0;
    }

    return nums;
}

let num = pedirNum("Introduce un número entero: ")

perfectos(num) ? console.log(perfectos(num)) : console.log("No hay números perfectos anteriores")











