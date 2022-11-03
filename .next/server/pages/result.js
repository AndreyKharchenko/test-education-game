"use strict";
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
exports.id = "pages/result";
exports.ids = ["pages/result"];
exports.modules = {

/***/ "./components/Button.tsx":
/*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ \"@emotion/css\");\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Up or Down Buttons\nconst StyledUpDownButton = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`\r\n    height: 45px;\r\n    width: 234px;\r\n    border-radius: 20px;\r\n    background-color: #FFD748;\r\n    border: none;\r\n    cursor: pointer;\r\n`;\n// start or Finish Buttons\nconst StyledStartFinishButton = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`\r\n    height: 68px;\r\n    width: 263px;\r\n    border-radius: 20px;\r\n    background-color: #2BD600;\r\n    border: none;\r\n    cursor: pointer;\r\n`;\nconst StyledUpDownText = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().span)`\r\n    font-family: Calibri;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    line-height: 39px;\r\n    letter-spacing: 0px;\r\n    text-align: left;\r\n`;\nconst StyledStartFinishText = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().span)`\r\n    font-family: Helvetica;\r\n    font-size: 32px;\r\n    font-weight: 400;\r\n    line-height: 44px;\r\n    letter-spacing: 0px;\r\n    text-align: left;\r\n    color: #FFF;\r\n`;\nconst activeBtn = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`\r\n    opacity:50%;\r\n`;\nconst Button = ({ btnText , btnType , method , active  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: btnType == \"up\" || btnType == \"down\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledUpDownButton, {\n            className: active != btnType ? activeBtn : null,\n            onClick: ()=>method(btnType),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledUpDownText, {\n                children: btnText\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Button.tsx\",\n                lineNumber: 60,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Button.tsx\",\n            lineNumber: 59,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledStartFinishButton, {\n            onClick: ()=>method(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledStartFinishText, {\n                children: btnText\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Button.tsx\",\n                lineNumber: 64,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Button.tsx\",\n            lineNumber: 63,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Button.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQW9DO0FBQ0o7QUFDaEMscUJBQXFCO0FBQ3JCLE1BQU1FLHFCQUFxQkYsK0RBQWEsQ0FBQztBQVN6QztBQUNBLE1BQU1JO0FBU04sTUFBTUMsbUJBQW1CTDtBQVN6QixNQUFNTyx3QkFBd0JQO0FBVTlCLE1BQU1RLFlBQVlQO0FBV2xCLE1BQU1RLFNBQWdDLENBQUMsRUFBQ0M7O2tCQUl4QjtZQUVvQkssV0FBV0YsU0FBQUEsK0RBQW9CTDtZQUFrQlE7Ozs7Ozs7Ozs7Ozs7WUFJNUNBLFNBQVM7OzBCQUNOTixJQUFBQSw2REFBQUE7Ozs7Ozs7Ozs7Z0JBQ0Y7Ozs7OztBQUkxQztBQUVBLGVBQWVELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0X2dhbWUvLi9jb21wb25lbnRzL0J1dHRvbi50c3g/NzQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NzcydcclxuLy8gVXAgb3IgRG93biBCdXR0b25zXHJcbmNvbnN0IFN0eWxlZFVwRG93bkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMjM0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDc0ODtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuLy8gc3RhcnQgb3IgRmluaXNoIEJ1dHRvbnNcclxuY29uc3QgU3R5bGVkU3RhcnRGaW5pc2hCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgd2lkdGg6IDI2M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQkQ2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFN0eWxlZFVwRG93blRleHQgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmBcclxuXHJcbmNvbnN0IFN0eWxlZFN0YXJ0RmluaXNoVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbmBcclxuXHJcbmNvbnN0IGFjdGl2ZUJ0biA9IGNzc2BcclxuICAgIG9wYWNpdHk6NTAlO1xyXG5gXHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gICAgYnRuVGV4dDogc3RyaW5nO1xyXG4gICAgYnRuVHlwZTogc3RyaW5nO1xyXG4gICAgbWV0aG9kPzogKCgpID0+IHZvaWQpIHwgKCh2YWw6IHN0cmluZykgPT4gdm9pZCk7IFxyXG4gICAgYWN0aXZlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHtidG5UZXh0LCBidG5UeXBlLCBtZXRob2QsIGFjdGl2ZX0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoYnRuVHlwZSA9PSAndXAnIHx8IGJ0blR5cGUgPT0gJ2Rvd24nKVxyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFVwRG93bkJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZSAhPSBidG5UeXBlID8gYWN0aXZlQnRuIDogbnVsbH0gb25DbGljaz17KCkgPT4gbWV0aG9kKGJ0blR5cGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVXBEb3duVGV4dD57YnRuVGV4dH08L1N0eWxlZFVwRG93blRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFVwRG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxTdHlsZWRTdGFydEZpbmlzaEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtZXRob2QoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFN0YXJ0RmluaXNoVGV4dD57YnRuVGV4dH08L1N0eWxlZFN0YXJ0RmluaXNoVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkU3RhcnRGaW5pc2hCdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwiU3R5bGVkVXBEb3duQnV0dG9uIiwiYnV0dG9uIiwiU3R5bGVkU3RhcnRGaW5pc2hCdXR0b24iLCJTdHlsZWRVcERvd25UZXh0Iiwic3BhbiIsIlN0eWxlZFN0YXJ0RmluaXNoVGV4dCIsImFjdGl2ZUJ0biIsIkJ1dHRvbiIsImJ0blRleHQiLCJidG5UeXBlIiwibWV0aG9kIiwiYWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button.tsx\n");

/***/ }),

