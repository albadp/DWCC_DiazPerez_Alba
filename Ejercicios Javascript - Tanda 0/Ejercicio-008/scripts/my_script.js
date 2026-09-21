/***************************************************************************************************************
 *
 *   Objetivo: Reforzar lógica de programación
 *             Aprender a emplear diferentes tipos de bucles
 *
 *   Tarea: Solicitamos un número y si queremos mostrar un cuadrado o triángulo
 *
 *   Entrada : n (Number)
 *             n debe ser impar en caso de querer un triángulo (repetimos la petición en caso de que no lo sea)
 *
 *   Salida  : Mostramos un cuadrado (o triángulo) del lado indicado (con la base indicada)
 *              
 *             Ej: n=3 triangulo                    n=3 cuadrado
 * 
 *                      *                             ***
 *                     ***                            * *
 *                                                    ***
 *
 ***************************************************************************************************************/


function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num % 2 != 1)){
        alert("Tienes que introducir un número impar:")
        num = parseInt(prompt(message))
    }
    return num
}

function pedirFigura(message){
    let figura = prompt(message)
    while (figura !== "triangulo" || figura !== "cuadrado"){
        alert("Tienes que introducir 'triangulo' o 'cuadrado'")
        figura = prompt(message)
    }
    return figura
}

function hacerCuadrado(num){
    let dibujo = "*".repeat(num)
    for(let i = 0; i<num; i++){
        dibujo += "*" + " ".repeat(num-2)+ "*"
    }
    dibujo += "*".repeat(num)
    return dibujo
}

function hacerTriangulo(num){
    let dibujo = ""
}

let figura = pedirFigura("Intruduce la figura (triangulo/cuadrado):")
let num = pedirNum("Introduce un número:")

