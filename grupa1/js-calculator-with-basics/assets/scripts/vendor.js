const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const divideBtn = document.getElementById('btn-divide');
const multiplyBtn = document.getElementById('btn-multiply');
const clearBtn = document.getElementById('btn-clear');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, description) {
    currentCalculationOutput.textContent = description;
    currentResultOutput.textContent = result;
}
