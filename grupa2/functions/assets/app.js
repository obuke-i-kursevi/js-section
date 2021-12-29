// ! REKAPITULACIJA funkcija

// ! FUNCTION DECLARATION

function saberiDvaBroja(num1, num2) {
    return num1+num2;
}

console.log(saberiDvaBroja(30,50)); // 80


// ! FUNKCIJE MOGU BITI PROPERTY-iji U OKVIRU OBJEKATA

const student = {
    name: 'Marko',  // key - value par
    lastName: 'Petrovic',
    age: 22,
    sayHello: function(pozdrav) {
        console.log(`${pozdrav}`);  // ovo je sada metoda
    }
}

student.sayHello('Dobar dan svima!'); 



// ! FUNKCIJE SU OBJEKTI!

console.log(typeof student.sayHello); // function

console.dir(student.sayHello);




// ! FUNCTION EXPRESSION --> Smestanje funkcije u varijablu

const myName = 'Marko Bojkic';

const myFunc = function(x,y) {
    return x*y;
}


console.log(`Result is ${myFunc(4,3)}`); // 12


const squareNumberFunc = function(number) {
    return number**2;
}

console.log(`Result of square function is ${squareNumberFunc(5)}`); // 25

console.log(`Result of square function is ${squareNumberFunc(10)}`); // 100
console.log(`Result of square function is ${squareNumberFunc(2)}`); // 4
console.log(`Result of square function is ${squareNumberFunc(1)}`); // 1
console.log(`Result of square function is ${squareNumberFunc(12)}`); // 144


// RAZLIKA JE U HOISTING-u



function getRandomNumber() {
    return Math.random();
}


const getCurrentYear = function() {
    const date = new Date();
    return date.getFullYear();
}

console.log(`Year is ${getCurrentYear()}`); // 2021




// ! ANONIMNE FUNKCIJE

// setTimeout --> funkcija koja se poziva SAMO jednom nakon nekog intervala vremena

setTimeout(function() {
    console.log('Printed result of setTimeout function');
}, 3000);


// setInterval --> funkcija koja se poziva NA SVAKIH (u ovom slucaju 2 sekunde)

setInterval(function() {
    console.log('Printed result of setInterval function');
}, 2000);


const btnTest = document.getElementById('btnTest');

// primer anonimne funkcije
btnTest.addEventListener('click', function() {
    console.log('Test Button has been clicked!', someVar);
});

// primer ne-anonimne funkcije
btnTest.addEventListener('click', function testBtnFunc() {
    console.log('Test Button has been clicked!', someVar);
});




// ! ARROW FUNKCIJE

const myArrowFunc = (k,j) => {
    return k/j;
}

console.log(`First arrow function result is ${myArrowFunc(40,2)}`); // 20

function myArrowFuncOLD(k,j) {
    return k/j;
}


// arrow funkcija zapisana krace:

const myArrowFuncShorter = (k,j) => k/j;

console.log(`Shorter version of arrow func result is ${myArrowFuncShorter(6,3)}`); // 2


// arrow funkcija BEZ parametara

const myArrowFuncWithoutParams = () => {
    console.log(`Arrow function without params example!`);
}

myArrowFuncWithoutParams(); // Arrow function without params example!

const myArrowFuncWithoutParamsShorter = () => console.log(`Arrow function without params example (SHORTER)!`);

myArrowFuncWithoutParamsShorter(); // Arrow function without params example (SHORTER)!


// arrow funkcija sa SAMO JEDNIM parametrom

// const arrowFuncWithOneParam = (nekiBroj) => {
//     return nekiBroj**2;
// }

// const arrowFuncWithOneParam = (nekiBroj) => nekiBroj**2;

const arrowFuncWithOneParam = nekiBroj => nekiBroj**2;

console.log(arrowFuncWithOneParam(3)); // 9

/**
 *  TODO 9. CAS DOMACI (koriscenje ili regularnih ili anonimnih funkcija)
 * 
 *  1. Prepraviti sledecu funkciju:
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  3. Kreirati po jedan event za ta oba button-a.
 *  4. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
 *  5. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
**/

