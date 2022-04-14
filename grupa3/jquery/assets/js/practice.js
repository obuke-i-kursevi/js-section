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

        // ! 25. cas (14.04.2022.)

        console.log(e);

        const {clientX, clientY} = e;
        console.log(`Coordinates of X: ${clientX} and Y: ${clientY}`);

        e.currentTarget.classList.add('display-none');
    });

    const usernameField = $('input[name="username"]'); // ! ili ovako $usernameField
    const passwordField = $('input[type="password"]');

    // ! FOCUS listener (event)

    usernameField.focus(function() {
        $(this).addClass('blue-text');
    });

    passwordField.focus(function() {
        $(this).get(0).type = 'text'; 
    });

    // ! BLUR listener (event)

    usernameField.blur(function() {
        $(this).removeClass('blue-text');
    });

    passwordField.blur(function() {
        $(this).get(0).type = 'password';
    });

    // ! KEYUP listener (event)

    usernameField.keyup((e) => {
        console.log(e.target.value);
    });

    // ! SUBMIT Forme

    $('.js-my-form').submit((e) => {
        e.preventDefault();

        const uname = usernameField.val();
        const password = passwordField.val();

        alert(`User logged in with:\nUsername: ${uname}\nPassword: ${password}`);
    });


    // ! DOM MANIPULATION

    $('.js-btn-press').click(() => {
        $('.js-lorem-para').css({
            background: 'lightblue',
            fontWeight: 'bolder',
            fontSize: '40px'
        });
    });

    $('.js-lorem-para2').click(function() {
        $(this).toggleClass('blue-text');
    });

    
    // ! KREIRANJE NOVIH ELEMENATA U DOM-u

    let myDiv = $(document.createElement('div'));

    let p1 = $('.js-lorem-para');
    // myDiv.text('DIV created on page load!');

    myDiv.html(`<p> ${p1.text()} </p>`);

    // $('.js-main-wrapper2').append(myDiv); // dodaje content na kraj targetovanog elementa
    $('.js-main-wrapper2').prepend(myDiv); // dodaje content na pocetak targetovanog elementa

    const linksList = $('#my-list');

    linksList.before(`<h1> Beginning of list. </h1>`);

    linksList.after(`<h1> End of list. </h1>`);


    // ! BRISANJE ELEMENATA

    // * 1. nacin - EMPTY -> brise samo content elementa

    // linksList.empty();

    // * 2. nacin - DETACH -> brise CEO element iz DOM-a

    // linksList.detach();



    // ! KREIRANJE NOVIH ATRIBUTA NAD ELEMENTIMA

    // * attr -> metoda koja moze dodeliti atribut nekom elementu
    //        -> metoda koja moze da pristupi atributu nekog elementa:

    const googleLink = $('.js-google-link');

    googleLink.attr('target', '_blank');

    console.log(`Link for Google: ${googleLink.attr('href')}`);

    // * removeAttr -> metoda koja uklanja atribut sa nekog elementa

    googleLink.removeAttr('target');


    // ! WRAP elementa

    googleLink.wrap('<div class="link-div">');


    // ! EVENTovi sa tastature

    $('.js-content-list-input').keyup((e) => {
        const keyCode = e.which; // 13
        if (keyCode === 13) {
            e.preventDefault();
            $('.js-content-list').append(
                `<li>${e.target.value}</li>`
                // '<li>' + e.target.value + '</li>'
            );
        }
    });

    const x = 5;
    const y = 3;
    const res = x+y;
    const shopItems = ['Bread', 'Milk', 'Apples'];

    const $groceriesList = $(document.createElement('ul'));

    $groceriesList.addClass('js-groceries-list');

    $('.js-main-wrapper2').append($groceriesList);

    $.each(shopItems, function(i, grocery) {
        $groceriesList.append(
            `<li> ${grocery} </li>`
        );
    });


    const newArray = $('.js-groceries-list li').toArray();

    console.log(newArray);

});
