## Application code

---

### In this folder you can see:

- [A template to end html file](./index.html)
- [Application login file](./index.js)
- [File with test cases](./Calculator.test.js)
- The folder [controller](./controller) includes files with [commands](./controller/commands.js) and [function for commands](./controller/commands.js).
  ```js
  //To create yor command
  new Command(yourFunc, Type, symbol);
  //Type can be
  types = {
    calcString: "calculate string",
    calcAction: "calculate action",
    calcPercent: "calculate percent",
  };
  //The symbol means your operation
  ```
- The folder [model](./model) includes [file](./model/Calculator.js) containing a class for creating different calculators. To create an instance of the Сalculator, you need to write
  ```js
  //Creating a new instanse
  const yourName = new Calculator();
  ```
- The folder [view](./view) includes [file](./view/button.js) that instantiates a button with a click listener,

```js
//To create button
new Button(
      value,
      type,//"action","number","bracketOpen","bracketClose","memory","undo"
      calculatorInstance,
      command,
      elementWhereTheValueIsInserted
    ),
```
