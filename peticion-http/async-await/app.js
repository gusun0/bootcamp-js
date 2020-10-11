// es una implementacion para hacer funciones asincronas en JS
// de forma nativa

// USANDO PROMESAS 
/*

const getName = () => {

	return new Promise((resolve,reject) => {
		resolve('dorian')	
	})
}
getName()
.then(name => console.log(name))

*/

// USANDO ASYNC / AWAIT 
/*
const getName = async () => {
	return new Promise((resolve,reject) => {
		setTimeout( () =>{
			resolve('dorian')	
		},1000)
	})
}


const sayHello = async () => {
	const name = await getName();
	return name;
}

sayHello()
.then(res => console.log(res))

*/


const users = [
	{
		id:1,
		name: 'dorian',
	},
	{
		id:2,
		name: 'laura'
	},
	{
		id:3,
		name:'carlos'
	}
]


const emails = [
	{
		id:1,
		email:'dorian@d.com'
	},
	{
		id:2,
		email:'lau@l.com'
	}
]


const getUser = async (id) => {
	const user = users.find(user => user.id == id)
		if(!user) throw new Error(`doesnt exists an user with id ${id}`)
		else return user
}


const getEmail = async (user) => {
	const email = emails.find(email => email.id == user.id)
		if(!email) throw new Error (`${user.name} hasnt email`)	
		else return{
		  id:user.id,
		  name: user.name,
		  email: email.email	
		}

}
// getInfo debe de ser una funcion asincrona por que para tener el valor del user y del 
// email se va a tardar un tiempo
const getInfo = async(id) => {
	try{
		const user = await getUser(id)
		const res = await getEmail(user)
		return `${user.name} email is ${res.email}` 
	}
	catch(error){
		console.log(error)	
	}


}

getInfo(3)
.then(res => console.log(res))
//console.log(getInfo());






