window.onload = function () {
  $('#menu').click(function () {
     $('.menu').toggleClass('menuactivo');
     $('.sanguche').toggleClass('active');
     $('.landing-content').toggleClass('menuactivo2')
  })
  $("#personas").click(function () {
     $('#personas').toggleClass('active');
     $('.personas').slideToggle();
  })
  $("#empresas").click(function () {
     $('#empresas').toggleClass('active');
     $('.empresas').slideToggle();
  })
  $("#contactanos").click(function () {
     $('#contactanos').toggleClass('active');
     $('.contactanos').slideToggle();
  })


  addCarousel("planes", 1, 3, false);

  addCarousel("clientes", 0, 3, true);
  addCarousel("comofunciona", 0, 4, false);
  
  
  
  

  var mayorHeight = 0;
  NodeList.prototype.forEach = Array.prototype.forEach;
  document.querySelectorAll('#planes .item__body').forEach(function (el) {
     if (el.offsetHeight > mayorHeight) {
        mayorHeight = el.offsetHeight;
     }
  })
  document.querySelectorAll('#planes .item__body').forEach(function (el) {
     el.style.height = mayorHeight + "px";
  })




var controlArriba = $(".menu-fix");
var scrollLink = $('.scroll');
$(function () {
  $(window).scroll(function () {
     if ($(window).scrollTop() > 140) {
        controlArriba.addClass('menufixeado');
     } else if ($(window).scrollTop() < 490) {
        controlArriba.removeClass('menufixeado');
     }
  });
});
$('button#vertalleres').click(function () {
  $('.modalvehicularfix').fadeIn('fast');
})
$('.modalvehicularfix').click(function () {
  $('.modalvehicularfix').fadeOut('fast');
})
$('.cerrar-modal').click(function () {
  $('.modalvehicularfix').fadeOut('fast')
})
scrollLink.click(function (e) {
  e.preventDefault();
  $('body,html').animate({
     scrollTop: $(this.hash).offset().top
  }, 1000);
});
$(window).scroll(function () {
  var scrollbarLocation = $(this).scrollTop();
  scrollLink.each(function () {
     var sectionOffset = $(this.hash).offset().top - 120;
     if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('activo');
        $(this).parent().siblings().removeClass('activo');
     }
  })
})

//Functions

}

function addCarousel(element, index, number, mover) {
  $("#" + element + " .owl-carousel").owlCarousel({
     loop: false,
     margin: 10,
     nav: false,
     mouseDrag: mover,
     startPosition: index,
     responsive: {
        0: {
           items: 1,
           mouseDrag: true
        },
        600: {
           items: 2,
           mouseDrag: true
        },
        1000: {
           items: number
        }
     }
  });
  }