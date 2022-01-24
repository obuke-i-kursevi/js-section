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


