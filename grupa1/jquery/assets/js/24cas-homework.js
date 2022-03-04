// ! 24. i 25. cas DOMACI:

/**
 * 1. Kreirati poseban fajl sa nazivom 24cas-homework.html i linkovati postojeci styles.css u njega.
 * 2. Kreirati poseban fajl 24cas-homework.js i dodati ga u script tag kreiranog html fajla.
 * 3. Napraviti formu CV-a gde cete dodati:
 *      - vasu (ili bilo kakvu drugu) sliku
 *      - naslov h1 sa vasim imenom i prezimenom
 *      - stepen strucne spreme (akademsko zvanje)
 * 4. Kreirati dugme koje ce na klik prikazivati i sakrivati (dakle na isto dugme) podatke o vama (moze i lorem ipsum tekst)
 * 5. Kreirati dugme koje ce dodatno naznaciti vase ime i prezime (npr boldovati i ofarbati ga u plavu boju)
 * 6. Kreirati listu vestina, npr:
 *      - JavaScript
 *      - JQuery
 *      - HTML5
 *      - CSS3
 *      - SCSS
 * 7. Pre liste vestina dodati naslov 'My programming skills:' kroz JQuery.
 * 8. Pre liste dodati input polje, u koje se moze uneti jos neki skill i kao takav dodati u listu na enter dugme.
 * 9. Kreirati dugme (npr Transform List) koje ce na klik promeniti tip kreirane liste, te prvi i poslednji element boldovati.
 * 10. Kreirati dugme koje ce obrisati sve <li> iz liste.
 * 11. Kreirati formu (Contact Me) koja ce prihvatati ime i poruku korisnika.
 * 12. Za oba input-a promeniti na focus pozadinu input polja na 'coral', i otkloniti je unfocus-om.
 * 13. Potvrdom forme poruku logovati na konzoli.
 *   
*/

$(document).ready(function() {

    const skillsList = $('.js-skills-list');

    $('.js-btn-switch').click(() => {
        $('.js-cv-about-me').toggle();
    });

    $('.js-btn-highlight').click(() => {
        $('h1').addClass('highlighted');
    });

    $('.js-btn-change-listtype').click(() => {
        skillsList.replaceWith(
            $('<ol>'+skillsList.html()+'</ol>')
        );
        $('ol li:first').addClass('highlighted');
        $('ol li:last').addClass('highlighted');
    });


    const nameField = $('input[name="name"]');
    const message = $('textarea[name="message"]');

    nameField.focus(function() {
        nameField.addClass('orange-background');
    });

    nameField.blur(function() {
        nameField.removeClass('orange-background');
    });

    message.focus(function() {
        message.addClass('orange-background');
    });

    message.blur(function() {
        message.removeClass('orange-background');
    });

    $('.js-skills-input').on('keyup', function(e) {
        const keyCode = e.which;
        if (keyCode === 13) {
            e.preventDefault();
            skillsList.append(
                '<li>' + e.target.value + '</li>'
            )
        }
    });

    $('.js-btn-clear-list').click(() => {
        skillsList.empty();
        alert(`List has been cleared!`);
    })

    $('.js-cv-form').submit((e) => {
        e.preventDefault();
        console.log(`Dear ${nameField.val()}, thank you for your message: ${message.val().trim()}`);
    });

});