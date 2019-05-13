

<!DOCTYPE html>
<html lang="pt-br">
	<head>
	
		<meta charset="utf-8" />
		<title>Controle das Finanças</title>
		<meta name="GOOGLEBOT" content="index,follow" />
		<meta name="robots" content="all" />
		<meta name="RATING" content="general" />
		<meta name="language" content="pt-br" />
		
		
		
		<link rel="stylesheet" type="text/css" href="css/estiloV2.css" />
		<link rel="stylesheet" type="text/css" href="css/resete.css" />
		
		<link rel="stylesheet" type="text/css" href="css/informacao.css"/>		

		
		<script type="text/javascript" src="js/jqueryV1-1.9.1.min.js"></script>
		<script type="text/javascript" src="funcoesV1.js"></script>
		<script type="text/javascript" src="js/validarV1.js"></script>
		
	</head>
	<body>

	    <div id="geral">			
		    <header id="topo"><a href="index.php?pagina=inicio&acao=inicio">
				<?php
					require('header.php');
				?>
						
			
		    </header>			
			<nav id="menu">
				<ul>
					<li><a href="index.php?pagina=inicio&acao=inicio">In&iacute;cio</a></li>
					<li><a href="index.php?pagina=formularioEntrada&acao=formularioEntrada">Registro de Entrada</a></li>
					
					<li><a href="index.php?pagina=formularioSaida&acao=formularioSaida">Registro de Saída</a></li>
					<li><a href="index.php?pagina=formularioRelatorio&acao=formularioRelatorio">Resumo das conta</a></li>
				</ul>
			</nav>
			<section id="conteudo">
				<?php
				    error_reporting(E_WARNING|E_ERROR);
					$pagina = $_REQUEST['pagina'];
						
					if($pagina == "inicio")						
						require('paginaPrincipalV1.php');	
					else if($pagina == "formularioEntrada")						
						require('formularioEntrada.php');
					else if($pagina == "formularioSaida")						
						require('formularioSaida.php');
					else if($pagina == "formularioRelatorio")						
						require('formularioRelatorio.php');
					else if($pagina == "validarEntrada")
					    require('validarEntrada.php');  
					else if($pagina == "validarSaida")
					    require('validarSaida.php');  
							 
				?>
			</section>			 
					 
			<footer id="rodape">
				<div id="mapaSite">
					<div class="mapa">
						<h1><a href="index.php?pagina=inicio">Inicio</a></h1>
					</div>
					
					
									
				</div>
			 </footer>
			 <div class="faixaRodape">
				<p>COPYRIGHT 2019-TODOS OS DIREITOS RESERVADOS</p>			
			 </div>			 
	    </div>
	</body>
</html>