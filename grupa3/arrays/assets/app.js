// ! 11. cas (10.02.2022.)

console.log('------------ 11. cas (10.02.2022.) -----------');

// ! NIZOVI

// ! Kreiranje nizova na vise nacina:

// * 1. pomocu uglastih zagrada

const myArr = [5,10,15];

console.log(myArr);


// * 2. Koriscenjem konstruktora

const myArr1 = new Array();

console.log(myArr1);

const myArr2 = new Array(5,7,8);

console.log(myArr2);

// neocekivano ponasanje:

const myArr3 = new Array(5);

console.log(myArr3);


// * 3. Array.of() funkcijom:

const myArr4 = Array.of(10,20,30);

console.log(myArr4);


// * 4. Array.from() funkcijom

let myStr1 = 'World';

console.log(Array.from(myStr1));




// ! Sta se sve moze naci u jednom nizu?


// mozete mix-ovati tipove podataka u nizu:

const mixedArr = [
    10,
    'Hello World',
    false,
    {name: 'Marko Markovic', age: 22}
];

console.log(mixedArr);


// mozete u niz dodati pod-nizove

const nestedArr = [[4,5,1], ['Java','JavaScript']];

console.log(nestedArr);

for(let arr of nestedArr) {
    for(let value of arr) {
        console.log(value);
    }
}


// jos dublja struktura nested nizova:

const nestedArr1 = [[1,2,3,[10,20,30]], [5,'Hello', true]];




// ! ARRAY FUNKCIJE

// ! PUSH --> dodaje element na kraj niza i vraca novu duzinu niza

const pushArray = [1,2,3,4,5];

let pushArrayLength = pushArray.push(10);

console.log(`Array ${pushArray} has length of ${pushArrayLength} after PUSH function.`);


// ! UNSHIFT --> dodaje element na pocetak niza i vraca novu duzinu niza

pushArrayLength = pushArray.unshift(0);

console.log(`Array ${pushArray} has length of ${pushArrayLength} after UNSHIFT function.`);


// ! POP --> uklanja element sa kraja niza, ali pored toga i vraca sam element koji je izbacen sa kraja tog niza

let removedEl = pushArray.pop();

console.log(`Removed element is ${removedEl} after POP. Array looks like this: ${pushArray}`);


// ! SHIFT --> uklanja element sa pocetka niza, ali i pored toga vraca sam element koji je uklonjen

removedEl = pushArray.shift();

console.log(`Removed element is ${removedEl} after SHIFT. Array looks like this: ${pushArray}`);



// ! Dodavanje elementa na tacno odredjeno mesto

pushArray[2] = 32; // ! ovo otklanja potpuno element koji je do ovog momenta bio na indeksu 2 (poziciji 3).

console.log('Changed array', pushArray);


pushArray[10] = 111;

console.log('Changed array', pushArray); // [1, 2, 32, 4, 5, empty × 5, 111]

pushArray[8] = 'hello';

console.log('Changed array', pushArray); // [1, 2, 32, 4, 5, empty × 3, 'hello', empty, 111]




// ! SPLICE --> koristi se za dosta razlicitih stvari i to samo nad nizovima:

// * a) uklanja odredjeni broj elemenata iz niza OD odredjenog indeksa i kreira novi niz od tih obrisanih elemenata:

const langs = ['Java', 'JavaScript', 'C#', 'Swift', 'Python'];

const splicedArr = langs.splice(3,2); 

console.log(langs); // ['Java', 'JavaScript', 'C#']

console.log(splicedArr); // ['Swift', 'Python']


// * b) moze se koristiti i za dodavanje elemenata na tacno odredjeno mesto:

langs.splice(2,0,'TypeScript');

console.log(langs); // ['Java', 'JavaScript', 'TypeScript', 'C#']


splicedArr.splice(1,0,'Ruby on Rails', 'Scada');

console.log(splicedArr); //  ['Swift', 'Ruby on Rails', 'Scada', 'Python']


// * c) moze se koristiti za brisanje SVIH elemenata iz niza:

//  splicedArr.splice(0);

console.log(splicedArr); // []


// * d) brisanje elemenata od odredjene pozicije pa sve do kraja niza:

//  splicedArr.splice(1);

console.log(splicedArr); // ['Swift']

splicedArr.splice(3,1);

console.log(splicedArr); // ['Swift', 'Ruby on Rails', 'Scada']


// * e) brisanje elemenata sa KRAJA niza prosledjivanjem negativnog indeksa:

splicedArr.splice(-1,1);

console.log(splicedArr); // ['Swift', 'Ruby on Rails']





// ! SLICE --> vraca kopiju odredjenog dela niza ili celog niza

const numbers = [1,2.3,4,5.75,12];

// * a) vracanje kopije DELA niza:

const partOfNumbers = numbers.slice(0,2);

console.log(numbers); // [1, 2.3, 4, 5.75, 12]

console.log(partOfNumbers); // [1, 2.3]

console.log(numbers.slice(2)); // [4, 5.75, 12]



