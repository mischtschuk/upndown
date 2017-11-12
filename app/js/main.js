/*  Sticky navigation */

window.onscroll = function() {

    var scrolled = $(this).scrollTop();
    var nav = $('.stickyHeader');


    if(scrolled < 400) {
        nav.removeClass('fixed');
    } else {
        nav.addClass('fixed');
    }

    if(scrolled < 600) {
        nav.removeClass('in');
    } else {
        nav.addClass('in');
    }

};

/* END */

//mobile menu

function toggleMenu(trigger, menu) {
    trigger.on('click', function(e) {
        e.preventDefault();
        menu.toggleClass('in');
    })
}

$( document ).ready(function(){
    var mobTrigger = $('#menuTrigger');
    var mobMenu = $('#menu');
    toggleMenu(mobTrigger, mobMenu);
});

//end