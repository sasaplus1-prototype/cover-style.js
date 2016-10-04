/*!
 * @license cover-style.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/cover-style.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["coverStyle"] = factory();
	else
		root["coverStyle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function get(params) {
	  var elementWidth = parseFloat(params.elementWidth),
	      elementHeight = parseFloat(params.elementHeight),
	      containerWidth = parseFloat(params.containerWidth),
	      containerHeight = parseFloat(params.containerHeight),
	      elementRatio, containerRatio, t, l, w, h, mt, ml;

	  if (isNaN(elementWidth) || isNaN(elementHeight)) {
	    throw new Error('elementWidth or elementHeight are NaN');
	  }
	  if (isNaN(containerWidth) || isNaN(containerHeight)) {
	    throw new Error('containerWidth or containerHeight are NaN');
	  }

	  elementRatio = elementWidth / elementHeight;
	  containerRatio = containerWidth / containerHeight;

	  if (elementRatio > containerRatio) {
	    w = 'auto';
	    h = '100%';

	    t = 0;
	    l = '50%';

	    mt = 0;
	    ml = (- (containerHeight * elementRatio) / 2) + 'px';
	  } else {
	    w = '100%';
	    h = 'auto';

	    t = '50%';
	    l = 0;

	    mt = (- (containerWidth / elementRatio) / 2) + 'px';
	    ml = 0;
	  }

	  return {
	    top: t,
	    left: l,
	    width: w,
	    height: h,
	    marginTop: mt,
	    marginLeft: ml
	  };
	}

	module.exports = {
	  get: get
	};


/***/ }
/******/ ])
});
;