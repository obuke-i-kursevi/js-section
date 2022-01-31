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

album.listSongs();
