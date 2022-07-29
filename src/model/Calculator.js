import { types } from "../controller/commands";
import { findOpenBrakets } from "../controller/functions";

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
      let currString = string;
      try {
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

        if (string[0] === "+") {
          let newString = string.split("");
          newString.shift();
          string = newString.join("");
        }
        this.changeIsEdit(false);
        this.commands.push({
          openBrakets: this.openBrakets,
          command,
          currString,
        });
        if (command.symbol !== "M+" && command.symbol !== "M-") {
          return { status: "ok", string };
        } else {
          return { status: "ok", string: this.memory };
        }
      } catch (e) {
        // this.setString(e);
        return { status: "error", string: e };
        // this.openBrakets = [];
      }
    };
    this.undo = (command) => {
      if (this.commands.length) {
        this.changeIsEdit(true);
        let obj = command.undo(this.commands);
        if (obj.string) {
          findOpenBrakets(obj.string, this);
          this.setString(obj.string);
        }
        this.commands.pop();
      }
      return string;
    };
  }
  calculateString(command, string) {
    if (command.symbol !== "M+" && command.symbol !== "M-") {
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
      let index;
      if (string.length === 1 && /[0-9]/.test(string)) {
        index = 0;
      } else {
        index = this.findIndexWithMark(string.length - 1, string);
      }

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
    let index = string.length - 1;

    if (/[0-9]/.test(string[index])) {
      index = this.findIndexWithMark(index, string);
    } else {
      throw "Выполнить действие невозможно";
    }
    let newString = string.split("");
    try {
      this.next = command.execute(
        +newString.slice(index, `${string}`.length).join("")
      );
      newString.splice(index, `${string}`.length, this.next);
      this.setString(newString.join(""));
      return true;
    } catch {
      throw "Неверный ввод";
    }
  }
  calculatePercent(command, string) {
    if (!/[0-9]/.test(string[string.length - 1])) {
      throw "You need to write some action";
    }
    let firstIndex = this.findIndexWithMark(string.length - 1, string, true);
    let index,
      isPlus = false;

    if (/[*/]/.test(string[firstIndex - 1])) {
      index = this.findIndexWithMark(firstIndex - 2, string);
      this.current = string.slice(index, firstIndex - 1);
    } else {
      index = this.findIndexWithMark(firstIndex - 1, string);
      this.current = string.slice(index, firstIndex);
      isPlus = true;
    }

    if (index === -1 || firstIndex === 0) {
      throw "You need to write some action";
    }

    this.next = string.slice(firstIndex);
    this.next = command.execute(+this.current, +this.next, isPlus);
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
            return index;
          }
        } else {
          index--;
        }
      }
    }
    return index;
  }
}
