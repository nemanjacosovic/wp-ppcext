jQuery.noConflict();
(function( $ ) {
    // Append CSS
    $('body').append('<style>.ngrave-cc-dot { padding-bottom: 20px; border-bottom: 1px solid gray; } .ngrave-cc-dot-active { border-bottom: 1px solid white; }</style>')

    // Hides dots
    $('.slick-dots').css('display', 'none')

    // Add active class
    $('#ngrave-cc-dots .ngrave-cc-dot').eq(0).addClass('ngrave-cc-dot-active');

    // Switches slides
    $('#ngrave-cc-dots .ngrave-cc-dot').on('click', function(event) {
        var clickIndex = $(this).index();
        // console.log(clickIndex)
        $('#ngrave-cc-dots .ngrave-cc-dot').removeClass('ngrave-cc-dot-active');
        $("ul.slick-dots li").eq(clickIndex).trigger('click');
        $('#ngrave-cc-dots .ngrave-cc-dot').eq(clickIndex).addClass('ngrave-cc-dot-active');
    })
})(jQuery);
