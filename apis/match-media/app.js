//console.log(innerWidth);
// mql(media query list) recibe el método matchmedia


const mql = matchMedia('(min-width: 400px) and (orientation: landscape)')


//console.log(mql);

const applyMatchMedia = mql => {
	mql.matches ?
	// NO HACER ESTO NUNCA
	document.body.style.backgroundColor = "red"
	:
	document.body.style.backgroundColor = "royalblue"
	
	// ESTO SI
	/*
	title.classList.add("clase que sea")
	:
	title.classList.remove("clase que sea")
	 
	 * */
} 

addEventListener('resize', () => applyMatchMedia(mql))	

