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
    constructor(isbn, titulo, autor){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        
    }
}

class UI{
    constructor(libros, ejemplares){
        this.libros=libros
        this.ejemplares = ejemplares

        this.listaLibros = document.querySelector("#lista-libros")
        this.tablaLibros = document.querySelector("#tabla-libros")
        this.resumen = document.querySelector("#resumen")

        this.showLista()
        this.showTabla()
        this.showResumen()
    }
    showLista(){
        
    }
}

class Ejemplar{
    constructor(libro, cantidad, disponibles, prestados){
        this.libro = libro
        this.cantidad = cantidad
        this.disponibles = disponibles
        this.prestados = prestados
    }

    prestar(){
        this.disponibles --
        return this.prestados++
    }

    devolver(){
        if(this.ejemplares == this.disponibles){
            return this.disponibles
        } else{
            this.prestados--
            return this.disponibles++
        }
    }
}

const libros = [
    new Libro("978-84-376-0494-7","Don Quijote de la Mancha","Miguel de Cervantes"),
    new Libro("978-84-204-8270-5","Cien años de soledad","Gabriel García Márquez"),
    new Libro("978-84-670-5205-2","La sombra del viento","Carlos Ruiz Zafón")
]

const ejemplares = [
    new Ejemplar(libros[0], 3,3,0),
    new Ejemplar(libros[1], 2,2,0),
    new Ejemplar(libros[2], 4,4,0)
]