<link rel="stylesheet" type="text/css" media="all" href="css/styles.css">
	
		<div id="login">
		<h1><label>Faça o registro de Entrada</label></h1><br />	
		<form name="login"   method="post" action="index.php?pagina=validarUsuario">
			<label>Data  </label><br />
			<input type="text" name="nome" id="nome" onkeypress="mascara(this,Metros)" /></br>
			<label>Valor  </label><br />
			<input type="password" name="sen" id="sen" onkeypress="mascara(this,Metros)" /></br>
			<label>Descrição*</label><br />
		    <textarea id="cpmensagem" name="cpmensagem" cols="55" rows="5" maxlength="500"></textarea>
			<input class="btnentrar" value="Cadastrar" type="submit"></br>
		    
		</form>
		<form name="novoUsuario"   method="post" action="index.php?pagina=cadastroUsuario">
		    <input class="btnNovo" value="Novo" type="submit">
		</form>
	</div>
	