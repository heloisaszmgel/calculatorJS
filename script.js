function appendToDisplay(value) {
    document.getElementById('display').value += value;
    }
// responsible for appending the clicked button's value to the display/input field.

function clearDisplay() {
    document.getElementById('display').value = '';
    }

// clears the display/input field. it sets the new value to an empty string.
    
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
// responsible for evaluating the expression entered in the display/input field and displaying the result.