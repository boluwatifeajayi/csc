// initializations of the variables that would be used
let firstOperand = null;
let operator = null;
let display = document.getElementById("display");

// function that accepts the numbers for the arithmetic and changes the value of the form to the number in the arguments

function appendToDisplay(number) {
  display.value += number;
}

// function tto clear the whole input of the form


function clearDisplay() {
  display.value = "";
  firstOperand = null;
  operator = null;
}

// function to perform the operation login based on the aritmetic added


function performOperation(newOperator) {
  if (firstOperand == null) {
    firstOperand = display.value;
    operator = newOperator;
    display.value = "";
  } else if (operator) {
    const currentValue = display.value;
    display.value = eval(firstOperand + operator + currentValue);
    firstOperand = display.value;
    operator = newOperator;
  }
}
