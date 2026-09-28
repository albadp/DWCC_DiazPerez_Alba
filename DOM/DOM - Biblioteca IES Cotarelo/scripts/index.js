const books=[
    {
        id:0,
        title: "Eloquent JavaScript"
    },
    {
        id: 1,
        title: "Scope & Closures"
    },
    {
        id: 2,
        title: "Understanding ECMAScript 6"
    },
    {
        id: 3, 
        title: "Beginning Node.js"
    },
    {
        id: 4,
        title: "Web development with Node & Express"
    }
]

const $d=document,
    $ul=$d.querySelector("ul"),
    $hide = $d.querySelector("#ocultar"),
    $search=$d.querySelector("input"),
    $addInput=$d.querySelector("#libro-add>input"),
    $addBtn=$d.querySelector("#libro-add>button")

$ul.addEventListener("click",ev=>{
    let id=ev.target.dataset.id
    if(id){
        let index = books.findIndex(book=>book.id==id)
        books.splice(index,1)
        renderBooks1(books)
    }
})

$search.addEventListener("keyup",ev=>{
    //console.log(ev.target.value)
    let searchTerm=ev.target.value.toLowerCase()

    const filteredBooks = books.filter(book=>book.title.toLowerCase().includes(searchTerm))
    renderBooks3(filteredBooks)
})

$hide.addEventListener("click",ev=>{
    $ul.style.display=$ul.style.display=="block"?"none":"block"
})





function renderBooks1(books){
    //console.log(books)
    $ul.innerHTML=""
    books.forEach(book => {
        const $li = $d.createElement("li")
        // span1
        const $span1=$d.createElement("span")
        $span1.classList.add("titulo")
        const $texto1=$d.createTextNode(book.title)
        $span1.appendChild($texto1)
        //span2
        const $span2=$d.createElement("span")
        $span2.classList.add("borrar")
        const $texto2=$d.createTextNode("-")
        $span2.setAttribute("data-id",book.id)
        $span2.appendChild($texto2)

        $li.append($span1,$span2)
        $ul.appendChild($li)
    });
}

function renderBooks2(books){
    $ul.innerHTML=books.map(book=> `<li>
        <span class="titulo">${book.title}</span>
        <span class="borrar" data-id="${book.id}">-</span>
    </li>`).join("")
}

function renderBooks3(books){
    $ul.innerHTML=books.reduce((anterior,actual)=>{
        return anterior+`<li>
        <span class="titulo">${actual.title}</span>
        <span class="borrar" data-id="${actual.id}">-</span>
    </li>`
    },"")
}

$d.addEventListener("DOMContentLoaded",ev=>{
    $ul.style.display="block"
    renderBooks3(books)
})











// <li>
// <span class="titulo">Eloquent JavaScript</span>
// <span class="borrar">-</span>
// </li>
// <li>
// <span class="titulo">Scope & Closures</span>
// <span class="borrar">-</span>
// </li>
// <li>
// <span class="titulo">Understanding ECMAScript 6</span>
// <span class="borrar">-</span>
// </li>
// <li>
// <span class="titulo">Beginning Node.js</span>
// <span class="borrar">-</span>
// </li>
// <li>
// <span class="titulo">Web development with Node & Express</span>
// <span class="borrar">-</span>
// </li>