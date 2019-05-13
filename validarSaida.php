<?php 
	session_start();
	require('funcoes.php');
	require('conexao.php');
		
		error_reporting(0);
		
		$data = $_POST["Data"];	
		$valor = $_POST["Valor"];
		$desc = $_POST["Desc"];	
		
	
		
		if(strlen($data) == "" || strlen($data) < 10 ){
			alerta("Preencha a Data corretamente-Ex.DD/MM/AAAA!");
			voltar();
			exit;
		}
		else if(strlen($valor) <=0 ){
			alerta("Preencha o Valor corretamente!");
			voltar();
			exit;
		}
		else if(strlen($desc) == ""  ){
			alerta("Preencha o Descrição corretamente!");
			voltar();
			exit;
		}
		
		
		else{
		
			
		

			$num =0;
			if ($num > 0) { 
				//echo "Este usuario já esta cadastrado!";
				alerta("Erro!");
				voltar();
			}
			else 
			{
							
					
					$error[1] = "";
					// Verifica se o arquivo é uma imagem
					
					if (count($error) == 1) 
					{
						
						// Insere os dados no banco
						$sql = "INSERT INTO saida(data, valor, descricao) VALUES ('$data','$valor', '$desc')";
						$confirma = mysqli_query($conexao,$sql)or die("<p>Falha na execução </p>".mysql_error()); 	
						if (!$confirma)
						{
							//echo "Erro no cadastro! Verifique!<br /><a href='index.php?pagina=cadastrar&acao=usuarioForm'>Voltar</a>"; 	
							alerta("Erro no cadastro! Verifique!");
							voltar();
						}
						else
						{
							//echo "Cadastro realizado com sucesso!<br /><a href='index.php?pagina=cadastrar&acao=usuarioForm'>Voltar</a>";
							alerta("Cadastro realizado com sucesso!");
							voltarCadastro('index.php?pagina=inicio&acao=inicio');
						}
					}				
					// Se houver mensagens de erro, exibe-as
					if (count($error) > 1)
					{					
						foreach ($error as $erro) 
						{
							echo $erro . "<br />";
						}
					}
				
			}
		}
	
?>