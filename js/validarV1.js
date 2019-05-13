	//função para tabela cidade

function validarCidade(){		
	if (document.cadastroCidade.cidDescricao.value == "" )
		{
			alert("O campo cidade esta vazio!");
			document.cadastroCidade.cidDescricao.focus();
			return false;
		}		
	return true;
}
	
//função para tabela Proprietario

function validarProprietario(){		
	if (document.cadastroProprietario.cpnome.value == "" )
		{
			alert("O campo nome esta vazio!");
			document.cadastroProprietario.cpnome.focus();
			return false;
		}
	if(document.cadastroProprietario.cidCodigo.value=="")
	{
		alert("Preencha o campo cidade corretamente! ");
		document.cadastroProprietario.cidCodigo.focus();
		return false;
	}
	if(document.cadastroProprietario.cpcpf.value == "" || document.cadastroProprietario.cpcpf.value.length < 11)
	{
		alert("Preencha o campo CPF completo corretamente! ");
		document.cadastroProprietario.cpcpf.focus();
		return false;
	}	
	if(document.cadastroProprietario.cprg.value=="" || document.cadastroProprietario.cprg.value.length < 4)
	{
		alert("Preencha o campo RG completo corretamente! ");
		document.cadastroProprietario.cprg.focus();
		return false;
	}
	if(document.cadastroProprietario.cptelefone.value=="")
	{
		alert("Preencha o campo Telefone corretamente! ");
		document.cadastroProprietario.cptelefone.focus();
		return false;
	}
	
	if(document.cadastroProprietario.cpemail.value=="" || document.cadastroProprietario.cpemail.value.indexOf('@')==-1 || document.cadastroProprietario.cpemail.value.indexOf('.')==-1 )
	{
		alert("Preencha o campo e-mail corretamente! ");
		document.cadastroProprietario.cpemail.focus();
		return false;
	}	
		
	return true;

	}
	
//função para tabela bairro

function validarBairro(){		
	if (document.cadastroBairro.bairroDescricao .value == "" )
		{
			alert("O campo Bairro esta vazio!");
			document.cadastroBairro.bairroDescricao .focus();
			return false;
		}		
	return true;
}

function validarUsuario(){
	if(document.cadastroUsuario.cpnome.value == "")
	{
		alert("O campo Nome esta vazio!");
		document.cadastroUsuario.cpnome.focus();
		return false;
	}
	if(document.cadastroUsuario.cplogin.value == "")
	{
		alert("O campo Login esta vazio!");
		document.cadastroUsuario.cplogin.focus();
		return false;
	}
	if(document.cadastroUsuario.cpsenha == "")
	{
		alert("O campo Senha esta vazio!");
		document.cadastroUsuario.cpsenha.focus();
		return false;
	}

}

//validação pro formulario	
function validarFormulario()
{
	if(document.formulario.cpnome.value == "" && document.formulario.cpnome.value < 5)
	{
		alert("Preencha o campo nome corretamente!")
		document.formulario.cpnome.focus();
		return false;
	}
	if(document.formulario.cpemail.value == "")
	{
		alert("O campo Email esta vazio!")
		document.formulario.cpemail.focus();
		return false;
	}
	if(document.formulario.cptelefone.value == ""  )
	{
		alert("Preencha corretamente o campo Telefone!")
		document.formulario.cptelefone.focus();
		return false;
	}
	if(document.formulario.cpmotivo.value == "")
	{
		alert("O campo Motivo esta vazio!")
		document.formulario.cpmotivo.focus();
		return false;
	}
	if(document.formulario.cpmensagem.value == "")
	{
		alert("O campo Mensagem esta vazio!")
		document.formulario.cpmensagem.focus();
		return false;
	}
	return true;
}

