// ! 15. cas (24.01.2022.)

console.log('------------------ 15. cas (24.01.2022.) -------------------');

const studentExample = {
    name: 'Marko Markovic',
    age: 23,
    isStudent: true,
    gender: 'male',
    courses: ['Java', 'JavaScript', 'C#'],
    address: {
        street: 'Fruskogorska 13a',
        zipCode: 21000,
        city: 'Novi Sad'
    }
}

studentExample.studying = function() {
    console.log('I am studying for exam!');
}

console.log(studentExample.studying());



// ! DODAVANJE atributa objektu

studentExample.year = 3;

console.log(studentExample);


// ! MENJANJE atributa objekta

studentExample.isStudent = false;

console.log(studentExample);

// ili na primer:

studentExample.courses.splice(-1,1);

// studentExample.courses.pop();

console.log(studentExample);


// ! BRISANJE atributa objekta

delete studentExample.gender;

console.log(studentExample.gender);



// ! SQUARE BRACKET sintaksa

// 1.

console.log('Square bracket sintaksa', studentExample['name']);

// 2.

let findMeCourses = 'courses';

console.log('Find me courses example', studentExample[findMeCourses]);

// na primer:

studentExample[findMeCourses].forEach((val,idx) => {
    console.log(`Course ${idx+1} : ${val}`);
})

// ili na primer:

for(let prop in studentExample) {
    console.log(studentExample[prop]);
}


// 3. 

let userInput = 'averageGrade'; // average Grade --> averageGrade

// userInput.split(' ');

console.log(userInput);

studentExample[userInput] = 8.83;

console.log(studentExample);



// ! JSON interfejs => mogucnosti:

// 1. Parsiranje nekog string u JS objekat
// 2. Parsiranje JS objekta u string

// JSON => Java Script Object Notation

// 1.
let exampleString = '{"id": 15, "name": "Petar Peric", "isStudent": true}';

let exampleObject = JSON.parse(exampleString);

console.log(exampleObject);


// 2.
let exampleObject2 = {
    id: 2,
    name: 'Sara Saric',
    isStudent: true,
    courses: ['Java', 'JavaScript']
}

let exampleString2 = JSON.stringify(exampleObject2);

console.log(exampleString2);




// ! 17. cas (31.01.2022.)

console.log('----------------- 17. cas (31.01.2022.) --------------------');


// ! Spread operator kod objekata

const car = {
    name: 'Audi A6',
    gasTypes: ['diesel', 'gas'],
    gears: 6
}

const newCar = car;

newCar.gears = 5;

console.log(car);
console.log(newCar);


// upotreba spread operatora:

const newCar2 = {...car};  // kreira SHALLOW kopiju

newCar2.name = 'BMW 5';

console.log(car);
console.log(newCar2);

car.gasTypes.push('benzin');

console.log(car);
console.log(newCar2);



// DEEP copy

const newCar3 = {
    ...car, 
    gasTypes: [...car.gasTypes]
};

car.gasTypes.push('eletricity');

console.log(car);
console.log(newCar3);



// ! Object.assign() funkcija 

const newCar4 = Object.assign({}, car);

console.log(car);
console.log(newCar4);



// ! Object Destructing

const book = {
    id: Math.ceil(Math.random() * 100),
    name: 'Harry Potter',
    writter: 'J.K. Rowling',
    pages: 550,
    editions: [1,2,3]
}

// console.log(book.editions);

// * 1. primer

const {editions} = book;

console.log(`Harry Potter has editions: ${editions}`); // Harry Potter has editions: 1,2,3


// * 2. primer

const {id, name} = book;

console.log(`Book ${name} has ID: ${id}`); // Book Harry Potter has ID: 13


// * 3. primer

const {pages, ...otherProps} = book;

console.log(`This book has ${pages} pages`); // his book has 550 pages

console.log(otherProps); // {id: 9, name: 'Harry Potter', writter: 'J.K. Rowling', editions: Array(3)} --> sve bez Pages atributa



// * RE-ASSIGN naziva dobijenog property-a

book.numberOfPages = book.pages; // 550
delete book.pages;

console.log(book);



// ! Proveravanje da li postoji ODREDJENI property u nekom objektu

// hocemo da proverimo da li postoji property numberOfPages u objektu book:

// * 1. nacin
if('numberOfPages' in book) {
    console.log(`Property numberOfPages exists in book object!`);
}

// * 2. nacin
// if(book.available === undefined) {
//     book.attribute = true;
// } else {
//     book.available = false;
// }

book.available = book.available === undefined ? true : false;

console.log(`Book is available: ${book.available}`);




// ! THIS referenca 

// * 1. korak ka THIS
const song = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log('Song Best of you by Foo Fighters is now playing!');
    }
}

