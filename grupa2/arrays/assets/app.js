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




// ! 13. cas (17.01.2022.)

console.log('-------------------- 13. cas (17.01.2022.) -------------------');

// ! MAP -> funkcija koja prihvata kao svoj argument funkciju koja transformise svaki element iz niza i vraca NOVI niz (transformisani niz)

let letters = ['a','b','c','d','e'];

// toUpperCase funkcija transformise slovo u VELIKO slovo

// * 1. nacin
// for(let letter of letters) {
//     console.log(letter.toUpperCase());
// }

// * 2. nacin uz MAP funkciju
let bigLetters = letters.map(letter => letter.toUpperCase());

console.log('Big letters', bigLetters);


// ili na primer:

let normalPrices = [30.5,20,15, 7.4, 10];

let pdv = 0.08;

let updatedPrices = normalPrices.map(price => price * (1+pdv));

console.log('Updated price (with PDV)', updatedPrices);


// ili na primer:

let articlesNames = articles.map(article => article.name);

console.log('Article names', articlesNames);




// ! SORT -> funkcija koja sortira i MUTIRA (MENJA) niz nad kojim pozivamo funkciju

let brojevi = [10,23,11,5,123,55,0];

console.log(brojevi.sort());

console.log(articlesNames.sort());


// * 1. nacin sortiranja

// brojevi.sort((a,b) => {
//     if(a > b) {
//         return 1;
//     } else if(a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });

console.log('First sort of brojevi', brojevi);


// * 2. nacin sortiranja

brojevi.sort((a,b) => {
    return a-b;
});

console.log('Second sort of brojevi (ASCENDING)', brojevi);

brojevi.sort((a,b) => {
    return b-a;
});

console.log('Second sort of brojevi (DESCENDING)', brojevi);

brojevi.sort((a,b) => {
    return a-b;
});


// * 2. nacin OPADAJUCEG sortiranja


// ! REVERSE funkcija - revers-uje niz (zaokrece niz u kontra pravcu)

console.log(brojevi.reverse()); // (7) [123, 55, 23, 11, 10, 5, 0]




// ! FILTER -> funkcija koja filtrira niz vracajuci samo elemente koji zadovoljavaju neki uslov

const greaterThan10 = brojevi.filter(broj => broj > 10);

console.log('Greater than 10', greaterThan10);



let sum = 0;

for(let num of brojevi) {
    sum += num;
}

console.log(`Sum of brojevi = ${sum}`);




// ! REDUCE -> funkcija koja redukuje niz na jednu vrednost

let reduceRes = brojevi.reduce((prevVal, currVal) => {
    return prevVal += currVal;
}, 0);

console.log(`Reduce result is = ${reduceRes}`);




// ! FLAT -> funkcija koja na povrsinu niza prvog reda izvlaci elemente podnizova

const arrWithNestedArr = [[4,5,1], ['JavaScript', 10, 'Java'], 7, 11];

console.log(arrWithNestedArr);

const flatArray1 = arrWithNestedArr.flat(1); // default vrednost za depth parametar je 1

console.log('First flat array', flatArray1);


const arrWithNestedArr1 = [[4,5,[10,20,['java','c#'],30],1], [40, [99,88,77]]];

console.log(arrWithNestedArr1);

const flatArray2 = arrWithNestedArr1.flat(3);

console.log(flatArray2);




// ! Chaining funkcija u JavaScript-u

// * DUZI nacin
// const veciOd10 = brojevi.filter(broj => broj > 10);

// const multipliedBy2 = veciOd10.map(broj => broj * 2);

// const zbir = multipliedBy2.reduce((prevVal, currVal) => prevVal + currVal);

// console.log(`Konacan zbir je ${zbir}`);


// * KRACI nacin (uz CHAINING pristup)

const chainingResult = brojevi
    .filter(broj => broj > 10)
    .map(broj => broj * 2)
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Result of chaining operation is ${chainingResult}`); // 424




// * PRIMER:

const accounts = [
    {
        owner: 'Marko Markovic',
        city: 'Novi Sad',
        age: 55,
        transactions: [50,30,-15,70,-35]
    },
    {
        owner: 'Sara Saric',
        city: 'Novi Sad',
        age: 45,
        transactions: [150,230,-150,100,-50]
    },
    {
        owner: 'Pera Peric',
        city: 'Beograd',
        age: 75,
        transactions: [500,250,-150,100,-50]
    },
];



// * DUZA varijanta
// const saldo = accounts
//     .map(account => account.transactions)
//     .flat()
//     .reduce((prevVal, currVal) => prevVal + currVal);

// console.log(`Bank saldo is ${saldo} $`);


// * KRACA varijanta uz FlatMap()
// ! NAPOMENA: FlatMap ide do dubine 1 (depth je po default-u 1 i ne moze se menjati)
const saldo = accounts
    .flatMap(account => account.transactions) 
    .reduce((prevVal, currVal) => prevVal + currVal);

console.log(`Bank saldo is ${saldo} $`); // 1030




// ! SPLIT funkcija

nekiStr = 'Welcome';

console.log(nekiStr.split(''));


let weatherData = 'city: Novi Sad;weather: cloudy;degrees: 20 C';

const customizedWeatherData = weatherData.split(';');

console.log(customizedWeatherData); // (3) ['city: Novi Sad', 'weather: cloudy', 'degrees: 20 C']




// ! JOIN funkcija

const originalData = customizedWeatherData.join(';');

console.log(originalData); // city: Novi Sad;weather: cloudy;degrees: 20 C



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

console.log('------------------ 14. cas (19.01.2022.) --------------------');

// ! SPREAD operatora