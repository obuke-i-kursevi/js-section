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