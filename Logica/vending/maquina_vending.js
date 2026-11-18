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
 * POR VER COMO SOLUCIONAR ESTA VERSIÓN
 * 
 */

function pedirNum(message,minimo){
    let num = parseFloat(prompt(message))
    num.toFixed(2)
    num *=100
    while(isNaN(num) || (num < minimo)){
        alert("Tienes que introducir una cantidad válida (decimales con .)")
        num = parseFloat(prompt(message))
        num.toFixed(2)
        num *=100
    }
    
    return num
}

const monedas = [200,100,50,20,10,5,2,1]

function getMonedas(vuelta, moneda){
    let cantidad = 0
    while((vuelta - moneda) >= moneda){
        vuelta -= moneda
        cantidad ++
    }
    return [cantidad, vuelta]
}


let gastoProducto = pedirNum("Introduce el precio del producto: (en euros)",0)
let introducido = pedirNum("Introduce el dinero a gastar en la máquina: (en euros)",gastoProducto)

let vuelta = introducido - gastoProducto

let dosEuros = getMonedas(vuelta, 200)
let unEuro = getMonedas(dosEuros.vuelta, 100)
let cincuenta = getMonedas(unEuro.vuelta, 50)
let veinte = getMonedas(cincuenta.vuelta, 20)
let diez = getMonedas(veinte.vuelta, 10)
let cinco = getMonedas(diez.vuelta,5)
let dos = getMonedas(cinco.vuelta,2)
let uno = getMonedas(dos.vuelta,1)

if (vuelta == 0){
    console.log("No se devuelve nada porque has pagado el precio exacto")
} else{
    console.log(`La máquina devuelve: ${dosEuros.cantidad} monedas de 2 euros, ${unEuro.cantidad} monedas de 1 euro, 
        ${cincuenta.cantidad} monedas de 50 céntimos, ${veinte.cantidad} monedas de 20 céntimos, ${diez.cantidad} monedas de 10 céntimos,
        ${cinco.cantidad} monedas de 5 céntimos,${dos.cantidad} monedas de 2 céntimos, ${uno.cantidad} monedas de 1 céntimos`)
}
    