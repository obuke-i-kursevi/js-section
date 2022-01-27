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

// alert(resultNew);

console.log(userInput);



// ! FUNKCIJE

// 0..n parametara
function sayHi(name) {
  alert(`Welcome ${name}`);
}

// sayHi('Petar Petrovic');

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




// ! 3. cas (13.01.2022.)

console.log('---------------------- 3. cas (13.01.2022.) ----------------------');

let resVar = 55 + '455';

// Numbers su:
// celobrojni broj : 55 (INTEGER)
// decimalni broj: 55.45 (FLOAT)

console.log(`Result without parsing (converting) is ${resVar}`); // '55455'

resVar = 55 + parseInt('455');

console.log(`Result with parsing string to number is ${resVar}`); // 510

let resVarFloat = 22 + '66.5';

console.log(resVarFloat); // '2266.5'

resVarFloat = 22 + parseFloat('66.5');

console.log(resVarFloat); // 88.5


let resVar2 = 100 + +'33';

console.log(resVar2); // 133


let resVar3 = resVar2.toString() + ' neki tekst!';

console.log(resVar3); // '133 neki tekst!'


// * Implicitna konverzija tipova podataka

let resVar4 = 3 * '3';

console.log(resVar4); // 9 (broj)

resVar4 = '15' - 5;

console.log(resVar4); // 10 (broj)

resVar4 = '100' / 50;

console.log(resVar4); // 2 (broj)



// ! Kraci nacin pisanja operatora

resVar4 = resVar4 + 50;

console.log(resVar4); // 52

resVar4 += 38;

console.log(resVar4); // 90

resVar4 /= 2;

console.log(resVar4); // 45

resVar4 -= 15;

console.log(resVar4); // 30

resVar4 *= 3;

console.log(resVar4); // 90


// ! Increment i Decrement operatori

resVar4++;

console.log(resVar4); // 91

resVar4--;

console.log(resVar4); // 90

// alert(++resVar4);



// ! Tipovi podataka u JS-u:

// 1. String
// 2. Number
// 3. boolean (true ili false) 
// 4. objekti - za grupisanje podataka.
// 5. nizovi - liste podataka.
// 6. symbol
// 7. undefined
// 8. null


// ! NIZOVI

const myArray = []; // kreiranje praznog niza

// myArray = [1,2,3,4,5]; // kreiranje punog niza (niza sa nekim elementinma)

myArray.push(1);
myArray.push(4);
myArray.push(10);

console.log(myArray);

console.log(myArray[1]); // 4

console.log(myArray[10]); // undefined

console.log(myArray[myArray.length-1]); // pristupanje poslednjem elementu iz niza


// ! OBJEKTI

const person = {
  firstName: 'Marko',
  lastName: 'Markovic',
  age: 30,
  gender: 'male',
  isStudent: true
};


console.log(person);

console.log(person.firstName);

console.log(`Welcome ${person.firstName} with last name ${person.lastName}`);

console.log(`Person's age : ${person['age']}`); // Person's age : 30



// ! Undefined -> podrazumeva default vrednost NEINICIJALIZOVANIH varijabli

let someVar;

console.log(someVar); // undefined

// ! null -> najcesce se koristi za resetovanje varijable

let someVar1 = {
  email: 'email@gmail.com',
  password: '12345'
};

someVar1 = null; // resetovanje varijable someVar1

console.log(someVar1); // null



// ! NaN (not a number) , ovo je tip number-a

console.log(10 - 'hello world'); // NaN



// ! TypeOf operator


console.log(typeof(50)); // number
// ili
console.log(typeof 50); // number

console.log(typeof('Hello World')); // string

console.log(typeof(40.23)); // number

console.log(typeof(NaN)); // number

console.log(typeof(true)); // boolean

console.log(typeof(undefined)); // undefined

console.log(typeof(null)); // object

console.log(typeof({name: 'Petar Petrovic'})); // object

console.log(typeof(person)); // object

console.log(typeof(myArray)); // object



