// ! 9. cas (27.12.2021.)

console.log('----------------- 9. cas (27.12.2021.) --------------------');

// ! REKAPITULACIJA do sada

// ! PRIMER FUNCTION DECLARATION-a (deklaracije funkcije)

function nekaFunkcija(ime) {
    return ime;
}

console.log(nekaFunkcija('Marko Markovic'));


const student = {
    name: 'Nikola',
    lastName: 'Nikolic',
    age: 23,
    sayHello: function() {
        console.log(`Good Morning!`);  // ! ovo je sada metoda
    }
}

console.log(`Student name: ${student.name}`);
student.sayHello();


// ! FUNKCIJE SU OBJEKTI

console.log(typeof student.sayHello); // function

console.dir(student.sayHello);



// ! FUNCTION EXPRESSION --> Smestanje funkcija u varijable


const nekaVarijabla = 5;

const myFunc = function(a,b) {
    return a*b;
}

console.log(`Result is ${myFunc(5,10)}`); // 50

const printStudentName = function(someStudent) {
    const studentName = someStudent.name;
    const studentLastName = someStudent.lastName;
    return `Student ${studentName} ${studentLastName}`;
}


console.log(printStudentName(student));



// primer funkcije kroz function expression koja argument dize na kvadrat

const squareNumber = function(nekiBroj) {
    return nekiBroj**2;
}

console.log(`Neki broj na kvadrat je ${squareNumber(5)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(3)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(10)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(2)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(7)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(12)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(20)}`);


// Primer hoistinga function declaration-a


console.log(`Random decimal number is ${getRandomNumber()}`); // 0.5123213123 // ! RADI

function getRandomNumber() {
    return Math.random();
}


// Primer hoistinga function expression-a

const getCurrentYear = function() {
    const date = new Date();
    return date.getFullYear();
}

console.log(`Current year is ${getCurrentYear()}`);



// ! ANONIMNE FUNKCIJE

setTimeout(function() {
    console.log('Printed result of setTimeout function'); // ! poziva se samo JEDNOM
}, 4000);


setInterval(function() {
    console.log('Printed result of setInterval function'); // ! poziva se SVAKE 2 sekunde
}, 2000);

const btnTestRef = document.getElementById('btnTest');

btnTestRef.addEventListener('click', function printMessageAndNumber() {
    console.log(`Test button has been clicked ${x}!`);  // ! Uncaught ReferenceError: Cannot access 'x' before initialization at HTMLButtonElement.printMessageAndNumber
    let x = 22;
});





// ! ARROW FUNKCIJE

// primer:

const subtractTwoNumbers = (x,y) => {
    return x-y;
}

// ovo gore je isto kao ovo dole:

function subtractTwoNumbersOLD(x,y) {
    return x-y;
}

console.log(`Result of subtracted numbers is ${subtractTwoNumbers(10,7)}`); // 3


// * kraci nacin zapisa arrow funkcije:

const subtractTwoNumbersShorter = (x,y) => x-y;

console.log(`Result of subtracted numbers is ${subtractTwoNumbersShorter(100,22)}`); // 78


// arrow funkcija bez parametara

const arrowFuncWithoutParams = () => {
    console.log(`I called arrow function without params`);
}

arrowFuncWithoutParams(); // I called arrow function without params

const arrowFuncWithoutParamsShorter = () => console.log(`I called arrow function without params SHORTER`);

arrowFuncWithoutParamsShorter(); // I called arrow function without params SHORTER


// arrow funkcija sa jednim parametrom

const arrowSquareFunc = number => number**2;

console.log(arrowSquareFunc(6)); // 36

/**
 *  TODO 9. CAS DOMACI (koriscenje ili regularnih ili anonimnih funkcija)
 * 
 *  1. Prepraviti sledecu funkciju:
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. U istu funkciju (sumUp) za parametar b dodati default vrednost, koja ce biti koriscena u slucaju da se vrednost
 *      ne prosledi (npr 10). // ! mozete preskociti, preporuka pogledati DEFAULT parametre funkcije
 * 
 *  3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  4. Kreirati po jedan event za ta oba button-a.
 *  5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a. (HINT: pogledati setInterval funkciju)
 *  6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
**/

/**
 *  TODO 9. CAS DOMACI (koriscenje ili regularnih ili anonimnih funkcija)
 * 
 *  1. Prepraviti sledecu funkciju:
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  3. Kreirati po jedan event za ta oba button-a.
 *  4. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
 *  5. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
**/

// * 1. zadatak
const sumUp = (a,b) => a+b;

console.log(`Result is ${sumUp(7,3)}`); // 10


// * 2,3,4,5. zadatak

let counter = 0;
let stopCounting = false;
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");

btnStart.addEventListener('click', function increaseCounter() {
    setInterval(function() {
        if(!stopCounting) {
            counter++;
            console.log(`Counter is ${counter}`);
        }
        return;
    }, 1000);
});

btnStop.addEventListener('click', function stopCounter() {
    stopCounting = true;
});

