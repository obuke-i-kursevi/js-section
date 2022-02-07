// ! 15. cas (24.01.2022.)

console.log('------------------ 15. cas (24.01.2022.) --------------------');

const studentExample = {
    name: 'Marko Markovic',
    age: 23,
    courses: ['Java', 'JavaScript', 'C#'],
    gender: 'male',
    isStudent: true,
    address: {
        street: 'Fruskogorska 33',
        zipCode: 21000,
        city: 'Novi Sad',
        apartment: {
            number: 145,
            floor: 10
        }
    }
}

console.log(studentExample);


studentExample.studying = function() {
    console.log('I am studying for exam!');
}

studentExample.studying();


// ! DODAVANJE atributa

studentExample.year = 3;

console.log(studentExample);


// ! MENJANJE atributa

studentExample.isStudent = false;

console.log(studentExample);

// ili na primer:

// studentExample.courses.pop();

studentExample.courses.splice(-1,1);

console.log(studentExample);

// ili na primer:

studentExample.address.street = 'Bulevar Oslobodjenja 11';

console.log(studentExample);

// ili na primer: 

studentExample.address.apartment.floor = 3;

console.log(studentExample);

// ! BRISANJE atributa

delete studentExample.gender;

console.log(studentExample);



// ! SQUARE BRACKETS sintaksa (sintaksa uglastih zagrada)

// 1.

console.log('Square brackets sintaksa', studentExample['name']);


// 2.

let findMeCourses = 'courses';

console.log('Find me property: ', studentExample[findMeCourses]);

// ili na primer:

studentExample[findMeCourses].push('Python');

studentExample[findMeCourses].forEach((val,idx) => console.log(`Course number ${idx+1} : ${val}`));

// ili na primer:

for(let prop in studentExample) {
    console.log(studentExample[prop]);
}


// 3.

let userInput = 'averageGrade';

studentExample[userInput] = 8.83;

console.log(studentExample);



// ! JSON interfejs -> interfejs koji pruza mogucnosti:
// 1. Parsiranja nekog stringa u JS objekat
// 2. Parsiranja JS objekta u string

// JSON - Java Script Object Notation

// 1.
let exampleString = '{"id": 14, "name": "Petar Petrovic", "isStudent": true}';

let exampleObject = JSON.parse(exampleString);

console.log(exampleObject);

// 2.
let exampleObject2 = {
    id: 4,
    name: 'Sara Saric',
    isStudent: true,
    courses: ['Java', 'JavaScript', 'C#']
}

let exampleString2 = JSON.stringify(exampleObject2);

console.log(exampleString2);




// ! 17. cas (31.01.2022.)

console.log('------------------- 17. cas (31.01.2022.) --------------');

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


// * kopiranje uz pomocu spread operatora -> kreira SHALLOW kopiju:

const newCar2 = {...car};

newCar2.name = 'BMW 5';

console.log(car);
console.log(newCar2);


car.gasTypes.push('benzin');

console.log(car);
console.log(newCar2);


// * kreiranje DEEP kopije
const newCar3 = {
    ...car, 
    gasTypes: [...car.gasTypes]
};


car.gasTypes.push('eletricity');

console.log(car);
console.log(newCar3);



// * Object.assign() funkcija za kopiranje objekata

const newCar4 = Object.assign({}, car);

console.log(newCar4);




// ! Object destructing 

const book = {
    id: Math.ceil(Math.random() * 100),
    name: 'Harry Potter',
    writter: 'J.K. Rowling',
    editions: [1,2,3],
    pages: 550
}

// console.log(book.pages);

// * 1. slucaj
const {editions} = book;

console.log(`Book has editions: ${editions}`); // Book has editions: 1,2,3



// * 2. slucaj
const {id,name} = book;

console.log(`Book ${name} has ID: ${id}`); // Book Harry Potter has ID: 55


// * 3. slucaj

const {pages, ...otherProps} = book;

console.log(`Book has ${pages} pages`);

console.log(otherProps);



// * Re-assign naziva dobijenog property-a:

// pages --> numberOfPages

book.numberOfPages = book.pages;
delete book.pages;

console.log(book);



// ! Proveravanje da li odredjeni property postoji u objektu

// npr:

// let numberOfPages = 'numberOfPages';

// * 1. nacin
if('numberOfPages' in book) {
    console.log(`Property numberOfPages exists in book object!`); // Property numberOfPages exists in book object!
}


if(!('publisher' in book)) {
    book.publisher = 'Vulkan DOO';
}


console.log(book);



// * 2. nacin
// console.log(book.available); // undefined

// if(book.available === undefined) {
//     book.available = true;
// } else {
//     book.available = false;
// }

// book.available = book.available === undefined ? true : false;
book.available = 'available' in book ? `this book is available` : 'this book is not available';

console.log(book);




// ! THIS referenca

// * 1. korak ka THIS referenci

const song = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log('Best of you by Foo Fighters is now playing!');
    }
}

