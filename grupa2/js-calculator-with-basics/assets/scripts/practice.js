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

// TODO   ->    DOMACI zadaci sa 2. casa

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

// Konverzija tipova podataka

console.log('----------------- 3. cas ----------------');

let resVar = 55 + parseInt('455');

console.log(resVar);

let resVarFloat = 55 + parseFloat('432.5');

console.log(resVarFloat);

resVar = resVar + +'500';

console.log(resVar); // 1010

let resVarStr = resVar.toString() + ' is this working?';

console.log(resVarStr);

resVar = 5 * '50';

console.log(resVar); // 250

resVar = '30' - 15;

console.log(resVar); // 15

resVar = 100 / '2';

console.log(resVar); // 50


// kraci nacin pisanja operatora

// resVar = resVar + 10;

resVar += 10;

console.log(resVar); // 60

// resVar = resVar - 10;

resVar -= 20;

console.log(resVar); // 40

resVar *= 5;

console.log(resVar); // 200

resVar /= 100;

console.log(resVar); // 2

    // increment i decrement operatori

resVar++;

console.log(resVar); // 3

resVar--;

console.log(resVar); // 2

// alert(resVar++); // 2 

console.log(resVar); // 3

// alert(++resVar); // 4

// ostali tipovi podataka
/*
    1. string
    2. number
    3. boolean (true ili false)
    4. objects - dozvoljavaju da grupisete podatke.
    5. arrays (nizovi) - liste podataka.
    6. undefined
    7. null
*/

// nizovi (arrays)

let myArray = [];

myArray = [1,2,3,4,5];

myArray.push(6);

myArray.push(888);

console.log(myArray);

console.log(`First element in myArray is ${myArray[0]}`);

console.log(`Last element in myArray is ${myArray[myArray.length-1]}`);


// objects
// navodjenje obelezja objekta kroz key: value par

const person = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 24,
    gender: 'male',
    isStudent: true
};

console.log(`Person's name is ${person.firstName}`);

console.log(`Person's name is ${person.firstName} and last name is ${person.lastName}`);

console.log(`Person's age is ${person.age}`);

console.log(`Person's gender is ${person['gender']}`);


// undefined, null

let testVariable;

console.log(testVariable);

let testVariable2 = null;

console.log(testVariable2);

// NaN --> not a number

console.log(100 - 'hello world'); // NaN

console.log(100 / 0);


// typeof operator

console.log(typeof(resVar)); // number

console.log(typeof(500.67)); // number

console.log(typeof(NaN)); // number

console.log(typeof(Infinity)); // number

console.log(typeof('Hello World!')); // string

console.log(typeof(55 + '44')); // string

console.log(typeof('hello' - 42)); // number

console.log(typeof(40 + +'37')); // number

console.log(typeof(undefined)); // undefined

console.log(typeof(person)); // object

console.log(typeof(myArray)); // object

console.log(typeof(null)); // object

console.log(typeof(squareFunc)); // function

console.log(typeof 48); // number

console.log(typeof 'my random string'); // string


// TODO Domaci za 3. cas

