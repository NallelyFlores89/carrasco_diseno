$(document).ready(function() {
	
	limpiaCamposForm();

	$("#cajaGrande, #fancyboxPortafolio, #sombra").hide();

	/*************** INICIO DE LA PÁGINA ********/

	$("#pinguino-verde, #esp").click(function(){
		$("#idioma").fadeOut(1000);
		cargaPaginaEsp();
	})

	$("#pinguino-amarillo, #ing").click(function(){
		$("#idioma").fadeOut(1000);
		cargaPaginaIng();
	})

	$("#inicio img").click(function(){
		location.reload();
	})


/*************** EFECTO APARECER/DESAPARECER ELEMENTOS CON EL SCROLL ********/

	var controller = $.superscrollorama();
	// controller.addTween('#pinguinos', TweenMax.from( $('#pinguinos'), .5, {css:{opacity: 0}}));
	controller.addTween('#guiaElementos1', TweenMax.from( $('#guiaElementos1'), .5, {css:{opacity: 0}}));
	controller.addTween('#guiaElementos2', TweenMax.from( $('#guiaElementos2'), .5, {css:{opacity: 0}}));
	controller.addTween('#guiaElementos3', TweenMax.from( $('#guiaElementos3'), .10, {css:{opacity: 0}}));
	controller.addTween('#homeElementos1', TweenMax.from( $('#homeElementos1'), .5, {css:{opacity: 0}}));
	controller.addTween('#homeElementos2', TweenMax.from( $('#homeElementos2'), .5, {css:{opacity: 0}}));
	controller.addTween('#quienes_somosElementos', TweenMax.from( $('#quienes_somosElementos'), .5, {css:{opacity: 0}}));
	controller.addTween('#clientesElementos1', TweenMax.from( $('#clientesElementos1'), .5, {css:{opacity: 0}}));
	controller.addTween('#clientesElementos2', TweenMax.from( $('#clientesElementos2'), .5, {css:{opacity: 0}}));
	controller.addTween('#clientesElementos3', TweenMax.from( $('#clientesElementos3'), .5, {css:{opacity: 0}}));
	controller.addTween('#clientesElementos4', TweenMax.from( $('#clientesElementos4'), .5, {css:{opacity: 0}}));
	controller.addTween('#clientesElementos5', TweenMax.from( $('#clientesElementos5'), .5, {css:{opacity: 0}}));
	controller.addTween('#clientes-title', TweenMax.from( $('#clientes-title'), .5, {css:{opacity: 0}}));


/*************** MOSTRAR MUROS EN LA SECCION PORTAFOLIO ********/

	$( "#impresos-txt" ).click(function() {
		$(this).addClass("txtPortafolio-print");
		$("#muroImpresos, #muroImpresos-1, #muroImpresos-2").show();
		$("#muroLogo, #muroRetoques, #muroWeb, #muroImpresos-3").hide();
		$("#retoques-txt, #web-txt, #logo-txt").removeClass("txtPortafolio-retoques txtPortafolio-web txtPortafolio-logos");
	});

	$( "#retoques-txt" ).click(function() {
		$(this).addClass( "txtPortafolio-retoques");
		$("#muroRetoques, #murotoque-1, #murotoque-2").show();
		$("#muroLogo, #muroWeb, #muroImpresos, #murotoque-3").hide();
		$("#impresos-txt, #web-txt, #logo-txt").removeClass("txtPortafolio-print txtPortafolio-web txtPortafolio-logos");
		
	});

	$( "#web-txt" ).click(function() {
		$(this).addClass( "txtPortafolio-web");
		$("#muroWeb, #muroweb-1, #muroweb-2").show();
		$("#muroLogo, #muroRetoques, #muroImpresos, #muroweb-3").hide();
		$("#retoques-txt, #impresos-txt, #logo-txt").removeClass("txtPortafolio-retoques txtPortafolio-print txtPortafolio-logos");
		
	});

	$( "#logo-txt" ).click(function() {
		$(this).addClass( "txtPortafolio-logos");
		$("#muroWeb, #muroRetoques, #muroImpresos, #murologo-3").hide();
		$("#muroLogo, #murologo-1, #murologo-1").show();
		$("#retoques-txt, #web-txt, #impresos-txt").removeClass("txtPortafolio-retoques txtPortafolio-web txtPortafolio-print");
	});

	/*************** NAVEGACION DE LOS MUROS ********/

	$("#nav-logo ul li ").click(function(){
		muestra = $(this).children("a").attr("href");
		switch(muestra){
			case "murologo-3":
				$("#murologo-1, #murologo-2").hide();
				$(".muro").addClass('unaLinea')
				$("#murologo-3").show();
				break;
			case "murologo-1":
				$("#murologo-3").hide();
				$(".muro").removeClass('unaLinea')
				$("#murologo-1, #murologo-2").show();
				break;
		}
	})	


	$("#nav-retoques ul li ").click(function(){
		muestra = $(this).children("a").attr("href");
		switch(muestra){
			case "murotoque-3":
				$("#murotoque-1, #murotoque-2").hide();
				$("#murotoque-3").show();
				$(".muro").addClass('unaLinea')
				break;
			case "murotoque-1":
				$("#murotoque-3").hide();
				$("#murotoque-1, #murotoque-2").show();
				$(".muro").removeClass('unaLinea')
				break;
		}
	})	
	$("#nav-impresos ul li ").click(function(){
		muestra = $(this).children("a").attr("href");
		switch(muestra){
			case "muroImpresos-3":
				$("#muroImpresos-1, #muroImpresos-2").hide();
				$("#muroImpresos-3").show();
				$(".muro").addClass('unaLinea')
				break;
			case "muroImpresos-1":
				$("#muroImpresos-3").hide();
				$("#muroImpresos-1, #muroImpresos-2").show();
				$(".muro").removeClass('unaLinea')
				break;
		}
	})	
	$("#nav-web ul li ").click(function(){
		muestra = $(this).children("a").attr("href");
		switch(muestra){
			case "muroweb-3":
				$("#muroweb-1, #muroweb-2").hide();
				$("#muroweb-3").show();
				$(".muro").addClass('unaLinea')
				break;
			case "muroweb-1":
				$("#muroweb-3").hide();
				$(".muro").removeClass('unaLinea')
				$("#muroweb-1, #muroweb-2").show();
				break;
		}
	})

	$(".efectoSombra").hover(function() {
			$( this ).css({"opacity":"0"});
	})
	$(".efectoSombra").mouseout(function() {
			$( this ).css({"opacity":"0.6"});
	})



    /*************** EFECTO  SCROLL PÁGINA  ********/

    $('#irArriba').on('click',function(e){
        //prevenir en comportamiento predeterminado del enlace
        e.preventDefault();
        //obtenemos el id del elemento en el que debemos posicionarnos
        var strAncla=$(this).attr('href');
	    //utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
        $('body,html').stop(true,true).animate({
            //realizamos la animacion hacia el ancla
            scrollTop: $(strAncla).offset().top
        },1000);
	});

    /*************** EFECTO  FANCY BOX PARA LA SECCION PORTAFOLIO ********/

 	$(".muro td").click(function(){
 		$('#sombra').addClass('sombra').fadeIn(1000);
 		fondo =$(this).css('background-image');

 		if($(this).hasClass('fancy600')){
 			$("#fancyboxPortafolio").addClass('fancyboxPortafolio600').removeClass('fancyboxPortafolio400 fancyboxPortafolio800').show();
			a=$(this).children("a").attr("href");
	 		$("#fancyboxPortafolio").css({'background-image':fondo});	 		
 		}else{
 			if($(this).hasClass('retoq')){
	 			a=0;
		 		$("#fancyboxPortafolio").css({
		 			'background-image':fondo+','+'url('+$(this).children("a").attr("href")+')',
		 		});
				$("#fancyboxPortafolio").removeClass('fancyboxPortafolio400 fancyboxPortafolio600').addClass('fancyboxPortafolio800').show();
 			}else{
	 			a=0;
	 			$("#fancyboxPortafolio").css({'background-image':fondo});
 				$("#fancyboxPortafolio").addClass('fancyboxPortafolio400').removeClass('fancyboxPortafolio800 fancyboxPortafolio600').show()
 			}

 		}
 		$("#fancyboxPortafolio").click(function(){
 			if(a != 0 && a != ""){
 				window.open(a,null,null,true);
 			}
		})
 	})

 	/*************** EFECTO  DISABLED DE LA PAGINA CUANDO SE ABRE UN POPUP ********/

 	$("#sombra").click(function(){
 		$("#sombra").removeClass('sombra').hide();
 		$("#tform").html("");
 		$("#contacto form").css({
 			"padding":"0",
 			"border":"none",
 		});
 		$("#fancyboxPortafolio").removeClass('fancyboxPortafolio400').removeClass('fancyboxPortafolio600').removeClass('fancyboxPortafolio800').hide();
 	})

});

