module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[...slug].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/[...slug].jsx":
/*!**********************************!*\
  !*** ./pages/blog/[...slug].jsx ***!
  \**********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_mdx_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-mdx/server */ \"next-mdx/server\");\n/* harmony import */ var next_mdx_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_mdx_server__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/zeynepozdem/nextjs-mdx-tailwind-triple/pages/blog/[...slug].jsx\";\n\n\nfunction PostPage({\n  post\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: post.frontMatter.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: post.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 12\n  }, this);\n}\n\nasync function getStaticPaths() {\n  return {\n    paths: await Object(next_mdx_server__WEBPACK_IMPORTED_MODULE_1__[\"getMdxPaths\"])(\"post\"),\n    fallback: false\n  };\n}\nasync function getStaticProps(context) {\n  const post = await Object(next_mdx_server__WEBPACK_IMPORTED_MODULE_1__[\"getMdxNode\"])(\"post\", context);\n\n  if (!post) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      post\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1suLi5zbHVnXS5qc3g/YzNhYyJdLCJuYW1lcyI6WyJQb3N0UGFnZSIsInBvc3QiLCJmcm9udE1hdHRlciIsInRpdGxlIiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJnZXRNZHhQYXRocyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZ2V0TWR4Tm9kZSIsIm5vdEZvdW5kIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBQ0M7QUFBRCxDQUFsQixFQUEwQjtBQUV0QixzQkFBTztBQUFBLDRCQUNIO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBRUg7QUFBQSxnQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUlEOztBQUVNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsU0FBTztBQUNMQyxTQUFLLEVBQUUsTUFBTUMsbUVBQVcsQ0FBQyxNQUFELENBRG5CO0FBRUxDLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1ULElBQUksR0FBRyxNQUFNVSxrRUFBVSxDQUFDLE1BQUQsRUFBU0QsT0FBVCxDQUE3Qjs7QUFFQSxNQUFJLENBQUNULElBQUwsRUFBVztBQUNULFdBQU87QUFDTFcsY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xaO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFWUQsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1suLi5zbHVnXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGdldE1keE5vZGUsIGdldE1keFBhdGhzIH0gZnJvbSBcIm5leHQtbWR4L3NlcnZlclwiXG5cbmZ1bmN0aW9uIFBvc3RQYWdlKHtwb3N0fSkge1xuICAgIFxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDE+e3Bvc3QuZnJvbnRNYXR0ZXIudGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgPC9kaXY+XG4gIH1cbiAgXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aHM6IGF3YWl0IGdldE1keFBhdGhzKFwicG9zdFwiKSxcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldE1keE5vZGUoXCJwb3N0XCIsIGNvbnRleHQpXG4gIFxuICAgIGlmICghcG9zdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9zdCxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[...slug].jsx\n");

/***/ }),

/***/ "next-mdx/server":
/*!**********************************!*\
  !*** external "next-mdx/server" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-mdx/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LW1keC9zZXJ2ZXJcIj9mZTdlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtbWR4L3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtbWR4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-mdx/server\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });