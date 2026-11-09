/***************************************************************************************************************
 *
 *   Objetivo:
 *
 *   Tarea: Sumar los elementos de las dos diagonales de una matriz bidimensional.
 *          Se genera una matriz de las dimensiones indicadas con números aleatorios
 *          entre -100 y 100 (ambos incluídos)
 *
 *   Entrada : La dimension de la matriz (número de filas y columnas)
 *
 *   Salida  : La matriz generadas y la suma de las dos diagonales de la misma
 *
 ***************************************************************************************************************/

const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random())

const generateMatrix=(filas,cols)=>Array.from({length:filas},(el)=>Array.from({length:cols},(el)=>aleatorio(LIMIT_INF,LIMIT_SUP)))
const getSumDiagonal=(matriz)=>matriz.reduce((anterior,actual,i)=>anterior+actual[i]+actual[actual.length-1-i],0)

const ROWS=3,COLS=3,LIMIT_INF=-100,LIMIT_SUP=100
const matriz=generateMatrix(ROWS,COLS,LIMIT_INF,LIMIT_SUP)
console.log(matriz,getSumDiagonal(matriz))