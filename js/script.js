$(document).ready(function() {
    $('#js-menu-show').on("click", function() {
        $('.js-navigation').css('left', '0px');
        $('#js-menu-hide').css('left', '150px');
        $('#js-menu-show').css('left', '-50px');
    });
    $('#js-menu-hide').on("click", function() {
        $('.js-navigation').css('left', '-150px');
        $('#js-menu-show').css('left', '0px');
        $('#js-menu-hide').css('left', '-50px');
    });
});

$(document).scroll(function() {
    if ($(this).scrollTop()>100) {
        $('.goto-top').css('opacity', '0.5');
        $('.down').css('opacity', '0');
    } else {
        $('.goto-top').css('opacity', '0');
        $('.down').css('opacity', '0.5');
    }
});