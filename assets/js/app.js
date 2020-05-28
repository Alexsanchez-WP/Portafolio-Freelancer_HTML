// funcion para elemento blinks en el titulo
function blinksNone() {
	const blinks = document.querySelector('.toggle');
	blinks.classList.toggle('blinks');
}
setInterval(blinksNone, 1000);

// funcion para los botones del slider

function sliderHome() {
	const slider1 = document.querySelector('#slider-1');
	const slider2 = document.querySelector('#slider-2');
	const slider3 = document.querySelector('#slider-3');
	const btnSliders = document.querySelector('.slider-control').addEventListener('click', (event) => {
		event.preventDefault();
		console.log(event.target.innerText);
		console.log(slider1);

		if (event.target.innerText === '1') {
			slider1.classList.add('slider-in');
			slider1.classList.remove('slider-off');
		} else if (event.target.innerText === '2') {
			slider2.classList.add('slider-in');
			slider2.classList.remove('slider-off');
		} else if (event.target.innerText === '3') {
			slider3.classList.add('slider-in');
			slider3.classList.remove('slider-off');
		}
	});
}
sliderHome();
