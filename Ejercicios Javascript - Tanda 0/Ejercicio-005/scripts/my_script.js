/***************************************************************************************************************
 *
 *   Objetivo: Reflexionar sobre el tipo de estructura de programación a emplear que permita resolver la tarea
 *             de la forma más eficiente
 *             
 *
 *   Tarea: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
 *          según la siguiente tabla
 *
 *                Cualificación    Porcentaje
 *             -----------------  -------------
 *             Matrícula de honor     100
 *                Sobresaliente      90-99
 *                  Notable          70-89
 *                    Bien           60-69
 *                   Aprobado        50-59
 *                   Suspenso         0-49
 *
 *   Entrada : nota
 *
 *   Salida  : El examen se cualifica con un XXX
 *
 ***************************************************************************************************************/

const { Suspense } = require("react")

let nota = prompt("Introduce la nota del examen: ")
let salida = "El examen se cualifica con un"

if (Number.isInteger(nota)){
    switch(nota){
        case nota < 0:
            alert("Nota incorrecta: tiene que ser entre 0 y 100")
            break
        case nota >= 0 && nota < 50:
            console.log(`${salida} Suspenso`)
            break
        case nota >= 50 && nota < 60:
            console.log(`${salida} Aprobado`)
            break
        case nota >= 60 && nota < 70:
            console.log(`${salida} Bien`)
            break
        case nota >= 70 && nota < 90:
            console.log(`${salida} Notable`)
            break
        case nota >= 90 && nota < 100:
            console.log(`${salida} Sobresaliente`)
            break
        case nota == 100:
            console.log(`${salida} Matricula de honor`)
            break
        case nota > 100:
            alert("Nota incorrecta: tiene que ser entre 0 y 100")
    }
}