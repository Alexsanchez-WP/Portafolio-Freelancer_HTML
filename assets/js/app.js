// funcion para elemento blinks en el titulo
function blinksNone() {
	const blinks = document.querySelector('.toggle');
	blinks.classList.toggle('blinks');
}
setInterval(blinksNone, 2000);

// funcion para darle color a los iconos de los skills

function skills() {
	const doubleUp = document.querySelector('.profile');
	doubleUp.addEventListener('click', event => {
		event.preventDefault();
		if (event.target.classList.contains("skills") === true) {
			let nodo = event.target.parentNode.nextElementSibling.classList;
			console.log(nodo);
			nodo.toggle('yes-meter');
			nodo.toggle('no-meter');
		}
	})
}
skills();