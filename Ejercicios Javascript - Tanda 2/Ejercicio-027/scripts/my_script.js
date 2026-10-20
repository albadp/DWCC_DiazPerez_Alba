/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en la lógica de programación
 *
 *   Tarea: Obtener la secuencia más larga de ceros indicando la posición de inicio. En caso de que existan varias,
 *          se indicará la primera.
 *
 *   Entrada : "011000010110000"
 *
 *   Salida  : Secuencia: "0000"   Posicion: 3
 *
 ***************************************************************************************************************/

// SOLUCION 1
// Hacemos todo en la función 
// Hacemos la función lo más versatil posible pudiendo buscar cualquier caracter
function getMaxSecuence1(cad,char){
    const resultado={
        secuence:'',
        position:-1
    }

    if (cad&&cad.includes(char)){
        let maxLength=0
        let length
    
        for (let position=0;position<cad.length;position+=length) {
            length=1
            while(position+length<cad.length&&cad[position]==char&&cad[position]==cad[position+length]){
                length++
            }
            if (length>maxLength) {
                maxLength=length
                Object.assign(resultado,{secuence:char.repeat(length),position})
            }
        }
    }

    return resultado
}

// SOLUCION 2
// Construimos la solución dividiendo el problema
// con una función que obtiene la longitud de la secuencia a partir de una posición
// Estrategia: Divide and conquer
function getSecuenceLength(cad, pos, char) {    
    let length=1
    while(pos+length<cad.length&&cad[pos]==char&&cad[pos]==cad[pos+length]){
        length++
    }
    return length
}

function getMaxSecuence2(cad,char){
    const resultado={
        secuence:'',
        position:-1
    }

    if (cad&&cad.includes(char)) {
        let maxLength=0
        let length
    
        for (let position=0;position<cad.length;position+=length) {
            length=getSecuenceLength(cad,position,char)
            if (length>maxLength) {
                maxLength=length
                Object.assign(resultado,{secuence:char.repeat(length),position})
            }
        }
    }

    return resultado
}

// SOLUCION 3
// Comprobamos si cad incluye char repetido una serie de veces hasta que no lo incluya
function getMaxSecuence3(cad,char){
   const resultado={
      secuence:'',
      position:-1
   }

   if (cad&&cad.includes(char)) {
       let length=1
       let position=cad.indexOf(char.repeat(length))
    
       while(position!=-1) {
        length++
        position=cad.indexOf(char.repeat(length))
       }
    
       length--
       position=cad.indexOf(char.repeat(length))
    
       Object.assign(resultado,{secuence:char.repeat(length),position})
   }

   return resultado
}

let secuencia=prompt("Introduce una cadena")
let caracter=prompt("Introduce un caracter")
console.log(getMaxSecuence1(secuencia,caracter))
console.log(getMaxSecuence2(secuencia,caracter))
console.log(getMaxSecuence3(secuencia,caracter))
