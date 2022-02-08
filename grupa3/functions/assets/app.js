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




// ! 10. cas (08.02.2022.)

console.log('------------- 10.cas (08.02.2022.) -------------');

// ! Uz pomoc arrow funkcija mozemo da kreiramo i objekte

const makeCourse = (courseName) => ({
    courseName: courseName
});

console.log(makeCourse('Frontend course'));


setTimeout(() => {
    console.log('Neka vrednost');
}, 2000);



// ! Default argumenti funkcije

const randomFunc = (x,y,z = 30) => {
    const result = (x+y) * z;
    return result;
}

console.log(`Result is ${randomFunc(5,3,2)}`); // Result is 240


const randomFuncWithoutParam = (a,b) => a/b;

console.log(`Result of dividing: ${randomFuncWithoutParam(50)}`); // Result of dividing: NaN



// ! REST OPERATOR => rest operator komplet pojedinace argumente funkcije konvertuje u NIZ koji se kao takav prosledjuje funkciji


// 1. nacin -> uz prosledjivanje niza

const accTransactions = [200,50,-150,-25,40,-20];

const calculateTotal = (transactions) => {
    let total = 0;
    for(let transaction of transactions) {
        total += transaction;
    }
    return total;
}

console.log(`Total of account (with passing an array): ${calculateTotal(accTransactions)} $`);


// 2. nacin -> uz REST operator

// ! Rest operator mora biti poslednji formalni parametar neke funkcije!

const accountTotal = (...transactions) => {
    let total = 0;
    for(let transaction of transactions) {
        total += transaction;
    }
    return total;
}

console.log(`Total of account (with passing REST operator): ${accountTotal(200,150,-100,50,-20)} $`);



// ! NEVALIDAN KOD ISPOD:

// ! 1. kod nije validan jer REST operator mora biti poslednji parametar funkcije
// const accountTotal = (...transactions, noviParametar) => {
//     let total = 0;
//     for(let transaction of transactions) {
//         total += transaction;
//     }
//     return total;
// }


// ! 2. kod nije valida jer mozete koristiti SAMO JEDAN rest operator unutar zagrada funkcije (kao parametar):
// const mojaFunc = (...prviNiz, ...drugiNiz) => {
//     console.log(prviNiz);
//     console.log(drugiNiz)
// }




// ! FUNKCIJE UNUTAR FUNKCIJA

const funcWithFuncInside = (...arrOfValues) => {

    const checkIfString = (value) => {
        // ! 1. nacin uz IF - ELSE
        // if(typeof value === 'string') {
        //     return value;
        // } else {
        //     return false;
        // }
        // ! 2. nacin uz kondicioni operator
        return typeof value === 'string' ? value : false;
    }

    let arr = [];
    for(let value of arrOfValues) {
        arr.push(checkIfString(value));
    }
    return arr;

}

console.log(funcWithFuncInside('Test', 1, 'World', 'Jupiter', true, 0));




// ! CALLBACK funkcije

const countStringsAndPrint = (arrOfValues) => {
    let counter = 0;
    for(let element of arrOfValues) {
        if(typeof element === 'string') {
            counter++;
        }
    }
    alert(`Final count of strings = ${counter}`);
}

const funcWithFuncInsideNew = (callbackFunc, ...arrOfValues) => {
    const checkIfString = (value) => typeof value === 'string' ? value : 0;

    let arr = [];
    for(let value of arrOfValues) {
        arr.push(checkIfString(value));
    }
    callbackFunc(arr);
}

funcWithFuncInsideNew(countStringsAndPrint, 'Test', 11, 'World', 'Marko', true, -7, 'Hello World');


/**
 *  TODO 10. cas homework:
 * 
 *  1. Kreirati funkciju sacuvanu u varijabli sa imenom loadCustomer koja prihvata TRI parametra: firstName, lastName, age
 *      i vraca kao povratnu vrednost novi objekat ciji se property-iji postavljaju na vrednosti prosledjenih parametara
 *  2. Testirati loadCustomer funkciju tako sto joj se proslede neki argumenti, npr: 'Petar' , 'Petrovic' , 44
 *  3. Napisati funkciju koja vraca najduzu rec u celom stringu koji se prosledi kao argument (npr Njegos Petrovic Petar)
 *      treba da vrati Petrovic. (HINT: pogledati funkciju split() nad stringom)
 *  4. Napisati funkciju koja ce prihvatiti vrednosti razlicitog tipa (npr: 'Testing', 12, false, 'World', 44, 55, true).
 *      Te argumente uhvatiti kroz REST operator i za svaki proveriti da li je tipa NUMBER.
 *      Ukoliko pojedinacan argument jeste tipa NUMBER, ispisati konkretan broj, ako nije ispisati 0.
 *  5. Napisati funkciju koja vraca tip svakog prosledjenog argumenta u formatu:
 *      Type of ARGUMENT is TIP.
 */


// 1. i 2.

const loadCustomer = (firstName, lastName, age) => ({
    firstName: firstName,
    lastName: lastName,
    age: age
});

console.log(loadCustomer('Petar', 'Petrovic', 45));

console.log(loadCustomer('Sara', 'Saric', 30));


// 3.

const checkTheLongestWord = (stringParam) => { // 'Petar Njegos Petrovic'
    let stringArray = stringParam.split(' '); // ['Petar','Njegos','Petrovic']
    let firstString = stringArray[0]; // 'Petar'
    for(let i = 1; i < stringArray.length; i++) {
        if(stringArray[i].length > firstString.length) { // 'petar' .length ==> 5
            firstString = stringArray[i];
        }
    }
    return firstString;
}

console.log(`Longest word is ${checkTheLongestWord('Petar Njegos Petrovic')}`); // Longest word is Petrovic



// 4. zadatak
const printNumbers = (...arrayOfValues) => {
    const checkForNumber = (value) => {
        return typeof value === 'number' ? value : 0;
    }

    let array = [];
    for(let val of arrayOfValues) {
        array.push(checkForNumber(val));
    }
    return array;
}

console.log(printNumbers('Testing', 12, false, 'World', 44, 55, true));


// 5. zadatak
const getTypeForEachArg = (...args) => {
    let arr = [];
    for(let val of args) {
        arr.push(`Type of ${val} is ${typeof val}`);
    }
    return arr;
}

console.log(getTypeForEachArg(1,'Jupiter', false, -555.23, 'a'));