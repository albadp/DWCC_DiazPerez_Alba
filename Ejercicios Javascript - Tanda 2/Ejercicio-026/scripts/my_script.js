/***************************************************************************************************************
 *
 *   Objetivo: Reformar en lógica de programación
 *             Aprender nuevos métodos de String/Array
 *             Aprender a programar pensando en datos de entrada
 *             Reforzar en la programación funcional
 *             Reforzar en el uso de métodos de array
 *
 *   Tarea: Solicita un texto y una palabra.
 *
 *   Entrada : cadenas de texto: texto, palabra
 *
 *   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
 *
 ***************************************************************************************************************/

// Indicamos las posiciones en la frase de palabra
// Tiene el inconveniente de que si la palabra a buscar forma parte de otra palabra
// más grande, la solución no sería correcta
// Por ejemplo: frase="El mantel era de color rojo" palabra="el" localiza la palabra en [0,7]
function getPositions1(frase,palabra){
    const positions=[]

    let position=frase.toLowerCase().indexOf(palabra.toLowerCase())
    while (position!=-1) {
        positions.push(position)
        // Podemos indicar a partir de que indice volvemos a buscar la palabra
        position=frase.toLowerCase().indexOf(palabra.toLowerCase(),position+1)
    }
    return positions
}

// Indicamos las posiciones en la frase de la palabra
// Mejor solución que la anterior ya que sólo busca palabras enteras
// Por ejemplo: frase="El mantel era de color rojo" palabra="el" localiza la palabra en [0]
function getPositions3(frase,palabra){
    let size=0
    return frase.toLowerCase().split(" ").reduce((anterior,actual,i)=>{
        if (actual==palabra.toLowerCase())
            anterior.push(size)
        size+=actual.length+1
        return anterior
    },[])
}

// Indicamos las posiciones en el ARRAY
// NO ES LA SOLUCIÓN PEDIDA !!!!!!!
function getPositions2(frase,palabra){
    return frase.split(" ").reduce((anterior,actual,i)=>{
        if (actual==palabra)
            anterior.push(i)
        return anterior
    },[])
}

let frase=prompt("Introduce una frase")
let palabra=prompt("Introduce una palabra")
console.log(getPositions1(frase,palabra))
console.log(getPositions3(frase,palabra))
