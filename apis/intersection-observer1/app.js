const boxes = document.querySelectorAll('.box');

// creamos primero nuestro intersection observer
// es un metodo constructor que recibe dos parametros
// (funcion que se ejecuta que queremos lo que haga

const callback = (entries) => {
//	console.log(entries);
	entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry.target.id,'is intersecting');	
		}	
	})
}


//options es un objeto que recibe 3 propiedades, las 3 son opcionales

const options = {
	root: viewport 
	//rootMargin: '-200px'
	
	
	// recibe valores entre 0 y 1
	//threshold:0.25 
}


const observer = new IntersectionObserver(callback,options)
boxes.forEach(element => observer.observe(element));
