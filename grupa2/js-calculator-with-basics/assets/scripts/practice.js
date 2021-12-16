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
// kod logickog I:
// true i false => false
// false i false => false
// true i true => true

// * Logicko i (&& AND operator)
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


// ! 6. cas (13.12.2021.)

console.log('--------------------- 6. cas ----------------------');

// * Logicko ili (|| -> OR operator)
// kod logickog ILI:
// true i false (i obrnuto) daju true
// false i false daju false
// true i true daju true

if (parsedNumber > 0 || parsedNumber < 0) {
    console.log(`Number ${parsedNumber} is either positive or negative`);
}

// kombinacija operatora
// && > ||

if (parsedNumber > 0 && parsedNumber === 5 || parsedNumber < 0) {
    console.log(`Number ${parsedNumber} is either positive or negative or equal to 5`);
}


// * TERNARNI operator (kondicioni operator)

let answer = parsedNumber < 0 ? `${parsedNumber} is negative` : `${parsedNumber} is equal or greater than 0!`;

console.log(answer);

let answer1 = parsedNumber === 0 ? `${parsedNumber} is equal to 0` : `${parsedNumber} is less or greater than 0!`;

console.log(answer1);

// kombinovanje IF-ELSE blokova i kondicionog operatora

if(parsedNumber === 0) {
    console.log(`${parsedNumber} is equal to 0`);
} else {
    let answer = parsedNumber < 0 ? `${parsedNumber} is less than 0` : `${parsedNumber} is greater than 0`;
    console.log(answer);
}


// * TRUTHY ili FALSY vrednosti
// FALSY vrednosti: false, '', ``, "", 0, -0, 0n, NaN, null, undefined
// TRUTHY vrednosti: sve suprotno od ovog gore navedenog ('Hello World', 55, -32.11, true, itd.)

// let falsyValue = '';
// let truthyValue = 'JS cas (13.12.2021.)';
let falsyValue = 0;
let truthyValue = -66.7;

if(falsyValue) {
    console.log(`Entered FALSY block`);
}

if(truthyValue) {
    console.log(`Entered TRUTHY block`);
}

// primer:

let answerOfOperation = parsedNumber > 0 || parsedNumber < 0;

if(answerOfOperation) {
    console.log(`Number is ${parsedNumber}`);
}

// primer:

let userInput1;

if(userInput1) {
    console.log(`User has entered: ${userInput1}`);
} else if(userInput1 === null) {
    console.log(`User input is NULL`);
} else {
    console.log(`None of above`);
}


// * moguce je pretvoriti truthy ili falsy vrednost u true ili false

let answerOfOperationConverted = !!answerOfOperation;

console.log(`Convereted value is ${answerOfOperationConverted}`);

// * moguce je vrednost varijable dobiti na osnovu nekog logickog uslova (||)

userInput1 = prompt('Enter your user name');

let userName = userInput1 || 'Some Default UserName';

// * duzi kod za ovo od gore
// if(userInput1) {
//     userName = userInput1;
// } else {
//     userName = 'Some Default UserName';
// }


console.log(`User Name is: ${userName}`);

// * moguce je vrednost varijable dobiti na osnovu nekog logickog uslova (&&)

let registeredUser = false;

let userName1 = registeredUser && 'marko@gmail.com';

console.log(`User name after registration is ${userName1}`);



// * SWITCH case-ovi

const mathGrade = 2;

switch(mathGrade) {
    case 1:
        console.log(`Math grade is 1`);
        break;
    case 2:
        console.log(`Math grade is 2`);
        break;
    case 3:
        console.log(`Math grade is 3`);
        break;
    case 4:
        console.log(`Math grade is 4`);
        break;
    case 5:
        console.log(`Math grade is 5`);
        break;
}

const dayOfWeek = 'sreda';

switch(dayOfWeek) {
    case 'ponedeljak':
        console.log(`Danas je ponedeljak`);
        break;
    case 'utorak':
        console.log(`Danas je utorak`);
        break;
    case 'sreda':
        console.log(`Danas je sreda`);
        break;
}


// * PETLJE (LOOP-ovi)
// 1. for petlja -> koristi se za pozivanje nekog koda nekoliko puta (u zavisnosti od brojaca)
// 2. for-of petlja -> koristi se za pozivanje nad svakim elementom nekog niza
// 3. for-in petlja -> koristi se za ispisavanje KEY-eva (PROPERTY-a OBJEKTA), moze i za vrednosti Key-eva
// 4. while petlja -> izvrsava se sve dok je odredjeni logicki uslov zadovoljen
// 5. do while petlja

// * 1. FOR petlja

