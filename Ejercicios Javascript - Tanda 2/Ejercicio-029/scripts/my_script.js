/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *
 *   Tarea: Determinar si un NIF es falso.
 *                1.- El usuario introduce un NIF
 *                2.- Se determina la letra correspondiente al DNI introducido (NIF sin la letra)
 *                         a) Se obtiene el resto de la división del DNI por 23
 *                         b) Se busca la correspondencia del resto de acuerdo con la siguiente correspondencia:
 *                               0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21  22
 *                               T  R  W  A  G  M  Y  F  P  D   X   B   N   J   Z   S   Q   V   H   L   C   K   E
 *                3.- Se comparan las letras
 *
 *   Entrada : NIF  en formato NNNNNNNN-L donde N es un digito entre 0 y 9, y L representa una letra a-z,A-Z
 *
 *   Salida  : El NIF NNNNNNNN-L es (falso|auténtico)
 *
 ***************************************************************************************************************/

const LETRAS_NIF="TRWAGMYFPDXBNJZSQVHLCKE"

// Funcion expresada que devuelve true o false si la letra del NIF es correcta o no
const isValidNIF=(nif)=>nif.toUpperCase().slice(-1)==LETRAS_NIF[parseInt(nif.slice(0,-2))%23]

let nif=prompt("Introduce el NIF [Formato: NNNNNNNN-L]")
// Comprobamos que el NIF introducido está en el formato 8 digitos numericos, guion y letra
// empleando una expresión regular
const expReg=/^\d{8}-[A-Z]{1}$/
while (!expReg.test(nif.toUpperCase())) {
    alert("Formato incorrecto. [Formato: NNNNNNNN-L]")
   nif=prompt("Introduce el NIF")
} 

console.log(isValidNIF(nif))
