const button = document.getElementById('button');

button.addEventListener('click', ()=> {
	const geolocation = navigator.geolocation
	//usando el método getCurrentPosition	
	geolocation.getCurrentPosition(getPosition,error,options)

})


const options = {

	enableHighAccuracy: true,
	timeout: 5000,
	// el tiempo maximo de la info en cache
	maximunAge: 0

}

// recibe un objeto con posiciones
const getPosition = (position) =>{
	console.log(position);
}


const error = (error) => console.log(error)	