/*************** LIMPIAR LOS CAMPOS DEL FORMULARIO ********/

function limpiaCamposForm(){
	$("#nombre, #email, #tel, #mensaje").val("");
}

/*************** IDIOMAS DE LA PÁGINA  ********/
function cargaPaginaEsp(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$("#cajaGrande").fadeIn(3000);
	$("#inicio img").hide().fadeIn(2000);
	$("#muroLogo, #muroImpresos, #muroWeb").hide();
	$("#retoques-txt").addClass("txtPortafolio-retoques");

	/*************** MUESTRA FORMULARIO PARA CONTACTO ********/

	$("#pinguino-escribeme").click(function(){
		$("#tform").html('<tbody>'+
						'<tr>'+
							'<td class="campoIzq"><span id="snombre">nombre</span></td>'+
							'<td><br><input id="nombre" type="text" name="nombre"></td>'+
						'</tr>'+
						'<tr>'+
							'<td class="campoIzq"><span id="semail">email</span></td>'+
							'<td><br><input id="email" type="email" name="email"></td>'+
						'</tr>'+
						'<tr>'+
							'<td  class="campoIzq"><span id="stel">tel</span></td>'+
							'<td><br><input id="tel" type="text" name="tel"></td>'+
						'</tr>'+
						'<tr>'+
							'<td  class="campoIzq"><span id="smensaje">mensaje</span></td>'+
							'<td><br><textarea id="mensaje" name="mensaje"></textarea></td>'+
						'</tr>'+
						'<tr colspan="2">'+
							'<td></td>'+
							'<td>'+
								'<input class="botonF" id="limpiarBtn" type="button" value="limpiar" onclick="limpiaCamposForm()">'+
								'<input class="botonF" id="enviarBtn" type="submit" value="enviar">'+
							'</td>'+
						'</tr>'+
					'</tbody>'
		);
		$("#contacto form").css({
			"background-color": "#fff",
			"font-size": "40px",
			"padding": "10px",
			"z-index": "20",
			"width":"600px",
			"margin-left": "336px",
		})
		limpiaCamposForm();
		$("#formC").show();
 		$('#sombra').addClass('sombra').fadeIn(1000);
	})
}

