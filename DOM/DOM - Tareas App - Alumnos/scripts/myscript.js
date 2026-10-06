const $d = document,
$tareas = $d.querySelector("#tareas"),
$stTareas = $d.querySelector("#template-tarea"),
$tareaInput=$d.querySelector("#input"),
$form=$d.querySelector("form")

const tareas = [
    {
        id:1,
        text:"Mi primera tarea",
        status:true
    },
    {
        id:2,
        text:"Mi segunda tarea",
        status:true
    }
]

function deleteTarea(id){
    let index= tareas.findIndex(tarea=>tarea.id==id)
    tareas.splice(index,1)
    renderTareas1(tareas)
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
        tarea.id=$form.dataset.tareaId
        let index=tareas.findIndex(tarea=>tarea.id==tareaId)
        tareas.splice(index,1,tarea)
        $tareaInput.value=""
        $form.querySelector("button").textContent="Agregar"
        delete $form.dataset.tareaId
        // $tareas.addEventListener("click",handdleClickTareas)
    } else {
        // console.log("añadir tarea")
        
        tarea.id=tareas.length
            ?Math.max(...tareas.map(tarea=>tarea.id))+1
            :1
        tareas.push(tarea)
    }
    renderTareas1(tareas)
})

function updateTarea(id){
    // console.log(`actualizar tarea ${tareaId}`)
    const tarea=tareas.find(tarea=>tarea.id==tareaId)
    $tareaInput.value=tarea.text
    $form.dataset.tareaId=tarea.id
    $form.querySelector("button").textContent="Modificar"
    // $tareas.removeEventListener("click",handdleClickTareas)
}
function handdleClickTareas(ev){
    let formId=$form.dataset.tareaId
    if(!formId){
        let tareaId= ev.target.dataset.tareaId
        if (tareaId){
            ev.target.classList.contains("fa-minus-circle")
            ? deleteTarea(tareaId)
            :updateTarea(tareaId)
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
    renderTareas1(tareas)
})