$(function() {
  mobileNav();
  animate();
});



function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
  };


$(window).resize(function() {
  if($(window).width() > 640){
    //mentoringWideStart();
  } else {
    //mentoringNarrowStart();
  }

});

//show and hide elements
var main = function(){
  $('.article').click(function(){
      $('.description').hide();
      $('article').removeClass('current');


      $(this).addClass('current');
      $(this).children('.description').show();


  });
}
$(document).ready(main);
