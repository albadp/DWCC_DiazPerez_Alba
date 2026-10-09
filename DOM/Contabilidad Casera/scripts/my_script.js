const $d = document,
    $tableBody = $d.querySelector('#expenseTable'),
    $tableFoot = $d.querySelector("tfoot"),
    $form = $d.querySelector("form")
    
    

const contabilidad = [
    {
        id:1,
        tipo: "Ingreso",
        concepto: "Nomina",
        cantidad: 1200,
        estado: true
    },
    {
        id:2,
        tipo: "Egreso",
        concepto: "Luz",
        cantidad: 40,
        estado: false
    }
]

function deleteMov(id){
    // console.log(`borramos ${id}`)
    let index = contabilidad.findIndex(el => el.id == id)
    contabilidad.splice(index, 1)
}

function editMov(id){
    // console.log(`desactivamos ${id}`)
    let mov = contabilidad.find(el => el.id == id)
    mov.estado = !mov.estado
}

$tableBody.addEventListener("click",ev=>{
    let id = ev.target.dataset.id

    if(id) {
        (ev.target.classList.contains("fa-trash"))
            ? deleteMov(id)
            : editMov(id)

        renderContabilidad(contabilidad)
    }
})

function renderFooter(contabilidad) {
    if (contabilidad.length) {
        let saldo = contabilidad.reduce((anterior, actual) => {
            if (actual.estado) {
                return actual.tipo == "Ingreso" ? anterior + actual.cantidad : anterior - actual.cantidad
            } else {
                return anterior
            }
            // return anterior+cantidad
        }, 0)

        let clase = saldo >= 0 ? "ingreso" : "egreso"

        $tableFoot.innerHTML =`
            <tr>
                <th colspan = "4"> Saldo Total: <span id = "saldoTotal" class= "${clase}" > ${saldo} </span></th>
            </tr>
        `
    } else {
        $tableFoot.innerHTML =`
            <tr>
                <td colspan = "4"> Aún no hay ingresos ni gastos! </td>
            </tr>
        `
    }
}

function renderContabilidad(contabilidad) {
    // console.log(`se muestra contabilidad`)
    $tableBody.innerHTML = ""
    const $tTableRow = $d.querySelector("#template-fila").content

    contabilidad.forEach(element => {
        const $clon = $tTableRow.cloneNode(true)
        const $tds = $clon.querySelectorAll("td")
        $tds[0].textContent = element.tipo
        $tds[1].textContent = element.concepto
        $tds[2].textContent = element.cantidad
        $tds[3].querySelectorAll("i").forEach(i=>i.setAttribute("data-id",element.id))

        element.estado
            ? $clon.querySelector("tr").classList.add(element.tipo.toLowerCase())
            : $clon.querySelector("tr").classList.add("revertir")
        
        $tableBody.appendChild($clon)
    });

    renderFooter(contabilidad)
}


$d.addEventListener("DOMContentLoaded", ev => {
    renderContabilidad(contabilidad)
})