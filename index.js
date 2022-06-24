// Basic Arithmetic Calculator

const firstNumber = parseFloat(prompt("Input first number"));
const opertators = ["+", "-","*", "/"]
const userOperator = prompt("choose an operator" + " " + opertators)
const secondNumber = parseFloat(prompt("Input second number"));

const result1 = firstNumber + secondNumber
const result2 = firstNumber - secondNumber
const result3 = firstNumber * secondNumber
const result4 = firstNumber / secondNumber

if (userOperator == "+") {
    alert(result1);
} else if (userOperator == "-") {
    alert(result2);
} else if (userOperator == "*") {
    alert(result3);
} else if (userOperator == "/") {
    alert(result4);
} else {
    alert("Invalid Operator")
}