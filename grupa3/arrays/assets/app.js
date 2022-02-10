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