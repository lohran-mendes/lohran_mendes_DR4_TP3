import { validateString } from "./lib/utils.js";
// Exercício 7 Lista de Compras - Parte 1

// Crie uma aplicação com o layout sugerido abaixo que permita ao usuário incluir itens em uma lista de compras.

// Observações:

// Crie funções incluir e mostrarLista.
// Utilize um array para guardar os itens da lista.

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
  itensLista.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
  document.querySelector("ul")?.remove();
  form.appendChild(ul);
}

form.addEventListener("submit", (event) => incluir(event));