//validação do formulario Contato
function validarFormularioContato()
{
	if(document.formularioContato.cpnome.value == "" || document.formularioContato.cpnome.value < 5)
	{
		alert("Preencha o campo nome corretamente!")
		document.formularioContato.cpnome.focus();
		return false;
	}
	if(document.formularioContato.cpemail.value == "")
	{
		alert("O campo Email esta vazio!")
		document.formularioContato.cpemail.focus();
		return false;
	}
	if(document.formularioContato.cptelefone.value == "" && document.formularioContato.cptelefone.value < 13)
	{
		alert("O campo Telefone esta vazio!")
		document.formularioContato.cptelefone.focus();
		return false;
	}
	if(document.formularioContato.cpmotivo.value == "")
	{
		alert("O campo Motivo esta vazio!")
		document.formularioContato.cpmotivo.focus();
		return false;
	}
	if(document.formularioContato.cpmensagem.value == "")
	{
		alert("O campo Mensagem esta vazio!")
		document.formularioContato.cpmensagem.focus();
		return false;
	}

	return true;
}

//validação do cadastro do imóvel

function validarImovel(){
	if(document.cadastro.cpendereco.value == "")
	{
		alert("O campo do Endereço esta vazio");
		document.cadastro.cpendereco.focus();
		return false;
	}
	
	if(document.cadastro.cpnumero.value == "")
	{
		alert("O campo do número esta vazio!");
		documnet.cadastro.cpnumero.focus();
		return false;
	}
	if(document.cadastro.cpvalorVenda.value == "")
	{
		alert("O campo do valor esta vazio");
		document.cadastro.cpvalorVenda.focus();
		return false;
	}
	if(document.cadastro.cpinfoAdc.value == "")
	{
		alert("O campo da mensagem esta vazio!");
		document.cadastro.cpinfoAdc.focus();
		return false;
	}
	return true;

}

//Função para confirmação de exclusão 

function excluir(){
	if(confirm("Você deseja excluir esse dado!")){
		return true;
	}
	else{
		return false;
	}

}

//função para mascara do telefone
function mascara(o,f){
				v_obj=o
				v_fun=f
				setTimeout("execmascara()",1)
			}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
		 
function Fone(v){
	v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
	v=v.replace(/^(\d{2})(\d)/,"($1) $2")             //Coloca ponto entre o segundo e o terceiro dígitos
	v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
	return v
}


//Funções para fazer mascaras
function maskIt(w,e,m,r,a){
        
        // Cancela se o evento for Backspace
        if (!e) var e = window.event
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;
        
        // Variáveis da função
        var txt  = (!r) ? w.value.replace(/[^\d]+/gi,'') : w.value.replace(/[^\d]+/gi,'').reverse();
        var mask = (!r) ? m : m.reverse();
        var pre  = (a ) ? a.pre : "";
        var pos  = (a ) ? a.pos : "";
        var ret  = "";

        if(code == 9 || code == 8 || txt.length == mask.replace(/[^#]+/g,'').length) return false;

        // Loop na máscara para aplicar os caracteres
        for(var x=0,y=0, z=mask.length;x<z && y<txt.length;){
                if(mask.charAt(x)!='#'){
                        ret += mask.charAt(x); x++;
                } else{
                        ret += txt.charAt(y); y++; x++;
                }
        }
        
        // Retorno da função
        ret = (!r) ? ret : ret.reverse()        
        w.value = pre+ret+pos;
}

// Novo método para o objeto 'String'
String.prototype.reverse = function(){
        return this.split('').reverse().join('');
};


//validar cpf
function validarCPF( cpf ){
	var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!filtro.test(cpf))
	{
		window.alert("CPF inválido. Tente novamente.");
		return false;
	}
   
	cpf = remove(cpf, ".");
	cpf = remove(cpf, "-");
	
	if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
		cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
		cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
		cpf == "88888888888" || cpf == "99999999999")
	{
		window.alert("CPF inválido. Tente novamente.");
		return false;
   }

	soma = 0;
	for(i = 0; i < 9; i++)
	{
		soma += parseInt(cpf.charAt(i)) * (10 - i);
	}
	
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	if(resto != parseInt(cpf.charAt(9))){
		window.alert("CPF inválido. Tente novamente.");
		return false;
	}
	
	soma = 0;
	for(i = 0; i < 10; i ++)
	{
		soma += parseInt(cpf.charAt(i)) * (11 - i);
	}
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	
	if(resto != parseInt(cpf.charAt(10))){
		window.alert("CPF inválido. Tente novamente.");
		return false;
	}
	
	return true;
 }
 
function remove(str, sub) {
	i = str.indexOf(sub);
	r = "";
	if (i == -1) return str;
	{
		r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
	}
	
	return r;
}
