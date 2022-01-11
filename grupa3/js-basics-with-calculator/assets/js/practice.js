// ! 1. cas (30.12.2021)

console.log('-------------------- 1. cas (30.12.2021) ---------------------------');

// alert('Calculator Test');

/**
 * Neki komentar
 * u vise
 * linija
 * koda
 */

// komentar u jednoj liniji koda

// ! Varijable

let testVariable = 'Test Variable';

// let testVariable = 25; // ! nevalidno

testVariable = 25;


const someFixedNumber = 100;

// someFixedNumber = 200; // ! TypeError: Assignment to constant variable.



let someVariable;  // * VALIDAN kod

someVariable = 770;


// const someFixedValue; // ! SyntaxError: Missing initializer in const declaration

// someFixedValue = 111;


console.log(someVariable);


// ! Pravila kod imenovanja varijabli

// * DOBRA praksa:

let ourFirstVariable = 55;

let top10Collection = 10;

let $specialVar;
let _specialVar2;

// ! LOSA praksa:

// let our_first_variable; // ! LOSA praksa
// let our-first-variable; // ! LOSA praksa
// let 10TopCollection; // ! LOSA praksa
// let const; // ! LOSA praksa



// Vrednost je 770

console.log(`Vrednost je ${ourFirstVariable}`); // Vrednost je 55


/**
 * ZADATAK ZA VEZBU:
 * 
   1. U practice.js fajlu kreirati varijable proizvoljnog naziva uz svaku od mogucih naming sintaksi i 
        dodeliti im ili neki string ili number vrednost (npr. let myTop1 = ‘Audi A6’ ili npr. let age = ‘27’).
   2. Varijable kreirati i uz let i const, proizvoljnim rasporedom.
   3. Pokusati redefinisanje vrednosti svake od varijabli (i let i const). 
   4. Ispisati vrednosti varijabli na konzoli uz console.log() funkciju i sintaksu koju smo radili na casu (`${myVar}`).
   5. Obratiti paznju na pokusaj redefiinisanja CONST varijabli i gresku koja se dobija u konzoli Web Browser-a.
 */


let carName = 'Mercedes';

carName = 'Audi';

const numberOfCars = 45;

// numberOfCars = 90;

let myTop1 = 'Cristiano Ronaldo';

let num = 11;

console.log(`My favourite car is ${carName}`);

console.log(`Final number of cars is ${numberOfCars}`);


// ! OPERATORI

/**
 * operator dodele vrednosti (=)
 * sabiranje (+)
 * oduzimanje (-)
 * mnozenje (*)
 * deljenje (/)
 * eksponencijalni operator (**)
 * remainder operator (%)
 */

let number1 = 20;

number1 = number1 + 50; // number1 = 20 + 50 --> number1 = 70

console.log(number1); // 70

number1 = number1 + 50 * 3 - 16;

console.log(number1); // 204

number1 = number1 / 2;

console.log(number1); // 102

// TIPOVI NUMBER tipa podatka:
    // INTEGER --> -44, 33, 0, 202
    // FLOATS --> -101.23, 0.55, 77.54312412

// STRINGS --> `Hello World` , 'Hello World', "Hello World"



/**ZADATAK ZA VEZBU:
 * 
 * 1. Napraviti dve varijable.
   2. Smisleno odabrati LET ili CONST.
   3. Prva varijabla neka cuva rezultat neke matematicke operacije po izboru.
   4. Druga varijabla neka opise matematicku operaciju koju ste za prvu varijablu koristili (u STRING formatu ispisete samu operaciju).
*/


let result = 6;

let description;

result = (result / 2) + (10 - result) * 3;

console.log(`Rezultat je ${result}`);

description = `(4 / 2) + (10 - 4) * 3`;

console.log(description);



// ! 2. cas (11.01.2022.)

console.log(`---------------- 2. cas (11.01.2022.) -------------------`);

let dynamicDescription = '(' + result + ' / 2) + (10 - ' + result + ') * 3';

console.log(dynamicDescription);


// TODO Zadatak za vezbu:

let testDesc = 'result + (result * 3) - (10 + result)';

let dynamicTestDesc = result + ' + (' + result + ' * 3) - (10 + ' + result + ')';

console.log(dynamicTestDesc);

let anotherDesc = 'result * 5 - 150 / result + result';

let dynamicAnotherDesc = result + " * 5 - 150 / " + result + " + " + result;

console.log(dynamicAnotherDesc);


// ! Moja preporuka za koriscenjem --> Template Literals

let someDesc = 'result + (result * 3) - (10 + result)';

let dynamicSomeDesc = `${result} + (${result} * 3) - (10 + ${result})`;

console.log(dynamicSomeDesc);

let someDesc1 = 'result / result + (10*result) - 5-result';

let dynamicSomeDesc1 = `${result} / ${result} + (10 * ${result}) - 5 - ${result}`;

console.log(dynamicSomeDesc1);


let goToNewLine = `Some string going \nto new line.`;

console.log(goToNewLine);


/**
 * 1. Kreirati dve varijable. Jedna neka bude tipa number i neka se zove userInput (na koju god vrednost je postavite) i 
 *    druga neka se naziva resultNew i nemojte je postaviti ni na kakvu vrednost.
   2. Postavite resultNew varijablu na vrednost userInput plus neki broj (npr 20).
   3. U naredne 3 linije koda, varijablu resultNew promenite u svakoj narednoj liniji koda operacijama oduzimanja, 
      mnozenja i deljenja nad tom resultNew varijablom i svaki put ispisati vrednost varijable na konzoli u formatu koji 
      zelite s tim da pre toga stoji String `Current result is: `
   4. Na kraju varijablu resultNew ispisati u okviru alert prozora, a userInput varijablu ispisati samo na konzoli.
*/


let userInput = 10;
let resultNew;

resultNew = userInput + 20;

resultNew = resultNew - 10;

console.log(`Current result is ${resultNew}`);

resultNew = resultNew * 5;

console.log(`Current result is ${resultNew}`);

resultNew = resultNew / 2;

console.log(`Current result is ${resultNew}`);

alert(resultNew);

console.log(userInput);



// ! FUNKCIJE

// 0..n parametara
function sayHi(name) {
  alert(`Welcome ${name}`);
}

sayHi('Petar Petrovic');

// sayHi('Marko Markovic');

// sayHi('Milan Milanovic');


function add(number1, number2) {
  const result = number1 + number2;
  return `Result of adding two numbers is ${result}`;
}

console.log(add(50,60));

console.log(add(90,70));

console.log(add(100,50));


function square(number) {
  const result = number**2;
  return `Result is ${result}`;
}

console.log(square(2)); // 4

console.log(square(5)); // 25



