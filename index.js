function adicionarTarefa() {
    const res = document.getElementById('res')
    const valorInput = document.getElementById('lista').value 
    

    if (valorInput.trim() == '') {
        alert('Digite alguma Tarefa antes de adiconar!!') 
        
    } else {

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        const button = document.createElement('input')
        button.type = 'button'
        button.value = 'delete' 
       

        const novoItem = document.createElement('li')
        novoItem.innerHTML = `${valorInput}`

        res.appendChild(checkbox)      
        res.appendChild(novoItem)
        res.appendChild(button) 
       



        button.addEventListener('click', () => {
            const res = document.getElementById('res')
            const itens = document.getElementsByTagName('li')
            const nums = itens.length
            
            for(const i = 0; i < nums; i++) {
                res.removeChild(itens[0])
                res.removeChild(checkbox)
                res.removeChild(button)
               
            }

        })     
    }

}