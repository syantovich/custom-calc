import { Button } from "./button";
import {
  CalcCommand,
  ChangeCommand,
  CubeCommand,
  CubeRootCommand,
  FactCommand,
  OneDivXCommand,
  PercCommand,
  SquareCommand,
  SquareRootCommand,
  TenPowXCommand,
  UndoCommand,
} from "../controller/commands";
import "./calculator.css";

export function calculatorHTML(calculator) {
  let wrapperDiv = document.createElement("div"),
    wrapperCalculatorDiv = document.createElement("div"),
    stringDiv = document.createElement("div"),
    historyDiv = document.createElement("div"),
    buttonsDiv = document.createElement("div"),
    buttonsNumber = [];

  wrapperDiv.className = "wrapper_calculator";
  stringDiv.className = "string_calculator";
  stringDiv.innerText = calculator.getString();
  historyDiv.className = "history_calculator";
  buttonsDiv.className = "buttons_calculator";

  wrapperCalculatorDiv.className = "wrapper_calc_calculator";

  Button.prototype.areaResult = stringDiv;
  for (let i = 0; i < 10; i++) {
    buttonsNumber.push(new Button(i, "number", calculator, null, stringDiv));
    buttonsNumber[i].element.classList.add("num");
  }
  buttonsNumber[0].element.classList.add("two_seat");
  function deleteSymbol() {
    let stringArr = calculator.getString().split("");
    if (stringArr[stringArr.length - 1] === "(") {
      calculator.openBrakets.pop();
    }
    stringArr.pop();
    if (stringArr.length === 0) {
      stringArr.push("0");
      calculator.changeIsEdit(false);
    }
    calculator.setString(stringArr.join(""));
    stringDiv.innerText = stringArr.join("");
  }

  let darkMode = document.createElement("div");
  darkMode.innerText = "Темная тема";
  darkMode.className = "darkMode";

  let toggleWrapper = document.createElement("div");
  toggleWrapper.classList.add("toggleWrapper");
  let inputToggle = document.createElement("input");
  inputToggle.type = "checkbox";
  inputToggle.name = "toggle";
  inputToggle.id = "toggle";
  inputToggle.checked = true;
  inputToggle.className = "toggle";
  const labelToggle = document.createElement("label");
  labelToggle.for = "toggle";
  toggleWrapper.append(darkMode);
  toggleWrapper.append(inputToggle);
  toggleWrapper.append(labelToggle);
  toggleWrapper.addEventListener("click", () => {
    inputToggle.checked = !inputToggle.checked;
    wrapperDiv.classList.toggle("dark");
  });

  let additionButton = new Button("+", "number", calculator, null, stringDiv),
    substractionButton = new Button("-", "number", calculator, null, stringDiv),
    multButton = new Button("*", "number", calculator, null, stringDiv),
    dotButton = new Button(".", "number", calculator, null, stringDiv),
    divButton = new Button("/", "number", calculator, null, stringDiv),
    powButton = new Button("^", "number", calculator, null, stringDiv),
    percButton = new Button(
      "%",
      "action",
      calculator,
      new PercCommand(),
      stringDiv
    ),
    changeButton = new Button(
      "+/-",
      "action",
      calculator,
      new ChangeCommand(),
      stringDiv
    ),
    squareButton = new Button(
      "x^2",
      "action",
      calculator,
      new SquareCommand(),
      stringDiv
    ),
    cubeButton = new Button(
      "x^3",
      "action",
      calculator,
      new CubeCommand(),
      stringDiv
    ),
    tenPowButton = new Button(
      "10^x",
      "action",
      calculator,
      new TenPowXCommand(),
      stringDiv
    ),
    oneDivButton = new Button(
      "1/x",
      "action",
      calculator,
      new OneDivXCommand(),
      stringDiv
    ),
    rootButton = new Button("x^(1/y)", "number", calculator, null, stringDiv),
    squareRootButton = new Button(
      "x^(1/2)",
      "action",
      calculator,
      new SquareRootCommand(),
      stringDiv
    ),
    cubeRootButton = new Button(
      "x^(1/3)",
      "action",
      calculator,
      new CubeRootCommand(),
      stringDiv
    ),
    factorialButton = new Button(
      "!",
      "action",
      calculator,
      new FactCommand(),
      stringDiv
    ),
    equalsButton = new Button(
      "=",
      "action",
      calculator,
      new CalcCommand("="),
      stringDiv,
      historyDiv
    ),
    openBrackets = new Button("(", "bracketOpen", calculator, null, stringDiv),
    closeBrackets = new Button(
      ")",
      "bracketClose",
      calculator,
      new CalcCommand(")"),
      stringDiv
    ),
    mcButton = new Button("MC", "memory", calculator),
    mrButton = new Button("MR", "memory", calculator, null, stringDiv),
    mPlusButton = new Button("M+", "memory", calculator, new CalcCommand("M+")),
    mMinusButton = new Button(
      "M-",
      "memory",
      calculator,
      new CalcCommand("M-")
    ),
    removeButton = new Button("AC", "memory", calculator, null, stringDiv);

  buttonsDiv.append(openBrackets.element);
  buttonsDiv.append(closeBrackets.element);
  buttonsDiv.append(mcButton.element);
  buttonsDiv.append(removeButton.element);
  buttonsDiv.append(changeButton.element);
  buttonsDiv.append(percButton.element);
  divButton.element.classList.add("elementary");
  buttonsDiv.append(divButton.element);

  buttonsDiv.append(mPlusButton.element);
  buttonsDiv.append(mMinusButton.element);
  buttonsDiv.append(mrButton.element);
  buttonsDiv.append(buttonsNumber[7].element);
  buttonsDiv.append(buttonsNumber[8].element);
  buttonsDiv.append(buttonsNumber[9].element);
  multButton.element.classList.add("elementary");
  buttonsDiv.append(multButton.element);

  buttonsDiv.append(squareButton.element);
  buttonsDiv.append(cubeButton.element);
  buttonsDiv.append(powButton.element);
  buttonsDiv.append(buttonsNumber[4].element);
  buttonsDiv.append(buttonsNumber[5].element);
  buttonsDiv.append(buttonsNumber[6].element);
  substractionButton.element.classList.add("elementary");
  buttonsDiv.append(substractionButton.element);

  buttonsDiv.append(tenPowButton.element);
  buttonsDiv.append(oneDivButton.element);
  buttonsDiv.append(rootButton.element);
  buttonsDiv.append(buttonsNumber[1].element);
  buttonsDiv.append(buttonsNumber[2].element);
  buttonsDiv.append(buttonsNumber[3].element);
  additionButton.element.classList.add("elementary");
  buttonsDiv.append(additionButton.element);

  buttonsDiv.append(squareRootButton.element);
  buttonsDiv.append(cubeRootButton.element);
  buttonsDiv.append(factorialButton.element);
  buttonsDiv.append(buttonsNumber[0].element);
  dotButton.element.classList.add("num");
  buttonsDiv.append(dotButton.element);
  equalsButton.element.classList.add("elementary");
  buttonsDiv.append(equalsButton.element);

  //Добавление поля с +-/*=

  //добавление действий
  let undo = new Button(
    "Вернуть",
    "undo",
    calculator,
    new UndoCommand(),
    stringDiv
  );

  wrapperCalculatorDiv.append(stringDiv);
  wrapperCalculatorDiv.append(buttonsDiv);

  wrapperDiv.append(wrapperCalculatorDiv);
  wrapperDiv.append(historyDiv);

  wrapperCalculatorDiv.append(undo.element);
  wrapperCalculatorDiv.append(toggleWrapper);
  document.body.querySelector("main").append(wrapperDiv);
  let ctrl = false,
    z = false,
    v = false;
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 8) {
      deleteSymbol();
    }
    if (/[0-9]/.test(event.key)) {
      buttonsNumber[event.key].element.click();
    }
    switch (event.key) {
      case "+":
        additionButton.element.click();
        break;

      case "-":
        substractionButton.element.click();
        break;
      case "*":
        multButton.element.click();
        break;
      case ".":
        dotButton.element.click();
        break;
      case "/":
        divButton.element.click();
        break;
      case "^":
        powButton.element.click();
        break;
      case "%":
        percButton.element.click();
        break;
      case "(":
        openBrackets.element.click();
        break;
      case ")":
        closeBrackets.element.click();
        break;
      case "!":
        factorialButton.element.click();
        break;
      case "=":
        {
          event.preventDefault();
          equalsButton.element.click();
        }
        break;
    }
    if (event.keyCode === 13) {
      equalsButton.element.click();
    }
    if (event.keyCode === 17) {
      ctrl = true;
    }
    if (event.keyCode === 90) {
      z = true;
    }
    if (event.keyCode === 86) {
      v = true;
    }
    if (ctrl && v) {
      navigator.clipboard
        .readText()
        .then((text) => {
          let newText = "";
          for (let i = 0; i < text.length; i++) {
            if (/[0-9]/.test(text[i])) {
              newText += text[i];
            }
            if (text[i] === "." || text[i] === ",") {
              newText += ".";
            }
          }
          console.log(newText);
          calculator.setString(newText);
          stringDiv.innerText = newText;
        })
        .catch((err) => {
          // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
          console.log("Something went wrong", err);
        });
      v = false;
    }
    if (ctrl && z) {
      undo.element.click();
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.keyCode === 17) {
      ctrl = false;
    }
    if (event.keyCode === 90) {
      z = false;
    }
    if (event.keyCode === 86) {
      v = false;
    }
  });
}
