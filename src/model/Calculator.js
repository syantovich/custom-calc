import { types } from "../controller/commands";

export class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
    this.openBrakets = [];
    this.history = [];
    this.memory = 0;
    let string = "0";
    let isEdit = false;

    this.next = undefined;
    this.setString = (newStr) => {
      string = newStr;
    };
    this.getString = () => {
      return string;
    };
    this.changeIsEdit = (bool) => {
      isEdit = bool;
    };
    this.getIsEddit = () => {
      return isEdit;
    };
    this.execute = (command) => {
      if (this.openBrakets.length < 0) {
        return false;
      }
      switch (command.type) {
        case types.calcString:
          this.calculateString(command, string);
          break;
        case types.calcAction:
          this.calculateAction(command, string);
          break;
        case types.calcPercent:
          this.calculatePercent(command, string);
      }
      if (string.split(/[-^/(+*]/).length === 2 && string[0] === "+") {
        let newString = string.split("");
        newString.shift();
        string = newString.join("");
      }
      this.next = undefined;
      this.changeIsEdit(false);
    };
    this.undo = (command) => {
      if (this.commands.length) {
        this.changeIsEdit(true);
        let obj = command.undo(this.commands);
        if (obj.string) {
          this.openBrakets = [];
          let index = 0;
          while (obj.string.slice(index).indexOf("(") !== -1) {
            let open = obj.string.slice(index).indexOf("(");
            index = open + 1;
            this.openBrakets.push(open);
          }
          this.setString(obj.string);
        }
        this.commands.pop();
      }
    };
  }
  calculateString(command, string) {
    if (command.symbol !== "M+" && command.symbol !== "M-") {
      this.commands.push({
        openBrakets: this.openBrakets,
        command,
        string,
      });
      let oldString = string;
      const lengthOpenBrackets = this.openBrakets.length;
      if (
        command.symbol === ")" ||
        (command.symbol === "=" && this.openBrakets.length)
      ) {
        this.current = command.execute(
          `${string.slice(this.getIndex(), `${string}`.length)})`
        );
      } else {
        this.current = command.execute(
          string.slice(this.getIndex(), `${string}`.length)
        );
        if (isNaN(this.current)) {
          this.setString(this.current);
          return false;
        }
      }

      let newString = string.split("");
      if (/[.0-9]/.test(string[this.getIndex() - 1])) {
        newString.splice(
          this.getIndex(),
          `${string}`.length,
          `*${this.current}`
        );
      } else {
        if (/[-+]/.test(string[this.getIndex() - 1])) {
          let newCurrent = `${string[this.getIndex() - 1]}1` * this.current;
          newString.splice(
            this.getIndex() - 1,
            `${string}`.length,
            newCurrent.toString()
          );
        } else {
          newString.splice(this.getIndex(), `${string}`.length, this.current);
        }
      }

      this.setString(newString.join(""));
      if (command.symbol === "=") {
        for (let i = 0; i < lengthOpenBrackets; i++) {
          oldString += ")";
        }
        this.history.push(`${oldString} = ${newString.join("")}`);
      }
      return true;
    } else {
      let index = this.findIndexWithMark(string.length - 1, string);
      if (index === 0) {
        let value = +`${command.symbol[1]}1` * +string;
        this.memory = command.execute(
          `${this.memory}${value >= 0 ? "+" : ""}${value}`
        );
        console.log(this.memory);
      }
    }
  }
  calculateAction(command, string) {
    this.commands.push({
      openBrakets: this.openBrakets,
      command,
      string,
    });
    let index = string.length - 1;

    if (/[0-9]/.test(string[index])) {
      index = this.findIndexWithMark(index, string);
    } else {
      this.setString("Выполнить действие невозможно");
      return;
    }
    let newString = string.split("");
    try {
      this.next = command.execute(
        +newString.slice(index, `${string}`.length).join("")
      );
      if (isNaN(this.next)) {
        this.setString(this.next);
        return false;
      }
      newString.splice(index, `${string}`.length, this.next);
      this.setString(newString.join(""));
      return true;
    } catch {
      this.setString("Неверный ввод");
    }
  }
  calculatePercent(command, string) {
    let firstIndex = this.findIndexWithMark(string.length - 1, string, true);
    let index;
    if (/[*/]/.test(string[firstIndex - 1])) {
      index = this.findIndexWithMark(firstIndex - 2, string);
      this.current = string.slice(index, firstIndex - 1);
    } else {
      index = this.findIndexWithMark(firstIndex - 2, string);
      this.current = string.slice(index, firstIndex);
    }

    if (index === false) {
      alert("You need to write some action");
      this.setString("You need to write some action");
      return false;
    }
    console.log(string.split(""));

    this.next = string.slice(firstIndex);
    console.log(this.current, this.next);

    this.next = command.execute(+this.current, +this.next);
    this.commands.push({
      openBrakets: this.openBrakets,
      command,
      string,
    });
    let newString = string.split("");
    newString.splice(firstIndex, `${string}`.length, this.next);
    this.setString(newString.join(""));
  }
  getIndex() {
    if (this.openBrakets.length) {
      return this.openBrakets[this.openBrakets.length - 1];
    } else {
      return this.openBrakets[0];
    }
  }
  findIndexWithMark(startIndex, string, isBracket) {
    if (!startIndex) {
      return false;
    }
    let isContinue = true;
    let index = startIndex;
    while (index > 0 && isContinue) {
      if (string[index] === "(" && isBracket) {
        return false;
      }
      if (/[*/(]/.test(string[index])) {
        isContinue = index++;
        return index;
      } else {
        if (string[index] === "+" || string[index] === "-") {
          if (string[index - 1] === "e") {
            index -= 2;
          } else {
            isContinue = false;
          }
        } else {
          index--;
        }
      }
    }
    return index;
  }
}