for(let counter = 1; counter <= 5; counter++) {
    console.log(`Counter of for loop is ${counter}`);
}

console.log('Test');

// primer -> program koji racuna zbir prvih 100 prirodnih brojeva (1 do 100)

let sum = 0;

for(let i = 1; i<=100; i++) {
    sum = sum + i;
    // sum += i;
}

console.log(`Final res: ${sum}`);

// TODO 6. cas domaci

// 1. Uporediti vrednost kreirane varijable (const someNum = prompt('Please enter your number')) pomocu ternarnog operatora tako da se ispise da li je broj pozitivan ili negativan
// 2. Dodati OR (||) logicki operator kako bi se proverilo da li je someNum vrednost nula ili veca od nule i rezultat ispisati na konzoli zajedno
// 3. Dodati breakpoint u prethodnom izvrsavanju if bloka i utvrditi potencijalnu gresku na osnovu iscitavanja vrednosti

// 4. za svaku liniju koda u nastavku ispisati sta vraca:
// /**
//  *  const userEmail = 'marko@gmail.com';
//     const backupEmail = '';
//     console.log(userEmail === 'marko@gmail.com');
//     console.log(userEmail);
    
//     console.log(userEmail || null);
//     console.log(backupEmail || 'milan@gmail.com');
//     console.log(backupEmail || '');
//     console.log(backupEmail || null || 'petar@gmail.com');
    
//     console.log(userEmail && 'petar@gmail.com');
//     console.log(backupEmail && 'petar@gmail.com');
//     console.log(userEmail && ''); 
//  * 
//  */

// 5. Kreirati varijablu "dayOfTheWeek" i postaviti na danasnji dan (hardkodovati, npr: 'tuesday'). Promeniti case-ove switch opcijom i u skladu sa tim ispisati vrednost na konzoli.

// 6. Ispisati proizvod svih brojeva od 1 do 10

const someNum = prompt('Please enter your number:');

let answerSomeNum = someNum > 0 ? `${someNum} is positive` : `${someNum} is negative`;

console.log(answerSomeNum);

if(someNum === 0 || someNum > 0) {
    console.log(`${someNum} is either equal to 0 or positive value!`);
}

// /**
//  *  const userEmail = 'marko@gmail.com';
//     const backupEmail = '';
//     console.log(userEmail === 'marko@gmail.com'); // ! vraca -> true
//     console.log(userEmail); // ! vraca -> 'marko@gmail.com'
    
//     console.log(userEmail || null); // ! vraca -> 'marko@gmail.com'
//     console.log(backupEmail || 'milan@gmail.com'); // ! vraca -> 'milan@gmail.com'
//     console.log(backupEmail || ''); // ! vraca -> ''
//     console.log(backupEmail || null || 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'
    
//     console.log(userEmail && 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'
//     console.log(backupEmail && 'petar@gmail.com'); // ! vraca -> ''
//     console.log(userEmail && ''); // ! vraca -> ''
//  * 
//  */

const dayOfTheWeek = 'tuesday';

switch(dayOfTheWeek) {
    case 'monday':
        console.log(`Today is Monday!`);
        break;
    case 'tuesday':
        console.log(`Today is Tuesday!`);
        break;
    case 'wednesday':
        console.log(`Today is Wednesday!`);
        break;
    case 'thursday':
        console.log(`Today is Thursday!`);
        break;
    case 'friday':
        console.log(`Today is Friday!`);
        break;
    case 'saturday':
        console.log(`Today is Saturday!`);
        break;
    case 'sunday':
        console.log(`Today is Sunday!`);
        break;
}

let multiplyResult = 1;

for(let j = 1; j <= 10; j++) {
    multiplyResult *= j;
}

console.log(`Result of multiplying first 10 numbers ${multiplyResult}`); // Result of multiplying first 10 numbers 3628800

// TODO 7. cas (15.12.2021.)

console.log('-------------- 7. cas ------------------');

// * FOR OF petlja

const programmingLanguages = ['Java', 'JavaScript', 'C#', 'Python', 'Solidity'];

// uz FOR loop, BEZ FOR OF loop-a:

let arrayLength = programmingLanguages.length;

for(let i = 0; i < arrayLength; i++) {
    console.log(`I want to learn ${programmingLanguages[i]}`); // vraca elemente po INDEKSU, a u svakoj iteraciji indeks je zapravo BROJAC iz FOR petlje
}


// * FOR OF

for(let language of programmingLanguages) { // u 1. iteraciji
    console.log(`I want to learn: ${language}`);  // I want to learn Java
    for(let letter of language) {
        console.log(letter); // J       a       v      a
    }
}

const greetings = 'Dobar dan'; 

