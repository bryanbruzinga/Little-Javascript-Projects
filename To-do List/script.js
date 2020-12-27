const centralize = document.querySelector('.centralize')
const submit = document.querySelector('button')
const input = document.querySelector('input')
const clear = document.querySelector('.clear')

function criarLista() {
    const p = document.createElement('p')
    const text = document.createTextNode(input.value)
    p.appendChild(text)

    const divLista = document.createElement('div')
    divLista.classList.add('lista')

    const div = document.createElement('div')
    div.classList.add('btn-lista')
    
    const btnX = document.createElement("BUTTON");
    const lbl = document.createTextNode("X");

     //Cria função que remove item da lista
     btnX.onclick = function () {
        const listItem = this.parentNode.parentNode
        console.log(listItem)
        listItem.remove();
      }

    const btn_done = document.createElement("button");
    const lbl_done = document.createTextNode("Done");

    btn_done.appendChild(lbl_done);
    btnX.appendChild(lbl);
    
    div.appendChild(btnX);
    div.appendChild(btn_done);

    divLista.appendChild(p)
    divLista.appendChild(div)    

    centralize.appendChild(divLista)

    //botão para confirmar item na lista
    btn_done.onclick = function () {
        btnX.remove();
        btn_done.remove();
      };

    input.value = ''
}

function limparLista() {
    centralize.innerHTML = ''
}

submit.addEventListener('click', () =>{
    if(input.value === '') {
        alert("Don't leave any blank fields")
    } else criarLista()
})
clear.addEventListener('click', limparLista)