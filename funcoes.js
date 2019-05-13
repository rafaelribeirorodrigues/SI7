function carregaCidade() {
			var href = "/site/adm/cidades.php?uf="+$('#cpestado').val();
				$("#cidCodigo").find('option')
                    .remove()
                    .end()
                ;
			$("#cidCodigo").append(new Option("Aguarde ...",0));

			$.getJSON( href , function(data){
            var d = data;
            
            $("#cidCodigo").find('option')
                    .remove()
                    .end()
            ;
                        
            if( d.stat == 1 )
            {
                for(var i=0; i < d.id.length; i++)
                {
                    $("#cidCodigo").append(new Option(d.nome[i],d.id[i]));
                }
				
				carregaBairro();
            }
            
            else
            {
                $("#cidCodigo").append(new Option("Cidades nao encontrados",0));
				
				carregaBairro();
            }
        });
	}
	
	
	function carregaBairro(){
		var href = "/site/adm/bairros.php?cidade="+$('#cidCodigo').val();
        $("#bairCodigo").find('option')
                    .remove()
                    .end()
                ;
        $("#bairCodigo").append(new Option("Aguarde ...",0));

        $.getJSON( href , function(data){
            var d = data;
            
            $("#bairCodigo").find('option')
                    .remove()
                    .end()
            ;
                        
            if( d.stat == 1 )
            {
                for(var i=0; i < d.id.length; i++)
                {
                    $("#bairCodigo").append(new Option(d.nome[i],d.id[i]));
                }
            }
            
            else
            {
                $("#bairCodigo").append(new Option("Bairro nao encontrados",0));
            }
        });
	}