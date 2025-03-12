// Start Code for Loop Project: Multiplication Table Generator

// Selecting elements from the DOM
const numberInput = document.getElementById("number");
const generateButton = document.getElementById("generate");
const outputArea = document.getElementById("output");

// Function to generate multiplication table
function generateTable() {
    const num = parseInt(numberInput.value);
    let output = "";

    if (isNaN(num)) {
        output = "Please enter a valid number";
    } else {
        // TODO: Students need to complete the loop logic to generate the table
        // Loop through numbers from 1 to 10
        // eg. 
        // 5 x 1 = 5
        // 5 x 2 = 10
        // ...
    }
    
    // Display result
    outputArea.textContent = output;
}

// Event listener for button click
generateButton.addEventListener("click", generateTable);
