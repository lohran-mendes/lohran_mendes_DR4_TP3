// Exercício 13 Grupo - Fatorial

// No arquivo script.js, siga as etapas abaixo:

// Solicite um número ao usuário.
// Crie uma função para calcular o fatorial de um número, sendo este número informado pelo usuário através do prompt.
// Chame esta função passando o número informado pelo usuário.
import { convertToNumber } from "./lib/utils.js";

function fatorial() {
  let numero = convertToNumber(
    prompt("Qual o número que você deseja saber o fatorial?"),
    "alert"
  );
  let resultado = 1;
  if (!isNaN(numero)) {
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
    alert(`O fatorial de ${numero} é igual a: ${resultado}`);
  }
}
fatorial();
