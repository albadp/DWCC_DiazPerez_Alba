const productos=[
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]

const $d=document,
    $productos=$d.querySelector("#lista-productos"),
    $carritoBody=$d.querySelector("#body-carrito"),
    $carritoFooter=$d.querySelector("#footer-carrito")

const carrito=[]
// {
//     id:,
//     productoId:,
//     cantidad:
// }

$carritoBody.addEventListener("click",ev=>{
    ev.preventDefault()
    let id=ev.target.dataset.productoCarritoId
    if(id){
        let productoCarrito= carrito.find(el=>el.id==id)
        // console.log(ev.target.textContent)
        // console.log(ev.target.classList.contains("btn-info"))
        if(ev.target.classList.contains("btn-info")){
            productoCarrito.cantidad++
        } else{
            productoCarrito.cantidad--
            if(!productoCarrito.cantidad){
                let index=carrito.findIndex(el=>el.id==id)
                carrito.splice(index,1)
            }
        }
        renderCarrito(carrito)
    }
})

function renderFooter(lleno,cantidad,precio){
    if(lleno){
        $carritoFooter.innerHTML=`
        <th scope="row" colspan="2">Total productos</th>
            <td>${cantidad}</td>
            <td>
                <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                    Vaciar Carrito
                </button>
            </td>
            <td class="font-weight-bold"><span>${precio}</span>&euro;</td>`
            $carritoFooter.querySelector("button").addEventListener("click",ev=>{
                ev.preventDefault()
                carrito.splice(0,carrito.length)
                renderCarrito(carrito)
            })
    } else {
        $carritoFooter.innerHTML=`
                    <tr id="footer-carrito">
                        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                    </tr>`
    }
}

function renderCarrito(carrito){
    // console.log(carrito)
    let totalProductos=0
    let totalPrecio=0
    $carritoBody.innerHTML=carrito.reduce((anterior,actual,i)=>{
        const producto = productos.find(el=>el.id==actual.productoId)
        totalProductos+=actual.cantidad
        totalPrecio+= producto.precio*actual.cantidad
        return anterior+`
        <tr>
                <td>${i+1}</td>
                <td>${producto.title}</td>
                <td>${actual.cantidad}</td>
                <td>
                    <button class="btn btn-info btn-sm" data-producto-carrito-id="${actual.id}"> + </button>
                    <button class="btn btn-danger btn-sm"data-producto-carrito-id="${actual.id}"> - </button>
                </td>
                <td>${producto.precio*actual.cantidad}</td>
            </tr>
            `},"")

    renderFooter(carrito.length,totalProductos,totalPrecio)
}

$productos.addEventListener("click",ev=>{
    ev.preventDefault()
    //let id = ev.target.getAttribute("data-producto-id")
    let id=ev.target.dataset.productoId
    if(id){
        //console.log(`${id}`)
        let productoCarrito = carrito.find(el=>el.productoId==id)
        if(productoCarrito){
            productoCarrito.cantidad++
        } else{
            let productoCarritoId=carrito.length ? Math.max(...carrito.map(el=>el.id))+1 : 1
            productoCarrito={
                id:productoCarritoId,
                productoId:id,
                cantidad:1
            }
        carrito.push(productoCarrito)
        }
        // console.log(carrito)
        renderCarrito(carrito)
    }
})

function renderProductos1(productos){
    $productos.innerHTML=productos.map(producto=>{
        return `
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
            <div class="card">
                <img src="${producto.thumbnailUrl}" class="card-img-top" alt="item-producto">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.precio}</p>
                    <a href="#" class="btn btn-dark" data-producto-id="${producto.id}">Comprar</a>
                </div>
            </div>
        </div>`}).join("")
}

function renderProductos2(productos){
    const $tProducto=$d.querySelector("#template-producto").content

    productos.forEach(producto=>{
        const $clon=$tProducto.cloneNode(true)
        const $img=$clon.querySelector("img")
        $img.src=producto.thumbnailUrl
        const $h5=$clon.querySelector("h5")
        $h5.textContent=producto.title
        const $a=$clon.querySelector("a")
        $a.dataset.productoId=producto.id
        // $a.setAttribute("data-producto-id",producto.id)
        $productos.appendChild($clon)
    })
}

$d.addEventListener("DOMContentLoaded",ev=>{
    renderProductos2(productos)
})