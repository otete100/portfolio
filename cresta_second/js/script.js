
$(function() {
    $('#slider').vegas({
        slides: [
            { src: 'img/fv-bgi_01.jpg' },
            { src: 'img/fv-bgi_02.jpg' },
            { src: 'img/fv-bgi_03.jpg' }
        ],
    });
    $('.nav_toggle, .nav_humberger').on('click', function () {
        $('.nav_toggle, .nav_humberger, .nav_cover, body').toggleClass('show');
    });
});