/**
 * TODO Domaci 3. cas (13.01.2022.)
 * 
  1. Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 
     33 (tipa number) i ‘27’ (tipa string). Obezbediti konverziju (parsiranje) string-a u number kako bi
     se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost 
     koja se dobija parsiranjem dobijenog number-a u string.
  2. Prvu varijablu (tipa number) uvecati za 10 koristeci skraceni tip operatora. Nakon toga istu varijablu 
     dekrementovati za jedan i ispisati konacnu vrednost na konzoli uz ispis ‘Current value is vrednost_varijable’.
  3. Kreirati niz sa od sledecih elemenata: ‘hello’ , ‘planet’ , ‘Jupiter’. Na kraju izvrsiti konkatinaciju 
     ovih stringova i rezultat ispisati na konzoli.
  4. Kreirati objekat course i u njega dodati property-je: courseName (tipa string) i proizvoljnu vrednost, 
     courseTeacher (tipa string) i proizvoljnu vrednost, duration (tipa number) i proizvoljnu vrednost i 
     languages (tipa array) i proizvoljan niz elemenata.
  5. Ispisati na konzoli kompletan niz elemenata (languages property) iz course objekta.
  6. Ispisati poslednji element istog tog niza na konzoli.
  7. Resetovati vrednost varijable iz prvog zadatka na praznu vrednost uz odgovarajuci tip podatka.
  8. Proveriti tip podatka varijable iz prvog zadatka.
 * 
*/


let randomVar = 33 + +'27';

let randomVarStr = randomVar.toString();

randomVar += 10;

randomVar--;

console.log(`Current value is ${randomVar}`); // 69

let testArray = ['Hello', 'planet', 'Jupiter'];

console.log(`${testArray[0]} ${testArray[1]} ${testArray[2]}!`); // Hello planet Jupiter

console.log(testArray[0] + ' ' + testArray[1] + ' ' + testArray[2]);

const course = {
    courseName: 'Frontend Programming',
    courseTeacher: 'Petar Petrovic',
    duration: 1.5,
    languages: ['JavaScript', 'HTML5', 'CSS3']
}

console.log(course.languages);

// course['languages'];

console.log(course.languages[course.languages.length-1]); // 'CSS3'

randomVar = null;

console.log(typeof randomVar);






// ! 5. cas (20.01.2022.)

console.log('-------------------- 5. cas (20.01.2022.) ---------------------');

// ! Operatori poredjenja

// * ==     -->     loose equality (poredi samo vrednosti)

console.log(10 == 10); // true

console.log('Hello' == 'Hello');

console.log('Hello' != 'Hello'); // false

 
console.log(5 == '5'); // true



// * ===     -->    strict equality (poredi i vrednosti i tip podataka)

console.log(5 === '5'); // false

console.log(30 === 30); // true

console.log(11 !== 11); // false


console.log('1' !== 1); // true



// ! Poredjenje po tome da li je neki broj veci ili manji


console.log(`25 > 3 = ${25 > 3}`); // true

console.log(`-15.3 < 0 = ${-15.3 < 0}`); // true

console.log(`100 > 200 = ${100 > 200}`); // false

console.log(`5 >= 5 = ${5 >= 5}`); // true

console.log(`9 <= 9 = ${9 <= 9}`); // true

console.log(`33 > '42' = ${33 > '42'}`); // false

console.log(`33 > '12' = ${33 > '12'}`); // true



// ! NOT (!) operator

console.log(`Not operator for 'false' returns = ${!false}`); // true

console.log(`Not operator for 'true' returns = ${!true}`); // false

console.log(`20 > 10 with NOT operator = ${!20 > 10}`); // false

console.log(`2 === 2 with NOT operator = ${!2 === 2}`); // false



// ! POREDJENJE STRINGOVA

// JavaScript poredi stringove po tzv. 'leksikografskom redosledu'

// to znaci da je b > a

console.log(`'b' > 'a' = ${'b' > 'a'}`); // true

console.log(`'ab' > 'aa' = ${'ab' > 'aa'}`); // true

console.log(`'c' > 'C' = ${'c' > 'C'}`); // true

console.log(`'a' > 'B' = ${'a' > 'B'}`); // true




// ! STATEMENTI
// 1. IF
// 2. IF - ELSE
// 3. IF - ELSE IF - ELSE


// * 1. IF statement

if(5 === '5') {
  console.log('5 is equal to 5!');
}


if(1 !== 1) {
  console.log('1 is not equal 1');
}

if(45 === '45') {
  console.log('45 is equal to "45"');
}


// kroz prompt prozor ukucati neki broj i proveriti da li je taj broj veci od nule. Ako jeste ispisati 'vece od nule'.

const number = prompt('Enter your number');

if(number > 0) {
  console.log('veci od nula');
}


// * 2. IF - ELSE blok

if(number > 0) {
  console.log(`${number} je veci od nule`);
} else {
  console.log(`${number} je manji od nule`);
}


