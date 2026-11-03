// Los tickets de las entradas a los eventos deportivos incluyen un código de verificación de
// modo que una parte del número se calcula en realidad a partir del resto.
// Esto permite comprobar errores en los sistemas automatizados de lectura de los tickets.
// Si al recalcular el código de verificación se obtiene un valor distinto al que se ha leído, algo ha ido
// mal con la lectura y hay que volver a intentarlo.
// En uno de estos eventos, las entradas se identifican con números a los que se añade un código de
// verificación calculado con la suma de las siguientes cantidades:

// •Cada dígito en una posición impar se multiplica por 3 y se le suma el menor dígito a su derecha.
// •Cada dígito en una posición par se multiplica por 2 y se le suma el mayor dígito a su izquierda.

// La suma de todos esos valores es lo que se utiliza como código de comprobación. Para su cálculo,
// no se tienen en cuenta los ceros a la izquierda del número original, y los dígitos se cuentan de
// izquierda a derecha, de manera que el dígito situado más a la izquierda es el primero y se considera
// situado en una posición impar.
//          Entrada                         Código de verificación
//            7214                                      55
//              10                                       4
//            1001                                       8


function validarEntrada(entrada, codigo){
    let suma = 0
    for(let i = 0; i < entrada.length; i++){
        if(i % 2 == 0){
            suma += entrada[i] * 3
        } else {
            suma += entrada[i] * 2
        }
        suma += sumaDigito(i, entrada)
    }
    if (suma == codigo){
        return true
    }
    return false
}

function sumaDigito(index, entrada){
    if(index % 2 == 0){
        let buscar = entrada.slice(index+1)
        let min = Math.min(...buscar.split(''))
        return min
    } else {
        let buscar = entrada.slice(0,index)
        let max = Math.max(...buscar.split(''))
        return max
    }
}


let entrada = "7214"
let codigo = 55


let mensaje = validarEntrada(entrada, codigo) ? "La entrada es válida" : "La entrada es falsa"

console.log(mensaje)




