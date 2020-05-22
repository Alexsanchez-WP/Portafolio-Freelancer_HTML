// funcion para elemento blinks en el titulo 
function blinksNone() {
	const blinks = document.querySelector('.toggle');
	console.log();
	blinks.classList.toggle("blinks")
}
setInterval(blinksNone, 500);