// * 3. IF - ELSE IF - ELSE
if(number > 0) {
  console.log(`${number} je veci od nule`);
} else if(number < 0) {
  console.log(`${number} je manji od nule`);
} else {
  console.log(`${number} je nula!`);
}



// ! Ugnjezdeni IF - ELSE blok

if(number >= 0) {
  if(number > 0) {
    console.log(`${number} je veci od nule`);
  } else {
    console.log(`${number} je nula!`);
  }
} else {
  console.log(`${number} je manji od nule`);
}



// ! POREDJENJE OBJEKATA I NIZOVA

const course1 = {
  name: 'Java'
}

const course2 = {
  name: 'Java'
}

console.log(`Comparing tow different objects with === : ${course1 === course2}`); // false


const courses1 = ['Java', 'JavaScript', 'C#'];

const courses2 = ['Java', 'JavaScript', 'C#'];


console.log(`Comparing two different arrays with === : ${courses1 === courses2}`); // false


// TODO 5. zadatak domaci
/**
 * 1. Kreirati dve varijable tipa number sa vrednostima 30 i 50
 * 2. Uporediti varijable koristeci == i === i rezultate poredjenja ispisati na konzoli
 * 3. Uporediti varijable koristeci != i !== i rezultate poredjenja ispisati na konzoli
 * 4. Rezultat poredjenja iz 2. zadatka invert-ovati uz NOT operator i ispisati na konzoli
 * 5. Kreirati 3. varijablu sa vrednoscu '30' (tipa string)
 * 6. Uporediti varijablu sa vrednoscu 30 (number) i '30' (string) pomocu oba tipa equality operatora
 *    (== i ===), uporediti razlike rezultata poredjenja
 * 7. Kreirati 4. varijablu (npr. promptAnswer) cija se vrednost dobija kroz prompt prozor browser-a
 * 8. Vrednost varijable proveriti kroz if - else if - else uslove i shodno tome ispisati status o varijabli u formatu
 *    `Value ${promptAnswer} is ________`
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



// ! 6. cas (25.01.2022.)

console.log('-------------------- 6. cas (25.01.2022.) -------------------');

// * visestruki logicki uslovi:
// 1. logicko i (&&) --> kaze da svi uslovi moraju biti zadovoljeni
    // true + true daju true
    // true + false daju false
    // false + false daju false
// 2. logicko ili (||) --> kaze da bar jedan od uslova mora biti zadovoljen
    // true + true daju true
    // true + false daju true
    // false + false daju false

// '33' === 33
if(number > 0 && number === 33) {
  console.log(`Your number ${number} is 33, which is greater than 0!`);
}

const parsedNumber = parseInt(number);

if(parsedNumber > 0 && parsedNumber === 33) {
  console.log(`Your number ${number} is 33, which is greater than 0!`);
}


if(parsedNumber > 0 || parsedNumber < 0) {
  console.log(`Your ${number} is either positive or negative!`);
}


if((parsedNumber > 0 && parsedNumber === 5) || parsedNumber < 0) {
  console.log(`Your number ${parsedNumber} is either positive or negative or equal to 5!`);
}


// ! Logicko && ima prioritet u odnosu na logicko ||

if(parsedNumber > 0 && parsedNumber === 5 || parsedNumber < 0) {
  console.log(`Your number ${parsedNumber} is either positive or negative or equal to 5!`);
}



// ! Ternarni operator (kondicioni operator)

let answer = parsedNumber < 0 
  ? `${parsedNumber} is less than 0.` 
  : `${parsedNumber} is equal or greater than 0.`;

console.log(`Ternary operator returns: ${answer}`);



// ! kombinovanje if-else statment-a i ternarnog operatora

if(parsedNumber === 0) {
  console.log(`Your number ${parsedNumber} is equal to Zero!`);
} else {
  let answer = parsedNumber > 0 ? `${parsedNumber} is greater than 0!` : `${parsedNumber} is less than 0!`;
  console.log(answer);
}



// ! TRUTHY i FALSY vrednosti

/**
 * FALSY vrednosti: false, '', ``, "", 0, -0, 0n, NaN, null, undefined
 * TRUTHY vrednosti: bilo sta sto nije ovo gore navedeno, npr: 'Petar Petrovic', 24, -33.5, true, itd.
*/

let falsyValue = '';
let truthyValue = 'JS cas (15.)';

if(falsyValue) {
  console.log('Entered falsy block');
}

if(truthyValue) {
  console.log('Entered truthy block');
}


