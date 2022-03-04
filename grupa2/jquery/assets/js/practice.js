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


        // ! 25. cas (02.03.2022.)

        // console.log(e.currentTarget.innerHTML);
        // console.log(e.currentTarget.outerHTML);

        const {clientX, clientY} = e;

        console.log(`Coordinates of click are X: ${clientX} Y: ${clientY}`);

        // console.log(e.currentTarget.classList);
        e.currentTarget.classList.add('no-display');

    });



    // ! FORME

    // * FOCUS listener za neko input polje

    const usernameField = $('input[name="username"]');
    const passwordField = $('input[name="password"]');

    usernameField.focus(function() {
        $(this).addClass('blue-text');
    });

    passwordField.focus(function() {
        $(this).get(0).type = 'text';
    });


    // * BLUR listener za neko input je kontra od FOCUS listenera

    usernameField.blur(function() {
        $(this).removeClass('blue-text');
    });

    passwordField.blur(function() {
        $(this).get(0).type = 'password';
    });


    // * mozete dodati listener i za svaki keystroke za npr input polje:

    usernameField.keyup((e) => {
        console.log(e.target.value);
    });



    // * val() metoda vraca vrednost input polja

    $('.js-my-form').submit((e) => {
        e.preventDefault();
        // console.log('Dobar dan');

        const uName = usernameField.val();
        const password = passwordField.val();

        alert(`User logged in with\nusername: ${uName}\npassword: ${password}`);
    });




    // ! DOM Manipulation with JQuery

    $('.js-btn-press').click(() => {
        $('.js-test-p').css({
            background: 'lightblue',
            fontWeight: 'bold',
            color: '#dd3300'
        });
    });


    $('.js-test-p-2').click(function() {
        $(this).toggleClass('blue-text');
    });


    // * Kreiranje elemenata u DOM-u kroz JQuery

    let myDiv = $(document.createElement('div'));

    // * metoda text() postavlja tekst nekog elementa

    // myDiv.text('DIV element created by JQuery');

    // * metoda html() kreira podelement

    myDiv.html('<p>Test paragraph by html method!</p>');

    $('.js-content-wrapper').append(myDiv);

    console.log(myDiv.text());


    // * Suprotno od APPEND -> PREPEND

    const contentList = $('.js-content-list');

    contentList.prepend('<li>Item 0</li>');

    contentList.append('<li>Item 4</li>');


    // BEFORE i AFTER metode -> dodaju nove elemente PRE/POSLE specificiranog elementa

    contentList.before('<h3>Beginning of the list</h3>');

    contentList.after('<h3>End of the list</h3>');



    // * BRISANJE elemenata iz DOM-a:

    // 1. Brisanje sadrzaja nekog elementa uz EMPTY metodu:

    // contentList.empty();

    // 2. Brisanje celog elementa uz DETACH metodu:

    // contentList.detach();



    const githubLink = $('.js-visit-github-link');

    // * Dodela i vracanje novog atributa elementu uz attr() metodu:


    githubLink.attr('target', '_blank');

    const link = githubLink.attr('href');

    console.log(`Link to github: ${link}`);


    // * Brisanje atributa nekog DOM elementa:

    githubLink.removeAttr('target');





    // * WRAP metoda -> obavija (wrapp-uje) postojeci element nekim drugim elementom

    githubLink.wrap('<div class="my-div">');

    

    $('.js-content-list-input').keyup(function(e) {
        const keyCode = e.which;
        if(keyCode === 13) {
            e.preventDefault();
            const inputValue = '<li>' + e.target.value + '</li>';
            contentList.append(inputValue);
        }
    });


    // * Rad sa nizovima

    const items = ['Bread', 'Lemon', 'Apples'];

    $.each(items, function(idx, item) {
        const itemToAdd = '<li>' + item + '</li>';
        $('.js-items-list').append(itemToAdd);
    });

    // * Konvertovanje postojece liste (ul, ol) u neki niz

    const contentArr = $('.js-content-list li').toArray();

    console.log(contentArr);

    // contentArr.forEach(value => console.log(value.textContent)); // * moze ovako

    $.each(contentArr, function(i, item) {
        console.log(item.textContent);
    });

});

