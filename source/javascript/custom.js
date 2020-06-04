//Close mobile nav to click

$(document).ready(function() {
$(document).click(function(event){
 		var clickover = $(event.target);
		var _opened = $('.navbar-collapse').hasClass("show");
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();				
 		}
 	});
 });



//Offer - Show More - Button

$(document).ready(function(){
  $(".btn__more").click(function(){
    $(".offer__more").addClass("offer__more--is-visible");
    $(".btn__more").addClass("btn__more--is-hidden");

  });
});

//Counter


$(document).ready(function() {
	$('.counter__timer').counterUp({
	  delay: 10,
	  time: 1600
	});
	$('.counter__timer').addClass('animated fadeInDownBig');
	$('h3').addClass('animated fadeIn');
});

//Back to Top - Button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("button__top").style.display = "block";
  } else {
    document.getElementById("button__top").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

