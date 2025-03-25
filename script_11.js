// Exercício 11 Jogo de Palavras - Versão 2

// Crie uma nova aplicação aproveitando o que fez na questão anterior, mas que agora carregue o array de palavras com os municípios de uma UF da sua escolha.

// Observações:

// Utilize a API do IBGE para acessar os municípios. Por exemplo, esta é a URL da UF Rio de Janeiro: https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios

import { validateString } from "./lib/utils.js";

const array = [];
await fetch(
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios"
)
  .then((res) => res.json())
  .then((res) => {
    res.forEach((municipio) => array.push(municipio.nome));
  })
  .catch((error) => console.error(error));

let nomeAtual;

function criaLayout() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = "Jogo de Palavras";
  const p = document.createElement("p");
  p.innerText =
    "Neste jogo você terá que adivinhar qual é o municipio do estado de São Paulo que está sendo apresentado com as letras embaralhadas.";
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
