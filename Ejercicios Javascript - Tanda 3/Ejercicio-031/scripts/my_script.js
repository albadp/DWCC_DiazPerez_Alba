/***************************************************************************************************************
 *
 *   Objetivo:
 *
 *   Tarea: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
 *          Crear tres funciones:
 *                1.- Devuelve un array con los elementos comunes en los arrays
 *                1.- Devuelve en un array los elementos del
 *                    primer array que están en el segundo array
 *                2.- Devuelve en un array los elementos del
 *                    primer array que no están en el segundo array
 *
 *          Rellenar los arrays con númeos aleatorios entre -100 y 100
 *
 *   Entrada : La longitud del array (numero entero n)
 *
 *   Salida  : Los elementos del Array1
 *             Los elementos del Array2
 *             Los arrays tienen XX elementos comunes: los elementos comunes
 *             En el primer array no hay los siguientes elementos del segundo array: ...
 *             En el segundo array no hay los siguientes elementos del primer array: ....
 *
 ***************************************************************************************************************/

const elementosComunes1=(arr1,arr2)=>{
    return arr1.reduce((anterior,actual)=>{
        if (arr2.includes(actual))
            anterior.push(actual)
        return anterior
    },[])
}

const elementosComunes2=(arr1,arr2)=>{
    const comunes=[]
    arr1.forEach(element => {
        if (arr2.includes(element))
            comunes.push(element)
    });
    return comunes
}

const notInArr2=(arr1,arr2)=>{
    const solucion=[]
    arr1.forEach(element=>{
        if (!arr2.includes(element))
            solucion.push(element)
    })
    return solucion
}

const notInArr1=(arr1,arr2)=>notInArr2(arr2,arr1)


const vector1=[1,2,3,4,5]
const vector2=[2,4,8]

console.log(elementosComunes1(vector1,vector2))
console.log(elementosComunes2(vector1,vector2))
console.log(notInArr2(vector1,vector2))
console.log(notInArr1(vector1,vector2))


