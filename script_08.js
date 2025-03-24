import { validateString } from "./lib/utils.js";

// Exercício 8 Lista de Compras - Parte 2

// Crie uma nova aplicação copiando os códigos da questão anterior e inclua um botão em cada item para excluí-lo.

// Observações:

// Crie a função excluir.
// Utilize splice para excluir o item da lista.
// Utilize template de string para facilitar a criação da linha com o item no HTML.

const itensLista = [];
const form = document.createElement("form");
const h2 = document.createElement("h2");
const input = document.createElement("input");
const button = document.createElement("button");

h2.innerText = "Lista de Compras";
h2.style.textDecorationLine = "underline";
button.innerText = "Incluir";
button.type = "submit";

document.body.querySelector("h1").insertAdjacentElement("afterend", form);
form.appendChild(h2);
form.appendChild(input);
form.appendChild(button);

function incluir(event) {
  event.preventDefault();
  const itemNovo = input.value;
  if (validateString(itemNovo, "alert")) {
    itensLista.push(itemNovo);
  }
  input.value = "";
  mostrarLista();
}

function mostrarLista() {
  const ul = document.createElement("ul");
  ul.style.padding = "0px";
  itensLista.forEach((item) => {
    const li = document.createElement("li");
    li.style.marginBottom = "5px";
    li.style.listStyle = "none";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Excluir";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => excluir(item));
    li.innerText = item;
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
  document.querySelector("ul")?.remove();
  form.appendChild(ul);
}

function excluir(itemName) {
  const indexItem = itensLista.findIndex((item) => item === itemName);
  itensLista.splice(indexItem, 1);
  mostrarLista();
}

form.addEventListener("submit", (event) => incluir(event));
