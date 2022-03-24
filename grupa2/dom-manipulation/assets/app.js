// ! 19.cas (07.02.2022.)


/**
 * U momentu kada se web stranica ucita, browser kreira DOM (Document Object Model) za tu stranicu.
 * HTML DOM je zapravo tree struktura (struktura stabla) : 
 * 
 * 
 *  https://www.w3schools.com/whatis/img_htmltree.gif
 * 
 * 
 * To znaci da svakom DOM elementu mozemo pristupiti ponaosob i manipulisati njime.
 * 
 */

console.log('------------- 19. cas (07.02.2022.) ---------------');

console.dir(document);
console.dir(window);

// ! Tehnike ispitivanja DOM-a se mogu podeliti pre svega na 2 grupe:

// ! 1. Metode koje vracaju TACNO jedan element iz DOM-a (tj referencu na njega):

// * a) querySelector('.btn'); 

// * b) getElementById('btn-1');


// ! 2. Metode koje pronalaze VISE OD JEDNOG elementa (ili jedan)

// * a) querySelectorAll('.btn')

// * b) getElementsByTagName('button');

// * c) getElementsByClassName('btn'); , ITD...



const mainTitle = document.getElementById('main-title');

console.dir(mainTitle);

const listItems = document.getElementsByClassName('list-item');

console.dir(listItems);

for(let item of listItems) {
    console.log(item);
}


// * querySelector metode:

console.dir(document.querySelector('.list-item'));

console.log(document.querySelectorAll('.list-item'));

console.log(document.querySelector('.my-courses-list li'));

console.log(document.querySelector('.my-courses-list li:last-of-type'));



// ! DOM manipulacija

console.log(`Content of main title is ${mainTitle.textContent}`);

mainTitle.textContent = 'Our new Website!';

mainTitle.className = 'new-title our-title';

console.log(document.querySelector('.our-title'));

mainTitle.style.color = '#dd3300';

let correctAnswer = true;

if(correctAnswer) {
    mainTitle.style.backgroundColor = 'lightgreen';
} else {
    mainTitle.style.backgroundColor = 'coral';
}


// ! Kako pregledati property-e i metode elementa:

// 1. nacin
console.dir(mainTitle);

// 2. nacin
// * MDN docs --> ukucate npr MDN Input --> DOM Interface --> pretrazite property-e i metode.



const allMyItems = document.getElementsByTagName('li');

console.dir(allMyItems);

const allListItems = document.querySelectorAll('li');

console.dir(allListItems);

allListItems[1].style.color = 'blue';

allListItems.forEach(item => {
    item.style.borderBottom = '2px solid black';
    item.style.color = 'orange';
});



// TODO 19. cas DOMACI:

/**
 * 1. Kreirati <ol> u HTML-u (u novom fajlu 19cas.html) sa nekom TODO listom i novi JS fajl (19cas-homework.js) u koji cete dodati sav JS kod.
 *    Primer TODO liste:
 *  
 *      1. Go to the Market
 *      2. Do the Homework
 *      3. Clean the house
 *      4. Go to the Gym
 * 
 * 2. Dobaviti sve TODO item-e iz liste.
 * 
 * 3. Kreirati jedan <button> u HTML-u, tekst <button> elementa postaviti nad 'Complete All'. Takodje, kreirati jedan <h1> element sa tekstom npr:
 *     'Things to do on date: + nalepiti danasnji datum (izvuci iz clase Date).' Na primer: Things to do on date: dan.mesec.godina (npr 01.03.2022.)
 * 
 * 4. Kada se 'Complete All' dugme klikne treba da postavlja zelenu boju teksta nad svakim TODO zadatkom 
 *    i preskraba ih striketrough linijom.
 * 
 * 5. Takodje, na klik dugmeta i naslov <h1> promeniti u 'Completed things' i ofarbati u zeljenu boju.
 * 
 * 6. Napraviti <input> polje u koje se unese pozicija (ne indeks) <li>-a koji zelite da preskrabate i ofarbate crvenom bojom.
 * 
 * 7. Testirati tako sto pored <input> polja napravite novi <button> ciji ce tekst biti 'Complete' i koji ce na klik da formatira u crvenu boju
 *    tekst i striketrough liniju samo za item cija je pozicija uneta u <input> polje. Ako je input prazan a dugme kliknuto obavestiti korisnika
 *    da prvo mora uneti nesto u input polje.
 * 
 * 8. Napraviti novu <ul> sa random elementima koje zelite (npr brojevi 1,2,3,4,5,6,7,8,9,10). 
 * 
 * 9. Napraviti novi <button> koji kada se klikne na svaki sekund preskraba jedan <item> iz <ul>, ofarba ga narandzastom bojom i bolduje. 
 * 
 * 10. Kada odradi sta treba sa poslednjim <li> obavestiti korisnika da je dosao do kraja liste i prekinuti izvrsavanje 
 *     funkcije (hint: istraziti clearInterval() funkciju).
 * 
*/




// ! 20. cas (09.02.2022.)

console.log('------------- 20. cas (09.02.2022.) -------------');


// ! Prolazenje kroz DOM na GORE (ka precima):

// 1. parentNode --> selektuje parent NODE bez obzira na njegov tip
// 2. parentElement --> selektuje parent ELEMENT NODE (tj element)
// 3. closest() --> vraca bilo kog pretka koji zadovoljava odredjeni CSS selektor



// ! Prolazenje kroz DOM na DOLE (ka potomcima):

