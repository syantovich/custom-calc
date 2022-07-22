import { addToString } from "../controller/functions";

export class Button {
  constructor(value, className, calculator, command, areaResult, areaHistory) {
    this.areaResult = areaResult;
    this.value = value;
    let div = document.createElement("button");
    div.innerText = this.value;
    div.className = className;
    div.addEventListener("click", () => {
      switch (className) {
        case "action": {
          if (this.value === "=") {
            while (calculator.openBrakets.length !== 0) {
              calculator.execute(command);
              calculator.openBrakets.pop();
            }
          }
          calculator.execute(command);
          if (this.value === "=") {
            const nextElemHist = document.createElement("div");
            nextElemHist.className = "history_element";
            nextElemHist.innerText =
              calculator.history[calculator.history.length - 1];
            const theFirstChild = areaHistory.firstChild;
            areaHistory.classList.add("visible");
            areaHistory.insertBefore(nextElemHist, theFirstChild);
          }

          break;
        }
        case "number": {
          if (value === "x^(1/y)") {
            this.value = "^(1/";
            calculator.openBrakets.push(calculator.getString().length + 1);
          }
          if (calculator.getIsEddit()) {
            calculator.setString(
              addToString(calculator.getString(), this.value)
            );
          } else {
            if (
              !/[.0-9]/.test(this.value) &&
              /[0-9]/.test(calculator.getString())
            ) {
              calculator.setString(
                addToString(calculator.getString(), this.value)
              );
              calculator.changeIsEdit(true);
            } else {
              calculator.changeIsEdit(true);
              calculator.setString(`${this.value}`);
            }
          }
          break;
        }
        case "bracketOpen": {
          if (calculator.getIsEddit()) {
            if (
              calculator.getString().length === 1 &&
              calculator.getString()[0] === "0"
            ) {
              calculator.openBrakets.push(0);
            } else {
              calculator.openBrakets.push(calculator.getString().length);
            }
            calculator.setString(
              addToString(calculator.getString(), this.value)
            );
          } else {
            calculator.openBrakets = [];
            calculator.openBrakets.push(0);
            calculator.setString(this.value);
            calculator.changeIsEdit(true);
          }

          break;
        }
        case "bracketClose":
          {
            if (calculator.openBrakets.length === 0) {
              calculator.setString("Ошибка");
            }
            calculator.execute(command);
            calculator.openBrakets.pop();
          }
          break;
        case "memory":
          {
            if (value === "AC") {
              calculator.setString("0");
              calculator.changeIsEdit(false);
            }
            if (value === "MC") {
              calculator.memory = 0;
            }
            if (value === "MR") {
              calculator.setString(calculator.memory);
              calculator.openBrakets = [];
              calculator.changeIsEdit(false);
            }
            if (value === "M+" || value === "M-") {
              calculator.execute(command);
            }
          }
          break;
        case "undo": {
          calculator.undo(command);
        }
      }

      if (this.areaResult) {
        this.areaResult.innerText = calculator.getString();
      }
    });
    this.element = div;
    this.type = className;
  }
}
