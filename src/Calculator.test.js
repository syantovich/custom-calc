const { Calculator } = require("./model/Calculator");
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
} from "./controller/commands";

const calculator = new Calculator();
const calculatorUseCommand = (value, command) => {
  calculator.setString(value);
  return calculator.execute(command);
};

test("testing CalcCommand", () => {
  expect(calculatorUseCommand("7-+8*3-6", new CalcCommand("="))).toBe("Ошибка");
  expect(
    calculatorUseCommand("7/5+8*3-6^2-10(5+1)", new CalcCommand("="))
  ).toBe("1.4");
  expect(calculatorUseCommand("7^^521", new CalcCommand("="))).toBe("Ошибка");
  expect(calculatorUseCommand("8+3(-9", new CalcCommand("="))).toBe(
    "Проверьте скобки"
  );

  expect(calculatorUseCommand("8+3(-9)", new CalcCommand("="))).toBe("-19");
  expect(
    calculatorUseCommand(
      "45.25468856254641626365^2^(1/2)",
      new CalcCommand("=")
    )
  ).toBe("45.254688562547");
  expect(calculatorUseCommand("7/0", new CalcCommand("="))).toBe(
    "Деление на ноль не возможно"
  );
  expect(calculatorUseCommand("7^53/1000", new CalcCommand("="))).toBe(
    "6.1687350962806e+41"
  );
  expect(calculatorUseCommand("-0.4^53", new CalcCommand("="))).toBe("0");
  expect(calculatorUseCommand("-0.4^53+5", new CalcCommand("="))).toBe("5");
  expect(
    calculatorUseCommand(
      "-0.4^53^(0.01923076923076923076923076923077)",
      new CalcCommand("=")
    )
  ).toBe("Ошибка");
  expect(
    calculatorUseCommand(
      "0.4^53^(0.01923076923076923076923076923077)",
      new CalcCommand("=")
    )
  ).toBe("0.39301334635953");
  expect(
    calculatorUseCommand("-(7/5+8*3-6^2-10(5+1)", new CalcCommand(")"))
  ).toBe("-1.4");
  expect(
    calculatorUseCommand("-(7/5(+8*3-6^2-10(5+1)", new CalcCommand(")"))
  ).toBe("Проверьте скобки");
  expect(
    calculatorUseCommand("-(7/ппа5+8*3-6^2-10(5+1)", new CalcCommand(")"))
  ).toBe("В строке содержаться недопустимые символы!");
  expect(calculatorUseCommand("))))", new CalcCommand("="))).toBe(
    "Проверьте скобки"
  );
  expect(calculatorUseCommand("4^2.5", new CalcCommand("="))).toBe("32");

  expect(calculatorUseCommand("0.1+0.2", new CalcCommand("="))).toBe("0.3");
});
test("testing changeCommand", () => {
  expect(calculatorUseCommand("7-+8*3-6", new ChangeCommand())).toBe(
    "7-+8*3+6"
  );
  expect(calculatorUseCommand("7-+8*3*-6", new ChangeCommand())).toBe(
    "7-+8*3*+6"
  );
  expect(calculatorUseCommand("7-+8*3/-6", new ChangeCommand())).toBe(
    "7-+8*3/+6"
  );
  expect(calculatorUseCommand("7-+8*3/6", new ChangeCommand())).toBe(
    "7-+8*3/-6"
  );
  expect(calculatorUseCommand("7-+8*3/", new ChangeCommand())).toBe(
    "Выполнить действие невозможно"
  );
  expect(calculatorUseCommand("-7", new ChangeCommand())).toBe("7");
  expect(calculatorUseCommand("7-+(8*3", new ChangeCommand())).toBe("7-+(8*-3");
  expect(calculatorUseCommand("7-+8*3/", new ChangeCommand())).toBe(
    "Выполнить действие невозможно"
  );
});
test("testing CubeCommand", () => {
  expect(calculatorUseCommand("3", new CubeCommand())).toBe("27");
  expect(calculatorUseCommand("-3", new CubeCommand())).toBe("-27");
  expect(calculatorUseCommand("3+45226", new CubeCommand())).toBe(
    "3+92504856803176"
  );
  expect(
    calculatorUseCommand("48464+8-(-0.8762654741655415", new CubeCommand())
  ).toBe("48464+8-(-0.67283271674081");
  expect(calculatorUseCommand("3+311121155444321", new CubeCommand())).toBe(
    "3+3.0115399524142e+43"
  );
  expect(calculatorUseCommand("3", new CubeCommand())).toBe("27");
});
test("CubeRootCommand", () => {
  expect(calculatorUseCommand("27", new CubeRootCommand())).toBe("3");
  expect(calculatorUseCommand("5.2145", new CubeRootCommand())).toBe(
    "1.7340870325134"
  );
  expect(calculatorUseCommand("3468465422135", new CubeRootCommand())).toBe(
    "15137.208389094"
  );
  expect(calculatorUseCommand("1.50964918324e+23", new CubeRootCommand())).toBe(
    "53246616.00002"
  );
  expect(calculatorUseCommand("92504856803176", new CubeRootCommand())).toBe(
    "45226"
  );
  expect(calculatorUseCommand("-92504856803176", new CubeRootCommand())).toBe(
    "Неверный ввод"
  );
});
test("testing Fact", () => {
  expect(calculatorUseCommand("7", new FactCommand())).toBe("5040");
  expect(calculatorUseCommand("73.6", new FactCommand())).toBe(
    "3.3078854415193856e+107"
  );
  expect(calculatorUseCommand("73.4", new FactCommand())).toBe(
    "4.4701154615126834e+105"
  );
  expect(calculatorUseCommand("73", new FactCommand())).toBe(
    "4.4701154615126834e+105"
  );
  expect(calculatorUseCommand("-7", new FactCommand())).toBe("Неверный ввод");
  expect(calculatorUseCommand("7+7", new FactCommand())).toBe("7+5040");
});
test("testing 1/x", () => {
  expect(calculatorUseCommand("4652.2346498-0.01", new OneDivXCommand())).toBe(
    "4652.2346498-100"
  );
  expect(calculatorUseCommand("4652.2346498*-0.01", new OneDivXCommand())).toBe(
    "4652.2346498*-100"
  );
  expect(calculatorUseCommand("4652.2346498-58786", new OneDivXCommand())).toBe(
    "4652.2346498-0.000017010852924165616"
  );
  expect(calculatorUseCommand("0.0654166", new OneDivXCommand())).toBe(
    "15.286639782562835"
  );
});