// primer:

let resultOfOperation = parsedNumber > 0 && parsedNumber < 50;

if(resultOfOperation) {
  console.log('True block');
}


// primer:

let userInput1;

if(userInput1) {
  console.log("User's input", userInput1);
} else if(userInput1 === null) {
  console.log("No value for User's input");
} else {
  console.log('None of above');
}



// ! Trikovi

// * 1. truthy ili falsy vrednosti se mogu pretvoriti u true ili false bukvalno

let userInput1Converted = !!userInput1;

console.log(`Converted user input: ${userInput1Converted}`);


// * 2. moguce je vrednost neke varijable dobiti na osnovu nekog logickog operatora

// 1. primer sa logickim ||

userInput1 = '';

let userName = userInput1 || 'Petar';

console.log(`User name is ${userName}`);


// 2. primer sa logickim &&

let registeredUser = true;

userName = registeredUser && 'marko@gmail.com';

console.log(`User name again is ${userName}`);




// ! SWITCH case-ovi:

const grade = 4;


switch(grade) {
  case 1:
    console.log(`Math grade is 1 😪`);
    break;
  case 2:
    console.log(`Math grade is 2 😣`);
    break;
  case 3:
    console.log(`Math grade is 3 😑`);
    break;
  case 4:
    console.log(`Math grade is 4 🙂`);
    break;
  case 5:
    console.log(`Math grade is 5 🤩`);
    break;
}



// ! 7. cas (27.01.2022.)

console.log(`---------------- 7. cas (27.01.2022.) ---------------`);

// ! PETLJE (loops)

/**
 * 1. for petlja (sluzi za pozivanje nekog koda nekoliko puta u zavinosti od brojaca)
 * 2. for-of petlja (sluzi za pozivanje nad svakim elementom nekog niza)
 * 3. for-in petlja (sluzi za vracanje svih KEY-eva nekog objekta i eventualno vrednosti vezane za KEY-eve)
 * 4. while petlja (sluzi za izvrsavanje nekog koda sve dokle god je neki logicki uslov zadovoljen)
 * 5. do-while petlja
 */


// * 1. FOR petlja


for(let counter = 1; counter <= 5; counter++) {
  console.log(`Counter of inside for loop is ${counter}`);
}


// Primer -> program koji racuna zbir prvih 100 prirodnih brojeva

let sum = 0;

