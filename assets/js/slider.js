// funcion para los testimoniales

let sliderParent = document.querySelector('.slider-parent');
let sliders = document.querySelectorAll('.slider');
let contador = 1;
let tamanoWidth = sliders[0].clientWidth;
let final = tamanoWidth * contador;
let intervalo = 3000;
window.addEventListener('resize', () => {
  tamanoWidth = sliders[0].clientWidth;
});
setInterval(() => {
  slider();
}, intervalo);

function slider() {
  sliderParent.style.transform = 'translate(-' + (tamanoWidth * contador) + 'px)';
  sliderParent.style.transition = 'transform 1s';
  contador++;
  if (contador === sliders.length) {
    contador = 0;
    setTimeout(() => {
      sliderParent.style.transform = 'translate(0px)';
      sliderParent.style.transition = 'transform 0s';
    }, 1000);
  };
};
