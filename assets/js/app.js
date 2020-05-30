// funcion para elemento blinks en el titulo
function blinksNone() {
	const blinks = document.querySelector('.toggle');
	blinks.classList.toggle('blinks');
}
setInterval(blinksNone, 2000);

// funcion para darle color a los iconos de los skills

function skills() {
	const doubleUp = document.querySelector('.content-profile');
	doubleUp.addEventListener('click', event => {
		event.preventDefault();
		console.log(event.target.className)
		if (event.target.className === "fas fa-angle-double-up fa-rotate-180") {

		}

	})
}
skills();