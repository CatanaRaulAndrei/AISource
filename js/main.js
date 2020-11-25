$('.btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            1000
        );
    }

});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".main-header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#btnUP').fadeIn();
    } else {
        $('#btnUP').fadeOut();
    }
});

$("#btnUP").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
