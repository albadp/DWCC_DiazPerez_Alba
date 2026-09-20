/***************************************************************************************************************
 *
 *   Objetivo: Reforzar lógica de programación
 *             Aprender a emplear diferentes tipos de bucles
 *
 *   Tarea: Solicitamos un número y si queremos mostrar un cuadrado o triángulo
 *
 *   Entrada : n (Number)
 *             n debe ser impar en caso de querer un triángulo (repetimos la petición en caso de que no lo sea)
 *
 *   Salida  : Mostramos un cuadrado (o triángulo) del lado indicado (con la base indicada)
 *
 *             Ej: n=3 triangulo                    n=3 cuadrado
 *
 *                      *                             ***
 *                     ***                            * *
 *                                                    ***
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

function getTriangulo(n) {
  let fila = "";
  for (let i = 1; i <= n; i += 2) {
    let nEspacios = (n - i) / 2;
    fila += `${" ".repeat(nEspacios)}${"*".repeat(i)}\n`;
  }
  return fila;
}

function getCuadrado(n) {
  let fila = "";
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
      fila += "*".repeat(num) + "\n";
    } else {
      fila += "*" + " ".repeat(num - 2) + "*" + "\n";
    }
  }
  return fila;
}

// Validar que solo se introduce triangulo o cuadrado
let figura = prompt("Introduce la figura (triangulo o cuadrado)");
while (figura !== "triangulo" && figura !== "cuadrado") {
  figura = prompt("Introduce la figura (triangulo o cuadrado)");
}

// Validamos si la base es entero entre 1 y 15 y si es impar en caso de ser un triangulo
let num = getDato("Base (impar si es un triangulo)", "int", 1, 15);
while (figura == "triangulo" && num % 2 == 0) {
  alert("Si la figura es un triángulo, la base tiene que ser impar");
  num = getDato("Base (impar si es un triangulo)", "int", 1, 15);
}

// Ejecutamos
let fig = figura == "triangulo" ? getTriangulo(num) : getCuadrado(num);
console.log(fig);