// * b) vracanje kopije CELOG niza (ali shallow kopije):

// ? PODSETNIK:

let a = 5;
let b = a;

// * kopiranje primitivnih tipova

console.log(a);
console.log(b);

b+=10;

console.log(a); // 5
console.log(b); // 15 // ! kopija ne utice na original

// * kopiranje referentnih tipova

let niz1 = [1,2,3];
let niz2 = niz1;

niz1.push(55);

console.log(niz1);
console.log(niz2);

// ?


const newNumbers = numbers.slice();

console.log(newNumbers);

numbers.push(100);

console.log(numbers);
console.log(newNumbers);



// TODO 11. cas DOMACI:

/**
 *  1. Kreirati niz sa artiklima u radnji (svaki artikl ima svoj naziv i svoju cenu)
 *  2. Dodati u niz artikala jos 2 elementa, jedan na pocetak, a drugi na kraj niza 
 *  3. Na trece mesto u nizu dodati novi artikl, ali tako da se trenutno treci element NE OBRISE, vec samo pomeri za jedno mesto udesno
 *  4. Obrisati poslednji element iz niza
 *  5. Kreirati novi niz na osnovu samo poslednja tri elementa iz artikala
 *  6. Iz tog novog niza, odvojiti samo prva dva elementa u novi niz
*/

const articles = [
    {
        name: 'Bread',
        price: 50
    },
    {
        name: 'Bannanas',
        price: 30
    },
    {
        name: 'Yogurt',
        price: 10
    }
]

// 2.
articles.push({
    name: 'Milk',
    price: 6
});

articles.unshift({
    name: 'Chocolate',
    price: 12.55
});


// 3.
articles.splice(2,0, {
    name: 'Orange Juice',
    price: 50
});

console.log('articles', articles);


// 4.

// articles.pop();

articles.splice(-1,1);

console.log('articles', articles);


// 5.

const lastThreeArticles = articles.slice(-3);

console.log(lastThreeArticles);

// 6.

const firstTwoArticles = lastThreeArticles.slice(0,2);

console.log(firstTwoArticles);




// ! 12. cas (17.02.2022.)

console.log('---------------- 12. cas (17.02.2022.) -----------------');

// ! CONCAT --> funkcija koja spaja elemente nizova

const firstResults = [4,2,5,3,1];

const secondResults = [4,4,5,3,2];

const allResults = firstResults.concat(secondResults,articles);

console.log('Concat function', allResults);






// ! indexOf i lastIndexOf funkcije --> funkcije koje vracaju indekse elemenata

let idx = firstResults.indexOf(5);

console.log(`Index of number 5 in firstResults : ${idx}`);

console.log(`SecondResults array -> index of number 4: ${secondResults.indexOf(4)}`); // vraca samo 0

console.log(`index of number 66: ${firstResults.indexOf(66)}`); // -1

console.log(`Last Index of 4: ${secondResults.lastIndexOf(4)}`); // 1


// * u slucaju referentnih tipova indexOf i lastIndexOf ne funkcionisu

const studenti = [
    {
        name: 'Marko',
        lastName: 'Markovic',
        age: 32,
        courses: ['Java', 'JavaScript']
    },
    {
        name: 'Sara',
        lastName: 'Saric',
        age: 33,
        courses: ['Java', 'C#']
    },
    {
        name: 'Petar',
        lastName: 'Petrovic',
        age: 35,
        courses: ['Python', 'JavaScript']
    }
];

console.log(studenti.indexOf({
    name: 'Marko',
    lastName: 'Markovic',
    age: 32,
    courses: ['Java', 'JavaScript']
})); // -1





// ! FIND i FINDINDEX funkcije

// * FIND funkcija vraca PRVI element pronadjen na osnovu uslova pretrage

// const marko = studenti.find((student) => {
//     return student.name === 'Marko';
// });

const marko = studenti.find(student => student.name === 'Marko');

console.log('FIND funkcija po imenu:', marko);

const studentOf35 = studenti.find(student => student.age === 35);

console.log('FIND funkcija po godinama studenta', studentOf35);


// * FINDINDEX funkcija koja vraca indeks elementa koji trazimo na osnovu pretrage

const idxOfSara = studenti.findIndex(student => student.name === 'Sara');

console.log(`Idx of Sara: ${idxOfSara}`);

studenti.splice(idxOfSara, 1);

console.log(studenti);




// ! INCLUDES funkcija --> proverava da li odredjeni element postoji u nizu


console.log(numbers); // [1, 2.3, 4, 5.75, 12, 100]

const isNum = numbers.includes(2.3);

const odgovor = isNum 
    ? `Postoji broj 2.3` 
    : `Ne postoji 2.3`;

console.log(odgovor);



// * provera da li odredjeni element postoji u nizu na dva nacina:

// * 1. includes

// * 2. indexOf

console.log(numbers.indexOf(100) !== -1); // true





// ! FOREACH funkcija

const myAccTransactions = [100,-30,200,40,-150];

// * 1. nacin FOR OF

