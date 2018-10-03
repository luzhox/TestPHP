//GTM Functions
function gtmEvents(event, category, action, label){
   return  window.dataLayer.push({
      'event': event,
      'category': category,
      'action': action,
      'label': label
   });
}

//Menu principal
$('#menuPrincipal').find('a').click(function (e) {
   gtmEvents('virtualEvent','Menú Principal','Clic Elementos',$(this).data("info"));
})
$('#menuPrincipal2').find('a').click(function (e) {
   gtmEvents('virtualEvent','Menú Principal','Clic Elementos',$(this).data("info"));
})

//Menu Burguer
$('#menu').click(function(){
   if(!$(this).hasClass("active")){
      gtmEvents('virtualEvent','Menú Principal','Clic Elementos','Menú Burger');
   }
})

//Menu Burguer - categoria
$('.menu .categoria-boton').click(function (e) {
   gtmEvents('virtualEvent','Menú Burger','Clic Elementos',$(this).data("categoria"));
})

//Menu Burguer - categoria - subcategoria
$('.menu .categoriaprincipal').find('a').click(function (e) {
   gtmEvents('virtualEvent','Menú Burger','Clic Elementos',$(this).parent().parent().data("categoria") + " | "+ $(this).data("subcategoria"));
})

//Menu burguer Elemento - social media
$('.menu .social a').click(function (e) {
   gtmEvents('virtualEvent','Menú Burger','Redes Sociales',$(this).data("redes"));
})

//Menu secundario
$('#menu-nav a').click(function (e) {
   gtmEvents('virtualEvent','Seguro Vehicular','Menú Secundario',$(this).data("info"));
})

//Hero
$('#btnHome-productos').click(function () {
    gtmEvents('virtualEvent', 'Seguros de Vida', 'Sección: Banner Principal', 'Nuestros Productos');
 })
 $('#btn-verVideo').click(function () {
    gtmEvents('virtualEvent', 'Seguros de Vida', 'Sección: Banner Principal', 'Ver video');
 })
 
 //Productos
 $('.productos-tab').find('li').click(function(e){
    gtmEvents('virtualEvent', 'Seguros de Vida', 'Sección: Nuestros Productos', $(this)[0].innerText);
 })
 
 $('#productos .btn-large').click(function(e){
    gtmEvents('virtualEvent', 'Seguros de Vida', 'Seleccionar Plan', $(this).data('info'));
 })
 
 $('#productos .link-detalle').click(function(e){
    gtmEvents('virtualEvent', 'Seguros de Vida', 'Ver Detalle del Plan', $(this).data('info'));
 })

//Temas relacionados
$('#temasRelacionados .links').find('a').click(function(e){
    gtmEvents('virtualEvent','Seguros de Vida','Sección: Temas Relacionados',$(this)[0].innerText);
});

//Estas Listo
$('#asesorar .calltoaction').find('a').click(function(e){
    gtmEvents('virtualEvent','Seguros de Vida','Sección: Estás Listo',$(this)[0].innerText);
});

//Footer products
$('footer .product').find('a').click(function(e){
   gtmEvents('virtualEvent','Footer','Enlaces',$(this).data("info"));
});

//Footer social media
$('footer .social-media').find('a').click(function(e){
   gtmEvents('virtualEvent','Footer','Redes Sociales',$(this).data("info"));
});