// ! 26. cas (07.03.2022.)
$(document).ready(function() {

    const mainWrapper = $('.main-wrapper');

    // * 1. nacin 
    // mainWrapper.load('24cas-homework.html');

    // * 2. nacin
    // $.get('24cas-homework.html', function(reponse) {
    //     mainWrapper.html(reponse);
    // });


    // * Iscitavanje lokalnog JSON fajla
    // $.getJSON('./assets/products.json', function(products) {
    //     let productsList = $(document.createElement('ol'));
    //     mainWrapper.append(productsList);
    //     products.forEach((product) => {
    //         const singleLi = '<li>' + product.name + ' (' + product.color + " - " + product.storage + 'gb)' + '</li>';
    //         productsList.append(singleLi);
    //     })
    // });


    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            const firstUser = data[0];
            const {name, email, phone} = firstUser;
            const {city} = firstUser.address;
            const {catchPhrase} = firstUser.company;
            // console.log(name, email, phone, city, catchPhrase);
            $('.js-username').text(name);
            $('.js-email').text(email);
            $('.js-phone').text(phone);
            $('.js-city').text(city);
            $('.js-catchphrase').text(catchPhrase);
        },
        error: function(error) {
            console.log(error);
        }
    });



    // * ILI NA PRIMER dobaviti sve post-ove koji pripadaju korisniku sa ID-em 1


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
                let h3 = $(document.createElement('h3')); // post Title
                let p = $(document.createElement('p'));   // post Body
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



    // POST zahtev:

    $('.js-add-post-form').submit(function(e) {
        e.preventDefault();
        const title = $('.js-title').val();
        const text = $('.js-text').val();
        const userId = 1;
        $.ajax({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json',
            data: {
                title: title, // duzi nacin definisanja property-a
                body: text,
                userId // kraci nacin definisanja property-a
            },
            success: function(response) {
                alert(`Succesfully added post ${response.title}`);
                console.log(response);
            },
            error(error) {
                console.log(error);
            }
        });
    });


});