// * 1. zadatak
const sumUp = (a,b) => a+b;

console.log(`Result is ${sumUp(7,3)}`); // 10


// * 2,3,4,5. zadatak

let counter = 0;
let stopCounting = false;
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");

btnStart.addEventListener('click', function increaseCounter() {
    setInterval(function() {
        if(!stopCounting) {
            counter++;
            console.log(`Counter is ${counter}`);
        }
        return;
    }, 1000);
});

btnStop.addEventListener('click', function stopCounter() {
    stopCounting = true;
});




// ! 10. cas (29.12.2021.)

console.log('--------------------- 10. cas (29.12.2021.) -----------------');


// ! Kreiranje objekata uz Arrow funkciju

const makeCourse = (courseName, teacher, price) => ({
    courseName: courseName,
    teacher: teacher,
    price: price
});

// const course1 = make('Frontend kurs', 'Petar Petrovic', '100 $');

console.log(makeCourse('Frontend kurs', 'Petar Petrovic', '100 $'));


// ! Arrow funkcije se cesto koriste kao callback funkcije

// setTimeout(function() {
//     console.log('Nesto');
// }, 2000);


setTimeout(() => {
    console.log('Arrow function as a callback function');
}, 3000);



// ! DEFAULT argumenti funkcije

const randomFunc = (x,y,z=10) => {
    const result = (x+y)*z;
    return result;
}

// console.log(`Result is ${randomFunc(3,5)}`); // NaN

console.log(`Result is ${randomFunc(3,5)}`); // Result is 80

console.log(`Another result is ${randomFunc(3,5,2)}`); // Result is 16




// ! REST operator

// ! Koriscenje niza - prvi pristup

const markoveTransactions = [200,30,-25,-150,40];

const perineTransactions = [400, -44, 33, -55];
 
const calculateSaldo = (arrayOfTransactions) => {
    let saldo = 0;
    for(let transaction of arrayOfTransactions) {
        saldo += transaction;
    }
    return saldo;
}

console.log(`Saldo is ${calculateSaldo(perineTransactions)}`); // 334

console.log('Hello' + ' World'); // Hello World


// ! REST operator - drugi pristup
    // REST operator kreira niz od dobijenih vrednosti, kroz koji mozete da iterirate

const calculateSaldoRest = (...transactions) => {
    let saldo = 0;
    for(let transaction of transactions) {
        saldo += transaction;
    }
    return saldo;
}

console.log(`Saldo with REST operator is ${calculateSaldoRest(400, -25, 325, -100, 50)}`);


// ! REST operator mora biti poslednji parametar funkcije

const izracunajSaldo = (valuta, ...transakcije) => {
    let saldo = 0;
    for(let transakcija of transakcije) {
        saldo += transakcija;
    }
    return `${valuta} ${saldo}`; // npr $ 650
}


console.log(`Saldo je ${izracunajSaldo('$', 400, -25, 325, -100, 50)}`);


// ! Funkcija moze imati SAMO JEDAN REST operator kao parametar koji mora biti poslednji parametar funkcije

// const anotherSaldoFunc = (...firstArr, ...secondArr) => {

// }

// anotherSaldoFunc(40,20,30,20,30,20,10);




// ! FUNKCIJE UNUTAR FUNCTIJA

/**
 * 1. Napraviti funkciju koja proverava vrednosti proslednje kao argument (npr. 'Hello',25,true,'World',-66)
 * 2. Proveriti da li je svaki element dobijenog niza string ili ne
 * 3. Ako jeste, vratiti taj String, a ako nije vratiti 0
 * 4. Na kraju vratiti sve elemente konvertovane u odgovarajucu vrednost
 */

const funcInsideOfFunc = (...arrayOfValues) => {

    // const checkIfString = (value) => {
    //     if(typeof value === 'string') {
    //         return value;
    //     } else {
    //         return 0;
    //     }
    // }

    const checkIfString = (value) => {
        return typeof value === 'string' ? value : 0;
    }

    let arr = [];
    for(let value of arrayOfValues) {
        arr.push(checkIfString(value));
    }
    return arr;

}

