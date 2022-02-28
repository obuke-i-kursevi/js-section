// ! 24. cas (28.02.2022.)

console.log('------ 24. cas (28.02.2022.) --------');

// ! JQuery selektori:

$(document).ready(function() {

// * sakrivanje elemenata putem ELEMENT selektora:

    // $('h2').hide();

// * sakrivanje elemenata putem ID selektora:

    $('#subtitle-2').hide();

// * bojenje paragrafa plavom bojom putem CLASS selektora:

    // * 1. nacin:
    // $('.js-main-wrapper__text').css('color', 'blue'); // ! losa praksa jer direktno injektuje INLINE STYLE atribut nad elementom

    // * 2. nacin:
    $('.js-main-wrapper__text').addClass('blue-text'); // * bolja praksa jer se klasa sa plavom bojom fonta dinamicki append-uje na el.

    
// * moguce je koristiti i kombinatore (mozemo pristupiti prvo <p> elementu, pa onda <span> elementu):

    $('p span').css('font-weight', 'bolder');

    $('p span').addClass('no-display');


// * pristupanje elementima liste

    $('#my-list li:last').addClass('blue-text');

    $('#my-list li:nth-child(3)').addClass('orange-background');


// * selektovanje elemenata tipa input uz TIP elementa:

    $(':button').addClass('blue-text');

    // $(':submit').hide();

    $(':text').addClass('orange-background');



// * selektovanje elemenata uz ATTRIBUTE selektor:

    $('[href]').addClass('regular-font');


// * selektovanje elemenata kroz UNIVERZALNI selektor

    // $('*').hide();



    // ! JQuery EVENTOVI

    $('.js-btn-1').click(() => {
        console.log(this); // document
    });

    // $('.js-btn-1').click(function() {
    //     console.log(this); // button koji poziva funkciju
    // });


    $('.js-btn-hide').click(() => {
        $('.js-lorem-paragraph').addClass('no-display');
    });

    $('.js-btn-show').click(() => {
        $('.js-lorem-paragraph').removeClass('no-display');
    });

    // toggle metoda:

    $('.js-btn-switch').click(() => {
        $('.js-lorem-paragraph').toggle();
    });

    // doubleClick metoda:

    $('.js-btn-dbl').dblclick(() => {
        $('.js-main-wrapper__title').toggleClass('blue-text');
    });

    // hover metoda:

    $('.js-btn-hover').hover(() => {
        $('.js-main-wrapper__title').toggle();
    })

    // mouseup i mousedown metode:

    $('.js-btn-updown').on('mouseup', () => {
        $('.js-lorem-paragraph').toggle();
    });

    $('.js-btn-updown').on('mousedown', () => {
        $('.js-lorem-paragraph').toggle();
    });

    // event objekat kao deo callback funkcije

    $('.js-btn-event').click((e) => {
        console.log(e.currentTarget.textContent);
    });

});