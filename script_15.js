// Exercício 15 Grupo - Fatorial simples

// No arquivo script.js, siga as etapas abaixo:

// Crie uma função para calcular o fatorial de um número.
// Este número será informado pelo usuário através do prompt.
// Chame a função criada passando o número digitado pelo usuário.
// O resultado deve ser exibido em uma tag <p> criado no seu HTML.
// Observação: Utilize recursão.
import { convertToNumber } from "./lib/utils.js";

let numero = convertToNumber(
  prompt("Qual o número que você deseja saber o fatorial?"),
  "alert"
);

function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

if (!isNaN(numero) && numero >= 0) {
  let resultado = fatorial(numero);
  const resposta = document.createElement("p");
  resposta.innerText = `O fatorial de ${numero} é igual a: ${resultado}`;
  document.body.appendChild(resposta);
}
