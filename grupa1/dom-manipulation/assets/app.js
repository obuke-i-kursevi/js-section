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



