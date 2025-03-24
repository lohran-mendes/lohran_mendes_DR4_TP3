import { validateString } from "./lib/utils.js";
// Exercício 6 Contador de Vogais

// Crie uma aplicação que contenha uma função que receba uma string como parâmetro e retorne quantas vogais existem.

// Observações:

// Utilize prompt e alert.
function vowelCount() {
  const string = prompt(
    "Insira aqui a string para que a contagem de vogais seja realizada."
  );
  let vowelCount = 0;
  if (validateString(string, "alert")) {
    const letters = string.split("");
    letters.forEach((letter) => {
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      )
        vowelCount++;
    });
    if (vowelCount > 0) {
      alert(`Existem ${vowelCount} vogais no texto fornecido`);
    } else alert(`Não há vogais no texto fornecido`);
  }
}

vowelCount();
