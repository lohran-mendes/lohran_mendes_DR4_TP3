// informa qual vai ser a saída do erro
export function displayMessage(message, type) {
  switch (String(type).toLowerCase()) {
    case "log":
      console.log(message);
      break;
    case "alert":
      alert(message);
      break;
    case "error":
      console.error(message);
      break;
    default:
      break;
  }
}

//valida se a entrada é uma string válida.
export function validateString(value, outputType) {
  if (typeof value === "string" && value.trim().length > 0) {
    return true;
  } else if (typeof value === "string" && value.trim().length === 0) {
    displayMessage("CAMPO VAZIO - NÃO é uma string válida.", outputType);
    return false;
  } else {
    displayMessage(`'${value}' - NÃO é uma string válida.`, outputType);
    return false;
  }
}

// transforma o valor em um number caso a conversão seja válida
export function convertToNumber(string, outputType) {
  if (typeof string === "number") {
    return string;
  } else if (validateString(string) && !isNaN(string)) {
    return Number(string.trim());
  } else
    displayMessage(
      `'${
        string === "" ? "CAMPO VAZIO" : string
      }' - NÃO é um valor numérico e nem pode ser transformado em um.`,
      outputType
    );
  return NaN;
}
