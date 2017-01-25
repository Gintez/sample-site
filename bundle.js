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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*\n  HTML5 Reset :: style.css\n  ----------------------------------------------------------\n  We have learned much from/been inspired by/taken code where offered from:\n  Eric Meyer          :: http://meyerweb.com\n  HTML5 Doctor        :: http://html5doctor.com\n  and the HTML5 Boilerplate :: http://html5boilerplate.com\n-------------------------------------------------------------------------------*/\n/* Let's default this\n-------------------------------------------------------------------------------*/\nhtml, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  background: transparent; }\n\nmain, article, aside, figure, footer, header, nav, section, details, summary {\n  display: block; }\n\n/* Handle box-sizing while better addressing child elements:\n   http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\n/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */\n/* Responsive images and other embedded objects */\n/* if you don't have full control over `img` tags (if you have to overcome attributes), consider adding height: auto */\nimg,\nobject,\nembed {\n  max-width: 100%; }\n\n/*\n   Note: keeping IMG here will cause problems if you're using foreground images as sprites.\n  In fact, it *will* cause problems with Google Maps' controls at small size.\n  If this is the case for you, try uncommenting the following:\n#map img {\n    max-width: none;\n}\n*/\n/* force a vertical scrollbar to prevent a jumpy page */\nhtml {\n  overflow-y: scroll; }\n\n/* we use a lot of ULs that aren't bulleted.\n  you'll have to restore the bullets within content,\n  which is fine because they're probably customized anyway */\nul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help; }\n\n/* tables still need cellspacing=\"0\" in the markup */\ntable {\n  border-collapse: separate;\n  border-spacing: 0; }\n\nth {\n  font-weight: bold;\n  vertical-align: bottom; }\n\ntd {\n  font-weight: normal;\n  vertical-align: top; }\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\npre {\n  white-space: pre;\n  /* CSS2 */\n  white-space: pre-wrap;\n  /* CSS 2.1 */\n  white-space: pre-line;\n  /* CSS 3 (and 2.1 as well, actually) */\n  word-wrap: break-word;\n  /* IE */ }\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom; }\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom; }\n\n.ie7 input[type=\"checkbox\"] {\n  vertical-align: baseline; }\n\n.ie6 input {\n  vertical-align: text-bottom; }\n\nselect, input, textarea {\n  font: 99% sans-serif; }\n\ntable {\n  font-size: inherit;\n  font: 100%; }\n\nsmall {\n  font-size: 85%; }\n\nstrong {\n  font-weight: bold; }\n\ntd, td img {\n  vertical-align: top; }\n\n/* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* standardize any monospaced elements */\npre, code, kbd, samp {\n  font-family: monospace, sans-serif; }\n\n/* hand cursor on clickable elements */\n.clickable,\nlabel,\ninput[type=button],\ninput[type=submit],\ninput[type=file],\nbutton {\n  cursor: pointer; }\n\n/* Webkit browsers add a 2px margin outside the chrome of form elements */\nbutton, input, select, textarea {\n  margin: 0; }\n\n/* make buttons play nice in IE */\nbutton,\ninput[type=button] {\n  width: auto;\n  overflow: visible; }\n\n/* scale images in IE7 more attractively */\n.ie7 img {\n  -ms-interpolation-mode: bicubic; }\n\n/* prevent BG image flicker upon hover\n   (commented out as usage is rare, and the filter syntax messes with some pre-processors)\n.ie6 html {filter: expression(document.execCommand(\"BackgroundImageCache\", false, true));}\n*/\n/* let's clear some floats */\n.clearfix:after {\n  content: \" \";\n  display: block;\n  clear: both; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 10px;\n  padding-right: 10px; }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1030px; } }\n\n.row:before, .row:after, .container-fluid:before, .container-fluid:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.row {\n  margin-left: -10px;\n  margin-right: -10px; }\n\n.col {\n  position: relative;\n  float: left;\n  min-height: 1px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-11 {\n  width: 91.66666667%; }\n\n.col-xs-10 {\n  width: 83.33333333%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-8 {\n  width: 66.66666667%; }\n\n.col-xs-7 {\n  width: 58.33333333%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-5 {\n  width: 41.66666667%; }\n\n.col-xs-4 {\n  width: 33.33333333%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-2 {\n  width: 16.66666667%; }\n\n.col-xs-1 {\n  width: 8.33333333%; }\n\n@media (min-width: 740px) {\n  .col-md-12 {\n    width: 100%; }\n  .col-md-11 {\n    width: 91.66666667%; }\n  .col-md-10 {\n    width: 83.33333333%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-8 {\n    width: 66.66666667%; }\n  .col-md-7 {\n    width: 58.33333333%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-5 {\n    width: 41.66666667%; }\n  .col-md-4 {\n    width: 33.33333333%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-2 {\n    width: 16.66666667%; }\n  .col-md-1 {\n    width: 8.33333333%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-11 {\n    width: 91.66666667%; }\n  .col-lg-10 {\n    width: 83.33333333%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-8 {\n    width: 66.66666667%; }\n  .col-lg-7 {\n    width: 58.33333333%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-5 {\n    width: 41.66666667%; }\n  .col-lg-4 {\n    width: 33.33333333%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-2 {\n    width: 16.66666667%; }\n  .col-lg-1 {\n    width: 8.33333333%; } }\n\nbody {\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif; }\n\nnav li {\n  display: inline; }\n  nav li a {\n    text-decoration: none; }\n\n.header {\n  background-color: #d3135a;\n  height: 50px; }\n  @media (min-width: 1200px) {\n    .header {\n      height: 117px; } }\n\n.header-menu {\n  display: none; }\n  @media (min-width: 1200px) {\n    .header-menu {\n      display: block;\n      font-weight: normal;\n      float: right; } }\n\n.header-menu-secondary {\n  font-size: 14px;\n  margin-top: 24px; }\n  .header-menu-secondary a {\n    padding-left: 5px;\n    color: black; }\n    .header-menu-secondary a:hover {\n      opacity: 0.7; }\n\n.header-menu-main {\n  font-size: 20px;\n  margin-top: 40px; }\n  .header-menu-main a {\n    color: white;\n    padding-left: 10px; }\n    .header-menu-main a:hover {\n      color: #333333; }\n\n.header-title {\n  color: #ffc2dd;\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 10px; }\n  @media (min-width: 1200px) {\n    .header-title {\n      margin-top: 40px;\n      font-size: 59.63px; } }\n\nmain {\n  background-color: #e6e6e6;\n  color: #4d4d4d;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: normal;\n  padding-bottom: 20px; }\n\n@media (min-width: 1200px) {\n  .content-main {\n    max-width: 708px; } }\n\n.content-title {\n  color: black;\n  font-family: 'Times New Roman';\n  font-weight: bold; }\n\n.content-title-main {\n  font-size: 30px;\n  line-height: 30px;\n  padding: 15px 0; }\n  @media (min-width: 1200px) {\n    .content-title-main {\n      font-size: 37.49px;\n      line-height: 80.34px; } }\n\n.content-title-secondary {\n  font-size: 20px;\n  line-height: 20px; }\n  @media (min-width: 1200px) {\n    .content-title-secondary {\n      font-size: 24px;\n      line-height: 27px; } }\n\n.content-main-block {\n  background-color: white;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 0 15px 30px 15px; }\n  .content-main-block p {\n    padding-bottom: 15px; }\n  @media (min-width: 1200px) {\n    .content-main-block {\n      margin-top: 40px; } }\n\n.content-secondary-block {\n  background-color: white;\n  padding: 20px; }\n  @media (min-width: 1200px) {\n    .content-secondary-block {\n      height: 164px; } }\n\n.content-secondary-list {\n  margin-top: 20px; }\n  .content-secondary-list a {\n    text-decoration: none;\n    color: #0071bc;\n    line-height: 30px; }\n    .content-secondary-list a:hover {\n      opacity: 0.8; }\n  .content-secondary-list hr {\n    margin: 0; }\n  @media (min-width: 1200px) {\n    .content-secondary-list {\n      margin-top: 0; } }\n\n.highlights-block {\n  background-color: #cccccc;\n  padding: 20px;\n  margin-top: 20px; }\n  .highlights-block p {\n    padding: 10px 0; }\n  @media (min-width: 1200px) {\n    .highlights-block {\n      max-width: 1010px; }\n      .highlights-block p {\n        padding: 0; } }\n\n.msg-form-wrapper {\n  margin-top: 20px; }\n  @media (min-width: 1200px) {\n    .msg-form-wrapper {\n      margin-top: 40px;\n      min-width: 283px; } }\n\n.msg-form-breakline {\n  border-top: 3px solid #4d4d4d; }\n  @media (min-width: 1200px) {\n    .msg-form-breakline {\n      width: 283px; } }\n\n.msg-form {\n  border: 1px solid #898989;\n  padding: 20px;\n  margin-top: 30px; }\n  .msg-form label {\n    color: #010101; }\n  .msg-form input, .msg-form textarea {\n    width: 100%;\n    height: 31px;\n    border: 1px solid #898989;\n    padding: 10px;\n    margin: 5px 0 20px 0; }\n  .msg-form textarea {\n    height: 131px;\n    resize: none; }\n\n.msg-form-button {\n  background-color: #d3135a;\n  width: 100%;\n  height: 36px;\n  border: 0px;\n  color: #fefefe; }\n  .msg-form-button:hover {\n    opacity: 0.9; }\n  @media (min-width: 1200px) {\n    .msg-form-button {\n      width: 110px; } }\n\n.main-footer {\n  background-color: #666666; }\n  .main-footer p {\n    color: #b3b3b3;\n    font-size: 12px;\n    padding: 20px 0; }\n    @media (min-width: 1200px) {\n      .main-footer p {\n        min-width: 879px; } }\n  .main-footer h1 {\n    color: white;\n    font-size: 20px;\n    margin-bottom: 20px; }\n    @media (min-width: 1200px) {\n      .main-footer h1 {\n        font-size: 31.15px;\n        margin-top: 70px;\n        text-align: right;\n        margin-bottom: 0; } }\n\n.footer-menu {\n  color: white;\n  margin-top: 20px; }\n  .footer-menu a {\n    color: white;\n    font-size: 12px; }\n    .footer-menu a:hover {\n      opacity: 0.7; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);