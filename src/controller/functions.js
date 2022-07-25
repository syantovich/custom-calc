export function calc(str) {
  const num = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    ".": true,
    "+": true,
    "-": true,
    e: true,
  };
  const symbol = {
    "(": true,
    ")": true,
    "*": true,
    "/": true,
    " ": true,
    "^": true,
  };
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in num) && !(str[i] in symbol)) {
      throw "В строке содержаться недопустимые символы!";
    }
  }
  //Проверка одинаковое ли количество скобок
  str = str.split(" ").join("").split("");
  let open = 0,
    close = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      open++;
    }
    if (str[i] === ")") {
      close++;
    }
    if (open < close) {
      throw "Проверьте скобки";
    }
  }
  if (open !== close) {
    throw "Проверьте скобки";
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] in symbol) {
      str.splice(i, 0, "!");
      str.splice(i + 2, 0, "!");
      i += 2;
    }
    if (str[i] === "-" && str[i - 1] !== "e") {
      str.splice(i, 0, "!");
      if (str[i + 2] === "(") {
        str.splice(i + 2, 0, "!");
        i++;
      }
      i++;
    }
    if (str[i] === "+" && str[i - 1] !== "e") {
      str.splice(i, 0, "!");
      i++;
    }
  }
  str = str.join("").split("!");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") {
      str.splice(i, 1);
      i--;
    }
  }
  while (str.indexOf("(") !== -1) {
    open = str.indexOf("(");
    close = str.length;
    if (open !== -1) {
      close = open;
      let kol = 1;
      while (kol !== 0) {
        close++;
        if (str[close] === "(") {
          kol++;
        }
        if (str[close] === ")") {
          kol--;
        }
      }
      let nextString = "";
      nextString = str.slice(open + 1, close).join("");
      let end = calc(nextString);
      if (/[0-9]/.test(str[open - 1])) {
        str.splice(open, 0, "*");
        open++;
      }
      if (end === "Ошибка") {
        throw end;
      }
      open--;
      str.splice(open + 1, close - open + 2, end);
      if (str[open] === "-") {
        str[open + 1] *= -1;
        str.splice(open, 1);
      } else {
        if (str[open] === "+") {
          str.splice(open, 1);
        }
      }
    } else {
      open = 0;
    }
  }

  let endV = 0;
  let numbersArr = str.join("").split(/[*/^]/).join("");
  let symbolsArr = str.join("").split(/[0-9]/).join("");

  if (symbolsArr.length >= numbersArr.length) {
    throw "Ошибка";
  }
  while (str.indexOf("^") !== -1) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "^") {
        console.log(pow);
        endV = parseFloat(str[i - 1]) ** parseFloat(str[i + 1]);
        endV = endV.toPrecision(14);
        str.splice(i - 1, 3, `${endV}`);
        i -= 1;
      }
    }
  }
  while (str.indexOf("*") !== -1 || str.indexOf("/") !== -1) {
    for (let i = 0; i < str.length; i++) {
      let sim = str[i];
      if (sim === "*") {
        endV = parseFloat(str[i - 1]) * parseFloat(str[i + 1]);
        str.splice(i - 1, 3, `${endV}`);
        endV = endV.toPrecision(14);
        i -= 1;
      }
      if (sim === "/") {
        endV = parseFloat(str[i - 1]) / parseFloat(str[i + 1]);
        str.splice(i - 1, 3, `${endV}`);
        i -= 1;
      }
    }
  }
  endV = 0;

  for (let i = 0; i < str.length; i++) {
    let el = parseFloat(str[i]);
    endV = endV + el;
  }
  console.log(endV);
  endV = parseFloat(endV.toFixed(14));
  if (endV === Infinity || endV === -Infinity) {
    throw "Деление на ноль не возможно";
  } else {
    if (isNaN(endV)) {
      throw "Ошибка";
    }
  }

  return `${endV}`;
}

export const percent = (a, b, isPlus) => {
  let result = (a * b) / 100;
  if (result >= 0 && isPlus) {
    return `+${result}`;
  }
  return result;
};

export const changeMark = (a) => {
  if (a < 0) {
    return `+${a * -1}`;
  } else {
    return a * -1;
  }
};
export const pow = (a, b) => {
  const result = calc(`${a}^${b}`);
  if (result >= 0) {
    return `+${result}`;
  } else {
    return `${result}`;
  }
};
export const square = (a) => {
  return pow(a, 2);
};
export const cube = (a) => {
  return pow(a, 3);
};
export const tenPowX = (a) => {
  return pow(10, a);
};
export const oneDivX = (a) => {
  if (a >= 0) {
    return `+${1 / a}`;
  } else {
    return 1 / a;
  }
};
export const root = (a, b) => {
  return pow(a, 1 / b);
};
export const squareRoot = (a) => {
  return root(a, 2);
};

export const cubeRoot = (a) => {
  return root(a, 3);
};

export function fact(number) {
  number = Math.round(number);
  if (number === 0) {
    return 1;
  } else {
    return `+${number * fact(number - 1)}`;
  }
}
export function addToString(string, el) {
  return string + `${el}`;
}
export function undoFunction(commands) {
  return {
    string: commands[commands.length - 1].string,
    openBrakets: commands[commands.length - 1].openBrakets,
  };
}
export function findOpenBrakets(string, calculator) {
  calculator.openBrakets = [];
  let index = 0;
  while (string.slice(index).indexOf("(") !== -1) {
    let open = string.slice(index).indexOf("(");
    index = open + 1;
    this.openBrakets.push(open);
  }
}
