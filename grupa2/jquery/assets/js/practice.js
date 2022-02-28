// ! 24. cas (28.02.2022.)

console.log('------------ 24. cas (28.02.2022.) --------------');

// ! JQuery Selektori

$(document).ready(function() {

// * pristupanje elementu h2 na osnovu ELEMENT selektora

    // $('h2').hide();

// * pristupanje elementu na osnovu ID selektora

    // $('#subtitle-2').hide();

// * pristupanje elementu (elementima) na osnovu CLASS selektora

    // * npr, ofarbati boju fonta paragrafa u plavu:

    // * 1. nacin uz CSS metodu (NE najbolji nacin jer direktno utice na INLINE STYLE)
    // $('.js-main-wrapper__text').css('color', 'blue');

    // * 2. nacin uz addClass metodu
    $('.js-main-wrapper__text').addClass('blue-text');


// * mozemo koristiti i kombinatore 

    $('.js-main-wrapper__text span').css('font-weight', 'bolder');

    $('p span').hide();

    $('#my-list li:last').addClass('blue-text');

    $('#my-list li:nth-child(3)').addClass('coral-background');


// * pristup input-ima putem njihovog tipa:

    $(':button').addClass('blue-text');

    // $(':submit').addClass('no-display');

    $(':text').addClass('coral-background');


// * pristup elementima na osnovu ATTRIBUTE selektora:

    $('[href]').addClass('regular-font');


// * pristup putem UNIVERZALNOG selektora:

    // $('*').hide();




// ! JQuery EVENT-ovi:


    // $('.js-btn-1').on('click', function() {
    //     console.log(this);
    // });

    $('.js-btn-1').on('click', () => {
        console.log(this);
    });

    $('.js-btn-hide').click(() => {
        $('.js-lorem-par').addClass('no-display');
    });

    $('.js-btn-show').click(() => {
        $('.js-lorem-par').removeClass('no-display');
    });


    // * toggle metoda:

    $('.js-btn-switch').click(() => {
        $('.js-lorem-par').toggle();
    });

    
    // * double click metoda:

    $('.js-btn-double').dblclick(() => {
        $('.js-main-wrapper__title').toggle();
    })

    // * hover metoda:

    $('.js-btn-hover').hover(() => {
        $('.js-main-wrapper__title').toggleClass('blue-text');
    });

    // * mouseup i mousedown metode:

    $('.js-btn-updown').on('mouseup', () => {
        $('.js-main-wrapper__title').toggle();
    });

    $('.js-btn-updown').on('mousedown', () => {
        $('.js-main-wrapper__title').toggle();
    });

    // * Event objekat:

    $('.js-btn-event').click((e) => {
        // console.log(e);
        // console.log(e.currentTarget.textContent);
    });

});

