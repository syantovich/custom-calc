import {
  calc,
  changeMark,
  cube,
  cubeRoot,
  fact,
  oneDivX,
  percent,
  square,
  squareRoot,
  tenPowX,
  undoFunction,
} from "./functions";

class Command {
  constructor(execute, type, symbol, undo) {
    this.execute = execute;
    this.undo = undo;
    this.type = type;
    this.symbol = symbol;
  }
}
export let types = {
  calcString: "calculate string",
  calcAction: "calculate action",
  calcPercent: "calculate percent",
};
export function CalcCommand(symbol) {
  return new Command(calc, types.calcString, symbol);
}
export function PercCommand() {
  return new Command(percent, types.calcPercent, "%");
}
export function ChangeCommand() {
  return new Command(changeMark, types.calcAction, "+/-");
}
export function SquareCommand() {
  return new Command(square, types.calcAction, "^2");
}
export function CubeCommand() {
  return new Command(cube, types.calcAction, "^3");
}
export function TenPowXCommand() {
  return new Command(tenPowX, types.calcAction, "10^");
}
export function OneDivXCommand() {
  return new Command(oneDivX, types.calcAction, "1/");
}
export function SquareRootCommand() {
  return new Command(squareRoot, types.calcAction, "^(1/2)");
}
export function CubeRootCommand() {
  return new Command(cubeRoot, types.calcAction, "^(1/3)");
}
export function FactCommand() {
  return new Command(fact, types.calcAction, "!");
}
export function UndoCommand() {
  return new Command(null, null, null, undoFunction);
}
