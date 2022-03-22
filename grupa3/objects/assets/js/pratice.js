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

console.log('----------- 18. cas (10.03.2022.) -------------');


album.listInfo = function() {
    this.songs.forEach(function(song,idx) {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    });
}

album.listInfo();


// * 1. nacin resavanja gornjeg problema

album.listInfoNew = function() {
    this.songs.forEach(function(song,idx) {
        console.log(`${++idx}.: ${song} (${this.artist})`);
    }, album);
}

album.listInfoNew();


// * 2. nacin resavanja gornjeg problema

const album2 = {
    songs: ['Nesto', 'Nesto2'],
    artist: 'Novi'
}

album.listInfoArrow = function() {
    this.songs.forEach((song, idx) => {
       let a = this;
       console.log(`${++idx}.: ${song} (${this.artist})`);  // * THIS se uzima od parent-a u ovom slucaju
    }, album2);
}

album.listInfoArrow();



// * PRIMER Window objekta

// window.artist = 'Led Zeppelin';

// artist = 'Led Zeppelin';

function getGlobal() {
    console.log(this);
}

getGlobal();

// alert();



// * THIS kao DOM element

const seeAllBtn = document.getElementById('see-all-btn');

seeAllBtn.addEventListener('click', function() {
    console.dir(this); // disclosures triangles
});



// ! THIS i ARROW funkcije

const bus = {
    doubleDecker: true,
    currentGear: 5,
    color: 'yellow',
    getCurrentGear() {
        return this.currentGear; // * 5
    }
    // getCurrentGear: () => {
    //     return this.currentGear; // ! undefined
    // }
}

console.log(bus.getCurrentGear());





// ! BIND, CALL, APPLY funkcije

// ! BIND funkcija -> kreira NOVU funkciju koja kada se pozove poseduje SOPSTVENO THIS postavljeno na tacno odredjenu vrednost.


const worker1 = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 25,
    active: true,
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName; // 'Petar Petrovic'
        return fullName;
    }
}


const workerName = function() {
    console.log(`Worker name is ${this.getFullName()}`);
}


const logWorker = workerName.bind(worker1);

logWorker(); // Worker name is Petar Petrovic


const workerWithShift = function(shift) {
    console.log(`Worker ${this.getFullName()} is working ${shift} shifts`);
}

const logWorkerWithShift = workerWithShift.bind(worker1);

logWorkerWithShift('day'); // Worker Petar Petrovic is working day shifts



// ! CALL funkcija -> funkcija koja poziva funkciju SA OBEZBEDJENOM THIS vrednoscu i odredjenim argumentima


const worker2 = {
    firstName: 'Marko',
    lastName: 'Markovic',
    active: true,
    age: 55,
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

const workerName2 = function(shift, numberOfYears) {
    console.log(`${this.getFullName()} is working for ${numberOfYears} years only in ${shift} shifts`);
}

workerName2.call(worker2, 'night', 5); // Marko Markovic is working for 5 only in night shifts



// ! APPLY funkcija -> funkcija kao i CALL(), s tim da se njoj dodatni argumenti prosledjuju kao NIZ elemenata (argumenata)

workerName2.apply(worker2, ['middle', 10]); // Marko Markovic is working for 10 years only in middle shifts



// ! NAPOMENA:

/**
 * 1. Kod function declaration formata funkcija, kao npr:
 * function() nekaFja() {
 * }
 * dodavanje poziva CALL, APPLY i BIND nakon zatvorene viticaste zagrade same funkcije NE RADI.
 * 
 * 2. Kod function expression formata funkcija -> dodavanje poziva CALL, APPLY i BIND funkcija nakon zatvorene 
 * viticaste zagrade RADI.
*/


// TODO Vezba:


// 1.

const func1 = function() {
    console.log(this);
}.bind({id: 5, name: "Smart Watch 3"});

// const func1Bind = func1.bind({id: 5, name: "Smart Watch 3"});

func1();


// 2. 

function func2(x,t,z) {
    console.log(this);
    console.log(x);
    console.log(t);
    console.log(z);
}                        // ! NAPOMENA: OVDE NE MOZEMO ODMAH .CALL ili .BIND ili .APPLY

func2.call(
    {id: Math.floor(Math.random() * 100)}, // 0.123123123 -> 12.323213 --> 12
    10, 20, 30
);



// 3.

func2.apply(
    {id: Math.floor(Math.random() * 100)}, // 0.123123123 -> 12.323213 --> 12
    [2, 4, 6]
);



// TODO Domaci 18. cas(22.03.2022.)

// 4. Napisati funkciju koja update-uje zipCode prosledjenog objekta

const updateZipCode = function() {  // 0.1231321231  -->  12313.3213323 --> 12314
    this.zipCode = Math.ceil(Math.random() * 100000);
    console.log(`New zip code for ${this.city} is ${this.zipCode}`);
}.call({city: 'Novi Sad', zipCode: 21000});


// 5. Kreirati funkciju koja na konzoli ispisuje objekat koji prosledjujemo kao THIS same funkcije


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

 
// 9. Kreirati objekat zipCode sa value atributom (npr 33000) i metodom checkZipCode. 
//    Unutar metode, kreirati funkciju updateZipCode koja menja zipCode sa 33000 na 55000 za zipcode objekat.

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