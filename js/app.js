// show and fix hiden top on scroll down more then Xpx

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 400) {
    $('#fixed-top ').css('display', 'flex');
  } else {
    $('#fixed-top ').css('display', 'none');
  }
});

