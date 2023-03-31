var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json");

    xhr.addEventListener("load", function() {
    	var erroAJAX = document.querySelector("#erro-ajax");    
        if(xhr.status == 200){
    		erroAJAX.classList.add("invisivel");

        	var resposta = xhr.responseText;

        	var pacientes = JSON.parse(resposta);

        	pacientes.forEach(function(paciente) {
         	   adicionaPacienteNaTabela(paciente);
        	});
        }else{
        	console.log(xhr.status);
        	console.log(xhr.responseText);
        	erroAJAX.classList.remove("invisivel");
        }

        
    });

    xhr.send();
});