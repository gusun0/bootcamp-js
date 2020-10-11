const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

pendingTasks.addEventListener('dragstart',(e) => {
	//console.log(e.dataTransfer);

		//DATA TRANSFER
		// setData: establece la info que queremos compartir
		// getData: info que queremos obtener
	
	
	e.dataTransfer.setData('text/plain',e.target.id);
//	console.log(e.dataTransfer.getData('text'));
	
})



pendingTasks.addEventListener('drag',(e) => {
	e.target.classList.add('active');
})


pendingTasks.addEventListener('dragend',(e) => {
	e.target.classList.remove('active');
})

// este evento es obligatorio si no no funciona
finishedTasks.addEventListener('dragover',(e) => {
	e.preventDefault();
})


finishedTasks.addEventListener('drop', (e) => {
	e.preventDefault();
	const element = document.getElementById(e.dataTransfer.getData('text'))
	element.classList.remove('active');
	finishedTasks.appendChild(pendingTasks.removeChild(element))	

})


// PARTE DEL OTRO LADO



finishedTasks.addEventListener('dragstart',(e) => {
	//console.log(e.dataTransfer);

		//DATA TRANSFER
		// setData: establece la info que queremos compartir
		// getData: info que queremos obtener
	
	
	e.dataTransfer.setData('text/plain',e.target.id);
//	console.log(e.dataTransfer.getData('text'));
	
})



finishedTasks.addEventListener('drag',(e) => {
	e.target.classList.add('active');
})


finishedTasks.addEventListener('dragend',(e) => {
	e.target.classList.remove('active');
})

// este evento es obligatorio si no no funciona

pendingTasks.addEventListener('dragover',(e) => {
	e.preventDefault();
})


pendingTasks.addEventListener('drop', (e) => {
	e.preventDefault();
	const element = document.getElementById(e.dataTransfer.getData('text'))
	element.classList.remove('active');
	pendingTasks.appendChild(finishedTasks.removeChild(element))	

})

