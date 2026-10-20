/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Métodos inplace de arrays ! (ej. sort, reverse)
 *
 *   Tarea: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *          P.ej: Dabale arroz a la zorra el abad
 *
 *   Entrada : Cadena de texto
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *
 ***************************************************************************************************************/

function isPalindromo1(cad) {
    // A minusculas, convertimos en array, quitamos los espacios y convertimos a cadena
    let cad1=cad.toLowerCase().split('').filter(el=>el!=' ').join('')

    // A minusculas, convertimos en array, quitamos los espacios, revetimos el array y convertimos en cadena
    let cad2=cad.toLowerCase().split('').filter(el=>el!=' ').reverse().join('')

    return cad1==cad2
}

function isPalindromo2(cad) {
    // A minusculas, convertimos en array, quitamos los espacios y convertimos a cadena
    let cadena=cad.toLowerCase().split('').filter(el=>el!=' ').join('')

    // Recorremos la cadena comprobando si el caracter en la posicion i coincide con el
    // situado en la posicion cadena.length-1-i (caracter situado en la posicion final simetrica)
    // Para mejorar la velocidad: solo tenemos que recorrer media cadena
    let longitud=cadena.length%2==0?(cadena.length-2)/2:(cadena.length-1)/2
    let end=false
    let i=0
    do {
        end=cadena[i]==cadena[cadena.length-1-i]
        i++
    } while (!end&&i<longitud)
    return end
}

function isPalindromoRecursivo(cad){    
    // Comprobamos si son iguales los caracteres de los extremos de la cadena y
    // vemos si la cadena restante de quitar esos caracteres tambien es palindromo
    function isPalindromo(cadena){
        if (cadena.length<2) {
            return true
        }
        
        return cadena[0]==cadena[cadena.length-1] && isPalindromo(cadena.slice(1,-1))
    }
    
    let cadena=cad.toLowerCase().split('').filter(el=>el!=' ').join('')
    return isPalindromo(cadena)
}

console.log(isPalindromo1("Dabale arroz a la zorra el abad"))
console.log(isPalindromo2("Dabale arroz a la zorra el abad"))
console.log(isPalindromoRecursivo("Dabale arroz a la zorra el abad"))

