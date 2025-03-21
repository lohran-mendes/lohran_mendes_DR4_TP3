// Exercício 7 Filtragem de Nomes por Letra Inicial

// Enunciado: Construa uma aplicação que defina um array com 10 nomes de escritores. Peça ao usuário para informar uma letra, converta-a para maiúscula e retorne uma lista com os escritores que têm como inicial a letra informada.

// Observações:

// Valide sempre as entradas de dados.
// Utilize prompt e alert.
// Teste o seu código.

const escritoresFamosos = [
  "Machado de Assis",
  "Clarice Lispector",
  "Jorge Amado",
  "Guimarães Rosa",
  "Cecília Meireles",
  "Carlos Drummond de Andrade",
  "Fernando Pessoa",
  "Gabriel García Márquez",
  "Virginia Woolf",
  "Franz Kafka",
];

function listaDeEscritores() {
  const letraInformada = prompt("Informe uma letra").toUpperCase();
  if (isNaN(letraInformada) && letraInformada.trim().length === 1) {
    const listaFiltrada = escritoresFamosos.filter(
      (valor) => valor.slice(0, 1) === letraInformada
    );
    if (listaFiltrada.length > 0) {
      alert(
        `Segue abaixo a lista com os escritores que começam com a letra "${letraInformada}" :\n` +
          listaFiltrada.join("\n")
      );
      return listaFiltrada;
    } else alert(`Não há nenhum escritor com a inicial da letra informada.`);
  } else
    alert("Dado informado não aceito, tente novamente usando apenas uma letra");
}
listaDeEscritores();
