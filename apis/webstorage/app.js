const form = document.getElementById('form');
const keys = document.getElementById('keys');


form.addEventListener('submit',(e) => {
	// PREVIENE EL COMPORTAMIENTO POR DEFECTO PARA QUE NO SE RECARGUE
	// LA PAGINA
	e.preventDefault();

	// no.1 asignamos un item en sesion storage
	// setItem(key,value)

	// PANANDO UN OBJETO COMO VALUE
	/*
	const person = {
		name: 'dorian',
		email: 'dorian@gmail.com'
	}
	sessionStorage.setItem('name',JSON.stringify(person));
	sessionStorage.setItem('name','dorian');
	*/
	
	sessionStorage.setItem(form.key.value,form.value.value);
	keys.innerHTML += `<option>${form.key.value}</option>`
	form.reset();
})

keys.addEventListener('change', () => {
	document.getElementById('infoValue').textContent = 
		sessionStorage.getItem(keys[ keys.selectedIndex ].textContent)
})


