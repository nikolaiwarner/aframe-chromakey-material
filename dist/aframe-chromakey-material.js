/******/ (function(modules) { // webpackBootstrap
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

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.')
	}

	AFRAME.registerShader('chromakey', {
	  schema: {
	    src: {type: 'map'},
	    color: {default: {x: 0.1, y: 0.9, z: 0.2}, type: 'vec3', is: 'uniform'},
	    transparent: {default: true}
	  },

	  vertexShader: [
	    'varying mediump vec2 vUv;',
	    'void main(void)',
	    '{',
	    'vUv = uv;',
	    'mediump vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
	    'gl_Position = projectionMatrix * mvPosition;',
	    '}'
	  ].join('\n'),

	  fragmentShader: [
	    'uniform mediump sampler2D texture;',
	    'uniform mediump vec3 color;',
	    'varying mediump vec2 vUv;',
	    'void main(void)',
	    '{',
	    'mediump vec3 tColor = texture2D( texture, vUv ).rgb;',
	    'mediump float a = (length(tColor - color) - 0.5) * 7.0;',
	    'gl_FragColor = vec4(tColor, a);',
	    '}'
	  ].join('\n')
	})


/***/ }
/******/ ]);