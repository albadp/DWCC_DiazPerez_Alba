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
        this.showCesta()
        this.addEvents()
    }

    showProducts(){
        this.listaProductos.innerHTML=this.productos.reduce((anterior,actual)=>anterior+`
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                <div class="card">
                    <img src="${actual.imagen}" class="card-img-top" alt="item-producto">
                    <div class="card-body">
                        <h5 class="card-title">${actual.nombre}</h5>
                        <p class="card-text">${actual.precio}</p>
                        <a href="#" class="btn btn-dark" data-id="${actual.id}">Comprar</a>
                    </div>
                </div>
            </div>
        `,'')
    }

    showCesta(){
        if(this.cesta.lineas.length==0){
            this.bodyCarrito.innerHTML=``
            this.footerCarrito.innerHTML=`<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        } else{
            this.bodyCarrito.innerHTML=this.cesta.lineas.reduce((anterior,linea,i)=>anterior+`
            <tr>
                <td>${i+1}</td>
                <td>${linea.producto.nombre}</td>
                <td>${linea.cantidad}</td>
                <td>
                    <button class="btn btn-info btn-sm" data-id="${linea.producto.id}" data-accion="inc">
                        +
                    </button>
                    <button class="btn btn-danger btn-sm" data-id="${linea.producto.id}" data-accion="dec">
                        -
                    </button>
                </td>
                <td>${linea.total()}</td>
            </tr>
            `,'')
        }
        this.showFooter()
    }

    showFooter(){
        if(this.cesta.totalCantidadProductos() == 0){
            this.footerCarrito.innerHTML=`<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        } else{
            this.footerCarrito.innerHTML=`
            <th scope="row" colspan="2">Total productos</th>
            <td>${this.cesta.totalCantidadProductos()}</td>
            <td>
                <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                    Vaciar Carrito
                </button>
            </td>
            <td class="font-weight-bold"><span>${this.cesta.totalPrecioProductos()}</span>&euro;</td>
            `
        }
    }

    addEvents(){

    this.listaProductos.addEventListener("click", ev=>{
        ev.preventDefault()
        // console.log(ev.target.dataset.id)
        let id=ev.target.dataset.id
        if(id){
            const producto=this.productos.find(p=>p.id==id)
            if(producto){
                this.cesta.addProducto(producto)
                this.showCesta()
            }
        }
    })

    this.bodyCarrito.addEventListener("click", ev=>{
        ev.preventDefault()
        // console.log(ev.target.dataset.id)
        let id=ev.target.dataset.id
        if(id){
            let accion = ev.target.dataset.accion
            if(accion=="dec"){
                this.cesta.dec(id)
            }else{
                this.cesta.inc(id)
            }
            this.showCesta()
        }
    })

    this.footerCarrito.addEventListener("click", ev=>{
        ev.preventDefault()
        if(ev.target.id=="vaciar-carrito"){
            this.cesta.vaciar()
            this.showCesta()
        }
    })
    }

}

class LineaProductos{
    constructor(producto,cantidad=1){
        this.producto=producto
        this.cantidad=cantidad
    }

    inc(){
        this.cantidad++
    }

    dec(){
        this.cantidad--
    }

    total(){
        return this.producto.precio*this.cantidad
    }
}

class Cesta{
    constructor(){
        this.lineas = []
    }

    addProducto(producto){
        let linea=this.lineas.find(l=>l.producto.id==producto.id)
        if(linea){
            linea.inc()
        } else{
            this.lineas.push(new LineaProductos(producto))
        }
    }


    delProducto(id){
        this.lineas=this.lineas.filter(l=>l.producto.id != id)
    }

    inc(id){
        let linea=this.lineas.find(l=>l.producto.id==id)
        if(linea){
            linea.inc()
        }
    }

    dec(id){
        let linea=this.lineas.find(l=>l.producto.id==id)
        if(linea){
            linea.dec()
        }
        if(linea.cantidad==0){
            let lineaIndex=this.lineas.findIndex(l=>l.producto.id==id)
            this.lineas.splice(lineaIndex,1)
        }
    }

    vaciar(){
        this.lineas=[]
    }

    totalPrecioProductos(){
        return this.lineas.reduce((anterior,linea)=>anterior+linea.total(),0)
    }

    totalCantidadProductos(){
        return this.lineas.reduce((anterior,linea)=>anterior+linea.cantidad,0)
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

const cesta = new Cesta()


const Interfaz = new UI(productos,cesta)



