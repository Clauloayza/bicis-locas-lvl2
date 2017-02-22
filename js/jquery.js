$(document).ready(function(){
	//$('#bEnviar').click(function(){
		//alert("hola");
		var name = $('#name');
		var lastname = $('#lastname').val();
		var email = $('#input-email').val();
		var password = $('#input-password').val();
		var select = $('#select').val();
		
		if(name.val().length == 0){
			//console.log('ppp');
			var span = $('<span>Ingrese su nombre</span>');
			
			name.parent().append(span);
		}else{
			
		}
	
	    if(lastname.val().length == 0){
			var span = $('<span>Ingrese su Apellido</span>');
			
			lastname.parent().append(span);
		}else{
			
		}
	//});
});

