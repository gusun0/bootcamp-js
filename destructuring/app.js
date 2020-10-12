const person = {
	name: 'dorian',
	age: 20,
	email: 'dorian@do.com'
}

// FORMA TRADICIONAL
/*
const name = person.name;
const age = person.age;
const email = person.email;
console.log(name,age,email);
*/


// DESTRUCTURING
/*
//const { name,age,email } = person;
const { name:nombre,age:edad,email } = person;

console.log(nombre,edad,email);
*/

const numbers = [1,2,3,4];

// FORMA TRADICIONAL
//console.log(numbers[0]);



// DESTRUCTURING
const [primeraPosicion,,terceraPosicion,cuartaPosicion] = numbers;


console.log(cuartaPosicion)

const printPerson = ({a,age}) => {
	console.log(age);
}

printPerson(person);


// DESTRUCTURING PETCIONES 


const getUsers = async () => {
	const {data:us} = await axios.get('https://jsonplaceholder.typicode.com/users');
	console.log(us)
}

getUsers()

