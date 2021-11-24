// ! VARIJABLE (promenljive)

// alert('Hello World!');

// var 

// let varijable

let firstString = 'My First String';

let mySecondVariable;

mySecondVariable = 'Marko';

firstString = 25;

console.log(firstString);

// const varijable

const myAge = 27;

// const myName;

// myName = 'Petar';

// myAge = 57;

console.log(myAge);

// * Potencijalno pitanje na intervju -> LET vs CONST

// ? Dobra praksa u pisanju JS-a

// 1. imenovanje varijabli u camelCase formatu
let myFirstCamelCaseVariable = 5;

// 2. mozete u imenovanju koristiti i brojeve
let top11 = 11;

// 3. mozete imenovati varijable sa $ ili _ prefiksom
let $specialVar;
let _internalValue;

// ! Losa praksa u pisanju JS-a

// 1. imenovanje varijabli uz odvajanje reci u snake_case formatu
// let not_good_idea;
// let notGoodIdea;

// 2. imenovanje varijabli uz cifru na pocetku naziva
// let 7continents;

// 3. imenovnaje varijabli u kebab-case formatu
// let my-variable;

// 4. imenovanje varijable uz koriscene kljucnih (rezervisanih) reci
// let const;
// const let;

// ! OPERATORI

// + - * / % **

let someNumber = 20;

someNumber = someNumber + 50;

console.log(someNumber);

let square = 2**2;

console.log(square);

someNumber = (someNumber + 50) * 3 + 13;

console.log(someNumber);

// ! ZADACI ZA VEZBU
// 1. 
/*
    kreirati varijable proizvoljnog naziva u dozvoljenom camelCase formatu
    kreirati ih uz kombinaciju let i const
    ispisite vrednost varijabli uz console.log() funkciju
    pokusajte da redefinisete CONST tip varijable
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
    Napraviti 2 varijable uz let ili const (sami smislite koju cete iskoristiti)
    Prva varijabla neka sacuva rezultat neke matematicke operacije (slozenije)
    Druga varijabla neka sacuva opis matematicke operacije koju ste napisali
        -> '20 + 30 - 20 / 4' primer
*/

let a = 20;
let operation;

const myOperation = a + 25 - 40 - a / 2 + 5 * 3;
operationStr = 'a + 25 - 40 - a / 2 + 5 * 3';

console.log(myOperation);
console.log(operationStr);