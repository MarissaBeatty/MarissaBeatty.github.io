(function() { //IIFE - immediately invoked function expression

// FIND SOME KEY DOM ELEMENTS
  var body = document.querySelector('#body');
  var homeButton = body.querySelector('#homeButton');
  var header =  body.querySelector('#header');
  var navButton = body.querySelector('#menu-icon');
  var elementPosition = $('nav').offset();
  var intViewportWidth = window.innerWidth;


  // SEND USER TO TOP OF HOMEPAGE ON CLICK

  navButton.addEventListener('click', function(event) {
    navButton.classList.toggle('open');
    });

  function stickyNav() {
    if($(window).scrollTop() > elementPosition.top){
      if(intViewportWidth > 960) {
          $('nav').addClass('sticky');
        } else if(intViewportWidth <= 960){
        }
    } else {
        $('nav').removeClass('sticky');
    }    
  };

window.onresize = function() {    
  intViewportWidth = window.document.body.clientWidth;
}

$(window).scroll(function(){
  stickyNav();   
});

  $(window).resize(function(){
    $(window).scroll(function(){
      stickyNav();
    });
  });


// SMOOTH SCROLLING FOR HOME BUTTON
  homeButton.addEventListener('click', function(event) {
      var top = (window.pageYOffset || body.scrollTop)  - (body.clientTop || 0);
      event.preventDefault();
            $('html, body').stop().animate({
                'scrollTop':  $(body).offset().top 
            }, 800, 'swing', function () {
            });
      $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".the-top").offset().top},"800");return false})})
    });



  // CHECK IF THE HEADER IS FULLY IN VIEW; IF NOT, ADD THE ARROWS TO 
  // TAKE US TO THE PAGE TOP
  window.addEventListener('scroll', function(event) {
    var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.bottom >= 300 
    )};
  	if (!isInViewport(header)) {
  		homeButton.classList.add('visible');
  	} else {
  	  homeButton.classList.remove('visible');
  	}
  });

} ()) //end of IIFE
