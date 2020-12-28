let i = 0;

function addNote() {
  
  const textArea = document.getElementById("note");
  const saida = document.getElementById("saida");

  if(saida.innerHTML == "No notes added yet!" &&textArea.value !=''){
    saida.innerHTML = ''
  }

  if (textArea.value != "") {
    //Cria os elementos de resposta
    i++;
    const div = document.createElement("div");
    div.classList.add('noteList')
    
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    //Cria as informações dos campos
    const h3Text = document.createTextNode("Note " + i);
    const pText = document.createTextNode(textArea.value);
    const buttonText = document.createTextNode("View Details");

    //Botão para remover item da lista
    const btnX = document.createElement("button")
    const btnX_lbl = document.createTextNode('X')
    btnX.appendChild(btnX_lbl)
    btnX.classList.add('removeItem')
    div.appendChild(btnX)

    btnX.addEventListener('click', () => {
      i--
      btnX.parentNode.remove()
    })

    //Função modal do botão
    button.onclick = function () {
      const modal = document.getElementById("modal");
      const close = document.getElementById("close");
      modal.classList.add("ativo");

      const modalContainer = document.getElementById("modal-container");
      const cloneText = pText.cloneNode(true);
      modalContainer.appendChild(cloneText);
      
      //Função para fechar modal
      close.onclick = function () {
        modal.classList.remove('ativo');
        cloneText.remove();
      };
    };
    //Anexa tudo
    button.appendChild(buttonText);
    p.appendChild(pText);
    h3.appendChild(h3Text);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);

    //Cria tudo no HTML
    saida.appendChild(div);
    textArea.value = "";
  } else {
    alert("Don't leave any empty fields!");
  }
}