song.play(); // Song Best of you by Foo Fighters is now playing!


// * 2. korak ka THIS
const song1 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log(`Song ${title} by ${artist} is now playing!`);
    }
}

// song1.play(); // ! Uncaught ReferenceError: title is not defined

try {
    song1.play();
} catch (error) {
    console.log(error);
}


// * 3. korak ka THIS --> THIS referenca gadja (ukazuje) na objekat koji odredjenu metodu poziva.
/**
 * U ovom primeru, objekat koji poziva metodu play() je song2 i samim tim THIS referenca izvlaci iz tog objekta title i artist vrednosti
 * i vraca nam ih u konzolnom ispisu.
*/
const song2 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log(`Song ${this.title} by ${this.artist} is now playing`);
    }
}

song2.play();


song2.pause = function() {
    console.log(`${this.title} of ${this.artist} has been paused!`);
}

console.log(song2);

song2.pause();


// * kraci zapis koraka 3

const song3 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play() {
        console.log(`Song ${this.title} by ${this.artist} is now playing`);
    }
}

song3.play(); // Song Best of you by Foo Fighters is now playing



// primer:


// * 1. pokusaj
const album = {
    artist: 'AC/DC',
    name: 'High Voltage',
    songs: ['High Voltage', 'Are you ready?', 'Thunderstruck']
}

album.listSongs = function() {
    this.songs.forEach((song, idx) => {
        console.log(`Song ${++idx}: ${song}`);
    });
}

album.listSongs(); // * radi


// ! 18. cas (02.02.2022.)

console.log('-------------- 18. cas (02.02.2022.) -------------');


// * 2. pokusaj

album.listInfo = function() {
    this.songs.forEach(function (song,idx) {
        console.log(`${++idx}. : ${song} (${this.artist})`);
    });
}

album.listInfo(); // ! za svakog artist-a vraca UNDEFINED


// * 1. nacin resavanja 2. pokusaja:

album.listInfo1 = function() {
    this.songs.forEach(function (song,idx) {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    }, album);
}

album.listInfo1(); // * radi -> artist = AC/DC


// * 2. nacin resavanja 2. pokusaja:

album.listInfo2 = function() {
    this.songs.forEach((song,idx) => {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    });
}

album.listInfo2(); // * radi -> artist = AC/DC



// * Primer kada se THIS odnosi na WINDOW objekat (GLOBAL objekat)

// window.x = 55;

function someFunction() {
    console.log(this);
}

someFunction(); // undefined jer nemamo nad window objektom property x, ali ga mozemo dodati kao u 379. liniji koda.


seeAllBtn.addEventListener('click', function() { 
    console.log(this); // vraca BUTTON element koji je odgovoran za pozivanje funkcije
});



// ! THIS i ARROW funkcije

// ! Arrow funkcije nemaju sopstveno THIS.

// window.currentGear = 3;

const bus = {
    doubleDecker: true,
    color: 'blue',
    currentGear: 5,
    getCurrentGear: () => {
        return this.currentGear;
    }
}

console.log(bus.getCurrentGear()); // undefined



// const cart = {
//     cartItems: ['Bread', 'Milk', 'Cheese'],
//     checkCart() {
//         if(this.cartItems.length) {
//             const seeAllBtn = document.getElementById('see-all-btn');
//             seeAllBtn.className = 'btn-primary';
//             seeAllBtn.addEventListener('click', function() {
//                 // this.cartItems.show();
//                 console.log(this);
//             });
//         }
//     }
// }

const cart = {
    cartItems: ['Bread', 'Milk', 'Cheese'],
    checkCart() {
        if(this.cartItems.length) {
            const seeAllBtn = document.getElementById('see-all-btn');
            seeAllBtn.className = 'btn-primary';
            let self = this; // ! cuvamo THIS u novoj varijabli
            seeAllBtn.addEventListener('click' , function() {
                console.log(self.cartItems.show());
            });
        }
    }
}



// ! BIND(), CALL() i APPLY()

// ! BIND() funkcija -> kreira novu funkciju koja kada se pozove poseduje sopstveno THIS koje je postavljeno na odredjenu vrednost.

// window.getFullName = function() {
//     return 'Test Testic';            // * Worker name is Test Testic
// }

const worker1 = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 55,
    active: true,
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

const workerName = function() {
    console.log(`Worker name is ${this.getFullName()}`);
}

const logWorker = workerName.bind(worker1);

logWorker(); // Worker name is Petar Petrovic


// * moze prihvatiti i dodatne argumente
const workerNameWithParams = function(shift) {
    console.log(`Worker ${this.getFullName()} is working ${shift} shifts.`);
}

const logWorkerWithParams = workerNameWithParams.bind(worker1);

