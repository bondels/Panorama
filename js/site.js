$(document).ready(function() {
	/*EXPERIENCIA PANORAMA*/
	var $modExperiencia = $( '.mod-experiencia' );
	if( $modExperiencia.length > 0 ){
		$modExpContent = $modExperiencia.find( '.mod-content' ),
		$flexslider = $modExperiencia.find( '.mod-slider.flexslider' );
		if( !$flexslider.hasClass( 'generated' ) ){
			$flexslider.flexslider({
				animation : "slide",
				animationLoop : false,
				slideshow: false,
				useCSS: false,
				controlNav : false
			});
			$flexslider.addClass( 'generated' )
		}
		$modExperiencia.on( 'click', '.mod-filters a', function( e ){
			e.preventDefault();
			var $this = $( this );
			if( $this.hasClass( 'open-filter' ) ){
				$modExperiencia.find( '.n-exp-filter' ).slideToggle();
			}else{
				var $data = $this.data( 'filter' );
				if( $data != "grande" && $modExpContent.hasClass( 'openGrande' )  ){
					return;
				}
				$this.siblings( 'a' ).removeClass( 'active' );
				$this.addClass( 'active' );
				$modExpContent.find( '.flexslider' ).fadeOut(function(){
					$modExpContent.removeClass( "filter-galeria filter-lista filter-grande" ).addClass( "filter-"+$data );
					$modExpContent.find( '.flexslider' ).fadeIn();
				});
			}
		}).on( 'click', '.mod-nav a', function( e ){
			e.preventDefault();
			var $this = $( this ),
				$parent = $this.parent(),
				$index = $parent.index();
			$parent.siblings( 'li' ).removeClass( 'active' );
			$parent.addClass( 'active' );
			$modExpContent.find( '.mod-content-slider' ).removeClass( 'active' );
			$modExpContent.find( '.mod-content-slider' ).eq( $index ).addClass( 'active' );
			var $flexslider = $modExpContent.find( '.mod-content-slider.active' ).find( '.mod-slider.flexslider' );
			if( !$flexslider.hasClass( 'generated' ) ){
				$flexslider.addClass( 'generated' );
				$flexslider.flexslider({
					animation : "slide",
					animationLoop : false,
					slideshow: false,
					useCSS: false,
					controlNav : false
				});
			}
			if( $parent.hasClass( 'changeFilter' ) && !$modExpContent.hasClass( 'filter-grande' )  ) {
				$( '[data-filter="grande"]' ).trigger( 'click' );
				$modExpContent.addClass( 'openGrande' );
			}else{				
				$modExpContent.removeClass( 'openGrande' );
			}
		});
	}


	/*parametros slider gallery*/
	$('.popupgallery .flexslider').flexslider({
		animation : "slide",
		pauseOnHover : true,
		controlNav : false,
		minItems : 1,
		maxItemas : 1,
		directionNav : true,
		nextText : "",
		prevText : "",
		itemWidth : 560
	});
	/*parametros slider mas noticias*/
	$('.carousel.clr .flexslider').flexslider({
		animation : "slide",
		pauseOnHover : true,
		controlNav : false,
		minItems : 1,
		maxItemas : 1,
		directionNav : true,
		nextText : "",
		prevText : ""
	});

		$('.facetas .facetas-stage .flexslider').flexslider({
		animation : "slide",
		pauseOnHover : true,
		controlNav: "thumbnails",
		minItems : 1,
		maxItemas : 1,
		nextText : "",
		prevText : "",
		directionNav: false
	});

		$('.facetas-horoscopo .flexslider').flexslider({
		animation : "slide",
		pauseOnHover : true,
		itemWidth:560,
		controlNav: false,
		minItems : 1,
		maxItemas : 1,
		nextText : "",
		prevText : "",
directionNav: true
	
	});



});

$(document).scroll(function() {

	if ($(this).scrollTop() > 120) {
		$(".scrolltop").css("opacity", 1);
	} else {
		$(".scrolltop").css("opacity", 0);
	}

	if ($(this).scrollTop() > 220) {
		$(".notaintro.st").addClass("sticky");
	} else {
		$(".notaintro.st").removeClass("sticky");
	}

});

