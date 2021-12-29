// ! 9. cas (27.12.2021.)

console.log('----------------- 9. cas (27.12.2021.) --------------------');

// ! REKAPITULACIJA do sada

// ! PRIMER FUNCTION DECLARATION-a (deklaracije funkcije)

function nekaFunkcija(ime) {
    return ime;
}

console.log(nekaFunkcija('Marko Markovic'));


const student = {
    name: 'Nikola',
    lastName: 'Nikolic',
    age: 23,
    sayHello: function() {
        console.log(`Good Morning!`);  // ! ovo je sada metoda
    }
}

console.log(`Student name: ${student.name}`);
student.sayHello();


// ! FUNKCIJE SU OBJEKTI

console.log(typeof student.sayHello); // function

console.dir(student.sayHello);



// ! FUNCTION EXPRESSION --> Smestanje funkcija u varijable


const nekaVarijabla = 5;

const myFunc = function(a,b) {
    return a*b;
}

console.log(`Result is ${myFunc(5,10)}`); // 50

const printStudentName = function(someStudent) {
    const studentName = someStudent.name;
    const studentLastName = someStudent.lastName;
    return `Student ${studentName} ${studentLastName}`;
}


console.log(printStudentName(student));



// primer funkcije kroz function expression koja argument dize na kvadrat

const squareNumber = function(nekiBroj) {
    return nekiBroj**2;
}

console.log(`Neki broj na kvadrat je ${squareNumber(5)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(3)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(10)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(2)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(7)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(12)}`);
console.log(`Neki broj na kvadrat je ${squareNumber(20)}`);


// Primer hoistinga function declaration-a


console.log(`Random decimal number is ${getRandomNumber()}`); // 0.5123213123 // ! RADI

function getRandomNumber() {
    return Math.random();
}


// Primer hoistinga function expression-a

const getCurrentYear = function() {
    const date = new Date();
    return date.getFullYear();
}

console.log(`Current year is ${getCurrentYear()}`);



// ! ANONIMNE FUNKCIJE

setTimeout(function() {
    console.log('Printed result of setTimeout function'); // ! poziva se samo JEDNOM
}, 4000);


setInterval(function() {
    console.log('Printed result of setInterval function'); // ! poziva se SVAKE 2 sekunde
}, 2000);

const btnTestRef = document.getElementById('btnTest');

btnTestRef.addEventListener('click', function printMessageAndNumber() {
    console.log(`Test button has been clicked ${x}!`);  // ! Uncaught ReferenceError: Cannot access 'x' before initialization at HTMLButtonElement.printMessageAndNumber
    let x = 22;
});





// ! ARROW FUNKCIJE

// primer:

const subtractTwoNumbers = (x,y) => {
    return x-y;
}

// ovo gore je isto kao ovo dole:

function subtractTwoNumbersOLD(x,y) {
    return x-y;
}

console.log(`Result of subtracted numbers is ${subtractTwoNumbers(10,7)}`); // 3


// * kraci nacin zapisa arrow funkcije:

const subtractTwoNumbersShorter = (x,y) => x-y;

console.log(`Result of subtracted numbers is ${subtractTwoNumbersShorter(100,22)}`); // 78


// arrow funkcija bez parametara

const arrowFuncWithoutParams = () => {
    console.log(`I called arrow function without params`);
}

arrowFuncWithoutParams(); // I called arrow function without params

const arrowFuncWithoutParamsShorter = () => console.log(`I called arrow function without params SHORTER`);

arrowFuncWithoutParamsShorter(); // I called arrow function without params SHORTER


// arrow funkcija sa jednim parametrom

const arrowSquareFunc = number => number**2;

console.log(arrowSquareFunc(6)); // 36

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
 *      ne prosledi (npr 10). // ! mozete preskociti, preporuka pogledati DEFAULT parametre funkcije
 * 
 *  3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  4. Kreirati po jedan event za ta oba button-a.
 *  5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a. (HINT: pogledati setInterval funkciju)
 *  6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
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



// ! 10. cas (29.120.2021)

console.log(`---------------------- 10. cas (29.12.2021) -----------------`);

const makeCourse = (courseName, teacher) => ({
    courseName: courseName,
    teacher: teacher
});

console.log(makeCourse('Frontend Course', 'Marko Markovic'));


// setTimeout(function nekaFunkcija() {
//     console.log('Nesto')       // ! Moze i ovako
// }, 2000);

setTimeout(() => {
    console.log('Testing arrow function as a callback function');
},4000);



// ! DEFAULT parametri funkcije

const calculateFunc = (x,y,z=10) => {
    const result = (x+y)*z;
    return result;
}

console.log(calculateFunc(4,3)); // 70

console.log(calculateFunc(5,6,2)); // 22




// ! REST Operator

// 1. prosledjivanje niza - pristup

const accountTransactions = [200,30,-25,-150,40];

const calculateTotal = (transactionsArr) => {
    let total = 0;
    for(let transaction of transactionsArr) {
        total += transaction;
    }
    return total;
}

