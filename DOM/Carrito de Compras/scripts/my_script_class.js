class Producto{
    constructor(id,nombre,precio,imagen){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}

class UI{
    constructor(productos, cesta){
        this.productos = productos
        this.cesta = cesta
        
        this.listaProductos = document.querySelector("#lista-productos")
        this.bodyCarrito = document.querySelector("#body-carrito")
        this.footerCarrito = document.querySelector("#footer-carrito")

        this.showProducts()
        //this.showCart()
        //this.addEvents()
    }

    showProducts(){
        this.listaProductos.innerHTML=this.productos.reduce((anterior,actual)=>anterior+`
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                <div class="card">
                    <img src="${actual.imagen}" class="card-img-top" alt="item-producto">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-dark">Comprar</a>
                    </div>
                </div>
            </div>
        `,'')
    }

}

class Carrito{
    constructor(id, productoId, cantidad){
        this.id = id
        this.productoId = productoId
        this.cantidad = cantidad
    }
}

const productos=[
    new Producto(1, "Café", 500, "https://picsum.photos/id/0/600"),
    new Producto(2, "Pizza", 300, "https://picsum.photos/id/10/600"),
    new Producto(3, "Agua", 100, "https://picsum.photos/id/20/600"),
    new Producto(4, "Sandía", 50, "https://picsum.photos/id/30/600"),
    new Producto(5, "Mango", 10, "https://picsum.photos/id/40/600"),
    new Producto(6, "Chela", 150, "https://picsum.photos/id/50/600")
]

