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