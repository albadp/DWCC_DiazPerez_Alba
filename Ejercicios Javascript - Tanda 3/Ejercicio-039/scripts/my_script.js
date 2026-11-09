/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en el uso de lógica de programación para la resolución de problemas
 *             Aprender a generar aleatorios
 *
 *   Tarea: Papá Noel tiene que comenzar a repartir los regalos...
 *          ¡Pero ha olvidado el código secreto de apertura del almacén!
 *          Tienes que introducir códigos y obtener pistas:
 *               - El código es una combinación de letras y números aleatorios
 *                 de longitud 4. (Letras: de la A a la C, Números: del 1 al 3)
 *               - No hay repetidos.
 *               - Se genera de manera aleatoria al cargar la página.
 *
 *          Usuario:
 *                - Dispone de 10 intentos para acertarlo.
 *                - En cada turno deberá escribir un código de 4 caracteres, y
 *                  el programa le indicará para cada uno lo siguiente:
 *                    - Correcto: Si el caracter está en la posición correcta.
 *                    - Presente: Si el caracter existe, pero esa no es su posición.
 *                    - Incorrecto: Si el caracter no existe en el código secreto.
 *                    - Deben controlarse errores de longitud y caracteres soportados.
 *
 *         Finalización:
 *                - Papa Noel gana si descifra el código antes de 10 intentos.
 *                - Pierde si no lo logra, ya que no podría entregar los regalos.
 ****************************************************************************************************************/

const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random())

function createCodigoSecreto(length,types){
    let claveInicial=types.map((el,i)=>types[i][aleatorio(0,types[i].length)]).join('')

    while(claveInicial.length<length) {
        let index=aleatorio(0,types.length)
        let char=types[index][aleatorio(0,types[index].length)]
        if (!claveInicial.includes(char))
            claveInicial+=char
    }

    return claveInicial
}

function getIntento(i,clave,types){
    let intento=prompt(`Código secreto para el intento ${i}`)
    while(intento.length!=clave.length || ! intento.split('').every(el=>types.join('').includes(el))) {
        if (intento.length>clave.length)
            console.log(`Error: Longitud del código incorrecto`)
        else if (!intento.split('').every(el=>types.join('').includes(el))) {
            console.log(`Error: Caracteres incorrectos en el código`)
        }
        intento=prompt(`Codigo secreto para el intento ${i}`)
    }
    return intento
}

function game(clave,NIntentos,types){
    console.log(`Dispones de ${NIntentos} intentos para acertar el código secreto`)
    console.log(`El código tiene ${clave.length} caracteres diferentes entre ${types.join('').split("").join(", ")}`)

    let i=1
    let end=false
    while(i<=NIntentos&&!end){
        let intento=getIntento(i,clave,types)
        const comprobaciones=intento.split('').reduce((anterior,actual,i)=>{
            if (clave.includes(actual)) {
                clave[i]==actual?anterior.push("Correcto"):anterior.push("Presente")
            } else {
                anterior.push("Incorrecto")
            }
            return anterior
        },[])
        end=comprobaciones.every(el=>el=="Correcto")
        console.log(` ${intento.split('')} : ${comprobaciones.join(' - ')}`)
        i++
    }
    return end
}

let clave=createCodigoSecreto(4,["ABC","123"])
console.log(clave)
const resultado=game(clave,2,["ABC","123"])
const msg=resultado?"Papa Noel gana !":"Papa Noel pierde"
console.log(msg)


