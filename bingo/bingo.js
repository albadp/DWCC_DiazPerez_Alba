// El bingo es un juego de azar en el que cada jugador dispone de una o varias
// tarjetas, llamadas cartones.
// Cada cartón tiene impresa una serie aleatoria
// de números. Un locutor extrae sucesivamente varias bolas numeradas
// de un bombo, anunciando los números extraídos. Cada vez que el locutor
// anuncia un número, los jugadores lo tachan de sus cartones en caso de
// tenerlo. El primer jugador que consigue tachar todos los números de
// alguno de sus cartones grita "¡Bingo!" y gana el juego. Si varios jugadores
// completan el cartón al mismo tiempo, todos ganan.
//
// El alcalde de Vilanova ha decidido montar un salón con una variante de este juego, llamada Bingo
// Injusto. En esta variante, cada jugador dispone de un único cartón, pero la cantidad de números que
// contiene el cartón es aleatoria. De este modo, puede haber jugadores que tengan más números que
// tachar que otros.
// Como el alcalde no dispone de mucho presupuesto, ha decidido hacer el papel de locutor del juego.
// El problema es que le aburre tener que comprobar cuáles de los cartones son los premiados y ha
// decidido hacer un programa que realice esta ingrata tarea por él. ¿Puedes ayudarle?
//
// Partida      Números                           Cartones                      Ganador
//                                        Jugador         Cartón
//                                         Diana        30 21 23 32             Diana
//    1     20 23 21 32 46 30              Martin       20 21 31 46 78 23
// 
//    2     15 21 10 2 7 9 3               Felipe        15 9 21                Felipe
//                                         Ricardo       10 2 9                 Gerardo
//                                         Gerardo         7 9                  Ricardo


function ganador(numeros, cartones){
    numeros.forEach(numero => {
        if(cartones.includes(numero)){
            cartones.splice(cartones.indexOf(numero), 1)
        }
        
    })

}



const numeros = [20, 23, 21, 32, 46, 30]
const cartones= [{
    carton: [30, 21, 23, 32]},
    {carton: [20, 21, 31, 46, 78, 23]
}]