console.log(funcInsideOfFunc('Hello',25,true,'World',-66)); // ['Hello',0,0,'World',0]





// ! CALLBACK FUNKCIJE

const countStringsAndPrint = (arrayOfValues) => {
    let count = 0;
    for(let value of arrayOfValues) {
        if(typeof value === 'string') {
            count++;
        }
    }
    alert(`Final count of strings is ${count}`);
}

const funcWithCallback = (callbackFunc, ...arrayOfValues) => {
    const checkIfString = (value) => {
        return typeof value === 'string' ? value : 0;
    }

    let arr = [];
    for(let value of arrayOfValues) {
        arr.push(checkIfString(value)); 
    }
    // arr = ['Hello', 1,23, true, 'Jupiter', 'Marko']
    callbackFunc(arr);
}

funcWithCallback(countStringsAndPrint, 'Hello','Nesto', 1,23, true, 'Jupiter', 'Marko');


/**
 *  TODO 9. CAS DOMACI (koriscenje ili regularnih ili anonimnih funkcija)
 * 
 *  1. Prepraviti sledecu funkciju:
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
 *  7. Kreirati funkciju sacuvanu u varijabli sa imenom loadCustomer koja prihvata TRI parametra: firstName, lastName, age
 *      i vraca kao povratnu vrednost novi objekat ciji se property-iji postavljaju na vrednosti prosledjenih parametara
 *  8. Testirati loadCustomer funkciju tako sto joj se proslede neki argumenti, npr: 'Petar' , 'Petrovic' , 44
 *  9. Napisati funkciju koja vraca najduzu rec u celom stringu koji se prosledi kao argument (npr Njegos Petrovic Petar)
 *      treba da vrati Petrovic. (HINT: pogledati funkciju split() nad stringom)
 *  10. Napisati funkciju koja ce prihvatiti vrednosti razlicitog tipa (npr: 'Testing', 12, false, 'World', 44, 55, true).
 *      Te argumente uhvatiti kroz REST operator i za svaki proveriti da li je tipa NUMBER.
 *      Ukoliko pojedinacan argument jeste tipa NUMBER, ispisati konkretan broj, ako nije ispisati 0.
 *  11. Napisati funkciju koja vraca tip svakog prosledjenog argumenta u formatu:
 *      Type of ARGUMENT is TIP.
 *     
 */



// * 1.
const sumUp = (a,b) => a+b;

console.log(`Sum up result is ${sumUp(50,60)}`); // 110


// * 2.
const sumUp1 = (a,b=10) => a+b;

console.log(`Sum up result with default b parameter is ${sumUp1(50)}`); // 60

// * 3. 4. 5. i 6. zadatak
let counter = 0;
let stopCounting = false;

let btnCounter = document.getElementById('btnCounterIncrease');

let btnStop = document.getElementById('btnStopCounting');

btnCounter.addEventListener('click', function increaseCounter() {
    setInterval(function() {
        if(!stopCounting) {
            counter++;
            console.log(`Counter is ${counter}`);
        }
        return;
    }, 1000);
})

btnStop.addEventListener('click', function stop() {
    stopCounting = true;
});


// * 7. i 8. zadatak
const loadCustomer = (firstName, lastName, age) => ({
    firstName: firstName, 
    lastName: lastName, 
    age: age
});

console.log(loadCustomer('Petar', 'Petrovic', 44));

// * 9. zadatak
const checkLongestWord = (stringParam) => {
    let strArr = stringParam.split(' ');
    let firstStr = strArr[0];
    for(let i = 1; i < strArr.length; i++) {
        if(strArr[i].length > firstStr.length) {
            firstStr = strArr[i];
        }
    }
    return firstStr;
}

console.log(checkLongestWord('Njegos Petrovic Petar'));

// * 10. zadatak
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

// * 11. zadatak
const getTypeForEachArg = (...args) => {
    let arr = [];
    for(let val of args) {
        arr.push(`Type of ${val} is ${typeof val}`);
    }
    return arr;
}

console.log(getTypeForEachArg(1,'Jupiter', false, -555.23, 'a'));
