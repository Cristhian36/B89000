	$("#login_usuario").submit(function(event){
		event.preventDefault();
		$.ajax({
				url: '../controlador/login_usuario.php',
				type: 'POST',
				data: $(this).serialize(),
				success:function(data){
					if (data) {
						toastr.success('Status','Datos correctos!',{timeOut:5000});
						console.log('Logeado');
						setTimeout(function(){location.href = './dentro.php';},1000);
					}else{
						toastr.error('Status','Datos incorrectos, intente nuevamente.',{timeOut:5000});
						console.log('Error');
					}
				}
			});
	});


	$("#form_prestamo").submit(function(event){
		event.preventDefault();
		$.ajax({
				url: '../modelo/agregar_prestamo.php',
				type: 'POST',
				data: $(this).serialize(),
				success:function(data){
					if (data) {
						toastr.success('Status','Registro completado!',{timeOut:5000});
						console.log('Guardado');
						$('#formulario_prestamo').modal('hide');
					}else{
						toastr.error('Status','No se puedo registrar, intente nuevamente.',{timeOut:5000});
						console.log('Error');
					}
				}
			});
	});