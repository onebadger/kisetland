// show and fix hiden top on scroll down more then Xpx

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 700) {
    $('#fixed-top').css('display', 'block');
  } else {
    $('#fixed-top').css('display', 'none');
  }
});


// slow scrollTop function

$(document).ready(function(){  
  $("#fixed-top-img a").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#header").offset().top
    }, 800);
  });
});

// responsive img gallery

// check html loaded. load X-pictures img gallery due to css condition set



