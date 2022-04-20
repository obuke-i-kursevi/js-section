$(document).ready(function() {

    const mainWrapper = $('.main-wrapper');

    // * 1. nacin
    // mainWrapper.load('24cas-homework.html');

    // * 2. nacin
    // $.get('24cas-homework.html', function(response) {
    //     mainWrapper.html(response);
    // });


    // ! Dobavljanje podataka od lokalnog .json fajla
    
    /*
    $.getJSON('./assets/example-data.json', function(res) {
        // console.log(res); // Array
        let phonesList = $(document.createElement('ol'));
        mainWrapper.append(phonesList);
        res.forEach((item) => {
            const li = `<li> ${item.name} (${item.color}) - ${item.storage} gb </li>`;
            phonesList.append(li);
        });
    });
    */

    mainWrapper.append($(document.createElement('hr')));


    // ! Dobavljanje podataka od eksternog (fake) API-a (https://jsonplaceholder.typicode.com/users)

    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function(data) {
            // console.log(data); // niz
            const firstUser = data[0];
            const {name, email, phone} = firstUser;
            const {city} = firstUser.address;
            const {catchPhrase} = firstUser.company;
            // console.log(name, email, phone, city, catchPhrase); // provere radi
            $('.js-user-name').text(name);
            $('.js-user-email').text(email);
            $('.js-phone-number').text(phone);
            $('.js-user-city').text(city);
            $('.js-company-desc').text(catchPhrase);
        },
        error: function(error) {
            console.log(error);
        }
    });


    // https://jsonplaceholder.typicode.com/posts?userId=1
    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts?userId=1',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            let h1 = $(document.createElement('h1'));
            h1.text(`Posts by User: ${data[0].userId}`);
            mainWrapper.append(h1);
            data.map((post) => {
                let h3 = $(document.createElement('h3'));
                let p = $(document.createElement('p'));
                h3.text(post.title);
                p.text(post.body);
                mainWrapper.append(h3);
                mainWrapper.append(p);
            });
        },
        error: function(error) {
            console.log(error);
        }
    });


    // ! POST zahtev

    $('.js-add-post-form').submit(function(e) {
        e.preventDefault();
        const title = $('.js-title-input').val();
        const body = $('.js-body-input').val();
        const userId = 1;
        $.ajax({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json',
            data: {
                title: title,
                body,
                userId
            },
            success(response) {
                alert(`Succesfully added post ${response.title}`);
                console.log(response);
            },
            error(error) {
                console.log(error);
            }
        });
    });

    // TODO 26. cas DOMACI

    /**
     * 1. Refaktorisati WeatherForecast aplikaciju, tako da umesto VanillaJS-a koristi JQuery
     */

});