// ! REKAPITULACIJA funkcija

// ! FUNCTION DECLARATION

function saberiDvaBroja(num1, num2) {
    return num1+num2;
}

console.log(saberiDvaBroja(30,50)); // 80


// ! FUNKCIJE MOGU BITI PROPERTY-iji U OKVIRU OBJEKATA

const student = {
    name: 'Marko',  // key - value par
    lastName: 'Petrovic',
    age: 22,
    sayHello: function(pozdrav) {
        console.log(`${pozdrav}`);  // ovo je sada metoda
    }
}

student.sayHello('Dobar dan svima!'); 



// ! FUNKCIJE SU OBJEKTI!

console.log(typeof student.sayHello); // function

console.dir(student.sayHello);




// ! FUNCTION EXPRESSION --> Smestanje funkcije u varijablu

const myName = 'Marko Bojkic';

const myFunc = function(x,y) {
    return x*y;
}


console.log(`Result is ${myFunc(4,3)}`); // 12


const squareNumberFunc = function(number) {
    return number**2;
}

console.log(`Result of square function is ${squareNumberFunc(5)}`); // 25

console.log(`Result of square function is ${squareNumberFunc(10)}`); // 100
console.log(`Result of square function is ${squareNumberFunc(2)}`); // 4
console.log(`Result of square function is ${squareNumberFunc(1)}`); // 1
console.log(`Result of square function is ${squareNumberFunc(12)}`); // 144


// RAZLIKA JE U HOISTING-u



function getRandomNumber() {
    return Math.random();
}


const getCurrentYear = function() {
    const date = new Date();
    return date.getFullYear();
}

console.log(`Year is ${getCurrentYear()}`); // 2021




// ! ANONIMNE FUNKCIJE

// setTimeout --> funkcija koja se poziva SAMO jednom nakon nekog intervala vremena

setTimeout(function() {
    console.log('Printed result of setTimeout function');
}, 3000);


// setInterval --> funkcija koja se poziva NA SVAKIH (u ovom slucaju 2 sekunde)

setInterval(function() {
    console.log('Printed result of setInterval function');
}, 2000);


const btnTest = document.getElementById('btnTest');

// primer anonimne funkcije
btnTest.addEventListener('click', function() {
    console.log('Test Button has been clicked!', someVar);
});

// primer ne-anonimne funkcije
btnTest.addEventListener('click', function testBtnFunc() {
    console.log('Test Button has been clicked!', someVar);
});




// ! ARROW FUNKCIJE

const myArrowFunc = (k,j) => {
    return k/j;
}

console.log(`First arrow function result is ${myArrowFunc(40,2)}`); // 20

function myArrowFuncOLD(k,j) {
    return k/j;
}


// arrow funkcija zapisana krace:

const myArrowFuncShorter = (k,j) => k/j;

console.log(`Shorter version of arrow func result is ${myArrowFuncShorter(6,3)}`); // 2


// arrow funkcija BEZ parametara

const myArrowFuncWithoutParams = () => {
    console.log(`Arrow function without params example!`);
}

myArrowFuncWithoutParams(); // Arrow function without params example!

const myArrowFuncWithoutParamsShorter = () => console.log(`Arrow function without params example (SHORTER)!`);

myArrowFuncWithoutParamsShorter(); // Arrow function without params example (SHORTER)!


// arrow funkcija sa SAMO JEDNIM parametrom

// const arrowFuncWithOneParam = (nekiBroj) => {
//     return nekiBroj**2;
// }

// const arrowFuncWithOneParam = (nekiBroj) => nekiBroj**2;

const arrowFuncWithOneParam = nekiBroj => nekiBroj**2;

console.log(arrowFuncWithOneParam(3)); // 9

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