for(let letter of greetings) {
   console.log(letter); 
}

function hello1(param) {
    console.log(param);
}

function hello2(param) {
    console.log(param);
}

hello1('DOBRO JUTRO');
hello2('DOBRO VECE');


// * FOR IN loop

const someUser = {
    name: 'Marko Markovic',
    email: 'marko@gmail.com',
    age: 22,
    student: true
}

for(let key in someUser) {
    console.log(key);
}

// ! ne radi, jer ne postoji property koji se naziva key a da se nalazi u someUser objektu
// for(let key in someUser) {
//     console.log(`${key} : ${someUser.key}`);
// }

for(let key in someUser) { // email
    console.log(`${key} : ${someUser[key]}`); //someUser[email] => 'marko@gmail.com'
}


// KOMBINACIJA FOR IN i FOR OF petlje


const bankAccount = {
    owner: 'Nikola Nikolic',
    pin: 1234,
    accountNumber: '111-4442212315-421',
    phone: '063333111',
    transactions: ['+350', '-300', '+700', '-240', '+100']
}

console.log('Bank account');

for(let key in bankAccount) {
    if(key !== 'transactions') {
        console.log(`${key} : ${bankAccount[key]}`);
    }
    if(key === 'transactions') {
        console.log(`${key}`);
        for(let transaction of bankAccount.transactions) {
            console.log(transaction);
        }   
    }
}


// * WHILE petlja

let userLoggedIn = true;
let i = 0;

// ! ovo pravi infinite loop (beskonacnu petlju)
// while(userLoggedIn) {
//     console.log(i);
//     i++;
// }

while(i<5) { // 5 < 5
    console.log(i); // 4
    i++; // 4+1 = 5
}

console.log(`Variable i value is: ${i}`); // 5


// while(i <= 1000) {
//     console.log(i);
//     i++;
// }

// console.log(`You have reached your limit of ${i}`);

i = 0;

do {
    console.log(i);
    i++;
} 
while(i<5);


// * BREAK i CONTINUE

// * BREAK se koristi ako hocemo da prekinemo petlju da se izvrsava u odredjenom momentu

// primer

for(let i = 0; i < 5; i++) {
    if(i === 3) {
        break;
    }
    console.log(`Number is: ${i}`);
}

// * CONTINUE se koristi ako hocemo da preskocimo iteraciju u kojoj se nalazimo (u odredjenom momentu)

for(let i = 0; i < 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(`Number is: ${i}`);
}

// ! TRY, CATCH, FINALLY blokovi

// u try block ide kod koji moze da baci (prouzrokuje) neki error
// u catch block ide kod koji hendluje gresku ako do nje dodje
// u finally block se uvek ulazi
// najcesce se koristi za network greske

try {
    // console.log('Testing TRY block');
    console.log(someNotExistingVariable);
} catch(error) {
    console.error(error.name + ' --> ' + error.message)
} finally {
    console.log(`I always enter FINALLY block`);
}


// TODO: 7. cas

// 7. Kreirati niz "foreignLanguages" i 3 jezika dodati u njega. Svaki jezik treba da ima svoj naziv i recenicu na tom jeziku. 

// 8. Nakon toga, proci kroz niz jezika i ispisati svaki element u formatu:
// 'Here is a sentence on LANGUAGE_NAME : LANGUAGE_SENTENCE'

// 9. Za PRVI jezik iz foreignLanguages dodati (nalepiti) jos jedan property -> teachers niz nastavnika koji predaju jezik (3). 
// Za svakog od nastavnika napraviti property firstName i lastName i dodeliti neke vrednosti.

// 10. Ispisati redni broj nastavnika te njegovo ime i prezime i taj jezik koji predaje u formatu:
// Teacher number BROJ : IME PREZIME is teaching JEZIK

const foreignLanguages = [
    {name: 'English', sentence: 'This is some sentence on English.'},
    {name: 'German', sentence: 'JS ist sehr gut.'},
    {name: 'Latin', sentence: 'Lorem ipsum dolor sit amet.'}
];

for(let language of foreignLanguages) {
    console.log(`Here is a sentence on ${language.name} : ${language.sentence}`);
}

foreignLanguages[0].teachers = [
    {firstName: 'Marko', lastName: 'Markovic'},
    {firstName: 'Petar', lastName: 'Petrovic'},
    {firstName: 'Sara', lastName: 'Saric'}
]

for(let i=0; i < foreignLanguages[0].teachers.length; i++) {
    console.log(`Teacher number ${i+1}: ${foreignLanguages[0].teachers[i].firstName} ${foreignLanguages[0].teachers[i].lastName} is teaching ${foreignLanguages[0].name}`);
}