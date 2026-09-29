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
    $productos=$d.querySelector("#lista-productos")

const carrito=[]
// {
//     id:,
//     productoId:,
//     cantidad:
// }

$productos.addEventListener("click",ev=>{
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
        console.log(carrito)
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

$d.addEventListener("DOMContentLoaded",ev=>{
    renderProductos1(productos)
})