const indexedDB = window.indexedDB;
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');

if(indexedDB && form){
	let db;


	//metodo que nos permite acceder a la db
	//recibe 2 parametros
	//(nombre de la db que queremos acceder, version de la db)
	
	const request = indexedDB.open('taskslist',1);

	//una vez hecho la peticion, usamos los metodos 
	//asincronos
	
	request.onsuccess = () => {
		db = request.result
		console.log('open',db);

		readData();
	}

	request.onupgradeneeded = () => {
		db = request.result
		console.log('create',db);
		//const objectStore = db.createObjectStore('tasks',{autoIncrement: true});
		const objectStore = db.createObjectStore('tasks',{keyPath: 'taskTitle'});
	}


	request.onerror = (error) => {
		console.log('Error', error);	
	}


	const addData = (data) =>{
		// TODAS LAS OPERACIONES SOBRE UN DB INDEXADA, FUNCIONAN
		// A TRAVES DE UNA TRANSACTION(ALMACEN EN EL QUE TRABAJAMOS, EL MODO DE TRABAJAR)
		const transaction = db.transaction(['tasks'],'readwrite');
		// para abrir el almacen de datos
		const objectStore = transaction.objectStore('tasks');
		const request = objectStore.add(data);
		readData();
	}


	const updateData = (data) => {
		const transaction = db.transaction(['tasks'],'readwrite');	
		const objectStore = transaction.objectStore('tasks');
		const request = objectStore.put(data);
		//para asegurarnos que los datos han sido actualizados
		request.onsuccess = () => {
			form.button.dataset.action = 'add'
			form.button.textContent = 'Add tasks'
			readData();
		}
	}


	
	// PARA BORRAR DATOS
	const deleteData = (key) => {
		const transaction = db.transaction(['tasks'],'readwrite');	
		const objectStore = transaction.objectStore('tasks');
		const request = objectStore.delete(key);
		
		request.onsuccess = () => {
			readData();
		}
	}	
	




	// PARA ACTUALIZAR LOS DATOS
	const getData = (key) => {
		const transaction = db.transaction(['tasks'],'readwrite');
		const objectStore = transaction.objectStore('tasks');
		const request = objectStore.get(key);
		
		// evalausmoa si ya termino de pedir la key
		request.onsuccess = () => {
			//console.log(request)		
			
			form.task.value = request.result.taskTitle;
			form.priority.value = request.result.taskPriority;
			form.button.dataset.action = 'update'
			form.button.textContent = 'Update tasks'
	
		}
	
	}






	// PARA LEER LOS DATOS
	const readData = () =>{
		const transaction = db.transaction(['tasks'],'readonly');
		const objectStore = transaction.objectStore('tasks');
		//usamos el metodo openCursor que nos permite leer la informacion
		const request = objectStore.openCursor();

		const fragment = document.createDocumentFragment();

		request.onsuccess = (e) => {
		const cursor = e.target.result;		
			if(cursor){
				
		//	console.log(cursor.key);
		
			const taskTitle = document.createElement('p');	
			taskTitle.textContent = cursor.value.taskTitle;
			fragment.appendChild(taskTitle);

			const taskPriority = document.createElement('p');	
			taskPriority.textContent = cursor.value.taskPriority;
			fragment.appendChild(taskPriority);
			
			//CREANDO LOS DOS BOTONES
		
			const taskUpdate = document.createElement('button');
			taskUpdate.dataset.type='update';
			taskUpdate.dataset.key=cursor.key;
			taskUpdate.textContent= 'Update';
			fragment.appendChild(taskUpdate);

			const taskDelete = document.createElement('button')
			taskDelete.textContent = 'Delete';
			taskDelete.dataset.type = 'delete';
			taskDelete.dataset.key = cursor.key;
			fragment.appendChild(taskDelete);	

			//	console.log(cursor.value);			
			cursor.continue();	
			}else{
				tasks.textContent = '';
				//console.log('no more data');		
				tasks.appendChild(fragment);
			}

		}
	
	}	

	form.addEventListener('submit', (e) => {
		e.preventDefault();	
		const data = {
			taskTitle: e.target.task.value,
			taskPriority: e.target.priority.value
		}


		if(e.target.button.dataset.action == 'add'){
		
			//console.log(data);
			addData(data);
		}else if(e.target.button.dataset.action == 'update'){
					
			updateData(data);
		}

		form.reset();

	})



	tasks.addEventListener('click',(e) => {
		if(e.target.dataset.type == 'update'){
			getData(e.target.dataset.key);	
		}else if(e.target.dataset.type == 'delete'){
			deleteData(e.target.dataset.key);		
	
		}
	})
}









