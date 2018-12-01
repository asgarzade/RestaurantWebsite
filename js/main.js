$(function(){
    // section - navBar -- Show BLOG Submenu on hover 
    $('#blog').mouseover(function(){
        $('#blogSub').css({
            "visibility": "visible",
            "opacity": 1
        })
    })
    $('#blog').mouseout(function(){
        $('#blogSub').css({
            "visibility": "hidden",
            "opacity": 0
        })
    })
    $('#blogSub').mouseover(function(){
        $(this).css({
            "visibility": "visible",
            "opacity": 1
        })
    })
    $('#blogSub').mouseout(function(){
        $(this).css({
            "visibility": "hidden",
            "opacity": 0
        })
    })
    // section - navBar -- Show SHORTCODES Submenu on hover
    $('#shortcodes').mouseover(function(){
        $('#shortcodesSub').css({
            "visibility": "visible",
            "opacity": 1
        })
    })
    $('#shortcodes').mouseout(function(){
        $('#shortcodesSub').css({
            "visibility": "hidden",
            "opacity": 0
        })
    })
    $('#shortcodesSub').mouseover(function(){
        $(this).css({
            "visibility": "visible",
            "opacity": 1
        })
    })
    $('#shortcodesSub').mouseout(function(){
        $(this).css({
            "visibility": "hidden",
            "opacity": 0
        })
    })
    // section - navBar -- Show/Hide Search on click
    $('#navBar .search').click(function(){
        $(this).find('input').toggleClass('visible').click(function(e){
            e.stopPropagation();
        })
    })
    // section - recommend -- owl carousel
    $('#recommend .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    })
    // section - testimonial -- owl carousel
    $('#testimonial .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
    // section - gallery -- twitter -- owl carousel
    $('#gallery .twitter .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
    // section - blog-full-right-sidebar -- owl carousel
    $('#blogFullContent .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        responsiveClass:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            }
        }
    })
    // section - blog-medium-both-sidebar -- owl carousel
    $('#blogMediumContent .postSlider .owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        responsiveClass:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            }
        }
    })
}) 