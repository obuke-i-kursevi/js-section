const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

function getUserNumberInput() {
    return parseInt(userInput.value); // '55' --> 55
}

function writeOutput(operator, resultBeforeCalculation, calculationNumber) {
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`; // (+ , 10, 20) => 10 + 20
    outputResult(currentResult, calculationDescription);
}

function writeToLog(typeOfOperation, previousResult, operationNumber, newResult) {
    const logEntry = {
        operation: typeOfOperation,
        previousResult: previousResult,
        operationNumber: operationNumber,
        newResult: newResult
    }
    logOfOperations.push(logEntry);
    console.log(logOfOperations);
}


// ! STARA VERZIJA KODA, pre refaktorisanja
/*
// sabiranje
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; // 0 + 55 = 55
    writeOutput('+', initialResult, enteredNumber);
    writeToLog('ADDING', initialResult, enteredNumber, currentResult);
}

// TODO 4. cas domaci (18.01.2022.)

// oduzimanje
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// mnozenje
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber; 
    writeOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// deljenje
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    writeOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

*/

// ! NOVA VERZIJA KODA, nakon refaktorisanja

function mathOperation(operationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operationSign = '';
    if(operationType === 'PLUS') {
        currentResult += enteredNumber;
        operationSign = '+';
    } else if(operationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operationSign = '-';
    } else if(operationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operationSign = '*';
    } else {
        currentResult /= enteredNumber;
        operationSign = '/';
    }
    writeOutput(operationSign, initialResult, enteredNumber);
    writeToLog(operationType, initialResult, enteredNumber, currentResult);
}

function add() {
    mathOperation('PLUS');
}

function subtract() {
    mathOperation('SUBTRACT');
}

function multiply() {
    mathOperation('MULTIPLY');
}

function divide() {
    mathOperation('DIVIDE');
}

// clear
function clear() {
    currentResult = 0;
    userInput.value = 0;
    logOfOperations = [];
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clear);