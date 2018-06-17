$(document).ready(function(){
	
	var validator = $(".dmt-form-comment").validate({
		rules: {
			author: {
				required: true,
				maxlength: 50
			},
			email: {
				required: true,
				email: true,
				maxlength: 200
			},
			url: {
				required: false,
				url: true
			},
			comment: {
				required: true
			},
		},
		messages: {
			author: {
				required: "Por favor, informe seu nome.",
				maxlength: "Seu nome deve conter no máximo 50 caracteres."
			},
			email: {
				required: "Por favor, informe seu email.",
				email: "Por favor, informe um email válido.",
				maxlength: "Seu email deve conter no máximo 200 caracteres."
			},
			url: {
				url: "Por favor, informe uma URL válida."
			},
			comment: {
				required: "Por favor, informe seu comentário."
			},
		}
	});

	$(".dmt-form-comment").on('reset', function(e){
		validator.resetForm();
	});

});
