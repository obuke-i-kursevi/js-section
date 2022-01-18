const userInput = document.getElementById('input-number');
const multiplyBtn = document.getElementById('btn-multiply');
const subtractBtn = document.getElementById('btn-subtract');
const divideBtn = document.getElementById('btn-divide');
const addBtn = document.getElementById('btn-add');
const clearBtn = document.getElementById('btn-clear');

const currentResultOutput = document.getElementById('current-calculation');
const currentCalculationOutput = document.getElementById('current-result');

function outputResult(result, description) {
    currentCalculationOutput.textContent = result;
    currentResultOutput.textContent = description;
}