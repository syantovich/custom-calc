// let but = document.querySelector("button");
// but.addEventListener("click", () => {
//
// });
import { Calculator } from "./model/Calculator";
import { calculatorHTML } from "./view/calculator";

let calculator = new Calculator();
calculatorHTML(calculator);
