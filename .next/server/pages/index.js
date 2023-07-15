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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"react-confetti\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Home() {\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confettiActive, setConfettiActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setConfettiActive(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const countdown = setInterval(()=>{\n            const targetTime = new Date().setHours(21, 0, 0, 0);\n            const currentTime = new Date();\n            let timeDifference = targetTime - currentTime;\n            if (timeDifference <= 0) {\n                setTimeLeft(`0 horas, 0 minutos, 0 segundos`);\n                return;\n            }\n            const hours = Math.floor(timeDifference / (1000 * 60 * 60));\n            const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n            setTimeLeft(`${hours} horas, ${minutes} minutos, ${seconds} segundos`);\n        }, 1000);\n        return ()=>clearInterval(countdown);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mjMusic = document.getElementById(\"mj-music\");\n        if (!mjMusic) return;\n        mjMusic.play();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Oi, Lorena\"\n            }, void 0, false, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Faltam exatamente: \",\n                    timeLeft,\n                    \" para a gente sair juntos\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Preparada?\"\n            }, void 0, false, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGreen),\n                        children: \"\\uD83D\\uDC4D\"\n                    }, void 0, false, {\n                        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    confettiActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonRed),\n                        children: \"\\uD83D\\uDC4E\"\n                    }, void 0, false, {\n                        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                src: \"/taylor.mp4\",\n                id: \"mj-music\"\n            }, void 0, false, {\n                fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jao/Code/clone-tabnews/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0g7QUFDSDtBQUd0QyxTQUFTSSxPQUFPO0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUUxRCxNQUFNUyxjQUFjLElBQU07UUFDeEJELGtCQUFrQixJQUFJO0lBQ3hCO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxZQUFZQyxZQUFZLElBQU07WUFDbEMsTUFBTUMsYUFBYSxJQUFJQyxPQUFPQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUc7WUFDakQsTUFBTUMsY0FBYyxJQUFJRjtZQUN4QixJQUFJRyxpQkFBaUJKLGFBQWFHO1lBRWxDLElBQUlDLGtCQUFrQixHQUFHO2dCQUN2QlYsWUFBWSxDQUFDLDhCQUE4QixDQUFDO2dCQUM1QztZQUNGLENBQUM7WUFFRCxNQUFNVyxRQUFRQyxLQUFLQyxLQUFLLENBQUNILGlCQUFrQixRQUFPLEtBQUssRUFBQztZQUN4RCxNQUFNSSxVQUFVRixLQUFLQyxLQUFLLENBQUMsaUJBQW1CLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO1lBQzFFLE1BQU1FLFVBQVVILEtBQUtDLEtBQUssQ0FBQyxpQkFBbUIsUUFBTyxFQUFDLElBQU07WUFFNURiLFlBQVksQ0FBQyxFQUFFVyxNQUFNLFFBQVEsRUFBRUcsUUFBUSxVQUFVLEVBQUVDLFFBQVEsU0FBUyxDQUFDO1FBQ3ZFLEdBQUc7UUFFSCxPQUFPLElBQU1DLGNBQWNaO0lBQzdCLEdBQUcsRUFBRTtJQUVMVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXNCLFVBQVVDLFNBQVNDLGNBQWMsQ0FBQztRQUN4QyxJQUFJLENBQUNGLFNBQVM7UUFDZEEsUUFBUUcsSUFBSTtJQUNkLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXMUIscUVBQWdCOzswQkFFOUIsOERBQUM0QjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQUU7b0JBQW9CMUI7b0JBQVM7Ozs7Ozs7MEJBRWhDLDhEQUFDeUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0g7O2tDQUNDLDhEQUFDSzt3QkFBT0MsU0FBU3hCO3dCQUFhbUIsV0FBVzFCLHVFQUFrQjtrQ0FBRTs7Ozs7O29CQUM1REssZ0NBQWtCLDhEQUFDSix1REFBUUE7Ozs7O2tDQUM1Qiw4REFBQzZCO3dCQUFPSixXQUFXMUIscUVBQWdCO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBYXZDLDhEQUFDa0M7Z0JBQU1DLEtBQUk7Z0JBQWNDLElBQUc7Ozs7Ozs7Ozs7OztBQUdsQztBQUVBLGlFQUFlbEMsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDb25mZXR0aSBmcm9tICdyZWFjdC1jb25mZXR0aSc7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29uZmV0dGlBY3RpdmUsIHNldENvbmZldHRpQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRDb25mZXR0aUFjdGl2ZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnRkb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRUaW1lID0gbmV3IERhdGUoKS5zZXRIb3VycygyMSwgMCwgMCwgMCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IHRpbWVEaWZmZXJlbmNlID0gdGFyZ2V0VGltZSAtIGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgaWYgKHRpbWVEaWZmZXJlbmNlIDw9IDApIHtcclxuICAgICAgICBzZXRUaW1lTGVmdChgMCBob3JhcywgMCBtaW51dG9zLCAwIHNlZ3VuZG9zYCk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICBzZXRUaW1lTGVmdChgJHtob3Vyc30gaG9yYXMsICR7bWludXRlc30gbWludXRvcywgJHtzZWNvbmRzfSBzZWd1bmRvc2ApO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtak11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtai1tdXNpY1wiKTtcclxuICAgIGlmICghbWpNdXNpYykgcmV0dXJuO1xyXG4gICAgbWpNdXNpYy5wbGF5KCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICA8aDE+T2ksIExvcmVuYTwvaDE+XHJcbiAgICAgIDxwPkZhbHRhbSBleGF0YW1lbnRlOiB7dGltZUxlZnR9IHBhcmEgYSBnZW50ZSBzYWlyIGp1bnRvczwvcD5cclxuXHJcbiAgICAgIDxoMT5QcmVwYXJhZGE/PC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25HcmVlbn0+8J+RjTwvYnV0dG9uPlxyXG4gICAgICAgIHtjb25mZXR0aUFjdGl2ZSAmJiA8Q29uZmV0dGkgLz59XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25SZWR9PvCfkY48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPHZpZGVvXHJcbiAgICAgICAgY29udHJvbHNcclxuICAgICAgICB3aWR0aD1cIjI1MFwiXHJcbiAgICAgICAgc3JjPVwiL3RheWxvci5tcDRcIlxyXG4gICAgICAgIHR5cGU9XCJ2aWRlby93ZWJtXCJcclxuICAgICAgICB0aXRsZT1cIkV4YW1wbGUgVmlkZW9cIlxyXG4gICAgICAgIGF1dG9wbGF5PVwidHJ1ZVwiXHJcbiAgICAgICAgbXV0ZWQ9XCJ0cnVlXCJcclxuICAgICAgPjwvdmlkZW8+ICovfVxyXG5cclxuICAgICAgPGF1ZGlvIHNyYz1cIi90YXlsb3IubXA0XCIgaWQ9XCJtai1tdXNpY1wiPjwvYXVkaW8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ29uZmV0dGkiLCJIb21lIiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsImNvbmZldHRpQWN0aXZlIiwic2V0Q29uZmV0dGlBY3RpdmUiLCJoYW5kbGVDbGljayIsImNvdW50ZG93biIsInNldEludGVydmFsIiwidGFyZ2V0VGltZSIsIkRhdGUiLCJzZXRIb3VycyIsImN1cnJlbnRUaW1lIiwidGltZURpZmZlcmVuY2UiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY2xlYXJJbnRlcnZhbCIsIm1qTXVzaWMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJidXR0b25HcmVlbiIsImJ1dHRvblJlZCIsImF1ZGlvIiwic3JjIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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