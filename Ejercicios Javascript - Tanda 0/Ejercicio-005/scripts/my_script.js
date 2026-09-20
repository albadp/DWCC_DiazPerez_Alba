/***************************************************************************************************************
 *
 *   Objetivo: Reflexionar sobre el tipo de estructura de programación a emplear que permita resolver la tarea
 *             de la forma más eficiente
 *
 *
 *   Tarea: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
 *          según la siguiente tabla
 *
 *                Cualificación    Porcentaje
 *             -----------------  -------------
 *             Matrícula de honor     100
 *                Sobresaliente      90-99
 *                  Notable          70-89
 *                    Bien           60-69
 *                   Aprobado        50-59
 *                   Suspenso         0-49
 *
 *   Entrada : nota
 *
 *   Salida  : El examen se cualifica con un XXX
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

/*
// Otra forma de hacerlo empleando programación funcional

const CUALIFICACIONES = [
  {
    cualificacion: "Matricula de honor",
    limInf: 100,
    limSup: 101,
  },
  {
    cualificacion: "Sobresaliente",
    limInf: 90,
    limSup: 100,
  },
  {
    cualificacion: "Notable",
    limInf: 70,
    limSup: 90,
  },
  {
    cualificacion: "Bien",
    limInf: 60,
    limSup: 70,
  },
  {
    cualificacion: "Aprobado",
    limInf: 50,
    limSup: 60,
  },
  {
    cualificacion: "Suspenso",
    limInf: 0,
    limSup: 50,
  },
];

function getCualificacion(nota) {
  let message = CUALIFICACIONES.find(
    (el) => nota >= el.limInf && nota < el.limSup
  ).cualificacion;
  
  return message == "Matricula de honor"
    ? `El examen se cualifica con una ${message}`
    : `El examen se cualifica con un ${message}`;
}
*/

function getCualificacion(nota) {
  let message = "";
  switch (true) {
    case nota >= 0 && nota <= 49:
      message = "suspenso";
      break;
    case nota >= 50 && nota <= 59:
      message = "aprobado";
      break;
    case nota >= 60 && nota <= 69:
      message = "bien";
      break;
    case nota >= 70 && nota <= 89:
      message = "notable";
      break;
    case nota >= 90 && nota <= 99:
      message = "sobresaliente";
      break;
    case nota == 100:
      message = "matricula de honor";
      break;
  }
  return message == "matricula de honor"
    ? `El examen se cualifica con una ${message}`
    : `El examen se cualifica con un ${message}`;
}

function showCualificacion(cualificacion) {
  alert(cualificacion);
}

let nota = getDato("Introduce tu nota:", "int", 0, 100);
let cualificacion = getCualificacion(nota);
showCualificacion(cualificacion);
