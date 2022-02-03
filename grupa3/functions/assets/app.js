// ! 9. cas (03.02.2022.)

console.log('--------------- 9. cas (03.02.2022.) ---------------');

const person = {
    name: 'Marko Markovic',
    sayHello: function () {
        console.log('Good morning!'); // ! ovo je sada METODA objekta person
    }
}

const sara = {
    name: 'Sara Saric',
    age: 25
}

person.sayHello();


// ! Funkcije su objekti!

console.log(typeof person.sayHello); // function

console.dir(person.sayHello);



// * FUNCTION DECLARATION:

function mojaFunkcija(x) {
    return `Kvadratni koren od ${x} je ${Math.sqrt(x)}`;
}

console.log(mojaFunkcija(25));


// ili na primer:

function kvadrat(x) {
    return `Number ${x} * ${x} = ${x**2}`;
}

console.log(kvadrat(5));



// * FUNCTION EXPRESSION ==> smestanje funkcije u varijablu

const myFunc = function(x,y) {
    return x*y;
}

console.log(`Result is ${myFunc(5,3)}`);


// ili na primer:

const printPersonName = function(osoba) {
    const personName = osoba.name;
    return `Person is ${personName}`;
}

console.log(printPersonName(person));
console.log(printPersonName(sara));




// ! RAZLIKA IZMEDJU FUNCTION EXPRESSION i FUNCTION DECLARATION zapisa funkcija je u HOISTING-u:

// * PRIMER FUNCTION DECLARATION sintakse (uspeva hoisting)

console.log(`Random number is ${getRandomNumber()}`);

function getRandomNumber() {
    return Math.random();
}


// * PRIMER FUNCTION EXPRESSION sintakse (ne uspeva hoisting)

// console.log(getCurrentYear()); // ! Cannot access 'getCurrentYear' before initialization

const getCurrentYear = function() {
    const date = new Date();
    return date.getFullYear();
}

console.log(getCurrentYear()); // 2022




// ! ANONIMNE FUNKCIJE

// * primer anonimne funkcije:

setTimeout(function() {
    console.log('Testing anonymous function!');   // ! setTimeout ispisuje vrednost SAMO jedanput
}, 5000);

// nasuprot tome:

// * zakomentarisano da ne bi ispisivalo vrednost na svake 3 sekunde
// setInterval(function() {
//     console.log('Testing anonymous function WITH setINTERVAL!');  // ! setInterval ispisuje vrednost konstantno u odnosu na tajmer
// }, 3000);


// ili na primer:

const btnClickMe = document.getElementById('btnClickMe');

// btnClickMe.addEventListener('click', function() {
//     console.log('Button CLICK ME clicked!');
// });


// * primer greske:

// btnClickMe.addEventListener('click', function() {
//     console.log('Button CLICK ME clicked!', mojaVarijabla);
// });

// let mojaVarijabla = 100;

btnClickMe.addEventListener('click', function btnClickHandler() {
    console.log('Button CLICK ME clicked!', mojaVarijabla);
});





// ! ARROW FUNKCIJE

// primer:

const myFirstArrowFunc = (x,y) => {
    return x-y;
}

console.log(`Subtracting result: ${myFirstArrowFunc(77,17)}`); // Subtracting result: 60


// ? Dodatne informacije o arrow funkcijama:

// * 1.

const mySecondArrowFunc = (x,y) => x*y;

console.log(`Multiply result: ${mySecondArrowFunc(5,4)}`); // Multiply result: 20


// * 2.

const arrowFuncNoParams = () => {
    console.log(`I've got no params!`);
}

arrowFuncNoParams(); // I've got no params!

const arrowFuncNoParamsOneRow = () => console.log(`No params for me!`);

arrowFuncNoParamsOneRow(); // No params for me!


// * 3.

const arrowFuncOneParam = (z) => {
    return z**3;
}

console.log(arrowFuncOneParam(3)); // 27


// * krace:

const arrowFuncOneParam2 = (z) => z**3;

console.log(arrowFuncOneParam2(5)); // 125

// * jos krace:

const arrowFuncOneParam3 = z => z**3;

console.log(arrowFuncOneParam3(4)); // 64


// TODO 9. cas domaci (03.02.2022.)

/*
    1. Prepraviti sledecu funkciju:
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. U istu funkciju (sumUp) za parametar b dodati default vrednost, koja ce biti koriscena u slucaju da se vrednost
 *      ne prosledi (npr 10).
 * 
 *  3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  4. Kreirati po jedan event za ta oba button-a.
 *  5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
 *  6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
*/


// * 1.
const sumUp = (a,b) => a + b;

console.log(`Result of 1st task: ${sumUp(4,3)}`); // Result of 1st task: 7

// * 2.
const sumUp1 = (a,b=10) => a+b;

console.log(`Without default param ${sumUp1(50,100)}`); // Without default param 150
console.log(`With default param ${sumUp1(50)}`); // With default param 60


// * 4.
let counter = 0;
let stopCounting = false;
const btnCounter = document.getElementById('startCount');
const btnStop = document.getElementById('stopCount');

btnCounter.addEventListener('click', function increaseCounter() {
    setInterval(function() {
        if(!stopCounting) {
            counter++;
            console.log(`Counter = ${counter}`); 
        }
    }, 1000);
});

btnStop.addEventListener('click', function stop() {
    stopCounting = true;
});