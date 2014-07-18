var previousScroll = 0,
    headerOrgOffset = $('#heada').height();

$('#header-wrap').height($('#heada').height());

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#header-wrap').slideUp();
        } else {
            $('#header-wrap').slideDown();
        }
    } 
    previousScroll = currentScroll;
});