for(let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(`Sum of first 100 natural numbers = ${sum}`);


// * FOR OF petlja

const programmingLanguages = ['Java', 'JavaScript', 'C#', 'Python', 'Solidity'];

console.log(programmingLanguages);

for(let i = 0; i < programmingLanguages.length; i++) {
  console.log(`Language: ${programmingLanguages[i]}`);
}

// FOR OF:

for(let language of programmingLanguages) {
  console.log(`For of language: ${language}`);
}


const greetings = 'Welcome!';

for(let letter of greetings) {
  console.log(letter);
}



// * FOR IN petlja

const someUser = {
  name: 'Marko Markovic',
  email: 'marko@gmail.com',
  age: 22,
  student: true
}


for(let key in someUser) {
  console.log(`${key}`);
}

console.log(`Age of student is ${someUser.age}`);
console.log(`Name of student is ${someUser['name']}`);

for(let key in someUser) {
  console.log(`${key}: ${someUser[key]}`);
}


// * KOMBINACIJA FOR OF i FOR IN petlje

const bankAccount = {
  owner: 'Nikola Nikolic',
  pin: 4412,
  phone: '066111222',
  transactions: ['+300','-250','+500','-150','+1000']
}

for(let prop in bankAccount) {
  console.log(`${prop}: ${bankAccount[prop]}`);
  if(prop === 'transactions') {
    // * prva for petlja vraca samo prve tri transakcije

    // for(let i = 0; i < 3; i++) {
    //   console.log(`Transaction number: ${i+1} = ${bankAccount.transactions[i]}`);
    // }

    for(let singleTransaction of bankAccount.transactions) {
      console.log(singleTransaction);
      // if(singleTransaction === '+500') {
      //   console.log(`Transakcija od 500 = ${singleTransaction}`);
      // }
    }

  }
}



// * WHILE petlja

let userLoggedIn = true;
let i = 0;

// * primer beskonacne petlje
// while(userLoggedIn) {
//   console.log(i);
//   i++;
// }


while(i<5) {
  console.log(`i counter with WHILE loop: ${i}`);
  i++;
}

console.log(i); // 5



// * DO WHILE petlja

i = 0;

do{
  console.log(i);
  i++;
} while(i<=5);

console.log(i);



// * BREAK i CONTINUE

// * break -> sluzi da prekinemo neku petlju u odredjenoj iteraciji (u odredjenom momentu)

// primer:

for(let j = 0; j < 5; j++) {
  if(j === 3) {
    break;
  }
  console.log(`j counter = ${j}`);
}


// * continue -> sluzi ako hocemo da preskocimo odredjenu iteraciju ako je neki logicki uslov zadovoljen

// primer:

for(let k = 0; k < 5; k++) {
  if(k === 3) {
    continue;
  }
  console.log(`k counter = ${k}`);
}



// ! TRY, CATCH, FINALLY blokovi

try {
  console.log('Testing try block!');
  // console.log(mojaVarijabla5);
} catch(error) {
  console.log(error.name + ' --> ' + error.message);
} finally {
  console.log('Finally block is always happening!');
}


// ! 6. i 7. cas domaci

// 1. Uporediti vrednost kreirane varijable (const someNum = prompt('Please enter your number')) pomocu ternarnog operatora tako da se ispise da li je broj pozitivan ili negativan
// 2. Dodati OR (||) logicki operator kako bi se proverilo da li je someNum vrednost nula ili veca od nule i rezultat ispisati na konzoli zajedno
// 3. Dodati breakpoint u prethodnom izvrsavanju if bloka i utvrditi potencijalnu gresku na osnovu iscitavanja vrednosti

// 4. za svaku liniju koda u nastavku ispisati sta vraca:
// 
//     const userEmail = 'marko@gmail.com';
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
//  
//

// 5. Kreirati varijablu "dayOfTheWeek" i postaviti na danasnji dan (hardkodovati, npr: 'tuesday'). Promeniti case-ove switch opcijom i u skladu sa tim ispisati vrednost na konzoli.

// 6. Ispisati proizvod svih brojeva od 1 do 10

// 7. Kreirati niz "foreignLanguages" i 3 jezika dodati u njega. Svaki jezik treba da ima svoj naziv i recenicu na tom jeziku. 

// 8. Nakon toga, proci kroz niz jezika i ispisati svaki element u formatu:
//    'Here is a sentence on LANGUAGE_NAME : LANGUAGE_SENTENCE'

// 9. Za PRVI jezik iz foreignLanguages dodati (nalepiti) jos jedan property -> teachers niz nastavnika koji predaju jezik (3). 
// Za svakog od nastavnika napraviti property firstName i lastName i dodeliti neke vrednosti.

// 10. Ispisati redni broj nastavnika te njegovo ime i prezime i taj jezik koji predaje u formatu:
// Teacher number BROJ : IME PREZIME is teaching JEZIK


// 1. zadatak

const someNum = prompt('Please enter your number:');

let answerSomeNum = someNum > 0 ? `${someNum} is positive!` : `${someNum} is negative!`;

console.log(`1. zadatak: ${answerSomeNum}`);

// 2. i 3. zadatak

if(someNum === 0 || someNum > 0) {
  console.log(`${someNum} is either equal to 0 or positive value!`);
}

// 4. zadatak

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


// 5. zadatak

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

// 6. zadatak

let multiplyResult = 1;

for(let j = 1; j <= 10; j++) {
  multiplyResult *= j;
}

console.log(`Result of multiplying first 10 numbers ${multiplyResult}`); // Result of multiplying first 10 numbers 3628800


// 7. zadatak
const foreignLanguages = [
  {name: 'English', sentence: 'This is some sentence on English.'},
  {name: 'German', sentence: 'JS ist sehr gut.'},
  {name: 'Latin', sentence: 'Lorem ipsum dolor sit amet.'}
];

// 8. zadatak
for(let language of foreignLanguages) {
  console.log(`Here is a sentence on ${language.name} : ${language.sentence}`);
}

// 9. zadatak
foreignLanguages[0].teachers = [
  {firstName: 'Marko', lastName: 'Markovic'},
  {firstName: 'Petar', lastName: 'Petrovic'},
  {firstName: 'Sara', lastName: 'Saric'}
]

// 10. zadatak
for(let i=0; i < foreignLanguages[0].teachers.length; i++) {
  console.log(`Teacher number ${i+1}: ${foreignLanguages[0].teachers[i].firstName} ${foreignLanguages[0].teachers[i].lastName} is teaching ${foreignLanguages[0].name}`);
}
