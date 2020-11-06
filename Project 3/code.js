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
    let div = document.createElement("div");
    div.className = 'noteList'
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let button = document.createElement("button");

    //Cria as informações dos campos
    let h3Text = document.createTextNode("Note " + i);
    let pText = document.createTextNode(textArea.value);
    let buttonText = document.createTextNode("View Details");

    //Função modal do botão
    button.onclick = function () {
      let modal = document.getElementById("modal");
      let close = document.getElementById("close");
      modal.style.display = "block";

      let modalContainer = document.getElementById("modal-container");
      let cloneText = pText.cloneNode(true);
      modalContainer.appendChild(cloneText);
      
      //Função para fechar modal
      close.onclick = function () {
        modal.style.display = "none";
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
