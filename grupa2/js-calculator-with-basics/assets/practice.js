// alert('Hello World!');

// ! VARIJABLE (promenljive)

// LET varijable
let myFirstVariable = 'This is my first variable.';

myFirstVariable = 25;

console.log(myFirstVariable);

let mySecondVariable;
mySecondVariable = 'My Second Variable';

let myVariable = 0;

myVariable = 40;

// CONST varijable
const myAge = 27;

console.log(myAge);

const myName = 'Marko';

// const someVariable = 'Petar';

// someVariable = 101;

// VAR varijable

var x = 5;

// ? DOBRA praksa u imenovanju varijabli
// 1. imenovanje varijablu camelCase formatu

let someNumber = 5;

// 2. imenovanje varijabli moze koristiti cifre
let top11 = 11;

// 3. imenovanje varijabli koristi $ ili _
let $specialVar;
let _internalValue;

// ! LOSA praksa u imenovanju varijabli
// 1. imenovanje varijabli u snake_case formatu
// const snake_case_variable = 44;

// 2. imenovanje varijabli uz cifru na pocetku
// let 7continents = 'Africa'

// 3. imenovanje varijabli u kebab-case formatu
// let my-variable = 'varijabla koju koristim';

// 4. imenovanje varijabli uz kljucnu (rezervisanu) rec
// let const = 5;
// const let = 11;


// ! OPERATORI
// = + - * / % **

let myNumberVariable = 20;

myNumberVariable = myNumberVariable + 50;

console.log(myNumberVariable);

let number = -5;

let number1 = number * number;

console.log(number1);

let squareNumber = number**3; // eksponencijalni operator

console.log(squareNumber);

let number2 = (number1 + 50) * 3 + 13;

console.log(number2);

// ! Zadaci za vezbu
// 1.
/* 
    * kreirati varijable proizvoljnog naziva u dozvoljenom camelCase formatu (3 do 4)
    * kreirati ih uz kombinaciju LET i CONST rezervisanih reci
    * ispisati vrednost kreiranih varijabli uz console.log() funkciju
    * ispratiti gresku koja se desava kad pokusate redefinisanje CONST varijable
*/

let firstVar = 55;
const personName = 'Petar';
let secondVar = firstVar + 20;

// personName = 'Nikola'; ! NE MOZE

console.log(firstVar);
console.log(secondVar);
console.log(personName);

// 2.
/*
    * Napraviti 2 varijable uz LET ili CONST (sami smislite koju je bolje iskoristiti)
    * Prva varijabla neka cuva rezultat neke matematicke operacije po izboru (slozenije)
    * Druga varijabla neka cuva opis matematicke operacije koju ste napisali (prikazati operaciju u string formatu)
*/

let a = 20;
let operation;

const myOperation = a + 25 - 40 - a / 2 + 5 * 3;
operationStr = 'a + 25 - 40 - a / 2 + 5 * 3';

console.log(myOperation);
console.log(operationStr);
