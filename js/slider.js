// JavaScript Document
$('#banner').owlCarousel({
    loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,
    nav:false,
    dots:false,// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
})

// Trending
$('#trending').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

// Latest
$('#latest').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

// Blog
$('#blog').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false,
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

