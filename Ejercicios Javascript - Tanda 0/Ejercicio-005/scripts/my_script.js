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


function pedirNota(message){
    let nota = parseInt(prompt(message))
    while ((isNaN(nota)) || (nota < 0 || nota > 100)){
        alert("Tienes que introducir un número entre 0 y 100")
        nota = parseInt(prompt(message))
    }
    return nota
}

function darNota(message2, nota){
    if (Number.isInteger(nota)){
        switch(true){
            case (nota >= 0 && nota < 50):
                return(`${message2} Suspenso`)
                break
            case (nota >= 50 && nota < 60):
                return(`${message2} Aprobado`)
                break
            case (nota >= 60 && nota < 70):
                return(`${message2} Bien`)
                break
            case (nota >= 70 && nota < 90):
                return(`${message2} Notable`)
                break
            case (nota >= 90 && nota < 100):
                return(`${message2} Sobresaliente`)
                break
            case (nota == 100):
                return(`${message2} Matricula de honor`)
                break
        }
    }
}

let nota = pedirNota("Introduce la nota del examen: ")

console.log(`${darNota("El examen se cualifica con un", nota)}`)

