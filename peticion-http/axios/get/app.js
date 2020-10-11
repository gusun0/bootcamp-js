// LIBRERIA BASADA EN PROMESAS PARA EL CLIENTE Y EL SERVIDOR

const button = document.getElementById('button');

button.addEventListener('click',() => {
	// axios es un metodo y recibe un objeto
	

	axios({
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/users'
	}).then(res =>{
		const list = document.getElementById('list')
		const fragment = document.createDocumentFragment();
		for (const userInfo of res.data) { // uusando axios se usa res.data y no solo res
			const listItem = document.createElement('li')
			listItem.textContent = `${userInfo.id} - ${userInfo.name}`
			fragment.appendChild(listItem)
		}
		list.appendChild(fragment)
	}).catch(err => console.log(err))




})

