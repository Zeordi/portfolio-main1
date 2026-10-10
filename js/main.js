 (function($) {

	"use strict";

	// Centralized social/contact links configuration
	// To add a new link, simply add a new entry here.
	window.PF_SOCIAL_LINKS = {
		email: {
			label: 'ordialex1226@gmail.com',
			href: 'mailto:ordialex1226@gmail.com',
			icon: 'fa fa-paper-plane'
		},
		phone: {
			label: '+251-965-655-184',
			href: 'tel:+251965655184',
			icon: 'fa fa-phone'
		},
		linkedin: {
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/abel-alemayehu1994',
			icon: 'fa fa-linkedin',
			target: '_blank'
		},
		github: {
			label: 'GitHub',
			href: 'https://github.com/Zeordi',
			icon: 'fa fa-github',
			target: '_blank'
		}
	};

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Dynamic social links rendering from centralized config
	var renderSocialLinks = function() {
		if (!window.PF_SOCIAL_LINKS || $('#pf-footer-links').length === 0) return;
		var $list = $('#pf-footer-links');
		$list.empty();
		$.each(window.PF_SOCIAL_LINKS, function(key, link) {
			var $li = $('<li>');
			var $a = $('<a>').attr('href', link.href).text(link.label);
			if (link.target) {
				$a.attr('target', link.target).attr('rel', 'noopener');
			}
			$li.append($a);
			$list.append($li);
		});
	};
	renderSocialLinks();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	// Carousel (Owl) removed — hero is now a static section; guard in case lib returns.
	var carousel = function() {
		if (window.$ && $.fn && $.fn.owlCarousel) {
			$('.home-slider').owlCarousel({
			    loop:true,
			    autoplay: true,
			    margin:0,
			    animateOut: 'fadeOut',
			    animateIn: 'fadeIn',
			    nav:false,
			    autoplayHoverPause: false,
			    items: 1,
			    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
			    responsive:{
			      0:{	items:1 },
			      600:{ items:1 },
			      1000:{ items:1 }
			    }
			});
			$('.carousel-testimony').owlCarousel({
				center: true,
				loop: true,
				autoplay: true,
				autoplaySpeed:2000,
				items:1,
				margin: 30,
				stagePadding: 0,
				nav: false,
				navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
				responsive:{
					0:{ items: 1 },
					600:{ items: 2 },
					1000:{ items: 3 }
				}
			});
		}
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	var projectReveal = function() {
		$('.pf-project-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	projectReveal();

	var capabilityReveal = function() {
		$('.pf-capability-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	capabilityReveal();

	var processReveal = function() {
		$('.pf-step-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	processReveal();

	var stackReveal = function() {
		$('.pf-stack-group').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	stackReveal();

	var buildingReveal = function() {
		$('.pf-building-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	buildingReveal();

	var experienceReveal = function() {
		$('.pf-experience-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	experienceReveal();

	var educationReveal = function() {
		$('.pf-education-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '85%' } );
	};
	educationReveal();

	var generalReveal = function() {
		$('.heading-section, .pf-stack-card, .pf-capability-card, .pf-building-item').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('is-visible') ) {
				$(this.element).addClass('is-visible');
			}
		}, { offset: '90%' } );
	};
	generalReveal();

	// Scroll progress indicator
	var scrollProgress = function() {
		var $progress = $('#scroll-progress');
		if (!$progress.length) return;

		$(window).on('scroll', function() {
			var scrollTop = $(window).scrollTop();
			var docHeight = $(document).height() - $(window).height();
			var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			$progress.css('width', progress + '%');
		});
	};
	scrollProgress();

	// Theme toggle
	var themeToggle = function() {
		var $toggle = $('#theme-toggle');
		var $icon = $toggle.find('.pf-theme-icon');
		var $html = $('html');
		var storageKey = 'pf-theme';

		function getSystemTheme() {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		function getStoredTheme() {
			return localStorage.getItem(storageKey);
		}

		function applyTheme(theme) {
			$html.attr('data-theme', theme);
			$icon.text(theme === 'dark' ? '☾' : '☀');
			localStorage.setItem(storageKey, theme);
		}

		// Initialize theme
		var stored = getStoredTheme();
		if (stored) {
			applyTheme(stored);
		} else {
			applyTheme(getSystemTheme());
		}

		// Listen for system theme changes
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
			if (!getStoredTheme()) {
				applyTheme(e.matches ? 'dark' : 'light');
			}
		});

		// Toggle on click
		$toggle.on('click', function() {
			var current = $html.attr('data-theme');
			var next = current === 'dark' ? 'light' : 'dark';
			applyTheme(next);
		});
	};
	themeToggle();

	// Custom cursor — desktop only
	var customCursor = function() {
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		var $cursor = $('#cursor');
		if (!$cursor.length) return;

		var mouseX = 0, mouseY = 0;
		var cursorX = 0, cursorY = 0;

		$(document).on('mousemove', function(e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});

		function animateCursor() {
			cursorX += (mouseX - cursorX) * 0.2;
			cursorY += (mouseY - cursorY) * 0.2;
			$cursor.css({
				left: cursorX + 'px',
				top: cursorY + 'px'
			});
			requestAnimationFrame(animateCursor);
		}
		animateCursor();

		// Cursor states
		$('a, button, .btn, .pf-project-card, .pf-capability-card').on('mouseenter', function() {
			var $el = $(this);
			if ($el.closest('.pf-project-card').length) {
				$cursor.addClass('pf-cursor--view');
				$cursor.removeClass('pf-cursor--link');
			} else {
				$cursor.addClass('pf-cursor--link');
				$cursor.removeClass('pf-cursor--view');
			}
		}).on('mouseleave', function() {
			$cursor.removeClass('pf-cursor--view pf-cursor--link');
		});
	};
	customCursor();

	// magnific popup (lib no longer loaded) — guarded
	if (window.$ && $.fn && $.fn.magnificPopup) {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	}

})(jQuery);



$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

