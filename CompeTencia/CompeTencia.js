// Hasta hace bien poco la vida era sencilla en
// Vilanova de Arousa. Un bar, un colmado y una
// farmacia eran los únicos negocios presentes en la
// localidad, que disfrutaban de sus respectivos
// monopolios poniendo unos precios quizá un poco
// excesivos.
// Sin embargo, la vida se torció para Doña Compe, la
// dueña del colmado. La culpable es la Señora
// Tencia, que ha decidido abrir una tienda en la otra
// esquina del pueblo, y la paz que disfrutábamos se
// ha trasladado a nosotros ya que cuando vamos a comprar tenemos que decidir a qué tienda vamos.
// Mi objetivo, como el de todos, es pagar lo menos posible. Para eso he cogido los catálogos de
// precios de cada una de las tiendas y he planificado mis siguientes compras. Para cada una de ellas
// he establecido a cuánto ascendería mi cuenta en ambas tiendas, de forma que me ayude a decidir a
// cuál de las dos voy en cada momento. Eso sí, en aras de la paz y armonía de nuestro pueblo, me he
// marcado un número mínimo de visitas a cada una de las tiendas, para que ninguna de las dos
// empresarias se moleste conmigo.

// Numero de compras    NC minimas en Compe     NC minimas en Tencia    Precio cesta en Compe   Precio cesta en Tencia      Gasto minimo
//   6                          2                           2                    123456                654321                      12
//   5                          2                           2                    66666                  12345                      18


function pedirNum(message){
    let num = parseInt(prompt(message))
    while(isNaN(num) || (num <= 0)){
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}



function findGastoMin(numCompras, minCompe, minTencia, cestaCompe, cestaTencia){
    cestaCompe.sort()
    cestaTencia.sort()
    let gasto = 0
    for(let i = 0; i<minCompe;i++){
        gasto += cestaCompe.shift()

    }
    for(let i = 0; i<minTencia;i++){
        gasto += cestaTencia.shift()
    }
    numCompras -= minCompe + minTencia
    for(let i = 0; i<numCompras;i++){
        if (cestaCompe[0] < cestaTencia[0]){
            gasto += cestaCompe.shift()
        } else {
            gasto += cestaTencia.shift()
        }
    }
    return gasto
}


let numCompras = pedirNum("Introduce la cantidad de compras a realizar")
let minCompe = pedirNum("Introduce la cantidad minima de compras en Compe")
let minTencia = pedirNum("Introduce la cantidad minima de compras en Tencia")
let cestaCompe = [6,6,6,6,6]
let cestaTencia = [5,4,3,2,1]

let gasto = findGastoMin(numCompras, minCompe, minTencia, cestaCompe,cestaTencia)
console.log("El gasto mínimo es " + gasto)
