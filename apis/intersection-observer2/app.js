const images = document.getElementById('images');

const getImages = () => {
	
	axios('	https://picsum.photos/v2/list?page=2&limit=5')
	.then(res => {
	//	console.log(res);

		const fragment = document.createDocumentFragment();	
		res.data.forEach(element => {
			const newImage = document.createElement('IMG');	
			newImage.src = element.download_url;
			fragment.appendChild(newImage)
		})
		images.appendChild(fragment);
		setObserver();

	})
}



const callback = (entries) => {
	entries.forEach(entry => {
		//console.log(entry)	
		
		if(entry.isIntersecting){
			getImages();	
		}
	})
}


// VAMOS A CONSTRUIR NUESTRO OBSERVADOR DENTRO DE UNA FUNCION PARA QUE SE EJECUTE
// CUANDO YA TENGAMOS LAS IMAGENES

const setObserver = () => {
	const options = {
		// le ponemos 0.5 por que cuando lleguemos al tope y abarque 0.5,
		// vamos a pedir otras 5 imagenes
		threshold: 0.5	
	}
	
	const observer = new IntersectionObserver(callback,options) 
	observer.observe(images.lastElementChild)



}

getImages();




