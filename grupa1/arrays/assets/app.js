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