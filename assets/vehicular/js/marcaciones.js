//GTM Functions
function gtmEvents(event, category, action, label){
   return  window.dataLayer.push({
      'event': event,
      'category': category,
      'action': action,
      'label': label
   });
}

//Banner principal
document.getElementById('btnHome-cotiza').addEventListener('click', function(e){
   gtmEvents('virtualEvent','Seguro Vehicular','Botón: Cotiza Aquí','Banner Principal');
})

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

//Sección Planes
$(".calltoaction .plan-type").click(function(e){
   gtmEvents('virtualEvent','Seguro Vehicular','Botón: Cotizar un plan','Plan '+$(this).data("info"));
})

//Sección como funciona
$("#vertalleres").click(function(e){
   gtmEvents('virtualEvent','Seguro Vehicular','Botón: Ver Talleres Autorizados','Sección: Cómo Funciona');
});

//Sección Asesoría
$(".btn-appRimac a").click(function(e){
   gtmEvents('virtualEvent','Seguro Vehicular','Botón: Descarga APP – '+$(this).data("info"),'Sección: Estamos para ayudarte');
});


//Footer products
$('footer .product').find('a').click(function(e){
   gtmEvents('virtualEvent','Footer','Enlaces',$(this).data("info"));
});


//Footer social media
$('footer .social-media').find('a').click(function(e){
   gtmEvents('virtualEvent','Footer','Redes Sociales',$(this).data("info"));
});