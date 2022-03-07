// ! 26. cas (07.03.2022.)

$(document).ready(function() {

    const mainWrapper = $('.main-wrapper');

    // * 1. nacin
    // mainWrapper.load('24cas-homework.html');

    // * 2. nacin
    // $.get('24cas-homework.html', function(response) {
    //     mainWrapper.html(response);
    // });


    // $.getJSON('./assets/products.json', function(response) {
    //     // console.log(response);
    //     let productsList = $(document.createElement('ol'));
    //     mainWrapper.append(productsList);
    //     response.forEach((product) => {
    //         // console.log(product);
    //         const li = '<li>' + product.name + ' (' + product.color + ' - ' + product.storage + 'gb)' + '</li>'; // Huawei P20 (gray - 64gb)
    //         productsList.append(li);
    //     });
    // });

    // * https://jsonplaceholder.typicode.com/

    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            // name, email, phone, city, catchPhrase
            const firstUser = data[0];
            const {name,email,phone} = firstUser;
            const {city} = firstUser.address;
            const {catchPhrase} = firstUser.company;
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

    // * ILI NA PRIMER (vratiti sve post-ove koji pripadaju korisniku sa ID-em 1)

    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts?userId=1',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            let h1 = $(document.createElement('h1'));
            h1.text(`Postovi za korisnika: ${data[0].userId}`);
            mainWrapper.append(h1);
            data.map((post) => {
                const h3 = $(document.createElement('h3'));
                const p = $(document.createElement('p'));
                h3.text(post.title); // post title
                p.text(post.body);
                mainWrapper.append(h3);
                mainWrapper.append(p);
            });
        },
        error: function(error) {
            console.log(error);
        }
    });


    // * ILI NA PRIMER POST() ZAHTEV 

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
                title,
                body: text,
                userId
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