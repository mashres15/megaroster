const form = document.querySelector('form#rosterForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    name = f.name.value
    addStudent(name)
}

function addStudent(name){
    const table = document.getElementById("table")
    const row = table.insertRow(1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    cell1.innerHTML = name
    cell2.innerHTML= '<div class="btn btn-warning" onclick="deleteRow(this)">Delete</div> <div class="btn btn-warning" onclick="promote(this)">Promote</div>'
}


function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function promote(btn){
    const row = btn.parentNode.parentNode;
    if(row.classList.contains('promote')){
        row.classList.remove('promote')
    }
    else{
        row.classList.add('promote') 
    }
}
form.addEventListener('submit', handleSubmit)