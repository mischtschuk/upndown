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

function openMenu(trigger, menu) {
    trigger.on('click', function(e) {
        e.preventDefault();
        menu.addClass('in');
    })
}

function closeMenu(trigger, menu) {
    trigger.on('click', function(e) {
        e.preventDefault();
        menu.addClass('out');
        setTimeout(function(){
            menu.removeClass('in');
            menu.removeClass('out');
        }, 400);
    })
}

$( document ).ready(function(){
    var mobTrigger = $('#menuTrigger');
    var closeTrigger = $('#closeTrigger');
    var mobMenu = $('#menu').parent();
    var menuItems = $('#menu a');
    openMenu(mobTrigger, mobMenu);
    closeMenu(closeTrigger, mobMenu);
    closeMenu(menuItems, mobMenu);
});

//end

(function($){

    "use strict";

    $(document).ready(function () {
        $('.ball a').click(function () {
            if(!$(this).hasClass('open'))
                $(this).toggleClass('open');
        });
    });

})(jQuery);


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady2() {
    player = new YT.Player('player', {
        playerVars: { 'rel': 0, 'loop': 1, 'showinfo': 0},
        height: '100%',
        width: '100%',
        videoId: 'yRdeMrswT5o',
        rel: 0,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();

    var video = $('#videoHolder');

}

var done = false;
function onPlayerStateChange(event) {

}
function stopVideo() {
    player.stopVideo();
}

//sticky video

$('#videoTrigger').on('click', function(){
    var video = $('#videoHolder');
    video.removeClass('hidden');
    onYouTubeIframeAPIReady2();

    $('#max').on('click', function(e){
        e.preventDefault();

        var back = $('.backDrop');


        if(video.hasClass('in')) {
            return false;
        } else {
            video.addClass('in');
            player.setVolume(100);
        }
    });

    $('#min').on('click', function(e){
        e.preventDefault();

        if(video.hasClass('in')) {
            video.removeClass('in');
            player.setVolume(0);
        } else {
            return false;
        }
    });

    $('#closeVideo').on('click', function(e){
        e.preventDefault();

        player.destroy();

        video.addClass('hidden');
    })

});


//End

//cart trigger
$( document ).ready(function(){
    function openCart(trigger){
        trigger.on('click', function(e) {
            var cart = $('.stickyCartHolder');
            var back = $('.cartBackDrop');
            e.preventDefault();
            cart.addClass('in');
            back.addClass('in');
        });
    }

    function closeCart(trigger){
        trigger.on('click', function(e) {
            var cart = $('.stickyCartHolder');
            var back = $('.cartBackDrop');
            e.preventDefault();
            cart.removeClass('in');
            back.removeClass('in');
        });
    }

    openCart($('#cartTrigger'));
    closeCart($('.cartBackDrop'));
});
//end

//scroll spy

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('#menu a').on('click', function (e) {
        var el = $(this);
        e.preventDefault();
        $('#menu li a').each(function () {
            $(this).parent().removeClass('active');
        });
        $(this).parent().addClass('active');

        $('html, body').animate({
            'scrollTop': $(el.attr('href')).offset().top
        }, 500, 'swing', function () {
            window.location.hash = el.attr('href');
            history.pushState({}, "", el.attr('href'));
        });
    });


});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

//end

//custom tabs

$(document).ready(function(){

    $('.tree a').click(function(e){
        e.preventDefault();
        var tab_id = $(this).attr("href");

        $('.tree .ball').removeClass('active');
        $('.greeting .content').removeClass('active');

        $(this).parent().addClass('active');
        $(tab_id).addClass('active');
    })

});

//end

//product slider

$(document).ready(function(){
    $("a.zoom").fancybox({prevEffect:'fade', nextEffect:'fade'});
});



//end

