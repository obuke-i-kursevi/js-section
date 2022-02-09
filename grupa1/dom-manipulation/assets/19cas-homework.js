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


// 2.

const todos = document.querySelectorAll('ol li');

console.dir(todos);


// 3.
const completeAllBtn = document.getElementById('btn-complete-all');

const mainTitle = document.querySelector('.main-title');

let todaysDate = new Date();

mainTitle.textContent = `Things to do on date: ${todaysDate.getDate()}.${todaysDate.getMonth()+1}.${todaysDate.getFullYear()}.`;

completeAllBtn.textContent = 'Complete All';


// 4. i 5.

completeAllBtn.addEventListener('click', () => {
    for(let todo of todos) {
        todo.style.color = 'green';
        todo.innerHTML = `<del>${todo.textContent}</del>`;
    }
    mainTitle.style.color = 'green';
});


// 6. i 7.

const completeOneInput = document.getElementById('complete-one-input');

const completeOneBtn = document.getElementById('btn-complete-one');

completeOneBtn.textContent = 'Complete';

completeOneBtn.addEventListener('click', () => {
    if(completeOneInput.value) {
        const indexToComplete = completeOneInput.value-1; // ! posto je oduzimanje moze i bez ekplicitne konverzije u NUMBER
        const selectedTodo = todos[indexToComplete];
        selectedTodo.style.color = 'red';
        selectedTodo.innerHTML = `<del>${selectedTodo.textContent}</del>`;
    } else {
        alert('No element has been selected!');
        return;
    }
});



// 8., 9. i 10.

const btnStartCompl = document.getElementById('btn-start-completing');

btnStartCompl.textContent = 'Start Completing';

const numbers = document.querySelectorAll('#list-of-numbers li');

console.dir(numbers);

let currentVal = 0;

btnStartCompl.addEventListener('click', () => {
    const myInterval = setInterval(() => {
        if(!numbers[currentVal]) {
            alert('All tasks completed!');
            clearInterval(myInterval);
            return;
        }
        const number = numbers[currentVal];
        number.style.color = '#dd3300';
        number.style.fontWeight = 'bold';
        number.innerHTML = `<del>${number.textContent}</del>`;
        currentVal++;
    }, 1000);
});
