function addRow(){
    const nome = document.getElementById('nome')
    const data = document.getElementById('data')
    const qnt = document.getElementById('qnt')
    const footer = document.getElementById('footer')
    const tabela = document.getElementById('tabela')
    const tbody = document.getElementById('tbody')

    if(nome.value && data.value && qnt.value != ""){
        
            footer.innerHTML = ''

             //Cria uma linha
             let novaLinha = tabela.insertRow(tbody)
             tbody.appendChild(novaLinha)

            //Cria as colunas da tabela
            let celula = novaLinha.insertCell(0)            
            let celula2 = novaLinha.insertCell(0)            
            let celula3= novaLinha.insertCell(0)
            let celula4 = novaLinha.insertCell(0)

            //Anexa as celulas na nova linha
            novaLinha.appendChild(celula, celula2, celula3)

            //Pega os textos dos campos
            let td = document.createTextNode(nome.value)
            let td2 = document.createTextNode(data.value)
            let td3 = document.createTextNode(qnt.value)
            
            //Anexa os textos das células
            
            celula4.appendChild(td)            
            celula3.appendChild(td2)
            celula2.appendChild(td3)            

            //Cria botao para eliminar linha
            const botao = document.createElement('button')
            const txt = document.createTextNode('X')
            botao.appendChild(txt)
            celula.appendChild(botao)

            //Função para excluir linha
            botao.onclick = function () {
                this.parentNode.parentNode.remove()
                
                //Devolve a mensagem de sem itens se campo estiver vazio
                let numRows = document.querySelectorAll('tr')
                if(numRows.length <2){
                    footer.innerHTML = 'No expenses added yet!'
                }
            }           

            nome.value=''
            data.value=''
            qnt.value=''
        
    } else{
    alert('Fill all the fields.')
    }
}