/***/ "./components/Title.tsx":
/*!******************************!*\
  !*** ./components/Title.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StyledTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`\r\n    font-family: Helvetica;\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    line-height: 44px;\r\n    letter-spacing: 0px;\r\n    text-align: center;\r\n    color: #423F45;\r\n`;\nconst StyledWinTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`\r\n    font-family: Helvetica;\r\n    font-size: 98px;\r\n    font-weight: 400;\r\n    line-height: 163px;\r\n    letter-spacing: 0px;\r\n    text-align: center;\r\n    color: #FFE44F;\r\n\r\n`;\nconst StyledUpDownTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`\r\n    font-family: Helvetica;\r\n    font-size: 50px;\r\n    font-weight: 400;\r\n    line-height: 163px;\r\n    letter-spacing: 0px;\r\n    text-align: center;\r\n    color: #FFF;\r\n\r\n`;\nconst Title = ({ title , titleType  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: titleType == \"win\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledWinTitle, {\n            children: title\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Title.tsx\",\n            lineNumber: 46,\n            columnNumber: 21\n        }, undefined) : titleType == \"upDown\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledUpDownTitle, {\n            children: title\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Title.tsx\",\n            lineNumber: 50,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {\n            children: title\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\components\\\\Title.tsx\",\n            lineNumber: 52,\n            columnNumber: 21\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpdGxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW9DO0FBRXBDLE1BQU1DLGNBQWNELDREQUFVLENBQUM7QUFVL0IsTUFBTUcsaUJBQWlCSDtBQVd2QixNQUFNSTtBQWdCTixNQUFNQyxRQUE4QixDQUFDLEVBQUNDLE1BQUs7SUFDdkM7a0JBR1k7c0JBRXFCQTs7Ozs7bUJBRXJCO3NCQUV3QkE7Ozs7Ozs7Ozs7O2dCQUVjOztBQUl0RDtBQUVBLGVBQWVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdF9nYW1lLy4vY29tcG9uZW50cy9UaXRsZS50c3g/OGUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNDIzRjQ1O1xyXG5gXHJcblxyXG5jb25zdCBTdHlsZWRXaW5UaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgZm9udC1zaXplOiA5OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRTQ0RjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IFN0eWxlZFVwRG93blRpdGxlID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2M3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG5cclxuYFxyXG5cclxuaW50ZXJmYWNlIFRpdGxlUHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHRpdGxlVHlwZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUaXRsZTogUmVhY3QuRkM8VGl0bGVQcm9wcz4gPSAoe3RpdGxlLCB0aXRsZVR5cGV9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKHRpdGxlVHlwZSA9PSAnd2luJylcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkV2luVGl0bGU+e3RpdGxlfTwvU3R5bGVkV2luVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAodGl0bGVUeXBlID09ICd1cERvd24nKVxyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRVcERvd25UaXRsZT57dGl0bGV9PC9TdHlsZWRVcERvd25UaXRsZT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+e3RpdGxlfTwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRUaXRsZSIsImRpdiIsIlN0eWxlZFdpblRpdGxlIiwiU3R5bGVkVXBEb3duVGl0bGUiLCJUaXRsZSIsInRpdGxlIiwidGl0bGVUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Title.tsx\n");

/***/ }),

