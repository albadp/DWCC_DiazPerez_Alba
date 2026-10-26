/**
 * 
 * Crear una página web para simular el
 * funcionamiento de una máquina automática de ventas de diversos productos.
 * Comenzaremos solicitando el precio del producto en euros. Después el usuario
 * indicará cuando dinero ha introducido en euros. Finalmente la página indicará
 * el cambio resultante.
 * 
 * Debemos tener en cuenta que:
 * 
 * • Se tiene que comprobar si introducimos más dinero que el precio del producto, y en caso de
 * que no sea así, se seguirá pidiendo más dinero mientras no introduzcamos el suficiente
 * dinero para pagar el producto
 * 
 * • La máquina solo puede devolver el cambio empleando monedas de 1, 2 ,5 , 10, 20 y 50
 * céntimos y 1 y 2 euros
 * 
 * • Se tiene que devolver el número mínimo de monedas
 * 
 * • Si introducimos el dinero exacto para pagar el producto debería mostrar una página con el
 * mensaje:
 * 
 * No se devuelve nada porque has pagado el precio exacto
 * 
 * Así, por ejemplo, si el producto vale 2.5 euros e introducimos 7.25 euros, se debería mostrar el
 * siguiente mensaje:
 * 
 * La máquina devuelve: 2 monedas de 2 euros, 1 moneda de 50 céntimos, 1 moneda de 20 céntimos, 1 moneda de 5 céntimos
 * 
 */

function pedirNum(message,minimo){
    let num = parseFloat(prompt(message))
    while(isNaN(num) && (num < minimo)){
        alert= "Tienes que introducir una cantidad válida (decimales con .)"
        num = parseFloat(prompt(message))
    }
    num.toFixed(2)
    return num * 100
}

const monedas = [200,100,50,20,10,5,2,1]

function monedas(vuelta, moneda){
    let cantidad = 0
    while((vuelta - moneda) >= moneda){
        vuelta -= moneda
        cantidad ++
    }
    return [cantidad, vuelta]
}


let gastoProducto = pedirNum("Introduce la cantidad del precio del producto: (en euros)",0)
let introducido = pedirNum("Introduce la cantidad del dinero a gastar en la máquina: (en euros)",gastoProducto)
let vuelta = introducido - gastoProducto
let dosEuros = monedas(vuelta, 200)
let unEuro = monedas(dosEuros.vuelta, 100)
let cincuenta = monedas(unEuro.vuelta, 50)
let veinte = monedas(cincuenta.vuelta, 20)
let diez = monedas(veinte.vuelta, 10)
