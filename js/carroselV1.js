/*Função para as imagens efeito carrosel*/
$(function(){
	$("#carrosel").jCarouselLite({
		btnPrev : '#prev',
		btnNext : '#next',
		//auto    : 2000,
		//speed   : 2000,
		visible : 4,
        scroll : 1  // quantidade a ser movimentada por vez
	});
});





$(function(){
	
	$("#carrosel1").jCarouselLite({
		btnPrev : '#prev1',
		btnNext : '#next1',		
		visible : 4,
        scroll : 1  // quantidade a ser movimentada por vez
	});
});
$(function(){	
	$("#carrosel2").jCarouselLite({
		btnPrev : '#prev2',
		btnNext : '#next2',
		visible : 4,
        scroll : 1  // quantidade a ser movimentada por vez
	});
});

	 
/*Funcão para as imagens em miniatura*/
	var intervalId;
	var slidetime = 4500; // O TEMPO DE TRANSIÇÃO PARA A PROXIMA IMAGEM

$(document).ready(function() {
			
			//Comente esta linha para desativar auto-play
		intervalID = setInterval(cycleImage, slidetime);

	$(".imagemPrincipal .desc").show(); 
	$(".imagemPrincipal .bloco").animate({ opacity: 0.85 }, 1 );//Definir a opacidade
	
	//Clique e Passe eventos para lista de miniaturas
	$(".conteudoImagem ul li:first").addClass('active'); 
	$(".conteudoImagem ul li").click(function()
	{ 	
		//Definir Variáveis
		var imgAlt = $(this).find('img').attr("alt"); //Obter Alt Tag de Imagem
		var imgTitle = $(this).find('a').attr("href"); //Obter Principal URL da Imagem
		var imgId = "index.php?pagina=busca&acao=maisInformacoes&id="+$(this).find('a').attr("title"); //Obter Link para o anuncio
		var imgDesc = $(this).find('.bloco').html(); 	//Obter HTML do bloco
		var imgDescHeight = $(".imagemPrincipal").find('.bloco').height();	//Calcule a altura do bloco	
		
		if ($(this).is(".active")) {  //Se ele já está ativo, então ...
			return false; //Não clique através
		} else {
				//Animar o Teaser			
			$(".imagemPrincipal .bloco").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
				$(".imagemPrincipal .bloco").html(imgDesc).animate({ opacity: 0.85,	marginBottom: "0" }, 250 );
				$(".imagemPrincipal img").attr({ src: imgTitle , alt: imgAlt});
				$(".imagemPrincipal a").attr({ href: imgId});
			});
		}
		
		$(".conteudoImagem ul li").removeClass('active'); //Remover classe de "ativo" em todas as listas
		$(this).addClass('active');  	//adicionar classe de "ativo" nesta lista só
		return false;
		
	}) .hover(function(){
		$(this).addClass('hover');
		}, function() {
		$(this).removeClass('hover');
	});
			
	//Alternar Teaser
	$("a.collapse").click(function(){
		$(".imagemPrincipal .bloco").slideToggle();
		$("a.collapse").toggleClass("show");
	});	
	
	
	//Função para autoplay ciclismo de imagens 
	function cycleImage(){
    var onLastLi = $(".conteudoImagem ul li:last").hasClass("active");       
    var currentImage = $(".conteudoImagem ul li.active");    
    
    if(onLastLi){
      var nextImage = $(".conteudoImagem ul li:first");
    } else {
      var nextImage = $(".conteudoImagem ul li.active").next();
    }
    
    $(currentImage).removeClass("active");
    $(nextImage).addClass("active");    
		
		//Duplicar código para animação
		var imgAlt = $(nextImage).find('img').attr("alt");
		var imgTitle = $(nextImage).find('a').attr("href");
		var imgDesc = $(nextImage).find('.bloco').html();
		var imgDescHeight = $(".imagemPrincipal").find('.bloco').height();
					
		$(".imagemPrincipal .bloco").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
      $(".imagemPrincipal .bloco").html(imgDesc).animate({ opacity: 0.85,	marginBottom: "0" }, 250 );
      $(".imagemPrincipal img").attr({ src: imgTitle , alt: imgAlt});
		});
  };	
});// fim da Função