(function() { //IIFE - immediately invoked function expression

// FIND SOME KEY DOM ELEMENTS
  var body = document.querySelector('#body');
  var homeButton = body.querySelector('#homeButton');
  var header =  body.querySelector('#header');

  // SEND USER TO TOP OF HOMEPAGE ON CLICK
  homeButton.addEventListener('click', function(event) {
    header.scrollIntoView({behavior: "smooth"});
  });
} ()) //end of IIFE
