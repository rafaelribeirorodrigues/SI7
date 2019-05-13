<link rel="stylesheet" type="text/css" href="css/infoV2.css"/>

<?php
include("conexao.php");
$conexao = mysqli_connect("localhost", "root", "", "controle");
				
			$sql = "select sum(valor) as 'valor' from entrada";
			$resultSql = mysqli_query($conexao, $sql) ;
			$resultProd = mysqli_fetch_object($resultSql);
			$valorEntrada = $resultProd->valor;
			echo"
				<div id='info'>									
					<p><span class='sitio'>".Entrada."</span></p>				
					<div class='endereco'>
						<p>
							
							<span class='cor'>VALOR R$</span> <span class='corPreco'>".$valorEntrada." </span><br />
							
						</p>
					</div>					
				</div>
			";
			$sql = "select sum(valor) as 'valor' from saida";
			$resultSql = mysqli_query($conexao, $sql) ;
			$resultProd = mysqli_fetch_object($resultSql);
			$valorSaida = $resultProd->valor;
			$total = $valorEntrada - $valorSaida;
			echo"
				<div id='info'>									
					<p><span class='sitio'>".Saida."</span></p>				
					<div class='endereco'>
						<p>
							
							<span class='cor'>VALOR R$</span> <span class='corPreco'>".$valorSaida." </span><br />
							
						</p>
					</div>					
				</div>
			";			
			echo"
				<div id='info'>									
					<p><span class='sitio'>".Resultado."</span></p>				
					<div class='endereco'>
						<p>
							
							<span class='cor'>VALOR Liquido na conta R$</span> <span class='corPreco'>".$total." </span><br />
							
						</p>
					</div>					
				</div>
			";	
			
			
			
		?>