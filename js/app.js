$(".phone-mask").mask("(999) 999-9999");

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
    $('#gallery-arr-left').add('#gallery-arr-right').show();
    galleryHtmlConstructor(1);
    $galleryImg.append(galleryHtml);
  } else {
    $('#gallery-arr-left').add('#gallery-arr-right').hide();
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




function kisetImgLoader () {
  $('.gallery-img').attr('src', kisetList[kisetCurrentIndex].image);
  $('.gallery-text').text(kisetList[kisetCurrentIndex].info);
//  $('#gallery-img').children('div').each(function () {
//  
//  
//  for ( var i; i < kisetList.length; i++ ) {
//    $('.gallery-img').attr('src', kisetList[i].image);
//  $('.gallery-text').text(kisetList[i].info);
//  }
//});
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
    clientsHtml += '<div class="clients-box"><img class="clients-img" src="' + clientsList[i].image + '"><div class="clients-text-box"><p class="clients-text">' + clientsList[i].info + '</p><p class="clients-name">' + clientsList[i].name + '</p></div></div>';
  };
  
}

//<div class="clients-box"><img class="clients-img" src="img/client01.png"><div class="clients-text-box"><p class="clients-text">some text some text some text some text some text</p><p class="clients-name">name name name name</p></div></div>



function clientsListConstructor () {
  
  $clientsImg.empty();
  $breakPointHolder2 = $('.js-media').css('display');
  if ($breakPointHolder2 === 'none') {
    $('#clients-arr-left').add('#clients-arr-right').show();
    clientsHtmlConstructor(1);
    $clientsImg.append(clientsHtml);
  } else if ($breakPointHolder2 === 'inline') {
    $('#clients-arr-left').add('#clients-arr-right').hide();
    clientsHtmlConstructor(2);
    $clientsImg.append(clientsHtml);
  } else if ($breakPointHolder2 === 'block') {
    $('#clients-arr-left').add('#clients-arr-right').hide();
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


function clientsImgLoader () {
  $('.clients-img').attr('src', clientsList[clientsCurrentIndex].image);
  $('.clients-text p').text(clientsList[clientsCurrentIndex].info);
  $('.clients-name').text(clientsList[clientsCurrentIndex].name);
  

}


function clientsListClick () {
  
  $('#clients-arr-right').click(function(event) {
    event.preventDefault();
    if (clientsCurrentIndex === clientsLastIndex) {
      clientsCurrentIndex = 0;
      clientsImgLoader();
    } else {
      clientsCurrentIndex += 1;
      clientsImgLoader();
    }
  });

  $('#clients-arr-left').click(function(event) {
    event.preventDefault();
    if (clientsCurrentIndex === 0) {
      clientsCurrentIndex = clientsLastIndex;
      clientsImgLoader();
    } else {
      clientsCurrentIndex -= 1;
      clientsImgLoader();
    }
  });
}
clientsListClick();







