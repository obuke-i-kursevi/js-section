// TODO 20. cas DOMACI

/**
 * 1. Kreirati NIZ osnovnih boja (crvena, zuta, plava) kao niz stringova.
 * 2. U naslovu prompt prozora postaviti pitanje korisniku da unese JEDNU osnovnu boju.
 * 3. Proveriti da li je ono sto je korisnik uneo tacan ili netacan odgovor.
 * 4. Ako je odgovor tacan, korisniku prikazati notifikacioni prozor da je odgovor tacan i prikazati mu osvojenu sumu od 4 cifre (nasumican broj).
 * 5. U suprotnom, ako je korisnik odgovorio netacno, prikazati mu prozor da je odgovor netacan.
 * 6. Notifikacione prozore stilizovati putem primene CSS klasa!
 * 7. Obratiti paznju da radi sve kako treba i kad korisnik unese i velika i mala slova.
 * 8. TODO zadatak za show/hide button-e od ranije
*/

// 1.,2.,3.,4.,5.,6.

const basicColors = ['red', 'blue', 'yellow'];

let answer = prompt('Type your answer:').toLowerCase();

const windowMessage = document.createElement('div');
document.body.appendChild(windowMessage);
windowMessage.classList.add('answer');
const message = document.createElement('p');
windowMessage.appendChild(message);

if(!basicColors.includes(answer)) {
    message.textContent = `Sorry, wrong answer ❌.`;
    windowMessage.classList.add('wrong-answer');
} else {
    message.textContent = `Correct Answer! ✅ You have just won: ${Math.floor(Math.random() * 10000) } $` ;
    windowMessage.classList.add('correct-answer');
}