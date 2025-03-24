import * as Utils from "./lib/utils.js";

// Exercício 1 Sintaxe de Funções

// Enunciado: Crie uma aplicação que implemente uma biblioteca de funções de validação de strings com 2 funções: minLength e maxLength. Crie um script para testar cada uma das funções, solicitando ao usuário que digite valores para serem testados.

// Observações:

// Utilize prompt e alert.
// Implemente minLength usando a sintaxe de declaração de função.
// Implemente maxLength usando a sintaxe de função de seta.

function minLength() {
  const texto = prompt(
    "Entre aqui com o texto para medir se satisfaz a condição de tamanho minímo"
  );
  if (Utils.validateString(texto, "alert")) {
    const min = Utils.convertToNumber(
      prompt("Qual será o tamanho mínimo do texto?"),
      "alert"
    );
    if (texto.length >= min && !isNaN(min)) {
      alert("O texto tem o tamanho mínimo necessário!");
    } else if (texto.length < min && !isNaN(min)) {
      alert("O texto NÃO tem o tamanho mínimo necessário!");
    }
  }
}
const maxLength = () => {
  const texto = prompt(
    "Entre aqui com o texto para medir se satisfaz a condição de tamanho maximo"
  );
  if ((Utils.validateString(texto), "alert")) {
    const max = Utils.convertToNumber(
      prompt("Qual será o tamanho máximo do texto?")
    );
    if (texto.length <= max && !isNaN(max)) {
      alert("O texto tem o tamanho menor que o máximo permitido!");
    } else if (texto.length > max && !isNaN(max)) {
      alert("O tamanho do texto EXCEDE o máximo permitido!");
    }
  }
};

minLength();
maxLength();
