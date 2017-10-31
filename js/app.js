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
  $('#fixed-top-img a').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#header').offset().top
    }, 800);
  });
});

// responsive img gallery

// check html loaded. load X-pictures img gallery due to css condition set


// if .js-media display prop. set to 'none' (mobile) 
// make html for 1 element

// <div class="gallery-box">
// <img class="gallery-img" src="img/kiset02.png">
// <p id="gallery-text" class="gallery-text">описание кисета. ну что тут сказать, он хорош!</p>
// </div>



var $galleryImg = $('#gallery-img');
var galleryHtml = '';
var galleryCurrentIndex = 0;
var galleryLastIndex = kisetList.length - 1;
var $breakPointHolder = $('.js-media').css('display');

function galleryHtmlConstructor (number) {
  
  galleryHtml='';   
  for ( var i= 0 ; i < number ; i++ ) {
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="' + kisetList[i].image + '"><p id="gallery-text" class="gallery-text">' + kisetList[galleryCurrentIndex].info + '</p></div>';
  };
  
}

function galleryListConstructor () {
  
  $galleryImg.empty();
  $breakPointHolder = $('.js-media').css('display');
  if ($breakPointHolder === 'none') {
    galleryHtmlConstructor(1);
    $galleryImg.append(galleryHtml);
  } else if ($breakPointHolder === 'inline') {
    galleryHtmlConstructor(4);
    $galleryImg.append(galleryHtml);
  } else if ($breakPointHolder === 'block') {
    galleryHtmlConstructor(6);
    $galleryImg.append(galleryHtml);
  };
  
}

galleryListConstructor ();

$(window).ready( function() {
  $(window).on('resize', function () {
    if ($breakPointHolder === $('.js-media').css('display')) {
      return;
    } else {
      galleryListConstructor();
    }
  });
});



//function kisetListClick () {
//  
//  $('#gallery-arr-right').click(function(event) {
//    event.preventDefault();
//    if (galleryCurrentIndex === galleryLastIndex) {
//      galleryCurrentIndex = 0;
//      galleryListLoader();
//    } else {
//      galleryCurrentIndex += 1;
//      galleryListLoader();
//    }
//  });
//
//  $('#gallery-arr-left').click(function(event) {
//    event.preventDefault();
//    if (galleryCurrentIndex === 0) {
//      galleryCurrentIndex = galleryLastIndex;
//      galleryListLoader();
//    } else {
//      galleryCurrentIndex -= 1;
//      galleryListLoader();
//    }
//  });
//}
//kisetListClick();








