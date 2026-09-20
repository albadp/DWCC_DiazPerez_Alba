/***************************************************************************************************************
 *
 *   Objetivo: Reforzar aprendizaje sobre petición de datos
 *             Reforzar aprendizaje sobre mostrar salida de datos (un mensaje de alerta).
 *             Aprender a concatenar cadenas
 *             Aprender a emplear template strings
 *             Aprender a definir y usar funciones (adicional)
 *             Emnplear condicionales y/o expresiones ternarias
 *             Separar lógica de presentación
 *             Aprender a solicitar datos de un tipo determinado de datos (adicional)
 *             Mejorar lógica de programación y programación genérica (adicional)
 *
 *   Tarea: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
 *
 *   Entrada : cadena de texto (String): nombre
 *             numero entero (Number): edad
 *
 *   Salida  : Una vez solicitados los datos, se debe mostrar la información solicitada a través de la
 *             consola de depuración y en una ventana de alerta
 *
 *             Tu nombre es .... y tienes .... años. Eres mayor|menor de edad
 *
 ***************************************************************************************************************/

let nombre = prompt("Introduce tu nombre:");

// Validamos que sea un entero: isNaN(edad)
// Validamos que sea entero (y no flotante): parseInt(edad) !== parseFloat(edad)
// Validamos que sea mayor que 0
let edad = prompt("Introduce tu edad:");
while (isNaN(edad) || parseInt(edad) !== parseFloat(edad) || edad < 0) {
  alert("Edad incorrecta ! Debe ser un entero mayor que 0");
  edad = prompt("Introduce tu edad:");
}

// Mejor separar la lógica de la visualización de la salida
let message = `Tu nombre es ${nombre} y tienes ${edad}. Eres mayor de edad.`;
if (edad < 18) {
  message = `Tu nombre es ${nombre} y tienes ${edad}. Eres menor de edad.`;
}

/*
// Podemos emplear una ternaria
let message =
  edad > 18
    ? `Tu nombre es ${nombre} y tienes ${edad}. Eres mayor de edad.`
    : `Tu nombre es ${nombre} y tienes ${edad}. Eres menor de edad.`
*/

console.log(message);
alert(message);
