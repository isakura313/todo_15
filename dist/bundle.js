/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.js":
/*!*********************!*\
  !*** ./src/code.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _drawTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawTodos */ \"./src/drawTodos.js\");\nconst root = document.getElementById(\"root\");\r\n\r\n\r\n\r\nconst main_columns = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"columns\", root, \"afterbegin\");\r\nmain_columns.style.paddingTop = \"2em\";\r\nconst column = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"column\", main_columns, \"afterbegin\");\r\ncolumn.classList.add(\"is-half\");\r\ncolumn.classList.add(\"is-offset-one-quarter\");\r\nconst input = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", \"\", \"input\", column, \"afterbegin\");\r\nconst column2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"column\", main_columns, \"beforeEnd\");\r\nconst btn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", \"add\", \"button\", column2, \"beforeEnd\");\r\nconst toggle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", '', 'toggle', column2, \"beforeEnd\");\r\ntoggle.setAttribute(\"type\", \"checkbox\")\r\nbtn.classList.add(\"is-primary\");\r\nconst ol = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ol\", \"\", \"ol\", column, \"beforeend\"); // обертка списка\r\nol.style.margin = \"1em 0 0 2em\";\r\nol.setAttribute(\"type\", \"a\");\r\nlet todo = [];\r\nlet delete_btns = [];\r\n\r\nwindow.onload= () =>{\r\n  todo = JSON.parse(localStorage.getItem('todo'))\r\n  if(todo){\r\n    (0,_drawTodos__WEBPACK_IMPORTED_MODULE_1__.drawTodos)(todo, ol, delete_btns)\r\n  }\r\n}\r\n\r\nbtn.onclick = () => {\r\n  addTodo();\r\n};\r\n\r\ninput.onkeydown = (e) => {\r\n  if (e.code == \"Enter\") {\r\n    addTodo();\r\n  }\r\n};\r\nlet flag = false;\r\ntoggle.onchange = () =>{\r\nif(!flag){\r\n  document.body.style.backgroundColor = \"black\";\r\n  flag = true\r\n  }else{\r\n    document.body.style.backgroundColor = \"white\";\r\n    flag = false;\r\n  }\r\n}\r\n\r\nfunction addTodo() {\r\n  if (input.value == \"\") {\r\n    return;\r\n  }\r\n  todo.push(input.value);\r\n  localStorage.setItem(\"todo\", JSON.stringify(todo))\r\n  ol.innerHTML = \"\";\r\n  input.value = \"\";\r\n  (0,_drawTodos__WEBPACK_IMPORTED_MODULE_1__.drawTodos)(todo,ol, delete_btns);\r\n}\r\n\r\n\r\n// оформить наш интерфейс\r\n// input уменьшить\r\n// посередке\r\n// кнопку справа\r\n// li добавить border\r\n// добавление дела на нажатие Enter\r\n// удаление li ( добавить для этого кнопку к li)\r\n// редактирование дела\r\n\n\n//# sourceURL=webpack://todo/./src/code.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(tag, content, className, parent, position) {\r\n    const el = document.createElement(tag);\r\n    el.innerText = content;\r\n    el.classList.add(className);\r\n    parent.insertAdjacentElement(position, el);\r\n    return el;\r\n}\n\n//# sourceURL=webpack://todo/./src/createElement.js?");

/***/ }),

/***/ "./src/drawTodos.js":
/*!**************************!*\
  !*** ./src/drawTodos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawTodos\": () => (/* binding */ drawTodos)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\r\n\r\nfunction drawTodos(todo, ol, delete_btns) {\r\n  todo.map((item, index) => {\r\n    let li = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", item, \"li\", ol, \"beforeend\");\r\n    li.style.marginTop = \"1em\";\r\n    li.setAttribute(\"key\", index);\r\n    let btn_delete = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\r\n      \"button\",\r\n      \"delete\",\r\n      \"button\",\r\n      li,\r\n      \"beforeend\"\r\n    );\r\n    btn_delete.classList.add(\"is-danger\");\r\n    btn_delete.classList.add(\"is-small\");\r\n    btn_delete.style.marginLeft = \"3em\";\r\n    delete_btns = [];\r\n    delete_btns.push(btn_delete);\r\n    delete_btns.map((btn) => {\r\n      btn.onclick = () => {\r\n        const key = btn.parentNode.getAttribute(\"key\");\r\n        todo.splice(key, 1);\r\n        btn.parentNode.remove();\r\n      };\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/drawTodos.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/code.js");
/******/ 	
/******/ })()
;