const libros=[
    {
        ISBN:"978-84-376-0494-7",
        titulo:"Don Quijote de la Mancha",
        autor:"Miguel de Cervantes",
        ejemplares:3,
        prestados:0
    },
    {
        ISBN:"978-84-204-8270-5",
        titulo:"Cien años de soledad",
        autor:"Gabriel García Márquez",
        ejemplares:2,
        prestados:0
    },
    {
        ISBN:"978-84-670-5205-2",
        titulo:"La sombra del viento",
        autor:"Carlos Ruiz Zafón",
        ejemplares:4,
        prestados:0
    }
]

const $d=document,
    $listaLibros = $d.querySelector("#lista-libros"),
    $tablaLibros = $d.querySelector("#tabla-libros"),
    // $listaLiros=$d.getElementById("lista-libros")
    $resumen = $d.querySelector("#resumen")
    

$tablaLibros.addEventListener("click",ev=>{
    ev.preventDefault()

    let id=ev.target.dataset.libro
    if(id){
        // console.log(id)
        const libro = libros.find(libro=>libro.ISBN==id)
        if(libro.prestados>0){
            libro.prestados--
            renderBiblioteca(libros)
        }else{
            alert("No se puede devolver un libro no prestado")
        }
    }
})

$listaLibros.addEventListener("click",ev=>{
    ev.preventDefault()

    let id=ev.target.dataset.libro
    if(id){
        const libro = libros.find(libro=>libro.ISBN==id)
        let disponibles=libro.ejemplares-libro.prestados
        if(disponibles>0){
            libro.prestados++
            renderBiblioteca(libros)
        }else{
            alert("No hay libros disonibles para prestar")
        }
    }
})

function renderLibros(libros){
    $listaLibros.innerHTML = libros.reduce((anterior,actual)=>{return anterior+`
        <div>
            <p>
                <strong>${actual.titulo}</strong> - ${actual.autor}  
                <button data-libro="${actual.ISBN}">Prestar</button>
            </p>
        </div>`
    },'')
}

function renderBiblioteca(libros){
    const $tTableRow = $d.querySelector("#tTable-row").content,
        $fragmento=$d.createDocumentFragment()

    $tablaLibros.innerHTML=""
    libros.forEach(libro => {
        const $clon=$tTableRow.cloneNode(true)
        // $tds=$clon.querySelectorAll("td")
        // $tds[0].innerHTML=libro.titulo
        const [$titulo, $autor,$ejemplares, $disponibles,$prestados,$accion] = $clon.querySelectorAll("td")
        $titulo.innerHTML=libro.titulo
        $autor.innerHTML=libro.autor
        $ejemplares.innerHTML=libro.ejemplares
        $disponibles.innerHTML=libro.ejemplares-libro.prestados
        $prestados.innerHTML=libro.prestados
        $accion.querySelector("button").dataset.libro=libro.ISBN
        // $accion.querySelector("button").setAttribute("data-libro",libro.ISBN)
        $fragmento.appendChild($clon)
    });
    $tablaLibros.appendChild($fragmento)
    renderResumen(libros)
}

function renderResumen(libros){
    const totalEjemplares=libros.reduce((anterior,actual)=>anterior+actual.ejemplares,0)
    const totalPrestados=libros.reduce((anterior,actual)=>anterior+actual.prestados,0)
    const total=libros.reduce((anterior,actual)=>{
        anterior.ejemplares+=actual.ejemplares
        anterior.prestados+=actual.prestados
        return anterior
    },{ejemplares:0,prestados:0})

    $resumen.innerHTML=`Total ejemplares: ${total.ejemplares} | Total prestados: ${total.prestados}`
}

$d.addEventListener("DOMContentLoaded",ev=>{
    renderLibros(libros)
    renderBiblioteca(libros)
})