for(let trans of myAccTransactions) {
    console.log(`${trans} $`);
}


// * 2. nacin FOR petlja

for(let i = 0; i < myAccTransactions.length; i++) {
    console.log(`${myAccTransactions[i]} $`);
}


// * 3. nacin FOR EACH funkcija

// myAccTransactions.forEach((transaction) => {
//     console.log(`${transaction} $`);
// });

myAccTransactions.forEach(transaction => console.log(`${transaction} $`));




// TODO npr hocemo da na svaku transakciju ukalkulisemo proviziju npr od 5 % i te transakcije sa provizijom dodamo u novi nizu

let bankProvision = 0.05;
const noviNiz = [];


// myAccTransactions.forEach((transaction) => {
//     const provisionOfTransaction = transaction * bankProvision;
//     const transactionWithProvision = transaction + provisionOfTransaction;
//     noviNiz.push(transactionWithProvision);
// });

// console.log('Transactions with provisions included: ', noviNiz);


// * kraca varijanta prethodnog

myAccTransactions.forEach(transaction => noviNiz.push(transaction * (1 + bankProvision)));

console.log('Transactions with provisions included: ', noviNiz);



// * ispisivanje transakcija sa provizijama i njihovim pozicijama

noviNiz.forEach((transaction, idx) => {
    console.log(`Transaction number ${++idx} = ${transaction} $`);
});




// TODO npr hocemo da za svaku transakciju zabelezimo njenu poziciju i iznos i to dodamo u novi niz

const newArr = [];

const testArr = [];

noviNiz.forEach((transaction, idx) => {
    // const ob = {
    //     position: idx+1,
    //     value: `${transaction} $`
    // }
    // newArr.push(ob);
    // * kraci nacin pisanja
    newArr.push({
        position: idx+1,
        value: `${transaction} $`
    });
});

// * Jos kraci nacin pisanja koda:
noviNiz.forEach((transaction, idx) => testArr.push({
    position: idx+1,
    value: `${transaction} $`
}));

console.log(testArr);




// TODO 12. cas DOMACI:

/**
 *  1. Kreirati poseban niz koji je spoj poslednja dva niza dobijena (iz 5. i 6. zadatka)
 *  2. U nizu artikala, pronaci artikl koji se naziva 'Yogurt' i smestiti ga u varijablu 'yogurt'
 *  3. Pronaci indeks artikla koji ima cenu 30
 *  4. Nad svakim artiklom dodeliti novi property 'formatedPrice' koji ce sadrzati prefiks '$' i cenu tog artikla
 *  5. Kreirati novi niz koji ce sadrzati sve cene svakog artikla.
 *  6. Proveriti da li se u novom nizu svih cena nalazi ijedna cena koja iznosi 7 i ispisati odgovor u formatu 'cena 7 postoji' ili 'cena 7 ne postoji'
 *  7. Za svaku cenu obracunati dodatan PDV (npr. od 8 %) i dodati ga na postojecu cenu i za svaku cenu dodati njen redni broj u nizu
*/


// 1.

const concatedArticles = lastThreeArticles.concat(firstTwoArticles);

console.log('Concated articles', concatedArticles);


// 2.

const yogurt = articles.find(article => article.name === 'Yogurt');

console.log('Yogurt', yogurt);


// 3.

const ofPrice30 = articles.findIndex(article => article.price === 30);

console.log('Off price 30', ofPrice30);

articles.splice(ofPrice30, 1);

console.log(articles);


// 4.

articles.forEach(article => article.formattedPrice = `$ ${article.price}`);

console.log(articles);



// 5.

const allPrices = [];
articles.forEach(article => allPrices.push(article.price));

console.log(allPrices);


// 6.

const isPrice7 = allPrices.includes(7) ? 'cena 7 postoji' : 'cena 7 ne postoji';

console.log(isPrice7);


// 7.

const pricesWithPDV = [];

allPrices.forEach((price, idx) => {
    const priceObj = {
        number: idx+1,
        price: price * (1+0.08)
    }
    pricesWithPDV.push(priceObj);
})

console.log(pricesWithPDV);




// ! 13. cas (22.02.2022.)

console.log('------------ 13. cas (22.02.2022.) -----------');


// ! MAP --> funkcija koja prihvata kao svoj argument funkciju koja transformise svaki element iz niza i vraca NOVI niz (transformisani niz)

let letters = ['a','b','c','d','e'];

// uz pomocu toUpperCase funkcije transformisati svako slovo iz letters niza u veliko slovo

// * 1. nacin

// for(let letter of letters) {
//     console.log(letter.toUpperCase());
// }

// * 2. nacin uz MAP funkciju:

let bigLetters = letters.map((letter) => {
    return letter.toUpperCase();
});

console.log('Big letters with MAP function', bigLetters);


// ili na primer:

let normalPrices = [30.5, 20, 15, 7.4, 10];

let pdv = 0.08;

let updatedPrices = normalPrices.map(price => price * (1 + pdv));

