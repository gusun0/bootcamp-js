// es una funcion que se ejecuta a traves de una funcion
// NO son asincronos (se ejecutan por orden)

// cb abreviatura de callback
/*
const getUser = (id,cb) => {
	const user = {
		name: 'Dorian',
		id: id // se puede escribir igual como id por ES6
	}
	console.log(user);
	if(id==2){
	cb("usuario no existe",user); // pueden pasar dos cosas un error y que haya exito 
	}else{
	cb(null,user);	
	}
}
// usando el callback

getUser(1, (err,user) => {
	if(err) return console.log(err);
	console.log(user.name);

});

*/



const users = [
	{
		id:1,
		name: 'dorian'
	},
	{
		id:2,
		name: 'laura'
	},
	{
		id:3,
		name: 'carlos'
	}
];


const emails = [
	{
		id:1,
		email:'dorian@d.com'
	},
	{
		id:2,
		email:'laura@l.com'
	}

];

// UNA PROMESA ES UN OBJETO QUE DENTRO TIENE DOS CALLBACKS 

const getUser = (id) => {

	const user = users.find(user=>user.id==id);
	const promise = new Promise ((resolve,reject) =>{
	
	  if(!user) reject('this user '+id+' not exists')
	  else resolve(user)
	

	}) 

	return promise

}

const getEmail = (user) => {
	const email = emails.find(email => email.id == user.id)
	const promise = new Promise((resolve,reject) => {
	
		if(!email) reject(`${user.name} hasnt email`)
		else resolve(
			{
			id:user.id,                      
        		name:user.name,
        		email: email.email
       })
       })
	return promise
}


// FORMA 1 
/*

getUser(1)
.then(u => {
	
	return getEmail(u);

})
.then(res => console.log(res))

.catch(err => console.log(err))

*/


// FORMA 2 MAS SIMPLIFICADA
getUser(1)
.then(getEmail) 
.then(console.log)
.catch(console.log)



/*
	if(err) return console.log(err)
//	console.log(user)
	getEmail(user,(err,res)=>{
	if(err) return console.log(err)	
	console.log(res)
		                        
	
	})

*/






