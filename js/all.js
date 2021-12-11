$(document).ready(function(){
    $('.chart-filter>li>a').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).parent().find('ul').slideToggle();
      $(this).parent().siblings().find('ul').slideUp();
    });
});