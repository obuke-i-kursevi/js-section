// ! 11. cas (10.01.2022.)

console.log('-------------------- 11. cas (10.01.2022.) -------------------');

// ! NAJBOLJI 1. nacin kreiranja niza => sintaksa uglastih zagrada

const prazanNiz = [];

prazanNiz.push(1);

const mojNiz = [5,10,15,20];


// * 2. nacin kreiranja niza => koriscenjem metode koja se naziva KONSTRUKTOR

const konstruktorNiz = new Array(); // ovo kreira prazan niz

const konstruktorNiz1 = new Array(3); // ovo kreira niz od 3 mesta (prazna)

console.log(konstruktorNiz1); // (3) [empty × 3]

const konstruktorNiz2 = new Array(5,10,15); // ovo kreira niz od 3 elementa (5 , 10 , 15)

console.log(konstruktorNiz2);


// * 3. nacin kreiranja niza => koriscenjem Array.of() funkcije

const ofNiz = Array.of(10,20,30);

console.log(ofNiz);


// * 4. nacin kreiranja niza => koriscenjem Array.from() funkcije

let nekiStr = 'World'; // (5) ['W', 'o', 'r', 'l', 'd']

console.log(Array.from(nekiStr));



// ! Sta se sve moze naci u nizu?

const arrOfSomeNumbers = [1,2,3,4,5];

const mixedArr = [10, 'Hello World', {
    name: 'Marko',
    lastName: 'Markovic',
    age: 44,
}];


const nestedArr = [
    [1,2,3,4,5], 
    ['Hello', 'World']
];

console.log('NestedArr:')

for(const arr of nestedArr) {
    // console.log(arr);
    for(const singleEl of arr) {
        console.log(singleEl);
    }
}


const moreNestedArr = [
    [100,300,500,
        [720,760,770]
    ], 
    [4, 'Jupiter', 11]
];



// ! ARRAY funkcije

// ! PUSH funkcija - dodaje novi element na KRAJ niza

const tArray = [50,100,150,200];

let tArrayLength = tArray.push(250);

console.log(tArray);

console.log(`Nova duzina niza tArray je: ${tArrayLength}`); // 5


// ! UNSHIFT - dodaje novi element na POCETAK niza

tArrayLength = tArray.unshift(0);

console.log(tArray);

console.log(`Nova duzina niza tArray je: ${tArrayLength}`); // 6


// ! POP - uklanja element sa KRAJA niza, i vraca sam element koji je izbacen sa kraja niza

let removedElement = tArray.pop();

console.log(`POP-ed element je: ${removedElement}`);

console.log(tArray);

let tArrayEmpty = [];

let notDefinedRemovedEl = tArrayEmpty.pop();

console.log(notDefinedRemovedEl); // undefined


// ! SHIFT - uklanja element sa POCETKA niza, i vraca sam element koji je izbacen

removedElement = tArray.shift();

console.log(`Element removed from beginning: ${removedElement}`);

console.log(tArray);


// ! Ako hocemo da dodamo element na odredjeno mesto u nizu:

tArray[2] = 1; // ovo brise postojeci element na indeksu 2 (na 3. poziciji, sto je nekada zeljeni efekat nekada ne(ako ne pogledati dole SPLICE funkciju))

console.log(tArray);

tArray[10] = 111;

console.log(tArray); // (11) [50, 100, 1, 200, empty × 6, 111]



// ! SPLICE funkcija - samo nad nizovima se moze koristiti

// * 1. slucaj -> uklanja odredjeni broj elemenata iz niza od odredjenog indeksa i kreira NOVI niz od tih obrisanih elemenata

const langs = ['Java', 'JavaScript', 'C#', 'Swift', 'Python'];

const splicedLangs = langs.splice(3,1);

console.log(langs); // ['Java', 'JavaScript', 'C#', 'Python']

console.log(splicedLangs); // ['Swift']


// * 2. slucaj -> za dodavanje elemenata na odredjeno mesto

langs.splice(2,0,'TypeScript');

console.log(langs);

langs.splice(4,0,'Ruby on Rails', 'Scada');

console.log(langs);


// * 3. slucaj -> za brisanje svih elemenata iz niza

let testLangs = ['Java', 'JavaScript', 'C#'];

