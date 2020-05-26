//(funcion)(){
	var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		apellido = formulario.apellido,
		correo = formulario.correo,
		contraseña = formulario.contraseña,

funcion validarNombre(e){
	if(nombre.value== '' nombre == null){
		console.log('Por favor, complete su nombre');
		error.style.display = 'block';
		error.innnerHTML = error.innerHTML + '<li>Ingresa un nombre</li>';
		e.preventDefault();
	}else{
		error.style.display='none';
	}
}

funcion validarApellido(e){
	if(nombre.value== '' nombre == null){
		console.log('Por favor, complete su apellido');
		error.style.display = 'block';
		error.innnerHTML = error.innerHTML + '<li>Ingresa un apellido</li>';
		e.preventDefault();
	}else{
		error.style.display='none';
	}
}

funcion validarCorreo(e){
	if(nombre.value== '' nombre == null){
		console.log('Por favor, complete su correo electronico');
		error.style.display = 'block';
		error.innnerHTML = error.innerHTML + '<li>Ingresa un correo electronico</li>';
		e.preventD
