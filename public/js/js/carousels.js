$(document).ready(function() {
	'use strict';

	/* ======= Flexslider ======= */
	/* ref: http://flexslider.woothemes.com/index.html */
	$('.flexslider').flexslider({
			animation: "slide"
	});

	/* ======= Owl ========= */

	$('#owl-demo').owlCarousel({
	    loop:true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
	});
});
