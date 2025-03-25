// Exercício 10 Jogo de Palavras - Versão 1

// Construir uma aplicação web com o layout definido abaixo. Defina um array com 10 nomes de escritores para escolher um escritor aleatório, exibindo seu nome com as letras embaralhadas para o usuário tentar adivinhar.

import { validateString } from "./lib/utils.js";

const array = [
  "Machado de Assis",
  "Carlos Drummond",
  "Clarice Lispector",
  "Monteiro Lobato",
  "Jorge Amado",
  "Cecília Meireles",
  "Graciliano Ramos",
  "Manuel Bandeira",
  "João Cabral",
  "Rubem Braga",
];
let nomeAtual;

function criaLayout() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = "Jogo de Palavras";
  const p = document.createElement("p");
  p.innerText =
    "Neste jogo você terá que adivinhar qual é a palavra  que está sendo apresentada com as letras embaralhadas.";
  const buttonJogar = document.createElement("button");
  buttonJogar.innerText = "Jogar";
  buttonJogar.addEventListener("click", iniciarGame);
  div.append(h2, p, buttonJogar);
  document.querySelector("h1").insertAdjacentElement("afterend", div);
}

function iniciarGame() {
  const formAtual = document.querySelector("form");
  if (formAtual) formAtual.remove();
  nomeAtual = array[Math.floor(Math.random() * array.length)].toLowerCase();
  const h2 = document.createElement("h2");
  h2.innerText = embaralhaNome(nomeAtual);
  const form = document.createElement("form");
  const div = document.createElement("div");
  const input = document.createElement("input");
  const buttonValidar = document.createElement("button");
  buttonValidar.innerText = "Validar";
  buttonValidar.type = "submit";
  form.addEventListener("submit", (event) => validaResposta(event));
  div.append(input, buttonValidar);
  form.append(h2, div);
  document.body.appendChild(form);
}

function embaralhaNome(string) {
  if (validateString(string, "alert")) {
    const partesDoNome = string.split(" ");
    const nomeEmbaralhado = partesDoNome.map((name) =>
      name
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
    );
    return nomeEmbaralhado.join(" ").toLowerCase();
  }
}

function validaResposta(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  if (validateString(input.value, "alert")) {
    if (input.value.toLowerCase().trim() === nomeAtual) {
      alert("Parabéns, você acertou o nome!");
      document.querySelector("form").remove();
    } else alert(`Errou o nome, tente novamente!`);
  }
}

criaLayout();
