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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary: #1f5f8b;
  --primary-dark: #253b6e;
  --primary-light: #d2ecf9;
  --accent: #1891ac;
  --font-main: VT323;
}

@font-face {
  font-family: VT323;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 12pt;
  background-color: var(--primary-light);
}

#content {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: center;
  flex-shrink: 1;
  height: 120px;
}

h2 {
  font-size: 1.5rem;
}

#image-div {
  background-color: var(--primary-dark);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: auto 100%;
  background-repeat: no-repeat;
  box-shadow: 0px 1px 10px 1px var(--primary);
  width: 100%;
  display: flex;
  justify-content: center;
}

#logo {
  height: 100%;
  padding: 10px;
}

section {
  background-color: var(--primary-light);
}

#game-setup,
#ship-select,
#game-over {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary-dark);
  border-radius: 5px;
  width: 30%;
  height: 200px;
  margin: 5% auto;
  padding: 15px;
  box-shadow: 0px 0px 3px 1px var(--accent);
  color: var(--primary-light);
  font-size: 2rem;
  font-family: var(--font-main);
}

#ship-select {
  margin: 0;
}

#select-body {
  display: flex;
  justify-content: space-around;
  height: 100%;
  padding: 10px 0;
}

#select-footer {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px 0;
}

.toggle-div {
  width: 100px;
  height: auto;
  position: relative;
  font-size: 1.3rem;
  margin: 0 15px;
}

.toggle-div label,
.toggle-div input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-div input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.toggle-div input[type="radio"]:checked + label {
  background:  var(--accent);
  color: var(--primary-light);
  border-radius: 5px;
  border-color: var(--accent);
}

.toggle-div label {
  cursor: pointer;
  z-index: 90;
  line-height: 1.8em;
}

#game-info p{
  margin: 15px 0;
}

#game-button {
  display: flex;
  justify-content: space-around;
  width: 80%;
}

button {
  background-color: var(--primary-light);
  color: var(--primary-dark);
  font-family: var(--font-main);
  font-size: 1.5rem;
  border-radius: 5px;
  width: 80px;
  height: auto;
}

.board {
  display: flex;
  justify-content: space-evenly;
}

#player-ships,
#computer-ships {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 75%;
  background-color: var(--primary);
  border: 2px solid var(--primary-light);
  border-radius: 5px;
  box-shadow: 0px 0px 3px 2px var(--primary);
}

#player-ships img,
#computer-ships img {
  width: 70%;
  padding: 10px;
}

#player-grid,
#computer-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 400px;
  height: 400px;
  background-color: var(--primary-light);
  border-radius: 5px;
  border: 4px solid var(--accent);
  box-shadow: 0px 0px 5px 2px var(--primary);
}

#board-container {
  display: none;
  justify-content: space-around;
  margin-top: 10%;
}

.square {
  border: 1px solid var(--accent);
  background-size: contain;
}

#computer-grid .square {
  background-color: var(--primary-dark);
}

#computer-grid .square:hover {
  background-color: var(--primary);
}

#game-over {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  z-index: 50;
}

#game-over h2 {
  margin: 5px 0;
}

#game-over p {
  text-align: center;
}

#game-over :nth-child(3) {
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  width: 100%;
}