function cargaPaginaIng(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$("#cajaGrande").fadeIn(3000);
	$("#inicio img").hide().fadeIn(2000);
	$("#muroLogo, #muroImpresos, #muroWeb").hide();
	$("#retoques-txt").addClass("txtPortafolio-retoques");

	$("#guia-hola").html("hello!");
	$("#guia-somos").html("welcome, <br> we are...");
	$("#guia-instrucciones").html("use your MOUSE to scrolldown");
	$("#guia-disfruta").html("enjoy the trip!");

	$("#home-title").html("the epicenter of ideas concepts, and creative solutions");

	cadena = "<p class='fuente-arial' id='homep1'>CSD Carrasco Diseño is a creative consulting firm, for the first time links the creative design to the growth of your company or business.</p>"+
	"<p class='fuente-arial' id='homep2'>Our creative team work with our clients to redefine their entire business strategy inside out.</p>"+
	"<p class='fuente-arial' id='homep3'>We combine creative talent with expertise in growth strategy to redefine your corporate image, where for the first step we discovered the heart of your company or business and localize its growth opportunities, and continued to implement parallel execution of a marketing strategy aligned with websites, graphics and videos</p>";

	$("#home-descripcion").html(cadena);

	$("#homep1").css({"margin-top":"45px"})

	$("#quienes-title").html("what we do");
	$("#quienes-descripcion p").html("We discover, visualize, create and inspire through branding. We create or redesign  the"+
		" new image of your company or business, graphically speaking, offering and array of creative solutions.");
	
	$("#quienes-lista1").html("<li>Strategic Growth Brand</li>"+
		"<li>Interactive Design</li>"+
		"<li>Software Development</li>"+
		"<li>User Experience Design</li>"+
		"<li>Motion Graphics & 3D</li>"+
		"<li>Development and Website Design</li>"
	);

	$("#cajaTxtPortafolio").css('margin-left','55px');
	$("#retoques-txt").css('margin-left','24px');
	$("#logo-txt").addClass("logo-txt2");

	$("#impresos-txt").html("print");
	$("#retoques-txt").html("retouch");
	$("#logo-txt").html("branding");

	$("#quienes-lista2").html("<li>Corporate Image Design</li>"+
		"<li>Ideas and concepts</li>");

	$("#clientes-title").html("our customers and friends");

	$("#contacto h1").html("Contact");
	$("#enviarBtn").val("send");
	$("#pinguino-escribeme").attr("src", "img/elementos/6LLAMAMEingles.png");
	$("#pinguino-llamame").attr("src", "img/elementos/6LLAMAMEingles-2.png");

	$("#pinguino-escribeme").click(function(){
		$("#tform").html('<tbody>'+
						'<tr>'+
							'<td class="campoIzq"><span id="snombre">name</span></td>'+
							'<td><br><input id="nombre" type="text" name="nombre"></td>'+
						'</tr>'+
						'<tr>'+
							'<td class="campoIzq"><span id="semail">email</span></td>'+
							'<td><br><input id="email" type="email" name="email"></td>'+
						'</tr>'+
						'<tr>'+
							'<td  class="campoIzq"><span id="stel">phone</span></td>'+
							'<td><br><input id="tel" type="text" name="tel"></td>'+
						'</tr>'+
						'<tr>'+
							'<td  class="campoIzq"><span id="smensaje">menssage</span></td>'+
							'<td><br><textarea id="mensaje" name="mensaje"></textarea></td>'+
						'</tr>'+
						'<tr colspan="2">'+
							'<td></td>'+
							'<td>'+
								'<input class="botonF" id="limpiarBtn" type="button" value="clean" onclick="limpiaCamposForm()">'+
								'<input class="botonF" id="enviarBtn" type="submit" value="send">'+
							'</td>'+
						'</tr>'+
					'</tbody>'
		);
		$("#contacto form").css({
			"background-color": "#fff",
			"font-size": "40px",
			"padding": "10px",
			"z-index": "20",
			"width":"600px",
			"margin-left": "21%",
		})
		limpiaCamposForm();
		$("#formC").show();
 		$('#sombra').addClass('sombra').fadeIn(1000);
	})
}