testLangs.splice(0);

console.log(testLangs); // []


// * 4. slucaj -> za brisanje elemenata OD neke pozicije

let testLangsNew = ['Java', 'JavaScript', 'C#'];

testLangsNew.splice(1);

console.log(testLangsNew); // ['Java']


// * 5. slucaj -> za brisanje elemenata iz niza SA KRAJA NIZA

console.log(langs);

langs.splice(-1,1); // brisanje poslednjeg elementa

console.log(langs);



// ! SLICE funkcija -> vraca kopiju odredjenog niza ili celog niza

const numbers = [1,2.3,4,5.1,10];


// * 1. slucaj -> vracanje kopije DELA niza

const partOfNumbers = numbers.slice(0,2);

console.log(numbers); // (5) [1, 2.3, 4, 5.1, 10]

console.log(partOfNumbers); // (2) [1, 2.3]

console.log(numbers.slice(2)); // (3) [4, 5.1, 10]


// * 2. slucaj - vracanje kopije CELOG niza (shallow kopije)

// ! Kopiranje vrednosti primitivnih tipova
let a = 10;
let b = a;
a = 15;

console.log(a); // 15
console.log(b); // 10

// ! Kopiranje vrednosti referentnih tipova NE MOZE ovako
let niz1 = [1,2,3];
let niz2 = niz1;
niz1.push(100);

console.log(niz1);
console.log(niz2);


const copyOfNumbers = numbers.slice();

console.log(copyOfNumbers);

numbers.push(999);

console.log(numbers);
console.log(copyOfNumbers);


/**
 * TODO Domaci 11. cas
 *  1. Kreirati niz sa artiklima u radnji (svaki artikl ima svoj naziv i svoju cenu)
 *  2. Dodati u niz artikala jos 2 elementa, jedan na pocetak, a drugi na kraj niza 
 *  3. Na trece mesto u nizu dodati novi artikl, ali tako da se trenutno treci element NE OBRISE, 
 *      vec samo pomeri za jedno mesto udesno
 *  4. Obrisati poslednji element iz niza
 *  5. Kreirati novi niz na osnovu samo poslednja tri elementa iz artikala
 *  6. Iz tog novog niza, odvojiti samo prva dva elementa u novi niz
 */

console.log('------------------- 11. cas DOMACI -----------------------');

const articles = [
    {
        name: 'Bannanas',
        price: 3
    },
    {
        name: 'Apples',
        price: 5
    },
    {
        name: 'Yogurt',
        price: 7
    }
];


articles.unshift({
    name: 'Milk',
    price: 6.5
});

articles.push({
    name: 'Bread',
    price: 2.5
});

articles.splice(2,0,{
    name: 'Orange Juice',
    price: 4.50
});

console.log(articles);

articles.splice(-1,1);

console.log(articles);

const lastThreeArticles = articles.slice(-3);

console.log(lastThreeArticles);

const firstTwoArticles = lastThreeArticles.slice(0,2);

console.log(firstTwoArticles);



// ! 12. cas (12.01.2022.)

console.log('-------------------- 12. cas (12.01.2022.) ----------------------------');



// ! CONCAT - funkcija za spajanje elemenata nizova

const firstResults = [4,3,2,5,1];

const secondResults = [4,4,2,1,4];

const allResults = firstResults.concat(secondResults); // (10) [4, 3, 2, 5, 1, 4, 4, 2, 1, 5]

console.log(allResults);


firstResults.push(secondResults);

console.log(firstResults);




// ! indexOf i lastIndexOf funkcije - vracaju indekse elemenata

let idxOf5 = firstResults.indexOf(5);

console.log(idxOf5); // 3

console.log(firstResults.indexOf(8)); // -1 jer broj 8 ne postoji u firstResults nizu

console.log(firstResults.indexOf(3,3)); // - 1 jer broj 3 se ne nalazi nigde od indeksa 3 pa na dalje (na desno), iako u nizu generalno postoji

console.log(secondResults.indexOf(4)); // 0

console.log(secondResults.lastIndexOf(4)); // 4

