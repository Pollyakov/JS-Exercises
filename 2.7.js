// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation

const basicMath = (operation, a, b) => {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return "Please enter only the next operstions signs: + - / * ";
  }
};
let k = basicMath("+", 9, 5);
console.log(k);
console.log(basicMath("-", 8, 4));
