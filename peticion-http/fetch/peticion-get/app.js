// fectch es el reemplazo moderno para el objeto XMLHttpRequest
// fetch esta basado en promesas, ya tiene los callbacks del response y 
// reject

// FETCH POR DEFECTO TRABAJA CON EL METODO GET

const button = document.getElementById('button');

button.addEventListener('click',() => {

//	PARA SABER SI EL NAVEGADOR TIENE SOPORTE CON FETCH
//	if(window.fetch != undefined) console.log('FETCH OK')
//	else console.log('FETCH NOT WORKS');


	// res = response = respuesta
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
	.then(res => res.json())
	.then(res => {
		const list = document.getElementById('list');
		const fragment = document.createDocumentFragment();	

		for(const userInfo of res){
		const listItem = document.createElement('LI');
		listItem.textContent =  `${userInfo.id} - ${userInfo.name}`
		fragment.appendChild(listItem);
		}	
		
		list.appendChild(fragment);
	})

})