const students = [
    {
        name: 'Marko',
        lastName: 'Markovic',
        age: 24,
        courses: ['Java', 'JavaScript', 'C#']
    },
    {
        name: 'Sara',
        lastName: 'Saric',
        age: 24,
        courses: ['Java', 'TypeScript', 'C#']
    },
    {
        name: 'Petar',
        lastName: 'Petrovic',
        age: 22,
        courses: ['Java', 'JavaScript', 'Python']
    },
];


console.log(students.indexOf({
    name: 'Petar',
    lastName: 'Petrovic',
    age: 22,
    courses: ['Java', 'JavaScript', 'Python']
})); // ! -1 vraca zato sto se indexOf ne moze koristiti za pretragu kada su u pitanju REFERENTNI tipovi


// ! find i findIndex funkcije

// * Find funkcija vraca element koji trazimo na osnovu nekog uslova

// students.find((student) => {
//     return student.name === 'Petar';
// });

const petar = students.find(student => student.name === 'Petar');

console.log(petar);


// * FindIndex funkcija vraca indeks elementa koji trazimo na osnovu nekog uslova


const indexOfPetar = students.findIndex((student) => {
    return student.name === 'Petar';
});

console.log(`Index of Petar: ${indexOfPetar}`);


const ageOf24 = students.find(student => student.age === 24);

console.log(ageOf24); // samo Marka vraca, ne i Saru



// ! Includes funkcija -> proverava da li odredjeni element u nizu postoji

console.log(numbers);

const isNum = numbers.includes(55);

console.log(`5.1 does exist in numbers array: ${isNum}`);


if(numbers.includes(5.1)) {
    console.log(`5.1 postoji`);
} else {
    console.log(`5.1 ne postoji`);
}

const isNum1 = numbers.includes(5.66) ? `5.66 postoji u nizu` : `5.66 ne postoji u nizu`;

console.log(isNum1);


console.log(numbers.includes(10)); // true

console.log(numbers.indexOf(10) !== -1); // true


if(numbers.indexOf(10) !== -1) {
    console.log(numbers.indexOf(10));
}



// ! ForEach funkcija

const myAccTransactions = [100,30,-50,40,-15];

// 1. nacin
// for(let t of myAccTransactions) {
//     console.log(`${t} $`);
// }

// 2. nacin
// for(let i = 0; i < myAccTransactions.length; i++) {
//     console.log(`${myAccTransactions[i]} $`);
// }

// 3. nacin
// myAccTransactions.forEach((trans) => {
//     console.log(`${trans} $`);
// });

myAccTransactions.forEach(trans => console.log(`${trans} $`));


// TODO npr hocemo da dodamo proviziju od 5 % na svaku transakciju i dodamo u novi niz koji sadrzi transakcije sa provizijom


let bankProvision = 0.05;
const transactionsWithProvisions = [];

myAccTransactions.forEach((transaction) => {
    const transactionWithProvision = transaction * (1 + bankProvision);
    transactionsWithProvisions.push(transactionWithProvision);
});

console.log(transactionsWithProvisions);


transactionsWithProvisions.forEach((transaction, idx) => {
    console.log(`Transaction number: ${idx+1} : ${transaction} $`);
});


const newTransactionsArray = [];

// TODO npr hocemo da napravimo novi niz koji ce ciniti OBJEKTI sastavljeni od podataka (redni broj transakcije i sama transakcija)



transactionsWithProvisions.forEach((transaction, idx) => {
    const transactionOb = {
        position: idx+1,
        transaction: transaction
    };
    newTransactionsArray.push(transactionOb);
});

console.log(newTransactionsArray);


// TODO 11. i 12. cas - DOMACI:


