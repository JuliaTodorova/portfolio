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

jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
    }
});
// scroll-to-top animate
jQuery('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


// Magnific Popup Plugin

$(document).ready(function() {
    $('.parent-container').magnificPopup({
        gallery: {
          enabled: true
                    },
        delegate:'a',
        type:'image'});   
});

$(document).ready(function(){
    $('.parent-container').magnificPopup({
        items:[{
            src:'images/ffuc1.jpg',
            title:'Fairfield United Chiurch'
        },
        {
            src:'images/ffuc2.jpg',
            title:'Fairfield United Chiurch'
        },
        {
            src:'images/ffuc3.jpg',
            title:'Fairfield United Chiurch'
        },
        {
            src:'images/ffuc4.jpg',
            title:'Fairfield United Chiurch'
        },
        ],
        gallery:{
            enabled:true
        },
        type:'image'

    });
});
