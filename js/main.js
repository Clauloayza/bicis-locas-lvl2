function mensaje(campo,texto){
	var cajaNegra = document.createElement('span');
	cajaNegra.appendChild(texto);
	var padre= campo.parentNode;
	
	var ventana= padre.appendChild(cajaNegra);
	return ventana;
}


//NAME
function validateM(_evt){
	var name = document.getElementById("name");
   	var texto = document.createTextNode("Debe ingresar su nombre");
	
	
	if(name.value ==""){
		mensaje(name,texto);
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
		name.parentNode.removeChild(name.nextSibling);
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
   	var texto = document.createTextNode("Debe ingresar su Apellido");
	
	if(apellido.value ==""){
		mensaje(apellido,texto);
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
		apellido.parentNode.removeChild(apellido.nextSibling);
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
	var texto = document.createTextNode("Verifique su Email");
	
	if(!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(correo.value)){
		mensaje(correo,texto);
	}else{
		correo.parentNode.removeChild(correo.nextSibling);
	}
}


//PASSWORD
document.getElementById("input-password").setAttribute("minlength","6");

function validatePassword(_evt){
	var valor= document.getElementById("input-password");
	var texto = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
	
	if(valor.value==="123456" || valor.value==="098754" || valor.value==="password"){
      mensaje(valor,texto);
    }else{
		valor.parentNode.removeChild(valor.nextSibling);
	}
}


//SELECTOR TYPE
function validateSelect(_evt){
	var tipo= document.querySelector("select");
	var texto= document.createTextNode("Debes seleccionar al menos un tipo de bici");
	
	if(tipo.value ==0){
		mensaje(tipo,texto);
	}else{
		tipo.parentNode.removeChild(tipo.nextSibling);
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