/*
    1. Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 33 (tipa number) i ‘27’ (tipa string). Obezbediti konverziju (parsiranje) string-a u number kako bi se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost koja se dobija parsiranjem dobijenog number-a u string.
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

console.log(randomVar);

console.log(typeof randomVar);




// ! 5. cas (08.12.2021.)

console.log(`--------------- 5. cas ---------------------`);

// Operatori poredjenja

// dva tipa operatora poredjenja (== i ===)

// == operator je operator koji poredi samo po vrednosti (double equality)

console.log(10 == 10); // true

console.log(`10 == 10 is: ${10 == 10}`); 

console.log(`10 and 10 are not equal: ${10 != 10}`); // false

console.log(`'Hello' != 'Hello' : ${'Hello' != 'Hello'}`); // false

console.log(`'Hello' != 'World' : ${'Hello' != 'World'}`); // true

console.log(`5 is equal to '5' ${5 == '5'}`); // true

// === operator je operator koji poredi i po vrednosti i po tipu podatka (triple equality)

console.log(`5 is equal to '5' with === equality: ${5 === '5'}`); // false

console.log(`5 is equal to parsed '5' with === equality: ${5 === parseInt('5')}`); // 5 === 5 // true

console.log(`22 is equal to '22' with === equality: ${22 !== '22'}`); // true


// poredjenje se moze raditi i uz > , < , >= , <=


console.log(`25 > 3 is : ${25 > 3}`); // true

console.log(`-17.7 < 2 is : ${-17.7 < 2}`); // true

console.log(`100 > 200 is : ${100 > 200}`); // false

console.log(`50 >= 50 is : ${50 >= 50}`); // true

console.log(`2 <= 2 is : ${2 <= 2}`); // true

console.log(`4 > '2' is : ${4 > '2'}`); // true

console.log(`15 < '3' is : ${15 < '3'}`); // false


// Poredjenje stringova

// b > a

console.log(`'ab' > 'aa' is : ${'ab' > 'aa'}`); // true

console.log(`'c' > 'C' is : ${'c' > 'C'}`); // true

console.log(`'a' > 'B' is : ${'a' > 'B'}`); // true



// ! Statementi (blokovi)
// 1. IF
// 2. IF - ELSE
// 3. IF - ELSE IF - ELSE

// IF blok

if (5 === 10) {
    console.log(`5 is equal to 5`);
}

if (5 === '5') {
    console.log(`5 is equal to '5'`);
}

if (5 !== '5') {
    console.log(`5 is not equal to '5'`);
}

// primer:

const pNumber = prompt('Enter your number: ');

console.log(pNumber); // '55'
console.log(typeof pNumber); // string

if (pNumber > 0) {
    console.log(`Your number ${pNumber} is greater than 0 (positive number)!`);
}

// IF - ELSE blok

if (pNumber > 0) {
    console.log(`Your number ${pNumber} is greater than 0 (positive number)!`);
} else {
    console.log(`Your number ${pNumber} is less than 0 (negative number)!`);
}

// IF - ELSE IF - ELSE

if (pNumber > 0) {
    console.log(`Your number ${pNumber} is greater than 0 (positive number)!`);
} else if (pNumber < 0) {
    console.log(`Your number ${pNumber} is less than 0 (negative number)!`);
} else {
    console.log(`Your number ${pNumber} is 0!`);
}


// Ugnjezdeni if - else blok

console.log('---------------- Ugnjezdeni IF - ELSE blok -----------------')


if (pNumber >= 0) {
    if (pNumber > 0) {
        console.log(`Your number ${pNumber} is greater than 0 (positive number)!`);
    } else {
        console.log(`Your number ${pNumber} is 0!`); 
    }
} else {
    console.log(`Your number ${pNumber} is less than 0 (negative number)!`);
}

// Poredjenje Objekata i Nizova

const firstCourse = {
    name: 'Java'
}

const secondCourse = {
    name: 'Java'
}

console.log(`Are objects same: ${firstCourse === secondCourse}`); // false


const courses = ['Java', 'JavaScript', 'C#'];

const otherCourses = ['Java', 'JavaScript', 'C#'];


console.log(`Are arrays the same: ${courses === otherCourses}`); // false


// poredjenje uz vise logickih uslova

console.log('------------ LOGICAL OPERATOR AND (&&), OR (||) , NOT (!) ------------');
// true i false => false
// false i false => false
// true i true => true

if (pNumber > 0 && pNumber === 33) { // '33' === 33 --> netacno i zato je false
    console.log(`Your number ${pNumber} is exactly 33 and it is greater than 0!`);
}

// 1. nacin
const parsedNumber = parseInt(pNumber);

if (parsedNumber > 0 && parsedNumber === 33) {
    console.log(`Your number ${parsedNumber} is exactly 33 and it is greater than 0!`);
}

// 2. nacin
// if (pNumber > 0 && parseInt(pNumber) === 33) {
//     console.log(`Your number ${pNumber} is exactly 33 and it is greater than 0!`);
// }

// TODO 5. cas domaci
/**
 * 1. Kreirati dve varijable tipa number sa vrednostima 30 i 50
 * 2. Uporediti varijable koristeci == i === i rezultate poredjenja ispisati na konzoli
 * 3. Uporediti varijable koristeci != i !== i rezultate poredjenja ispisati na konzoli
 * 4. Rezultat poredjenja iz 2. zadatka invert-ovati uz NOT operator i ispisati na konzoli
 * 5. Kreirati 3. varijablu sa vrednoscu '30' (tipa string)
 * 6. Uporediti varijablu sa vrednoscu 30 (number) i '30' (string) pomocu oba tipa equality operatora (== i ===), uporediti razlike rezultata poredjenja
 * 7. Kreirati 4. varijablu (npr. promptAnswer) cija se vrednost dobija kroz prompt prozor browser-a
 * 8. Vrednost varijable proveriti kroz if - else if - else uslove i shodno tome ispisati status o varijabli u formatu `Value ${promptAnswer} is ________`
 */

const variable1 = 30;
const variable2 = 50;

console.log(`variable1 is equal to variable 2: ${variable1 == variable2}`); // false
console.log(`variable1 is equal to variable 2: ${variable1 === variable2}`); // false

console.log(`variable1 is not equal to variable 2: ${variable1 != variable2}`); // true
console.log(`variable1 is not equal to variable 2: ${variable1 !== variable2}`); // true

const compareOfVars = variable1 === variable2;

console.log(compareOfVars); // false
console.log(!compareOfVars); // true  // ! Revert-ovan false u true pomocu ! znaka (NOT operatora)

const variable3 = '30';
console.log(`variable3 is equal to 30: ${variable3 === 30}`); // false
console.log(`variable3 is equal to 30: ${variable3 == 30}`); // true

const promptAnswer = prompt('Enter your value:');

if (promptAnswer > 0) {
    console.log(`Value ${promptAnswer} is positive.`);
} else if (promptAnswer < 0) {
    console.log(`Value ${promptAnswer} is negative.`);
} else {
    console.log(`Value is zero.`);
}