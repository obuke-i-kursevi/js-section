$(document).ready(function() {

    $('.js-btn-switch').click(() => {
        $('.js-cv-about-me').toggle();
    });

    $('.js-btn-highlight').click(() => {
        $('h1').addClass('highlighted');
    });

    $('.js-btn-change-listtype').click(() => {
        $('.js-skills-list').replaceWith(
            $('<ol>'+$('.js-skills-list').html()+'</ol>')
        );
        $('ol li:first').addClass('highlighted');
        $('ol li:last').addClass('highlighted');
    });


    const nameField = $('input[name="name"]');
    const message = $('textarea[name="message"]');

    nameField.focus(function() {
        nameField.addClass('coral-background');
    });

    nameField.blur(function() {
        nameField.removeClass('coral-background');
    });

    message.focus(function() {
        message.addClass('coral-background');
    });

    message.blur(function() {
        message.removeClass('coral-background');
    });

    $('.js-cv-form').submit((e) => {
        e.preventDefault();
        console.log(`Dear ${nameField.val()}, thank you for your message: ${message.val().trim()}`);
    });

});