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