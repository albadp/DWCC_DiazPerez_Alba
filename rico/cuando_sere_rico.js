/**
 * Jaime quiere conseguir el dinero para una consola, así que ha ideado una estrategia para ir
* consiguiendo su dinero de manera paulatina. Le propone a su padre una forma de darle la paga que 
* este acepta sin pensarlo mucho debido a las prisas: el primer día le dará un céntimo de euro, 
* el segundo otro céntimo de euro y a partir del tercero siempre le dará el doble de lo que le dio dos días
* antes más lo que le dio justo el día antes. Jaime calcula cuántos días tardará en tener el
* dinero suficiente, pero... a veces se pregunta cuánto tardaría en hacerse millonario.
* 
* Entrada: Un número entero entre 1 y 10 elevado a 9 , que representa la cantidad de céntimos
* que es el objetivo a conseguir por parte de Jaime. Puedes recoger el valor de entrada a
* través de window.prompt (o empleando un pequeño formulario con una caja de texto y
* un botón).
* 
* Salida: A través de la consola del navegador o en el cuerpo del documento web, un
* mensaje con el número de días que Jaime tarda en conseguir el dinero suficiente,
* suponiendo que es ahorrador y no se gasta nada hasta conseguir esa cantidad.
* 
 */

/**
 * Función que comprueba la entrada numérica de mínimo 1 y máximo 1000000000
 * Si es incorrecta, la vuelve a pedir
 * @param {*} message 
 * @returns 
 */
function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1 || num > 1000000000)){
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

/**
 * Función que calcula los días que tienen que pasar para llegar a tener la cantidad que se recibe por parámetro
 * @param {*} cent 
 * @returns 
 */
function calcularDinero(cent){
    let dias = 2    
    let cantiddDia0=1,cantiadaDia1=1
    let total=cantiadaDia1+2*cantiddDia0
    while (total<cent){
        dias++
        cantiadaDia0=cantiadaDia1
        cantiadaDia1=total
        total+=cantiadaDia1+2*cantiddDia0
    }
    return dias
}

function getDinero(dias){
    if (dias==1||dias==2)
        return dias 
    return getDinero(dias-1)+2*getDinero(dias-2)
}

let cent = pedirNum("Cuántos son los céntimos que tiene que conseguir Jaime?")

/**
 * Da error 
 */
// let dias=0
// while (getDinero(dias)<cent)
//     dias++

console.log(calcularDinero(cent))




