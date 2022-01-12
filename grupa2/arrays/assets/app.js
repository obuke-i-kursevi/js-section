// ! 11. cas (10.01.2022.)

console.log('------------------ 11. cas (10.01.2022) -------------------');

// * 1. nacin kreiranja niza -> uglasta zagrada sintaksa

const mojNiz = [5,10,15];

console.log(mojNiz); // [5,10,15]

const prazanNiz = [];

prazanNiz.push(111); 

console.log(prazanNiz); // [111]


// * 2. nacin kreiranja niza -> uz koriscenje metode KONSTRUKTOR

const konstruktorNiz = new Array();

console.log(konstruktorNiz); // []

const konstruktorNiz1 = new Array(3);

konstruktorNiz1[0] = 22;

console.log(konstruktorNiz1);

const konstruktorNiz2 = new Array(10,20,30);

console.log(konstruktorNiz2); // [10,20,30]


// * 3. nacin -> Array.of() funkcija

const offNiz = Array.of(2,3,4);

console.log(offNiz); // (3) [2, 3, 4]


// * 4. nacin -> Array.from() funkcija

let nekiStr = 'World';

console.log(Array.from(nekiStr));



// ! Sta sve moze ici u niz?

const nizBrojeva = [1,2,3,4,5];

const mixedArr = [
    1,2,'Hello World', {
        name: 'Marko', 
        lastName: 'Markovic',
        age: 45,
        isStudent: false
    }
];

const nestedArr = [[1,2,3,4],['Hello', 'World']];

for(const arr of nestedArr) {
    // console.log(arr); // 2
    for(const singleEl of arr) {
        console.log(singleEl);
    }
}

const nestedArr1 = [
    [1,2,3,[10,20,30]],
    [5, 'Hello', true]
];



// ! ARRAY FUNKCIJE

// ! PUSH -> dodaje element na KRAJ niza

const tArray = [1,2,3,4,5];

let tArrayLength = tArray.push(100);

console.log(`Nova duzina niza je: ${tArrayLength}`); // 6

console.log(tArray);


// ! UNSHIFT -> dodaje element na POCETAK niza

tArrayLength = tArray.unshift(0);

console.log(`Ponovo nova duzina niza je: ${tArrayLength}`); // 7

console.log(tArray);


// ! POP -> funkcija koja uklanja element sa KRAJA niza i vraca SAM ELEMENT KOJI JE IZBACEN

let removedElement = tArray.pop(); // brise broj 100 iz niza

console.log(`Removed element is: ${removedElement}`);

console.log(tArray);


// ! SHIFT -> funkcija koja uklanja element sa POCETKA niza i vraca sam element koji je izbacen

removedElement = tArray.shift();

console.log(`Removed element from beginning: ${removedElement}`);

console.log(tArray);


// ako hocemo da dodamo na tacno odredjenu poziciju element tako da postojeci element obrisete:

tArray[2] = 44;

console.log(tArray);

tArray[10] = 222;

tArray[6] = 111;

console.log(tArray);



// ! SPLICE -> funkcija koja moze da se koristi u vise namena:

// * 1. slucaj -> uklanja odredjeni broj elemenata iz niza od odredjenog indeksa i kreira novi niz od obrisanih elemenata

const langs = ['Java', 'JavaScript', 'C#', 'Swift', 'Python'];

const deletedLangs = langs.splice(3,2);

console.log(langs);

console.log(deletedLangs);


// * 2. slucaj -> da doda novi element na mesto postojeceg elementa bez postojeci element da obrise

langs.splice(1,0,'TypeScript');

console.log(langs);

langs.splice(2,0,'Ruby on Rails', 'Scada');

console.log(langs);


// * 3. slucaj -> za brisanje svih elemenata iz niza

const someNums = [1,2,3,4,5];

someNums.splice(0);

console.log(someNums); // []


// * 4. slucaj -> za brisanje elemenata iz niza od odredjenog indeksa (mesta)

const someNums1 = [1,2,3,4,5];

someNums1.splice(2);

console.log(someNums1);


// * 5. slucaj -> za brisanje elemenata SA kraja niza

console.log(langs);

langs.splice(-2,2);

console.log(langs);



// ! SLICE -> vraca kopiju odredjenog dela niza ili celog niza

const numbers = [1,2.3,4,5.2,10];

// * 1. slucaj - kopija dela niza

const partOfNumbers = numbers.slice(0,2);

console.log(partOfNumbers);

console.log(numbers);


// * 2. slucaj - vracanje kopije celog niza


// ! Kopiranje PRIMITIVNIH TIPOVA moze ovako kao sto je ispod:

let a = 5;
let b = a;
a = 45;

console.log(a); // 45
console.log(b); // 5

// ! Kopiranje REFERENTNIH TIPOVA ne moze ovako kao sto je ispod:

let niz1 = [1,2,3,4,5];
let niz2 = niz1;
niz1.push(111);

