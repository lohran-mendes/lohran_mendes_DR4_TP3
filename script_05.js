import { validateString } from "./lib/utils.js";

// Exercício 5 Nomes Próprios

// Crie uma aplicação que contenha uma função que corrija as palavras de um nome próprio informado, colocando as primeiras letras em maiúsculas corretamente. Por exemplo, se o usuário informar “machado de assis” a aplicação exibe “Machado de Assis” corretamente.

// Observações:

// Utilize prompt e alert.
// Empregue uma lista simples de exceções como “de”, “do” ou “da”. Não é preciso esgotar todas as possibilidades.

function formatName() {
  let nome = prompt("Insira aqui o nome completo.");
  if (validateString(nome, "alert")) {
    const arrayName = nome.split(" ");
    const formattedArray = arrayName.map((word) => {
      if (
        word.toLowerCase() === "de" ||
        word.toLowerCase() === "do" ||
        word.toLowerCase() === "da"
      )
        return word.toLowerCase();
      const palavraTratada = word
        .toLowerCase()
        .replace(word[0], word[0].toUpperCase());
      return palavraTratada;
    });
    alert(formattedArray.join(" "));
  }
}
formatName();