song.play(); // Best of you by Foo Fighters is now playing!


// * 2. korak ka THIS referenci

const song1 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log(`${title} by ${artist} is now playing!`);
    }
}

// song1.play(); // ! Uncaught ReferenceError: title is not defined


// * 3. korak ka THIS referenci -> referenca koja ukazuje na objekat koji odredjenu metodu poziva
/**
 * U ovom primeru (ispod), objekat koji poziva play() metodu naziva se song2, i shodno tome THIS gadja taj objekat, i njegove atribute
 * title i artist.
*/

const song2 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    // ! novi nacin kreiranja metoda u objektu
    play() {
        console.log(`${this.title} by ${this.artist} is now playing`);
    }
    // ! stari nacin kreiranja metoda u objektu
    // play: function() {
    //     console.log(`${this.title} by ${this.artist} is now playing`);
    // }
}

song2.play(); // Best of you by Foo Fighters is now playing

song2.pause = function() {
    console.log(`${this.title} of ${this.artist} has been paused!`);
}

song2.pause(); // Best of you of Foo Fighters has been paused!




// Primer:

const album = {
    artist: 'AC/DC',
    name: 'High Voltage',
    songs: ['High Voltage', 'Are you ready?', 'Thunderstruck']
}


album.listSongs = function() {
    this.songs.forEach((song,idx) => {
        console.log(`Song ${++idx} : ${song}`);
    });
}

album.listSongs();


// ! 18. cas (02.02.2022.)

console.log('-------------- 18. cas (02.02.2022.) -------------');


// * pokusaj vracanja artist-a za album

album.listInfo = function() {
    this.songs.forEach(function (song,idx) {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    });
}

album.listInfo(); // ! za artist-a vraca undefined


// * 1. nacin resavanja gornjeg problema

album.listInfoNew = function() {
    this.songs.forEach(function (song,idx) {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    }, album);
}

album.listInfoNew(); // * vraca za artist-a (AC/DC)


// * 2. nacin resavanja gornjeg problema

album.listInfoArrow = function() {
    this.songs.forEach((song,idx) => {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    })
}

album.listInfoArrow(); // * vraca za artist-a (AC/DC)




// * PRIMER Window objekta

// window.artist = 'Led Zeppelin'

// artist = 'Led Zeppelin';

function nekaFunkcija() {
    console.log(this);
}

nekaFunkcija(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// * THIS kao DOM element

seeAllBtn.addEventListener('click', function() {
    console.log(this);
});



// ! THIS i ARROW funkcije


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
//             const checkAllBtn = document.getElementById('see-all-btn');
//             checkAllBtn.className = 'btn-primary';
//             checkAllBtn.addEventListener('click', function() {
//                 console.log(this);
//             });
//         }
//     }
// }

const cart = {
    cartItems: ['Bread', 'Milk', 'Cheese'],
    checkCart() {
        if(this.cartItems.length) {
            const checkAllBtn = document.getElementById('see-all-btn');
            checkAllBtn.className = 'btn-primary';
            let cartObject = this;
            checkAllBtn.addEventListener('click', function() {
                console.log(cartObject.cartItems);
            });
        }
    }
}



// ! BIND, CALL, APPLY funkcije

// ! BIND() funkcija -> kreira NOVU funkciju koja kada se pozove poseduje sopstveno THIS postavljeno na odredjenu vrednost.


const worker1 = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 33,
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

// workerName(); // TypeError: this.getFullName is not a function


const workerNameWithParams = function(shift) {
    console.log(`Worker ${this.getFullName()} is working ${shift} shifts.`);
}

const logWorkerWithParams = workerNameWithParams.bind(worker1);

logWorkerWithParams('night'); // Worker Petar Petrovic is working night shifts.



// ! CALL funkcija -> funkcija koja poziva funkciju sa obezbedjenom THIS vrednoscu i odredjenim argumentima

const worker2 = {
    firstName: 'Marko',
    lastName: 'Markovic',
    age: 43,
    active: true,
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}


const workerName2 = function(shift, numberOfYears) {
    console.log(`${this.getFullName()} has been working for ${numberOfYears} years in ${shift} shifts.`);
}

let shift = 'day';

workerName2.call(worker2, shift, 16); // Marko Markovic has been working for 10 years in day shifts.



// ! APPLY funkcija -> isto kao i CALL() funkcija, s tim da se njoj dodatni argumenti prosledjuju kao niz elemenata (argumenata)

// const arrayOfData = ['night', 16];
workerName2.apply(worker2, ['night', 16]); // Marko Markovic has been working for 16 years in night shifts.


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


// 5. 

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


// 8. Kreirati objekat person sa atributom name (npr 'Marko') i
//    sa ugnjezdenim objektom kao property-em objekta koji ima isto name atribut (npr 'Petar') i metodom unutar njega koja vraca ime osobe.
//    Metodu getName() pozvati i za prvi name atribut i za drugi.

let person = {
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