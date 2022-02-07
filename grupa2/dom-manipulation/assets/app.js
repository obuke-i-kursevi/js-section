// ! 19.cas (07.02.2022.)

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
