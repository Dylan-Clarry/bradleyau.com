var navMax = 10;
var nav = document.getElementsByTagName("nav")[0];
// Scroll listener, removes transparency of navbar when not at top position of screen
document.onscroll = function(e) {
	//find scroll position
	var scrollPos = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if(scrollPos > navMax) {
		nav.classList.remove("transparent");
	} else {
		nav.classList.add("transparent");
	}
}
// mobile menu button listener, removes transparency of navbar when button is pressed
document.getElementById("mobile-button").addEventListener("click", function(e) {
	//find scroll position
	var scrollPos = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if(hasClass(nav, "transparent") && scrollPos < navMax) {
		nav.classList.remove("transparent");
	} else if(!hasClass(nav, "transparent") && scrollPos < navMax) {
		nav.classList.add("transparent");
	}
});
/*
 * function: hasClass
 * parameters: element, class
 * returns boolean value based on whether the class is found in the classname
*/
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
