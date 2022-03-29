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





// ! 20. cas (29.03.2022.)

console.log('----------- 20. cas (29.03.2022.) ------------');

// U pogledu element node-ova u odnosu na neki element, postoji nekoliko termina:

// 1. Children
// 2. Descendants
// 3. Parent
// 4. Ancestors

// ! 1. CHILD ELEMENT --> direktan child (potomak) nekog Node-a.

/**
 * <ol>
 *  <li>Item 1<li>    // ! <li> je direktan child element <ol>
 * </ol>
*/


/**
 * <ol>
 *  <li>Item <span>2</span></li>   // ! <span> element NIJE direktan potomak <ol>
 * </ol>
 */



// ! 2. DESCENDANT ELEMENT --> je ILI direktan ILI indirektan potomak nekog Node-a.

/**
 * <div>
 *  <p> Lorem ipsum text <span> random </span> nesto bla bla </p>  // ! DESCENDANT elementi (potomci) <div> elementa su i <p> i <span> elementi
 * </div>
*/



// ! 3. PARENT ELEMENT --> je direktan RODITELJ nekog node-a.

/**
 * <h1>
 *  Hello to our <strong> new </strong> website!   // ! Parent element (roditelj) <strong> elementa je <h1>
 * </h1>
*/



// ! 4. ANCESTOR ELEMENT --> je ILI direktan ili INDIREKTAN predak nekog node-a.

/**
 * <div>
 *  <p>
 *      This is my <span> new </span> blog post. // ! PRECI (ancestor elementi) <span> elementa su i <p> i <div>
 *  </p>
 * </div>
*/




// ! Prolazenje kroz DOM na gore (ka precima):

// 1. parentNode --> selektuje bilo koji parent node (bez obzira na njegov tip)
// 2. parentElement --> selektuje parent element node (dakle samo tip element node-a)
// 3. closest() --> vraca bilo kog parent-a koji zadovoljava neki CSS selektor koji se prosledi



// ! Prolazenje kroz DOM na dole (ka potomcima):

// 1. childNodes --> selektuje bilo koji child node (bez obzira na njegov tip)
// 2. children --> selektuje child ELEMENT node-ove.
// 3. querySelector() --> vraca node-ove na osnovu CSS selektora koji prosledimo ISKLJUCIVO UNUTAR tog node-a nad kojim ovu metodu i pozivamo
// 4. firstChild --> selektuje PRVI CHILD node (bez obzira na njegov tip)
// 5. firstElementChild --> selektuje PRVI CHILD ELEMENT node
// 6. lastChild --> selektuje POSLEDNJI CHILD node (bez obzira na njegov tip)
// 7. lastElementChild --> selektuje POSLEDNJI ELEMENT CHILD node



// ! Provera elemenata na istom nivou (tzv. sibling elemenata):

/**
 * <ol>
 *  <li>1</li>
 *  <li>2</li>
 *  <li>3</li>
 * </ol>
 */

// 1. previousSibling --> dobavlja node pre tog <li> (2) (bilo kog tipa)
// 2. previousElementSibling --> dobavlja ELEMENT node pre tog <li> (2)

// 3. nextSibling --> dobavlja node nakon tog <li> (2) (bilo kog tipa)
// 4. nextElementSibling --> dobavlja ELEMENT node nakon tog <li> (2) (bilo kog tipa)



// ! PRIMERI prolazenja ka dole kroz DOM u odnosu na neki element

// console.log(courses);


console.log(courses.children);

console.log(courses.children[1]);

console.log(courses.childNodes);

console.log(courses.firstElementChild);

console.log(courses.lastElementChild);



// ! PRIMERI prolazenja ka gore kroz DOM u odnosu na neki element

const myListItem = document.querySelector('.list-item');

console.log(myListItem.parentElement);

console.log(myListItem.parentNode);

// jedina razlika bi mozda bila u sledecem:

console.log(document.documentElement.parentElement); // null

console.log(document.documentElement.parentNode); // document


console.log(myListItem.closest('div'));

console.log(myListItem.closest('.js-list-wrapper'));



// ! PRIMERI prolazenja na istom nivou u DOM-u u odnosu na neki element

console.log(myListItem.nextElementSibling);

console.log(myListItem.previousElementSibling);


const toggleClassesDiv = document.querySelector('.js-toggle-classes-wrapper');

console.log(toggleClassesDiv);

if (toggleClassesDiv) {
    for(let p of toggleClassesDiv.children) {
        // console.log(p);
        p.classList.add('my-paragraph-inactive');
        p.classList.remove('my-paragraph');
    }
}


let correctAnswer = true;

if(correctAnswer) {
    toggleClassesDiv.classList.add('visible');
} else {
    toggleClassesDiv.classList.add('not-visible');
}


// TODO ZA DOMACI --> pokusati Hide / Show div-a na klik odgovarajucih dugmeta iz DOM-a


// ! DODAVANJE novih elemenata u DOM kroz JS:

// 1. innerHTML --> property koji daje mogucnost da zamenite ceo element nekim novim HTML content-om:

// * toggleClassesDiv.innerHTML = 'Changing the <span>text nesto</span> whole HTML inside of this DIV element';



// 2. createElement() metoda --> metoda za kreiranje novih element node-ova (elemenata)

const heading3 = document.createElement('h3');

heading3.textContent = 'Dinamically appended to <div> element!';

// toggleClassesDiv.appendChild(heading3);


toggleClassesDiv.prepend(heading3);


const par = document.createElement('p');

par.textContent = 'New p element';

toggleClassesDiv.lastElementChild.before(par);


const spanEl = document.createElement('span');

spanEl.textContent = 'New span element';

toggleClassesDiv.firstElementChild.after(spanEl);


const newPar = document.createElement('p');

newPar.textContent = 'Something new';

toggleClassesDiv.firstElementChild.replaceWith(newPar);




// ! UKLANJANJE ELEMENATA IZ DOM-a

// 1. nacin

courses.remove();


// 2. nacin

courses.parentElement.removeChild(courses);




