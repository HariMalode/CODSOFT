function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = Number.isNaN(result) ? 'Error' : result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
