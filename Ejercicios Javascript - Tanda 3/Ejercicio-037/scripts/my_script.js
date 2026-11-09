/***************************************************************************************************************
 *
 *   Objetivo:
 *
 *   Tareaq: Crear un array con objetos persona y determinar cuantos son mayores de edad
 *           Devolver el promedio de edad total
 *           Devolver el promedio de las personas mayores de edad
 *           Devolver el promedio de las personas menores de edad
 *
 *   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas
 *         La edad de la persona será un número aleatorio entero entre 1 y 100
 *
 *   Entrada :
 *
 *   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
 *
 ***************************************************************************************************************/

const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random())

const createPerson=(nombres)=>({
    nombre:nombres[aleatorio(0,nombres.length)],
    edad:aleatorio(1,100)
})


const nombres=["Ana","Pepe","Luis","Rosa","Alberto","Manuel","Alberto","Sonia","Susana","Roberto","Ruben","Silvia","Sandra","Mercedes"]

const N_PERSONAS=10
const personas=Array.from({length:N_PERSONAS},(el)=>createPerson(nombres))
console.log(personas)

