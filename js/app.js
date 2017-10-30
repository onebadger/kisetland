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
var $breakPoint = $('.js-media');

function galleryHtmlConstructor () {
  
  if ($breakPoint.css('display') === 'none') {
    
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex].info;
    galleryHtml += '</p></div>';
    
    $galleryImg.empty().append(galleryHtml);
  } else if ($breakPoint.css('display') === 'inline') {
    
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 1].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 1].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 2].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 2].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 3].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 3].info;
    galleryHtml += '</p></div>';

    $galleryImg.empty().append(galleryHtml);
  } else if ($breakPoint.css('display') === 'block') {
    
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 1].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 1].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 2].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 2].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 3].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 3].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 4].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 4].info;
    galleryHtml += '</p></div>';
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="';
    galleryHtml += kisetList[galleryCurrentIndex + 5].image;
    galleryHtml += '"><p id="gallery-text" class="gallery-text">';
    galleryHtml += kisetList[galleryCurrentIndex + 5].info;
    galleryHtml += '</p></div>'; 
    
    $galleryImg.empty().append(galleryHtml);
  }
}



galleryHtmlConstructor ();




function kisetListClick () {
  
  $('#gallery-arr-right').click(function(event) {
    event.preventDefault();
    if (galleryCurrentIndex === galleryLastIndex) {
      galleryCurrentIndex = 0;
      galleryListLoader();
    } else {
      galleryCurrentIndex += 1;
      galleryListLoader();
    }
  });

  $('#gallery-arr-left').click(function(event) {
    event.preventDefault();
    if (galleryCurrentIndex === 0) {
      galleryCurrentIndex = galleryLastIndex;
      galleryListLoader();
    } else {
      galleryCurrentIndex -= 1;
      galleryListLoader();
    }
  });
}
kisetListClick();








