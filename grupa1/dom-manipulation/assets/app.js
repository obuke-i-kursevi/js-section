// ! 19. cas (07.02.2022.)

console.log('--------------- 19. cas (07.02.2022.) ----------------');

console.dir(window);
console.dir(document);


// ! Metode koje dobavljaju tacno jedan element iz DOM-a (odnosno referencu na njega):

// * 1. getElementById('id-elementa')
// * 2. querySelector()


// ! Metode koje dobavljaju vise od jednog elementa:

// * 1. querySelectorAll()
// * 2. getElementsByTagName()
// * 3. getElementsByClassName()
// * ...



// console.dir(document.getElementById('main-title'));

const mainTitle = document.getElementById('main-title');

const listItems = document.getElementsByClassName('list-item');

console.dir(listItems);

for(let item of listItems) {
    console.log(item);
}


// * mozemo i kroz querySelector metode dobavljati elemente

console.log(`Testing querySelector methods`);

console.log(document.querySelector('.list-item'));

console.log(document.querySelectorAll('.list-item'));


// * mozete kombinovati selektore

console.log(document.querySelector('.my-courses-list li'));

console.log(document.querySelector('.my-courses-list li:last-of-type'));


console.log(`Content of main title: ${mainTitle.textContent}`);

mainTitle.textContent = 'Our new Website!';

mainTitle.className = 'my-main-title new-title';

mainTitle.style.color = '#dd3300';


let correctAnswer = true;

if(correctAnswer) {
    mainTitle.style.backgroundColor = 'lightgreen';
} else {
    mainTitle.style.backgroundColor = 'coral';
}

// ! NAPOMENA: Svi CSS property-iji koji sadrze 2 reci (ili vise), kao npr: background-color se u JS-u formatiraju u camelCase format 
// ! (npr backgroundColor)!

// ! Provera sta sve sadrzi neki element moze uz:

// 1.
console.dir(mainTitle);

// 2.
// * Proveriti za pojedinacan element MDN dokumentaciju: npr MDN Input --> DOM Interface --> potom vidite spisak metoda i property-a.



// ! Dobavljanje vise elemenata, kojima kasnije mozemo da manipulisemo kroz JS:

// 1.

const allListItems = document.getElementsByTagName('li');

console.log(allListItems);



// 2.

const allListItemsQ = document.querySelectorAll('li');

console.log(allListItemsQ);

allListItemsQ[1].style.color = 'blue';

for(let course of allListItemsQ) {
    course.style.borderBottom = '2px solid black';
    course.style.color = 'orange';
}

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

// allListItemsQ[1].className = 'neka-klasa js-neka-klasa';


// ! 1. Prolazenje kroz DOM na DOLE u odnosu na neki element:

// 1. childNodes --> vraca SVE child node-ove (cvorove) bez obzira na njihov tip
// 2. children --> vraca child element node-ove (cvorove), odnosno SAMO elemente
// 3. querySelector()
// 4. firstChild --> selektuje PRVI CHILD node, bez obzira na njegov tip
// 5. firstElementChild --> selektuje PRVI CHILD node koji je ELEMENT node (odnosno element)
// 6. lastChild --> selektuje POSLEDNJI CHILD node, bez obzira na njegov tip
// 7. lastElementChild --> selektuje POSLEDNJI CHILD node koji je ELEMENT node (odnosno element)


// ! 2. Prolazenje kroz DOM na GORE u odnosu na neki element:

// 1. parentNode --> selektuje parent node bez obzira na njegov tip
// 2. parentElement --> selektuje parent ELEMENT node, tj element.
// 3. closest() --> vraca bilo koji parent koji zadovoljava odredjeni selektor



// ! 3. Proveravanje elemenata na istom nivou u odnosu na neki element (tzv. Siblinge):

// 1. previousElementSibling --> dobavlja element node (element) pre tog elementa
// 2. previousSibling --> dobavlja prvi node (bilo kog tipa) pre tog elementa

// 1. nextElementSibling --> dobavlja element node (element) nakon tog elementa
// 2. nextSibling --> dobavlja prvi node (bilo kog tipa) nakon tog elementa



// ! PROLAZENJE KA DOLE:

const courses = document.querySelector('.js-my-courses-list');

console.dir(courses.children);

console.log(courses.childNodes);

console.log(courses.firstChild);

console.log(courses.firstElementChild);

console.log(courses.lastChild);

console.log(courses.lastElementChild);




// ! PROLAZENJE KA GORE:

const myListItem = document.querySelector('.js-list-item');

console.log(myListItem);

console.log(myListItem.parentElement);

console.log(myListItem.parentNode);


// razlika bi bila u sledecem:

console.log(document.documentElement.parentElement);

console.log(document.documentElement.parentNode); // document objekat


console.log(myListItem.closest('div'));

console.log(myListItem.closest('.js-list-wrapper'));



// ! SIBLING ELEMENTI (rodjaci na istom nivou):

console.log(myListItem.previousElementSibling);

console.log(myListItem.nextElementSibling);




// ! BOLJI NACINI STILIZACIJE ELEMENATA KROZ JS:

// Toggle klasa --> dinamicko odredjivanje i uklanjanje klasa nad nekim elementima

const toggleClassesDiv = document.querySelector('.js-toggle-classes-wrapper');

if(!toggleClassesDiv) {
    for(let element of toggleClassesDiv.children) {
        element.classList.add('my-paragraph-inactive');
        element.classList.remove('my-paragraph');
    }
}


// ili na primer:

let userAnswer = true;

if(userAnswer) {
    toggleClassesDiv.classList.add('visible');
} else {
    toggleClassesDiv.classList.add('not-visible');
}



// TODO za domaci:

// Na klik dugmeta hide sakriti <div> , a na klik dugmeta show prikazati <div>





// ! KREIRANJE ELEMENATA KROZ JS

// * 1. InnerHTML

// toggleClassesDiv.innerHTML = 'Changing content with innerHTML property';


// * 2. createElement() --> metoda za kreiranje novog element node-a (elementa)

const heading3 = document.createElement('h3');

heading3.textContent = 'Hello World!';

// toggleClassesDiv.appendChild(heading3); // dodaje element na KRAJ 

toggleClassesDiv.prepend(heading3);


const par = document.createElement('p');

par.textContent = 'Testing paragraf.';

toggleClassesDiv.lastElementChild.before(par);


const spanEl = document.createElement('span');

spanEl.textContent = ' (just a test span) ';

toggleClassesDiv.firstElementChild.after(spanEl);



// ! zamena za postojeci element

const newPar = document.createElement('p');

newPar.textContent = 'New test paragraf.';

toggleClassesDiv.lastElementChild.replaceWith(newPar);





// ! UKLANJANJE ELEMENATA

// * 1. nacin --> REMOVE()

// toggleClassesDiv.remove();


// * 2. nacin

// toggleClassesDiv.parentElement.removeChild(toggleClassesDiv);


// TODO 20. cas DOMACI

/** 
 * 0. Zadatak od gore u TODO komentaru (za 2 button-a).
 * 1. Kreirati NIZ osnovnih boja (crvena, zuta, plava) kao niz stringova.
 * 2. U naslovu prompt prozora postaviti pitanje korisniku da unese JEDNU osnovnu boju.
 * 3. Proveriti da li je ono sto je korisnik uneo tacan ili netacan odgovor (tj da li boja koju je uneo postoji u osnovnim bojama ili ne).
 * 4. Ako je odgovor tacan, korisniku prikazati notifikacioni prozor da je odgovor tacan i prikazati mu osvojenu sumu od 4 cifre 
 *    (nasumican broj, npr 4125 $).
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