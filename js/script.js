$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
});

$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); 