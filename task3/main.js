// Add value to display
function addValue(value) {
    document.getElementById("display").value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Calculate expression
function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}