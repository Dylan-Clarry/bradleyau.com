var smallScreenSize = 767;
var nav = document.getElementsByTagName("nav")[0];
console.log("resize.js");
//remove #big-nav on page load
if(window.innerWidth <= smallScreenSize) {
	nav.classList.remove("big-nav");
}
//resize listener to remove #big-nav when on small screen size
window.onresize = function(e) {
	var windowWidth = window.innerWidth;
	// checks if window size is small enough to remove big-nav (side-margins)
	if(windowWidth <= smallScreenSize) {
		nav.classList.remove("big-nav");
	} else {
		nav.classList.add("big-nav");
	}
}