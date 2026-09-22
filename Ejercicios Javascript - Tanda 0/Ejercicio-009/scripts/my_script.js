/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a trabajar con problemas incompletos en definición
 *
 *   Tarea: Solicitar al usuario su peso (en kg) y su estatura (en metros)
 *          Calculamos el índice de masa corporal
 *          Mostrar por pantalla la frase "Tu índice de masa corporal es <imc>", donde <imc> corresponde 
 *          al indice de masa corporal redondeado con dos decimales 
 *          Indicar si hay riesgo de enfermedad coronaria.
 *
 *          El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
 *          estatura en metros.
 *
 *          El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
 *          corporal:
 *                               Edad<45     Edad>=45
 *                   IMC<=22.0    bajo         medio
 *                   IMC>=22.0    medio        alto
 *
 *   Entrada : número flotante: peso
 *             número flotante: estatura
 *
 *   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
 *
 ***************************************************************************************************************/

function pedirNum(message){
    let num = parseFloat(prompt(message))
    while (isNaN(num)){
        alert("Tienes que introducir un número en dígito")
        num = parseFloat(prompt(message))
    }
    return num
}

function calculoImc(estatura,peso){
    let imc = (estatura/(peso*peso)).toFixed(2)
    return imc
}

function generarTexto(edad,imc){
    let texto = `Tu índice de masa corporal es ${imc}. Tienes un riesgo `
    if (edad<45 && imc <=22){
        texto += "bajo"
    } else if (edad >= 45 && imc >= 22){
        texto += "alto"
    } else {
        texto += "medio"
    }
    texto += " de enfermedad coranaria"
    return texto
}

let estatura = pedirNum("Introduce tu altura en metros:")
let peso = pedirNum("Introduce tu peso en kilos:")
let edad = pedirNum("Introduce tu edad:")

let imc = calculoImc(estatura, peso)

console.log(generarTexto(edad,imc))



