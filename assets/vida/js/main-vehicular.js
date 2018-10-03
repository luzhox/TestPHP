$(document).ready(function () {
   //Carousel
   addCarousel("porqueVida", 0, 2, 3, false);
   addCarousel("productos", 0, 2, 3, false);
   $(".content-cat").not('#catBC').css({display:'none',marginTop:'50px',opacity:0});
   heightCard('catBC');
   addCarousel("exclusiones", 0, 3, 6, false);

   //Filter carousel products
   $('.productos-tab').find('li').click(function () {
      var idContentCat = $(this).data("carousel");
      $('.productos-tab').find('li').removeClass("active");
      $(this).addClass("active");
      $("#" + idContentCat).fadeIn(100).animate({marginTop: '0',opacity:'1'}, 800);
      $(".content-cat").not('#' + idContentCat).css({display:'none',marginTop:'50px',opacity:0});
      heightCard(idContentCat);
      if (window.matchMedia("(max-width: 601px)").matches) {
         switch (idContentCat) {
            case 'catAC':
               $('#productos .productos-tab ul li').css('transform', 'translateX(0%)');
               break;
            case 'catBC':
               $('#productos .productos-tab ul li').css('transform', 'translateX(-70%)');
               break;
            case 'catCC':
               $('#productos .productos-tab ul li').css('transform', 'translateX(-160%)');
               break;
         }
      }
   })

   //Hero
   $('#btn-verVideo').click(function () {
      $('.modalvehicularfix').fadeIn('fast');
   })
   $('.modalvehicularfix').click(function () {
      $('.modalvehicularfix').fadeOut('fast');
   })
   $('.cerrar-modal').click(function () {
      $('.modalvehicularfix').fadeOut('fast')
   })
   $('#btnHome-productos').click(function () {
      document.getElementById('secProductos').scrollIntoView({block: "start", behavior: "smooth"});
   })

   //Menu
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

   //Asesorar Event
   $('#temasRelacionados .title__principal').click(function () {
      $('.link-container').slideToggle();
      $('.title__arrow-down').toggleClass('rotate');
   });
})

function heightCard(element) {
   var mayorHeight = 0;
   NodeList.prototype.forEach = Array.prototype.forEach;
   document.querySelectorAll('#' + element + ' .item__body').forEach(function (el) {
      if (el.offsetHeight > mayorHeight) {
         mayorHeight = el.offsetHeight;
      }
   })
   document.querySelectorAll('#' + element + ' .item__body').forEach(function (el) {
      el.style.height = mayorHeight + "px";
   })
   var mayorHeightHead = 0;
   NodeList.prototype.forEach = Array.prototype.forEach;
   document.querySelectorAll('#' + element + ' .item__head').forEach(function (el) {
      if (el.offsetHeight > mayorHeightHead) {
         mayorHeightHead = el.offsetHeight;
      }
   })
   document.querySelectorAll('#' + element + ' .item__head').forEach(function (el) {
      el.style.height = mayorHeightHead + "px";
   })
}

//Functions
function addCarousel(element, index, mdItems, lgItems, mover) {
   $("#" + element + " .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      lazyLoad: true,
      mouseDrag: mover,
      startPosition: index,
      responsive: {
         0: {
            items: 1,
            mouseDrag: true
         },
         600: {
            items: mdItems,
            mouseDrag: true
         },
         1000: {
            items: lgItems
         }
      }
   });
}


