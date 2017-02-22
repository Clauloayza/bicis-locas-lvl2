function cuadroSpan(input,message){
	
	if(input.find('span').length == 0){
		input.append('<span>yhyjj</span>');
	}
}

//NAME
function validateM(){
	
	var nombre = $("#nombre");
	var name = $("#name").val();
	
	if(name.length == 0){
		cuadroSpan(nombre, 'ingresa nombres')
	}else{
		$('span').remove();
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
	
}


