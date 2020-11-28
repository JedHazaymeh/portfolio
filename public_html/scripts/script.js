$(window).scroll(function() {
    var scroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    $(".page-header").css({
        transform: 'translate2d(0, +'+(scroll/100)+'%) scale('+(100 - scroll/100)/100+')'
    });
    $(".left-nav").css({
        transform: 'translate2d(-'+(scroll/100)+'%, 0)'
    });
    $(".right-nav").css({
        transform: 'translate2d(+'+(scroll/100)+'%, 0)'
    });
});