/**
 *  1. Kreirati niz sa artiklima u radnji (svaki artikl ima svoj naziv i svoju cenu)
 *  2. Dodati u niz artikala jos 2 elementa, jedan na pocetak, a drugi na kraj niza 
 *  3. Na trece mesto u nizu dodati novi artikl, ali tako da se trenutno treci element NE OBRISE, vec samo pomeri za 
 *     jedno mesto udesno
 *  4. Obrisati poslednji element iz niza
 *  5. Kreirati novi niz na osnovu samo poslednja tri elementa iz artikala
 *  6. Iz tog novog niza, odvojiti samo prva dva elementa u novi niz
 *  7. Kreirati poseban niz koji je spoj poslednja dva niza dobijena (iz 5. i 6. zadatka)
 *  8. U nizu artikala, pronaci artikl koji se naziva 'Yogurt' i smestiti ga u varijablu 'yogurt'
 *  9. Pronaci indeks artikla koji ima cenu 5
 *  10. Nad svakim artiklom dodeliti novi property 'formatedPrice' koji ce sadrzati prefiks '$' i cenu tog artikla
 *  11. Kreirati novi niz koji ce sadrzati sve cene svakog artikla.
 *  12. Proveriti da li se u novom nizu svih cena nalazi ijedna cena koja iznosi 7 i ispisati odgovor u formatu 'cena 7 postoji'
 *      ili 'cena 7 ne postoji'
 *  13. Za svaku cenu obracunati dodatan PDV (npr. od 8 %) i dodati ga na postojecu cenu i za svaku cenu dodati 
 *      njen redni broj u nizu
*/


// ! Zadaci 1. - 6. su uradjeni u prethodnom domacem

const concatedArticles = lastThreeArticles.concat(firstTwoArticles);

console.log(concatedArticles);

const yogurt = articles.find((article) => {
    return article.name === 'Yogurt';
})

console.log(yogurt);

const ofPrice5 = articles.findIndex((article) => {
    return article.price === 5;
})

console.log(ofPrice5);

articles.forEach((article) => {
    article.formattedPrice = `$ ${article.price}`
});

console.log(articles);


const allPrices = [];
articles.forEach(article => allPrices.push(article.price));

console.log(allPrices);

const isPrice7 = allPrices.includes(7) ? 'cena 7 postoji' : 'cena 7 ne postoji';

console.log(isPrice7);

const pricesWithPDV = [];

allPrices.forEach((price, idx) => {
    const priceObj = {
        number: idx+1,
        price: price * (1+0.08)
    }
    pricesWithPDV.push(priceObj);
})

console.log(pricesWithPDV);




// ! 13. CAS (17.01.2022.)

console.log('-------------------- 13. cas (17.01.2022.) ---------------------');


// ! MAP - funkcija koja kao svoj argument prihvata funkciju (CALLBACK) koja transformise svaki element niza i 
// ! vraca NOVI niz (transformisani niz)


let letters = ['a','b','c','d','e'];

// toUpperCase() funkcija nad svaki slovom


// letters.forEach(letter => letter.toUpperCase());

let bigLetters = letters.map(letter => letter.toUpperCase());

console.log(bigLetters);


let normalPrices = [30.5, 20, 15, 7.4, 10];

let pdv = 0.08;

let newPricesWithPDV = normalPrices.map(price => price * (1 + pdv));

console.log('Prices with PDV', newPricesWithPDV);


console.log('Articles', articles);

const articlesNames = articles.map(article => article.name);

console.log('Article names', articlesNames);




// ! SORT - funkcija koja sortira elemente i MUTIRA (MENJA) niz nad kojim pozivamo funkciju

let brojevi = [10,23,11,5,123,55,0];

// console.log(brojevi.sort()); // ! ovo ne radi posao koji smo ocekivali (sortira brojeve kao string-ove)

console.log(articlesNames.sort());

// 1. duzi nacin sortiranja
// brojevi.sort((a,b) => {
//     if(a>b) {
//         return 1;
//     } else if(a===b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });

// 2. kraci nacin (SORTIRANJE U RASTUCEM REDOSLEDU)
brojevi.sort((a,b) => {
    return a-b;
});


console.log('Ascending sorted brojevi:', brojevi);

// 2. kraci nacin (SORTIRANJE U OPADAJUCEM REDOSLEDU)
brojevi.sort((a,b) => {
    return b-a;
});

console.log('Descending sorted brojevi:', brojevi);


// vracanje brojeva u pocetno rastuce stanje
brojevi.sort((a,b) => {
    return a-b;
});


console.log('Ascending sorted brojevi:', brojevi);


// ! REVERSE funkcija -> 2. nacin za opadajuci sort

console.log('Reversed brojevi', brojevi.reverse()); // (7) [123, 55, 23, 11, 10, 5, 0]




// ! FILTER -> funkcija koja filtrira niz vracajuci samo elemente koji zadovoljavaju odredjeni uslov

