/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/VT323-Regular.ttf */ "./src/assets/VT323-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/battleship-header-bg.jpeg */ "./src/assets/battleship-header-bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #1f5f8b;\n  --primary-dark: #253b6e;\n  --primary-light: #d2ecf9;\n  --accent: #1891ac;\n  --font-main: VT323;\n}\n\n@font-face {\n  font-family: VT323;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-size: 12pt;\n  background-color: var(--primary-light);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  flex-shrink: 1;\n  height: 120px;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n#image-div {\n  background-color: var(--primary-dark);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  box-shadow: 0px 1px 10px 1px var(--primary);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#logo {\n  height: 100%;\n  padding: 10px;\n}\n\nsection {\n  background-color: var(--primary-light);\n}\n\n#game-setup,\n#ship-select,\n#game-over {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: var(--primary-dark);\n  border-radius: 5px;\n  width: 30%;\n  height: 200px;\n  margin: 5% auto;\n  padding: 15px;\n  box-shadow: 0px 0px 3px 1px var(--accent);\n  color: var(--primary-light);\n  font-size: 2rem;\n  font-family: var(--font-main);\n}\n\n#ship-select {\n  margin: 0;\n}\n\n#select-body {\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  padding: 10px 0;\n}\n\n#select-footer {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 20px 0;\n}\n\n.toggle-div {\n  width: 100px;\n  height: auto;\n  position: relative;\n  font-size: 1.3rem;\n  margin: 0 15px;\n}\n\n.toggle-div label,\n.toggle-div input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle-div input[type=\"radio\"] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.toggle-div input[type=\"radio\"]:checked + label {\n  background:  var(--accent);\n  color: var(--primary-light);\n  border-radius: 5px;\n  border-color: var(--accent);\n}\n\n.toggle-div label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n#game-info p{\n  margin: 15px 0;\n}\n\n#game-button {\n  display: flex;\n  justify-content: space-around;\n  width: 80%;\n}\n\nbutton {\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n  font-family: var(--font-main);\n  font-size: 1.5rem;\n  border-radius: 5px;\n  width: 80px;\n  height: auto;\n}\n\n.board {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#player-ships,\n#computer-ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n  height: 75%;\n  background-color: var(--primary);\n  border: 2px solid var(--primary-light);\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 2px var(--primary);\n}\n\n#player-ships img,\n#computer-ships img {\n  width: 70%;\n  padding: 10px;\n}\n\n#player-grid,\n#computer-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  background-color: var(--primary-light);\n  border-radius: 5px;\n  border: 4px solid var(--accent);\n  box-shadow: 0px 0px 5px 2px var(--primary);\n}\n\n#board-container {\n  display: none;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n\n.square {\n  border: 1px solid var(--accent);\n  background-size: contain;\n}\n\n#computer-grid .square {\n  background-color: var(--primary-dark);\n}\n\n#computer-grid .square:hover {\n  background-color: var(--primary);\n}\n\n#game-over {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  z-index: 50;\n}\n\n#game-over h2 {\n  margin: 5px 0;\n}\n\n#game-over p {\n  text-align: center;\n}\n\n#game-over :nth-child(3) {\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0;\n  width: 100%;\n}\n\n#quit-btn,\n#restart-btn {\n  width: 150px;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,4CAAkC;AACpC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,yDAAuD;EACvD,0BAA0B;EAC1B,4BAA4B;EAC5B,2CAA2C;EAC3C,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,qCAAqC;EACrC,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,eAAe;EACf,aAAa;EACb,yCAAyC;EACzC,2BAA2B;EAC3B,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,sCAAsC;EACtC,0BAA0B;EAC1B,6BAA6B;EAC7B,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,gCAAgC;EAChC,sCAAsC;EACtC,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;;EAEE,UAAU;EACV,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,kBAAkB;EAClB,+BAA+B;EAC/B,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd","sourcesContent":[":root {\n  --primary: #1f5f8b;\n  --primary-dark: #253b6e;\n  --primary-light: #d2ecf9;\n  --accent: #1891ac;\n  --font-main: VT323;\n}\n\n@font-face {\n  font-family: VT323;\n  src: url(assets/VT323-Regular.ttf);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-size: 12pt;\n  background-color: var(--primary-light);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  flex-shrink: 1;\n  height: 120px;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n#image-div {\n  background-color: var(--primary-dark);\n  background-image: url(assets/battleship-header-bg.jpeg);\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  box-shadow: 0px 1px 10px 1px var(--primary);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#logo {\n  height: 100%;\n  padding: 10px;\n}\n\nsection {\n  background-color: var(--primary-light);\n}\n\n#game-setup,\n#ship-select,\n#game-over {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: var(--primary-dark);\n  border-radius: 5px;\n  width: 30%;\n  height: 200px;\n  margin: 5% auto;\n  padding: 15px;\n  box-shadow: 0px 0px 3px 1px var(--accent);\n  color: var(--primary-light);\n  font-size: 2rem;\n  font-family: var(--font-main);\n}\n\n#ship-select {\n  margin: 0;\n}\n\n#select-body {\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  padding: 10px 0;\n}\n\n#select-footer {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 20px 0;\n}\n\n.toggle-div {\n  width: 100px;\n  height: auto;\n  position: relative;\n  font-size: 1.3rem;\n  margin: 0 15px;\n}\n\n.toggle-div label,\n.toggle-div input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle-div input[type=\"radio\"] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.toggle-div input[type=\"radio\"]:checked + label {\n  background:  var(--accent);\n  color: var(--primary-light);\n  border-radius: 5px;\n  border-color: var(--accent);\n}\n\n.toggle-div label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n#game-info p{\n  margin: 15px 0;\n}\n\n#game-button {\n  display: flex;\n  justify-content: space-around;\n  width: 80%;\n}\n\nbutton {\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n  font-family: var(--font-main);\n  font-size: 1.5rem;\n  border-radius: 5px;\n  width: 80px;\n  height: auto;\n}\n\n.board {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#player-ships,\n#computer-ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n  height: 75%;\n  background-color: var(--primary);\n  border: 2px solid var(--primary-light);\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 2px var(--primary);\n}\n\n#player-ships img,\n#computer-ships img {\n  width: 70%;\n  padding: 10px;\n}\n\n#player-grid,\n#computer-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  background-color: var(--primary-light);\n  border-radius: 5px;\n  border: 4px solid var(--accent);\n  box-shadow: 0px 0px 5px 2px var(--primary);\n}\n\n#board-container {\n  display: none;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n\n.square {\n  border: 1px solid var(--accent);\n  background-size: contain;\n}\n\n#computer-grid .square {\n  background-color: var(--primary-dark);\n}\n\n#computer-grid .square:hover {\n  background-color: var(--primary);\n}\n\n#game-over {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  z-index: 50;\n}\n\n#game-over h2 {\n  margin: 5px 0;\n}\n\n#game-over p {\n  text-align: center;\n}\n\n#game-over :nth-child(3) {\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0;\n  width: 100%;\n}\n\n#quit-btn,\n#restart-btn {\n  width: 150px;\n  height: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship-gray.svg": "./src/assets/battleship-gray.svg",
	"./battleship-header-bg.jpeg": "./src/assets/battleship-header-bg.jpeg",
	"./battleship-logo.svg": "./src/assets/battleship-logo.svg",
	"./battleship-red.svg": "./src/assets/battleship-red.svg",
	"./carrier-gray.svg": "./src/assets/carrier-gray.svg",
	"./carrier-red.svg": "./src/assets/carrier-red.svg",
	"./cruiser-gray.svg": "./src/assets/cruiser-gray.svg",
	"./cruiser-red.svg": "./src/assets/cruiser-red.svg",
	"./destroyer-gray.svg": "./src/assets/destroyer-gray.svg",
	"./destroyer-red.svg": "./src/assets/destroyer-red.svg",
	"./explosion.svg": "./src/assets/explosion.svg",
	"./sub-gray.svg": "./src/assets/sub-gray.svg",
	"./sub-red.svg": "./src/assets/sub-red.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


const ships = [{name: 'carrier', size: 5, row: 'A', col: 4, isVertical: true}, 
  {name: 'battleship', size: 4, row: 'E', col: 7, isVertical: false}, 
  {name: 'cruiser', size: 3, row: 'C', col: 4, isVertical: false}, 
  {name: 'destroyer', size: 3, row: 'I', col: 2, isVertical: true}, 
  {name: 'sub', size: 2, row: 'J', col: 9, isVertical: true}];

