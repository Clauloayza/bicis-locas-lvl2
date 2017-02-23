
function cuadroSpan(input,message){
	
	if(input.find('span').length == 0){
		input.append('<span>'+message+'</span>');
	}
}

//NAME
function validateM(){
	
	var nombre = $("#nombre");
	var name = $("#name").val();
	
	if(name.length == 0){
		cuadroSpan(nombre, 'Ingresa nombre');
        $('#name').focus();
	}else if(/([0-9])/g.test(name)){
        cuadroSpan(nombre, 'No válido');
		
	}else{
       $('#nombre span').remove(); 
    }
	
	
}

//LASTNAME
function validateA(){
	
	var apellido = $("#apellido");
	var lastname = $("#lastname").val();
	
	if(lastname.length == 0){
		cuadroSpan(apellido, 'Ingrese su Apellido');
        $('#lastname').focus();
	}else if(/([0-9])/g.test(lastname)){
         cuadroSpan(nombre, 'No válido');
		
	}else{
        $('#apellido span').remove();
    }
		
}


//EMAIL
function validateEmail(){
	
	var correo = $("#correoElectronico");
	var email = $("#input-email").val();
    var expReg = /([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)$/;
	
	if(email.length == 0){
        cuadroSpan(correo, 'Verifique su Email');
		$('#input-email').focus();
	}else if(!expReg.test(email)){
        cuadroSpan(correo, 'Error, Verifique su Email');
    }else{
        $('#correoElectronico span').remove();
    }
}


//PASSWORD
function validatePassword(){
    var valor = $('#contraseña');
    var password = $('#input-password').val();
    if(password==="123456" || password.length<= 6|| password==="098754" || password==="password" || password.length=== 0){
       cuadroSpan(valor, 'La contraseña debe tener al menos 6 caracteres');
        return false;
    }else{
		$('#contraseña span').remove();
	}
}


//SELECTOR
function validateSelect(){
    var tipo = $('#selector');
    var select = $('#select').val();
    
    if(select == 0){
		cuadroSpan(tipo, 'Debes seleccionar al menos un tipo de bici');
        return false;
	}else{
		
		if(select == "urbana" || select == "treking" || select == "electrica" || select == "estatica"){
           $('#selector span').remove();
        }
	}
    
}

//GLOBAL
$(document).ready(function(){
	$('#name').keyup(validateM);
    $('#lastname').keyup(validateA);
    $('#input-email').keyup(validateEmail);
    $('#input-password').keyup(validatePassword);
	$('#select').keyup(validateSelect);
})

function validateForm(){
	validateM();
	validateA();
    validateEmail();
    validatePassword();
    validateSelect();
}


