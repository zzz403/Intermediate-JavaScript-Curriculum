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
        // Students need to complete the loop logic to generate the table
        for (let i = 1; i <= 10; i++) {
            // Append each multiplication result to the output string
            output += `${num} x ${i} = ${num * i}\n`;
        }
    }
    
    // Display result
    outputArea.textContent = output;
}

// Event listener for button click
generateButton.addEventListener("click", generateTable);