console.log(niz1);
console.log(niz2);


const copyOfNumbers = numbers.slice(); // kreira shallow kopiju niza

numbers.push(55);

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
]


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



// ! CONCAT => funkcija za spajanje elemanata nizova

const firstResults = [4,2,5,3,1];

const secondResults = [4,4,3,5,2];

const allResults = firstResults.concat(secondResults);

console.log(allResults);


const all = allResults.concat(articles);

console.log(all);



// firstResults.push(secondResults);

// console.log(firstResults);



// ! indexOf i lastIndexOf funkcije -> vracaju indekse elemenata


let idx = firstResults.indexOf(5);

console.log(`Number 5 is at index ${idx} in firstResults array!`);

console.log(secondResults.indexOf(4)); // 0 zato sto se element nalazi i na 0-om i na 1-om indeksu, pa zato vraca samo prvi


console.log(secondResults.lastIndexOf(4)); // 1 jer pocinje pretragu sa kontra strane


// u slucaju referentnih tipova indexOf i lastIndexOf ne funkcionisu

const students = [
    {
        name: 'Marko',
        lastName: 'Markovic',
        age: 22,
        courses: ['Java', 'JavaScript', 'C#']
    },
    {
        name: 'Sara',
        lastName: 'Saric',
        age: 24,
        courses: ['Java', 'TypeScript', 'Python']
    },
    {
        name: 'Petar',
        lastName: 'Petrovic',
        age: 24,
        courses: ['C#', 'TypeScript', 'Python']
    }
];

console.log(students.indexOf({
    name: 'Petar',
    lastName: 'Petrovic',
    age: 24,
    courses: ['C#', 'TypeScript', 'Python']
})); // -1 jer indexOf ne funkcionise u pogledu referentnih tipova



// ! find i findIndex funkcije

// * find funkcija vraca PRVI element pronadjen na osnovu uslova pretrage

// ! Nadji studenta koji ima ime Petar

const petar = students.find((student) => {
    return student.name === 'Petar';
})

console.log(petar);


const ageOf24 = students.find(student => student.age === 24);

console.log(ageOf24);


// * findIndex funkcija vraca indeks elementa koji trazimo na osnovu uslova pretrage

const indexOfPetar = students.findIndex(student => student.name === 'Petar');

console.log(`Petar is on position: ${indexOfPetar+1}`);



// ! Includes funkcija -> proverava da li odredjeni element postoji u nizu

console.log(numbers); // (6) [1, 2.3, 4, 5.2, 10, 55]

const isNum = numbers.includes(5.2); 

console.log(`5.2 exists in numbers array: ${isNum}`);


const isNum1 = numbers.includes(2.4);

// if(isNum1) {
//     console.log(`2.3 postoji u nizu`);
// } else {
//     console.log(`2.3 ne postoji u nizu`);
// }

const isNum2 = numbers.includes(2.3) ? `2.3 postoji u nizu` : `2.3 ne postoji u nizu`;

console.log(isNum2);


console.log(numbers.indexOf(55) !== -1); // true

console.log(numbers.includes(55)); // true



// ! ForEach funkcija

const myAccTransactions = [100,30,-20,-40,15];

// let prvaTransakcija = myAccTransactions[0];

// * 1. nacin
// for(let tr of myAccTransactions) {
//     console.log(`${tr} $`);
// }


// * 2. nacin
// for(let i = 0; i < myAccTransactions.length; i++) {
//     console.log(`${myAccTransactions[i]} $`);
// }


// * 3. nacin
// myAccTransactions.forEach((transaction) => {
//     console.log(`${transaction} $`);
// });

// krace ovako:
myAccTransactions.forEach(transaction => console.log(`${transaction} $`));


// TODO npr hocemo da na svaku transakciju ukalkulisemo proviziju banke npr od 5 % i te transakcije sa provizijom dodamo u novi niz

let bankProvision = 0.05;
const noviNiz = [];

// myAccTransactions.forEach((transaction) => {
//     // const transactionWithProvision = transaction * (1 + bankProvision); // kraci pristup ovog ispod
//     const provisionOfTransaction = transaction * bankProvision;
//     const transactionWithProvision = transaction + provisionOfTransaction;
//     noviNiz.push(transactionWithProvision); 
// });

// console.log(noviNiz);

// * kraca varijanta prethodnog
myAccTransactions.forEach(transaction => noviNiz.push(transaction * (1+ bankProvision)));

console.log(noviNiz);


noviNiz.forEach((transaction, idx) => {
    console.log(`Transaction number: ${idx+1} = ${transaction} $`);
});




// TODO npr hocemo da za svaku transakciju zabelezimo njenu poziciju i iznos i to dodamo u novi niz

const newArrayOfTr = [];

noviNiz.forEach((transaction, idx) => {
    newArrayOfTr.push({
        position: idx+1,
        value: transaction
    });
});

console.log(newArrayOfTr);

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