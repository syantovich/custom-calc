import { addToString } from "../controller/functions";

export class Button {
  constructor(
    value,
    className,
    calculator,
    command,
    areaResult,
    areaError,
    areaHistory
  ) {
    this.areaResult = areaResult;
    this.value = value;
    let div = document.createElement("button");
    div.innerText = this.value;
    div.className = className;
    div.addEventListener("click", () => {
      let result;
      switch (className) {
        case "action": {
          if (this.value === "=") {
            while (calculator.openBrakets.length !== 0) {
              result = calculator.execute(command);
              calculator.openBrakets.pop();
            }
          }
          result = calculator.execute(command);
          if (this.value === "=" && !isNaN(calculator.getString())) {
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
            this.addingWithsymbol(calculator);
            result = { status: "ok" };
          } else {
            if (
              (!/[.0-9]/.test(this.value) &&
                /[0-9]/.test(calculator.getString())) ||
              this.value === "^(1/"
            ) {
              this.addingWithsymbol(calculator);
              result = { status: "ok" };
              calculator.changeIsEdit(true);
            } else {
              if (this.value === ".") {
                calculator.setString(`0${this.value}`);
              } else {
                calculator.setString(`${this.value}`);
              }
              calculator.changeIsEdit(true);
              result = { status: "ok" };
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
            result = { status: "ok" };
          } else {
            calculator.openBrakets = [];
            calculator.openBrakets.push(0);
            calculator.setString(this.value);
            result = { status: "ok" };
            calculator.changeIsEdit(true);
          }

          break;
        }
        case "bracketClose":
          {
            if (calculator.openBrakets.length === 0) {
              result = { status: "error", string: "Ошибка" };
            }
            result = calculator.execute(command);
            calculator.openBrakets.pop();
          }
          break;
        case "memory":
          {
            if (value === "AC") {
              calculator.setString("0");
              result = { status: "ok" };
              calculator.changeIsEdit(false);
            }
            if (value === "MC") {
              calculator.memory = 0;
            }
            if (value === "MR") {
              if (calculator.getIsEddit()) {
                calculator.openBrakets.push(calculator.getString().length);
                calculator.setString(
                  addToString(calculator.getString(), `(${calculator.memory}`)
                );
              } else {
                calculator.setString(calculator.memory);
                calculator.openBrakets = [];
              }
              result = { status: "ok" };
            }
            if (value === "M+" || value === "M-") {
              let a = calculator.execute(command);
              console.log(a);
            }
          }
          break;
        case "undo": {
          result = calculator.undo(command);
        }
      }

      if (this.areaResult) {
        if (result.status === "ok") {
          this.areaResult.innerText = calculator.getString();
        } else {
          areaError.innerText = result.string;
          areaError.classList.add("errorOn");
          setTimeout(() => {
            areaError.classList.remove("errorOn");
          }, 2000);
        }
      }
    });
    this.element = div;
    this.type = className;
  }
  addingWithsymbol(calculator) {
    if (/[-+*/^]/.test(this.value) && this.value.length === 1) {
      if (
        /[-+*/^]/.test(
          calculator.getString()[calculator.getString().length - 1]
        )
      ) {
        calculator.setString(
          addToString(
            calculator.getString().slice(0, calculator.getString().length - 1),
            this.value
          )
        );
      } else {
        calculator.setString(addToString(calculator.getString(), this.value));
      }
    } else {
      if (this.value === ".") {
        let string = calculator.getString();
        let index = calculator.findIndexWithMark(string.length - 1, string);
        let newString = string.slice(index);
        if (newString.indexOf(".") === -1) {
          calculator.setString(addToString(string, this.value));
        }
      } else {
        console.log(addToString(calculator.getString(), this.value));
        calculator.setString(addToString(calculator.getString(), this.value));
      }
    }
  }
}
