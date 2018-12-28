(function() { //IIFE - immediately invoked function expression

// FIND SOME KEY DOM ELEMENTS
  var body = document.querySelector('#body');
  var homeButton = body.querySelector('#homeButton');
  var header =  body.querySelector('#header');

  // SEND USER TO TOP OF HOMEPAGE ON CLICK
  homeButton.addEventListener('click', function(event) {
      // var bounding = body.getBoundingClientRect();
      // console.log(bounding);
      // var top = bounding.top;
      // var top = Math.abs(bounding.top);
      var top = (window.pageYOffset || body.scrollTop)  - (body.clientTop || 0);
      // console.log(body.scrollTop, "scrolltop")
      // console.log(top);
      // body.animate({ scrollTop: 0 }, 1);
      // window.scrollTo(0,0);


      event.preventDefault();
            $('html, body').stop().animate({
                'scrollTop':  $(body).offset().top 
            }, 800, 'swing', function () {
                // window.location.hash = target;
            });

      $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".the-top").offset().top},"2000");return false})})
      





    });

  // homeButton.addEventListener('click', function(event) {
    // body.classList.add('scrollToTop');
    // console.log(body.classList);

    // header.scrollIntoView({behavior: "smooth"});
    // var scrollTop = header.scrollTop;
    // console.log(scrollTop);
    // body.animate([
//   // keyframes
  // { transform: 'translateY(0)' }, 
  // { transform: 'translateY(100%)' }
// ], { 
//   // timing options
  // duration: 500,
  // iterations: 1, 
  // animation-fill-mode:forwards,
  // reset: false
// }); 
    // return false;
    // html,body").animate({scrollTop:$(".the-top").offset().top},"2000");return false})})





  // });

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
