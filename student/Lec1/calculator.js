// Start Code for Simple Calculator

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

    //Students need to complete the switch-case logic below
    switch (operator) {
        case '+':
            // TODO: Implement addition
            break;
        case '-':
            // TODO: Implement subtraction
            break;
        case '*':
            // TODO: Implement multiplication
            break;
        case '/':
            // TODO: Implement division (handle divide by zero case)
            break;
        default:
            result = "Invalid operator";
    }

    // Display result
    resultLabel.textContent = "Result: " + result;
}

// Event listeners for button clicks
addButton.addEventListener("click", () => calculate("+"));
subtractButton.addEventListener("click", () => calculate("-"));
multiplyButton.addEventListener("click", () => calculate("*"));
divideButton.addEventListener("click", () => calculate("/"));