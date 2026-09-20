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

function getDato(message, type, min = -Infinity, max = Infinity) {
  let end = false;
  let dato;

  do {
    dato = prompt(message);
    switch (type) {
      case "int":
        dato =
          isNaN(dato) ||
          parseInt(dato) !== parseFloat(dato) ||
          dato < min ||
          dato > max
            ? NaN
            : parseInt(dato);
        end = isNaN(dato) ? false : true;
        break;
      case "float":
        dato = isNaN(dato) || dato < min || dato > max ? NaN : parseFloat(dato);
        end = isNaN(dato) ? false : true;
        break;
      case "string":
        end = true;
        break;
    }
    if (!end) {
      alert("Tipo de dato incorrecto o no está entre los límites");
    }
  } while (!end);
  return dato;
}

// Arrow function que calcula el IMC
const imc = (peso, altura) => (peso / Math.pow(altura / 100, 2)).toFixed(2);

// Separamos lógica de presentacion
// Función que obtiene el riesgo
function getRiesgo(edad, imc) {
  let message = "";

  switch (true) {
    case imc <= 22 && edad < 45:
      message = `bajo`;
      break;
    case imc <= 22 && edad >= 45:
      message = `medio`;
      break;
    case imc >= 22 && edad < 45:
      message = `bajo`;
      break;
    case imc >= 22 && edad >= 45:
      message = `alto`;
      break;
  }
  return message;
}

let peso = getDato("Introduce tu peso", "float");
let altura = getDato("Introduce tu altura", "float");
let edad = getDato("Introduce tu edad", "int", 1);

console.log(`Tu indice de masa corporal es ${imc(peso, altura)}`);
console.log(`Tienes un riesgo ${getRiesgo(edad, imc)} de enfermedad coronaria`);
