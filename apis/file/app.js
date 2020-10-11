const fileInput = document.getElementById('file');
const img = document.getElementById('img');
const text = document.getElementById('text');
/*
 * 	PARA ARCHIVOS DE TEXTO

fileInput.addEventListener('change',(e) => {
//	console.log(e.target.files);

	const file = e.target.files[0];
	const fileReader = new FileReader()
	fileReader.readAsText(file)
	fileReader.addEventListener('load',(e) => {
		text.textContent = e.target.result;
	})
//	console.log(file);
})

*/




	// PARA SUBIR IMAGENES
	// CARGA SIMPLE DE IMAGEN
/*
fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0];
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)
	fileReader.addEventListener('load',(e) => {
		img.setAttribute('src',e.target.result);
	})
})
*/

	// CARGA MULTIPLE DE IMAGENES

fileInput.addEventListener('change',(e) => {
	const files = e.target.files
	const fragment = document.createDocumentFragment()
	
	for(const file of files){

		const fileReader = new FileReader()
		const img = document.createElement('img') 
		fileReader.readAsDataURL(file)
		fileReader.addEventListener('load',(e) => {
		img.setAttribute('src',e.target.result)	
		})
		fragment.appendChild(img)
	}
	text.appendChild(fragment);
})




