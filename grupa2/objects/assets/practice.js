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
