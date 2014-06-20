// Scroll Navigation

$(document).ready(function() 
{
	$(".scroll").on("click",function(e){

		e.preventDefault();

		$("body, html").animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 900);

	});
});

// scroll-to-top button show and hide

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
    }
});
// scroll-to-top animate
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// Magnific Popup Plugin

$(document).ready(function() {
    $('.parent-container, beerapp').magnificPopup({
        gallery: {
          enabled: true
                    },
        delegate:'a',
        type:'image'});   
});

$(document).ready(function(){
    $('.parent-container').magnificPopup({
        items:[{
            src:'images/ffuc-small-1.jpg',
            title:'Mobile'
        },
        {
            src:'images/ffuc-med-1.jpg',
            title:'Tablet'
        },
        {
            src:'images/ffuc-lg-1.jpg',
            title:'Desktop'
        },
        ],
        gallery:{
            enabled:true
        },
        type:'image'

    });
});

$(document).ready(function(){
    $('.beerapp').magnificPopup({
        items:[{
            src:'images/BeerApp.jpg',
            title: 'Beer App'
        },
        ],

        gallery:{
            enabled:true
        },
        type:'image'
    });
});



// On Click hide responsive nav 

$(document).ready(function(){
      $('.navbar-collapse ul li a').click(function(){ 
      $('.navbar-toggle:visible').click();

    });
});
