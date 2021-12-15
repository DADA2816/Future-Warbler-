$(document).ready(function(){
  $('.font-s').click(function (e) { 
    $('.news-content .article p').css('font-size','14px');
  });

  $('.font-m').click(function (e) { 
    $('.news-content .article p').css('font-size','18px');
  });

  $('.font-b').click(function (e) { 
    $('.news-content .article p').css('font-size','20px');
  });

});