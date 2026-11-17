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

class Ejemplar{
    constructor(id, libro, prestado = false){
        this.id= id
        this.libro = libro
        this.prestado = prestado
    }

    prestar(){
        if(this.prestado){
            return false
        } else{
            this.prestado = true
            return true
        }
    }

    devolver(){
        if(!this.prestado){
            return false
        } else{
            this.prestado = false
            return true
        }
    }
}

class Biblioteca{
    constructor(){
        this.ejemplares = []
    }

    agregarEjemplares(libro,cantidad){
        for(let i=0;i<cantidad;i++){
            const ejemplar=new Ejemplar(this.ejemplares.length+1,libro)
            this.ejemplares.push(ejemplar)
        }
    }

    obtenerEjemplares(isbn){
        return this.ejemplares.filter(ejemplar=>ejemplar.libro.isbn==isbn)
    }

    prestar(isbn){
        const ejemplar=this.ejemplares.find(ejemplar=>ejemplar.libro.isbn==isbn && !ejemplar.prestado)
        if(!ejemplar){
            return false
        }
        return ejemplar.prestar()
    }

    devolver(isbn){
        const ejemplar=this.ejemplares.find(ejemplar=>ejemplar.libro.isbn==isbn && ejemplar.prestado)
        if(ejemplar){
            return ejemplar.devolver()
        }
        return false
    }

    disponibles(isbn){
        return this.obtenerEjemplares(isbn).filter(ejemplar=> !ejemplar.prestado).length
    }

    prestados(isbn){
        return this.obtenerEjemplares(isbn).filter(ejemplar=>ejemplar.prestado).length
    }

    totalEjemplares(){
        return this.ejemplares.length
    }

    totalPrestados(){
        return this.ejemplares.filter(ejemplar=>ejemplar.prestado).length
    }
}

class UI{
    constructor(biblioteca, libros){
        this.biblioteca = biblioteca
        this.libros = libros

        this.listaLibros = document.querySelector("#lista-libros")
        this.tablaLibros = document.querySelector("#tabla-libros")
        this.resumen = document.querySelector("#resumen")

        this.mostrarLibros()
        // this.showLista()
        // this.showTabla()
        // this.showResumen()
        // this.addEvents()
    }

    mostrarLibros(){
        
    }

    showLista(){
        this.listaLibros.innerHTML=biblioteca.ejemplares.reduce((anterior,actual)=>anterior+`
        <div>
            <p>
                <strong>${actual.libro.titulo}</strong> - ${actual.libro.autor}  <button data-id="${actual.libro.isbn}">Prestar</button>
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



const libros = [
    new Libro("978-84-376-0494-7","Don Quijote de la Mancha","Miguel de Cervantes"),
    new Libro("978-84-204-8270-5","Cien años de soledad","Gabriel García Márquez"),
    new Libro("978-84-670-5205-2","La sombra del viento","Carlos Ruiz Zafón")
]


const biblioteca = new Biblioteca()

biblioteca.agregarEjemplares(libros[0],3)


const Interfaz= new UI(libros,ejemplares)