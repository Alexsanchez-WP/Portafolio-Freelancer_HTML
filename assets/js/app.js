// funcion para elemento blinks en el titulo 
function blinksNone() {
	const blinks = document.querySelector('.toggle');
	blinks.classList.toggle("blinks")
}
setInterval(blinksNone, 500);