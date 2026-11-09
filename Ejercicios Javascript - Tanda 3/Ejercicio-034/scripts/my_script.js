/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en lógica de programación
 *             Aprender a usar el objeto Date y sus métodos
 *             Perseverar en la comprobación de datos introducidos por un usuario
 *
 *   Tarea: Dado mes y año, determinar si el mes tiene un Viernes 13
 *
 *   Entrada : año  (1920) y mes (01)
 *
 *   Salida  : El mes Enero de 1920 no tiene un Viernes 13
 *
 ***************************************************************************************************************/

const isFriday13=(year,month)=>{
    const fecha=new Date(year,month,13)
    return fecha.getDay()==5
}

let month="01"
let year="1920"

console.log(isFriday13(year,month-1))
