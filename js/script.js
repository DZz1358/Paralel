$(document).ready(function() {
    const activateTab = (tabName) => {
        const elem = $(`#${tabName}-tab-content`);
        switch (tabName) {
            case "web-design":
                elem.css("display","grid");
                break;
            case "ui-design":
                elem.css("display","flex");
                break;
            case "prototype":
                elem.css("display","block");
                break;
            case "photography":
                elem.css("display","block");
                break;
    
        }
        elem.siblings().css("display","none");
    }
    $('.slider').slick({
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.header__burger').click(function() {
        $('.header__burger,.navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.tabs-list').first().addClass('active');
    activateTab("web-design");

    $('.tabs-list').click(function(item) {
        $(this).siblings().removeClass('active');
        $(this).addClass( 'active' );
        activateTab($(this).attr('id'));
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}); 