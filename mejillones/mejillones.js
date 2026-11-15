// Mis padres han comprado 5 kilos de mejillones. Nos gusta comerlos simplemente 
// cocidos al vapor con unas gotas de limón. Para evitar que se llenen los 
// platos con las conchas, se sirven ya abiertos en fuentes enormes. Aun 
// así, si no tienes cuidado, pronto tu plato estará completamente lleno y 
// no podrás colocar más mejillones para comerlos. Mi hermano ha 
// ideado un sistema para mantener el plato lo más libre posible. Va 
// colocando las conchas vacías con la parte interior hacia arriba, y las 
// amontona poniendo siempre una concha más pequeña sobre una más grande, de forma que se 
// coloca en el interior y la torre tiene mayor estabilidad. 
// Hoy he decidido hacer lo mismo para intentar tener más sitio en el plato y así comer más. Sin 
// embargo, al recoger los platos me he dado cuenta de que el suyo tenía muchos menos montones que 
// el mío, a pesar de que habíamos comido lo mismo. ¿Sabes cuál es la estrategia que utiliza mi 
// hermano para minimizar el número de montones en el plato? 
// Debes tener en cuenta que los mejillones hay que comerlos en el orden en que te los van sirviendo, 
// no vale elegirlos. Buscar el mejor de la fuente se considera de mala educación, y hay que 
// conformarse con el que te corresponde en el orden en que se presentaron. 
// Entrada
// Cada caso comienza con una línea en que se indica el número N de mejillones que te ha tocado 
// comer. A continuación aparece una línea con N enteros que representan el tamaño de las conchas de 
// esos mejillones

// Salida
// Para cada caso de prueba se escribirá en una línea el menor número de montones de mejillones que 
// se pueden formar con todas las conchas de los mejillones que te ha tocado comer. 

// Entrada de ejemplo
// 6 5 4 3
// 3 4 5 5 5
// 7 7 7 5 2 5 2 2

// Salida de ejemplo
// 1
// 5
// 3


function minimoMontones(conchas) {
    let montones = []
    conchas.forEach(concha => {
        let posicion = -1
        for(let i = 0; i < montones.length; i++){
            if(montones[i] > concha){
                if(posicion == -1 || montones[i] < montones[posicion]){
                    posicion = i
                }
            }
        }
        if(posicion == -1){
            montones.push(concha)
        } else {
            montones[posicion] = concha
        }
    })
    return montones.length
}



const caso1 = [6, 5, 4, 3]
const caso2 = [3, 4, 5, 5, 5]
const caso3 = [7, 7, 7, 5, 2, 5, 2, 2]

console.log(minimoMontones(caso1)) 
console.log(minimoMontones(caso2)) 
console.log(minimoMontones(caso3)) 