const Gameboard = () => {
  let startCoord = [];
  // let isVertical = true;
  let shipList = [];
  let missedAttacks = [];
  let attackHits = [];
  let shipsLeft = [];
  let gamePieceList = [];
  
  function randomCol(size, isVertical) {
    let col;
    if (isVertical === false) {
      col = String.fromCharCode(Math.floor(Math.random() * ((74 - size)- 65 + 1) + 65));
    } else {
      col = String.fromCharCode(Math.floor(Math.random() * (74 - 65 + 1) + 65));
    }
    return col;
  }

  function randomRow(size, isVertical) {
    let row;
    if (isVertical === false) {
      row = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    } else {
      row = Math.floor(Math.random() * ((10 - size) - 1 + 1) + 1);
    }
    return row;
  }

  function randomOrientation() {
    const isVertical = Math.random() > 0.5 ? true : false;
    return isVertical;
  }

  const shipPosition = (orientation, shipLenth) => {
    let xVal = startCoord[0];
    let yVal = startCoord[1];
    let shipCoord = [];

    let isVertical = orientation;
    shipCoord.push(startCoord);

    if (!isVertical) {
      for (let i = 1; i < shipLenth; i++) {
        xVal = String.fromCharCode(xVal.charCodeAt(0) + 1);
        let temp = [xVal, yVal];
        shipCoord.push(temp);
      }
    } else {
      for (let i = 1; i < shipLenth; i++) {
        yVal = (yVal + 1);
        let temp = [xVal, yVal];
        shipCoord.push(temp);
      }
    }
    return shipCoord;
  }

  function positionCheck(coord) {
    for (let i = 0; i < coord.length; i++) {
      let current = coord[i];
      for (let j = 0; j < gamePieceList.length; j++) {
        let isSubset = current.every((element) => gamePieceList[j].includes(element));
        if (isSubset === true) {
          return true;
        }
      }
    }
    return false;
  }

  const createShips = () =>{
    for (let i = 0; i < ships.length; i++) {
      let randomBoolean = randomOrientation();
      let ship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(ships[i].size);
      let col = randomCol(ships[i].size, randomBoolean);
      let row = randomRow(ships[i].size, randomBoolean);
      let positionTemp;

      startCoord = [col, row];
      ship.name = ships[i].name;
      positionTemp = shipPosition(randomBoolean, ships[i].size);

      if (i > 0) {
        let match = positionCheck(positionTemp);

        while (match) {
          col = randomCol(ships[i].size, randomBoolean);
          row = randomRow(ships[i].size, randomBoolean);
          startCoord = [col, row];
          positionTemp = shipPosition(randomBoolean, ships[i].size);
          match = positionCheck(positionTemp);
        }
      }

      ship.position = positionTemp;
      gamePieceList = gamePieceList.concat(ship.position);
      shipList.push(ship);
      shipsLeft.push(ship);
    }
    return shipList;
  }

  const receiveAttack = (strikeCoord) => {
    for (let i = 0; i < shipList.length; i++) {
       let current = shipList[i].position;
       for (let j = 0; j < current.length; j++) {
        let isSubset = strikeCoord.every((element) => current[j].includes(element));
        if (isSubset === true) {
          shipList[i].hit();
          shipList[i].isSunk();
          attackHits.push(strikeCoord);
          return isSubset;
        }
      }
    }
    missedAttacks.push(strikeCoord);
    return false;
  }

  const sunkenShips = () => {
    for (let i = 0; i < shipsLeft.length; i++) {
      if (shipsLeft[i].sunkStatus === true) {
        let name = shipsLeft[i].name;
        shipsLeft.splice(i,1);
        return name;
      } 
    }
  }

  const allShipsSunk = () => {
    const found = shipList.find(element => element.sunkStatus === false);

    if (found) {
      return false;
    } else {
      return true;
    }
  }

  return {
    get start() {
      return startCoord;
    },
    get list() {
      return shipList;
    }, 
    get remaining() {
      return shipsLeft;
    },
    get missed() {
      return missedAttacks;
    },
    get made() {
      return attackHits;
    },
    shipPosition,
    createShips,
    receiveAttack,
    sunkenShips,
    allShipsSunk
  }
}




/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop),
/* harmony export */   "restartGame": () => (/* binding */ restartGame),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _pagelayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagelayout */ "./src/pagelayout.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _assets_explosion_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/explosion.svg */ "./src/assets/explosion.svg");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");





const startGame = () => {
  const randomBtn = document.getElementById('random-btn');
  const manualBtn = document.getElementById('manual-btn');
  const gameSetupDiv = document.getElementById('game-setup');
  const boardContainer = document.getElementById('board-container');
  const computerGrid = document.getElementById('computer-grid');
  const computerShips = document.getElementById('computer-ships');
  const playerShips = document.getElementById('player-ships');

  randomBtn.addEventListener('click', () => {
    gameSetupDiv.style.display = 'none';
    boardContainer.style.display = 'flex';
    gameLoop('random');
  });

  manualBtn.addEventListener('click', () => {
    gameSetupDiv.style.display = 'none';
    boardContainer.style.display = 'flex';
    playerShips.style.display = 'none';
    computerGrid.style.display = 'none';
    computerShips.style.display = 'none';
    (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.shipSelectModal)();
    playerShipSelection();
  });
}

const playerShipSelection = () => {
  const playerGrid = document.getElementById('player-grid');
  const verticalBtn = document.getElementById('position2');
  // const {shipPosition} = Gameboard();
  // const {ships} = Gameboard();

  playerGrid.addEventListener('mouseover', (e) => {
    const divId = e.target.id;
    let split = divId.split('-');
    let coord = [split[1], Number(split[2])];

    // shipPosition(verticalBtn.checked, ships[0].size);
    console.log(coord);
    console.log(verticalBtn.checked);
  });
}

const restartGame = () => {
  document.getElementById('game-over').remove();
  document.getElementById('board-container').remove();
  document.getElementById('game-setup').remove();
}

const gameLoop = (selectionType) => {
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Computer)();
  const compGrid = document.getElementById('computer-grid');

  let sunkResult;
  let allSunk;

  function gameTurn(enemy) {
    let winner = enemy === player1 ? 'computer' : 'player1'; 
    let initial = enemy.name.charAt(0);

    sunkResult = enemy.gameboard.sunkenShips();
    allSunk = enemy.gameboard.allShipsSunk();

    if (sunkResult !== undefined) {
      document.getElementById(`${initial}-${sunkResult}`).src = `./assets/${sunkResult}-red.svg`;
    }

    if (allSunk === true) {
      document.getElementById('board-container').style.display = 'none';
      (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.gameOver)(winner);
      document.getElementById('game-over').style.display = 'flex';
    }
  }

  if (selectionType === 'random') {
    player1.gameboard.createShips();
  }
  
  computer.gameboard.createShips();
  (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.drawShips)(player1.gameboard.list);

  compGrid.addEventListener('click', (e) => {
    const divId = e.target.id;
    let split = divId.split('-');
    let coord = [split[1], Number(split[2])];

    while (computer.verifyCoord(coord, computer.gameboard.missed, computer.gameboard.made)){
      return;
    }

    let playerResult = computer.gameboard.receiveAttack(coord);
    if (playerResult === true) {
      document.getElementById(divId).style.backgroundImage = 'url(assets/explosion.svg)';
    } else {
      document.getElementById(divId).style.backgroundColor = '#d2ecf9';
    }

    gameTurn(computer);

    compGrid.style.pointerEvents = 'none';

    setTimeout(() => {
      let computerResult = computer.attack(player1.gameboard, player1.gameboard.missed, player1.gameboard.made);
    
      if (computerResult[0] === true) {
        document.getElementById(`p-${computerResult[1][0]}-${computerResult[1][1]}`).style.backgroundImage = 'url(assets/explosion.svg)';
      } else {
        document.getElementById(`p-${computerResult[1][0]}-${computerResult[1][1]}`).style.backgroundColor = '#253b6e';
      }

      gameTurn(player1);

      compGrid.style.pointerEvents = 'auto';
    }, 1000);
  });
}




/***/ }),

/***/ "./src/pagelayout.js":
/*!***************************!*\
  !*** ./src/pagelayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardSetup": () => (/* binding */ boardSetup),
/* harmony export */   "drawShips": () => (/* binding */ drawShips),
/* harmony export */   "gameOver": () => (/* binding */ gameOver),
/* harmony export */   "gameSetup": () => (/* binding */ gameSetup),
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad),
/* harmony export */   "shipSelectModal": () => (/* binding */ shipSelectModal)
/* harmony export */ });
/* harmony import */ var _assets_battleship_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/battleship-logo.svg */ "./src/assets/battleship-logo.svg");
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");



const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key.replace('./', '')] = r(key)));
}

// eslint-disable-next-line no-undef
importAll(__webpack_require__("./src/assets sync \\.(png%7Cjpe?g%7Csvg)$"));

