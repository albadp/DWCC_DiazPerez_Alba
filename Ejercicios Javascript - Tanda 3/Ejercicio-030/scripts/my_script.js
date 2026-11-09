/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en la resolución de ejercicios de lógica de programación
 *             Aprender a plantarse diferentes formas de resolver un problema
 *
 *   Tarea: Solicitar la fecha de nacimiento de una persona (dia, mes y año)
 *          Calcular el número de la suerte
 *
 *          El número de la suerte se calcula sumando las cifras obtenidas en la suma
 *
 *          Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
 *                                  12-7-1980 = 1999
 *                                  1+9+9+9 = 28
 *                                  2+8 = 10
 *                                  1+0 = 1   <---- Número de la suerte
 *
 *          Solucionar de forma iterativa y recursiva
 *
 *   Entrada : dia, mes, anho
 *
 *   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
 *
 ***************************************************************************************************************/

function numeroSuerteIterativo(fecha){
    let numeroSuerte=fecha.split("-").join('')

    while (numeroSuerte.length!=1) {
        numeroSuerte=numeroSuerte.split('')
                            .map(el=>parseInt(el))
                            .reduce((anterior,actual)=>anterior+actual,0).toString()
    }

    return numeroSuerte
}

function numeroSuerteRecursivo(fecha){
    fecha=fecha.split("-").join('')
    if (fecha.length==1)
        return fecha
    return numeroSuerteRecursivo(fecha.split('').map(el=>parseInt(el)).reduce((anterior,actual)=>anterior+actual,0).toString())
}

const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

let fecha="12-7-1980"
let numeroSuerte=numeroSuerteIterativo("12-07-1980")
console.log(`Como has nacido el dia ${fecha.split("-")[0]} de ${meses[fecha.split("-")[1]-1]} de ${fecha.split("-")[2]}, tu número de la suerte es ${numeroSuerte}`)

numeroSuerte=numeroSuerteRecursivo("12-07-1980")
console.log(`Como has nacido el dia ${fecha.split("-")[0]} de ${meses[fecha.split("-")[1]-1]} de ${fecha.split("-")[2]}, tu número de la suerte es ${numeroSuerte}`)
