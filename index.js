function adicionarTarefa() {
    const res = document.getElementById('res')
    const valorInput = document.getElementById('lista').value 

    if (valorInput.trim() == '') {
        alert("Digite alguma Tarefa antes de adiconar!!") 
        checkbox.appendChild('')  
    } 

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const icon = document.createElement('span')
    icon.className = "material-symbols-outlined"

    res.appendChild(checkbox)
    res.innerHTML += `${valorInput}<br>`
    res.appendChild(icon)
}