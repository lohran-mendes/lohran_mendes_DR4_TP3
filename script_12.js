// Exercício 12 Grupo - 20º número de Fibonacci

// No arquivo script.js, crie um programa que calcule o 20º número da sequência de Fibonacci.

// Observações:

// Utilize uma estrutura de repetição (while ou for).
// O programa deve exibir o número através de um “console.log”.
import { convertToNumber } from "./lib/utils.js";

function fibonacci(numeroEsperadoDaSequencia) {
  if (convertToNumber(numeroEsperadoDaSequencia, "log")) {
    let valorInicial = 0;
    let valorAtual = 1;
    let resultado;
    let sequencia = 1;
    while (sequencia < numeroEsperadoDaSequencia - 1) {
      resultado = valorInicial + valorAtual;
      valorInicial = valorAtual;
      valorAtual = resultado;
      sequencia++;
    }
    console.log(
      `O ${numeroEsperadoDaSequencia}º número da sequência de Fibonacci é igual a: ${valorAtual}`
    );
  }
}
fibonacci(20);