#quit-btn,
#restart-btn {
  width: 150px;
  height: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,4CAAkC;AACpC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,yDAAuD;EACvD,0BAA0B;EAC1B,4BAA4B;EAC5B,2CAA2C;EAC3C,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,qCAAqC;EACrC,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,eAAe;EACf,aAAa;EACb,yCAAyC;EACzC,2BAA2B;EAC3B,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,sCAAsC;EACtC,0BAA0B;EAC1B,6BAA6B;EAC7B,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,gCAAgC;EAChC,sCAAsC;EACtC,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;;EAEE,UAAU;EACV,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,kBAAkB;EAClB,+BAA+B;EAC/B,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd","sourcesContent":[":root {\n  --primary: #1f5f8b;\n  --primary-dark: #253b6e;\n  --primary-light: #d2ecf9;\n  --accent: #1891ac;\n  --font-main: VT323;\n}\n\n@font-face {\n  font-family: VT323;\n  src: url(assets/VT323-Regular.ttf);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-size: 12pt;\n  background-color: var(--primary-light);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  flex-shrink: 1;\n  height: 120px;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n#image-div {\n  background-color: var(--primary-dark);\n  background-image: url(assets/battleship-header-bg.jpeg);\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  box-shadow: 0px 1px 10px 1px var(--primary);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#logo {\n  height: 100%;\n  padding: 10px;\n}\n\nsection {\n  background-color: var(--primary-light);\n}\n\n#game-setup,\n#ship-select,\n#game-over {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: var(--primary-dark);\n  border-radius: 5px;\n  width: 30%;\n  height: 200px;\n  margin: 5% auto;\n  padding: 15px;\n  box-shadow: 0px 0px 3px 1px var(--accent);\n  color: var(--primary-light);\n  font-size: 2rem;\n  font-family: var(--font-main);\n}\n\n#ship-select {\n  margin: 0;\n}\n\n#select-body {\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  padding: 10px 0;\n}\n\n#select-footer {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 20px 0;\n}\n\n.toggle-div {\n  width: 100px;\n  height: auto;\n  position: relative;\n  font-size: 1.3rem;\n  margin: 0 15px;\n}\n\n.toggle-div label,\n.toggle-div input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle-div input[type=\"radio\"] {\n  opacity: 0.011;\n  z-index: 100;\n}\n\n.toggle-div input[type=\"radio\"]:checked + label {\n  background:  var(--accent);\n  color: var(--primary-light);\n  border-radius: 5px;\n  border-color: var(--accent);\n}\n\n.toggle-div label {\n  cursor: pointer;\n  z-index: 90;\n  line-height: 1.8em;\n}\n\n#game-info p{\n  margin: 15px 0;\n}\n\n#game-button {\n  display: flex;\n  justify-content: space-around;\n  width: 80%;\n}\n\nbutton {\n  background-color: var(--primary-light);\n  color: var(--primary-dark);\n  font-family: var(--font-main);\n  font-size: 1.5rem;\n  border-radius: 5px;\n  width: 80px;\n  height: auto;\n}\n\n.board {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#player-ships,\n#computer-ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n  height: 75%;\n  background-color: var(--primary);\n  border: 2px solid var(--primary-light);\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 2px var(--primary);\n}\n\n#player-ships img,\n#computer-ships img {\n  width: 70%;\n  padding: 10px;\n}\n\n#player-grid,\n#computer-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  width: 400px;\n  height: 400px;\n  background-color: var(--primary-light);\n  border-radius: 5px;\n  border: 4px solid var(--accent);\n  box-shadow: 0px 0px 5px 2px var(--primary);\n}\n\n#board-container {\n  display: none;\n  justify-content: space-around;\n  margin-top: 10%;\n}\n\n.square {\n  border: 1px solid var(--accent);\n  background-size: contain;\n}\n\n#computer-grid .square {\n  background-color: var(--primary-dark);\n}\n\n#computer-grid .square:hover {\n  background-color: var(--primary);\n}\n\n#game-over {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  z-index: 50;\n}\n\n#game-over h2 {\n  margin: 5px 0;\n}\n\n#game-over p {\n  text-align: center;\n}\n\n#game-over :nth-child(3) {\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0;\n  width: 100%;\n}\n\n#quit-btn,\n#restart-btn {\n  width: 150px;\n  height: 30px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   ships: () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


const ships = [{name: 'carrier', size: 5}, {name: 'battleship', size: 4,}, {name: 'cruiser', size: 3,}, 
  {name: 'destroyer', size: 3}, {name: 'sub', size: 2}];

const Gameboard = () => {
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

  const shipPosition = (orientation, shipLenth, startCoord) => {
    let xVal = startCoord[0];
    let yVal = startCoord[1];
    let shipCoord = [];

    let isVertical = orientation;
    shipCoord.push(startCoord);

    if (isVertical === false) {
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
    let startCoord;

    for (let i = 0; i < ships.length; i++) {
      let randomBoolean = randomOrientation();
      let ship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(ships[i].size);
      let col = randomCol(ships[i].size, randomBoolean);
      let row = randomRow(ships[i].size, randomBoolean);
      let positionTemp;

      startCoord = [col, row];
      ship.name = ships[i].name;
      positionTemp = shipPosition(randomBoolean, ships[i].size, startCoord);

      if (i > 0) {
        let match = positionCheck(positionTemp);

        while (match) {
          col = randomCol(ships[i].size, randomBoolean);
          row = randomRow(ships[i].size, randomBoolean);
          startCoord = [col, row];
          positionTemp = shipPosition(randomBoolean, ships[i].size, startCoord);
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

  const createManualShips = (shipInputList) => {
      let count = 0;
      for (let i = 0; i < ships.length; i++) {
        let ship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(ships[i].size);
        let temp = [];

        ship.name = ships[i].name;

        for (let j = 0; j < ship.length; j++) {
          temp.push(shipInputList[count]);
          count++;
        }
        ship.position = temp;
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
    createManualShips,
    receiveAttack,
    sunkenShips,
    allShipsSunk,
    positionCheck,
    shipList,
    gamePieceList
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
/* harmony export */   gameLoop: () => (/* binding */ gameLoop),
/* harmony export */   restartGame: () => (/* binding */ restartGame),
/* harmony export */   startGame: () => (/* binding */ startGame)
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
  const computerGrid = document.getElementById('computer-grid');
  const computerShips = document.getElementById('computer-ships');
  const playerShips = document.getElementById('player-ships');
  const playerGrid = document.getElementById('player-grid');
  const shipSelectDiv = document.getElementById('ship-select');
  const verticalBtn = document.getElementById('position2');
  const {shipPosition} = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
  const selected = [];

  let selectionTemp = [];
  let count = 0;

  function drawPlayerSelection (inputList, color) {
    for (let i = 0; i < inputList.length; i++) {
      let coordTemp = inputList[i];
      for (let j = 0; j < coordTemp.length; j++) {
        let squareCoord = `p-${coordTemp[0]}-${coordTemp[1]}`;
        const gridId = document.getElementById(squareCoord);
        try {
          gridId.style.backgroundColor = color;
          gridId.style.border = '0px';
        } catch (error) {
          return true;
        }
      }
    }
  }

  playerGrid.addEventListener('mouseover', (e) => {
    selectionTemp.length = 0;

    if (e.target.id !== 'player-grid') {
      const divId = e.target.id;

      let split = divId.split('-');
      let coord = [split[1], Number(split[2])];
      let temp = shipPosition(verticalBtn.checked, _gameboard__WEBPACK_IMPORTED_MODULE_3__.ships[count].size, coord);

      for (let i = 0; i < temp.length; i++) {
        selectionTemp.push(temp[i]);
      }
      if (count === 5) {
        drawPlayerSelection(selectionTemp, '#84898c');
      } else {
        drawPlayerSelection(selectionTemp, 'green');
      }
    }
  });

  playerGrid.addEventListener('mouseout', (e) => {
    if (e.target.id !== 'player-grid') {
      for (let i = 0; i < selectionTemp.length; i++) {
        let coordTemp = selectionTemp[i];

        for (let j = 0; j < coordTemp.length; j++) {
          try {
            let squareCoord = `p-${coordTemp[0]}-${coordTemp[1]}`;
            const gridId = document.getElementById(squareCoord);

            if (gridId.style.backgroundColor === '#84898c'){
              return;
            } else {
              gridId.style.backgroundColor = '#d2ecf9';
              gridId.style.border = '1px solid #1891ac';
              drawPlayerSelection(selected, '#84898c');
            }            
          } catch (error) {
            return;
          }
        }
      }
    }
  });
  
  playerGrid.addEventListener('click', (e) => {
    const invalidSelection = drawPlayerSelection(selectionTemp, '#84898c');

    if (invalidSelection === true) {
      drawPlayerSelection(selectionTemp, '#84898c');
    }
    while(!invalidSelection) {
      if (count < 6) {
        if (e.target.id !== 'player-grid') {
          let isMatch;
          let matchCount = 0;
          let selectionHold = [];
  
          for (let i = 0; i < selectionTemp.length; i++) {
            let current = selectionTemp[i];
    
            for (let j = 0; j < selected.length; j++) {
              isMatch = JSON.stringify(current) === JSON.stringify(selected[j]);
              if (isMatch === true) {
                matchCount++;
              }
            }
            selectionHold.push(selectionTemp[i]);
          }
    
          if (matchCount > 0) {
            drawPlayerSelection(selected, '#84898c');
            return;
          } else {
            for (let i = 0; i < selectionHold.length; i++) {
              selected.push(selectionHold[i].slice());
            }
            drawPlayerSelection(selected, '#84898c');
            count++;
          }
          
        }
        if (count === 5) {
          playerGrid.style.pointerEvents = 'none';
          shipSelectDiv.style.display = 'none';
          computerGrid.style.display = 'grid';
          playerShips.style.display = 'flex';
          computerShips.style.display = 'flex';
          gameLoop('player', selected);
        } 
        
      }  
    }
  });
}

const restartGame = () => {
  document.getElementById('game-over').remove();
  document.getElementById('board-container').remove();
  document.getElementById('game-setup').remove();
}

const gameLoop = (selectionType, selectedList) => {
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
    (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.drawShips)(player1.gameboard.list);
  }else {
    for (let i = 0; i < selectedList.length; i++) {
      player1.gameboard.createManualShips(selectedList);
      (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.drawShips)(player1.gameboard.list);
    }
  }
  
  computer.gameboard.createShips();

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
/* harmony export */   boardSetup: () => (/* binding */ boardSetup),
/* harmony export */   drawShips: () => (/* binding */ drawShips),
/* harmony export */   gameOver: () => (/* binding */ gameOver),
/* harmony export */   gameSetup: () => (/* binding */ gameSetup),
/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad),
/* harmony export */   shipSelectModal: () => (/* binding */ shipSelectModal)
/* harmony export */ });
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");


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
  logo.src = cache['battleship-logo.svg'];
  
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
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.restartGame)();
  // initialPageLoad();
  boardSetup();
  document.getElementById('board-container').style.display = 'flex';
  // gameSetup();
  (0,_gameplay__WEBPACK_IMPORTED_MODULE_0__.gameLoop)();
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
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
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
    } else {
      return;
    }
  }
    
  const attack = (enemy, enemyCoordMissed, enemyCoordHits) => {
    let coord;

    if (smartSelection.length > 0) {
      coord = smartSelection[smartSelection.length - 1];

      while(verifyCoord(coord, enemyCoordMissed, enemyCoordHits)) {
        smartSelection.pop();
        coord = smartSelection[smartSelection.length - 1];
        if (smartSelection.length === 0) {
          coord = generateCoord();
        }
      }
    } else {
        coord = generateCoord();

        while(verifyCoord(coord, enemyCoordMissed, enemyCoordHits)) {
          coord = generateCoord();
        }
    }
   
    
    let attack = enemy.receiveAttack(coord);
    lastHit = attack === true ? coord : [];

    if (attack === true) { 
      smartAttack();
      lastHit = [];
    }
    

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
/* harmony export */   Ship: () => (/* binding */ Ship)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUEyQztBQUN2Riw0Q0FBNEMsK0lBQW1EO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDK0I7QUFDakQ7O0FBRXJCLDREQUFlO0FBQ2Ysc0RBQVM7QUFDVCx1REFBVTtBQUNWLG9EQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wYWdlbGF5b3V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9WVDMyMy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9iYXR0bGVzaGlwLWhlYWRlci1iZy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnk6ICMxZjVmOGI7XG4gIC0tcHJpbWFyeS1kYXJrOiAjMjUzYjZlO1xuICAtLXByaW1hcnktbGlnaHQ6ICNkMmVjZjk7XG4gIC0tYWNjZW50OiAjMTg5MWFjO1xuICAtLWZvbnQtbWFpbjogVlQzMjM7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVlQzMjM7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbn1cblxuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbiNpbWFnZS1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHZhcigtLXByaW1hcnkpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG59XG5cbiNnYW1lLXNldHVwLFxuI3NoaXAtc2VsZWN0LFxuI2dhbWUtb3ZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcbn1cblxuI3NoaXAtc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jc2VsZWN0LWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbiNzZWxlY3QtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnRvZ2dsZS1kaXYge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi50b2dnbGUtZGl2IGxhYmVsLFxuLnRvZ2dsZS1kaXYgaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZ2dsZS1kaXYgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgb3BhY2l0eTogMC4wMTE7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnRvZ2dsZS1kaXYgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQ6ICB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4udG9nZ2xlLWRpdiBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cblxuI2dhbWUtaW5mbyBwe1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuI2dhbWUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jcGxheWVyLXNoaXBzLFxuI2NvbXB1dGVyLXNoaXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbiNwbGF5ZXItc2hpcHMgaW1nLFxuI2NvbXB1dGVyLXNoaXBzIGltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNwbGF5ZXItZ3JpZCxcbiNjb21wdXRlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHZhcigtLXByaW1hcnkpO1xufVxuXG4jYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLnNxdWFyZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI2NvbXB1dGVyLWdyaWQgLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbiNjb21wdXRlci1ncmlkIC5zcXVhcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuI2dhbWUtb3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuI2dhbWUtb3ZlciBoMiB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbiNnYW1lLW92ZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2dhbWUtb3ZlciA6bnRoLWNoaWxkKDMpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNxdWl0LWJ0bixcbiNyZXN0YXJ0LWJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFD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IjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnk6ICMxZjVmOGI7XFxuICAtLXByaW1hcnktZGFyazogIzI1M2I2ZTtcXG4gIC0tcHJpbWFyeS1saWdodDogI2QyZWNmOTtcXG4gIC0tYWNjZW50OiAjMTg5MWFjO1xcbiAgLS1mb250LW1haW46IFZUMzIzO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBWVDMyMztcXG4gIHNyYzogdXJsKGFzc2V0cy9WVDMyMy1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jaW1hZ2UtZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2JhdHRsZXNoaXAtaGVhZGVyLWJnLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCB2YXIoLS1wcmltYXJ5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4jZ2FtZS1zZXR1cCxcXG4jc2hpcC1zZWxlY3QsXFxuI2dhbWUtb3ZlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0tYWNjZW50KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xcbn1cXG5cXG4jc2hpcC1zZWxlY3Qge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jc2VsZWN0LWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4jc2VsZWN0LWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4udG9nZ2xlLWRpdiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG4udG9nZ2xlLWRpdiBsYWJlbCxcXG4udG9nZ2xlLWRpdiBpbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9nZ2xlLWRpdiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIG9wYWNpdHk6IDAuMDExO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4udG9nZ2xlLWRpdiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kOiAgdmFyKC0tYWNjZW50KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLnRvZ2dsZS1kaXYgbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogOTA7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxufVxcblxcbiNnYW1lLWluZm8gcHtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4jZ2FtZS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNwbGF5ZXItc2hpcHMsXFxuI2NvbXB1dGVyLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbiNwbGF5ZXItc2hpcHMgaW1nLFxcbiNjb21wdXRlci1zaGlwcyBpbWcge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNwbGF5ZXItZ3JpZCxcXG4jY29tcHV0ZXItZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4jYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4jY29tcHV0ZXItZ3JpZCAuc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbiNjb21wdXRlci1ncmlkIC5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbiNnYW1lLW92ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgei1pbmRleDogNTA7XFxufVxcblxcbiNnYW1lLW92ZXIgaDIge1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuI2dhbWUtb3ZlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtb3ZlciA6bnRoLWNoaWxkKDMpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcXVpdC1idG4sXFxuI3Jlc3RhcnQtYnRuIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0dGxlc2hpcC1ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9iYXR0bGVzaGlwLWdyYXkuc3ZnXCIsXG5cdFwiLi9iYXR0bGVzaGlwLWhlYWRlci1iZy5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2JhdHRsZXNoaXAtaGVhZGVyLWJnLmpwZWdcIixcblx0XCIuL2JhdHRsZXNoaXAtbG9nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvYmF0dGxlc2hpcC1sb2dvLnN2Z1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1yZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2JhdHRsZXNoaXAtcmVkLnN2Z1wiLFxuXHRcIi4vY2Fycmllci1ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jYXJyaWVyLWdyYXkuc3ZnXCIsXG5cdFwiLi9jYXJyaWVyLXJlZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvY2Fycmllci1yZWQuc3ZnXCIsXG5cdFwiLi9jcnVpc2VyLWdyYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NydWlzZXItZ3JheS5zdmdcIixcblx0XCIuL2NydWlzZXItcmVkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jcnVpc2VyLXJlZC5zdmdcIixcblx0XCIuL2Rlc3Ryb3llci1ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9kZXN0cm95ZXItZ3JheS5zdmdcIixcblx0XCIuL2Rlc3Ryb3llci1yZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2Rlc3Ryb3llci1yZWQuc3ZnXCIsXG5cdFwiLi9leHBsb3Npb24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2V4cGxvc2lvbi5zdmdcIixcblx0XCIuL3N1Yi1ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9zdWItZ3JheS5zdmdcIixcblx0XCIuL3N1Yi1yZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N1Yi1yZWQuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwcyc7XG5cbmNvbnN0IHNoaXBzID0gW3tuYW1lOiAnY2FycmllcicsIHNpemU6IDV9LCB7bmFtZTogJ2JhdHRsZXNoaXAnLCBzaXplOiA0LH0sIHtuYW1lOiAnY3J1aXNlcicsIHNpemU6IDMsfSwgXG4gIHtuYW1lOiAnZGVzdHJveWVyJywgc2l6ZTogM30sIHtuYW1lOiAnc3ViJywgc2l6ZTogMn1dO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBzaGlwTGlzdCA9IFtdO1xuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBsZXQgYXR0YWNrSGl0cyA9IFtdO1xuICBsZXQgc2hpcHNMZWZ0ID0gW107XG4gIGxldCBnYW1lUGllY2VMaXN0ID0gW107XG4gIFxuICBmdW5jdGlvbiByYW5kb21Db2woc2l6ZSwgaXNWZXJ0aWNhbCkge1xuICAgIGxldCBjb2w7XG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICBjb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoNzQgLSBzaXplKS0gNjUgKyAxKSArIDY1KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDc0IC0gNjUgKyAxKSArIDY1KSk7XG4gICAgfVxuICAgIHJldHVybiBjb2w7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21Sb3coc2l6ZSwgaXNWZXJ0aWNhbCkge1xuICAgIGxldCByb3c7XG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxICsgMSkgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKCgxMCAtIHNpemUpIC0gMSArIDEpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IHRydWUgOiBmYWxzZTtcbiAgICByZXR1cm4gaXNWZXJ0aWNhbDtcbiAgfVxuXG4gIGNvbnN0IHNoaXBQb3NpdGlvbiA9IChvcmllbnRhdGlvbiwgc2hpcExlbnRoLCBzdGFydENvb3JkKSA9PiB7XG4gICAgbGV0IHhWYWwgPSBzdGFydENvb3JkWzBdO1xuICAgIGxldCB5VmFsID0gc3RhcnRDb29yZFsxXTtcbiAgICBsZXQgc2hpcENvb3JkID0gW107XG5cbiAgICBsZXQgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uO1xuICAgIHNoaXBDb29yZC5wdXNoKHN0YXJ0Q29vcmQpO1xuXG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW50aDsgaSsrKSB7XG4gICAgICAgIHhWYWwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHhWYWwuY2hhckNvZGVBdCgwKSArIDEpO1xuICAgICAgICBsZXQgdGVtcCA9IFt4VmFsLCB5VmFsXTtcbiAgICAgICAgc2hpcENvb3JkLnB1c2godGVtcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbnRoOyBpKyspIHtcbiAgICAgICAgeVZhbCA9ICh5VmFsICsgMSk7XG4gICAgICAgIGxldCB0ZW1wID0gW3hWYWwsIHlWYWxdO1xuICAgICAgICBzaGlwQ29vcmQucHVzaCh0ZW1wKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uQ2hlY2soY29vcmQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGNvb3JkW2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lUGllY2VMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBpc1N1YnNldCA9IGN1cnJlbnQuZXZlcnkoKGVsZW1lbnQpID0+IGdhbWVQaWVjZUxpc3Rbal0uaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgICAgICBpZiAoaXNTdWJzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+e1xuICAgIGxldCBzdGFydENvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJhbmRvbUJvb2xlYW4gPSByYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBzW2ldLnNpemUpO1xuICAgICAgbGV0IGNvbCA9IHJhbmRvbUNvbChzaGlwc1tpXS5zaXplLCByYW5kb21Cb29sZWFuKTtcbiAgICAgIGxldCByb3cgPSByYW5kb21Sb3coc2hpcHNbaV0uc2l6ZSwgcmFuZG9tQm9vbGVhbik7XG4gICAgICBsZXQgcG9zaXRpb25UZW1wO1xuXG4gICAgICBzdGFydENvb3JkID0gW2NvbCwgcm93XTtcbiAgICAgIHNoaXAubmFtZSA9IHNoaXBzW2ldLm5hbWU7XG4gICAgICBwb3NpdGlvblRlbXAgPSBzaGlwUG9zaXRpb24ocmFuZG9tQm9vbGVhbiwgc2hpcHNbaV0uc2l6ZSwgc3RhcnRDb29yZCk7XG5cbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBsZXQgbWF0Y2ggPSBwb3NpdGlvbkNoZWNrKHBvc2l0aW9uVGVtcCk7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgY29sID0gcmFuZG9tQ29sKHNoaXBzW2ldLnNpemUsIHJhbmRvbUJvb2xlYW4pO1xuICAgICAgICAgIHJvdyA9IHJhbmRvbVJvdyhzaGlwc1tpXS5zaXplLCByYW5kb21Cb29sZWFuKTtcbiAgICAgICAgICBzdGFydENvb3JkID0gW2NvbCwgcm93XTtcbiAgICAgICAgICBwb3NpdGlvblRlbXAgPSBzaGlwUG9zaXRpb24ocmFuZG9tQm9vbGVhbiwgc2hpcHNbaV0uc2l6ZSwgc3RhcnRDb29yZCk7XG4gICAgICAgICAgbWF0Y2ggPSBwb3NpdGlvbkNoZWNrKHBvc2l0aW9uVGVtcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2hpcC5wb3NpdGlvbiA9IHBvc2l0aW9uVGVtcDtcbiAgICAgIGdhbWVQaWVjZUxpc3QgPSBnYW1lUGllY2VMaXN0LmNvbmNhdChzaGlwLnBvc2l0aW9uKTtcbiAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XG4gICAgICBzaGlwc0xlZnQucHVzaChzaGlwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBMaXN0O1xuICB9XG5cbiAgY29uc3QgY3JlYXRlTWFudWFsU2hpcHMgPSAoc2hpcElucHV0TGlzdCkgPT4ge1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBzW2ldLnNpemUpO1xuICAgICAgICBsZXQgdGVtcCA9IFtdO1xuXG4gICAgICAgIHNoaXAubmFtZSA9IHNoaXBzW2ldLm5hbWU7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdGVtcC5wdXNoKHNoaXBJbnB1dExpc3RbY291bnRdKTtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHNoaXAucG9zaXRpb24gPSB0ZW1wO1xuICAgICAgICBnYW1lUGllY2VMaXN0ID0gZ2FtZVBpZWNlTGlzdC5jb25jYXQoc2hpcC5wb3NpdGlvbik7XG4gICAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XG4gICAgICAgIHNoaXBzTGVmdC5wdXNoKHNoaXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBMaXN0O1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChzdHJpa2VDb29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICBsZXQgY3VycmVudCA9IHNoaXBMaXN0W2ldLnBvc2l0aW9uO1xuICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudC5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgaXNTdWJzZXQgPSBzdHJpa2VDb29yZC5ldmVyeSgoZWxlbWVudCkgPT4gY3VycmVudFtqXS5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgICAgIGlmIChpc1N1YnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNoaXBMaXN0W2ldLmhpdCgpO1xuICAgICAgICAgIHNoaXBMaXN0W2ldLmlzU3VuaygpO1xuICAgICAgICAgIGF0dGFja0hpdHMucHVzaChzdHJpa2VDb29yZCk7XG4gICAgICAgICAgcmV0dXJuIGlzU3Vic2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZEF0dGFja3MucHVzaChzdHJpa2VDb29yZCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc3Vua2VuU2hpcHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0xlZnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzaGlwc0xlZnRbaV0uc3Vua1N0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgbmFtZSA9IHNoaXBzTGVmdFtpXS5uYW1lO1xuICAgICAgICBzaGlwc0xlZnQuc3BsaWNlKGksMSk7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfSBcbiAgICB9XG4gIH1cblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSBzaGlwTGlzdC5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5zdW5rU3RhdHVzID09PSBmYWxzZSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBzaGlwTGlzdDtcbiAgICB9LCBcbiAgICBnZXQgcmVtYWluaW5nKCkge1xuICAgICAgcmV0dXJuIHNoaXBzTGVmdDtcbiAgICB9LFxuICAgIGdldCBtaXNzZWQoKSB7XG4gICAgICByZXR1cm4gbWlzc2VkQXR0YWNrcztcbiAgICB9LFxuICAgIGdldCBtYWRlKCkge1xuICAgICAgcmV0dXJuIGF0dGFja0hpdHM7XG4gICAgfSxcbiAgICBzaGlwUG9zaXRpb24sXG4gICAgY3JlYXRlU2hpcHMsXG4gICAgY3JlYXRlTWFudWFsU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzdW5rZW5TaGlwcyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcG9zaXRpb25DaGVjayxcbiAgICBzaGlwTGlzdCxcbiAgICBnYW1lUGllY2VMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHtHYW1lYm9hcmQsIHNoaXBzfTtcbiIsImltcG9ydCB7IGRyYXdTaGlwcywgZ2FtZU92ZXIsIHNoaXBTZWxlY3RNb2RhbCB9IGZyb20gJy4vcGFnZWxheW91dCc7XG5pbXBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0ICcuL2Fzc2V0cy9leHBsb3Npb24uc3ZnJztcbmltcG9ydCB7IEdhbWVib2FyZCwgc2hpcHMgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1idG4nKTtcbiAgY29uc3QgbWFudWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbnVhbC1idG4nKTtcbiAgY29uc3QgZ2FtZVNldHVwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2V0dXAnKTtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ncmlkJyk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItc2hpcHMnKTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXNoaXBzJyk7XG5cbiAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWVTZXR1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZ2FtZUxvb3AoJ3JhbmRvbScpO1xuICB9KTtcblxuICBtYW51YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2FtZVNldHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBwbGF5ZXJTaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbXB1dGVyR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbXB1dGVyU2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzaGlwU2VsZWN0TW9kYWwoKTtcbiAgICBwbGF5ZXJTaGlwU2VsZWN0aW9uKCk7XG4gICAgXG4gIH0pO1xufVxuXG5jb25zdCBwbGF5ZXJTaGlwU2VsZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ3JpZCcpO1xuICBjb25zdCBjb21wdXRlclNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLXNoaXBzJyk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1zaGlwcycpO1xuICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ncmlkJyk7XG4gIGNvbnN0IHNoaXBTZWxlY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1zZWxlY3QnKTtcbiAgY29uc3QgdmVydGljYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zaXRpb24yJyk7XG4gIGNvbnN0IHtzaGlwUG9zaXRpb259ID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHNlbGVjdGVkID0gW107XG5cbiAgbGV0IHNlbGVjdGlvblRlbXAgPSBbXTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBkcmF3UGxheWVyU2VsZWN0aW9uIChpbnB1dExpc3QsIGNvbG9yKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb29yZFRlbXAgPSBpbnB1dExpc3RbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3JkVGVtcC5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgc3F1YXJlQ29vcmQgPSBgcC0ke2Nvb3JkVGVtcFswXX0tJHtjb29yZFRlbXBbMV19YDtcbiAgICAgICAgY29uc3QgZ3JpZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3F1YXJlQ29vcmQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGdyaWRJZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICBncmlkSWQuc3R5bGUuYm9yZGVyID0gJzBweCc7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGF5ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgc2VsZWN0aW9uVGVtcC5sZW5ndGggPSAwO1xuXG4gICAgaWYgKGUudGFyZ2V0LmlkICE9PSAncGxheWVyLWdyaWQnKSB7XG4gICAgICBjb25zdCBkaXZJZCA9IGUudGFyZ2V0LmlkO1xuXG4gICAgICBsZXQgc3BsaXQgPSBkaXZJZC5zcGxpdCgnLScpO1xuICAgICAgbGV0IGNvb3JkID0gW3NwbGl0WzFdLCBOdW1iZXIoc3BsaXRbMl0pXTtcbiAgICAgIGxldCB0ZW1wID0gc2hpcFBvc2l0aW9uKHZlcnRpY2FsQnRuLmNoZWNrZWQsIHNoaXBzW2NvdW50XS5zaXplLCBjb29yZCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxlY3Rpb25UZW1wLnB1c2godGVtcFtpXSk7XG4gICAgICB9XG4gICAgICBpZiAoY291bnQgPT09IDUpIHtcbiAgICAgICAgZHJhd1BsYXllclNlbGVjdGlvbihzZWxlY3Rpb25UZW1wLCAnIzg0ODk4YycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhd1BsYXllclNlbGVjdGlvbihzZWxlY3Rpb25UZW1wLCAnZ3JlZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCAhPT0gJ3BsYXllci1ncmlkJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25UZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb29yZFRlbXAgPSBzZWxlY3Rpb25UZW1wW2ldO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29vcmRUZW1wLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVDb29yZCA9IGBwLSR7Y29vcmRUZW1wWzBdfS0ke2Nvb3JkVGVtcFsxXX1gO1xuICAgICAgICAgICAgY29uc3QgZ3JpZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3F1YXJlQ29vcmQpO1xuXG4gICAgICAgICAgICBpZiAoZ3JpZElkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJyM4NDg5OGMnKXtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZ3JpZElkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZDJlY2Y5JztcbiAgICAgICAgICAgICAgZ3JpZElkLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzE4OTFhYyc7XG4gICAgICAgICAgICAgIGRyYXdQbGF5ZXJTZWxlY3Rpb24oc2VsZWN0ZWQsICcjODQ4OThjJyk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBcbiAgcGxheWVyR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgaW52YWxpZFNlbGVjdGlvbiA9IGRyYXdQbGF5ZXJTZWxlY3Rpb24oc2VsZWN0aW9uVGVtcCwgJyM4NDg5OGMnKTtcblxuICAgIGlmIChpbnZhbGlkU2VsZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICBkcmF3UGxheWVyU2VsZWN0aW9uKHNlbGVjdGlvblRlbXAsICcjODQ4OThjJyk7XG4gICAgfVxuICAgIHdoaWxlKCFpbnZhbGlkU2VsZWN0aW9uKSB7XG4gICAgICBpZiAoY291bnQgPCA2KSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCAhPT0gJ3BsYXllci1ncmlkJykge1xuICAgICAgICAgIGxldCBpc01hdGNoO1xuICAgICAgICAgIGxldCBtYXRjaENvdW50ID0gMDtcbiAgICAgICAgICBsZXQgc2VsZWN0aW9uSG9sZCA9IFtdO1xuICBcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGlvblRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gc2VsZWN0aW9uVGVtcFtpXTtcbiAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaXNNYXRjaCA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnQpID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFtqXSk7XG4gICAgICAgICAgICAgIGlmIChpc01hdGNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3Rpb25Ib2xkLnB1c2goc2VsZWN0aW9uVGVtcFtpXSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGlmIChtYXRjaENvdW50ID4gMCkge1xuICAgICAgICAgICAgZHJhd1BsYXllclNlbGVjdGlvbihzZWxlY3RlZCwgJyM4NDg5OGMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25Ib2xkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goc2VsZWN0aW9uSG9sZFtpXS5zbGljZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYXdQbGF5ZXJTZWxlY3Rpb24oc2VsZWN0ZWQsICcjODQ4OThjJyk7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnQgPT09IDUpIHtcbiAgICAgICAgICBwbGF5ZXJHcmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgc2hpcFNlbGVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGNvbXB1dGVyR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICAgIHBsYXllclNoaXBzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgY29tcHV0ZXJTaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgIGdhbWVMb29wKCdwbGF5ZXInLCBzZWxlY3RlZCk7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgfSAgXG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKS5yZW1vdmUoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zZXR1cCcpLnJlbW92ZSgpO1xufVxuXG5jb25zdCBnYW1lTG9vcCA9IChzZWxlY3Rpb25UeXBlLCBzZWxlY3RlZExpc3QpID0+IHtcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcigpO1xuICBjb25zdCBjb21wdXRlciA9IENvbXB1dGVyKCk7XG4gIGNvbnN0IGNvbXBHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdyaWQnKTtcblxuICBsZXQgc3Vua1Jlc3VsdDtcbiAgbGV0IGFsbFN1bms7XG5cbiAgZnVuY3Rpb24gZ2FtZVR1cm4oZW5lbXkpIHtcbiAgICBsZXQgd2lubmVyID0gZW5lbXkgPT09IHBsYXllcjEgPyAnY29tcHV0ZXInIDogJ3BsYXllcjEnOyBcbiAgICBsZXQgaW5pdGlhbCA9IGVuZW15Lm5hbWUuY2hhckF0KDApO1xuXG4gICAgc3Vua1Jlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5zdW5rZW5TaGlwcygpO1xuICAgIGFsbFN1bmsgPSBlbmVteS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XG5cbiAgICBpZiAoc3Vua1Jlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbml0aWFsfS0ke3N1bmtSZXN1bHR9YCkuc3JjID0gYC4vYXNzZXRzLyR7c3Vua1Jlc3VsdH0tcmVkLnN2Z2A7XG4gICAgfVxuXG4gICAgaWYgKGFsbFN1bmsgPT09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZ2FtZU92ZXIod2lubmVyKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgfVxuXG4gIFxuICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gJ3JhbmRvbScpIHtcbiAgICBwbGF5ZXIxLmdhbWVib2FyZC5jcmVhdGVTaGlwcygpO1xuICAgIGRyYXdTaGlwcyhwbGF5ZXIxLmdhbWVib2FyZC5saXN0KTtcbiAgfWVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGF5ZXIxLmdhbWVib2FyZC5jcmVhdGVNYW51YWxTaGlwcyhzZWxlY3RlZExpc3QpO1xuICAgICAgZHJhd1NoaXBzKHBsYXllcjEuZ2FtZWJvYXJkLmxpc3QpO1xuICAgIH1cbiAgfVxuICBcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLmNyZWF0ZVNoaXBzKCk7XG5cbiAgY29tcEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRpdklkID0gZS50YXJnZXQuaWQ7XG5cbiAgICBsZXQgc3BsaXQgPSBkaXZJZC5zcGxpdCgnLScpO1xuICAgIGxldCBjb29yZCA9IFtzcGxpdFsxXSwgTnVtYmVyKHNwbGl0WzJdKV07XG5cbiAgICB3aGlsZSAoY29tcHV0ZXIudmVyaWZ5Q29vcmQoY29vcmQsIGNvbXB1dGVyLmdhbWVib2FyZC5taXNzZWQsIGNvbXB1dGVyLmdhbWVib2FyZC5tYWRlKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBsYXllclJlc3VsdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcblxuICAgIGlmIChwbGF5ZXJSZXN1bHQgPT09IHRydWUpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGFzc2V0cy9leHBsb3Npb24uc3ZnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QyZWNmOSc7XG4gICAgfVxuXG4gICAgZ2FtZVR1cm4oY29tcHV0ZXIpO1xuXG4gICAgY29tcEdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbXB1dGVyUmVzdWx0ID0gY29tcHV0ZXIuYXR0YWNrKHBsYXllcjEuZ2FtZWJvYXJkLCBwbGF5ZXIxLmdhbWVib2FyZC5taXNzZWQsIHBsYXllcjEuZ2FtZWJvYXJkLm1hZGUpO1xuICAgIFxuICAgICAgaWYgKGNvbXB1dGVyUmVzdWx0WzBdID09PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwLSR7Y29tcHV0ZXJSZXN1bHRbMV1bMF19LSR7Y29tcHV0ZXJSZXN1bHRbMV1bMV19YCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChhc3NldHMvZXhwbG9zaW9uLnN2ZyknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAtJHtjb21wdXRlclJlc3VsdFsxXVswXX0tJHtjb21wdXRlclJlc3VsdFsxXVsxXX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI1M2I2ZSc7XG4gICAgICB9XG5cbiAgICAgIGdhbWVUdXJuKHBsYXllcjEpO1xuXG4gICAgICBjb21wR3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgc3RhcnRHYW1lLCByZXN0YXJ0R2FtZSwgZ2FtZUxvb3AgfVxuIiwiaW1wb3J0IHsgcmVzdGFydEdhbWUsIGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lcGxheSc7XG5cbmNvbnN0IGNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKGNhY2hlW2tleS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGtleSkpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBjb250YWluZXJEaXYgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIGltZ0Rpdi5pZCA9ICdpbWFnZS1kaXYnO1xuXG4gIGxvZ28uaWQgPSAnbG9nbyc7XG4gIGxvZ28uYWx0ID0gJ0JhdHRsZXNoaXAgbG9nbyB3aXRoIG1pc3NsZSBhcyBsZXR0ZXIgSSc7XG4gIGxvZ28uc3JjID0gY2FjaGVbJ2JhdHRsZXNoaXAtbG9nby5zdmcnXTtcbiAgXG4gIGltZ0Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5cbmNvbnN0IGdhbWVTZXR1cCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZVNldHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1hbnVhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHJhbmRvbUJ0bi5pZCA9ICdyYW5kb20tYnRuJztcbiAgcmFuZG9tQnRuLmlubmVyVGV4dCA9ICdSYW5kb20nO1xuICBcbiAgbWFudWFsQnRuLmlkID0gJ21hbnVhbC1idG4nO1xuICBtYW51YWxCdG4uaW5uZXJUZXh0ID0gJ01hbnVhbCc7XG5cbiAgZ2FtZVNldHVwRGl2LmlkID0gJ2dhbWUtc2V0dXAnO1xuXG4gIGdhbWVJbmZvLmlkID0gJ2dhbWUtaW5mbyc7XG4gIGdhbWVJbmZvLmlubmVySFRNTCA9ICc8cD5HYW1lcGllY2UgTGF5b3V0PC9wPic7XG5cbiAgZ2FtZUJ1dHRvbkRpdi5pZCA9ICdnYW1lLWJ1dHRvbic7XG5cbiAgZ2FtZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtYW51YWxCdG4pO1xuICBnYW1lQnV0dG9uRGl2LmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG4gIFxuICBnYW1lU2V0dXBEaXYuYXBwZW5kQ2hpbGQoZ2FtZUluZm8pO1xuICBnYW1lU2V0dXBEaXYuYXBwZW5kQ2hpbGQoZ2FtZUJ1dHRvbkRpdik7XG4gIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZ2FtZVNldHVwRGl2KTtcbn1cblxuY29uc3Qgc2hpcFNlbGVjdE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBzaGlwU2VsZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlbGVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWxlY3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlbGVjdEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBzaGlwU2VsZWN0RGl2LmlkID0gJ3NoaXAtc2VsZWN0JztcbiAgc2VsZWN0SGVhZGVyLmlkID0gJ3NlbGVjdC1oZWFkZXInO1xuICBzZWxlY3RCb2R5LmlkID0gJ3NlbGVjdC1ib2R5JztcbiAgc2VsZWN0Rm9vdGVyLmlkID0gJ3NlbGVjdC1mb290ZXInO1xuXG4gIG5leHRCdG4uaWQgPSAnbmV4dC1idG4nO1xuICBuZXh0QnRuLmlubmVyVGV4dCA9ICdORVhUJztcbiAgcHJldkJ0bi5pZCA9ICdwcmV2LWJ0bic7XG4gIHByZXZCdG4uaW5uZXJUZXh0ID0gJ1BSRVYnO1xuICBzZWxlY3RGb290ZXIuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG4gIHNlbGVjdEZvb3Rlci5hcHBlbmRDaGlsZChuZXh0QnRuKTtcblxuICBzZWxlY3RIZWFkZXIuaW5uZXJIVE1MID0gJzxoMj5QcmVwYXJlIHlvdXIgc2hpcHMgZm9yIGJhdHRsZSE8L2gyPic7ICBcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IHRvZ2dsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICB0b2dnbGVEaXYuY2xhc3NOYW1lID0gJ3RvZ2dsZS1kaXYnO1xuICAgIGlucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGlucHV0LmlkID0gYHBvc2l0aW9uJHtpfWA7XG4gICAgaW5wdXQubmFtZSA9ICdwb3NpdGlvbi10b2dnbGUnO1xuICAgIGlucHV0LmNoZWNrZWQgPSBpbnB1dC5pZCA9PT0gJ3Bvc2l0aW9uMScgPyB0cnVlIDogZmFsc2U7XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gJ3RvZ2dsZS1idG4nO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHBvc2l0aW9uJHtpfWApO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGlucHV0LmlkID09PSAncG9zaXRpb24xJyA/ICdIb3Jpem9udGFsJyA6ICdWZXJ0aWNhbCc7XG4gICAgXG4gICAgdG9nZ2xlRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB0b2dnbGVEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHNlbGVjdEJvZHkuYXBwZW5kQ2hpbGQodG9nZ2xlRGl2KTtcbiAgfVxuXG4gIHNoaXBTZWxlY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0SGVhZGVyKTtcbiAgc2hpcFNlbGVjdERpdi5hcHBlbmRDaGlsZChzZWxlY3RCb2R5KTtcbiAgc2hpcFNlbGVjdERpdi5hcHBlbmRDaGlsZChzZWxlY3RGb290ZXIpO1xuXG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKHNoaXBTZWxlY3REaXYpO1xufVxuXG5jb25zdCBzaGlwSWNvbnMgPSBbJ2NhcnJpZXItZ3JheS5zdmcnLCAnYmF0dGxlc2hpcC1ncmF5LnN2ZycsICdjcnVpc2VyLWdyYXkuc3ZnJyxcbiAgJ2Rlc3Ryb3llci1ncmF5LnN2ZycsICdzdWItZ3JheS5zdmcnXTtcblxuY29uc3Qgc2hpcFN0YXR1c0ljb25zID0gKHBsYXllcikgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBJY29ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5pZCA9IGAke3BsYXllci5pZC5jaGFyQXQoMCl9LSR7c2hpcEljb25zW2ldLnNwbGl0KCctJylbMF19YDtcbiAgICBpbWcuc3JjID0gY2FjaGVbc2hpcEljb25zW2ldXTtcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfVxufVxuXG5jb25zdCBkcmF3R3JpZCA9IChncmlkVHlwZSkgPT4ge1xuICBjb25zdCBjb2xMYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xMYWJlbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlRGl2LmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgc3F1YXJlRGl2LmlkID0gYCR7Z3JpZFR5cGUuaWQuY2hhckF0KDApfS0ke2NvbExhYmVsc1tqXX0tJHtpICsgMX1gO1xuICAgICAgZ3JpZFR5cGUuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZHJhd1NoaXBzID0gKHNoaXBMaXN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcG9zaXRpb25MaXN0ID0gc2hpcExpc3RbaV0ucG9zaXRpb247XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb3NpdGlvbkxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBjb29yZCA9IGBwLSR7cG9zaXRpb25MaXN0W2pdWzBdfS0ke3Bvc2l0aW9uTGlzdFtqXVsxXX1gO1xuICAgICAgY29uc3QgZ3JpZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmQpO1xuICAgICAgZ3JpZElkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODQ4OThjJztcbiAgICAgIGdyaWRJZC5zdHlsZS5ib3JkZXIgPSAnMHB4JztcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZ2FtZU92ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBnYW1lT3Zlck1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVPdmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVPdmVyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBnYW1lT3ZlckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHF1aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBsZXQgd2lubmVyID0gbmFtZSA9PT0gJ3BsYXllcjEnID8gJ1BsYXllciAxJyA6ICdDb21wdXRlcic7XG4gIGxldCBsb3NlcjtcblxuICBpZiAod2lubmVyID09PSAnUGxheWVyIDEnKSB7XG4gICAgbG9zZXIgPSAnQ29tcHV0ZXInO1xuICB9IGVsc2UgaWYod2lubmVyID09PSAnQ29tcHV0ZXInKSB7XG4gICAgbG9zZXIgPSAnUGxheWVyIDEnO1xuICB9XG5cbnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlc3RhcnRHYW1lKCk7XG4gIC8vIGluaXRpYWxQYWdlTG9hZCgpO1xuICBib2FyZFNldHVwKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAvLyBnYW1lU2V0dXAoKTtcbiAgZ2FtZUxvb3AoKTtcbn0pO1xuXG5xdWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL3d3dy5nb29nbGUuY29tJztcbn0pO1xuXG4gIGdhbWVPdmVyTW9kYWwuaWQgPSAnZ2FtZS1vdmVyJztcblxuICBnYW1lT3ZlckhlYWRlci5pbm5lckhUTUwgPSBgPGgyPkdhbWUgT3ZlcjwvPmA7XG4gIGdhbWVPdmVyQm9keS5pbm5lckhUTUwgPSBgPHA+JHt3aW5uZXJ9J3MgZmxlZXQgd2FzIHZpY3RvcmlvdXMgb3ZlciAke2xvc2VyfSE8L3A+YDtcblxuICByZXN0YXJ0QnRuLm5hbWUgPSAncmVzdGFydCc7XG4gIHJlc3RhcnRCdG4uaWQgPSAncmVzdGFydC1idG4nO1xuICByZXN0YXJ0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcmVzdGFydEJ0bi5hdXRvZm9jdXMgPSB0cnVlO1xuICByZXN0YXJ0QnRuLmlubmVyVGV4dCA9ICdQbGF5IEFnYWluPyc7XG5cbiAgcXVpdEJ0bi5uYW1lID0gJ3F1aXQnO1xuICBxdWl0QnRuLmlkID0gJ3F1aXQtYnRuJztcbiAgcXVpdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHF1aXRCdG4uaW5uZXJUZXh0ID0gJ1F1aXQnO1xuXG4gIFxuICBnYW1lT3ZlckZvb3Rlci5hcHBlbmRDaGlsZChyZXN0YXJ0QnRuKTtcbiAgZ2FtZU92ZXJGb290ZXIuYXBwZW5kQ2hpbGQocXVpdEJ0bik7XG5cbiAgZ2FtZU92ZXJNb2RhbC5hcHBlbmRDaGlsZChnYW1lT3ZlckhlYWRlcik7XG4gIGdhbWVPdmVyTW9kYWwuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJCb2R5KTtcbiAgZ2FtZU92ZXJNb2RhbC5hcHBlbmRDaGlsZChnYW1lT3ZlckZvb3Rlcik7XG4gIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJNb2RhbCk7XG59XG5cbmNvbnN0IGJvYXJkU2V0dXAgPSAoKSA9PiB7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21wdXRlclNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllckdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tcHV0ZXJHcmlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgYm9hcmREaXYuaWQgPSAnYm9hcmQtY29udGFpbmVyJztcblxuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QgPSAnYm9hcmQnO1xuICBwbGF5ZXJTaGlwcy5pZCA9ICdwbGF5ZXItc2hpcHMnO1xuICBwbGF5ZXJHcmlkRGl2LmlkID0gJ3BsYXllci1ncmlkJztcblxuICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdCA9ICdib2FyZCc7XG4gIGNvbXB1dGVyU2hpcHMuaWQgPSAnY29tcHV0ZXItc2hpcHMnO1xuICBjb21wdXRlckdyaWREaXYuaWQgPSAnY29tcHV0ZXItZ3JpZCc7XG5cbiAgZHJhd0dyaWQocGxheWVyR3JpZERpdiwgcGxheWVyR3JpZERpdi5pZCk7XG4gIGRyYXdHcmlkKGNvbXB1dGVyR3JpZERpdiwgY29tcHV0ZXJHcmlkRGl2LmlkKTtcblxuICBzaGlwU3RhdHVzSWNvbnMocGxheWVyU2hpcHMpO1xuICBzaGlwU3RhdHVzSWNvbnMoY29tcHV0ZXJTaGlwcyk7XG5cbiAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyU2hpcHMpO1xuICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJHcmlkRGl2KTtcbiAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjb21wdXRlckdyaWREaXYpO1xuICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNvbXB1dGVyU2hpcHMpO1xuXG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XG4gIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoYm9hcmREaXYpO1xufVxuXG5jb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XG4gIGNvbnRhaW5lckRpdigpO1xuICBoZWFkZXIoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25EaXYpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsUGFnZUxvYWQsIGdhbWVTZXR1cCwgYm9hcmRTZXR1cCwgZHJhd1NoaXBzLCBnYW1lT3Zlciwgc2hpcFNlbGVjdE1vZGFsIH0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IG5hbWUgPSAncGxheWVyMSc7XG4gIGNvbnN0IGF0dGFjayA9IChjb29yZCwgZW5lbXkpID0+IHtcbiAgICByZXR1cm4gZW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gIH1cbiAgcmV0dXJuIHthdHRhY2ssIGdhbWVib2FyZCwgbmFtZX1cbn1cblxuXG5jb25zdCBDb21wdXRlciA9ICgpID0+IHtcbiAgY29uc3Qge2dhbWVib2FyZH0gPSBQbGF5ZXIoKTtcbiAgY29uc3QgbmFtZSA9ICdjb21wdXRlcic7XG4gIGxldCBsYXN0SGl0ID0gW107XG4gIGxldCBzbWFydFNlbGVjdGlvbiA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ29vcmQoKSB7XG4gICAgY29uc3QgY29sID0gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNzQgLSA2NSArIDEpICsgNjUpKTtcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxICsgMSkgKyAxKTtcbiAgICByZXR1cm4gW2NvbCwgcm93XSBcbiAgfVxuXG4gIGZ1bmN0aW9uIHZlcmlmeUNvb3JkKGNvb3JkLCBlbmVteUNvb3JkTWlzc2VkLCBlbmVteUNvb3JkSGl0cykge1xuICAgIGxldCB0b3RhbEhpdHMgPSBlbmVteUNvb3JkTWlzc2VkLmNvbmNhdChlbmVteUNvb3JkSGl0cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbEhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gdG90YWxIaXRzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBpc1N1YnNldCA9IGNvb3JkLmV2ZXJ5KChlbGVtZW50KSA9PiBjdXJyZW50W2pdLmluY2x1ZGVzKGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKGlzU3Vic2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGlzU3Vic2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNtYXJ0QXR0YWNrKCkge1xuICAgIGlmIChzbWFydFNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHNtYXJ0U2VsZWN0aW9uLnB1c2goW1N0cmluZy5mcm9tQ2hhckNvZGUobGFzdEhpdFswXS5jaGFyQ29kZUF0KDApICsgMSksIGxhc3RIaXRbMV1dKTtcbiAgICAgIHNtYXJ0U2VsZWN0aW9uLnB1c2goW1N0cmluZy5mcm9tQ2hhckNvZGUobGFzdEhpdFswXS5jaGFyQ29kZUF0KDApIC0gMSksIGxhc3RIaXRbMV1dKTtcbiAgICAgIHNtYXJ0U2VsZWN0aW9uLnB1c2goW2xhc3RIaXRbMF0sIChsYXN0SGl0WzFdICsgMSldKTtcbiAgICAgIHNtYXJ0U2VsZWN0aW9uLnB1c2goW2xhc3RIaXRbMF0sIChsYXN0SGl0WzFdIC0gMSldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAgIFxuICBjb25zdCBhdHRhY2sgPSAoZW5lbXksIGVuZW15Q29vcmRNaXNzZWQsIGVuZW15Q29vcmRIaXRzKSA9PiB7XG4gICAgbGV0IGNvb3JkO1xuXG4gICAgaWYgKHNtYXJ0U2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvb3JkID0gc21hcnRTZWxlY3Rpb25bc21hcnRTZWxlY3Rpb24ubGVuZ3RoIC0gMV07XG5cbiAgICAgIHdoaWxlKHZlcmlmeUNvb3JkKGNvb3JkLCBlbmVteUNvb3JkTWlzc2VkLCBlbmVteUNvb3JkSGl0cykpIHtcbiAgICAgICAgc21hcnRTZWxlY3Rpb24ucG9wKCk7XG4gICAgICAgIGNvb3JkID0gc21hcnRTZWxlY3Rpb25bc21hcnRTZWxlY3Rpb24ubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChzbWFydFNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb29yZCA9IGdlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkID0gZ2VuZXJhdGVDb29yZCgpO1xuXG4gICAgICAgIHdoaWxlKHZlcmlmeUNvb3JkKGNvb3JkLCBlbmVteUNvb3JkTWlzc2VkLCBlbmVteUNvb3JkSGl0cykpIHtcbiAgICAgICAgICBjb29yZCA9IGdlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIFxuICAgIGxldCBhdHRhY2sgPSBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICBsYXN0SGl0ID0gYXR0YWNrID09PSB0cnVlID8gY29vcmQgOiBbXTtcblxuICAgIGlmIChhdHRhY2sgPT09IHRydWUpIHsgXG4gICAgICBzbWFydEF0dGFjaygpO1xuICAgICAgbGFzdEhpdCA9IFtdO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiBbYXR0YWNrLCBjb29yZF07XG4gIH1cbiAgcmV0dXJuIHthdHRhY2ssIHZlcmlmeUNvb3JkLCBnYW1lYm9hcmQsIG5hbWV9O1xufVxuXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07XG4iLCJjb25zdCBTaGlwID0gKHNpemUpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gc2l6ZTtcbiAgbGV0IGhpdENvdW50ID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7aGl0Q291bnQgKz0gMTt9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtsZW5ndGggPT09IGhpdENvdW50ID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7fVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGhpdHMoKSB7XG4gICAgICByZXR1cm4gaGl0Q291bnQ7XG4gICAgfSxcbiAgICBnZXQgc3Vua1N0YXR1cygpIHtcbiAgICAgIHJldHVybiBzdW5rO1xuICAgIH0sXG4gICAgbGVuZ3RoLCBoaXQsIGlzU3Vua1xuICB9XG59XG5cbmV4cG9ydCB7U2hpcH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vZ2FtZXBsYXknO1xuaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkLCBnYW1lU2V0dXAsIGJvYXJkU2V0dXAgfSBmcm9tICcuL3BhZ2VsYXlvdXQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxQYWdlTG9hZCgpO1xuZ2FtZVNldHVwKCk7XG5ib2FyZFNldHVwKCk7XG5zdGFydEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=