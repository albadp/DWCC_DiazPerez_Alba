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

const getMonedas=(vuelta, moneda)=>[parseInt(vuelta/moneda), vuelta%moneda]


const monedas = [200, 100, 50, 20, 10, 5, 2, 1]

let gastoProducto = pedirNum("Introduce el precio del producto: (en euros)",0)
let introducido = pedirNum("Introduce el dinero a gastar en la máquina: (en euros)",gastoProducto)

let vuelta = introducido - gastoProducto

/*
if (vuelta == 0){
    console.log("No se devuelve nada porque has pagado el precio exacto")
} else{
    const solucion=[]
    monedas.forEach(moneda =>{
        solucion.push(parseInt(vuelta/moneda))
        vuelta = vuelta % moneda
    })
    console.log(`La máquina devuelve: ${solucion[0]} monedas de 2 euros, ${solucion[1]} monedas de 1 euro, 
        ${solucion[2]} monedas de 50 céntimos, ${solucion[3]} monedas de 20 céntimos, ${solucion[4]} monedas de 10 céntimos,
        ${solucion[5]} monedas de 5 céntimos,${solucion[6]} monedas de 2 céntimos, ${solucion[7]} monedas de 1 céntimos \n`)
}*/

console.log("___________________________________________________________ \n")

const monedas2= [
    {
        tipo: "2 Euros",
        valor: 200,
        cantidad: 0
    },
    {
        tipo: "1 Euro",
        valor: 100,
        cantidad: 0
    },
    {
        tipo: "50 céntimos",
        valor: 50,
        cantidad: 0
    },
    {
        tipo: "20 céntimos",
        valor: 20,
        cantidad: 0
    },
    {
        tipo: "10 céntimos",
        valor: 10,
        cantidad: 0
    },
    {
        tipo: "5 céntimos",
        valor: 5,
        cantidad: 0
    },
    {
        tipo: "2 céntimos",
        valor: 2,
        cantidad: 0
    },
    {
        tipo: "1 céntimo",
        valor: 1,
        cantidad: 0
    }
]

if (vuelta == 0){
    console.log("No se devuelve nada porque has pagado el precio exacto")
} else{
    console.log("La máquina devuelve: ")
    monedas2.forEach(moneda =>{
        moneda.cantidad = (parseInt(vuelta/moneda.valor))
        vuelta = vuelta % moneda.valor
        if(moneda.cantidad != 0){
            console.log(`${moneda.cantidad} monedas de ${moneda.tipo}`)
        }
    })
}   