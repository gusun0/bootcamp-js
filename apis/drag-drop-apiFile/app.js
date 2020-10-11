
const inputFile = document.getElementById('file');
const dropZone = document.getElementById('drop-zone');

dropZone.addEventListener('click', () => inputFile.click());


dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropZone.classList.add('drop-zone--active');
})


dropZone.addEventListener('dragleave',(e) =>{
	e.preventDefault();
	dropZone.classList.remove('drop-zone--active');
})

dropZone.addEventListener('drop',(e) => {
	e.preventDefault();
	inputFile.files = e.dataTransfer.files;
	console.log(inputFile.files );
})

inputFile.addEventListener('change',(e) => {
	console.log(inputFile.files);
})