// const greaterThan10 = brojevi.filter(number => number > 10);

const greaterThan10 = brojevi.filter((number) => {
    return number > 10;
});

console.log('Brojevi veci od 10', greaterThan10);




// zbir svih brojeva iz niza BROJEVI

let sum = 0;

for(let num of brojevi) {
    sum += num;
}

console.log(`Zbir svih brojeva je = ${sum}`); // 227



// ! REDUCE -> funkcija koja vrednosti niza redukuje na jednu vrednost

let reduceRes = brojevi.reduce((prevValue, currValue) => {
    return prevValue + currValue;
}, 0);

console.log(`Reduce result is ${reduceRes}`); // 227




// ! FLAT -> funkcija koja na povrsinu niza PRVOG reda izvlaci elemente njegovih podnizova

const arrWithNestedArr = [[4,5,1], ['Java', 10, 'JavaScript'], 7, 11];

const flatArr1 = arrWithNestedArr.flat();

console.log('First flat array', flatArr1);


const arrWithNestedArrNew = [[4,5,1,[100,[9,8,7],200,'JS']], [40,50,60], 'Hello World', 11];

const flatArr2 = arrWithNestedArrNew.flat(3);

console.log('Second flat array', flatArr2);




// ! CHAINING funkcija

// * DUZI NACIN
// const veciOd10 = brojevi.filter(broj => broj > 10);

// const duploVeci = veciOd10.map(broj => broj * 2);

// const finalniRes = duploVeci.reduce((prevVal, currVal) => prevVal + currVal);

// * KRACI NACIN UZ CHAINING
const chainingResult = brojevi
    .filter(broj => broj > 10)
    .map(broj => broj * 2)
    .reduce((prevVal, currVal) => prevVal + currVal);


console.log(`Result of chaining: ${chainingResult}`); // 424



const accounts = [
    {
        owner: 'Marko Markovic',
        city: 'Novi Sad',
        age: 55,
        transactions: [50,30,-50,20,-15]
    },
    { 
        owner: 'Sara Saric',
        city: 'Novi Sad',
        age: 35,
        transactions: [100,50,-20,30,-25]
    },
    {
        owner: 'Petar Petrovic',
        city: 'Beograd',
        age: 75,
        transactions: [550,320,-500,120,-15]
    }
]

// * DUZI NACIN

// const saldo = accounts
//     .map(account => account.transactions)
//     .flat()
//     .reduce((prevVal, currVal) => prevVal + currVal);


// * KRACI NACIN UZ FUNKCIJU FlatMap()
// ! NAPOMENA: FlatMap() ide do dubine 1

