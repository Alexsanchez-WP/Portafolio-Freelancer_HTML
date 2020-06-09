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
			nodo.toggle('yes-meter');
			nodo.toggle('no-meter');
		}
	})
}
skills();

// funcion para ocultar el menu responsivo

function navCollapse() {
	let navCheck = document.querySelector('.icon-nav');
	navCheck.addEventListener('click', event => {
		event.preventDefault();
		let nav = document.querySelector('.nav');
		nav.classList.toggle('nav-yes')
	})
};
navCollapse();

// funcion para los testimoniales

function testimoniales() {
	let sliderParent = document.querySelector('.slider-parent')
	let i = 0;
	setInterval(() => {
		(i < sliderParent.children.length) {
			let sliderOn = sliderParent.children[i].classList;
			sliderOn.add('node')
			console.log(sliderOn);
		}
	}, 3000);
	i++;
};
// testimoniales();
