<?php
	$acao = $_REQUEST['acao'];
	$pagina = $_REQUEST['pagina'];

	  if ($pagina == 'formulario')
	{
		if($acao == 'formulario')
		{
			require('formularioContato.php');
		}
	}
	else if($pagina == 'empresa')
	{
		if($acao == 'empresa')
		{
			require('empresa.html');
		}
	}
	
	else{
		if($acao == 'inicio')
		{
			require('paginaPrincipal.php');
		}
	}
?>