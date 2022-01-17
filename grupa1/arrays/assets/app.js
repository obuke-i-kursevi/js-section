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

// ! SPREAD operator