const saldo = accounts
    .flatMap(account => account.transactions) 
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Bank saldo is ${saldo} $`); // 645



// ! SPLIT funkcija

let nesto = 'Welcome';

console.log(nesto.split(''));

let weatherData = 'city: Novi Sad;weather: cloudy;degrees: 20 C';


const customizedWeatherData = weatherData.split(';');

console.log(customizedWeatherData);



// ! JOIN funkcija

const personalData = ['name: Marko', 'lastName: Markovic', 'age: 44'];

const customizedPersonalData = personalData.join(';');

console.log(customizedPersonalData);



/** 
 *  TODO 13. cas (17.01.2022.)
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
        sizes: ['M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'Pants',
        price: 40.00,
        colors: ['gray','white','black'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: 'Hat',
        price: 12.50,
        colors: ['red','blue'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: 'Socks',
        price: 7.50,
        colors: ['black','white','gray'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: 'Hoodie',
        price: 25,
        colors: ['black','green','purple','yellow'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
];

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
    .slice()
    .flatMap(item => item.sizes);

console.log(sizesArray);


// 9.
let filteredArray = sizesArray.filter((size, idx, sizesArray) => {
    return sizesArray.indexOf(size) === idx;
});

console.log(filteredArray);




// ! 14. cas (19.01.2022.)

console.log('-------------------- 14. cas (19.01.2022.) -------------------');


// ! SOME funkcija -> vraca true ako BAR JEDAN element zadovljava neki logicki uslov

console.log(brojevi);

const isBiggerThan10 = (element) => element > 10;

console.log('Array BROJEVI contains number greater than 10: ', brojevi.some(isBiggerThan10));


// na primer utvrditi da li je neki od brojeva iz niza BROJEVI paran

// REMAINDER operator -> % 

const findEvenNumber = (element) => element % 2 === 0;

console.log('Array BROJEVI contains even number: ', brojevi.some(findEvenNumber));



// ! EVERY funkcija -> vraca true ako SVAKI element zadovoljava neki logicki uslov

console.log('Array BROJEVI contains each number that is greater than 10: ', brojevi.every(isBiggerThan10));



// ! FILL funkcija -> funkcija koja menja sve elemente u odredjenu vrednost. Pri tome, moze se zadati i pozicija odakle se vrednosti menjaju.

const randomNumbers = [100,200,300,400,500,600];

console.log('Fill function', randomNumbers.fill(3,2));

console.log('Fill function 2', randomNumbers.fill('x'));




// ! SPREAD operator -> operator koji izvlaci iz niza pojedinace elemente i vraca listu tih elemenata

const addNums = (x,y,z,j) => {
    return x+y+z+j;
}


let fourNums = [5,10,11,14];


let addNumsResult = addNums(...fourNums); // 5,10,11,14

console.log(`Spread operator result: ${addNumsResult}`);


// * moze se koristiti i za kopiranje niza (niza primitivnih tipova podataka)

let fourNumsCopy = [...fourNums];

fourNumsCopy.push(99);

console.log('Four nums copy', fourNums);
console.log('Four nums copy', fourNumsCopy);


// * koriscenje Spread operatora u kopiranju nizova sa referentnim tipovima podataka

let employees = [
    {
        id: 1,
        name: 'Marko Markovic',
        degree: 'master'
    },
    {
        id: 2,
        name: 'Sara Saric',
        degree: 'bachelor'
    }
]

let employeesCopy = [...employees];

console.log('Employees original', employees);
console.log('Employees copy', employeesCopy);

employees.push({
    id: 3,
    name: 'Pera Peric',
    degree: 'master'
});

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

employees[0].degree = 'post-master';

console.log('Employees original', employees);
console.log('Employees copy', employeesCopyNew);



// * U nizu BROJEVI pronaci najveci broj

let maxValue = Math.max(brojevi);

console.log(`Maximum value is ${maxValue}`); // NaN

maxValue = Math.max(...brojevi);

console.log(`Maximum value is ${maxValue}`);




// ! ARRAY desctructing - koncept kojim destrukturiranje niza u varijable

let singleStudent = ['Pera', 'Peric', 'master', 33, false];

const [firstName, lastName, degree, age, isStudent] = singleStudent;

console.log(`Student's name is ${firstName} ${lastName}. This student has ${degree} degree and is ${age} old. Status of student: ${isStudent}`);


const [fName, lName, ...additionalData] = singleStudent;

console.log(`Student ${fName} ${lName}`);

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
    let copyArray = [...array];
    return copyArray;
}

console.log('Clone function', cloneFunc([1,2,3,4,5]));


// 2.
const lastElementFunc = (array) => {
    return array[array.length - 1];
}

console.log('Last element', lastElementFunc([10,11,12,13,14]));


// 3.
const toStringFunc = (array) => {
    return array.join(' ');
} 

console.log('Joined elements in string', toStringFunc(['Sara','Jovan','Pera']));


// 4.
const checkIfEvenFunc = (numbers) => { // [1,2,3,4]
    numbers.forEach(number => {
        if(number % 2 === 0 && number !== 0) {
            console.log(`${number} is even.`);
        } else if(number % 2 !== 0) {
            console.log(`${number} is odd.`);
        } else {
            console.log(`Number is zero`);
        }
    });
}

checkIfEvenFunc([2,3,8,9,0]);


// 5.
const sortAscFunc = (array) => {
    if(array.every(element => typeof element === 'string')) {
        return array.sort();
    } else {
        return array.sort((a,b) => a-b);
    }
}

console.log('Sorted numbers', sortAscFunc([2,5,1,7,20]));

console.log('Sorted strings', sortAscFunc(['Avocado', 'Yogurt', 'Bannanas', 'Milk', 'Cereals']));

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

// console.log('Prompt Array', promptArrFunc()); // ! zakomentarisano kako se ne bi svaki put pojavljivali na reload stranice


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