console.log(`Saldo: ${calculateTotal(accountTransactions)}`);



// 2. rest operator - pristup

const calculateTotalRest = (...transactions) => {
    let total = 0;
    for(let transaction of transactions) {
        total += transaction;
    }
    return total;
}

console.log(`Saldo with Rest operator: ${calculateTotalRest(150,25,-75,45,-30)}`);


// ! REST operator mora biti poslednji parametar funkcije

const calculateTotalNew = (vault, ...transactions) => {
    let total = 0;
    for(let transaction of transactions) {
        total += transaction;
    }
    return `${vault} ${total}`;
}

console.log(`Saldo with Rest operator: ${calculateTotalNew('$',150,25,-75,45,-30)}`);


// ! Mozete koristiti SAMO JEDAN REST operator kao parametar PO jednoj funkciji

// const usingRestFunc = (...firstArr, ...secondArr) => {
//     console.log(`Hello`)                                // ! Nevalidan kod
// }

// usingRestFunc(1,2,3,4,5,6);


// ! FUNKCIJE UNUTAR FUNKCIJA

const funcInsideOfFunc = (...arrOfValues) => {

    const checkIfString = (value) => {
        return typeof value === 'string' ? value : 0;
    }
    
    // const checkIfStringWithIf = (value) => {
    //     if(typeof value === 'string') {
    //         return value;
    //     } else {
    //         return false;
    //     }
    // }

    let arr = [];
    for(let value of arrOfValues) {
        arr.push(checkIfString(value));
    }
    return arr;

}

console.log(funcInsideOfFunc('Testing', 11, 'World', 'Marko', true, 0));




// ! CALLBACK funkcije


const countStringsAndPrint = (arrayOfValues) => {
    let count = 0;
    for(let val of arrayOfValues) {
        if(typeof val === 'string') {
            count++;
        }
    }
    alert(`Final count of strings is ${count}`);
}


const funcInsideOfFuncCallback = (callbackFunc, ...arrayOfValues) => {
    const checkIfString = (value) => {
        return typeof value === 'string' ? value : 0;
    }

    let arr = [];
    for(let value of arrayOfValues) {
        arr.push(checkIfString(value));
    }

    callbackFunc(arr);
}

funcInsideOfFuncCallback(countStringsAndPrint, 'Test', 32, 'Hello', 'World', 'Jupiter', true, -7);


/**
 *  TODO 9. CAS DOMACI (koriscenje ili regularnih ili anonimnih funkcija)
 * 
 *  1. Prepraviti sledecu funkciju: // * URADJEN 9. casa
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. U istu funkciju (sumUp) za parametar b dodati default vrednost, koja ce biti koriscena u 
 *      slucaju da se vrednost ne prosledi (npr 10).
 * 
 *  3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting). // * 3.,4.,5. i 6. URADJENI 9. casa
 *  4. Kreirati po jedan event za ta oba button-a.
 *  5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
 *  6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
 *  7. Kreirati funkciju sacuvanu u varijabli sa imenom loadCustomer koja prihvata TRI parametra: firstName, lastName, age
 *      i vraca kao povratnu vrednost novi objekat ciji se property-iji postavljaju na vrednosti prosledjenih parametara
 *  8. Testirati loadCustomer funkciju tako sto joj se proslede neki argumenti, npr: 'Petar' , 'Petrovic' , 44
 *  9. Napisati funkciju koja vraca najduzu rec u celom stringu koji se prosledi kao argument 
 *      (npr Njegos Petrovic Petar) treba da vrati Petrovic. (HINT: pogledati funkciju split() nad stringom)
 *  10. Napisati funkciju koja ce prihvatiti vrednosti razlicitog tipa (npr: 'Testing', 12, false, 'World', 44, 55, true).
 *      Te argumente uhvatiti kroz REST operator i za svaki proveriti da li je tipa NUMBER.
 *      Ukoliko pojedinacan argument jeste tipa NUMBER, ispisati konkretan broj, ako nije ispisati 0.
 *  11. Napisati funkciju koja vraca tip svakog prosledjenog argumenta u formatu:
 *      Type of ARGUMENT is TIP.
 *     
 */

// 2,

const sumUp1 = (a,b=10) => a + b;

console.log(`Testing sum up: ${sumUp1(50)}`);


// 7. i 8.

const loadCustomer = (firstName,lastName,age) => ({
    firstName: firstName,
    lastName: lastName,
    age: age
});

console.log(loadCustomer('Marko', 'Markovic', 33));


// 9.

const checkLongestWord = (stringParam) => {
    let stringArr = stringParam.split(' '); // ! odvaja string po razmaku
    let firstString = stringArr[0];
    for(let i = 1; i < stringArr.length; i++) {
        if(stringArr[i].length > firstString.length) {
            firstString = stringArr[i];
        }
    }
    return firstString;
}

console.log(checkLongestWord('Petar Njegos Petrovic'));

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