/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso del objeto Date
 *
 *   Tarea: Solicitar dos fechas en formato dd/mm/aaaa e indicar los días transcurridos entre las dos fechas
 *
 *   Entrada : 31/01/2013 02/02/2013
 *
 *   Salida  : 2 días
 *
 ***************************************************************************************************************/

const createDate=(day,month,year)=>new Date(year,month-1,day)

function isValidDate(fecha){
    const [day,month,year]=fecha.split('/').map(el=>parseInt(el))

    let date=new Date(year,month-1,day)
    return date.getMonth()==month-1
}

function checkInputDate(fecha){
    const exprReg=/^\d{2}\/\d{2}\/\d{4}$/g
    return exprReg.test(fecha) && isValidDate(fecha)
}

function getFecha(msg){
    let fecha=prompt(msg)
    while (!checkInputDate(fecha)) {
       alert("Fecha o formato (DD/MM/AAAA) incorrecto")
       fecha=prompt(msg)
    }

    return createDate(...fecha.split("/"))     // Milisegundos desde 1 Enero de 1970
}

const diasEntreFechas=(fechaInicial,fechaFinal)=>(fechaFinal.valueOf()-fechaInicial.valueOf())/(1000*60*60*24)

let fechaInicio=getFecha("Introduce la fecha inicial")
let fechaFin=getFecha("Introduce la fecha final")
while (fechaFin<fechaInicio){
    alert("La fecha final debe ser posterior a la inicial")
    fechaFin=getFecha("Introduce la fecha final")
}

console.log(`${diasEntreFechas(fechaInicio,fechaFin)} dias`)

