// const libros=[
//     {
//         ISBN:"978-84-376-0494-7",
//         titulo:"Don Quijote de la Mancha",
//         autor:"Miguel de Cervantes",
//         ejemplares:3
//     },
//     {
//         ISBN:"978-84-204-8270-5",
//         titulo:"Cien años de soledad",
//         autor:"Gabriel García Márquez",
//         ejemplares:2
//     },
//     {
//         ISBN:"978-84-670-5205-2",
//         titulo:"La sombra del viento",
//         autor:"Carlos Ruiz Zafón",
//         ejemplares:4
//     }
// ]

class Libro{
    constructor(isbn, titulo, autor,cantidad){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.cantidad = cantidad
    }
}

class UI{
    constructor(libros,ejemplares){
        this.libros = libros
        this.ejemplares = ejemplares

        this.listaLibros = document.querySelector("#lista-libros")
        this.tablaLibros = document.querySelector("#tabla-libros")
        this.resumen = document.querySelector("#resumen")

        this.showLista()
        this.showTabla()
        this.showResumen()
        // this.addEvents()
    }
    showLista(){
        this.listaLibros.innerHTML=libros.reduce((anterior,actual)=>anterior+`
        <div>
            <p>
                <strong>${actual.titulo}</strong> - ${actual.autor}  <button data-id="${actual.isbn}">Prestar</button>
            </p>
        </div>
        `,'')
    }
    showTabla(){
        
    }
    showResumen(){
        this.resumen.innerHTML=`
        Total ejemplares: ${ejemplares.count()} | Total prestados: ${ejemplares.count()}  
        `
    }
    addEvents(){

    }
}

class Ejemplar{
    constructor(id, libro, cantidad, prestados){
        this.id= id
        this.libro = libro
        this.cantidad = cantidad
        this.prestados = prestados
    }

    prestar(){
    }

    devolver(){
    }
}

const libros = [
    new Libro("978-84-376-0494-7","Don Quijote de la Mancha","Miguel de Cervantes",3),
    new Libro("978-84-204-8270-5","Cien años de soledad","Gabriel García Márquez",2),
    new Libro("978-84-670-5205-2","La sombra del viento","Carlos Ruiz Zafón",4)
]

const ejemplares = []

for(let i = 0; i < 9; i++){
    if (i<3){
        ejemplares.push(new Ejemplar(i,libros[0],false))
    } else if(i<5){
        ejemplares.push(new Ejemplar(i,libros[1],false))
    } else{
        ejemplares.push(new Ejemplar(i,libros[2],false))
    }
}

const Interfaz= new UI(libros,ejemplares)