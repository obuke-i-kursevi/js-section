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
 *  3. Na trece mesto u nizu dodati novi artikl, ali tako da se trenutno treci element NE OBRISE, vec samo pomeri za jedno mesto udesno
 *  4. Obrisati poslednji element iz niza
 *  5. Kreirati novi niz na osnovu samo poslednja tri elementa iz artikala
 *  6. Iz tog novog niza, odvojiti samo prva dva elementa u novi niz
 *  7. Kreirati poseban niz koji je spoj poslednja dva niza dobijena (iz 5. i 6. zadatka)
 *  8. U nizu artikala, pronaci artikl koji se naziva 'Yogurt' i smestiti ga u varijablu 'yogurt'
 *  9. Pronaci indeks artikla koji ima cenu 5
 *  10. Nad svakim artiklom dodeliti novi property 'formatedPrice' koji ce sadrzati prefiks '$' i cenu tog artikla
 *  11. Kreirati novi niz koji ce sadrzati sve cene svakog artikla.
 *  12. Proveriti da li se u novom nizu svih cena nalazi ijedna cena koja iznosi 7 i ispisati odgovor u formatu 'cena 7 postoji' ili 'cena 7 ne postoji'
 *  13. Za svaku cenu obracunati dodatan PDV (npr. od 8 %) i dodati ga na postojecu cenu i za svaku cenu dodati njen redni broj u nizu
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