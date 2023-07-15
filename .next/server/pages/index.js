/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/styles.module.css":
/*!*********************************!*\
  !*** ./pages/styles.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__PirOn\",\n\t\"buttonGreen\": \"styles_buttonGreen__rKV8_\",\n\t\"buttonRed\": \"styles_buttonRed__L09WC\",\n\t\"video\": \"styles_video__S1mej\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHlsZXMubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9zdHlsZXMubW9kdWxlLmNzcz81OWVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX1Bpck9uXCIsXG5cdFwiYnV0dG9uR3JlZW5cIjogXCJzdHlsZXNfYnV0dG9uR3JlZW5fX3JLVjhfXCIsXG5cdFwiYnV0dG9uUmVkXCI6IFwic3R5bGVzX2J1dHRvblJlZF9fTDA5V0NcIixcblx0XCJ2aWRlb1wiOiBcInN0eWxlc192aWRlb19fUzFtZWpcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"react-confetti\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Home() {\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confettiActive, setConfettiActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setConfettiActive(true);\n        const mjMusic = document.getElementById(\"mj-music\");\n        if (!mjMusic) return;\n        mjMusic.play();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const countdown = setInterval(()=>{\n            const targetTime = new Date().setHours(21, 0, 0, 0);\n            const currentTime = new Date();\n            let timeDifference = targetTime - currentTime;\n            if (timeDifference <= 0) {\n                setTimeLeft(`0 horas, 0 minutos, 0 segundos`);\n                return;\n            }\n            const hours = Math.floor(timeDifference / (1000 * 60 * 60));\n            const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n            setTimeLeft(`${hours} horas, ${minutes} minutos, ${seconds} segundos`);\n        }, 1000);\n        return ()=>clearInterval(countdown);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Oi, Lorena\"\n            }, void 0, false, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Faltam exatamente: \",\n                    timeLeft,\n                    \" para a gente sair juntos\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Preparada?\"\n            }, void 0, false, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGreen),\n                        children: \"\\uD83D\\uDC4D\"\n                    }, void 0, false, {\n                        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    confettiActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonRed),\n                        children: \"\\uD83D\\uDC4E\"\n                    }, void 0, false, {\n                        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"/taylor.mp4\",\n                id: \"mj-music\"\n            }, void 0, false, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0g7QUFDSDtBQUd0QyxTQUFTSSxPQUFPO0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUUxRCxNQUFNUyxjQUFjLElBQU07UUFDeEJELGtCQUFrQixJQUFJO1FBRXRCLE1BQU1FLFVBQVVDLFNBQVNDLGNBQWMsQ0FBQztRQUN4QyxJQUFJLENBQUNGLFNBQVM7UUFDZEEsUUFBUUcsSUFBSTtJQUNkO0lBRUFaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYSxZQUFZQyxZQUFZLElBQU07WUFDbEMsTUFBTUMsYUFBYSxJQUFJQyxPQUFPQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUc7WUFDakQsTUFBTUMsY0FBYyxJQUFJRjtZQUN4QixJQUFJRyxpQkFBaUJKLGFBQWFHO1lBRWxDLElBQUlDLGtCQUFrQixHQUFHO2dCQUN2QmQsWUFBWSxDQUFDLDhCQUE4QixDQUFDO2dCQUM1QztZQUNGLENBQUM7WUFFRCxNQUFNZSxRQUFRQyxLQUFLQyxLQUFLLENBQUNILGlCQUFrQixRQUFPLEtBQUssRUFBQztZQUN4RCxNQUFNSSxVQUFVRixLQUFLQyxLQUFLLENBQUMsaUJBQW1CLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO1lBQzFFLE1BQU1FLFVBQVVILEtBQUtDLEtBQUssQ0FBQyxpQkFBbUIsUUFBTyxFQUFDLElBQU07WUFFNURqQixZQUFZLENBQUMsRUFBRWUsTUFBTSxRQUFRLEVBQUVHLFFBQVEsVUFBVSxFQUFFQyxRQUFRLFNBQVMsQ0FBQztRQUN2RSxHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjWjtJQUM3QixHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVzFCLHFFQUFnQjs7MEJBRTlCLDhEQUFDNEI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFFO29CQUFvQjFCO29CQUFTOzs7Ozs7OzBCQUVoQyw4REFBQ3lCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNIOztrQ0FDQyw4REFBQ0s7d0JBQU9DLFNBQVN4Qjt3QkFBYW1CLFdBQVcxQix1RUFBa0I7a0NBQUU7Ozs7OztvQkFDNURLLGdDQUFrQiw4REFBQ0osdURBQVFBOzs7OztrQ0FDNUIsOERBQUM2Qjt3QkFBT0osV0FBVzFCLHFFQUFnQjtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ2tDO2dCQUFNQyxLQUFJO2dCQUFjQyxJQUFHOzs7Ozs7Ozs7Ozs7QUFHbEM7QUFFQSxpRUFBZWxDLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ29uZmV0dGkgZnJvbSAncmVhY3QtY29uZmV0dGknO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbmZldHRpQWN0aXZlLCBzZXRDb25mZXR0aUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0Q29uZmV0dGlBY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgbWpNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWotbXVzaWNcIik7XHJcbiAgICBpZiAoIW1qTXVzaWMpIHJldHVybjtcclxuICAgIG1qTXVzaWMucGxheSgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldFRpbWUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDIxLCAwLCAwLCAwKTtcclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBsZXQgdGltZURpZmZlcmVuY2UgPSB0YXJnZXRUaW1lIC0gY3VycmVudFRpbWU7XHJcblxyXG4gICAgICBpZiAodGltZURpZmZlcmVuY2UgPD0gMCkge1xyXG4gICAgICAgIHNldFRpbWVMZWZ0KGAwIGhvcmFzLCAwIG1pbnV0b3MsIDAgc2VndW5kb3NgKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIHNldFRpbWVMZWZ0KGAke2hvdXJzfSBob3JhcywgJHttaW51dGVzfSBtaW51dG9zLCAke3NlY29uZHN9IHNlZ3VuZG9zYCk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgPGgxPk9pLCBMb3JlbmE8L2gxPlxyXG4gICAgICA8cD5GYWx0YW0gZXhhdGFtZW50ZToge3RpbWVMZWZ0fSBwYXJhIGEgZ2VudGUgc2FpciBqdW50b3M8L3A+XHJcblxyXG4gICAgICA8aDE+UHJlcGFyYWRhPzwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JlZW59PvCfkY08L2J1dHRvbj5cclxuICAgICAgICB7Y29uZmV0dGlBY3RpdmUgJiYgPENvbmZldHRpIC8+fVxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uUmVkfT7wn5GOPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGF1ZGlvIHNyYz1cIi90YXlsb3IubXA0XCIgaWQ9XCJtai1tdXNpY1wiPjwvYXVkaW8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ29uZmV0dGkiLCJIb21lIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsImNvbmZldHRpQWN0aXZlIiwic2V0Q29uZmV0dGlBY3RpdmUiLCJoYW5kbGVDbGljayIsIm1qTXVzaWMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheSIsImNvdW50ZG93biIsInNldEludGVydmFsIiwidGFyZ2V0VGltZSIsIkRhdGUiLCJzZXRIb3VycyIsImN1cnJlbnRUaW1lIiwidGltZURpZmZlcmVuY2UiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJidXR0b25HcmVlbiIsImJ1dHRvblJlZCIsImF1ZGlvIiwic3JjIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-confetti":
/*!*********************************!*\
  !*** external "react-confetti" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-confetti");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();