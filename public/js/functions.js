

(function($) {

	"use strict"


	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$(".menu-block").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		} 

		if ($(this).scrollTop() >= 50)
		{	
			/* If page is scrolled more than 50px */
			$("#back-to-top").fadeIn(200); /* Fade in the arrow */
		}
		else
		{
			$("#back-to-top").fadeOut(200); /* Else fade out the arrow */
		}
	});
		
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {
		/* -- Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$(".menu-block").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */
		
		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');

		/* -- Find all anchors */
		$("#navbar").find("a[href]").each(function(i,a) {

			var $a = $(a);
			var href = $a.attr("href");

			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+'#') == 0 ) {

				/* remove URI from href */
				href = href.replace(url,'');

				/* update anchors HREF with new one */
				$a.attr("href",href);
			}
		});

		/* -- Add Easing Effect on Section Scroll */
		$('.navbar-nav li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])').on('click', function() {

		   if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html, body').animate( { scrollTop: target.offset().top - 83 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});	
		
		/* -- Responsive Caret */
		$(".ddl-switch").on("click", function() {

			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* -- Remove p empty tag for Shortcode */
		$( "p" ).each(function() {
			var $this = $( this );
				if( $this.html().replace(/\s|&nbsp;/g, '').length == 0) {
				$this.remove();
			}
		});
		
		/* -- Expanding Search */
		new UISearch( document.getElementById( "sb-search" ) );
		
		/* -- PhotoSlider Section:: Text Effect */
		function doAnimations( elems ) {
			/* Cache the animationend event in a variable */
			var animEndEv = 'webkitAnimationEnd animationend';

				elems.each(function () {
				var $this = $(this),
					$animationType = $this.data('animation');
					$this.addClass($animationType).one(animEndEv, function () {
					$this.removeClass($animationType);
				});
			});
		}
		var $myCarousel = $('#home-slider'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		$myCarousel.carousel();
		doAnimations($firstAnimatingElems);
		$myCarousel.carousel('pause');
		$myCarousel.on('slide.bs.carousel', function (e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems);
		});
		
		
		/* -- Welcome Section  */
		if( $(".welcome-section").length ) {
			$(".welcome-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".welcome-box").addClass( "animated fadeInRight" );
				});
			});
		}
		
		/* -- Parallax Carousel */
		 if( $(".parallax-section").length ) {
			$(".parallax-carousel").owlCarousel({
				loop: true,
				autoplay: false,
				items: 1,
				nav: false,
				dots: true,
				mouseDrag: false,
				autoplayHoverPause: true,
				animateOut: "slideOutUp",
				animateIn: "slideInUp"
			})
			
			$(".parallax-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".parallax-section").addClass( "animated fadeInLeft" );
				});
			});
		}
		
		/* -- Event Section  */
		if( $(".event-section").length ) {
			$(".event-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".event-section .event-block .event-box").addClass( "animated fadeInRight" );
				});
			});
		}
		
		/* -- Event Block  */
		if( $(".eventblock").length ) {
			$(".eventblock").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".eventblock .col-md-5").addClass( "animated fadeInLeft" );
				});
			});
		}
		
		/* -- SearchCourses  */
		if( $(".searchcourses").length ) {
			$(".searchcourses").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".searchcourses").addClass( "animated zoomInLeft" );
				});
			});
		}
		
		/* -- Video Testimonial Section  */
		if( $(".video-testimonial-section").length ) {
			$(".video-testimonial-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".video-testimonial-section .video-block").addClass( "animated fadeInLeft" );
					$(".video-testimonial-section .testimonial-block").addClass( "animated fadeInRight" );
				});
			});
		}		
		
		/* -- Latest Blog Section  */
		if( $(".latestblog-section").length ) {
			$(".latestblog-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".latestblog-section").addClass( "animated fadeInLeft" );
				});
			});
		}
		
		/* -- Team Section  */
		if( $(".team-section").length ) {
			$(".team-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".team-section").addClass( "animated fadeInLeft" );
				});
			});
		}
		
		/* -- CallOut  */
		if( $(".callout").length ) {
			$(".callout").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".callout").addClass( "animated pulse" );
				});
			});
		}
		
		/* -- Video Block */
		if( $(".video-block").length ) {
			$('.popup-youtube').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
		
		/* -- CourseDetail Section  */
		if( $(".coursesdetail-section").length ) {
			$(".coursesdetail-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".coursesdetail-section .event-contentarea").addClass( "animated fadeInLeft" );
					$(".coursesdetail-section .event-sidebar").addClass( "animated fadeInRight" );
				});
			});
		}
		
		/* -- WhyChooseUs Section  */
		if( $(".whychooseus-section").length ) {
			$(".whychooseus-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".whychooseus-section .video-block").addClass( "animated fadeInLeft" );
					$(".whychooseus-section .accordion-section").addClass( "animated fadeInRight" );
				});
			});
		}
		
		/* -- Blog  */
		if( $(".blog").length ) {
			$(".blog").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".blog .content-area").addClass( "animated fadeInLeft" );
					$(".blog .widget-area").addClass( "animated fadeInRight" );
				});
			});
		}
		
		/* -- ContactUs Section  */
		if( $(".contactus-section").length ) {
			$(".contactus-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".contactus-section .row .map").addClass( "animated rotateInDownLeft" );
					$(".contactus-section .row .getintouch").addClass( "animated rotateInUpLeft" );
					$(".contactus-section .contactdetail-block").addClass( "animated slideInLeft" );
					
				});
			});
		}
		
		/* -- Testimonial 2 Section */
		if( $(".testimonial2-section").length ) {
	
			$( "#testimonial2 .total_index" ).html( $("#testimonial2 .item").length );
			if( $("#testimonial2 .item").length > 1 ){
				if( $("#testimonial2 .item.active").index() == 0 ){
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
					$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
				} else if( $("#testimonial2 .item.active").index() == $("#testimonial2 .item").length - 1 ) {
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
					$( "#testimonial2 .index_next" ).html( 1 );
				} else {
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
					$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
				}
			} else {
				$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
				$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item").length );
			}
			
			$("#testimonial2").on("slide.bs.carousel", function () {
				
				if( $("#testimonial2 .item").length > 1 ){
					if( $("#testimonial2 .item.active").index() == 0 ){
						$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
						$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
					} else if( $("#testimonial2 .item.active").index() == $("#testimonial2 .item").length - 1 ) {
						$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
						$( "#testimonial2 .index_next" ).html( 1 );
					} else {
						$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
						$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
					}
				} else {
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
					$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item").length );
				}
			});	
			
			$(".testimonial2-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".testimonial2-section").addClass( "animated lightSpeedIn");
				});
			});
		}
		
		/* -- Contact Map */
		if($("#map-canvas-contact").length==1){
			initialize("map-canvas-contact");
		}
		
		/* -- Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					alert(textStatus);
				}
			});
			return false;
			$("#contact-form").attr("action", "saveQuery").submit();
		});
		
	});

	$(window).load(function() {
		/* -- Site Loader */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
	});

})(jQuery);