const content = document.getElementById('content');
const container = document.createElement('div');
const sectionDiv = document.createElement('section');
const boardDiv = document.createElement('div');

const containerDiv = () => {
  container.className = 'container';
  content.appendChild(container);
}

const header = () => {
  const header = document.createElement('header');
  const imgDiv = document.createElement('div');
  const logo = document.createElement('img');

  imgDiv.id = 'image-div';

  logo.id = 'logo';
  logo.alt = 'Battleship logo with missle as letter I';
  logo.src = _assets_battleship_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  
  imgDiv.appendChild(logo);
  header.appendChild(imgDiv);
  container.appendChild(header);
}


const gameSetup = () => {
  const gameSetupDiv = document.createElement('div');
  const gameInfo = document.createElement('div');
  const gameButtonDiv = document.createElement('div');
  const randomBtn = document.createElement('button');
  const manualBtn = document.createElement('button');

  randomBtn.id = 'random-btn';
  randomBtn.innerText = 'Random';
  
  manualBtn.id = 'manual-btn';
  manualBtn.innerText = 'Manual';

  gameSetupDiv.id = 'game-setup';

  gameInfo.id = 'game-info';
  gameInfo.innerHTML = '<p>Gamepiece Layout</p>';

  gameButtonDiv.id = 'game-button';

  gameButtonDiv.appendChild(manualBtn);
  gameButtonDiv.appendChild(randomBtn);
  
  gameSetupDiv.appendChild(gameInfo);
  gameSetupDiv.appendChild(gameButtonDiv);
  sectionDiv.appendChild(gameSetupDiv);
}

const shipSelectModal = () => {
  const shipSelectDiv = document.createElement('div');
  const selectHeader = document.createElement('div');
  const selectBody = document.createElement('div');
  const selectFooter = document.createElement('div');
  const nextBtn = document.createElement('button');
  const prevBtn = document.createElement('button');

  shipSelectDiv.id = 'ship-select';
  selectHeader.id = 'select-header';
  selectBody.id = 'select-body';
  selectFooter.id = 'select-footer';

  nextBtn.id = 'next-btn';
  nextBtn.innerText = 'NEXT';
  prevBtn.id = 'prev-btn';
  prevBtn.innerText = 'PREV';
  selectFooter.appendChild(prevBtn);
  selectFooter.appendChild(nextBtn);

  selectHeader.innerHTML = '<h2>Prepare your ships for battle!</h2>';  

  for (let i = 1; i < 3; i++) {
    const toggleDiv = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    toggleDiv.className = 'toggle-div';
    input.type = 'radio';
    input.id = `position${i}`;
    input.name = 'position-toggle';
    input.checked = input.id === 'position1' ? true : false;
    label.className = 'toggle-btn';
    label.setAttribute('for', `position${i}`);
    label.innerText = input.id === 'position1' ? 'Horizontal' : 'Vertical';
    
    toggleDiv.appendChild(input);
    toggleDiv.appendChild(label);
    selectBody.appendChild(toggleDiv);
  }

  shipSelectDiv.appendChild(selectHeader);
  shipSelectDiv.appendChild(selectBody);
  shipSelectDiv.appendChild(selectFooter);

  boardDiv.appendChild(shipSelectDiv);
}

const shipIcons = ['carrier-gray.svg', 'battleship-gray.svg', 'cruiser-gray.svg',
  'destroyer-gray.svg', 'sub-gray.svg'];

const shipStatusIcons = (player) => {
  for (let i = 0; i < shipIcons.length; i++) {
    const img = document.createElement('img');
    img.id = `${player.id.charAt(0)}-${shipIcons[i].split('-')[0]}`;
    img.src = cache[shipIcons[i]];
    player.appendChild(img);
  }
}

const drawGrid = (gridType) => {
  const colLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < colLabels.length; j++) {
      const squareDiv = document.createElement('div');
      squareDiv.className = 'square';
      squareDiv.id = `${gridType.id.charAt(0)}-${colLabels[j]}-${i + 1}`;
      gridType.appendChild(squareDiv);
    }
  }
}

const drawShips = (shipList) => {
  for (let i = 0; i < shipList.length; i++) {
    let positionList = shipList[i].position;
    for (let j = 0; j < positionList.length; j++) {
      let coord = `p-${positionList[j][0]}-${positionList[j][1]}`;
      const gridId = document.getElementById(coord);
      gridId.style.backgroundColor = '#84898c';
      gridId.style.border = '0px';
    }
  }
}

const gameOver = (name) => {
  const gameOverModal = document.createElement('div');
  const gameOverHeader = document.createElement('div');
  const gameOverBody = document.createElement('div');
  const gameOverFooter = document.createElement('div');
  const restartBtn = document.createElement('button');
  const quitBtn = document.createElement('button');

  let winner = name === 'player1' ? 'Player 1' : 'Computer';
  let loser;

  if (winner === 'Player 1') {
    loser = 'Computer';
  } else if(winner === 'Computer') {
    loser = 'Player 1';
  }

restartBtn.addEventListener('click', () => {
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.restartGame)();
  // initialPageLoad();
  boardSetup();
  document.getElementById('board-container').style.display = 'flex';
  // gameSetup();
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_1__.gameLoop)();
});

quitBtn.addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});

  gameOverModal.id = 'game-over';

  gameOverHeader.innerHTML = `<h2>Game Over</>`;
  gameOverBody.innerHTML = `<p>${winner}'s fleet was victorious over ${loser}!</p>`;

  restartBtn.name = 'restart';
  restartBtn.id = 'restart-btn';
  restartBtn.type = 'button';
  restartBtn.autofocus = true;
  restartBtn.innerText = 'Play Again?';

  quitBtn.name = 'quit';
  quitBtn.id = 'quit-btn';
  quitBtn.type = 'button';
  quitBtn.innerText = 'Quit';

  
  gameOverFooter.appendChild(restartBtn);
  gameOverFooter.appendChild(quitBtn);

  gameOverModal.appendChild(gameOverHeader);
  gameOverModal.appendChild(gameOverBody);
  gameOverModal.appendChild(gameOverFooter);
  sectionDiv.appendChild(gameOverModal);
}

const boardSetup = () => {

  const playerBoard = document.createElement('div');
  const computerBoard = document.createElement('div');
  const playerShips = document.createElement('div');
  const computerShips = document.createElement('div');
  const playerGridDiv = document.createElement('div');
  const computerGridDiv = document.createElement('div');

  boardDiv.id = 'board-container';

  playerBoard.classList = 'board';
  playerShips.id = 'player-ships';
  playerGridDiv.id = 'player-grid';

  computerBoard.classList = 'board';
  computerShips.id = 'computer-ships';
  computerGridDiv.id = 'computer-grid';

  drawGrid(playerGridDiv, playerGridDiv.id);
  drawGrid(computerGridDiv, computerGridDiv.id);

  shipStatusIcons(playerShips);
  shipStatusIcons(computerShips);

  playerBoard.appendChild(playerShips);
  playerBoard.appendChild(playerGridDiv);
  computerBoard.appendChild(computerGridDiv);
  computerBoard.appendChild(computerShips);

  boardDiv.appendChild(playerBoard);
  boardDiv.appendChild(computerBoard);
  sectionDiv.appendChild(boardDiv);
}

const initialPageLoad = () => {
  containerDiv();
  header();
  container.appendChild(sectionDiv);
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = () => {
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  const name = 'player1';
  const attack = (coord, enemy) => {
    return enemy.receiveAttack(coord);
  }
  return {attack, gameboard, name}
}


const Computer = () => {
  const {gameboard} = Player();
  const name = 'computer';
  let lastHit = [];
  let smartSelection = [];

  function generateCoord() {
    const col = String.fromCharCode(Math.floor(Math.random() * (74 - 65 + 1) + 65));
    const row = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return [col, row] 
  }

  function verifyCoord(coord, enemyCoordMissed, enemyCoordHits) {
    let totalHits = enemyCoordMissed.concat(enemyCoordHits);
    for (let i = 0; i < totalHits.length; i++) {
      let current = totalHits;
      for (let j = 0; j < current.length; j++) {
        let isSubset = coord.every((element) => current[j].includes(element));
        if (isSubset === true) {
          return isSubset;
        }
      }
    }
    return false;
  }

  function smartAttack() {
    if (smartSelection.length === 0) {
      smartSelection.push([String.fromCharCode(lastHit[0].charCodeAt(0) + 1), lastHit[1]]);
      smartSelection.push([String.fromCharCode(lastHit[0].charCodeAt(0) - 1), lastHit[1]]);
      smartSelection.push([lastHit[0], (lastHit[1] + 1)]);
      smartSelection.push([lastHit[0], (lastHit[1] - 1)]);
    }

    let randomNum = Math.floor(Math.random() * smartSelection.length);
    let nextMove = smartSelection[randomNum];
    smartSelection.splice(randomNum, 1);

    console.log(smartSelection);

    return nextMove;
  }
    
  const attack = (enemy, enemyCoordMissed, enemyCoordHits) => {
    let coord;

    if (lastHit.length > 0 || smartSelection > 1) {
      coord = smartAttack();
      lastHit = coord;
      // console.log(coord);
    } else {
      coord = generateCoord();
    }

    while(verifyCoord(coord, enemyCoordMissed, enemyCoordHits)) {
      coord = generateCoord();
    }
    
    let attack = enemy.receiveAttack(coord);

    lastHit = attack === true ? coord : [];
    console.log(coord);
    // if (attack === true) {
    //   lastHit = coord;
    // }

    return [attack, coord];
  }
  return {attack, verifyCoord, gameboard, name};
}




/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (size) => {
  const length = size;
  let hitCount = 0;
  let sunk = false;

  const hit = () => {hitCount += 1;};

  const isSunk = () => {length === hitCount ? sunk = true : sunk = false;}

  return {
    get hits() {
      return hitCount;
    },
    get sunkStatus() {
      return sunk;
    },
    length, hit, isSunk
  }
}




/***/ }),

