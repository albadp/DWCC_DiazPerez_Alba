/***************************************************************************************************************
 *
 *   Objetivo: Aprender a modificar el documento HTML
 *             Reforzar en el uso de template strings
 *             Reforzar el uso de estructuras de control repetitivas y condicionales
 *             Reforzar en la validación de datos de entrada
 *             Aprender a detectar y corregir errores
 *             Aprender a definir funciones y arrays (adicional)
 *             Aprender métodos de programación funcional (adicional)
 *
 *   Tarea: Solicitaremos un número entero entre 1 y 9. Repetimos la solicitud mientras no esté entre 1 y 9.
 *          Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
 *
 *   Entrada : numero     1 <= numero <= 9
 *
 *   Salida  : 1 x numero = numero
 *             2 x numero = ....
 *             3 x numero = ....
 *                   ....
 *             9 x numero = ....
 *
 *   Nota: Formatea la salida en el documento HTML empleando una tabla con 5 columnas y nueve filas
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

function tabla(num) {
  let tabla = "<table>";
  for (let i = 1; i <= 10; i++) {
    tabla += "<tr>";
    tabla += `<td>${i}</td><td>x</td><td>${num}</td><td>=</td><td>${
      i * num
    }</td>`;
    tabla += "</tr>";
  }
  tabla += "</table>";
  return tabla;
}

let num = getDato("Introduce un numero entre 1 y 9", "int", 1, 9);

const $body = document.querySelector("body");
$body.innerHTML = tabla(num);
