/**
 * La nostalgia y la añoranza te llevaron a abrir el frasco con cariño y jugar, como antaño, con tus
*   canicas. La casualidad quiso que las colocaras de una curiosa manera:
*   Los triángulos de colores, cada vez más grandes, te dieron una idea; era posible colocar la primera
*   canica en el centro del triángulo de tres canicas. A su vez, viste que era posible colocar el triángulo
*   de tres canicas encima del triángulo de seis, y éste sobre el de diez
*   "Al final, ¿cuántas canicas fui capaz de
*   conseguir para mi colección?" — te preguntaste. Querías construir la pirámide más alta posible.
*   
*   Entrada: un número n positivo indicando la altura de la pirámide de canicas que querrías
*   construir.
*   
*   Salida: Se mostrará en la consola del navegador o en el propio documento HTML el número de canicas que
*   necesitamos para construir la pirámide. Estás convencido de que no acumulaste más de 10 elevado a 18 canicas,
*   por lo que no te plantearás pirámides que necesiten más que eso.
*   
*   Ejemplo: Necesitaremos 10 canicas para construir la pirámide
 */

function pedirNum(message){
    let num = parseInt(prompt(message))
    while (isNaN(num) || (num < 1)){
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function calcularCanicas(altura){
    let canicas = 0
    let canicasXBase = 0

    for(let i = 1; i <= altura; i++){
        canicas += canicasXBase+i
        canicasXBase += i
    }
    
    return canicas
}

let altura = pedirNum("Indica la altura de la pirámide")

console.log(`Necesitaremos ${calcularCanicas(altura)} canicas para construir la pirámide`)
