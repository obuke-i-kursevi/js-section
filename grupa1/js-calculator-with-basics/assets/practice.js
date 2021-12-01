// 1. cas 

console.log('-------------------- 1. cas --------------------')

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


// 2. cas (29.11.2021.)

console.log('----------------------- 2. cas ------------------------');

let myMathOperation = (a / 10) + (a * 5) - 10;

let myMathOperationString = '(' + a + ' / 10) + (' + a + ' * 5) - 10';

console.log(myMathOperation);

console.log(myMathOperationString);

// ! 1. zadatak za vezbu
// Iskoristiti res varijablu (njenu vrednost) kako bi se prikazao string format sa tom vrednoscu

let res = 10;

let firstTaskOperation = 'res + (res*3) - (10+res)';

let firstTaskOperationString = res + ' + (' + res + '*3) - (10+' + res + ')';

console.log(firstTaskOperationString);

let copyOfFirstTaskOperation = firstTaskOperation;

console.log(firstTaskOperation);

console.log(copyOfFirstTaskOperation);

firstTaskOperation = 555;

console.log(firstTaskOperation);

console.log(copyOfFirstTaskOperation);

firstTaskOperation = 'res + (res*3) - (10+res)';

firstTaskOperationString = "'('" + res + ' + (' + res + '*3) - (10+' + res + ')';

let templateLiteralsVariable = `${res} + (${res}*3) - (10+${res})`;

console.log(templateLiteralsVariable);

// ! 2. zadatak
// Zapisati u Template Literals formatu varijablu:

let secondTaskOperation = 'res * (15*res) - (res/2) + res';

let secondTaskOperationString = `${res} * (15 * ${res}) - (${res}/ 2) + ${res}`;

console.log(secondTaskOperationString);

let goToNewLineString = `My string can go \nto the next line.`;

console.log(goToNewLineString);

// ! FUNKCIJE

function helloWorld(planetName) {
    alert(`Hello planet ${planetName}`); // 1. nacin
    // alert('Hello planet ' + planetName); // 2. nacin
}

// helloWorld('Jupiter');

// helloWorld('Earth');

// helloWorld('Mars');

const result = 'Hello JS!';

function add(number1, number2) {
    const result = number1 + number2;
    console.log(`Testing result variable: ${result}`);
    return `Result of add function is ${result}`;
    // return `Result of add function ${number1+number2}`;
}

console.log(result);

console.log(add(50,100));

console.log(add(3, 10));

let anotherX;
anotherX = 55;

function printVariable() {
    console.log(`testing anotherX variable: ${anotherX}`);
}

printVariable();

// TODO   ->    DOMACI zadaci sa drugog casa

// 1. zadatak
/**
 *  Kreirati dve varijable. Jedna neka bude tipa number i neka se zove userInput (na koju god vrednost je postavite) i druga neka se naziva         currentResult i nemojte je postaviti ni na kakvu vrednost.
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

// alert(`Current result is: ${currentResult}`);

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


// ! 3. cas (01.12.2021.)

console.log('----------------- 3. cas -------------------');

// Konvertovanje tipova podataka

let myRes = 22 + parseInt('545');

console.log(myRes); // 567

let myResFloat = 22 + parseFloat('44.5');

console.log(myResFloat); // 66.5

myRes = myRes + +'55';

console.log(myRes); // 622 u number formatu

let myResStr = myRes.toString() + ' is this working?';

console.log(myResStr); // 622 is this working?

myRes = 3 * '20';

console.log(myRes); // 60

myRes = '40' - 10;

console.log(myRes); // 30

myRes = 50 / '2';

console.log(myRes); // 25

// Kraci zapis operatora

myRes = myRes + 10; // 35 // ! 1. nacin

myRes += 55;

console.log(myRes); // 90

myRes *= 2;

console.log(myRes); // 180

myRes -= 40;

console.log(myRes); // 140

myRes /= 70;

console.log(myRes); // 2

    // * increment i decrement operatori

let counter = 0;

counter++; // increment operator

console.log(counter); // 1

counter--; // decrement operator

console.log(counter); // 0

// alert(counter++); // 0

// alert(++counter); // 1

// Ostali tipovi podataka

// string, number
/*
    1. string
    2. number
    3. boolean (true ili false)
    4. objects 
    5. arrays (nizovi)
    6. undefined
    7. null
*/

