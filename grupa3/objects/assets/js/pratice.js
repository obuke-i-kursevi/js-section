// ! 15. cas (01.03.2022.)

console.log('----------- 15. cas (01.03.2022.) -------------');

const studentExample = {
    name: 'Marko Markovic',
    age: 25,
    courses: ['Java', 'JavaScript', 'C#'],
    gender: 'male',
    isStudent: true,
    address: {
        street: 'Fruskogorska 3',
        zipCode: 21000,
        city: 'Novi Sad',
        apartment: {
            number: 412,
            floor: 10
        }
    }
}



studentExample.studying = function() {
    console.log('I am studying');
}

console.log(studentExample);

studentExample.studying();


// ! Dodavanje novih property-a objektu:

studentExample.currentYear = 3;

console.log(studentExample);


// ! Menjanje postojecih property-a:

studentExample.isStudent = false;

console.log(studentExample);

// * ili na primer:

// studentExample.courses.splice(-1,1);

studentExample.courses.pop();

console.log(studentExample);

// * ili na primer:

studentExample.address.street = 'Bulevar Oslobodjenja 11';

console.log(studentExample);


// * ili na primer:

studentExample.address.apartment.number = 44;

console.log(studentExample);


// ! Brisanje property-a:

delete studentExample.gender;

console.log(studentExample);



// ! SQUARE BRACKET (sintaksa uglastih zagrada)

// 1.

console.log('Square brackets sintaksa', studentExample['name']);

// 2.

let studentCourses = 'courses';

console.log('Get me a property: ', studentExample[studentCourses]);

// 3.

studentExample[studentCourses].push('Python');

studentExample[studentCourses].forEach((val,idx) => {
    console.log(`Course number ${++idx} : ${val}`);
});


// 4. 

for(let prop in studentExample) {
    console.log(studentExample[prop]);
}


// 5.

let userInput = 'averageGrade';

studentExample[userInput] = 8.87;

console.log(studentExample);



// ! JSON interfejs => interfejs koji pruza mogucnosti:
// 1. Parsiranje nekog stringa u JS objekat
// 2. Parsiranje JS objekat u string

// JSON -> JavaScript Object Notation

// 1.
let exampleString = '{"id": 22, "name": "Petar Petrovic", "isStudent": true}';

let elementObject = JSON.parse(exampleString);

console.log(elementObject);


// 2.
let exampleObject2 = {
    id: 4,
    name: 'Sara Saric',
    isStudent: false,
    courses: ['Java', 'JavaScript'],
    address: {
        street: 'Fruskogorska 1',
        zipCode: 21000
    }
}

let exampleString2 = JSON.stringify(exampleObject2);

console.log(exampleString2);

let newObj = JSON.parse(exampleString2);

console.log(newObj);




// ! 17. cas (08.03.2022.)

console.log('--------------- 17. cas (08.03.2022) ---------------');

const car = {
    name: 'Audi A6',
    gasTypes: ['diesel', 'gas'],
    gears: 6
}

const newCar = car;

// console.log(car);
// console.log(newCar);

newCar.gears = 5; // ! ovo je samo prosledjivanje reference jedne u drugu varijablu (oba pokazivaca gadjaju isti objekat u memoriji)

// console.log(car);
// console.log(newCar);

// * Spread operator se moze koristiti za kopiranje objekata (SHALLOW kopija)

const newCar2 = {...car};

// console.log(car);
// console.log(newCar2);

newCar2.name = 'BMW 5';

// console.log(car);
// console.log(newCar2);

newCar2.gasTypes.push('benzin');

// console.log(car);
// console.log(newCar2);

// * Kreiranje DEEP kopije (duboke kopije -> tj kopije koja kopira posebno i primitivne i referentne tipove podataka)

const newCar3 = {
    ...car,
    gasTypes: [...car.gasTypes]
};

// console.log(car);
// console.log(newCar3);

newCar3.gasTypes.push('eletric power');

console.log(car);
console.log(newCar3);




// * Kreiranje kopije uz Object.assign()

const newCar4 = Object.assign({}, car); // Pravi Shallow kopiju

const gasTypes = Object.assign([], car.gasTypes);

console.log(gasTypes);




// ! Object Desctructing

const book = {
    id: Math.ceil(Math.random() * 100),
    name: 'Harry Potter',
    writter: 'J.K. Rowling',
    editions: [1,2,3],
    pages: 550
}


// * 1. slucaj

const {editions} = book;

console.log(`Harry Potter has editions: ${editions}`);


// * 2. slucaj

const {id, name} = book;

console.log(`Book ${name} has ID: ${id}`);


// * 3. slucaj

const {pages, ...otherProps} = book;

console.log(pages);

console.log(otherProps);



// * Re-assign naziva dobijenog property-a

// pages --> numberOfPages

book.numberOfPages = book.pages;
delete book.pages;

console.log(book);



// * Proveravanje da li odredjeni property postoji u nekom objektu

// * 1. nacin -> Uz IN kljucnu rec

if ('numberOfPages' in book) {
    console.log(`Property numberOfPages exists in book object!`);
}

// publisher

if(!('publisher' in book)) {
    book.publisher = 'Vulkan DOO';
}

console.log(book);


// * 2. nacin -> uz proveru da li je nesto undefined

console.log(book.available); // undefined

if(book.available === undefined) {
    book.available = true;
} else {
    book.available = false;
}

console.log(book); // available = true




// ! THIS referenca

// * 1. korak ka THIS referenci

const song = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log(`Best of you by Foo Fighters is now playing!`);
    }
}

song.play();


// * 2. korak ka THIS referenci

const song1 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play: function() {
        console.log(`${title} by ${artist} is now playing!`);
    }
}

// song1.play(); // ! title is not defined


// * 3. korak ka THIS referenci --> Referenca THIS ukazuje na objekat koji odredjenu metodu poziva

const song2 = {
    title: 'Best of you',
    artist: 'Foo Fighters',
    play() {
        console.log(`${this.title} by ${this.artist} is now playing!`);
    }
}

song2.play(); // * Best of you by Foo Fighters is now playing!

song2.pause = function() {
    console.log(`${this.title} of ${this.artist} has been paused!`);
}

song2.pause(); // * Best of you of Foo Fighters has been paused!


// * PRIMER:

const album = {
    artist: 'AC/DC',
    name: 'High Voltage',
    songs: ['High Voltage', 'Are you ready?', 'Thunderstruck']
}

album.listSongs = function() {
    this.songs.forEach((song, idx) => {
        console.log(`Song ${++idx} : ${song}`);
    });
};

album.listSongs();




// ! 18. cas (10.03.2022.)

console.log('----------- 18. cas (10.03.2022.) -------------')