logWorkerWithParams('night'); // Worker Petar Petrovic is working night shifts.



// ! CALL funkcija -> funkcija koja poziva funkciju sa obezbedjenom THIS vrednoscu i odredjenim parametrima

const worker2 = {
    firstName: 'Marko',
    lastName: 'Markovic',
    age: 35,
    active: true,
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

const workerName2 = function(shift, numberOfYears) {
    console.log(`${this.getFullName()} has been working for ${numberOfYears} years in ${shift} shifts.`)
}

workerName2.call(worker2, 'day', 5); // Marko Markovic has been working for 5 years in day shifts.



// ! APPLY funkcija -> isto kao i CALL() funkcija, s tim da se njoj dodatni argumenti prosledjuju kao NIZ elemenata (argumenata)

// const args = ['night',10]
workerName2.apply(worker2, ['night', 10]); // Marko Markovic has been working for 10 years in night shifts.


// ! NAPOMENA:

/**
 * 1. Kod function declaration formata funkcija, kao npr:
 *      function mojaFunkcija() {
 *      }
 *    dodavanje poziva call,bind,apply nakon zatvorene viticaste zagrade NE RADI.
 * 2. Kod function expression formata (to je cuvanje funkcije u varijabli) ovo prethodno navedeno RADI.
 */

// TODO Zadaci za vezbu:

// 1.

const func1 = function() {
    console.log(this);
}.bind({id: 5, name: 'Samsung Galaxy 9 Note'});

func1(); // {id: 5, name: 'Samsung Galaxy 9 Note'}


// 2.

// const func2 = function(x,y,z) {
//     console.log(this);
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }.call(111, 2,3,4);  // * OVDE MOZEMO ODMAH .call,bind ili apply


function func2(x,y,z) {
    console.log(this);
    console.log(x);
    console.log(y);
    console.log(z);
}                       // ! OVDE NE MOZEMO ODMAH .call,bind ili apply

func2.call(3, 10,20,30);


// 3.

const func3 = function(a,b,c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}.apply({id: Math.floor(Math.random() * 100)}, [7,15,20]);


// 4. 

const updateZipCode = function() {  // 0.1231321231  -->  12313.3213323 --> 12314
    this.zipCode = Math.ceil(Math.random() * 100000);
    console.log(`New zip code for ${this.city} is ${this.zipCode}`);
}.call({city: 'Novi Sad', zipCode: 21000});

// 5. Kreirati funkciju getData koja ispisuje podatke o objektu cityNoviSad (proizvoljno dodati neke atribute)

const cityNoviSad = {
    name: 'Novi Sad',
    zipCode: 21000,
    lat: 0.1231231231,
    long: 0.8783247832
}

const getData = function() {
    console.log(this);
}.call(cityNoviSad); // {name: 'Novi Sad', zipCode: 21000, lat: 0.1231231231, long: 0.8783247832}


// 6. Kreirati funkciju za update cityNoviSad objekta prosledjenim parametrima call funkcije.

const updateCityNoviSad = function(country, newLat, newLong) {
    this.country = country;
    this.lat = newLat;
    this.long = newLong;
    console.log(this);
}.call(cityNoviSad, 'SRB', 0.8191238318, 0.9991919191); // {name: 'Novi Sad', zipCode: 21000, lat: 0.8191238318, long: 0.9991919191, country: 'SRB'}


// TODO Domaci 18. cas(02.02.2022.)

// 7. Kreirati funkciju nad kojom se primenjuje apply koji ce dodeliti 2 nova atributa objektu cityNoviSad: region i population

const newData = ['Vojvodina', 300000];

const updateDataWithApply = function(region, population) {
    this.region = region;
    this.population = population;
    console.log(this);
}.apply(cityNoviSad, newData);


// 8. Kreirati objekat person i atributom name (npr 'Marko') i
//    sa ugnjezdenim objektom kao property-em objekta koji ima isto name atribut (npr 'Petar') i metodom unutar njega koja vraca ime osobe.
//    Metodu getName() pozvati i za prvi name atribut i za drugi.

var person = {
    name : 'Marko',
    data : {
        name : "Petar",
        getName : function() {
            return this.name;
        }
    }
}

console.log(person.data.getName.call(person)); // Marko

console.log(person.data.getName.call(person.data)); // Petar


// 9. Kreirati objekat zipCode sa value atributom (npr 33000) i metodom checkZipCode. Unutar metode, kreirati funkciju updateZipCode koja
//    menja zipCode sa 33000 na 55000 za zipcode objekat.

const zipcode = {
    value: 33000,
    checkZipcode : function() {
        console.log(this);
        const updateZipCode = function() {
            this.value = 55000;
            console.log(this);
        }.bind(this);
        updateZipCode();
    }
}
zipcode.checkZipcode();