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


