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
    .slice()
    .flatMap(item => item.sizes);

console.log(sizesArray);

// 9.
let filteredArray = sizesArray.filter((size, idx, sizesArray) => {
    return sizesArray.indexOf(size) === idx;
});

console.log(filteredArray);