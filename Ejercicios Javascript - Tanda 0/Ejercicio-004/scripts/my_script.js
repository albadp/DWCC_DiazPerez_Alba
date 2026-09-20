/***************************************************************************************************************
 *
 *   Objetivo: Aprender a usar estructuras de programación condicionales
 *             Entender el valor de la comprobación de datos de entrada enuyn lenguaje debilmente tipado
 *
 *   Tarea: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
 *          Realizar de dos formas: empleando if y empleando switch
 *
 *   Entrada : edad
 *
 *   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
 *             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
 *             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
 *
 *   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (indicaremos el error)
 *             La edad no puede ser superior a 120
 *
 ***************************************************************************************************************/

// Como hemos realizado varios ejercicios solicitando enteros y flotantes y con limitaciones
// como mayor que 0, entre 1 y 120, etc, debemos pensar en una función genérica que nos permita
// pedir enteros, flotantes, cadenas y, dentro de lo posible, en un rango de datos
// De esta forma nos ahorramos trabajo

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

// Separar lógica de presentación
// Version if
function getMessageIf(edad) {
  let message = "";
  if (edad < 30) {
    message = "¡Ponte a trabajar!";
  } else if (edad >= 30 && edad <= 64) {
    message = "¡Que ganas tengo de jubilarme!";
  } else {
    message = "¡Descansa un poco!";
  }
  return message;
}

// Separar lógica de presentación
// Version switch
function getMessageSwitch(edad) {
  let message = "";

  switch (true) {
    case edad < 30:
      message = "¡Ponte a trabajar!";
      break;
    case edad >= 30 && edad <= 64:
      message = "¡Que ganas tengo de jubilarme!";
      break;
    case edad >= 65:
      message = "¡Descansa un poco!";
      break;
  }
  return message;
}

let edad = getDato("Introduce tu edad:", "int", 1, 120);
alert(getMessageIf(edad));
alert(getMessageSwitch(edad));
