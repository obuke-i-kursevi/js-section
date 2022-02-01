const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

// funkcija koja u number konvertuje string dobijen iz input polja
function getUserNumberInput() {
    return parseInt(userInput.value); // '55' --> 55
}

// funkcija koja ispisuje log matematicke operacije
function writeOutput(operator, resultBeforeCalculation, calculationNumber) {
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
    outputResult(currentResult, calculationDescription);
}

// funkcija koja u niz logOfOperations dodaje izvrsene operacije na kalkulatoru
// 'ADDING' 20 50 70
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

// ! stara verzija pre refaktorisanja
// // sabiranje
// function add() {
//     const enteredNumber = getUserNumberInput(); // 55
//     const initialResult = currentResult; // za pocetak 0
//     // currentResult = currentResult + enteredNumber; // npr 0 + 55
//     currentResult += enteredNumber; // 55
//     writeOutput('+', initialResult, enteredNumber);
//     writeToLog('ADDING', initialResult, enteredNumber, currentResult);
// }

// // oduzimanje
// function subtract() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult -= enteredNumber;
//     writeOutput('-', initialResult, enteredNumber);
//     writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
// }

// // mnozenje
// function multiply() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult *= enteredNumber; 
//     writeOutput('*', initialResult, enteredNumber);
//     writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
// }

// // deljenje
// function divide() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult /= enteredNumber; 
//     writeOutput('/', initialResult, enteredNumber);
//     writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
// }

// ! nova verzija nakon refaktorisanja

function mathOperation(operationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operationSign = '';
    // ! 1. slucaj sa koriscenjem switch-case blokova
    switch(operationType) {
        case 'PLUS':
            currentResult += enteredNumber;
            operationSign = '+';
            break;
        case 'SUBTRACT':
            currentResult -= enteredNumber;
            operationSign = '-';
            break;
        case 'MULTIPLY':
            currentResult *= enteredNumber;
            operationSign = '*';
            break;
        case 'DIVIDE':
            currentResult /= enteredNumber;
            operationSign = '/';
            break;
    }
    // ! 2. slucaj sa koriscenjem IF - ELSE blokova
    // if(operationType === 'PLUS') {
    //     currentResult += enteredNumber;
    //     operationSign = '+';
    // } else if(operationType === 'SUBTRACT') {
    //     currentResult -= enteredNumber;
    //     operationSign = '-';
    // } else if(operationType === 'MULTIPLY') {
    //     currentResult *= enteredNumber;
    //     operationSign = '*';
    // } else {
    //     currentResult /= enteredNumber;
    //     operationSign = '/';
    // }
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