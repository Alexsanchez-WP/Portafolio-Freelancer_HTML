// funcion para elemento blinks en el titulo
function blinksNone() {
  const blinks = document.querySelector('.toggle');
  blinks.classList.toggle('blinks');
};

setInterval(blinksNone, 2000);

// funcion para ocultar el menu responsivo

let navCheck = document.querySelector('.icon-nav');
navCheck.addEventListener('click', event => {
  event.preventDefault();
  let nav = document.querySelector('.nav');
  nav.classList.toggle('nav-yes');
});
