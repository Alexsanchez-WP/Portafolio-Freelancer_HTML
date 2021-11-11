// funcion para darle color a los iconos de los skills

let double = document.querySelector('.content-profile');
double.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('skills') === true) {
    let nodo = event.target.parentNode.nextElementSibling.classList;
    nodo.toggle('yes-meter');
    nodo.toggle('no-meter');
  };
});
