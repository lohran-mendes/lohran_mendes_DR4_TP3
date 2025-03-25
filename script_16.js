// Exercício 16 Função que mapeia um array

// No arquivo script.js, siga as etapas abaixo:

// Crie uma função que recebe e mapeia um array, contendo 5 números.
// Pergunte os números ao usuário e chame a função mapeadora.
// Crie um novo array, contendo o valor da raiz quadrada de cada número do primeiro array em cada posição respectiva neste novo array.
// Exiba este novo array.
// Assim que terminar, salve todos os links para os exercícios realizados em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR4_TP3.PDF” e poste como resposta a este TP.
import { convertToNumber } from "./lib/utils.js";

function mapeiaArray() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    let valor;
    valor = convertToNumber(prompt(`Insira o ${i + 1}º valor:`), "alert");
    if (isNaN(valor)) {
      return alert(
        "todos os 5 valores devem ser valores númericos, tente novamente!"
      );
    }
    array.push(valor);
  }
  const novoArray = array.map((valor) => {
    if (Number.isInteger(Math.sqrt(valor))) return Math.sqrt(valor);
    return Math.sqrt(valor).toFixed(2);
  });
  alert(
    `Array informado:\n${array.join(
      ",  "
    )}\n\rArray novo com o valor de sua raiz quadrada:\n${novoArray.join(
      ",  "
    )}`
  );
}
mapeiaArray();
