/**
 * El ADN de un virus está formado esencialmente por una secuencia 4 aminoácidos:
 * • Glicina, representada por la letra G
 * • Tianina, representada por la letra T
 * • Alanina, representada por la letra A
 * • Cisteína, representada por la letra C
 * Los científicos han descubierto recientemente que la mejor forma de desactivar el carácter virulento 
 * del virus es determinar la subcadena de mayor longitud de cualquiera de los aminoácidos de su 
 * ADN y extirparla.
 * Dado que las secuencias de ADN de los virus pueden tener cientos de aminoácidos, nuestro objetivo 
 * es ayudarlos creando una página web que después de solicitar la secuencia de ADN del virus al 
 * científico indique:
 * • El aminoácido que tiene la secuencia más larga dentro del ADN del virus
 * • La posición o inicio de esa cadena en el ADN del virus
 * • La longitud de esa secuencia dentro del ADN del virus
 * • El ADN del virus una vez desactivada su virulencia
 * 
 * Así, por ejemplo, si un científico indicara que el ADN de un virus es AAGGGGTC, la página debería mostrar los siguientes mensajes:
 * • La secuencia más larga corresponde al aminoácido G
 * • La secuencia se produce a partir de la 3 posición del ADN del virus
 * • La longitud de la secuencia de aminoácido más larga es 4.
 * • El ADN del virus desactivado es AATC
 * 
 * En caso de haber dos o más subcadenas de igual longitud, la última subcadena es la que determina el carácter virulento
 * 
 */

const AMIN="GTAC"

function pedirADN(message){
    let palabra = prompt(message)
    let palabraArray = palabra.toUpperCase().split("")
    while(!palabraArray.every(letra => AMIN.includes(letra))){
        alert("tienes que introducir una palabra válida!")
        let palabra = prompt(message)
        palabraArray = palabra.toUpperCase().split("")
    }
    let palabraStr = palabraArray.join("")
    return palabraStr
}

function buscarSecuencia(adn, char){
    let position = -1
    let secuencia = ""
    let length = -1
    if (adn && adn.includes(char)) {
        length = 1
        position = adn.indexOf(char.repeat(length))
        while(position != -1) {
            length++
            position = adn.indexOf(char.repeat(length))
        }
        length--
        position = adn.indexOf(char.repeat(length))
        position++
        secuencia = char.repeat(length)
    }
    return {position, secuencia, length}
}

function secuenciaAdn(adn){
    let g = "G"
    let t = "T"
    let a = "A"
    let c = "C"
    
    let secuenciaG = buscarSecuencia(adn,g)
    let secuenciaT = buscarSecuencia(adn,t)
    let secuenciaA = buscarSecuencia(adn,a)
    let secuenciaC = buscarSecuencia(adn,c)

    if ((secuenciaA.length >= secuenciaC.length) && (secuenciaA.length >= secuenciaT.length)
    && (secuenciaA.length >= secuenciaG.length)){
        let adnCorregido = adn.replace(secuenciaA.secuencia, "")
        secuenciaA.adnCorregido= adnCorregido
        let letra = a
        secuenciaA.letra = letra
        return secuenciaA
    }else if((secuenciaG.length >= secuenciaT.length) && (secuenciaG.length >= secuenciaC.length)){
        let adnCorregido = adn.replace(secuenciaG.secuencia, "")
        secuenciaG.adnCorregido= adnCorregido
        let letra = g
        secuenciaG.letra = letra
        return secuenciaG
    } else if(secuenciaT.length >= secuenciaC.length){
        let adnCorregido = adn.replace(secuenciaT.secuencia, "")
        secuenciaT.adnCorregido= adnCorregido
        let letra = t
        secuenciaT.letra = letra
        return secuenciaT
    }
    let adnCorregido = adn.replace(secuenciaC.secuencia, "")
    secuenciaC.adnCorregido= adnCorregido
    let letra = c
    secuenciaC.letra = letra
    return secuenciaC
}





let adn = pedirADN("Introduce la secuencia de animoácidos: ")
let resultado = secuenciaAdn(adn)

console.log(`La secuencia más larga corresponde al aminoácido ${resultado.letra}`)
console.log(`La secuencia se produce a partir de la ${resultado.position} posición del ADN del virus`)
console.log(`La longitud de la secuencia de aminoácido más larga es ${resultado.length}.`)
console.log(`El ADN del virus desactivado es ${resultado.adnCorregido}`)

