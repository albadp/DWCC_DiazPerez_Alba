/***************************************************************************************************************
 *
 *   Objetivo: Aprender a buscar soluciones "no clásicas"
 *             Conocer métodos del objeto String
 *             Resolver problemas empleando programación funcional
 *
 *   Tarea: Mostrar un array de cadenas en forma rectangular
 *
 *   Entrada : una frase de texto
 *             P. ej.: Hola Mundo en un cuadrado
 *
 *   Salida  : la frase en un cuadrado
 * 
 *              ************
 *              * Hola     *
 *              * Mundo    *
 *              * en       *
 *              * un       *
 *              * cuadrado *
 *              ************
 *
 ***************************************************************************************************************/

// Función que devuleve la longitud de la palabra de mayor tamaño
function calcLongitudMaxima(palabras){
    let longitudMaxima=0

    if (palabras.length) {
        for (let i=0;i<palabras.length;i++) {
            let longitud=palabras[i].length
            if (longitud>longitudMaxima) {
                longitudMaxima=longitud
            }
        }
    }

    return longitudMaxima
}

// Con programacion clasica
function showCuadrado1(frase){
    let figura="La frase tiene que tener alguna palabra"
    if (frase) {
        const palabras=frase.split(" ")
    
        //const LONGITUD_MAXIMA=calcLongitudMaxima(palabras)
        const LONGITUD_MAXIMA=palabras.length
                                 ?Math.max(...palabras.map(palabra=>palabra.length))
                                 :0
               
        figura="*".repeat(LONGITUD_MAXIMA+4)+"\n"
        for (let i=0;i<palabras.length;i++){
            figura+="* "+palabras[i]+" ".repeat(LONGITUD_MAXIMA-palabras[i].length)+" *\n"
        }
        figura+="*".repeat(LONGITUD_MAXIMA+4)+"\n"
    }
    return figura
}

// Con reduce
function showCuadrado2(frase) {
    let figura="La frase tiene que tener alguna palabra"

    if (frase) {
        const palabras=frase.split(" ")
    
        //const LONGITUD_MAXIMA=calcLongitudMaxima(palabras)
        const LONGITUD_MAXIMA=palabras.length
                                 ?Math.max(...palabras.map(palabra=>palabra.length))
                                 :0
    
        figura=palabras.reduce((anterior,actual)=>anterior+
           `* ${actual}`+" ".repeat(LONGITUD_MAXIMA-actual.length)+" *\n"
           ,"*".repeat(LONGITUD_MAXIMA+4)+"\n")+
           "*".repeat(LONGITUD_MAXIMA+4)    
    }

    return figura
}

// Con map
function showCuadrado3(frase) {
    let figura="La frase tiene que tener alguna palabra"

    if (frase) {
        const palabras=frase.split(" ")
    
        const LONGITUD_MAXIMA=calcLongitudMaxima(palabras)
        /*const LONGITUD_MAXIMA=palabras.length
                                 ?Math.max(...palabras.map(palabra=>palabra.length))
                                 :0*/
    
        figura= "*".repeat(LONGITUD_MAXIMA+4)+"\n"+
                    palabras.map(palabra=>`* ${palabra}`+" ".repeat(LONGITUD_MAXIMA-palabra.length)+" *").join("\n")+"\n"+
                   "*".repeat(LONGITUD_MAXIMA+4)
    }

    return figura
}

let frase=prompt("Introduce una frase")
console.log(showCuadrado1(frase))
console.log(showCuadrado2(frase))
console.log(showCuadrado3(frase))