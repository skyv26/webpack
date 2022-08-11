/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/buttonHandler.js":
/*!*************************************!*\
  !*** ./src/module/buttonHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const button = () => {
  const button = document.createElement('button');
  button.className='button';
  button.textContent = 'Say Hi!';
  return button;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (button);

/***/ }),

/***/ "./src/module/heading.js":
/*!*******************************!*\
  !*** ./src/module/heading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const heading = () => {
  const heading = document.createElement('h1');
  heading.className='heading';
  heading.textContent = `Hi! I've just started learning WEBPACK !!`;
  return heading;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heading);

/***/ }),

/***/ "./src/module/imageContainer.js":
/*!**************************************!*\
  !*** ./src/module/imageContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const image = () => {
  const img = document.createElement('img');
  img.className='webpack-image';
  img.width = '200';
  img.height = '200';
  img.src = '../../assets/Webpack.png';
  return img;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (image);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_buttonHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/buttonHandler.js */ "./src/module/buttonHandler.js");
/* harmony import */ var _module_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/heading.js */ "./src/module/heading.js");
/* harmony import */ var _module_imageContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/imageContainer.js */ "./src/module/imageContainer.js");




const buttonComponent = (0,_module_buttonHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const headingComponent = (0,_module_heading_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const imageComponent = (0,_module_imageContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

const main = document.querySelector('.main');


main.insertAdjacentElement('beforeend', headingComponent);
main.insertAdjacentElement('beforeend', imageComponent);
main.insertAdjacentElement('beforeend', buttonComponent);

buttonComponent.addEventListener('click', (e) => {
  alert('Hi, This is Aakash Verma');
})
})();

/******/ })()
;