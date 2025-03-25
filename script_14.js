// Exercício 14 Grupo - Ordem decrescente

// No arquivo script.js, siga as etapas abaixo:

// Crie uma função que irá receber 3 valores por parâmetro e ordená-los em ordem decrescente.
// Exiba esta ordem
// Peça para o usuário digitar os valores e realize a chamada da função.
// Exiba a ordem dos números.
import { convertToNumber, sortNumberDesc } from "./lib/utils.js";

const valor1 = convertToNumber(prompt("Insira o primeiro valor"), "alert");
const valor2 = convertToNumber(prompt("Insira o segundo valor"), "alert");
const valor3 = convertToNumber(prompt("Insira o terceiro valor"), "alert");

function ordenaNumeros(valor1, valor2, valor3) {
  if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
    const array = [valor1, valor2, valor3];
    alert(`Segue os números ordenados:\n${sortNumberDesc(array)};`);
  }
}

ordenaNumeros(valor1, valor2, valor3);
