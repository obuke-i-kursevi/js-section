// ! 1. cas (24.11.2021.)

console.log('--------------------- 1. cas ---------------------');

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

// TODO  -->  Zadaci za vezbu
// ! 1. zadatak
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

// ! 2. zadatak
/*
    * Napraviti 2 varijable uz LET ili CONST (sami smislite koju je bolje iskoristiti)
    * Prva varijabla neka cuva rezultat neke matematicke operacije po izboru (slozenije)
    * Druga varijabla neka cuva opis matematicke operacije koju ste napisali (prikazati operaciju u string formatu)
*/

let a = 20;
let operation;

const myOperation = a + 25 - 40 - a / 2 + 5 * 3;
let operationStr = 'a + 25 - 40 - a / 2 + 5 * 3';

console.log(myOperation);
console.log(operationStr);


// ! 2. cas (29.11.2021.)

console.log('--------------------- 2. cas ---------------------');

operationStr = a + ' + 25 - 40 - ' + a + ' / 2 + 5 * 3';

// Zadatak za vezbu

let firstTaskOperation = 'a + (a * 3) - (10 + a)';

firstTaskOperation = a + ' + (' + a + ' * 3) - (10 + ' + a + ')';

console.log(firstTaskOperation);

let test1Var = 'Testing JavaScript';

let copyOfTest1Var = test1Var;

console.log(test1Var);
console.log(copyOfTest1Var);

test1Var = 1050;

console.log(test1Var);
console.log(copyOfTest1Var);

let myValue = 50;

let temp = myValue;

myValue = 'bilo sta bukvalno';

let test2Var = 'a + (a * 3) - (10 + a)';

test2Var = "a + (a * 3) - (10 + a)";

let templateLiteralVariable = `${a} + (${a} * 3) - (10 + ${a})`;

console.log(firstTaskOperation);
console.log(templateLiteralVariable);

// Zadatak za vezbu

let test3Var = 'a - (15*a) / a';
test3Var = `${a} - (15*${a}) / ${a}`;

console.log(test3Var);

let goToNewLineString = 'Go to new line \nfrom this point of string';

console.log(goToNewLineString);


// ! Funkcije

function helloWorld(planetName) {
    alert(`Hello planet ${planetName}`);
}

// helloWorld('Jupiter');

// helloWorld('Earth');

// helloWorld('Mars');

const result = 'Some random variable';

function add(number1, number2) {
    const result = number1 + number2;
    console.log(`My result is: ${result}`);
    return `Result of add function is ${result}`;
    // return `Result of add function is ${number1+number2}`;
}

// console.log(result);

console.log(add(30,50));

console.log(add(7000, 25000));

let test4Var;

test4Var = 'Some random text';

const myConstVariable = 55;

console.log(test4Var);

function printMyName() {
    console.log(myNameVar);
}

let myNameVar = 'Marko Bojkic';

printMyName();

// TODO   ->    DOMACI zadaci sa drugog casa

// 1. zadatak
/**
 *  Kreirati dve varijable. Jedna neka bude tipa number i neka se zove userInput (na koju god vrednost je postavite) i druga neka se naziva      currentResult i nemojte je postaviti ni na kakvu vrednost.
    Postavite currentResult varijablu na vrednost userInput plus neki broj (npr 20).
    U naredne 3 linije koda, varijablu currentResult promenite u svakoj narednoj liniji koda operacijama oduzimanja, mnozenja i deljenja nad tom currentResult varijablom i svaki put ispisati vrednost varijable na konzoli u formatu koji zelite s tim da pre toga stoji prefiks `Current result is: `
    Na kraju varijablu currentResult ispisati u okviru alert prozora, a userInput varijablu ispisati samo na konzoli.
 * 
*/

let userInput = 120;
let currentResult;

currentResult = userInput + 20;

currentResult = currentResult - 10;

console.log(`Current result is: ${currentResult}`);

currentResult = currentResult * 5;

console.log(`Current result is: ${currentResult}`);

currentResult = currentResult / 2;

console.log(`Current result is: ${currentResult}`);

alert(`Current result is: ${currentResult}`);

console.log(`User input value is: ${userInput}`);

// 2. zadatak
/** 
 * Kreirati funkciju square() koja ce broj prosledjen kao parametar podici na kvadrat.
   Rezultat vratiti u formatu ‘Result is: broj’.
   Funkciji kao argument proslediti odredjeni broj (npr 5).
*/

function squareFunc(number) {
    const result = number**2;
    return `Result is: ${result}`;
}

console.log(squareFunc(5));