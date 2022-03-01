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