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

let edad = prompt("Introduce tu edad:")

if(Number.isInteger(edad)){
//    if(edad < 30){
//        console.log("! Ponte a trabajar !")
//    } else if (edad > 30 && edad < 65){
//        console.log("! Que ganas tengo de jubilarme !")
//    } else if(edad > 65 && edad < 120){
//        console.log("! Descansa un poco !")
//    } else{
//        alert("La edad no puede ser superior a 120")
//    }

    switch(edad){
        case edad < 30:
            console.log("! Ponte a trabajar !")
            break
        case edad > 30 && edad < 65:
            console.log("! Que ganas tengo de jubilarme !")
            break
        case edad > 65 && edad < 120:
            console.log("! Descansa un poco !")
            break
        case edad > 120:
            alert("La edad no puede ser superior a 120")
            break
    }
}

