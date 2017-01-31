/*function mensaje(campo,texto){
	var cajaNegra = document.createElement('span');
	cajaNegra.appendChild(texto);
	var padre= campo.parentNode;
	
	var ventana= padre.appendChild(cajaNegra);
	return ventana;
}*/

//Creando Caja Negra
function cuadroSpan(elementoInput,textoInput){
    
    //crear Span
    var cajaNegra = document.createElement("span");
    var contenido = document.createTextNode(textoInput);
    cajaNegra.appendChild(contenido);
    var padre = elementoInput.parentNode;
    padre.appendChild(cajaNegra);
}


function mensaje(campo,texto){
    var elemento = document.getElementById(campo);
       
    if(elemento.nextSibling == null) {
        cuadroSpan(elemento,texto);
    } else { 
        if(elemento.nextSibling.tagName == 'SPAN'){
            elemento.nextSibling.innerHTML = texto;
            
        } else {
            elemento.parentNode.removeChild(elemento.nextSibling); 
            cuadroSpan(elemento,texto);
        }        
    }
}


function eliminar(campo){
    
    var elemento = document.getElementById(campo);
    
    if(elemento.nextSibling != null) {
        elemento.parentNode.removeChild(elemento.nextSibling);
    }
}


//NAME
function validateM(_evt){
	var name = document.getElementById("name");
   	var texto = "Debe ingresar su nombre";
	
	
	if(name.value ==""){
		mensaje("name",texto);
	}else{
		var nameArray= name.value.split("");
        var primeraLetra= nameArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var espacio= false;
	
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
			mayuscula += nameArray[i];
			if(nameArray[i] ==" ")
			espacio = true;
           
					
			}
		document.getElementById("name").value= mayuscula;
		 eliminar("name");
	}
}

function validateNumero(_evt){
	letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){
		
	}else{
		_evt.preventDefault();
	}
}


//LASTNAME
function validateA(_evt){
	var apellido = document.getElementById("lastname");
   	var texto = "Debe ingresar su Apellido";
	
	if(apellido.value ==""){
		mensaje("lastname",texto);
	}else{
		var apellidoArray= apellido.value.split("");
        var primeraLetra= apellidoArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var espacio= false;
	
        for (var i=1; i<apellidoArray.length; i++){
           if(espacio){
               mayuscula += apellidoArray[i].toUpperCase();
               espacio =false;
           }else
			   mayuscula += apellidoArray[i];
			   if(apellidoArray[i] ==" ")
			   espacio = true;
                
			}
		document.getElementById("lastname").value= mayuscula;
		eliminar("lastname");
	}
}

function validateNum2(_evt){
	letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){
		
	}else{
		_evt.preventDefault();
	}
}


//EMAIL
function validateEmail(_evt){
	var correo = document.getElementById("input-email");
	var texto = "Verifique su Email";
	
	if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(correo.value)){
		
		eliminar("input-email");
	}else{
		if(correo.value.length >= 0){
		   mensaje("input-email",texto);	
		}
		
	}
}


//PASSWORD
//document.getElementById("input-password").setAttribute("minlength","6");

function validatePassword(_evt){
    
    //Input
	var valor= document.getElementById("input-password");
    
    //Texto Span
	var texto = "La contraseña debe tener al menos 6 caracteres";
	
	if(valor.value==="123456" || valor.value.length <= 6|| valor.value==="098754" || valor.value==="password" || valor.value=== ""){
      mensaje("input-password",texto);
    }else{
		 eliminar("input-password");
	}
}


//SELECTOR TYPE
function validateSelect(_evt){
	var tipo= document.getElementById("select");
	var texto= "Debes seleccionar al menos un tipo de bici";
	
	if(tipo.value =="0"){
		mensaje("select",texto);
	}else{
		if(tipo.value == "urbana" || tipo.value == "treking" || tipo.value == "electrica" || tipo.value == "estatica"){
           eliminar("select");
        }
	}
}


//GLOBAL
function validateForm(){
	validateM();
	validateA();
	validateEmail();
	validatePassword();
	validateSelect();
}


