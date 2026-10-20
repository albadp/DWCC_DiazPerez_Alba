/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a plantearse mejorar la forma de resolver un problema una vez ya fue resuelto
 *
 *   Tarea: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
 *          por una pandemia
 *
 *   Entrada : segundos
 *
 *   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
 *
 ***************************************************************************************************************/

// SOLUCION 1
function getTiempoConfinado1(seconds){
    return [7*24*60*60,24*60*60,60*60,60,1].map(el=>{
        let resultado=parseInt(seconds/el)
        seconds=seconds%el
        return resultado
    })
}

function showTiempoConfinado1(arraySolucion){
    return ["semana","dia","hora","minuto","segundo"].reduce((anterior,actual,i)=>{
           let salida=(arraySolucion[i]!=1)
                ? `${arraySolucion[i]} ${actual}s, `
                : `${arraySolucion[i]} ${actual}, `        
            return anterior+salida
    },"Hemos estado confinados ").slice(0,-2)

}

// SOLUCION 2
function getTiempoConfinado2(seconds){
    const periodos={
        "semana":7*24*60*60,
        "dia":24*60*60,
        "hora":60*60,
        "minuto":60,
        "segundo":1
    }

    return Object.keys(periodos).reduce((anterior,actual)=>{
        let resultado=parseInt(seconds/anterior[actual])
        seconds=seconds%anterior[actual]
        anterior[actual]=resultado
        return anterior
    },periodos)
}

function showTiempoConfinado2(objetoSolucion){
    let salida="Hemos estado confinados "
    for (const [key, value] of Object.entries(objetoSolucion)) {
        salida+=(value!=1)
                  ? `${value} ${key}s, `
                  : `${value} ${key}, `
    }
    return salida.slice(0,-2)
}

let segundosConfinados=7*24*60*60+7272
console.log(getTiempoConfinado1(segundosConfinados))
console.log(getTiempoConfinado2(segundosConfinados))
console.log(showTiempoConfinado1(getTiempoConfinado1(segundosConfinados)))
console.log(showTiempoConfinado2(getTiempoConfinado2(segundosConfinados)))