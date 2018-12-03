$(document).ready(function(){
	
// SIDENAV - Item seleccionado 	



$(".side-nav .item_principal").on('click', function(){
	
	$(".side-nav .item_principal").each(function() {
		
		
		
 		 $( this ).removeClass( "seleccionado" ).find('.fa').removeClass('rotado');
		  $(this).find('.sub_nav_mobile').slideUp(250); 
		 
		/*
		 if( $(this).hasClass('seleccionado') ) {
		 
		 $(this).find('.sub_nav_mobile').slideUp(250); 
		 
		 }*/
	
	
	});
	

		$(this).addClass('seleccionado').find('.fa').addClass('rotado');
		$(this).find('.sub_nav_mobile').slideDown(250);
	
	});

// Activar checkbox Indeterminado
$('.indeterminate-checkbox').prop('indeterminate', true);

// Mostrar Dropdown de filtros del buscador principal
$("#mostrar_filtros").on('click',function(){
	
	$('.box_filtros').slideToggle(250);
	
	})

// Boton con efecto de cargando  
$("#btn_importar").on('click', function(){
	
	var spinner = $('<span class="fa fa-spinner fa-pulse fa-fw fa_right_10"></span>');
	
	if( !$(this).hasClass('disabled'))
	$(this).append( spinner ).addClass('disabled');
	
	})


	
	})// end document ready