console.log('Updated pricess (with PDV) with MAP function', updatedPrices);


// ili na primer:

let articlesNames = articles.map(article => article.name);

console.log('Articles names', articlesNames);




// ! SORT --> funkcija koja sortira i MUTIRA (menja) niz nad kojim tu funkciju i pozivamo

let brojevi = [10,23,11, 4.2 ,5,123,55,0];

console.log(brojevi.sort());

console.log(articlesNames.sort());

// * 1. nacin sortiranja:

// brojevi.sort((a,b) => {
//     if(a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });

// console.log('First way of sorting BROJEVI', brojevi);


// * 2. nacin sortiranja:

// sortiranje u rastucem redosledu:
brojevi.sort((a,b) => {
    return a-b;
});

console.log('Sort in ASCENDING way', brojevi);

// sortiranje u opadajucem redosledu:
brojevi.sort((a,b) => {
    return b-a;
});

console.log('Sort in DESCENDING way', brojevi);

// resetovanje u RASTUCI redosled:
brojevi.sort((a,b) => {
    return a-b;
});



// ! REVERSE --> reverse-uje niz u kontra pravcu

console.log(brojevi.reverse()); // [123, 55, 23, 11, 10, 5, 4.2, 0]




// ! FILTER --> funkcija koja filtrira niz vracajuci samo elemente koji zadovoljavaju neki logicki uslov

const greaterThan10 = brojevi.filter(broj => broj >= 10);

console.log('FILTER function for numbers greater than 0', greaterThan10);


const words = ['Marko', 'Java', 'Mars', 'C#'];

const onlyM = words.filter(word => word[0] === 'M');

console.log(onlyM);


// suma svih brojeva u nizu BROJEVI:

let sum = 0;

for(let num of brojevi) {
    sum += num;
}

console.log(`Sum of BROJEVI = ${sum}`);




// ! REDUCE --> funkcija koja redukuje niz na jednu vrednost

let reduceRes = brojevi.reduce((prevVal, currVal) => {
    return prevVal += currVal;
}, 0);

console.log(`Reduce result is ${reduceRes}`);





// ! FLAT --> funkcija koja na povrsinu niza PRVOG reda izvlaci elemente podnizova

const arrWithNestedArr = [[4,5,1], ['JavaScript', 10, 'Java',], 8, 10];

console.log(arrWithNestedArr);

const flatArray1 = arrWithNestedArr.flat(1);

console.log(flatArray1);


const arrWithNestedArr1 = [
    [30,201,1,
        [10,20,
            ['java', true]
        ]
    ], 
    [50, 'hello', 
        [99,88,77]
    ]
];

const flatArray2 = arrWithNestedArr1.flat(3);

console.log(flatArray2);




// ! Chaining funkcija u JavaScript-u

// const veciOd10 = brojevi.filter(broj => broj > 10);

// const pomnoziSa2 = veciOd10.map(broj => broj * 2);

// const zbir = pomnoziSa2.reduce((prevVal, currVal) => prevVal + currVal);

// console.log(`Konaca zbir = ${zbir}`);


// * KRACI pristup uz CHAINING (ulancavanje funkcija):

const chainingResult = brojevi
    .filter(broj => broj > 10)
    .map(broj => broj * 2)
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Result of chaining: ${chainingResult}`); // Result of chaining: 424




// * PRIMER: 

const accounts = [
    {
        owner: 'Marko Markovic',
        age: 55,
        city: 'Novi Sad',
        transactions: [50,30,-150,300,-20]
    },
    {
        owner: 'Petar Petrovic',
        age: 35,
        city: 'Novi Sad',
        transactions: [500,320,-450,200,-50]
    },
    {
        owner: 'Sara Saric',
        age: 25,
        city: 'Beograd',
        transactions: [1050,30,-1250,500,-50]
    }
];


// * DUZI nacin racunanja salda svih racuna banke

const saldo = accounts
    .map(account => account.transactions)
    .flat()
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Saldo of all accounts is ${saldo}`);


// * KRACI nacin racunanja salda svih racuna banke
// ! NAPOMENA: flatMap() ide do dubine 1 (depth argument je po default-u 1 i ne moze se menjati)

const newSaldo = accounts
    .flatMap(account => account.transactions)
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`New saldo with FLATMAP function: ${newSaldo}`);




// ! SPLIT --> funkcija koja splituje (razdvaja) string po odredjenom separatoru

let nekiStr = 'World';

console.log(nekiStr.split(''));

nekiStr = 'Hello World';

console.log(nekiStr.split(' '));

let weatherData = 'city: Novi Sad;weather: cloudy;degrees: 20 C';

let splittedWeatherData = weatherData.split(';');




// ! JOIN --> funkcija koja spaja elemente iz niza po nekom separatoru

let originalData = splittedWeatherData.join(';');

console.log(originalData);




