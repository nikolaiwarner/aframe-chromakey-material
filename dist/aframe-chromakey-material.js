/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("if (typeof AFRAME === 'undefined') {\n  throw new Error('Component attempted to register before AFRAME was available.')\n}\n\nAFRAME.registerShader('chromakey', {\n  schema: {\n    src: {type: 'map'},\n    color: {default: {x: 0.1, y: 0.9, z: 0.2}, type: 'vec3', is: 'uniform'},\n    transparent: {default: true, is: 'uniform'}\n  },\n\n  init: function (data) {\n    var videoTexture = new THREE.VideoTexture(data.src)\n    videoTexture.minFilter = THREE.LinearFilter\n    this.material = new THREE.ShaderMaterial({\n      uniforms: {\n        color: {\n          type: 'c',\n          value: data.color\n        },\n        myTexture: {\n          type: 't',\n          value: videoTexture\n        }\n      },\n      vertexShader: this.vertexShader,\n      fragmentShader: this.fragmentShader\n    })\n  },\n\n  update: function (data) {\n    this.material.color = data.color\n    this.material.src = data.src\n    this.material.transparent = data.transparent\n  },\n\n  vertexShader: [\n    'varying vec2 vUv;',\n    'void main(void)',\n    '{',\n    'vUv = uv;',\n    'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',\n    'gl_Position = projectionMatrix * mvPosition;',\n    '}'\n  ].join('\\n'),\n\n  fragmentShader: [\n    'uniform sampler2D myTexture;',\n    'uniform vec3 color;',\n    'varying vec2 vUv;',\n    'void main(void)',\n    '{',\n    'vec3 tColor = texture2D( myTexture, vUv ).rgb;',\n    'float a = (length(tColor - color) - 0.5) * 7.0;',\n    'gl_FragColor = vec4(tColor, a);',\n    '}'\n  ].join('\\n')\n})\n\n\n//# sourceURL=webpack://aframe-chromakey-material/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;