// Arrays

let myArray = [];

myArray = [1,2,3,4,5];

myArray.push(6);

myArray.push(44);

myArray.push(888);

console.log(myArray);

console.log(`First item in myArray is: ${myArray[0]}`);

console.log(`Last item in myArray is: ${myArray[myArray.length-1]}`);


// Objects
// podaci se beleze u key: value paru

const person = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 25,
    gender: 'male',
    isStudent: true
};

// person['nationality'] = 'Serbian';

console.log(person.firstName);

console.log(`Person's name is ${person.firstName} ${person.lastName}`);

console.log(`Person's name is ${person.firstName} and is ${person.age} years old.`);

console.log(`Is student: ${person.isStudent}`);

// undefined vs null

let testVariable;

console.log(testVariable); // undefined

let testVariable2 = null;

console.log(testVariable2); // null

// NaN  ==> not a number

console.log(100 - 'hello world'); // NaN

// typeOf operator --> sluzi za proveru tipa vrednosti

console.log(typeof(counter)); // number

console.log(typeof(5 - 'hello')); // number

console.log(typeof(40.23)); // number

console.log(typeof('My random string')); // string

console.log(typeof(true)); // boolean

console.log(typeof(person)); // object

console.log(typeof(myArray)); // object

console.log(typeof(null)); // object

console.log(typeof(undefined)); // undefined

// 2. nacin za typeof

console.log(typeof 'my random string'); // string

// TODO   -->   Domaci 3. casa

/*
    1.Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 33 (tipa number) i ‘27’ (tipa string). Obezbediti konverziju (parsiranje) string-a u number kako bi se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost koja se dobija parsiranjem dobijenog number-a u string.
    2. Prvu varijablu (tipa number) uvecati za 10 koristeci skraceni tip operatora. Nakon toga istu varijablu dekrementovati za jedan i ispisati konacnu vrednost na konzoli uz ispis ‘Current value is vrednost_varijable’.
    3. Kreirati niz sa od sledecih elemenata: ‘hello’ , ‘planet’ , ‘Jupiter’. Na kraju izvrsiti konkatinaciju ovih stringova i rezultat ispisati na konzoli.
    4. Kreirati objekat course i u njega dodati property-je: courseName (tipa string) i proizvoljnu vrednost, courseTeacher (tipa string) i proizvoljnu vrednost, duration (tipa number) i proizvoljnu vrednost i languages (tipa array) i proizvoljan niz elemenata.
    5. Ispisati na konzoli kompletan niz elemenata (languages property) iz course objekta.
    6. Ispisati poslednji element istog tog niza na konzoli.
    7. Resetovati vrednost varijable iz prvog zadatka na praznu vrednost uz odgovarajuci tip podatka.
    8. Proveriti tip podatka varijable iz prvog zadatka.
 */

let randomVar = 33 + +'27';

let randomVarStr = randomVar.toString();

randomVar += 10;

randomVar--;

console.log(`Current value is ${randomVar}`); // 69

let testArray = ['Hello', 'planet', 'Jupiter'];

console.log(`${testArray[0]} ${testArray[1]} ${testArray[2]}!`);

const course = {
    courseName: 'Frontend Programming',
    courseTeacher: 'Petar Petrovic',
    duration: 1.5,
    languages: ['JavaScript', 'HTML5', 'CSS3']
}

console.log(course.languages);

console.log(course.languages[course.languages.length-1]); // 'CSS3'

randomVar = null;

console.log(typeof randomVar);

