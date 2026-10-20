/***************************************************************************************************************
 *
 *   Tarea: Solicitamnos un número entero n positivo. Si n es par, se divide por 2 y su n es
 *          impar se multiplica por tres y suma uno. El proceso se repite hasta que n tenga el valor de 1.
 *          Por ejemplo, la secuencia para n=3 será:
 *
 *                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
 *
 *          Resolverlo iterativa y recursivamente.
 *
 *   Entrada : numero entero n entre 1 y 100
 *
 *
 *   Salida  : La secuencia de valores obtenida
 *
 *
 ***************************************************************************************************************/

// Con cadenas
// No es una buena solución porque no nos permitiría procecesar
// la secuencia numérica posteriormente para otra cosa
function CollatzIterativoString(n) {
  let msg = `${n}-->`;

  while (n != 1) {
    n = n % 2 == 0 ? n / 2 : 3 * n + 1;
    msg+=`${n}-->`
  }
  return msg.slice(0,-3)
}


// Con arrays
function CollatzIterativoArray1(n) {
  let numeros = [n];

  while (n != 1) {
    n = n % 2 == 0 ? n / 2 : 3 * n + 1;
    numeros.push(n);
  }
  return numeros;
}

// Convirtiendo el número pasado en un array con el operador rest
function CollatzIterativoArray2(...n) {
  while (n[n.length-1] != 1) {
    n[n.length-1] % 2 == 0
      ? n.push(n[n.length-1] / 2)
      : n.push(3 * n[n.length-1] + 1);
  }
  return n;
}

/*
const numeros = [];
function CollatzRecursivo(n) {
  if (n == 1) {
    return numeros.push(n);
  }

  return n % 2 == 0
    ? numeros.push(CollatzRecursivo(n / 2))
    : numeros.push(CollatzRecursivo(3 * n + 1));
}
*/

function CollatzRecursivoString(n) {
  let msg=`${n}-->`;
  
  if (n==1)
    return msg.slice(0,-3)

  return n % 2 == 0
    ? msg+CollatzRecursivoString(n / 2)
    : msg+CollatzRecursivoString(3 * n + 1)

}


function CollatzRecursivoArray1(n) {
  const numeros=[]

  function CollatzRecursivo(n) {
    numeros.push(n)

    if (n == 1) {
      return numeros
    }

    n % 2 == 0
      ? CollatzRecursivo(n / 2)
      : CollatzRecursivo(3 * n + 1)
  }

  CollatzRecursivo(n)

  return numeros
}

function CollatzRecursivoArray2(...n) {
  if (n[n.length-1] == 1) {
    return n;
  }

  n[n.length-1] % 2 == 0
    ? n.push(n[n.length-1] / 2)
    : n.push(3 * n[n.length-1] + 1);

  return CollatzRecursivoArray2(...n)
}

console.log(CollatzIterativoString(3));
console.log(CollatzIterativoArray1(3).join("-->"));
console.log(CollatzIterativoArray2(3).join("-->"));
console.log(CollatzRecursivoString(3));
console.log(CollatzRecursivoArray1(3).join("-->"));
console.log(CollatzRecursivoArray2(3).join("-->"));
