import button from './buttonHandler.js';
import heading from './heading.js';
import image from './imageContainer.js';

const buttonComponent = button();
const headingComponent = heading();
const imageComponent = image();

const main = document.querySelector('.main');


main.insertAdjacentElement('beforeend', headingComponent);
main.insertAdjacentElement('beforeend', imageComponent);
main.insertAdjacentElement('beforeend', buttonComponent);

buttonComponent.addEventListener('click', (e) => {
  alert('Hi, This is Aakash Verma');
})