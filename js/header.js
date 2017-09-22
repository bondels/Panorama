/*
$(document).ready(function(){
	var altura = $('.menu-web').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu-web').addClass('menu-fixed');
			$().removeClass('home-menu');
			$().addClass('p-header');
		} else {
			$('.menu-web').removeClass('menu-fixed');
			$().removeClass('p-header');
			$().addClass('home-menu');
		}
	});
 
});*/


$(document).ready(function(){
	var altura = $('.menu-web').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu-web').addClass('menu-fixed');
			$('.inicio-bg a').removeClass('home-menu');
			$('.inicio-bg').addClass('p-header a');
			$('.home-menu a').removeClass('casa');
			$('.home-menu a').addClass('p');
		} else {
			$('.menu-web').removeClass('menu-fixed');
			$('.inicio-bg').removeClass('p-header a');
			$('.inicio-bg a').addClass('home-menu');
		}
	});

});