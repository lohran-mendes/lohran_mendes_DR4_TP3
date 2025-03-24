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
  } else {
    displayMessage(`'${value}' - NÃO é uma string válida.`, outputType);
  }
  return false;
}

// valida se o array só tem valores numéricos
export function validateNumericArray(array, outputType, displayValue) {
  if (Array.isArray(array) && array.every((value) => !isNaN(value))) {
    return true;
  } else if (!Array.isArray(array)) {
    displayMessage(`"${array}" Não é um array`, outputType);
  } else {
    displayMessage(
      `"${array}" É um array que contêm valores não numéricos`,
      outputType
    );
  }
  return false;
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

// recebe um array e o retorna organizado de forma ascendente
export function sortNumberAsc(array, outputType, displayValue) {
  if (validateNumericArray(array, outputType) === true) {
    const response = [...array].sort((a, b) => a - b);
    if (displayValue) displayMessage(response, displayValue);
    return response;
  }
}

// recebe um array e o retorna organizado de forma descendente
export function sortNumberDesc(array, outputType, displayValue) {
  if (validateNumericArray(array, outputType) === true) {
    const response = [...array].sort((a, b) => b - a);
    if (displayValue) displayMessage(response, displayValue);
    return response;
  }
}

export function sortStringAsc(array, outputType, displayValue) {
  if (Array.isArray(array)) {
    const response = [...array].sort();
    if (displayValue) displayMessage(response, displayValue);
    return response;
  } else displayMessage(`"${array}" - Não é um array!`, outputType);
}
export function sortStringDesc(array, outputType, displayValue) {
  if (Array.isArray(array)) {
    const response = [...array].sort().reverse();
    if (displayValue) displayMessage(response, displayValue);
    return response;
  } else displayMessage(`"${array}" - Não é um array!`, outputType);
}
