var smallSizeScreen = 767;
$(document).ready(function() {
	//remove #big-nav on page load
	if ($(window).width() <= smallSizeScreen) {
		$('nav').removeClass('big-nav');
	}
	//resize listener to remove #big-nav when on small screen size
	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		if(windowWidth <= smallSizeScreen) {
			$('nav').removeClass('big-nav');
			console.log($(window).width());
		} else {
			$('nav').addClass('big-nav');
		}
	});
});