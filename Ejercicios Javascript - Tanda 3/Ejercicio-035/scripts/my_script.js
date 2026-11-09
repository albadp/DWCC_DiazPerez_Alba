/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en lógica de programación
 *             Aprender a usar el objeto Date y sus métodos
 *             Perseverar en la comprobación de datos introducidos por un usuario
 *
 *   Tarea: Realizar un script que solicite una fecha a un usuario (en formato día/mes/año) y compruebe si
 *          es correcta o existe.
 *          Tenemos que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
 *          bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
 *
 *   Entrada : dia/mes/anho
 *
 *   Salida  : La fecha dia/mes/anho (es|no es) correcta
 *
 ***************************************************************************************************************/

function checkInputDate(fecha){
    const exprReg=/^\d{2}\/\d{2}\/\d{4}$/g

    return exprReg.test(fecha)
}

function isValidDate(fecha){
    const [day,month,year]=fecha.split('/').map(el=>parseInt(el))

    let date=new Date(year,month-1,day)
    return date.getMonth()==month-1
}

// 31 de Enero de 2011: OK
let fecha="31/01/2011"
console.log(`La fecha ${fecha} ${isValidDate(fecha)?"es ":"no es "}correcta`)

// 32 de Enero de 2011: No OK (porque es como 1 de Febrero de 2011 y los meses no coinciden)
fecha="32/01/2011"
console.log(`La fecha ${fecha} ${isValidDate(fecha)?"es ":"no es "}correcta`)

// No es bisiesto
fecha="29/02/2011"
console.log(`La fecha ${fecha} ${isValidDate(fecha)?"es ":"no es "}correcta`)

// Bisiesto
fecha="29/02/2012"
console.log(`La fecha ${fecha} ${isValidDate(fecha)?"es ":"no es "}correcta`)

fecha=prompt("Introduce una fecha")
while (!checkInputDate(fecha)) {
   alert("Formato incorrecto : DD/MM/AAAA")
   fecha=prompt("Introduce una fecha")
}
console.log(`La fecha ${fecha} ${isValidDate(fecha)?"es ":"no es "}correcta`)
