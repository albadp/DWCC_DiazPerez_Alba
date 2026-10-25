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


function pedirNIF(message) {
    let nif = prompt(message)
    while ((nif.length != 10) || (nif.charAt(8) != "-") || (isNaN(nif.substring(0, 8))) || (!isNaN(nif.charAt(9)))) {
        alert("Introduce un NIF válido con el formato NNNNNNNN-L")
        nif = prompt(message)
    }
    return nif
}

function getNIF(nif) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE"
    let dni = Number(nif.substring(0, 8))
    let letraIntroducida = nif.charAt(9).toUpperCase()
    let resto = dni % 23
    let letraCorrecta = letras.charAt(resto)

    if (letraIntroducida === letraCorrecta) {
        return `El NIF ${nif} es auténtico`
    } else {
        return `El NIF ${nif} es falso`
    }
}




let nif = pedirNIF("Introduce el NIF (NNNNNNNN-L):")
console.log(getNIF(nif))