/** 
 *  TODO 13. cas (22.02.2022.)
 * 
 *  1. Kreirati prodavnicu za odecu (5 item-a dodati)
 *  2. Svaki odevni predmet ima svoj ID, naziv, cenu, moguce boje i moguce velicine
 *  3. Dodati u korpu 3 item-a po izboru na osnovu njihovog ID-a, pri cemu se ID-evi artikla 
 *     unose kroz jedan ISTI prompt prozor, pri cemu se ID-evi odvajaju zarezom (1,3,5 npr.)
 *  4. Pronaci proizvode sa unesenim ID-evima i ispisati ih na konzoli svaki POJEDINACNO uz poruku 
 *     'Chosen products are: ' nakon cega sledi lista odabranih proizvoda.
 *  5. Poslednji proizvod iz korpe ukloniti (iz niza) i dodati neki drugi proizvod ciji se ID takodje unosi 
 *     kroz prompt prozor.
 *  6. Izracunati ukupnu cenu svih proizvoda iz korpe i ispisati je uz poruku `Total price is CENA $`
 *  7. Na ukupnu cenu obracunati popust od 10 % i sniziti je za tu vrednost i ispisati je na konzoli uz poruku:
 *     `Total Price with discount is CENA $`;
 *  8. Proizvode iz korpe sortirati opadajuce po ceni
 *  9. Ispisati sve moguce velicine proizvoda iz korpe (kao deo jednog niza)
 *  10. Iz niza dobijenih velicina otkloniti duplikate (dakle jedna velicina se sme pojaviti samo jednom u istom tom nizu)
*/