/***/ "./src/assets/VT323-Regular.ttf":
/*!**************************************!*\
  !*** ./src/assets/VT323-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/VT323-Regular.ttf";

/***/ }),

/***/ "./src/assets/battleship-gray.svg":
/*!****************************************!*\
  !*** ./src/assets/battleship-gray.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/battleship-gray.svg";

/***/ }),

/***/ "./src/assets/battleship-header-bg.jpeg":
/*!**********************************************!*\
  !*** ./src/assets/battleship-header-bg.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/battleship-header-bg.jpeg";

/***/ }),

/***/ "./src/assets/battleship-logo.svg":
/*!****************************************!*\
  !*** ./src/assets/battleship-logo.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/battleship-logo.svg";

/***/ }),

/***/ "./src/assets/battleship-red.svg":
/*!***************************************!*\
  !*** ./src/assets/battleship-red.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/battleship-red.svg";

/***/ }),

/***/ "./src/assets/carrier-gray.svg":
/*!*************************************!*\
  !*** ./src/assets/carrier-gray.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/carrier-gray.svg";

/***/ }),

/***/ "./src/assets/carrier-red.svg":
/*!************************************!*\
  !*** ./src/assets/carrier-red.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/carrier-red.svg";

/***/ }),

/***/ "./src/assets/cruiser-gray.svg":
/*!*************************************!*\
  !*** ./src/assets/cruiser-gray.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/cruiser-gray.svg";

/***/ }),

/***/ "./src/assets/cruiser-red.svg":
/*!************************************!*\
  !*** ./src/assets/cruiser-red.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/cruiser-red.svg";

/***/ }),

/***/ "./src/assets/destroyer-gray.svg":
/*!***************************************!*\
  !*** ./src/assets/destroyer-gray.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/destroyer-gray.svg";

/***/ }),

/***/ "./src/assets/destroyer-red.svg":
/*!**************************************!*\
  !*** ./src/assets/destroyer-red.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/destroyer-red.svg";

/***/ }),

/***/ "./src/assets/explosion.svg":
/*!**********************************!*\
  !*** ./src/assets/explosion.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/explosion.svg";

/***/ }),

/***/ "./src/assets/sub-gray.svg":
/*!*********************************!*\
  !*** ./src/assets/sub-gray.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/sub-gray.svg";

/***/ }),

