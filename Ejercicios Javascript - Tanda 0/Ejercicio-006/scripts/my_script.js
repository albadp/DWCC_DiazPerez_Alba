/***************************************************************************************************************
 *
 *   Objetivo: Reforzar lógica de programación
 *             Aprender a realizar operaciones matemáticas
 *
 *   Tarea: Solicitamos el número de caramelos y el número de niños, y calcule
 *          cuantos caramelos tocan por niño y cuantos sobran.
 *
 *   Entrada : nCaramelos, nPeques
 *
 *   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
 *                   El número de caramelos por niño es: XXXX
 *                   El número de caramelos que sobran es: YYYY
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

let nCaramelos = getDato("Introduce el numero de caramelos", "int", 1);
let nPeques = getDato("Introduce el numero de niños", "int", 1);

let caramelosPorInfantes = parseInt(nCaramelos / nPeques);
let caramelosSobran = nCaramelos % nPeques;

console.log(`El número de caramelos por niño es: ${caramelosPorInfantes}`);
console.log(`El número de caramelos que sobran es: ${caramelosSobran}`);
