const result = document.getElementById("result");
const add = document.getElementById("add");

function addList() {
  if (add.value != "") {
    //Cria lista
    let list = document.createElement("LI");
    list.innerHTML += add.value;

    //Cria os botões
    let btn = document.createElement("BUTTON");
    const lbl = document.createTextNode("X");

    let btn_done = document.createElement("button");
    const lbl_done = document.createTextNode("Done");

    btn_done.appendChild(lbl_done);
    btn.appendChild(lbl);
    btn.type = "button";

    //Cria função que remove item da lista
    btn.onclick = function () {
      let listItem = this.parentNode;
      let ul = listItem.parentNode;
      ul.removeChild(listItem);
    };

    list.appendChild(btn);
    list.appendChild(btn_done);
    result.appendChild(list);
    
    //botão para confirmar item na lista
    btn_done.onclick = function () {
      btn.remove();
      btn_done.remove();
    };

    add.value = "";
  } else {
    alert("Do not leave any blank fields!");
  }
}

function removeAll() {
  result.innerHTML = "";
}
