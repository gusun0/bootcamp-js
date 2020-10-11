const alert = document.getElementById('alert');

//PONEMOS AL NAVEGADOR A LA ESCUCHA DE SI HAY INTERNET O NO


addEventListener('online',(e) => {
	//console.log(e);
	setAlert(1);
})


addEventListener('offline',(e) => {
//	console.log(e);
	setAlert(0);
})


const setAlert = (status) => {
	console.log(status);
	// se pone el remove por si ya tiene las clases puestas
	// y si no las tiene no pasa nada
	alert.classList.remove('alert--online');
	alert.classList.remove('alert--offline');


	status === 0 ? 
		setTimeout( () => {
			alert.textContent = 'Ups, it seems you are offline';	
			alert.classList.add('alert--offline')
		},100):

		setTimeout( () => {
			alert.textContent = 'Great! You are online again';	
			alert.classList.add('alert--online');
		},100)


}


