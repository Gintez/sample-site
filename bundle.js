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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__ (1);

	// MENU TOGGLE FOR TABLET AND MOBILE
	document.getElementById('menu-icon').addEventListener('click', toggleMenu);

	function toggleMenu() {
	  var currentClass = document.getElementById('nav-bar').classList;
	  if(currentClass.contains('hidden')) {
	    currentClass.remove('hidden');
	  } else {
	    currentClass.add('hidden');
	  }
	}

	// FORM VALIDATION
	var msgForm = document.getElementById('msg-form');
	msgForm.addEventListener('submit', validateForm);

	function validateForm(e) {

	  var name = document.getElementById('name').value;
	  var nameError = document.getElementById('errorName');
	  var lastName = document.getElementById('last-name').value;
	  var lastNameError = document.getElementById('errorLastName');
	  var userMessage = document.getElementById('msg').value;
	  var userMessageError = document.getElementById('errorMsg');
	  var errors = 0;

	  if(name == '') {
	    errors ++;
	    nameError.innerHTML = 'Please specify your name.';
	  } else {
	    nameError.innerHTML = '';
	  }

	  if(lastName == '') {
	    errors ++;
	    lastNameError.innerHTML = 'Please specify your last name.';
	  } else {
	    lastNameError.innerHTML = '';
	  }

	  if(userMessage == '') {
	    errors ++;
	    userMessageError.innerHTML = 'Please enter your message.';
	  } else {
	    userMessageError.innerHTML = '';
	  }

	  if(errors != 0) {
	    e.preventDefault();
	  }
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);