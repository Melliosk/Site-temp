//-----------------
//
//-----------------
$(function() {
  mobileNav();
  animate();
});
//---End----------

//-----------------
//
//-----------------

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
  };

$(window).resize(function() {
  if($(window).width() > 640){

  } else {
    
  }

});

//-----------------
//animate sections
//-----------------
function animate() {
 var status = $('a[href^="#"]');

  $(status).on('click', function(e){
      e.preventDefault();

   var href= $(this).attr('href');

   if (!$(this).hasClass('act')) {

    $(status).removeClass('act');
  }
  $(this).addClass('act');

  if(!$(href).hasClass('open')) {

    $('.container.open').fadeOut(600).removeClass('open');
    $(href).fadeIn(500).addClass('open');
  }

});
}
//-----End---------
