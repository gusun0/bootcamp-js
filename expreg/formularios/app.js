const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')



// CONSTRUIMOS UN OBJETO QUE CONTENGA LAS PROPIEDAS QUE SON VALIDAS PARA EL USUARIO

const formIsValid ={
	name:false,
	email:false,
	gender:false,
	terms:false
}


// LO QUE HACEMOS ES PREVENIR QUE EL EVENTO DE FORMULARIO
// SE REALICE

form.addEventListener('submit',(e) =>{
	e.preventDefault();
	// hacemos una funcion que valide
	validateForm()

})

// change registra cualquier evento siempre y cuando el valor cambie
// a diferencia de keyup

name.addEventListener('change',(e) => {
	if(e.target.value.trim().length > 0) formIsValid.name = true;
})


email.addEventListener('change',(e) => {
	if(e.target.value.trim().length > 0) formIsValid.email = true;

})


gender.addEventListener('change', (e) => {
	if(e.target.checked == true) formIsValid.gender = true;

})

terms.addEventListener('change', (e) => {
	formIsValid.terms = e.target.checked
	e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled',true)

})

const validateForm = () => {
	//tenemos que convertir el valor del objeto a un array
	const formValues = Object.values(formIsValid) 		
	//console.log(formIsValid)
	const valid = formValues.findIndex(value => value == false)
	if (valid == -1) form.submit()
	else alert('form invalid')

}



