// Espiral de gritos cada vez más largos. El primero da un grito, el segundo un grito más largo, el
// tercero otro aún más largo, y así sucesivamente.
//  El primer disfrazado simplemente grita "BUH". 
// El segundo disfrazado suelta el mismo grito que el anterior, después un nuevo BUH pero con una U más, y después vuelve a
// repetir el grito del anterior. 
// El tercer disfrazado vuelve a hacer lo mismo.
// El resultado es que los primeros gritos son los siguientes (los espacios se ponen por claridad,
// pero no hay separación):
// Orden Grito
//  1      BUH
//  2      BUH BUUH BUH
//  3      BUHBUUHBUH BUUUH BUHBUUHBUH
//  4      BUHBUUHBUHBUUUHBUHBUUHBUH BUUUUH BUHBUUHBUHBUUUHBUHBUUHBUH
//
// Crea un script para indicar, de forma recursiva e iterativa, qué grito dará el disfrazado número n?

function pedirNum(message){
    let num = parseInt(prompt(message))
    while(isNaN(num) || (num <= 0)){
        alert("Tienes que introducir un número en dígito")
        num = parseInt(prompt(message))
    }
    return num
}

function getGritoRec(num){
    if (num==1)
        return "BUH"

    return getGritoRec(num-1)+"B"+"U".repeat(num)+"H"+getGritoRec(num-1)
}

function getGritoIt(num){
    let grito = "BUH"
    let gritoBase = "BUH"
    if (num != 1){
        for(let i = 1; i < num; i++){
            grito = grito + gritoBase.replace("U","U".repeat(i+1)) + grito
        }
    }
    
    return grito
}


let num = pedirNum("Introduce el número del disfrazado que intenta asustar:")

console.log(getGritoRec(num))
console.log("______________________________________________________")
console.log(getGritoIt(num))
