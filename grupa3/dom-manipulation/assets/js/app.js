// ! 19. cas (24.03.2022.)

console.log('------------------ 19. cas (24.03.2022.) ----------------');

// ! Tehnike ispitivanja DOM-a se mogu podeliti na dve grupe (pre svega):

// ! 1. Metode koje vracaju TACNO jedan element iz DOM-a (tj referencu na njega):

// * a) querySelector('.list-item');

// * b) getElementById('main-title');


// ! 2. Metode koje pronalaze VISE OD JEDNOG elementa (ili jedan)

// * a) querySelectorAll('li');

// * b) getElementsByTagName('li');

// * c) getElementsByClassName('list-item'), ITD...



const mainTitle = document.getElementById('main-title');

console.dir(mainTitle);

const listItems = document.getElementsByClassName('list-item');

console.dir(listItems);

for(let item of listItems) {
    console.dir(item);
}


console.log(document.querySelector('.list-item'));

console.log(document.querySelectorAll('.list-item'));


// Moguce je koristiti kombinatore:

console.log(document.querySelector('.js-my-courses-list li'));

console.log(document.querySelector('.js-my-courses-list li:last-of-type'));


const courses = document.querySelector('.js-my-courses-list');

console.log(courses.querySelector('li'));




// ! Manipulacija elementima:

console.log(`Main title is ${mainTitle.textContent}`);


// menjanje sadrzaja naslova

mainTitle.textContent = 'New Website';

// dodavanje novih klasa naslovu (elementu)

mainTitle.className = 'new-title our-title';

console.dir(document.querySelector('.our-title'));

// ! menjanje stilizacije elementa kroz INLINE STYLE (NIJE DOBRA PRAKSA):

mainTitle.style.color = '#dd3300';


// dinamicko ponasanje naslova (elementa):

let userAnswer = false;

if(userAnswer) {
    mainTitle.style.backgroundColor = 'lightgreen';
} else {
    mainTitle.style.backgroundColor = 'coral';
}


const allListItems = document.querySelectorAll('li');

console.dir(allListItems);

allListItems[1].style.color = 'purple';


for(let item of allListItems) {
    item.style.borderBottom = '2px solid black';
    item.style.color = 'orange';
}