// 1. childNodes --> selektuje bilo koji child NODE (bez obzira na njegov tip)
// 2. children --> sve direktne potomke koji su ELEMENT NODE-ovi (elementi)
// 3. querySelector() --> vraca prvi node koji zadovoljava neki CSS selektor i nalazi se unutar elementa nad kojim pozivamo ovu metodu
// 4. firstChild --> vraca PRVI CHILD NODE (bilo kog tipa)
// 5. firstElementChild --> vraca PRVI CHILD ELEMENT NODE (tj element)
// 6. lastChild --> vraca POSLEDNJI CHILD NODE (bilo kog tipa)
// 7. lastElementChild --> vraca POSLEDNJI ELEMENT CHILD NODE (tj element)


// ! Pronalazenje elemenata na istom nivou (tzv. SIBLINGA)

// 1. previousSibling --> vraca node pre odredjenog elementa
// 2. previousElementSibling --> vraca element node (tj element) pre odredjenog elementa

// 3. nextSibling --> vraca node nakon odredjenog elementa
// 4. nextElementSibling --> vraca element node nakon odredjenog elementa



// ! PROLAZENJE KROZ DOM NA DOLE:

const courses = document.querySelector('.js-my-courses-list');

console.log(courses.children);

console.log(courses.children[1]);

console.log(courses.childNodes);

console.log(courses.firstElementChild);

console.log(courses.firstChild);

console.log(courses.lastElementChild);



// ! PROLAZENJE KROZ DOM NA GORE:

const myListItem = document.querySelector('.list-item');

console.log(myListItem.parentElement);

console.log(myListItem.parentNode);


// razlika bi bila npr:

console.log(document.documentElement.parentElement); // null

console.log(document.documentElement.parentNode); // document


console.log(myListItem.closest('div'));

console.log(myListItem.closest('.js-list-wrapper'));



// ! PROLAZENJE KROZ SIBLING-e:

console.log(myListItem.previousElementSibling);

console.log(myListItem.nextElementSibling);





// ! STILIZACIJA ELEMENATA KROZ JS

myListItem.style.color = 'red'; // ! OVAKAV NACIN JE LOS, JER KORISTI INLINE STYLE-ove.


// ! TOGGLE klasa --> dinamicko menjanje, uklanjanje, dodavanje klasa nad elementima u JS-u

const toggleClassesDiv = document.querySelector('.toggle-classes-wrapper');

// console.log(toggleClassesDiv);

if(toggleClassesDiv) {
    for(let element of toggleClassesDiv.children) {
        element.classList.add('my-paragraph-inactive');
        element.classList.remove('my-paragraph');
    }
}


// na primer:

let userAnswer = true;

if(userAnswer) {
    toggleClassesDiv.classList.add('visible');
} else {
    toggleClassesDiv.classList.add('not-visible');
}


// TODO za domaci:

// 1. dodati show button koji prikazuje <div> i hide button koji ga sakriva





// ! KREIRANJE NOVIH ELEMENATA KROZ JS

// 1. innerHTML --> property koji omogucava da zamenita ceo element nekim novim HTML elementom:

// toggleClassesDiv.innerHTML = 'SOme changes with innerHTML';


// 2. createElement() metoda --> metoda za kreiranje element node-a

const heading3 = document.createElement('h3');

heading3.textContent = 'Novi h3 element';

toggleClassesDiv.appendChild(heading3);

const par = document.createElement('p');

par.textContent = 'New test paragraph';

toggleClassesDiv.prepend(par);

const parNew = document.createElement('p');

parNew.textContent = 'Again some test';

toggleClassesDiv.lastElementChild.before(parNew);

const spanEl = document.createElement('span');

spanEl.textContent = 'Some testing span!';

toggleClassesDiv.firstElementChild.after(spanEl);

toggleClassesDiv.firstElementChild.replaceWith(heading3);





// ! UKLANJANJE ELEMENATA IZ DOM-a UZ JS

// 1. nacin --> uz remove()

// toggleClassesDiv.remove();



// 2. nacin

// toggleClassesDiv.parentElement.removeChild(toggleClassesDiv);




// TODO 20. cas DOMACI

/**
 * 0. Zadatak od gore sa dva button-a.
 * 1. Kreirati NIZ osnovnih boja (crvena, zuta, plava) kao niz stringova.
 * 2. U naslovu prompt prozora postaviti pitanje korisniku da unese JEDNU osnovnu boju.
 * 3. Proveriti da li je ono sto je korisnik uneo tacan ili netacan odgovor.
 * 4. Ako je odgovor tacan, korisniku prikazati notifikacioni prozor da je odgovor tacan i prikazati mu osvojenu sumu od 4 cifre (nasumican broj).
 * 5. U suprotnom, ako je korisnik odgovorio netacno, prikazati mu prozor da je odgovor netacan.
 * 6. Notifikacione prozore stilizovati putem primene CSS klasa!
 * 7. Obratiti paznju da radi sve kako treba i kad korisnik unese i velika i mala slova.
*/

// 0. 

const btnHide = document.querySelector('.btn-hide');
const btnShow = document.querySelector('.btn-show');

let isHidden = false;

btnHide.addEventListener('click', () => {
    if(!isHidden) {
        isHidden = true;
        toggleClassesDiv.classList.add('not-visible');
        toggleClassesDiv.classList.remove('visible');
    }
});

btnShow.addEventListener('click', () => {
    if(isHidden) {
        isHidden = false;
        toggleClassesDiv.classList.add('visible');
        toggleClassesDiv.classList.remove('not-visible');
    }
});