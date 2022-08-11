import './main.css';
import '../style/index.css';

import button from './module/buttonHandler.js';
import heading from './module/heading.js';
import image from './module/imageContainer.js';

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