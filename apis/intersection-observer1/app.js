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
	//no.1 root es el elemento padre que se vigiale es normalmente el viewport
	//root: viewport 
	//no.2 rootMargin, funcional igual que en CSS
	//rootMargin: '-200px'
	
	
	// recibe valores entre 0 y 1
	threshold:1 
}

// ESTE OBJETO LO QUE HACE ES INDICAR CUAL ES EL QUE VE EN VIEWPORT
// IntersectionObserver tiene dos parametros(callback,options)
const observer = new IntersectionObserver(callback,options)
boxes.forEach(element => observer.observe(element));



