const $d = document,
$tareas = $d.querySelector("#tareas"),
$stTareas = $d.querySelector("#template-tarea"),
$tareaInput=$d.querySelector("#input"),
$form=$d.querySelector("form")

const tareas = []

function deleteTarea(id){
    let index= tareas.findIndex(tarea=>tarea.id==id)
    tareas.splice(index,1)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    renderTareas1(tareas)
}

function addTarea(tarea){
    // console.log("añadir tarea")
    tarea.id=tareas.length
            ?Math.max(...tareas.map(tarea=>tarea.id))+1
            :1
        tareas.push(tarea)
        localStorage.setItem("tareas",JSON.stringify(tareas))
}

function updateTarea(id,tarea){
    // console.log(`modificar tarea ${id}`)
    tarea.id=$form.dataset.tareaId
    let index=tareas.findIndex(tarea=>tarea.id==id)
    tareas.splice(index,1,tarea)
    $form.querySelector("button").textContent="Agregar"
    delete $form.dataset.tareaId
    $tareas.querySelectorAll("i").forEach(el=>el.classList.remove("text-black-50"))
    localStorage.setItem("tareas",JSON.stringify(tareas))
}

function editTarea(id){
    // console.log(`actualizar tarea ${tareaId}`)
    const tarea=tareas.find(tarea=>tarea.id==id)
    $tareaInput.value=tarea.text
    $form.dataset.tareaId=tarea.id
    $form.querySelector("button").textContent="Modificar"
    // $tareas.removeEventListener("click",handdleClickTareas)
    $tareas.querySelectorAll("i").forEach(el=>el.classList.add("text-black-50"))
}

$form.addEventListener("submit",ev=>{
    ev.preventDefault()
    let tareaId = ev.target.dataset.tareaId
    const tarea={
                text:$tareaInput.value,
                status: true
    }

    if(tareaId){
        // console.log(`modificar tarea ${tareaId}`)
        updateTarea(tareaId,tarea)
        // $tareas.addEventListener("click",handdleClickTareas)
    } else {
        // console.log("añadir tarea")
        addTarea(tarea)
    }
    $tareaInput.value=""
    renderTareas1(tareas)
})


function handdleClickTareas(ev){
    let formId=$form.dataset.tareaId
    if(!formId){
        let tareaId= ev.target.dataset.tareaId
        if (tareaId){
            ev.target.classList.contains("fa-minus-circle")
            ? deleteTarea(tareaId)
            :editTarea(tareaId)
        }
    }

    
}

$tareas.addEventListener("click", handdleClickTareas) // no se ejecuta si le pones (), sólo nombre de la función

function renderTareas1 (tareas){
    if (tareas.length) {
        $tareas.innerHTML = tareas.reduce((anterior,actual)=>{
            return anterior +`
            <div class="alert alert-warning d-flex justify-content-between align-items-center">
                <p class="m-0"> ${actual.text} </p>
                <h3 class="m-0">
                    <i class="fas fa-check-circle text-success" role="button" data-tarea-id="${actual.id}"></i>
                    <i class="fas fa-minus-circle text-danger" role="button" data-tarea-id="${actual.id}"></i>
                </h3>
            </div>
            `
        }, "");
    } else {
        $tareas.innerHTML = `<p class="alert alert-dark text-center">Sin tareas pendientes &#10084;</p>`
    }
}


$d.addEventListener("DOMContentLoaded",ev =>{
    let tareasLocal=JSON.parse(localStorage.getItem("tareas"))
    if(tareasLocal){
        Object.assign(tareas,tareasLocal)
    }
    renderTareas1(tareas)
})