$(function () {
    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct>0) { 
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.mainSlide').slick ({
        arrows: false,
        fade: true,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
    })

    $('.mainVisual .arrows .left').on('click', function() {
        $('.mainSlide').slick('slickPrev')
    })
    $('.mainVisual .arrows .right').on('click', function() {
        $('.mainSlide').slick('slickNext')
    })
})