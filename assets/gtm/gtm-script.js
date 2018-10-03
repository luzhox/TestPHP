  var styles = "@import url('http://homealt.sitiosrimacseguros.com/homealt/assets/gtm/gtm-viajes.css');";
  var newSS=document.createElement('link');
  newSS.rel='stylesheet';
  newSS.href='data:text/css,'+escape(styles);
  document.getElementsByTagName("head")[0].appendChild(newSS);


    $(window).scrollTop(0);

      $('.popup-viajando').animate({

    opacity: 1

  }, 100, function() {

    // Animation complete.

  });

$('.cerrar-popup-viajes').click(function(){

$('.popup-viajando').fadeOut();
$('.bgvi').fadeOut();
$('.bgvi').css('display','none');


})

 