import * as Utils from "./lib/utils.js";

// Exercício 2 Funções de Ordenação - Parte 1

// Enunciado: Crie uma aplicação que implemente uma biblioteca com 2 funções: sortNumberAsc e sortNumberDesc, recebendo um array como parâmetro. Crie um array com 10 números e use esse array para testar as duas funções, exibindo o resultado em 2 alerts separados e sequenciais.

// Observações:

// Utilize alert.
// Implemente os métodos de forma a não alterar o array original.
// Use o operador de spread.

const arrayTeste = [1, 8, 4, 2, 3, 5, 7, 10, 9, 6];

alert(`Array original: ${arrayTeste}`);
Utils.sortNumberAsc(arrayTeste, "alert", "alert");
Utils.sortNumberDesc(arrayTeste, "alert", "alert");
alert(
  `Array original depois dos métodos usados para mostrar que não foi alterado: ${arrayTeste}`
);
