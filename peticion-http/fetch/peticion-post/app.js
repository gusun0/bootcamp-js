const button = document.getElementById('button')
button.addEventListener('click', () => {
	const newPost = {
		title: 'A new post',
		body: 'lorem ipsum dolor dell',
		userId: 1
	}
	//console.log(newPost);
	// para poder enviarlo tenemos que convertirlo a 
	// formarto json para que la API lo pueda interpretar
	//console.log(JSON.stringify(newPost));

	//UNA VEZ QUE TENEMOS EL OBJETO CREADO, HACEMOS LA
	//PETICION FETCH
	

	fetch('https://jsonplaceholder.typicode.com/posts',{
		method: 'POST',
		body: JSON.stringify(newPost),
		headers:{
			"Content-type": "application/json"
		}
	}).then(res => res.json())
	.then(data => console.log(data))
})




