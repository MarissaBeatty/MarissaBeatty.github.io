(function() { //IIFE - immediately invoked function expression

// FIND SOME KEY DOM ELEMENTS
  var body = document.querySelector('#body');
  var homeButton = body.querySelector('#homeButton');
  var header =  body.querySelector('#header');

  // SEND USER TO TOP OF HOMEPAGE ON CLICK
  homeButton.addEventListener('click', function(event) {
    header.scrollIntoView({behavior: "smooth"});
  });

  // CHECK IF THE HEADER IS FULLY IN VIEW; IF NOT, ADD THE ARROWS TO 
  // TAKE US TO THE PAGE TOP
  window.addEventListener('scroll', function(event) {
    var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        // bounding.top >= 0 &&
        // bounding.left >= 0 &&
        // bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 300 
        // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )};
	if (!isInViewport(header)) {
		homeButton.classList.add('visible');
		console.log(homeButton.classList);
		// console.log('In the viewport!');
	} else {
	  console.log('Not in the viewport... whomp whomp');
	  homeButton.classList.remove('visible');

	}
  });

} ()) //end of IIFE