/***/ "./pages/result.tsx":
/*!**************************!*\
  !*** ./pages/result.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/css */ \"@emotion/css\");\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst ResultPage = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\r\n    background-image: url(static/background1.jpg);\r\n    height: 98vh;\r\n    padding-top: 5rem;\r\n`;\nconst Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\r\n    border: 10px solid #101F32;\r\n    border-image: linear-gradient(to right top, #8D67DF00, #67DF89, #8D67DF00);\r\n    border-image-slice: 1;\r\n    height: 480px;\r\n    width: 621px;\r\n    margin: 0 auto;\r\n    background-color: #FFF;\r\n`;\nconst ResultText = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\r\n  font-family: Helvetica;\r\n  font-size: 30px;\r\n  font-weight: 400;\r\n  line-height: 51px;\r\n  letter-spacing: 0px;\r\n  text-align: center;\r\n  color: rgba(95, 64, 161, 1);\r\n  margin-bottom: 3rem;\r\n`;\nconst flexContainer = _emotion_css__WEBPACK_IMPORTED_MODULE_3__.css`\r\n    display: flex; \r\n    justify-content: space-evenly;\r\n`;\nconst Result = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const handleRouterClick = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResultPage, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    titleType: \"win\",\n                    title: \"Победа!\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\pages\\\\result.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResultText, {\n                    children: \"Молодец! Ты успешно справился с заданием!\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\pages\\\\result.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: flexContainer,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        btnText: \"Заново\",\n                        btnType: \"repeat\",\n                        method: handleRouterClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\pages\\\\result.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\pages\\\\result.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\pages\\\\result.tsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\React\\\\test_game\\\\pages\\\\result.tsx\",\n        lineNumber: 45,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Result);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNZO0FBQ0w7QUFDUTtBQUNFO0FBQ0Y7QUFFeEMsTUFBTU0sYUFBYUwsNERBQVUsQ0FBQztBQU05QixNQUFNTyxZQUFZUCxPQUFPTSxHQUFHLENBQUM7QUFVN0IsTUFBTUU7QUFXTixNQUFNQyxnQkFBZ0JSO0FBSXRCO0lBQ0UsTUFBTVUsUUFBQUEsNERBQVNQO0lBQ2YsTUFBTVEsb0JBQW9CO1FBQ3RCRCxPQUFPRSxJQUFJLENBQUM7SUFDaEI7SUFDRTtrQkFFSTs7OzsrRUFDK0I7Ozs7Ozs7OEJBQ2pCOzs7Ozs7O29CQUNQRzsyRUFDRDt3QkFBUUMsU0FBUTt3QkFBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZDO0FBRUEsZUFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RfZ2FtZS8uL3BhZ2VzL3Jlc3VsdC50c3g/OGE4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NzcydcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGUnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgUmVzdWx0UGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RhdGljL2JhY2tncm91bmQxLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDk4dmg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuYFxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjMTAxRjMyO1xyXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjOEQ2N0RGMDAsICM2N0RGODksICM4RDY3REYwMCk7XHJcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgd2lkdGg6IDYyMXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5gXHJcblxyXG5jb25zdCBSZXN1bHRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2JhKDk1LCA2NCwgMTYxLCAxKTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5gIFxyXG5cclxuY29uc3QgZmxleENvbnRhaW5lciA9IGNzc2BcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbmBcclxuY29uc3QgUmVzdWx0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZVJvdXRlckNsaWNrID0gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZXN1bHRQYWdlPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8VGl0bGUgdGl0bGVUeXBlPSd3aW4nIHRpdGxlPSfQn9C+0LHQtdC00LAhJyAvPlxyXG4gICAgICAgICAgPFJlc3VsdFRleHQ+0JzQvtC70L7QtNC10YYhINCi0Ysg0YPRgdC/0LXRiNC90L4g0YHQv9GA0LDQstC40LvRgdGPINGBINC30LDQtNCw0L3QuNC10LwhPC9SZXN1bHRUZXh0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZsZXhDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gYnRuVGV4dD0n0JfQsNC90L7QstC+JyBidG5UeXBlPSdyZXBlYXQnIG1ldGhvZD17aGFuZGxlUm91dGVyQ2xpY2t9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9SZXN1bHRQYWdlPlxyXG4gICAgKTtcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImNzcyIsIlRpdGxlIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiUmVzdWx0UGFnZSIsImRpdiIsIkNvbnRhaW5lciIsIlJlc3VsdFRleHQiLCJmbGV4Q29udGFpbmVyIiwiUmVzdWx0Iiwicm91dGVyIiwiaGFuZGxlUm91dGVyQ2xpY2siLCJwdXNoIiwidGl0bGVUeXBlIiwidGl0bGUiLCJjbGFzc05hbWUiLCJidG5UZXh0IiwiYnRuVHlwZSIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/result.tsx\n");

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@emotion/css");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/result.tsx"));
module.exports = __webpack_exports__;

})();