/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso de métodos de los objetos String, Array, Math, ...
 *             Aprender a definir funciones
 *             Aprender a crear una función expresada
 *             Aprender a crear una función anónima
 *             ¿Conoces los métodos endswith, padStart y padEnd de las cadenas?
 *
 *   Tarea: n es automorfico si su cuadrado termina en n
 *
 *   Entrada : n
 *
 *   Salida  : true o false
 *
 ***************************************************************************************************************/

function isAutomorphic1(n){
    return typeof n  == "number" && Number.isInteger(n) 
      ? String(n).slice(-String(n*n).length)==String(n)
      :"function isAutomorphic: El parametro debe ser un número entero"
}

function isAutomorphic2(n){
    return typeof n  == "number" && Number.isInteger(n) 
       ?String(n*n).endsWith(String(n))
       :"function isAutomorphic: El parametro debe ser un número entero"
}

console.log(isAutomorphic1(25))
console.log(isAutomorphic2(25))