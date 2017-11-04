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
var kisetCurrentIndex = 0;
var kisetLastIndex = kisetList.length - 1;
var $breakPointHolder = $('.js-media').css('display');

function galleryHtmlConstructor (number) {
  
  galleryHtml='';   
  for ( var i= 0 ; i < number ; i++ ) {
    galleryHtml += '<div class="gallery-box"><img class="gallery-img" src="' + kisetList[i].image + '"><p class="gallery-text">' + kisetList[i].info + '</p></div>';
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

//              <div class="gallery-box">
//                <img class="gallery-img" src="img/kiset01.png">
//                <p class="gallery-text">описание кисета. ну что тут сказать, он хорош!</p>
//              </div>
//              <div class="gallery-box">
//                <img class="gallery-img" src="img/kiset01.png">
//                <p class="gallery-text">описание кисета. ну что тут сказать, он хорош!</p>
//              </div>


function kisetImgLoader () {
  $('.gallery-img').attr('src', kisetList[kisetCurrentIndex].image);
  $('.gallery-text').text(kisetList[kisetCurrentIndex].info);
};



function kisetListClick () {
  
  $('#gallery-arr-right').click(function(event) {
    event.preventDefault();
    if (kisetCurrentIndex === kisetLastIndex) {
      kisetCurrentIndex = 0;
      kisetImgLoader();
    } else {
      kisetCurrentIndex += 1;
      kisetImgLoader();
    }
  });

  $('#gallery-arr-left').click(function(event) {
    event.preventDefault();
    if (kisetCurrentIndex === 0) {
      kisetCurrentIndex = kisetLastIndex;
      kisetImgLoader();
    } else {
      kisetCurrentIndex -= 1;
      kisetImgLoader();
    }
  });
}
kisetListClick();


var $clientsImg = $('#clients-img');
var clientsHtml = '';
var clientsCurrentIndex = 0;
var clientsLastIndex = clientsList.length - 1;
var $breakPointHolder2 = $('.js-media').css('display');


function clientsHtmlConstructor (number) {
  
  clientsHtml='';   
  for ( var i= 0 ; i < number ; i++ ) {
    clientsHtml += '<div class="clients-box"><img class="gallery-img" src="' + clientsList[i].image + '"><div class="clients-text"><p>"' + clientsList[i].info + '" <strong>' + clientsList[i].name + '</strong></p></div></div>';
  };
  
}



function clientsListConstructor () {
  
  $clientsImg.empty();
  $breakPointHolder2 = $('.js-media').css('display');
  if ($breakPointHolder2 === 'none') {
    clientsHtmlConstructor(1);
    $clientsImg.append(clientsHtml);
  } else if ($breakPointHolder2 === 'inline') {
    clientsHtmlConstructor(2);
    $clientsImg.append(clientsHtml);
  } else if ($breakPointHolder2 === 'block') {
    clientsHtmlConstructor(3);
    $clientsImg.append(clientsHtml);
  };
  
}



clientsListConstructor();


$(window).ready( function() {
  $(window).on('resize', function () {
    if ($breakPointHolder2 === $('.js-media').css('display')) {
      return;
    } else {

      clientsListConstructor();
    }
  });
});


              



