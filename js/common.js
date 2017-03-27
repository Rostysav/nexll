$(document).ready(function(){


	$('.bxslider').bxSlider({
  		maxSlides: 3,
  		slideWidth: 380,
  		slideMargin: 10
	});

	 

	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	 $('.about-slider').bxSlider({
	    slideWidth: 536,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 10
	  });

	 $('.certificate-slider').bxSlider({
	    slideWidth: 160,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 10
	  });

	 $(".gambyrger-menu").click(function(){
	    $(".navigation").slideToggle();

	    $('body').toggleClass('overflow');

	});

	 $(".language-btn").click(function(){
	 	$(".language").slideToggle();
	 })

	 $('.recall-slider').bxSlider({
		    slideWidth: 600,
		    minSlides: 1,
		    maxSlides: 2,
		    slideMargin: 10
		  });
	 // if (window.matchMedia("(min-width: 480px)").matches){
	 // 	$('.recall-slider').bxSlider({
		//     slideWidth: 600,
		//     minSlides: 2,
		//     maxSlides: 2,
		//     slideMargin: 10
		//   });
	 // } else {
	 // 	$('.recall-slider').bxSlider({
		//     slideWidth: 600,
		//     minSlides: 1,
		//     maxSlides: 1,
		//     slideMargin: 10
		//   });
	 // }

	/*blog filter*/

	// $(function() {

	// 	var newSelection = "";

	// 	$("#blog-nav a").click(function(){

	// 	    $("#all-blog").fadeTo(200, 0.10);

	// 		$("#blog-nav a").removeClass("active-blog");
	// 		$(this).addClass("active-blog");

	// 		newSelection = $(this).attr("rel");

	// 		$(".blog").not("."+newSelection).slideUp();
	// 		$("."+newSelection).slideDown();

	// 	    $("#all-blog").fadeTo(600, 1);

	// 	});

	// });




})