/***/ "./src/assets/sub-red.svg":
/*!********************************!*\
  !*** ./src/assets/sub-red.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./assets/sub-red.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");
/* harmony import */ var _pagelayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagelayout */ "./src/pagelayout.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_pagelayout__WEBPACK_IMPORTED_MODULE_1__.initialPageLoad)();
(0,_pagelayout__WEBPACK_IMPORTED_MODULE_1__.gameSetup)();
(0,_pagelayout__WEBPACK_IMPORTED_MODULE_1__.boardSetup)();
(0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.startGame)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUEscUJBQXFCOztBQUVyQix3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDK0I7QUFDakQ7O0FBRXJCLDREQUFlO0FBQ2Ysc0RBQVM7QUFDVCx1REFBVTtBQUNWLG9EQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wYWdlbGF5b3V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9WVDMyMy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9iYXR0bGVzaGlwLWhlYWRlci1iZy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzFmNWY4YjtcXG4gIC0tcHJpbWFyeS1kYXJrOiAjMjUzYjZlO1xcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjZDJlY2Y5O1xcbiAgLS1hY2NlbnQ6ICMxODkxYWM7XFxuICAtLWZvbnQtbWFpbjogVlQzMjM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFZUMzIzO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2ltYWdlLWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggdmFyKC0tcHJpbWFyeSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuI2dhbWUtc2V0dXAsXFxuI3NoaXAtc2VsZWN0LFxcbiNnYW1lLW92ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IDUlIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG59XFxuXFxuI3NoaXAtc2VsZWN0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI3NlbGVjdC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuI3NlbGVjdC1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnRvZ2dsZS1kaXYge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW46IDAgMTVweDtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgbGFiZWwsXFxuLnRvZ2dsZS1kaXYgaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBvcGFjaXR5OiAwLjAxMTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZDogIHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi50b2dnbGUtZGl2IGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDkwO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbn1cXG5cXG4jZ2FtZS1pbmZvIHB7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuI2dhbWUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jcGxheWVyLXNoaXBzLFxcbiNjb21wdXRlci1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4jcGxheWVyLXNoaXBzIGltZyxcXG4jY29tcHV0ZXItc2hpcHMgaW1nIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jcGxheWVyLWdyaWQsXFxuI2NvbXB1dGVyLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI2JvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWQgLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4jY29tcHV0ZXItZ3JpZCAuc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIGgyIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbiNnYW1lLW92ZXIgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLW92ZXIgOm50aC1jaGlsZCgzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3F1aXQtYnRuLFxcbiNyZXN0YXJ0LWJ0biB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx5REFBdUQ7RUFDdkQsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QiwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBOztFQUVFLFlBQVk7RUFDWixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjMWY1ZjhiO1xcbiAgLS1wcmltYXJ5LWRhcms6ICMyNTNiNmU7XFxuICAtLXByaW1hcnktbGlnaHQ6ICNkMmVjZjk7XFxuICAtLWFjY2VudDogIzE4OTFhYztcXG4gIC0tZm9udC1tYWluOiBWVDMyMztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogVlQzMjM7XFxuICBzcmM6IHVybChhc3NldHMvVlQzMjMtUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2ltYWdlLWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9iYXR0bGVzaGlwLWhlYWRlci1iZy5qcGVnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggdmFyKC0tcHJpbWFyeSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuI2dhbWUtc2V0dXAsXFxuI3NoaXAtc2VsZWN0LFxcbiNnYW1lLW92ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IDUlIGF1dG87XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG59XFxuXFxuI3NoaXAtc2VsZWN0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI3NlbGVjdC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuI3NlbGVjdC1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnRvZ2dsZS1kaXYge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW46IDAgMTVweDtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgbGFiZWwsXFxuLnRvZ2dsZS1kaXYgaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBvcGFjaXR5OiAwLjAxMTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZDogIHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi50b2dnbGUtZGl2IGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDkwO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbn1cXG5cXG4jZ2FtZS1pbmZvIHB7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuI2dhbWUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jcGxheWVyLXNoaXBzLFxcbiNjb21wdXRlci1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMnB4IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4jcGxheWVyLXNoaXBzIGltZyxcXG4jY29tcHV0ZXItc2hpcHMgaW1nIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jcGxheWVyLWdyaWQsXFxuI2NvbXB1dGVyLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI2JvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWQgLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4jY29tcHV0ZXItZ3JpZCAuc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIGgyIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbiNnYW1lLW92ZXIgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLW92ZXIgOm50aC1jaGlsZCgzKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3F1aXQtYnRuLFxcbiNyZXN0YXJ0LWJ0biB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2JhdHRsZXNoaXAtZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvYmF0dGxlc2hpcC1ncmF5LnN2Z1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1oZWFkZXItYmcuanBlZ1wiOiBcIi4vc3JjL2Fzc2V0cy9iYXR0bGVzaGlwLWhlYWRlci1iZy5qcGVnXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWxvZ28uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2JhdHRsZXNoaXAtbG9nby5zdmdcIixcblx0XCIuL2JhdHRsZXNoaXAtcmVkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9iYXR0bGVzaGlwLXJlZC5zdmdcIixcblx0XCIuL2NhcnJpZXItZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvY2Fycmllci1ncmF5LnN2Z1wiLFxuXHRcIi4vY2Fycmllci1yZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NhcnJpZXItcmVkLnN2Z1wiLFxuXHRcIi4vY3J1aXNlci1ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jcnVpc2VyLWdyYXkuc3ZnXCIsXG5cdFwiLi9jcnVpc2VyLXJlZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvY3J1aXNlci1yZWQuc3ZnXCIsXG5cdFwiLi9kZXN0cm95ZXItZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvZGVzdHJveWVyLWdyYXkuc3ZnXCIsXG5cdFwiLi9kZXN0cm95ZXItcmVkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9kZXN0cm95ZXItcmVkLnN2Z1wiLFxuXHRcIi4vZXhwbG9zaW9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9leHBsb3Npb24uc3ZnXCIsXG5cdFwiLi9zdWItZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ViLWdyYXkuc3ZnXCIsXG5cdFwiLi9zdWItcmVkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdWItcmVkLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcHMnO1xuXG5jb25zdCBzaGlwcyA9IFt7bmFtZTogJ2NhcnJpZXInLCBzaXplOiA1LCByb3c6ICdBJywgY29sOiA0LCBpc1ZlcnRpY2FsOiB0cnVlfSwgXG4gIHtuYW1lOiAnYmF0dGxlc2hpcCcsIHNpemU6IDQsIHJvdzogJ0UnLCBjb2w6IDcsIGlzVmVydGljYWw6IGZhbHNlfSwgXG4gIHtuYW1lOiAnY3J1aXNlcicsIHNpemU6IDMsIHJvdzogJ0MnLCBjb2w6IDQsIGlzVmVydGljYWw6IGZhbHNlfSwgXG4gIHtuYW1lOiAnZGVzdHJveWVyJywgc2l6ZTogMywgcm93OiAnSScsIGNvbDogMiwgaXNWZXJ0aWNhbDogdHJ1ZX0sIFxuICB7bmFtZTogJ3N1YicsIHNpemU6IDIsIHJvdzogJ0onLCBjb2w6IDksIGlzVmVydGljYWw6IHRydWV9XTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgc3RhcnRDb29yZCA9IFtdO1xuICAvLyBsZXQgaXNWZXJ0aWNhbCA9IHRydWU7XG4gIGxldCBzaGlwTGlzdCA9IFtdO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBsZXQgYXR0YWNrSGl0cyA9IFtdO1xuICBsZXQgc2hpcHNMZWZ0ID0gW107XG4gIGxldCBnYW1lUGllY2VMaXN0ID0gW107XG4gIFxuICBmdW5jdGlvbiByYW5kb21Db2woc2l6ZSwgaXNWZXJ0aWNhbCkge1xuICAgIGxldCBjb2w7XG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICBjb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoNzQgLSBzaXplKS0gNjUgKyAxKSArIDY1KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDc0IC0gNjUgKyAxKSArIDY1KSk7XG4gICAgfVxuICAgIHJldHVybiBjb2w7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21Sb3coc2l6ZSwgaXNWZXJ0aWNhbCkge1xuICAgIGxldCByb3c7XG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxICsgMSkgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKCgxMCAtIHNpemUpIC0gMSArIDEpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IHRydWUgOiBmYWxzZTtcbiAgICByZXR1cm4gaXNWZXJ0aWNhbDtcbiAgfVxuXG4gIGNvbnN0IHNoaXBQb3NpdGlvbiA9IChvcmllbnRhdGlvbiwgc2hpcExlbnRoKSA9PiB7XG4gICAgbGV0IHhWYWwgPSBzdGFydENvb3JkWzBdO1xuICAgIGxldCB5VmFsID0gc3RhcnRDb29yZFsxXTtcbiAgICBsZXQgc2hpcENvb3JkID0gW107XG5cbiAgICBsZXQgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uO1xuICAgIHNoaXBDb29yZC5wdXNoKHN0YXJ0Q29vcmQpO1xuXG4gICAgaWYgKCFpc1ZlcnRpY2FsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW50aDsgaSsrKSB7XG4gICAgICAgIHhWYWwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhWYWwuY2hhckNvZGVBdCgwKSArIDEpO1xuICAgICAgICBsZXQgdGVtcCA9IFt4VmFsLCB5VmFsXTtcbiAgICAgICAgc2hpcENvb3JkLnB1c2godGVtcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbnRoOyBpKyspIHtcbiAgICAgICAgeVZhbCA9ICh5VmFsICsgMSk7XG4gICAgICAgIGxldCB0ZW1wID0gW3hWYWwsIHlWYWxdO1xuICAgICAgICBzaGlwQ29vcmQucHVzaCh0ZW1wKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uQ2hlY2soY29vcmQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGNvb3JkW2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lUGllY2VMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBpc1N1YnNldCA9IGN1cnJlbnQuZXZlcnkoKGVsZW1lbnQpID0+IGdhbWVQaWVjZUxpc3Rbal0uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgICAgICBpZiAoaXNTdWJzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+e1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByYW5kb21Cb29sZWFuID0gcmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgIGxldCBzaGlwID0gU2hpcChzaGlwc1tpXS5zaXplKTtcbiAgICAgIGxldCBjb2wgPSByYW5kb21Db2woc2hpcHNbaV0uc2l6ZSwgcmFuZG9tQm9vbGVhbik7XG4gICAgICBsZXQgcm93ID0gcmFuZG9tUm93KHNoaXBzW2ldLnNpemUsIHJhbmRvbUJvb2xlYW4pO1xuICAgICAgbGV0IHBvc2l0aW9uVGVtcDtcblxuICAgICAgc3RhcnRDb29yZCA9IFtjb2wsIHJvd107XG4gICAgICBzaGlwLm5hbWUgPSBzaGlwc1tpXS5uYW1lO1xuICAgICAgcG9zaXRpb25UZW1wID0gc2hpcFBvc2l0aW9uKHJhbmRvbUJvb2xlYW4sIHNoaXBzW2ldLnNpemUpO1xuXG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgbGV0IG1hdGNoID0gcG9zaXRpb25DaGVjayhwb3NpdGlvblRlbXApO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgIGNvbCA9IHJhbmRvbUNvbChzaGlwc1tpXS5zaXplLCByYW5kb21Cb29sZWFuKTtcbiAgICAgICAgICByb3cgPSByYW5kb21Sb3coc2hpcHNbaV0uc2l6ZSwgcmFuZG9tQm9vbGVhbik7XG4gICAgICAgICAgc3RhcnRDb29yZCA9IFtjb2wsIHJvd107XG4gICAgICAgICAgcG9zaXRpb25UZW1wID0gc2hpcFBvc2l0aW9uKHJhbmRvbUJvb2xlYW4sIHNoaXBzW2ldLnNpemUpO1xuICAgICAgICAgIG1hdGNoID0gcG9zaXRpb25DaGVjayhwb3NpdGlvblRlbXApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNoaXAucG9zaXRpb24gPSBwb3NpdGlvblRlbXA7XG4gICAgICBnYW1lUGllY2VMaXN0ID0gZ2FtZVBpZWNlTGlzdC5jb25jYXQoc2hpcC5wb3NpdGlvbik7XG4gICAgICBzaGlwTGlzdC5wdXNoKHNoaXApO1xuICAgICAgc2hpcHNMZWZ0LnB1c2goc2hpcCk7XG4gICAgfVxuICAgIHJldHVybiBzaGlwTGlzdDtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoc3RyaWtlQ29vcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgbGV0IGN1cnJlbnQgPSBzaGlwTGlzdFtpXS5wb3NpdGlvbjtcbiAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGlzU3Vic2V0ID0gc3RyaWtlQ29vcmQuZXZlcnkoKGVsZW1lbnQpID0+IGN1cnJlbnRbal0uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgICAgICBpZiAoaXNTdWJzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICBzaGlwTGlzdFtpXS5oaXQoKTtcbiAgICAgICAgICBzaGlwTGlzdFtpXS5pc1N1bmsoKTtcbiAgICAgICAgICBhdHRhY2tIaXRzLnB1c2goc3RyaWtlQ29vcmQpO1xuICAgICAgICAgIHJldHVybiBpc1N1YnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtaXNzZWRBdHRhY2tzLnB1c2goc3RyaWtlQ29vcmQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN1bmtlblNoaXBzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNMZWZ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2hpcHNMZWZ0W2ldLnN1bmtTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBzaGlwc0xlZnRbaV0ubmFtZTtcbiAgICAgICAgc2hpcHNMZWZ0LnNwbGljZShpLDEpO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0gXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gc2hpcExpc3QuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuc3Vua1N0YXR1cyA9PT0gZmFsc2UpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IHN0YXJ0KCkge1xuICAgICAgcmV0dXJuIHN0YXJ0Q29vcmQ7XG4gICAgfSxcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBzaGlwTGlzdDtcbiAgICB9LCBcbiAgICBnZXQgcmVtYWluaW5nKCkge1xuICAgICAgcmV0dXJuIHNoaXBzTGVmdDtcbiAgICB9LFxuICAgIGdldCBtaXNzZWQoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkQXR0YWNrcztcbiAgICB9LFxuICAgIGdldCBtYWRlKCkge1xuICAgICAgcmV0dXJuIGF0dGFja0hpdHM7XG4gICAgfSxcbiAgICBzaGlwUG9zaXRpb24sXG4gICAgY3JlYXRlU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzdW5rZW5TaGlwcyxcbiAgICBhbGxTaGlwc1N1bmtcbiAgfVxufVxuXG5leHBvcnQge0dhbWVib2FyZH07XG4iLCJpbXBvcnQgeyBkcmF3U2hpcHMsIGdhbWVPdmVyLCBzaGlwU2VsZWN0TW9kYWwgfSBmcm9tICcuL3BhZ2VsYXlvdXQnO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCAnLi9hc3NldHMvZXhwbG9zaW9uLnN2Zyc7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1idG4nKTtcbiAgY29uc3QgbWFudWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbnVhbC1idG4nKTtcbiAgY29uc3QgZ2FtZVNldHVwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2V0dXAnKTtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ncmlkJyk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItc2hpcHMnKTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXNoaXBzJyk7XG5cbiAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWVTZXR1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZ2FtZUxvb3AoJ3JhbmRvbScpO1xuICB9KTtcblxuICBtYW51YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2FtZVNldHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBwbGF5ZXJTaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbXB1dGVyR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbXB1dGVyU2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzaGlwU2VsZWN0TW9kYWwoKTtcbiAgICBwbGF5ZXJTaGlwU2VsZWN0aW9uKCk7XG4gIH0pO1xufVxuXG5jb25zdCBwbGF5ZXJTaGlwU2VsZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ncmlkJyk7XG4gIGNvbnN0IHZlcnRpY2FsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc2l0aW9uMicpO1xuICAvLyBjb25zdCB7c2hpcFBvc2l0aW9ufSA9IEdhbWVib2FyZCgpO1xuICAvLyBjb25zdCB7c2hpcHN9ID0gR2FtZWJvYXJkKCk7XG5cbiAgcGxheWVyR3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRpdklkID0gZS50YXJnZXQuaWQ7XG4gICAgbGV0IHNwbGl0ID0gZGl2SWQuc3BsaXQoJy0nKTtcbiAgICBsZXQgY29vcmQgPSBbc3BsaXRbMV0sIE51bWJlcihzcGxpdFsyXSldO1xuXG4gICAgLy8gc2hpcFBvc2l0aW9uKHZlcnRpY2FsQnRuLmNoZWNrZWQsIHNoaXBzWzBdLnNpemUpO1xuICAgIGNvbnNvbGUubG9nKGNvb3JkKTtcbiAgICBjb25zb2xlLmxvZyh2ZXJ0aWNhbEJ0bi5jaGVja2VkKTtcbiAgfSk7XG59XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyJykucmVtb3ZlKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2V0dXAnKS5yZW1vdmUoKTtcbn1cblxuY29uc3QgZ2FtZUxvb3AgPSAoc2VsZWN0aW9uVHlwZSkgPT4ge1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gQ29tcHV0ZXIoKTtcbiAgY29uc3QgY29tcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ3JpZCcpO1xuXG4gIGxldCBzdW5rUmVzdWx0O1xuICBsZXQgYWxsU3VuaztcblxuICBmdW5jdGlvbiBnYW1lVHVybihlbmVteSkge1xuICAgIGxldCB3aW5uZXIgPSBlbmVteSA9PT0gcGxheWVyMSA/ICdjb21wdXRlcicgOiAncGxheWVyMSc7IFxuICAgIGxldCBpbml0aWFsID0gZW5lbXkubmFtZS5jaGFyQXQoMCk7XG5cbiAgICBzdW5rUmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnN1bmtlblNoaXBzKCk7XG4gICAgYWxsU3VuayA9IGVuZW15LmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcblxuICAgIGlmIChzdW5rUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luaXRpYWx9LSR7c3Vua1Jlc3VsdH1gKS5zcmMgPSBgLi9hc3NldHMvJHtzdW5rUmVzdWx0fS1yZWQuc3ZnYDtcbiAgICB9XG5cbiAgICBpZiAoYWxsU3VuayA9PT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBnYW1lT3Zlcih3aW5uZXIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3ZlcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdGlvblR5cGUgPT09ICdyYW5kb20nKSB7XG4gICAgcGxheWVyMS5nYW1lYm9hcmQuY3JlYXRlU2hpcHMoKTtcbiAgfVxuICBcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLmNyZWF0ZVNoaXBzKCk7XG4gIGRyYXdTaGlwcyhwbGF5ZXIxLmdhbWVib2FyZC5saXN0KTtcblxuICBjb21wR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZGl2SWQgPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgc3BsaXQgPSBkaXZJZC5zcGxpdCgnLScpO1xuICAgIGxldCBjb29yZCA9IFtzcGxpdFsxXSwgTnVtYmVyKHNwbGl0WzJdKV07XG5cbiAgICB3aGlsZSAoY29tcHV0ZXIudmVyaWZ5Q29vcmQoY29vcmQsIGNvbXB1dGVyLmdhbWVib2FyZC5taXNzZWQsIGNvbXB1dGVyLmdhbWVib2FyZC5tYWRlKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBsYXllclJlc3VsdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICBpZiAocGxheWVyUmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChhc3NldHMvZXhwbG9zaW9uLnN2ZyknO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkMmVjZjknO1xuICAgIH1cblxuICAgIGdhbWVUdXJuKGNvbXB1dGVyKTtcblxuICAgIGNvbXBHcmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb21wdXRlclJlc3VsdCA9IGNvbXB1dGVyLmF0dGFjayhwbGF5ZXIxLmdhbWVib2FyZCwgcGxheWVyMS5nYW1lYm9hcmQubWlzc2VkLCBwbGF5ZXIxLmdhbWVib2FyZC5tYWRlKTtcbiAgICBcbiAgICAgIGlmIChjb21wdXRlclJlc3VsdFswXSA9PT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcC0ke2NvbXB1dGVyUmVzdWx0WzFdWzBdfS0ke2NvbXB1dGVyUmVzdWx0WzFdWzFdfWApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoYXNzZXRzL2V4cGxvc2lvbi5zdmcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwLSR7Y29tcHV0ZXJSZXN1bHRbMV1bMF19LSR7Y29tcHV0ZXJSZXN1bHRbMV1bMV19YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyNTNiNmUnO1xuICAgICAgfVxuXG4gICAgICBnYW1lVHVybihwbGF5ZXIxKTtcblxuICAgICAgY29tcEdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSwgcmVzdGFydEdhbWUsIGdhbWVMb29wIH1cbiIsImltcG9ydCBiYXR0bGVzaGlwTG9nbyBmcm9tICcuL2Fzc2V0cy9iYXR0bGVzaGlwLWxvZ28uc3ZnJztcbmltcG9ydCB7IHJlc3RhcnRHYW1lLCBnYW1lTG9vcCB9IGZyb20gJy4vZ2FtZXBsYXknO1xuXG5jb25zdCBjYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChjYWNoZVtrZXkucmVwbGFjZSgnLi8nLCAnJyldID0gcihrZXkpKSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgY29udGFpbmVyRGl2ID0gKCkgPT4ge1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBpbWdEaXYuaWQgPSAnaW1hZ2UtZGl2JztcblxuICBsb2dvLmlkID0gJ2xvZ28nO1xuICBsb2dvLmFsdCA9ICdCYXR0bGVzaGlwIGxvZ28gd2l0aCBtaXNzbGUgYXMgbGV0dGVyIEknO1xuICBsb2dvLnNyYyA9IGJhdHRsZXNoaXBMb2dvO1xuICBcbiAgaW1nRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cblxuY29uc3QgZ2FtZVNldHVwID0gKCkgPT4ge1xuICBjb25zdCBnYW1lU2V0dXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbWFudWFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgcmFuZG9tQnRuLmlkID0gJ3JhbmRvbS1idG4nO1xuICByYW5kb21CdG4uaW5uZXJUZXh0ID0gJ1JhbmRvbSc7XG4gIFxuICBtYW51YWxCdG4uaWQgPSAnbWFudWFsLWJ0bic7XG4gIG1hbnVhbEJ0bi5pbm5lclRleHQgPSAnTWFudWFsJztcblxuICBnYW1lU2V0dXBEaXYuaWQgPSAnZ2FtZS1zZXR1cCc7XG5cbiAgZ2FtZUluZm8uaWQgPSAnZ2FtZS1pbmZvJztcbiAgZ2FtZUluZm8uaW5uZXJIVE1MID0gJzxwPkdhbWVwaWVjZSBMYXlvdXQ8L3A+JztcblxuICBnYW1lQnV0dG9uRGl2LmlkID0gJ2dhbWUtYnV0dG9uJztcblxuICBnYW1lQnV0dG9uRGl2LmFwcGVuZENoaWxkKG1hbnVhbEJ0bik7XG4gIGdhbWVCdXR0b25EaXYuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcbiAgXG4gIGdhbWVTZXR1cERpdi5hcHBlbmRDaGlsZChnYW1lSW5mbyk7XG4gIGdhbWVTZXR1cERpdi5hcHBlbmRDaGlsZChnYW1lQnV0dG9uRGl2KTtcbiAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChnYW1lU2V0dXBEaXYpO1xufVxuXG5jb25zdCBzaGlwU2VsZWN0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VsZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlbGVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VsZWN0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHNoaXBTZWxlY3REaXYuaWQgPSAnc2hpcC1zZWxlY3QnO1xuICBzZWxlY3RIZWFkZXIuaWQgPSAnc2VsZWN0LWhlYWRlcic7XG4gIHNlbGVjdEJvZHkuaWQgPSAnc2VsZWN0LWJvZHknO1xuICBzZWxlY3RGb290ZXIuaWQgPSAnc2VsZWN0LWZvb3Rlcic7XG5cbiAgbmV4dEJ0bi5pZCA9ICduZXh0LWJ0bic7XG4gIG5leHRCdG4uaW5uZXJUZXh0ID0gJ05FWFQnO1xuICBwcmV2QnRuLmlkID0gJ3ByZXYtYnRuJztcbiAgcHJldkJ0bi5pbm5lclRleHQgPSAnUFJFVic7XG4gIHNlbGVjdEZvb3Rlci5hcHBlbmRDaGlsZChwcmV2QnRuKTtcbiAgc2VsZWN0Rm9vdGVyLmFwcGVuZENoaWxkKG5leHRCdG4pO1xuXG4gIHNlbGVjdEhlYWRlci5pbm5lckhUTUwgPSAnPGgyPlByZXBhcmUgeW91ciBzaGlwcyBmb3IgYmF0dGxlITwvaDI+JzsgIFxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgdG9nZ2xlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgIHRvZ2dsZURpdi5jbGFzc05hbWUgPSAndG9nZ2xlLWRpdic7XG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgaW5wdXQuaWQgPSBgcG9zaXRpb24ke2l9YDtcbiAgICBpbnB1dC5uYW1lID0gJ3Bvc2l0aW9uLXRvZ2dsZSc7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0LmlkID09PSAncG9zaXRpb24xJyA/IHRydWUgOiBmYWxzZTtcbiAgICBsYWJlbC5jbGFzc05hbWUgPSAndG9nZ2xlLWJ0bic7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgcG9zaXRpb24ke2l9YCk7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gaW5wdXQuaWQgPT09ICdwb3NpdGlvbjEnID8gJ0hvcml6b250YWwnIDogJ1ZlcnRpY2FsJztcbiAgICBcbiAgICB0b2dnbGVEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHRvZ2dsZURpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgc2VsZWN0Qm9keS5hcHBlbmRDaGlsZCh0b2dnbGVEaXYpO1xuICB9XG5cbiAgc2hpcFNlbGVjdERpdi5hcHBlbmRDaGlsZChzZWxlY3RIZWFkZXIpO1xuICBzaGlwU2VsZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdEJvZHkpO1xuICBzaGlwU2VsZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdEZvb3Rlcik7XG5cbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoc2hpcFNlbGVjdERpdik7XG59XG5cbmNvbnN0IHNoaXBJY29ucyA9IFsnY2Fycmllci1ncmF5LnN2ZycsICdiYXR0bGVzaGlwLWdyYXkuc3ZnJywgJ2NydWlzZXItZ3JheS5zdmcnLFxuICAnZGVzdHJveWVyLWdyYXkuc3ZnJywgJ3N1Yi1ncmF5LnN2ZyddO1xuXG5jb25zdCBzaGlwU3RhdHVzSWNvbnMgPSAocGxheWVyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmlkID0gYCR7cGxheWVyLmlkLmNoYXJBdCgwKX0tJHtzaGlwSWNvbnNbaV0uc3BsaXQoJy0nKVswXX1gO1xuICAgIGltZy5zcmMgPSBjYWNoZVtzaGlwSWNvbnNbaV1dO1xuICAgIHBsYXllci5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG59XG5cbmNvbnN0IGRyYXdHcmlkID0gKGdyaWRUeXBlKSA9PiB7XG4gIGNvbnN0IGNvbExhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbExhYmVscy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmVEaXYuY2xhc3NOYW1lID0gJ3NxdWFyZSc7XG4gICAgICBzcXVhcmVEaXYuaWQgPSBgJHtncmlkVHlwZS5pZC5jaGFyQXQoMCl9LSR7Y29sTGFiZWxzW2pdfS0ke2kgKyAxfWA7XG4gICAgICBncmlkVHlwZS5hcHBlbmRDaGlsZChzcXVhcmVEaXYpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkcmF3U2hpcHMgPSAoc2hpcExpc3QpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwb3NpdGlvbkxpc3QgPSBzaGlwTGlzdFtpXS5wb3NpdGlvbjtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvc2l0aW9uTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGNvb3JkID0gYHAtJHtwb3NpdGlvbkxpc3Rbal1bMF19LSR7cG9zaXRpb25MaXN0W2pdWzFdfWA7XG4gICAgICBjb25zdCBncmlkSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZCk7XG4gICAgICBncmlkSWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4NDg5OGMnO1xuICAgICAgZ3JpZElkLnN0eWxlLmJvcmRlciA9ICcwcHgnO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnYW1lT3ZlciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGdhbWVPdmVyTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZU92ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZU92ZXJCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVPdmVyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcXVpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGxldCB3aW5uZXIgPSBuYW1lID09PSAncGxheWVyMScgPyAnUGxheWVyIDEnIDogJ0NvbXB1dGVyJztcbiAgbGV0IGxvc2VyO1xuXG4gIGlmICh3aW5uZXIgPT09ICdQbGF5ZXIgMScpIHtcbiAgICBsb3NlciA9ICdDb21wdXRlcic7XG4gIH0gZWxzZSBpZih3aW5uZXIgPT09ICdDb21wdXRlcicpIHtcbiAgICBsb3NlciA9ICdQbGF5ZXIgMSc7XG4gIH1cblxucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVzdGFydEdhbWUoKTtcbiAgLy8gaW5pdGlhbFBhZ2VMb2FkKCk7XG4gIGJvYXJkU2V0dXAoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIC8vIGdhbWVTZXR1cCgpO1xuICBnYW1lTG9vcCgpO1xufSk7XG5cbnF1aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nO1xufSk7XG5cbiAgZ2FtZU92ZXJNb2RhbC5pZCA9ICdnYW1lLW92ZXInO1xuXG4gIGdhbWVPdmVySGVhZGVyLmlubmVySFRNTCA9IGA8aDI+R2FtZSBPdmVyPC8+YDtcbiAgZ2FtZU92ZXJCb2R5LmlubmVySFRNTCA9IGA8cD4ke3dpbm5lcn0ncyBmbGVldCB3YXMgdmljdG9yaW91cyBvdmVyICR7bG9zZXJ9ITwvcD5gO1xuXG4gIHJlc3RhcnRCdG4ubmFtZSA9ICdyZXN0YXJ0JztcbiAgcmVzdGFydEJ0bi5pZCA9ICdyZXN0YXJ0LWJ0bic7XG4gIHJlc3RhcnRCdG4udHlwZSA9ICdidXR0b24nO1xuICByZXN0YXJ0QnRuLmF1dG9mb2N1cyA9IHRydWU7XG4gIHJlc3RhcnRCdG4uaW5uZXJUZXh0ID0gJ1BsYXkgQWdhaW4/JztcblxuICBxdWl0QnRuLm5hbWUgPSAncXVpdCc7XG4gIHF1aXRCdG4uaWQgPSAncXVpdC1idG4nO1xuICBxdWl0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcXVpdEJ0bi5pbm5lclRleHQgPSAnUXVpdCc7XG5cbiAgXG4gIGdhbWVPdmVyRm9vdGVyLmFwcGVuZENoaWxkKHJlc3RhcnRCdG4pO1xuICBnYW1lT3ZlckZvb3Rlci5hcHBlbmRDaGlsZChxdWl0QnRuKTtcblxuICBnYW1lT3Zlck1vZGFsLmFwcGVuZENoaWxkKGdhbWVPdmVySGVhZGVyKTtcbiAgZ2FtZU92ZXJNb2RhbC5hcHBlbmRDaGlsZChnYW1lT3ZlckJvZHkpO1xuICBnYW1lT3Zlck1vZGFsLmFwcGVuZENoaWxkKGdhbWVPdmVyRm9vdGVyKTtcbiAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChnYW1lT3Zlck1vZGFsKTtcbn1cblxuY29uc3QgYm9hcmRTZXR1cCA9ICgpID0+IHtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyR3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21wdXRlckdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBib2FyZERpdi5pZCA9ICdib2FyZC1jb250YWluZXInO1xuXG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdCA9ICdib2FyZCc7XG4gIHBsYXllclNoaXBzLmlkID0gJ3BsYXllci1zaGlwcyc7XG4gIHBsYXllckdyaWREaXYuaWQgPSAncGxheWVyLWdyaWQnO1xuXG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0ID0gJ2JvYXJkJztcbiAgY29tcHV0ZXJTaGlwcy5pZCA9ICdjb21wdXRlci1zaGlwcyc7XG4gIGNvbXB1dGVyR3JpZERpdi5pZCA9ICdjb21wdXRlci1ncmlkJztcblxuICBkcmF3R3JpZChwbGF5ZXJHcmlkRGl2LCBwbGF5ZXJHcmlkRGl2LmlkKTtcbiAgZHJhd0dyaWQoY29tcHV0ZXJHcmlkRGl2LCBjb21wdXRlckdyaWREaXYuaWQpO1xuXG4gIHNoaXBTdGF0dXNJY29ucyhwbGF5ZXJTaGlwcyk7XG4gIHNoaXBTdGF0dXNJY29ucyhjb21wdXRlclNoaXBzKTtcblxuICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJTaGlwcyk7XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHBsYXllckdyaWREaXYpO1xuICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNvbXB1dGVyR3JpZERpdik7XG4gIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJTaGlwcyk7XG5cbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICBib2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcbiAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChib2FyZERpdik7XG59XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcbiAgY29udGFpbmVyRGl2KCk7XG4gIGhlYWRlcigpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkRpdik7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgZ2FtZVNldHVwLCBib2FyZFNldHVwLCBkcmF3U2hpcHMsIGdhbWVPdmVyLCBzaGlwU2VsZWN0TW9kYWwgfSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgbmFtZSA9ICdwbGF5ZXIxJztcbiAgY29uc3QgYXR0YWNrID0gKGNvb3JkLCBlbmVteSkgPT4ge1xuICAgIHJldHVybiBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgfVxuICByZXR1cm4ge2F0dGFjaywgZ2FtZWJvYXJkLCBuYW1lfVxufVxuXG5cbmNvbnN0IENvbXB1dGVyID0gKCkgPT4ge1xuICBjb25zdCB7Z2FtZWJvYXJkfSA9IFBsYXllcigpO1xuICBjb25zdCBuYW1lID0gJ2NvbXB1dGVyJztcbiAgbGV0IGxhc3RIaXQgPSBbXTtcbiAgbGV0IHNtYXJ0U2VsZWN0aW9uID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb29yZCgpIHtcbiAgICBjb25zdCBjb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3NCAtIDY1ICsgMSkgKyA2NSkpO1xuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEgKyAxKSArIDEpO1xuICAgIHJldHVybiBbY29sLCByb3ddIFxuICB9XG5cbiAgZnVuY3Rpb24gdmVyaWZ5Q29vcmQoY29vcmQsIGVuZW15Q29vcmRNaXNzZWQsIGVuZW15Q29vcmRIaXRzKSB7XG4gICAgbGV0IHRvdGFsSGl0cyA9IGVuZW15Q29vcmRNaXNzZWQuY29uY2F0KGVuZW15Q29vcmRIaXRzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsSGl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnJlbnQgPSB0b3RhbEhpdHM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGlzU3Vic2V0ID0gY29vcmQuZXZlcnkoKGVsZW1lbnQpID0+IGN1cnJlbnRbal0uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgICAgICBpZiAoaXNTdWJzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gaXNTdWJzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gc21hcnRBdHRhY2soKSB7XG4gICAgaWYgKHNtYXJ0U2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc21hcnRTZWxlY3Rpb24ucHVzaChbU3RyaW5nLmZyb21DaGFyQ29kZShsYXN0SGl0WzBdLmNoYXJDb2RlQXQoMCkgKyAxKSwgbGFzdEhpdFsxXV0pO1xuICAgICAgc21hcnRTZWxlY3Rpb24ucHVzaChbU3RyaW5nLmZyb21DaGFyQ29kZShsYXN0SGl0WzBdLmNoYXJDb2RlQXQoMCkgLSAxKSwgbGFzdEhpdFsxXV0pO1xuICAgICAgc21hcnRTZWxlY3Rpb24ucHVzaChbbGFzdEhpdFswXSwgKGxhc3RIaXRbMV0gKyAxKV0pO1xuICAgICAgc21hcnRTZWxlY3Rpb24ucHVzaChbbGFzdEhpdFswXSwgKGxhc3RIaXRbMV0gLSAxKV0pO1xuICAgIH1cblxuICAgIGxldCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzbWFydFNlbGVjdGlvbi5sZW5ndGgpO1xuICAgIGxldCBuZXh0TW92ZSA9IHNtYXJ0U2VsZWN0aW9uW3JhbmRvbU51bV07XG4gICAgc21hcnRTZWxlY3Rpb24uc3BsaWNlKHJhbmRvbU51bSwgMSk7XG5cbiAgICBjb25zb2xlLmxvZyhzbWFydFNlbGVjdGlvbik7XG5cbiAgICByZXR1cm4gbmV4dE1vdmU7XG4gIH1cbiAgICBcbiAgY29uc3QgYXR0YWNrID0gKGVuZW15LCBlbmVteUNvb3JkTWlzc2VkLCBlbmVteUNvb3JkSGl0cykgPT4ge1xuICAgIGxldCBjb29yZDtcblxuICAgIGlmIChsYXN0SGl0Lmxlbmd0aCA+IDAgfHwgc21hcnRTZWxlY3Rpb24gPiAxKSB7XG4gICAgICBjb29yZCA9IHNtYXJ0QXR0YWNrKCk7XG4gICAgICBsYXN0SGl0ID0gY29vcmQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjb29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvb3JkID0gZ2VuZXJhdGVDb29yZCgpO1xuICAgIH1cblxuICAgIHdoaWxlKHZlcmlmeUNvb3JkKGNvb3JkLCBlbmVteUNvb3JkTWlzc2VkLCBlbmVteUNvb3JkSGl0cykpIHtcbiAgICAgIGNvb3JkID0gZ2VuZXJhdGVDb29yZCgpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgYXR0YWNrID0gZW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZCk7XG5cbiAgICBsYXN0SGl0ID0gYXR0YWNrID09PSB0cnVlID8gY29vcmQgOiBbXTtcbiAgICBjb25zb2xlLmxvZyhjb29yZCk7XG4gICAgLy8gaWYgKGF0dGFjayA9PT0gdHJ1ZSkge1xuICAgIC8vICAgbGFzdEhpdCA9IGNvb3JkO1xuICAgIC8vIH1cblxuICAgIHJldHVybiBbYXR0YWNrLCBjb29yZF07XG4gIH1cbiAgcmV0dXJuIHthdHRhY2ssIHZlcmlmeUNvb3JkLCBnYW1lYm9hcmQsIG5hbWV9O1xufVxuXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07XG4iLCJjb25zdCBTaGlwID0gKHNpemUpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2l6ZTtcbiAgbGV0IGhpdENvdW50ID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7aGl0Q291bnQgKz0gMTt9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtsZW5ndGggPT09IGhpdENvdW50ID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7fVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGhpdHMoKSB7XG4gICAgICByZXR1cm4gaGl0Q291bnQ7XG4gICAgfSxcbiAgICBnZXQgc3Vua1N0YXR1cygpIHtcbiAgICAgIHJldHVybiBzdW5rO1xuICAgIH0sXG4gICAgbGVuZ3RoLCBoaXQsIGlzU3Vua1xuICB9XG59XG5cbmV4cG9ydCB7U2hpcH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vZ2FtZXBsYXknO1xuaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkLCBnYW1lU2V0dXAsIGJvYXJkU2V0dXAgfSBmcm9tICcuL3BhZ2VsYXlvdXQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxQYWdlTG9hZCgpO1xuZ2FtZVNldHVwKCk7XG5ib2FyZFNldHVwKCk7XG5zdGFydEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=