var navMax = 10;
$(document).ready(function() {
	$(document).scroll(function() {
		if($(document).scrollTop() > navMax) {
			$('nav').removeClass('transparent');
		}
		else {
			$('nav').addClass('transparent');
		}
	});

	$("#mobile-button").on("click", function(event) {
		if ($('nav').hasClass('transparent') && $(document).scrollTop() < navMax){
			$('nav').removeClass('transparent');
		} else if(!$('nav').hasClass('transparent') && $(document).scrollTop() < navMax) {
			$('nav').addClass('transparent');
		}
	})
});
