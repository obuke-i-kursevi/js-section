// ! 24. cas (12.04.2022.)

$(document).ready(function() {

// * sakrivanje elemenata putem ELEMENT selektora:

    // $('h2').hide();

// * sakrivanje elemenata putem ID selektora:

    // $('#subtitle-2').hide();

// * sakrivanje elemenata putem CLASS selektora:

    // $('.main-wrapper__subtitle').hide();

    // * 1. nacin primene PLAVE boje nad tekstom:

    // $('.main-wrapper__text').css('color', 'blue');

    // * 2. BOLJI nacin primene PLAVe boje nad tekstom:

    $('.main-wrapper__text').addClass('blue-text');

    // $('p span').hide();

    $('p span').addClass('display-none');

// * primena plave boje teksta nad poslednji <li> u listi:

    $('#my-list li:last').addClass('blue-text');

    $('#my-list li:nth-child(3)').addClass('blue-text');


// * mozemo dobaviti elemente iz DOM-a na osnovu tipa inputa koji smo mu postavili:

    $(':button').addClass('blue-text');

    $(':text').addClass('bolded-text');

    $(':text').addClass('coral-background');

// * menjanje stilova nad elementima putem njihovog ATTRIBUTE selektora:

    $('[href]').addClass('regular-font');


// * Univerzalni selektor u JQUery-u:

    // $('*').hide();


// * Cuvanje referenci ka elementima u varijabli:

let mainTitle = $('.main-wrapper__title');


// ! EVENTOVI U JQUERY-u:

    $('.js-btn-1').click(() => {
        alert('Button 1 is clicked!');
    });

    $('.js-btn-3').click(() => {
        $('.js-lorem-para').addClass('display-none');
    });

    $('.js-btn-2').click(() => {
        $('.js-lorem-para').removeClass('display-none');
    });

    // Npr TOGGLE

    $('.js-btn-toggle').click(() => {
        mainTitle.toggle();
    });

    // Npr DOUBLE-CLICK

    $('.js-btn-double').dblclick(() => {
        $('.main-wrapper__title').toggle();
    })

    // Npr HOVER

    $('.js-btn-hover').hover(() => {
        $('.main-wrapper__title').toggle();
    });

    // Npr mouseUp i mouseDown

    $('.js-btn-updown').on('mouseup', () => {
        $('.main-wrapper__title').toggle();
    });

    $('.js-btn-updown').on('mousedown', () => {
        $('.main-wrapper__title').toggle();
    });

    // Event objekat kao parametar callback funkcije

    $('.js-btn-event').click((e) => {
        // console.log(e);
        console.log(e.currentTarget.textContent);
    });

});
