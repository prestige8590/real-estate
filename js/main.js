$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:70,
    nav:true,
    navText:['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.testimonial').owlCarousel({
    loop:true,
    autoplay:true,
    margin:70,
    nav:true,
    navText:['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


document.querySelector('.ri-arrow-up-s-line').addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})