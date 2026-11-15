// para su última fiesta de cumpleaños, Xan Perillán se dedicó a hacer macarons. 
// Los colocó formando dos largas filas que fueron mermando según transcurría la tarde.
// En un momento dado, sus dos hijos se acercaron a la mesa con la intención de dar buena cuenta de 
// los que quedaban. La mayor le dijo al pequeño: "como tú tienes la mitad de años que yo, tú coges 
// uno de una fila y yo cojo dos de la otra, y así hasta que se acaben". Afortunadamente Xan les oyó y 
// llegó a tiempo para evitar tanto una indigestión de los pequeños como que el resto de invitados se 
// quedara sin macarons. Sabiendo que era imposible, les dijo que solo les permitiría seguir su plan si 
// de verdad iban a conseguir repartirse todos sin que sobrara ninguno
// Macarons fila 1      macarons fila 2         macarons hijo mayor         macarons hijo menor         solución
//      2                       1                           1                           2                   SI
//      2                       2                           2                           1                   NO
//      4                       4                           3                           1                   SI
//      3                       6                           4                           4                   NO
// Se debe mostrar si los niños pueden repartirse todos los macarons o no teniendo en cuenta que, al 
// coger sus macarons, los hacen alternando de fila. Si, tras hacerlo un niño aún quedan más, el otro 
// niño empezará a coger por la fila en la que no se cogió el ultimo macaron

function macarons(fila1, fila2, mayor, menor){
    let turno = 0
    let fila = 1
    while(fila1 > 0 || fila2 > 0){
        let cantidad
        if(turno === 0){
            cantidad = menor
        } else {
            cantidad = mayor
        }
        if(fila === 1){
            if(fila1 < cantidad){
                return "NO"
            }
            fila1 -= cantidad
        } else {
            if(fila2 < cantidad){
                return "NO"
            }
            fila2 -= cantidad
        }
        turno = 1 - turno
        fila = 3 - fila
    }
    return "SI"
}


console.log(macarons(3,6,4,4))