// 1. i 2.
const clothes = [
    {
        id: 1,
        name: 'T-shirt',
        price: 20.00,
        colors: ['black','white','gray'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 2,
        name: 'Pants',
        price: 40.00,
        colors: ['gray','white','black'],
        sizes: ['M', 'L', 'XL']
    },
    {
        id: 3,
        name: 'Hat',
        price: 12.50,
        colors: ['black','white','gray'],
        sizes: ['S', 'M']
    },
    {
        id: 4,
        name: 'Socks',
        price: 7.50,
        colors: ['black','white','red'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: 'Hoodie',
        price: 25.00,
        colors: ['black','white','red','yellow'],
        size: ['S','M', 'L', 'XL', 'XXL']
    }
]


// 3. 
const basket = [];
const enteredIDs = prompt('Enter up to 3 clothes items:');


// 4.
const chosenIDs = enteredIDs
    .split(',')
    .map(id => parseInt(id));


for(let id of chosenIDs) {
    for(let item of clothes) {
        if(item.id === id) {
            basket.push(item);
        }
    }
}

console.log(`Chosen products are:`);
basket.forEach(item => console.log(item));


// 5.
basket.splice(-1,1);

let newProductID = prompt('Enter another product ID:');

let newProduct = clothes.find(product => product.id === +newProductID);

basket.push(newProduct);

console.log(basket);


// 6.
let totalPrice = basket
    .map(item => item.price)
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Total price of basket is ${totalPrice} $`);

let discount = 0.1;

totalPrice -= totalPrice * discount;

console.log(`Total price with discount is ${totalPrice} $`);


// 7.
basket.sort((a,b) => {
    return b.price - a.price;
});

console.log(basket);


// 8.
// let sizesArray = [...basket.flatMap(item => item.sizes)]; // ! ovo cemo uciti sledeci cas (14. cas) tzv Spread operator

let sizesArray = basket
    .flatMap(item => item.sizes);

console.log(sizesArray);

// 9.
let filteredArray = sizesArray.filter((size, idx, sizesArray) => {
    return sizesArray.indexOf(size) === idx;
});

console.log(filteredArray);






// ! 14. cas (24.02.2022.)

console.log('------------- 14. cas (24.02.2022.) --------------');


// ! SOME funkcija --> funkcija vraca true ako BAR JEDAN element iz niza zadovljava neki logicki uslov


console.log('Brojevi', brojevi);

const isBiggerThan10 = (number) => number > 10;

console.log('Array BROJEVI contains at least one number greater than 10: ', brojevi.some(isBiggerThan10));



// * ili na primer proveriti da li je bar ijedan broj iz niza BROJEVI paran?

// ! REMAINDER operator -> %   (proverava ostatak pri deljenju)

const findEvenNum = (number) => number % 2 === 0;

console.log('Array BROJEVI contains at least one even number: ', brojevi.some(findEvenNum));




// ! EVERY funkcija --> f-ja koja vraca true ako SVAKI element iz niza zadovoljava neki logicki uslov

console.log('Array BROJEVI contains EVERY number greater than 10: ', brojevi.every(isBiggerThan10));




// ! FILL funkcija --> f-ja koja menja sve elemente u odredjenu vrednost. Pri tome, moze se cak i zadati pocetak/kraj dokle se menjaju vrednosti.

const randomNumbers = [];

for(let i = 0; i<6; i++) {
    const number = Math.floor(Math.random() * 1000); // 314.1234131 --> 314
    randomNumbers.push(number);
}

console.log(randomNumbers);


console.log('Fill function', randomNumbers.fill(0, 2));

console.log('Fill function with X', randomNumbers.fill('x'));

// let creditCardNumber = '4316 8123 5123 4124';

// let cardInfoArr = creditCardNumber.split(' ');

// let cardNumberTransformed;

// for(let i = 0; i < cardInfoArr.length-2; i++) {
//     let str = cardInfoArr[i];
//     str.fill('x');
// }

// console.log(cardInfoArr);




// ! SPREAD operator --> operator koji izvlaci iz niza pojedinacne elemente i vraca listu tih elemenata


let fourNums = [5,10,15,4];
const addNums = (x,y,z,j) => {
    return x+z+y+j;
}

let result = addNums(...fourNums);

console.log(`Spread operator result: ${result}`); //  34



// * koristan operator za kopiranje niza

// * primer kopiranja niza koji sadrzi elemente primitivnih tipova vrednosti:


let fourNumsCopy = [...fourNums];

console.log('Copy of fourNums:', fourNumsCopy);
console.log('Original of fourNums:', fourNums);

fourNumsCopy.push(99);

console.log(`Four nums original:`, fourNums);
console.log(`Four nums copy:`, fourNumsCopy);



// * primer kopiranja niza koji sadrzi elemente referentnog tipa

let employees = [
    {
        id: Math.ceil(Math.random() * 100),
        name: 'Harry Potter',
        degree: 'master'
    },
    {
        id: Math.ceil(Math.random() * 100),
        name: 'Petar Petrovic',
        degree: 'bachelor'
    }
];

let employeesCopy = [...employees];

console.log('Employees original', employees);
console.log('Employees copy', employeesCopy);

employees[0].degree = 'doctoral';

console.log('Employees original', employees);
console.log('Employees copy', employeesCopy);


let employeesCopyNew = [
    ...employees.map(employee => ({
        id: employee.id,
        name: employee.name,
        degree: employee.degree
    }))
];

console.log('Employees original', employees);
console.log('Employees copy NEW', employeesCopyNew);

employees[0].degree = 'post-master';

console.log('Employees original', employees);
console.log('Employees copy NEW', employeesCopyNew);



// * na primer, hocemo da u nizu brojeva BROJEVI pronadjemo najveci broj

// console.log(brojevi.sort((a,b) => b-a));

// console.log(`Biggest number is ${brojevi[0]}`);

let maxValue = Math.max(brojevi);

console.log(`Biggest value = ${maxValue}`); // NaN

let correctMaxValue = Math.max(...brojevi);

console.log(`Maximum value is ${correctMaxValue}`); // 123




// ! ARRAY desctructing -> koncept kojim se niz destrukturira u varijable

let singleStudent = ['Nemanja', 'Miletic', 44, 'doctoral', false];

const [firstName, lastName, age, degree, isStudent] = singleStudent;


console.log(`Persons name is ${firstName} ${lastName} and is a student: ${isStudent}. Is old ${age} and has degree ${degree}`);


const [fName, lName, ...additionalData] = singleStudent;

console.log(`Student is ${fName} ${lName}`);

console.log(additionalData);


// TODO ZADACI ZA VEZBU 

// ! (KOMBINACIJE NIZOVA i FUNKCIJA)

/**
 * 1. Napisati funkciju koja klonira niz koji joj je prosledjen kao argument
 * 2. Napisati funkciju koja vraca poslednji element iz niza koji joj je prosledjen kao argument
 * 3. Napisati funkciju koja spaja sve elemente jednog niza u String
 * 4. Napisati funkciju koja prihvata niz brojeva kao argument i za svaki od njih proverava da li je paran ili neparan.
 *    Ukoliko je paran vraca `$BROJ is even`, u suprotnom `$BROJ is odd.` Ako je nula, onda `Number is zero!`
 * 5. Napisati funkciju koja ce niz koji prihvati kao argument da sortira u rastucem redosledu (testirati na nizu Brojeva i nizu Stringova)
 * 6. Napisati funkciju koja ispisuje elemente pod nizova. Npr ako su pod-nizovi [[1,2,3] , [4,5,6]] onda je rezultat funkcije:
 *    `Array number $REDNI_BROJ_NIZA contains these elements: $ELEMENTI`
 * 7. Napisati funkciju koja sabira ukupan PROIZVOD i ukupan ZBIR svih elemenata iz niza prosledjenog kao argument. Takodje, dodati
 *    validaciju koja provera da li je SVAKI element iz prosledjenog niza broj. Ako bar jedan element nije broj, ispisati `Each element in
 *    array has to be a number.`
 * 8. Pozvati funkciju prompt() 3 puta i svakom prilikom uneti nesto u input polje. Unetu vrednost dodati u isti niz i na kraju ga ispisati.
 * 9. Svaku vrednost iz prethodnog niza ukoliko je u pitanju broj zapisan u String formatu (npr '55') pretvoriti u broj 55 i pri tome ga zameniti
 *    u nizu. Dakle, ako je '55' (string), pretvori se u 55 (broj) i potom se umesto '55' (stringa) sada u nizu treba naci 55 (broj)
 * 10. Napisati funkciju koja ce za niz godina prosledjen kao argument utvrditi koja je od godina prestupna. Ako je prestupna, ispisati 
 *     `$GODINA is a leap year!`
 *     ! NAPOMENA: Godina je prestupna ako je deljiva za 400. Takodje, godina je prestupna ako je deljiva sa 4 i nedeljiva sa 100.
 * 11. Napisati funkciju koja iz niza prihvacenog kao argument vraca duplikate
 * 12. Napisati funkciju koja ce sabrati sve brojeve iz unije 3 niza
 * 13. Napisati funkciju koja ce vrednosti 0, false, undefined, null otkloniti iz niza prosledjenog kao argument
 * 14. Napisati funkciju koja ce ovaj niz sa knjigama sortirati rastuce po naslovu:
 *      [
 *          {
 *              id: 1,
 *              author: 'Steven King',
 *              title: 'Misery'
 *          },
 *          {
 *              id: 2,
 *              author: 'Steven King',
 *              title: 'The Shining'
 *          },
 *          {
 *              id: 3,
 *              author: 'Steven King',
 *              title: 'Doctor Sleep'
 *          }
 *      ]
 *  15. Napisati funkciju koja ce iz niza prosledjenog kao argument vratiti najveci broj 
 *  16. Kreirati funkciju koja vraca niz koji inicijalno na svakoj poziciji ima broj 0 (dakle npr -> [0,0,0,0,0]); Parametar neka bude broj
 *      koji odredjuje duzinu niza (npr ako se funkciji prosledi broj 5, onda se kreira niz od 5 elemenata (duzine 5)).
 *  17. Napisati funkciju koja reverse-uje niz prosledjen kao argument. Npr [1,2,3] => [3,2,1]. Pokusati prvo BEZ reverse() funkcije.
 *  18. Napisati funkciju koja vraca TRUE ako su dva niza identicna (ako su im svi elementi medjusobno isti)
 *  19. Napisati funkciju koja vraca broj kopija u nizu. 
 *      Ako ima duplikata ispisati: There are $BROJ_DUPLIKATA duplicates in this array
 *      Ako nema duplikata ispisati: There are no duplicates in this array
 *  20. Napisati funkciju koja ce za prosledjeni objekat (ucenika) sracunati prosek njegovih zakljucenih ocena na kraju godine.
 *      Npr ako su predmeti sledeci: tehnicko: [3,4,5,5,4]
 *                                   matematika: [5,2,3,5,4]
 *                                   srpski jezik: [4,4,3,5,4]
 *      Onda na osnovu ova 3 predmeta izvuci UKUPNU prosecnu ocenu i tu ocenu dodeliti tom uceniku kao prosek za kraj godine:
 *      Npr: 'Pera Peric has an average grade: $PROSEK'
 *      ! HINT: proveriti da li se moze FOR IN loop iskoristiti
*/


// 1.
const cloneFunc = (array) => {
    let arrayCopy = [...array];
    return arrayCopy;
}

console.log('Clone function', cloneFunc([1,2,3,4,5]));


// 2.
const lastElementFunc = (array) => {
    return array[array.length - 1];
}

console.log('Last element', lastElementFunc([19,'hello',22,33,'world']));


// 3.
const toStringFunc = (array) => {
    return array.join(' ');
}

console.log('To String function', toStringFunc(['Sara', 'Pera', 'Marko', 'Lazar']));


// 4.
const checkIfEvenFunc = (numbers) => { // [3,7,10,23,0]
    numbers.forEach((number) => {
        if(number % 2 === 0 && number !== 0) {
            console.log(`${number} is even.`);
        } else if(number % 2 !== 0) {
            console.log(`${number} is odd.`);
        } else {
            console.log('Number is 0.');
        }
    });
}

checkIfEvenFunc([3,7,10,23,0]);


// 5.
const sortAscFunc = (array) => {
    if(array.every(element => typeof element === 'string')) {
        return array.sort();
    } else {
        return array.sort((x,y) => x-y);
    }
}

console.log(sortAscFunc([1,5,7,12,9,8,4,6]));

console.log(sortAscFunc(['Avocado', 'Az Alkmar', 'Yogurt', 'Bannanas', 'Milk', 'Cereals']));


// 6. 
const extractSubArraysFunc = (array) => {
    array.forEach((arr, idx) => {
        console.log(`Array ${idx+1} contains these elements:`);
        arr.forEach(element => console.log(element));
    })
}

extractSubArraysFunc([[1,4,5], ['test', 22, 33], [88, 99, 'hello']]);


// 7.
const calcFunc = (array) => {
    if(array.every(element => typeof element === 'number')) {
       const sum = array.reduce((prevVal, currVal) => prevVal + currVal);
       const product = array.reduce((prevVal, currVal) => prevVal * currVal);
       return `Result is ${sum + product}`; 
    }
    return `Each element in array has to be a number.`
}

console.log(calcFunc([1,5,10]));

console.log(calcFunc(['Avocado', 5, 6]));


// 8.
const promptArrFunc = () => {
    const promptArr = [];
    for(let i = 0; i < 3; i++) {
        let item = prompt('Enter your value');
        promptArr.push(item);
    }
    return promptArr;
}

// console.log('Prompt Array', promptArrFunc());


// 9.
const checkIfNumber = (array) => {
    array.map((element, idx, array) => {
        let parsedEl = parseInt(element);
        if(!isNaN(parseInt(parsedEl))) {
            array[idx] = parsedEl;
        }
    });
    return array;
}

let promptArr = promptArrFunc();
let modifiedPromptArr = checkIfNumber(promptArr);
console.log('Modified Prompt Array', modifiedPromptArr);


// 10.
const checkLeapYearFunc = (years) => {
    years.forEach(year => {
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            console.log(`${year} is a leap year!`)
        }
    });
}

checkLeapYearFunc([2020, 2022, 1741, 1882, 2000]);


// 11.
const checkForDuplicateFunc = (array) => {
    let duplicates = array.filter((element,idx,array) => {
        return array.indexOf(element) !== idx;
    });
    return duplicates;
};

console.log('Duplicates', checkForDuplicateFunc([1,2,1,3,4,5,4,6,3,7,6,9]));


// 12.
const sumUnionFunc = (array1, array2, array3) => {
    // const unionArr = array1.concat(array2, array3); // ! 1. nacin - spajanje pomocu CONCAT funkcije
    const unionArr = [...array1, ...array2, ...array3]; // ! 2. nacin - spajanje pomocu SPREAD operatora
    return unionArr.reduce((prevVal, currVal) => prevVal + currVal);
}

console.log(`Sum of union of arrays is: ${sumUnionFunc([1,2,3], [4,5,6], [7,8,9])}`);


// 13. 
const removeItemsFunc = (array) => {
    array.forEach((item,idx,array) => {
        if(item === null || item === undefined || item === 0 || item === false) {
            array.splice(idx,1);
        }
    });
    return array;
}

console.log('Removed unwanted items', removeItemsFunc([undefined, 1, null, 'hey', 0 , 100, false, true]));


// 14. 
const books = [
    {
        id: 1,
        author: 'Steven King',
        title: 'Misery'
    },
    {
        id: 2,
        author: 'Steven King',
        title: 'The Shining'
    },
    {
        id: 3,
        author: 'Steven King',
        title: 'Doctor Sleep'
    }
];

console.log(books.sort((a,b) => {
    return a.title > b.title ? 1 : -1;
}));


// 15.
const findBiggestNum = (numbers) => {
    return Math.max(...numbers);
}

console.log(`The biggest number is: ${findBiggestNum([1,4,111,2,3,5])}`);


// 16.
const createArrayFunc = (length) => {
    let arr = new Array(length);
    return arr.fill(0);
}

console.log('Filled with 0 array:', createArrayFunc(5));


// 17.
const reverseArray = (array) => {
    const reversedArr = [];
    for(let i = array.length-1; i >= 0; i--) {
        reversedArr.push(array[i]);
    }
    return reversedArr;
}

console.log('Reversed Array', reverseArray([1,2,3,4,5]));


// 18.
const checkIfSameFunc = (array1, array2) => {
    if(array1.length !== array2.length) {
        return false;
    }
    const comparation = array1.map((item,idx) => array2[idx] === item);
    
    return comparation.includes(false) ? false : true;
}

console.log('Arrays are same: ',checkIfSameFunc([1,2,3], [1,2,3])); // true
console.log('Arrays are same: ',checkIfSameFunc([1,12,3], [1,2,3])); // false
console.log('Arrays are same: ',checkIfSameFunc([1,2,3,10], [1,2,3])); // false


// 19.
const getArrayDuplicatesNumber = (array) => {
    let counterOfDuplicates = 0;
    array.filter((element,idx,array) => {
        if(array.indexOf(element) !== idx) {
            counterOfDuplicates++;
        }
    });
    return counterOfDuplicates > 0 ? `There are ${counterOfDuplicates} duplicates in this array` : `There are no duplicates in this array`;
}

console.log(getArrayDuplicatesNumber([1,2,3,1,2,4,5,6,3])); // There are 3 duplicates in this array

console.log(getArrayDuplicatesNumber([1,2,3,4,5])); // There are no duplicates in this array


// 20.
const pera = {
    name: 'Pera Peric',
    grades: {
        tehnicko: [4,3,2,4,5],
        matematika: [4,4,2,5,4],
        srpski: [5,5,4,3,2]
    }
}

const findAnAverageFunc = (student) => {
    const allGrades = [];
    let average = 0;
    for(let key in student.grades) {
        for(let grade of student.grades[key]) {
            allGrades.push(grade);
        }
    }
    average = allGrades.reduce((prevVal, currVal) => prevVal + currVal, 0) / allGrades.length;
    return average;
}

console.log(`${pera.name} has an average grade of ${findAnAverageFunc(pera)}`);