// JavaScript Document
$(function() {
	$("#media_filters").tabs({
		create : function(e, ui) {
			ui.panel.find(".flexslider").flexslider({
				animation : "slide",
				slideshow : false,
				animationLoop : false,
				controlNav : false,
				itemWidth : 176,
			});
		},
		beforeActivate : function(e, ui) {
			ui.oldPanel.find(".flexslider").flexslider("destroy");
			ui.newPanel.find(".flexslider").flexslider({
				animation : "slide",
				slideshow : false,
				animationLoop : false,
				controlNav : false,
				itemWidth : 176,
			});
		}
	});
});

$(document).ready(function() {

	$('.comments *').click(function() {
		$('html, body').animate({
			scrollTop : $("#ttcm").offset().top - 150
		}, 500);
		return false;
	});

	$('.comments').click(function() {
		$('html, body').animate({
			scrollTop : $("#ttcm").offset().top - 150
		}, 500);
		return false;
	});

	/* Sidebar scroll */
	/*$('#scroll').tinyscrollbar();
	 $('#scroll_mm').tinyscrollbar();*/
	$('.popupgallery .flexslider').flexslider({
		animation : "fade",
		pauseOnHover : true,
		controlNav : false,
		minItems : 3,
		directionNav : true,
		nextText : "",
		prevText : ""
	});

	$('.impacto .flexslider').flexslider({
		animation : "fade",
		pauseOnHover : true,
		controlNav : false,
		minItems : 3,
		directionNav : true,
		nextText : "",
		prevText : ""
	});

	$('.closure.flexslider').flexslider({
		animation : "slide",
		pauseOnHover : true,
		controlNav : false,
		minItems : 3,
		slideshow : false,
		itemWidth : 309,
		itemMargin: 21,
		directionNav : true,
		animationLoop: false,
		nextText : "",
		prevText : ""
	});







	/**************************CHEKEAR**************************************/




	$('.v-over .close-desc').click(function() {
		$(this).parent().find('.detail').animate({
			height : 'toggle'
		});
		return false;
	});
	$('.stage .close-desc').click(function() {
		$(this).parent().find('.overlay').animate({
			height : 'toggle'
		});
		return false;
	});
	
	/*Show- Hide next an previous post */
	/* Mouse over */
	$('.nav-bnote a').hover(function() {
		$(this).addClass("hover");
		$('.' + $(this).attr('data-rel')).removeClass("hidden");
	}, function() {
		$(this).removeClass("hover");
		$('.' + $(this).attr('data-rel')).addClass("hidden");
	});

	$('.info-p-note').hover(function() {
		$(this).removeClass("hidden");
		$('.p-note a').addClass("hover");

	}, function() {
		$(this).addClass("hidden");
		$('.p-note a').removeClass("hover");
	});

	$('.info-n-note').hover(function() {
		$(this).removeClass("hidden");
		$('.n-note a').addClass("hover");

	}, function() {
		$(this).addClass("hidden");
		$('.n-note a').removeClass("hover");
	});

	$(".scrolltop").click(function() {
		$("body, html").animate({ scrollTop: 0 }, 600);
	});

	/* Caruoseles */
	$(document).ready(function() {
		$('.nr.flexslider').flexslider({
			animation : "slide",
			directionNav : true,
			animationLoop: false,
			slideshow : false,
			keyboard : true,
			controlNav : false,
			itemWidth : 285,
			maxItems : 3
		});
	});

	$('.top-news .flexslider').flexslider({
		animation : "slide",
		slideshow : false,
		animationLoop : false,
		itemWidth : 162,
		controlNav : false,
		nextText : "",
		prevText : "",
	});

	$('.cobertura .flexslider').flexslider({
		animation : "slide",
		pauseOnHover : false,
		controlNav : false,
		slideshow: false,
	});
	$('.multimedia .flexslider-v').flexslider({
		animation : "slide",
		slideshow : false,
		animationLoop : false,
		controlNav : false,
		smoothHeight : true,
		direction : 'vertical',
		prevText : 'Menos t&iacute;tulos',
		nextText : 'M&aacute;s t&iacute;tulos'
	});
	$('.related .flexslider-v').flexslider({
		animation : "slide",
		slideshow : false,
		animationLoop : false,
		controlNav : false,
		smoothHeight : true,
		direction : 'vertical',
		prevText : 'Ver menos noticias',
		nextText : 'Ver m&aacute;s noticias'
	});
	$('.landing .flexslider').flexslider({
		animation : "slide",
		slideshow : false,
		animationLoop : false,
		controlNav : false,
		direction : 'horizontal',
	});
	$('.n-exp.flexslider').flexslider({
		animation : "slide",
		animationLoop : false,
		pauseOnHover : true,
		controlNav : false
	});

	
});









