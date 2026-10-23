
const items = [
  {
    id: 1,
    name: "buttermilk pancakes",
    category: "desayuno",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    name: "diner double",
    category: "almuerzo",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    name: "godzilla milkshake",
    category: "batidos",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art item-img booth before they sold out organic viral.`,
  },
  {
    id: 4,
    name: "country delight",
    category: "desayuno",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    name: "egg attack",
    category: "almuerzo",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    name: "oreo dream",
    category: "batidos",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    name: "bacon overflow",
    category: "desayuno",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    name: "american classic",
    category: "almuerzo",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    name: "quarantine buddy",
    category: "batidos",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const $d = document,
$items = $d.querySelector(".item-list"),
$categorias = $d.querySelector(".btn-categorias")
  

$categorias.addEventListener("click",ev=>{
  let id = ev.target.dataset.id

  if (id){
    let filteredItems = [...items]
    // console.log(id)
    if(id != "todos"){
      filteredItems = items.filter(el => el.category == id)
    }
  renderItemsReduce(filteredItems)
  $categorias.querySelectorAll("button").forEach(el=>el.classList.remove("selected"))
  ev.target.classList.add("selected")
  }
})

function renderCategorias(categorias){
  const $tCategoria = $d.querySelector("#tbtn-categoria").content
  
  categorias.forEach(categoria => {
    const $clon = $tCategoria.cloneNode(true)
    const $button = $clon.querySelector("button")
    $button.textContent = categoria
    // $button.setAttribute("data-id",categoria)
    $button.dataset.id = categoria.toLowerCase()
    $categorias.appendChild($clon)
  })
}

function getCategorias1(items){
  const categorias = Array.from(new Set(items.map(item => item.category)))
  categorias.unshift("todos")
  return categorias.map(el => el[0].toUpperCase() + el.slice(1))
}

function getCategorias2(items){
  return items.reduce((anterior, actual) =>{
    let item = actual.category[0].toUpperCase() + actual.category.slice(1)
    if(!anterior.includes(item)){
      anterior.push(item)
    } 
    return anterior
  },["Todos"])
}

function renderItemsMap(items){
  $items.innerHTML = items.map(item =>`
          <article class = "item">
        <img src = "${item.img}" alt = "${item.name}" class = "item-img" />
        <div class = "item-info">
          <header>
            <h4>${item.name}</h4>
            <h4 class = "item-precio">${item.price}</h4>
          </header>
          <p class = "item-descripcion">${item.desc}</p>
        </div>
      </article>`).join('')
}

function renderItemsReduce(items){
  $items.innerHTML = items.reduce((anterior,actual) => anterior+`
  <article class="item">
        <img src="${actual.img}" alt="${actual.name}" class="item-img" />
        <div class="item-info">
          <header>
            <h4>${actual.name}</h4>
            <h4 class="item-precio">${actual.price}</h4>
          </header>
          <p class="item-descripcion">${actual.desc}</p>
        </div>
      </article>
  `,'')
}

function renderItemsTemplate(items){
  const $tItem=$d.querySelector("#titem").content,
  $fragmento =$d.createDocumentFragment()

  items.forEach(item => {
    const $clon=$tItem.cloneNode(true)
    const $img = $clon.querySelector("img")
    $img.src=item.img
    $img.alt=item.name
    const $h41=$clon.querySelector("h4")
    $h41.textContent=item.name
    const $h42=$clon.querySelector(".item-precio")
    $h42.textContent=item.price
    const $descripcion = $clon.querySelector(".item-descripcion")
    $descripcion.textContent=item.desc
    $fragmento.appendChild($clon)
  });

  $items.appendChild($fragmento)
}

$d.addEventListener("DOMContentLoaded",ev=>{
  renderItemsTemplate(items)

  
  // const categorias=Array.from(new Set(items.map(item=>item.category)))
  renderCategorias(getCategorias2(items))
})


