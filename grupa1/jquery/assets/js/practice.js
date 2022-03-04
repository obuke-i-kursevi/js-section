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


        // ! 25. cas (02.03.2022.)

        // console.log(e.currentTarget.innerHTML);
        // console.log(e.currentTarget.outerHTML);


        const {clientX, clientY} = e;

        console.log(`Coordinates are X: ${clientX} and Y: ${clientY}`);

        // console.log(e.currentTarget.classList);

        e.currentTarget.classList.add('no-display');

    });



    // ! FORME

    // * U JQuery mozemo hendlovati forme:

    const usernameField = $('input[name="username"]');
    const passwordField = $('input[name="password"]');

    // FOCUS metoda:

    usernameField.focus(function() {
        $(this).addClass('blue-text');
    });

    passwordField.focus(function() {
        // console.log(this);
        $(this).get(0).type = 'text'; // mozemo promeniti TIP input polja kroz JS
    });


    // BLUR metoda (suprotno od FOCUS metode):

    usernameField.blur(function() {
        $(this).removeClass('blue-text');
    });

    passwordField.blur(function() {
        $(this).get(0).type = 'password';
    });


    // Event koji osluskuje keystroke u input polju

    usernameField.keyup((e) => {
        // console.log(e);
        console.log(e.target.value);
    });


    $('.js-my-form').submit((e) => {
        e.preventDefault();
        // console.log('Dobar dan');

        const uName = usernameField.val();
        const password = passwordField.val();

        alert(`User logged in with \nusername: ${uName}\npassword: ${password}`);

    });




    // ! DOM Manipulatio with JQuery

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



    // Kreiranje novih DOM elemenata:

    let myDiv = $(document.createElement('div'));

    // myDiv.text('DIV element created on page load'); // * kreiranje teksta nekog elementa

    myDiv.html('<p>Paragraph added by JQuery!</p>');

    // APPEND -> dodaje element na kraj (slicno kao PUSH kod nizova)

    $('.js-content-wrapper').append(myDiv);


    console.log(`Text of myDiv: ${myDiv.text()}`);


    // PREPEND -> dodaje element na pocetak (slicno kao UNSHIFT kod nizova)

    const contentList = $('.js-content-list');

    contentList.prepend('<li>Item 0</li>');

    contentList.append('<li>Item 4</li>');


    // BEFORE -> metoda koja dodaje (lepi) element PRE specificarnog elementa

    contentList.before('<h2 class="my-class-h2">Beginning of the list</h2>');

    // AFTER -> metoda koja dodaje element NAKON specificarnog elementa

    contentList.after('<h3 id="my-h2">End of the list</h3>');
    



    // ! BRISANJE elemenata:

    // 1. Brisanje sadrzaja nekog elementa uz EMPTY metodu:

    // contentList.empty();


    // 2. Brisanje elementa uz DETACH metodu:

    // contentList.detach();



    // ! ATTR metoda -> Mozete dinamicki kreirati i nove atribute sa nekim vrednostima za neke DOM elemente 

    const githubLink = $('.js-github-link');

    const actualLink = githubLink.attr('href');

    console.log(`Link to github: ${actualLink}`);

    githubLink.attr('target', '_blank');

    // ! RemoveAttr metoda -> uklanja neki atribut sa nekog DOM elementa

    githubLink.removeAttr('target');



    // ! WRAP metoda -> odredjeni element nad kojim se i poziva OBAVIJA (WRAPP-uje) nekim drugim DOM elementom:
    // ! U slucaju da hocete vise elemenata da obavijete nekim drugim elementom WRAP ALL

    githubLink.wrap('<div>');


    
    $('.js-content-list-input').keyup(function(e) {
        const keyCode = e.which;
        if (keyCode === 13) {
            e.preventDefault();
            contentList.append(
                '<li>' + e.target.value + '</li>'
            )
        }
    });



    const items = ['Lemon', 'Apples', 'Bannanas'];

    // EACH metoda loop-uje kroz neki niz iz JQuery-a (slicno forEach metodi)

    $.each(items, function(idx, item) {
        const itemToAdd = '<li>' + item + '</li>';
        $('.js-items-list').append(itemToAdd);
    });


    const contentArr = $('.js-content-list li').toArray();

    console.log(contentArr);

    $.each(contentArr, function(i, item) {
        console.log(item.textContent);
    });

});