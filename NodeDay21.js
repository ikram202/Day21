// Function to add two numbers
function ajouter(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function soustraire(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiplier(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function diviser(num1, num2) {
    if (num2 === 0) {
        return "Impossible de diviser par zéro";
    }
    return num1 / num2;
}

// Example usage
console.log("Addition:", ajouter(4, 8));
console.log("Subtraction:", soustraire(28, 9));
console.log("Multiplication:", multiplier(4, 7));
console.log("Division:", diviser(30, 6));
console.log("Division by zero:", diviser(10, 0));
