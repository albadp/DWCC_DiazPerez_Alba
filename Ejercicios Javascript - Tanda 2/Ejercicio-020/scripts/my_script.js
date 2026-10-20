/***************************************************************************************************************
 *
 *   Objetivo: Refuerzo en la programación según las especificaciones del programa a resolver
 *             Aprender a plantearse la solución de formas menos convencionales
 *             Aprender a emplear programación funcional
 *             Aprender las diferencias entre objetos String y Array
 *             Aprender a definir objetos
 *
 *   Tarea: Solicitar al usuario una cadena de texto. Crear y mostrar un objeto con la frecuencia del número de vocales
 *
 *   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
 *
 *   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
 *
 ***************************************************************************************************************/

function getFrecuencies1(cadena,frecCad){
  const frecuencias={}

  for (let j=0;j<frecCad.length;j++) {
    frecuencias[frecCad[j]]=0
    for (let i=0;i<cadena.length;i++) {
      if (cadena[i]==frecCad[j]) {
        frecuencias[frecCad[j]]++
      }
    }
  }

  return frecuencias
}

function getFrecuencies2(cadena,frecCad){
  return frecCad.split("").reduce((anterior, actual) => {
    anterior[actual] = cadena
    .split("")
    .filter((el) => el == actual).length;
    return anterior;
  }, {});  
}

const cadena = "dsfgdwiifgw3t54qqavwgw4g";
const VOCALES = "aeiou";
console.log(getFrecuencies1(cadena,VOCALES));
console.log(getFrecuencies2(cadena,VOCALES));
