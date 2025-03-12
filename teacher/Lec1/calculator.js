// Simple Calculator in JavaScript (Modern JS Syntax)

// Selecting elements from the DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultLabel = document.getElementById("result");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// Function to perform calculations
function calculate(operator) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operator";
        }
    }
    resultLabel.textContent = "Result: " + result;
}

// Event listeners for button clicks
addButton.addEventListener("click", () => calculate("+"));
subtractButton.addEventListener("click", () => calculate("-"));
multiplyButton.addEventListener("click", () => calculate("*"));
divideButton.addEventListener("click", () => calculate("/"));