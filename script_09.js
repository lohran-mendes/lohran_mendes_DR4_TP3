// Exercício 9 Bolão da Megasena

// Construir uma aplicação que gere os números da Megasena para um “bolão” de amigos. Assegure que não vão ser gerados números repetidos. Mostre os números em ordem ascendente.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

import { sortNumberAsc, convertToNumber } from "./lib/utils.js";

function bolao() {
  const arrayBolao = [];
  const qtdNumeros = convertToNumber(
    prompt("Insira aqui a quantidade de números a ser sorteados"),
    "alert"
  );
  if (!isNaN(qtdNumeros)) {
    const qtdNumerosMaximos = convertToNumber(
      prompt("Insira aqui a quantidade de números totais possíveis"),
      "alert"
    );
    if (!isNaN(qtdNumerosMaximos)) {
      if (qtdNumeros > qtdNumerosMaximos)
        return alert(
          "A quantidade de numeros a ser sorteados tem que ser menor que a quantidade de números totais possíveis!"
        );
      for (let i = 0; i < qtdNumeros; i++) {
        const numero = Math.floor(Math.random() * qtdNumerosMaximos + 1);
        if (arrayBolao.indexOf(numero) === -1) {
          arrayBolao.push(numero);
        } else {
          i--;
        }
      }
      sortNumberAsc(arrayBolao, "alert", "alert");
    }
  }
}
bolao();