test("testing %", () => {
  expect(calculatorUseCommand("20", new PercCommand())).toBe(
    "You need to write some action"
  );
  expect(calculatorUseCommand("20+20(20", new PercCommand())).toBe(
    "You need to write some action"
  );
  expect(calculatorUseCommand("20+", new PercCommand())).toBe(
    "You need to write some action"
  );
  expect(calculatorUseCommand("20+50", new PercCommand())).toBe("20+10");
  expect(calculatorUseCommand("20*50", new PercCommand())).toBe("20*10");
  expect(calculatorUseCommand("20*-50", new PercCommand())).toBe("20*-10");
});
test("testing squareCommand", () => {
  expect(calculatorUseCommand("2", new SquareCommand())).toBe("4");
  expect(calculatorUseCommand("2.458", new SquareCommand())).toBe("6.041764");
  expect(calculatorUseCommand("-2", new SquareCommand())).toBe("4");
  expect(calculatorUseCommand("-2.458", new SquareCommand())).toBe("6.041764");
  expect(calculatorUseCommand("2+65.64", new SquareCommand())).toBe(
    "2+4308.6096"
  );
  expect(calculatorUseCommand("2-65.64", new SquareCommand())).toBe(
    "2+4308.6096"
  );
  expect(calculatorUseCommand("2-65.64-", new SquareCommand())).toBe(
    "Выполнить действие невозможно"
  );
});
test("testing squareRootCommand", () => {
  expect(calculatorUseCommand("4", new SquareRootCommand())).toBe("2");
  expect(calculatorUseCommand("2", new SquareRootCommand())).toBe(
    "1.4142135623731"
  );
  expect(calculatorUseCommand("121", new SquareRootCommand())).toBe("11");
  expect(calculatorUseCommand("6.041764", new SquareRootCommand())).toBe(
    "2.458"
  );
  expect(calculatorUseCommand("4308.6096", new SquareRootCommand())).toBe(
    "65.64"
  );
  expect(calculatorUseCommand("-4", new SquareRootCommand())).toBe(
    "Неверный ввод"
  );
  expect(calculatorUseCommand("-4*2", new SquareRootCommand())).toBe(
    "-4*+1.4142135623731"
  );
});
