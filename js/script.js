$(window).on('scroll', scrollFunction);

function scrollFunction() {
    var windowScroll = $(window).scrollTop() + $(window).height();
    $('.playlists .playlist').each(function() {
        var listBtm = $(this).height() / 2 + $(this).offset().top;
        
        if(windowScroll >= listBtm) {
            $(this).animate({opacity:'1'}, 1000);
        }
    });
    console.log('scrollTop:' + $(window).scrollTop() + ', height: ' + $(window).height());
    if($(window).scrollTop() === $(document).height() - $(window).height()) {
        $('.to-top-btn').fadeIn('fast');
        
    }else {
        $('.to-top-btn').fadeOut('fast');
    }
}

$('.to-top-btn').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
});

scrollFunction();