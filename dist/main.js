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
  let playerCount = 0;
  let compCount = 0;

  function gameTurn(enemy) {
    let initial = enemy.name.charAt(0);

    sunkResult = enemy.gameboard.sunkenShips();

    if (sunkResult !== undefined) {
      document.getElementById(`${initial}-${sunkResult}`).src = `./assets/${sunkResult}-red.svg`;
      if (initial === 'p') {
        playerCount++;
      } 
      if (initial === 'c') {
        compCount++;
      }
    }

    if (compCount === 5) {
      document.getElementById('board-container').style.display = 'none';
      (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.gameOver)('player1');
      document.getElementById('game-over').style.display = 'flex';
    }
    if (playerCount === 5) {
      document.getElementById('board-container').style.display = 'none';
      (0,_pagelayout__WEBPACK_IMPORTED_MODULE_0__.gameOver)('computer');
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
  boardSetup();
  document.getElementById('board-container').style.display = 'flex';
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
    const colUp = (lastHit[0].charCodeAt(0) + 1);
    const colDown = (lastHit[0].charCodeAt(0) - 1);
    const rowUp = (lastHit[1] + 1);
    const rowDown = (lastHit[1] - 1);

    if (smartSelection.length === 0) {
      if (colUp < 75 && colDown > 64){
        smartSelection.push([String.fromCharCode(colUp), lastHit[1]]);
        smartSelection.push([String.fromCharCode(colDown), lastHit[1]]);
      }

      if (rowUp < 11 && rowDown > 0) {
        smartSelection.push([lastHit[0], rowUp]);
        smartSelection.push([lastHit[0], rowDown]);
      }      
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUEyQztBQUN2Riw0Q0FBNEMsK0lBQW1EO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUMrQjtBQUNqRDs7QUFFckIsNERBQWU7QUFDZixzREFBUztBQUNULHVEQUFVO0FBQ1Ysb0RBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BhZ2VsYXlvdXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL1ZUMzIzLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2JhdHRsZXNoaXAtaGVhZGVyLWJnLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tcHJpbWFyeTogIzFmNWY4YjtcbiAgLS1wcmltYXJ5LWRhcms6ICMyNTNiNmU7XG4gIC0tcHJpbWFyeS1saWdodDogI2QyZWNmOTtcbiAgLS1hY2NlbnQ6ICMxODkxYWM7XG4gIC0tZm9udC1tYWluOiBWVDMyMztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBWVDMyMztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI2ltYWdlLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggdmFyKC0tcHJpbWFyeSk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2xvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbn1cblxuI2dhbWUtc2V0dXAsXG4jc2hpcC1zZWxlY3QsXG4jZ2FtZS1vdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xufVxuXG4jc2hpcC1zZWxlY3Qge1xuICBtYXJnaW46IDA7XG59XG5cbiNzZWxlY3QtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuI3NlbGVjdC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4udG9nZ2xlLWRpdiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuLnRvZ2dsZS1kaXYgbGFiZWwsXG4udG9nZ2xlLWRpdiBpbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9nZ2xlLWRpdiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBvcGFjaXR5OiAwLjAxMTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4udG9nZ2xlLWRpdiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogIHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi50b2dnbGUtZGl2IGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5MDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuXG4jZ2FtZS1pbmZvIHB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4jZ2FtZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNwbGF5ZXItc2hpcHMsXG4jY29tcHV0ZXItc2hpcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuI3BsYXllci1zaGlwcyBpbWcsXG4jY29tcHV0ZXItc2hpcHMgaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3BsYXllci1ncmlkLFxuI2NvbXB1dGVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbiNib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uc3F1YXJlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4jY29tcHV0ZXItZ3JpZCAuc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuI2NvbXB1dGVyLWdyaWQgLnNxdWFyZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4jZ2FtZS1vdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4jZ2FtZS1vdmVyIGgyIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuI2dhbWUtb3ZlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZ2FtZS1vdmVyIDpudGgtY2hpbGQoMykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTVweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3F1aXQtYnRuLFxuI3Jlc3RhcnQtYnRuIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseURBQXVEO0VBQ3ZELDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLHlDQUF5QztFQUN6QywyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzFmNWY4YjtcXG4gIC0tcHJpbWFyeS1kYXJrOiAjMjUzYjZlO1xcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjZDJlY2Y5O1xcbiAgLS1hY2NlbnQ6ICMxODkxYWM7XFxuICAtLWZvbnQtbWFpbjogVlQzMjM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFZUMzIzO1xcbiAgc3JjOiB1cmwoYXNzZXRzL1ZUMzIzLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNpbWFnZS1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvYmF0dGxlc2hpcC1oZWFkZXItYmcuanBlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHZhcigtLXByaW1hcnkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbiNnYW1lLXNldHVwLFxcbiNzaGlwLXNlbGVjdCxcXG4jZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCB2YXIoLS1hY2NlbnQpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XFxufVxcblxcbiNzaGlwLXNlbGVjdCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNzZWxlY3QtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbiNzZWxlY3QtZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi50b2dnbGUtZGl2IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbi50b2dnbGUtZGl2IGxhYmVsLFxcbi50b2dnbGUtZGl2IGlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2dnbGUtZGl2IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgb3BhY2l0eTogMC4wMTE7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi50b2dnbGUtZGl2IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQ6ICB2YXIoLS1hY2NlbnQpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4udG9nZ2xlLWRpdiBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiA5MDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG59XFxuXFxuI2dhbWUtaW5mbyBwe1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxufVxcblxcbiNnYW1lLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI3BsYXllci1zaGlwcyxcXG4jY29tcHV0ZXItc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogNzUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI3BsYXllci1zaGlwcyBpbWcsXFxuI2NvbXB1dGVyLXNoaXBzIGltZyB7XFxuICB3aWR0aDogNzAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3BsYXllci1ncmlkLFxcbiNjb21wdXRlci1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWFjY2VudCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbiNib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiNjb21wdXRlci1ncmlkIC5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuI2NvbXB1dGVyLWdyaWQgLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI2dhbWUtb3ZlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB6LWluZGV4OiA1MDtcXG59XFxuXFxuI2dhbWUtb3ZlciBoMiB7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIDpudGgtY2hpbGQoMykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNxdWl0LWJ0bixcXG4jcmVzdGFydC1idG4ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYXR0bGVzaGlwLWdyYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2JhdHRsZXNoaXAtZ3JheS5zdmdcIixcblx0XCIuL2JhdHRsZXNoaXAtaGVhZGVyLWJnLmpwZWdcIjogXCIuL3NyYy9hc3NldHMvYmF0dGxlc2hpcC1oZWFkZXItYmcuanBlZ1wiLFxuXHRcIi4vYmF0dGxlc2hpcC1sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9iYXR0bGVzaGlwLWxvZ28uc3ZnXCIsXG5cdFwiLi9iYXR0bGVzaGlwLXJlZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvYmF0dGxlc2hpcC1yZWQuc3ZnXCIsXG5cdFwiLi9jYXJyaWVyLWdyYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NhcnJpZXItZ3JheS5zdmdcIixcblx0XCIuL2NhcnJpZXItcmVkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jYXJyaWVyLXJlZC5zdmdcIixcblx0XCIuL2NydWlzZXItZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvY3J1aXNlci1ncmF5LnN2Z1wiLFxuXHRcIi4vY3J1aXNlci1yZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NydWlzZXItcmVkLnN2Z1wiLFxuXHRcIi4vZGVzdHJveWVyLWdyYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2Rlc3Ryb3llci1ncmF5LnN2Z1wiLFxuXHRcIi4vZGVzdHJveWVyLXJlZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvZGVzdHJveWVyLXJlZC5zdmdcIixcblx0XCIuL2V4cGxvc2lvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvZXhwbG9zaW9uLnN2Z1wiLFxuXHRcIi4vc3ViLWdyYXkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3N1Yi1ncmF5LnN2Z1wiLFxuXHRcIi4vc3ViLXJlZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvc3ViLXJlZC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXBzJztcblxuY29uc3Qgc2hpcHMgPSBbe25hbWU6ICdjYXJyaWVyJywgc2l6ZTogNX0sIHtuYW1lOiAnYmF0dGxlc2hpcCcsIHNpemU6IDQsfSwge25hbWU6ICdjcnVpc2VyJywgc2l6ZTogMyx9LCBcbiAge25hbWU6ICdkZXN0cm95ZXInLCBzaXplOiAzfSwge25hbWU6ICdzdWInLCBzaXplOiAyfV07XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgbGV0IHNoaXBMaXN0ID0gW107XG4gIGxldCBtaXNzZWRBdHRhY2tzID0gW107XG4gIGxldCBhdHRhY2tIaXRzID0gW107XG4gIGxldCBzaGlwc0xlZnQgPSBbXTtcbiAgbGV0IGdhbWVQaWVjZUxpc3QgPSBbXTtcbiAgXG4gIGZ1bmN0aW9uIHJhbmRvbUNvbChzaXplLCBpc1ZlcnRpY2FsKSB7XG4gICAgbGV0IGNvbDtcbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKCg3NCAtIHNpemUpLSA2NSArIDEpICsgNjUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sID0gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNzQgLSA2NSArIDEpICsgNjUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbVJvdyhzaXplLCBpc1ZlcnRpY2FsKSB7XG4gICAgbGV0IHJvdztcbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEgKyAxKSArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKDEwIC0gc2l6ZSkgLSAxICsgMSkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHJldHVybiBpc1ZlcnRpY2FsO1xuICB9XG5cbiAgY29uc3Qgc2hpcFBvc2l0aW9uID0gKG9yaWVudGF0aW9uLCBzaGlwTGVudGgsIHN0YXJ0Q29vcmQpID0+IHtcbiAgICBsZXQgeFZhbCA9IHN0YXJ0Q29vcmRbMF07XG4gICAgbGV0IHlWYWwgPSBzdGFydENvb3JkWzFdO1xuICAgIGxldCBzaGlwQ29vcmQgPSBbXTtcblxuICAgIGxldCBpc1ZlcnRpY2FsID0gb3JpZW50YXRpb247XG4gICAgc2hpcENvb3JkLnB1c2goc3RhcnRDb29yZCk7XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbnRoOyBpKyspIHtcbiAgICAgICAgeFZhbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoeFZhbC5jaGFyQ29kZUF0KDApICsgMSk7XG4gICAgICAgIGxldCB0ZW1wID0gW3hWYWwsIHlWYWxdO1xuICAgICAgICBzaGlwQ29vcmQucHVzaCh0ZW1wKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVudGg7IGkrKykge1xuICAgICAgICB5VmFsID0gKHlWYWwgKyAxKTtcbiAgICAgICAgbGV0IHRlbXAgPSBbeFZhbCwgeVZhbF07XG4gICAgICAgIHNoaXBDb29yZC5wdXNoKHRlbXApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9zaXRpb25DaGVjayhjb29yZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gY29vcmRbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVQaWVjZUxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGlzU3Vic2V0ID0gY3VycmVudC5ldmVyeSgoZWxlbWVudCkgPT4gZ2FtZVBpZWNlTGlzdFtqXS5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgICAgIGlmIChpc1N1YnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT57XG4gICAgbGV0IHN0YXJ0Q29vcmQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmFuZG9tQm9vbGVhbiA9IHJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcHNbaV0uc2l6ZSk7XG4gICAgICBsZXQgY29sID0gcmFuZG9tQ29sKHNoaXBzW2ldLnNpemUsIHJhbmRvbUJvb2xlYW4pO1xuICAgICAgbGV0IHJvdyA9IHJhbmRvbVJvdyhzaGlwc1tpXS5zaXplLCByYW5kb21Cb29sZWFuKTtcbiAgICAgIGxldCBwb3NpdGlvblRlbXA7XG5cbiAgICAgIHN0YXJ0Q29vcmQgPSBbY29sLCByb3ddO1xuICAgICAgc2hpcC5uYW1lID0gc2hpcHNbaV0ubmFtZTtcbiAgICAgIHBvc2l0aW9uVGVtcCA9IHNoaXBQb3NpdGlvbihyYW5kb21Cb29sZWFuLCBzaGlwc1tpXS5zaXplLCBzdGFydENvb3JkKTtcblxuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IHBvc2l0aW9uQ2hlY2socG9zaXRpb25UZW1wKTtcblxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgICBjb2wgPSByYW5kb21Db2woc2hpcHNbaV0uc2l6ZSwgcmFuZG9tQm9vbGVhbik7XG4gICAgICAgICAgcm93ID0gcmFuZG9tUm93KHNoaXBzW2ldLnNpemUsIHJhbmRvbUJvb2xlYW4pO1xuICAgICAgICAgIHN0YXJ0Q29vcmQgPSBbY29sLCByb3ddO1xuICAgICAgICAgIHBvc2l0aW9uVGVtcCA9IHNoaXBQb3NpdGlvbihyYW5kb21Cb29sZWFuLCBzaGlwc1tpXS5zaXplLCBzdGFydENvb3JkKTtcbiAgICAgICAgICBtYXRjaCA9IHBvc2l0aW9uQ2hlY2socG9zaXRpb25UZW1wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzaGlwLnBvc2l0aW9uID0gcG9zaXRpb25UZW1wO1xuICAgICAgZ2FtZVBpZWNlTGlzdCA9IGdhbWVQaWVjZUxpc3QuY29uY2F0KHNoaXAucG9zaXRpb24pO1xuICAgICAgc2hpcExpc3QucHVzaChzaGlwKTtcbiAgICAgIHNoaXBzTGVmdC5wdXNoKHNoaXApO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcExpc3Q7XG4gIH1cblxuICBjb25zdCBjcmVhdGVNYW51YWxTaGlwcyA9IChzaGlwSW5wdXRMaXN0KSA9PiB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcHNbaV0uc2l6ZSk7XG4gICAgICAgIGxldCB0ZW1wID0gW107XG5cbiAgICAgICAgc2hpcC5uYW1lID0gc2hpcHNbaV0ubmFtZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXAubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0ZW1wLnB1c2goc2hpcElucHV0TGlzdFtjb3VudF0pO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcC5wb3NpdGlvbiA9IHRlbXA7XG4gICAgICAgIGdhbWVQaWVjZUxpc3QgPSBnYW1lUGllY2VMaXN0LmNvbmNhdChzaGlwLnBvc2l0aW9uKTtcbiAgICAgICAgc2hpcExpc3QucHVzaChzaGlwKTtcbiAgICAgICAgc2hpcHNMZWZ0LnB1c2goc2hpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcExpc3Q7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHN0cmlrZUNvb3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgIGxldCBjdXJyZW50ID0gc2hpcExpc3RbaV0ucG9zaXRpb247XG4gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBpc1N1YnNldCA9IHN0cmlrZUNvb3JkLmV2ZXJ5KChlbGVtZW50KSA9PiBjdXJyZW50W2pdLmluY2x1ZGVzKGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKGlzU3Vic2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgc2hpcExpc3RbaV0uaGl0KCk7XG4gICAgICAgICAgc2hpcExpc3RbaV0uaXNTdW5rKCk7XG4gICAgICAgICAgYXR0YWNrSGl0cy5wdXNoKHN0cmlrZUNvb3JkKTtcbiAgICAgICAgICByZXR1cm4gaXNTdWJzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKHN0cmlrZUNvb3JkKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzdW5rZW5TaGlwcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTGVmdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNoaXBzTGVmdFtpXS5zdW5rU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBuYW1lID0gc2hpcHNMZWZ0W2ldLm5hbWU7XG4gICAgICAgIHNoaXBzTGVmdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9IFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gc2hpcExpc3Q7XG4gICAgfSwgXG4gICAgZ2V0IHJlbWFpbmluZygpIHtcbiAgICAgIHJldHVybiBzaGlwc0xlZnQ7XG4gICAgfSxcbiAgICBnZXQgbWlzc2VkKCkge1xuICAgICAgcmV0dXJuIG1pc3NlZEF0dGFja3M7XG4gICAgfSxcbiAgICBnZXQgbWFkZSgpIHtcbiAgICAgIHJldHVybiBhdHRhY2tIaXRzO1xuICAgIH0sXG4gICAgc2hpcFBvc2l0aW9uLFxuICAgIGNyZWF0ZVNoaXBzLFxuICAgIGNyZWF0ZU1hbnVhbFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc3Vua2VuU2hpcHMsXG4gICAgcG9zaXRpb25DaGVjayxcbiAgICBzaGlwTGlzdCxcbiAgICBnYW1lUGllY2VMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHtHYW1lYm9hcmQsIHNoaXBzfTtcbiIsImltcG9ydCB7IGRyYXdTaGlwcywgZ2FtZU92ZXIsIHNoaXBTZWxlY3RNb2RhbCB9IGZyb20gJy4vcGFnZWxheW91dCc7XG5pbXBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0ICcuL2Fzc2V0cy9leHBsb3Npb24uc3ZnJztcbmltcG9ydCB7IEdhbWVib2FyZCwgc2hpcHMgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1idG4nKTtcbiAgY29uc3QgbWFudWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbnVhbC1idG4nKTtcbiAgY29uc3QgZ2FtZVNldHVwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2V0dXAnKTtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ncmlkJyk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItc2hpcHMnKTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXNoaXBzJyk7XG5cbiAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWVTZXR1cERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZ2FtZUxvb3AoJ3JhbmRvbScpO1xuICB9KTtcblxuICBtYW51YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2FtZVNldHVwRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBwbGF5ZXJTaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbXB1dGVyR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbXB1dGVyU2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzaGlwU2VsZWN0TW9kYWwoKTtcbiAgICBwbGF5ZXJTaGlwU2VsZWN0aW9uKCk7XG4gIH0pO1xufVxuXG5jb25zdCBwbGF5ZXJTaGlwU2VsZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ3JpZCcpO1xuICBjb25zdCBjb21wdXRlclNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLXNoaXBzJyk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1zaGlwcycpO1xuICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ncmlkJyk7XG4gIGNvbnN0IHNoaXBTZWxlY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1zZWxlY3QnKTtcbiAgY29uc3QgdmVydGljYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zaXRpb24yJyk7XG4gIGNvbnN0IHtzaGlwUG9zaXRpb259ID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHNlbGVjdGVkID0gW107XG5cbiAgbGV0IHNlbGVjdGlvblRlbXAgPSBbXTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBkcmF3UGxheWVyU2VsZWN0aW9uIChpbnB1dExpc3QsIGNvbG9yKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb29yZFRlbXAgPSBpbnB1dExpc3RbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3JkVGVtcC5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgc3F1YXJlQ29vcmQgPSBgcC0ke2Nvb3JkVGVtcFswXX0tJHtjb29yZFRlbXBbMV19YDtcbiAgICAgICAgY29uc3QgZ3JpZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3F1YXJlQ29vcmQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGdyaWRJZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICBncmlkSWQuc3R5bGUuYm9yZGVyID0gJzBweCc7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGF5ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgc2VsZWN0aW9uVGVtcC5sZW5ndGggPSAwO1xuXG4gICAgaWYgKGUudGFyZ2V0LmlkICE9PSAncGxheWVyLWdyaWQnKSB7XG4gICAgICBjb25zdCBkaXZJZCA9IGUudGFyZ2V0LmlkO1xuXG4gICAgICBsZXQgc3BsaXQgPSBkaXZJZC5zcGxpdCgnLScpO1xuICAgICAgbGV0IGNvb3JkID0gW3NwbGl0WzFdLCBOdW1iZXIoc3BsaXRbMl0pXTtcbiAgICAgIGxldCB0ZW1wID0gc2hpcFBvc2l0aW9uKHZlcnRpY2FsQnRuLmNoZWNrZWQsIHNoaXBzW2NvdW50XS5zaXplLCBjb29yZCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxlY3Rpb25UZW1wLnB1c2godGVtcFtpXSk7XG4gICAgICB9XG4gICAgICBpZiAoY291bnQgPT09IDUpIHtcbiAgICAgICAgZHJhd1BsYXllclNlbGVjdGlvbihzZWxlY3Rpb25UZW1wLCAnIzg0ODk4YycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhd1BsYXllclNlbGVjdGlvbihzZWxlY3Rpb25UZW1wLCAnZ3JlZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCAhPT0gJ3BsYXllci1ncmlkJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25UZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb29yZFRlbXAgPSBzZWxlY3Rpb25UZW1wW2ldO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29vcmRUZW1wLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVDb29yZCA9IGBwLSR7Y29vcmRUZW1wWzBdfS0ke2Nvb3JkVGVtcFsxXX1gO1xuICAgICAgICAgICAgY29uc3QgZ3JpZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3F1YXJlQ29vcmQpO1xuXG4gICAgICAgICAgICBpZiAoZ3JpZElkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJyM4NDg5OGMnKXtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZ3JpZElkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZDJlY2Y5JztcbiAgICAgICAgICAgICAgZ3JpZElkLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzE4OTFhYyc7XG4gICAgICAgICAgICAgIGRyYXdQbGF5ZXJTZWxlY3Rpb24oc2VsZWN0ZWQsICcjODQ4OThjJyk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgXG4gIHBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGludmFsaWRTZWxlY3Rpb24gPSBkcmF3UGxheWVyU2VsZWN0aW9uKHNlbGVjdGlvblRlbXAsICcjODQ4OThjJyk7XG5cbiAgICBpZiAoaW52YWxpZFNlbGVjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgZHJhd1BsYXllclNlbGVjdGlvbihzZWxlY3Rpb25UZW1wLCAnIzg0ODk4YycpO1xuICAgIH1cbiAgICB3aGlsZSghaW52YWxpZFNlbGVjdGlvbikge1xuICAgICAgaWYgKGNvdW50IDwgNikge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgIT09ICdwbGF5ZXItZ3JpZCcpIHtcbiAgICAgICAgICBsZXQgaXNNYXRjaDtcbiAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG4gICAgICAgICAgbGV0IHNlbGVjdGlvbkhvbGQgPSBbXTtcbiAgXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25UZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHNlbGVjdGlvblRlbXBbaV07XG4gICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlzTWF0Y2ggPSBKU09OLnN0cmluZ2lmeShjdXJyZW50KSA9PT0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRbal0pO1xuICAgICAgICAgICAgICBpZiAoaXNNYXRjaCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoQ291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0aW9uSG9sZC5wdXNoKHNlbGVjdGlvblRlbXBbaV0pO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBpZiAobWF0Y2hDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGRyYXdQbGF5ZXJTZWxlY3Rpb24oc2VsZWN0ZWQsICcjODQ4OThjJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uSG9sZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHNlbGVjdGlvbkhvbGRbaV0uc2xpY2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmF3UGxheWVyU2VsZWN0aW9uKHNlbGVjdGVkLCAnIzg0ODk4YycpO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoY291bnQgPT09IDUpIHtcbiAgICAgICAgICBwbGF5ZXJHcmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgc2hpcFNlbGVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGNvbXB1dGVyR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICAgIHBsYXllclNoaXBzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgY29tcHV0ZXJTaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgIGdhbWVMb29wKCdwbGF5ZXInLCBzZWxlY3RlZCk7XG4gICAgICAgIH0gXG4gICAgICB9ICBcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3ZlcicpLnJlbW92ZSgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNldHVwJykucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGdhbWVMb29wID0gKHNlbGVjdGlvblR5cGUsIHNlbGVjdGVkTGlzdCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gQ29tcHV0ZXIoKTtcbiAgY29uc3QgY29tcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ3JpZCcpO1xuXG4gIGxldCBzdW5rUmVzdWx0O1xuICBsZXQgcGxheWVyQ291bnQgPSAwO1xuICBsZXQgY29tcENvdW50ID0gMDtcblxuICBmdW5jdGlvbiBnYW1lVHVybihlbmVteSkge1xuICAgIGxldCBpbml0aWFsID0gZW5lbXkubmFtZS5jaGFyQXQoMCk7XG5cbiAgICBzdW5rUmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnN1bmtlblNoaXBzKCk7XG5cbiAgICBpZiAoc3Vua1Jlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbml0aWFsfS0ke3N1bmtSZXN1bHR9YCkuc3JjID0gYC4vYXNzZXRzLyR7c3Vua1Jlc3VsdH0tcmVkLnN2Z2A7XG4gICAgICBpZiAoaW5pdGlhbCA9PT0gJ3AnKSB7XG4gICAgICAgIHBsYXllckNvdW50Kys7XG4gICAgICB9IFxuICAgICAgaWYgKGluaXRpYWwgPT09ICdjJykge1xuICAgICAgICBjb21wQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29tcENvdW50ID09PSA1KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGdhbWVPdmVyKCdwbGF5ZXIxJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG4gICAgaWYgKHBsYXllckNvdW50ID09PSA1KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGdhbWVPdmVyKCdjb21wdXRlcicpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3ZlcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdGlvblR5cGUgPT09ICdyYW5kb20nKSB7XG4gICAgcGxheWVyMS5nYW1lYm9hcmQuY3JlYXRlU2hpcHMoKTtcbiAgICBkcmF3U2hpcHMocGxheWVyMS5nYW1lYm9hcmQubGlzdCk7XG4gIH1lbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyMS5nYW1lYm9hcmQuY3JlYXRlTWFudWFsU2hpcHMoc2VsZWN0ZWRMaXN0KTtcbiAgICAgIGRyYXdTaGlwcyhwbGF5ZXIxLmdhbWVib2FyZC5saXN0KTtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbXB1dGVyLmdhbWVib2FyZC5jcmVhdGVTaGlwcygpO1xuXG4gIGNvbXBHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBkaXZJZCA9IGUudGFyZ2V0LmlkO1xuXG4gICAgbGV0IHNwbGl0ID0gZGl2SWQuc3BsaXQoJy0nKTtcbiAgICBsZXQgY29vcmQgPSBbc3BsaXRbMV0sIE51bWJlcihzcGxpdFsyXSldO1xuXG4gICAgd2hpbGUgKGNvbXB1dGVyLnZlcmlmeUNvb3JkKGNvb3JkLCBjb21wdXRlci5nYW1lYm9hcmQubWlzc2VkLCBjb21wdXRlci5nYW1lYm9hcmQubWFkZSkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwbGF5ZXJSZXN1bHQgPSBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG5cbiAgICBpZiAocGxheWVyUmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChhc3NldHMvZXhwbG9zaW9uLnN2ZyknO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkMmVjZjknO1xuICAgIH1cblxuICAgIGdhbWVUdXJuKGNvbXB1dGVyKTtcblxuICAgIGNvbXBHcmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb21wdXRlclJlc3VsdCA9IGNvbXB1dGVyLmF0dGFjayhwbGF5ZXIxLmdhbWVib2FyZCwgcGxheWVyMS5nYW1lYm9hcmQubWlzc2VkLCBwbGF5ZXIxLmdhbWVib2FyZC5tYWRlKTtcbiAgICBcbiAgICAgIGlmIChjb21wdXRlclJlc3VsdFswXSA9PT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcC0ke2NvbXB1dGVyUmVzdWx0WzFdWzBdfS0ke2NvbXB1dGVyUmVzdWx0WzFdWzFdfWApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoYXNzZXRzL2V4cGxvc2lvbi5zdmcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwLSR7Y29tcHV0ZXJSZXN1bHRbMV1bMF19LSR7Y29tcHV0ZXJSZXN1bHRbMV1bMV19YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyNTNiNmUnO1xuICAgICAgfVxuXG4gICAgICBnYW1lVHVybihwbGF5ZXIxKTtcblxuICAgICAgY29tcEdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHN0YXJ0R2FtZSwgcmVzdGFydEdhbWUsIGdhbWVMb29wIH1cbiIsImltcG9ydCB7IHJlc3RhcnRHYW1lLCBnYW1lTG9vcCB9IGZyb20gJy4vZ2FtZXBsYXknO1xuXG5jb25zdCBjYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChjYWNoZVtrZXkucmVwbGFjZSgnLi8nLCAnJyldID0gcihrZXkpKSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgY29udGFpbmVyRGl2ID0gKCkgPT4ge1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBpbWdEaXYuaWQgPSAnaW1hZ2UtZGl2JztcblxuICBsb2dvLmlkID0gJ2xvZ28nO1xuICBsb2dvLmFsdCA9ICdCYXR0bGVzaGlwIGxvZ28gd2l0aCBtaXNzbGUgYXMgbGV0dGVyIEknO1xuICBsb2dvLnNyYyA9IGNhY2hlWydiYXR0bGVzaGlwLWxvZ28uc3ZnJ107XG4gIFxuICBpbWdEaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuXG5jb25zdCBnYW1lU2V0dXAgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVTZXR1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBnYW1lQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBtYW51YWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICByYW5kb21CdG4uaWQgPSAncmFuZG9tLWJ0bic7XG4gIHJhbmRvbUJ0bi5pbm5lclRleHQgPSAnUmFuZG9tJztcbiAgXG4gIG1hbnVhbEJ0bi5pZCA9ICdtYW51YWwtYnRuJztcbiAgbWFudWFsQnRuLmlubmVyVGV4dCA9ICdNYW51YWwnO1xuXG4gIGdhbWVTZXR1cERpdi5pZCA9ICdnYW1lLXNldHVwJztcblxuICBnYW1lSW5mby5pZCA9ICdnYW1lLWluZm8nO1xuICBnYW1lSW5mby5pbm5lckhUTUwgPSAnPHA+R2FtZXBpZWNlIExheW91dDwvcD4nO1xuXG4gIGdhbWVCdXR0b25EaXYuaWQgPSAnZ2FtZS1idXR0b24nO1xuXG4gIGdhbWVCdXR0b25EaXYuYXBwZW5kQ2hpbGQobWFudWFsQnRuKTtcbiAgZ2FtZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICBcbiAgZ2FtZVNldHVwRGl2LmFwcGVuZENoaWxkKGdhbWVJbmZvKTtcbiAgZ2FtZVNldHVwRGl2LmFwcGVuZENoaWxkKGdhbWVCdXR0b25EaXYpO1xuICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKGdhbWVTZXR1cERpdik7XG59XG5cbmNvbnN0IHNoaXBTZWxlY3RNb2RhbCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcFNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWxlY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VsZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWxlY3RGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgc2hpcFNlbGVjdERpdi5pZCA9ICdzaGlwLXNlbGVjdCc7XG4gIHNlbGVjdEhlYWRlci5pZCA9ICdzZWxlY3QtaGVhZGVyJztcbiAgc2VsZWN0Qm9keS5pZCA9ICdzZWxlY3QtYm9keSc7XG4gIHNlbGVjdEZvb3Rlci5pZCA9ICdzZWxlY3QtZm9vdGVyJztcblxuICBuZXh0QnRuLmlkID0gJ25leHQtYnRuJztcbiAgbmV4dEJ0bi5pbm5lclRleHQgPSAnTkVYVCc7XG4gIHByZXZCdG4uaWQgPSAncHJldi1idG4nO1xuICBwcmV2QnRuLmlubmVyVGV4dCA9ICdQUkVWJztcbiAgc2VsZWN0Rm9vdGVyLmFwcGVuZENoaWxkKHByZXZCdG4pO1xuICBzZWxlY3RGb290ZXIuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG5cbiAgc2VsZWN0SGVhZGVyLmlubmVySFRNTCA9ICc8aDI+UHJlcGFyZSB5b3VyIHNoaXBzIGZvciBiYXR0bGUhPC9oMj4nOyAgXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCB0b2dnbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgdG9nZ2xlRGl2LmNsYXNzTmFtZSA9ICd0b2dnbGUtZGl2JztcbiAgICBpbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBpbnB1dC5pZCA9IGBwb3NpdGlvbiR7aX1gO1xuICAgIGlucHV0Lm5hbWUgPSAncG9zaXRpb24tdG9nZ2xlJztcbiAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQuaWQgPT09ICdwb3NpdGlvbjEnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGxhYmVsLmNsYXNzTmFtZSA9ICd0b2dnbGUtYnRuJztcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwb3NpdGlvbiR7aX1gKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBpbnB1dC5pZCA9PT0gJ3Bvc2l0aW9uMScgPyAnSG9yaXpvbnRhbCcgOiAnVmVydGljYWwnO1xuICAgIFxuICAgIHRvZ2dsZURpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgdG9nZ2xlRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBzZWxlY3RCb2R5LmFwcGVuZENoaWxkKHRvZ2dsZURpdik7XG4gIH1cblxuICBzaGlwU2VsZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdEhlYWRlcik7XG4gIHNoaXBTZWxlY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0Qm9keSk7XG4gIHNoaXBTZWxlY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0Rm9vdGVyKTtcblxuICBib2FyZERpdi5hcHBlbmRDaGlsZChzaGlwU2VsZWN0RGl2KTtcbn1cblxuY29uc3Qgc2hpcEljb25zID0gWydjYXJyaWVyLWdyYXkuc3ZnJywgJ2JhdHRsZXNoaXAtZ3JheS5zdmcnLCAnY3J1aXNlci1ncmF5LnN2ZycsXG4gICdkZXN0cm95ZXItZ3JheS5zdmcnLCAnc3ViLWdyYXkuc3ZnJ107XG5cbmNvbnN0IHNoaXBTdGF0dXNJY29ucyA9IChwbGF5ZXIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuaWQgPSBgJHtwbGF5ZXIuaWQuY2hhckF0KDApfS0ke3NoaXBJY29uc1tpXS5zcGxpdCgnLScpWzBdfWA7XG4gICAgaW1nLnNyYyA9IGNhY2hlW3NoaXBJY29uc1tpXV07XG4gICAgcGxheWVyLmFwcGVuZENoaWxkKGltZyk7XG4gIH1cbn1cblxuY29uc3QgZHJhd0dyaWQgPSAoZ3JpZFR5cGUpID0+IHtcbiAgY29uc3QgY29sTGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sTGFiZWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZURpdi5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICAgIHNxdWFyZURpdi5pZCA9IGAke2dyaWRUeXBlLmlkLmNoYXJBdCgwKX0tJHtjb2xMYWJlbHNbal19LSR7aSArIDF9YDtcbiAgICAgIGdyaWRUeXBlLmFwcGVuZENoaWxkKHNxdWFyZURpdik7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRyYXdTaGlwcyA9IChzaGlwTGlzdCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBvc2l0aW9uTGlzdCA9IHNoaXBMaXN0W2ldLnBvc2l0aW9uO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zaXRpb25MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgY29vcmQgPSBgcC0ke3Bvc2l0aW9uTGlzdFtqXVswXX0tJHtwb3NpdGlvbkxpc3Rbal1bMV19YDtcbiAgICAgIGNvbnN0IGdyaWRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkKTtcbiAgICAgIGdyaWRJZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzg0ODk4Yyc7XG4gICAgICBncmlkSWQuc3R5bGUuYm9yZGVyID0gJzBweCc7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGdhbWVPdmVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBnYW1lT3ZlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBnYW1lT3ZlckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZU92ZXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBxdWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgbGV0IHdpbm5lciA9IG5hbWUgPT09ICdwbGF5ZXIxJyA/ICdQbGF5ZXIgMScgOiAnQ29tcHV0ZXInO1xuICBsZXQgbG9zZXI7XG5cbiAgaWYgKHdpbm5lciA9PT0gJ1BsYXllciAxJykge1xuICAgIGxvc2VyID0gJ0NvbXB1dGVyJztcbiAgfSBlbHNlIGlmKHdpbm5lciA9PT0gJ0NvbXB1dGVyJykge1xuICAgIGxvc2VyID0gJ1BsYXllciAxJztcbiAgfVxuXG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXN0YXJ0R2FtZSgpO1xuICBib2FyZFNldHVwKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBnYW1lTG9vcCgpO1xufSk7XG5cbnF1aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nO1xufSk7XG5cbiAgZ2FtZU92ZXJNb2RhbC5pZCA9ICdnYW1lLW92ZXInO1xuXG4gIGdhbWVPdmVySGVhZGVyLmlubmVySFRNTCA9IGA8aDI+R2FtZSBPdmVyPC8+YDtcbiAgZ2FtZU92ZXJCb2R5LmlubmVySFRNTCA9IGA8cD4ke3dpbm5lcn0ncyBmbGVldCB3YXMgdmljdG9yaW91cyBvdmVyICR7bG9zZXJ9ITwvcD5gO1xuXG4gIHJlc3RhcnRCdG4ubmFtZSA9ICdyZXN0YXJ0JztcbiAgcmVzdGFydEJ0bi5pZCA9ICdyZXN0YXJ0LWJ0bic7XG4gIHJlc3RhcnRCdG4udHlwZSA9ICdidXR0b24nO1xuICByZXN0YXJ0QnRuLmF1dG9mb2N1cyA9IHRydWU7XG4gIHJlc3RhcnRCdG4uaW5uZXJUZXh0ID0gJ1BsYXkgQWdhaW4/JztcblxuICBxdWl0QnRuLm5hbWUgPSAncXVpdCc7XG4gIHF1aXRCdG4uaWQgPSAncXVpdC1idG4nO1xuICBxdWl0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgcXVpdEJ0bi5pbm5lclRleHQgPSAnUXVpdCc7XG5cbiAgXG4gIGdhbWVPdmVyRm9vdGVyLmFwcGVuZENoaWxkKHJlc3RhcnRCdG4pO1xuICBnYW1lT3ZlckZvb3Rlci5hcHBlbmRDaGlsZChxdWl0QnRuKTtcblxuICBnYW1lT3Zlck1vZGFsLmFwcGVuZENoaWxkKGdhbWVPdmVySGVhZGVyKTtcbiAgZ2FtZU92ZXJNb2RhbC5hcHBlbmRDaGlsZChnYW1lT3ZlckJvZHkpO1xuICBnYW1lT3Zlck1vZGFsLmFwcGVuZENoaWxkKGdhbWVPdmVyRm9vdGVyKTtcbiAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChnYW1lT3Zlck1vZGFsKTtcbn1cblxuY29uc3QgYm9hcmRTZXR1cCA9ICgpID0+IHtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllclNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyR3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21wdXRlckdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBib2FyZERpdi5pZCA9ICdib2FyZC1jb250YWluZXInO1xuXG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdCA9ICdib2FyZCc7XG4gIHBsYXllclNoaXBzLmlkID0gJ3BsYXllci1zaGlwcyc7XG4gIHBsYXllckdyaWREaXYuaWQgPSAncGxheWVyLWdyaWQnO1xuXG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0ID0gJ2JvYXJkJztcbiAgY29tcHV0ZXJTaGlwcy5pZCA9ICdjb21wdXRlci1zaGlwcyc7XG4gIGNvbXB1dGVyR3JpZERpdi5pZCA9ICdjb21wdXRlci1ncmlkJztcblxuICBkcmF3R3JpZChwbGF5ZXJHcmlkRGl2LCBwbGF5ZXJHcmlkRGl2LmlkKTtcbiAgZHJhd0dyaWQoY29tcHV0ZXJHcmlkRGl2LCBjb21wdXRlckdyaWREaXYuaWQpO1xuXG4gIHNoaXBTdGF0dXNJY29ucyhwbGF5ZXJTaGlwcyk7XG4gIHNoaXBTdGF0dXNJY29ucyhjb21wdXRlclNoaXBzKTtcblxuICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJTaGlwcyk7XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHBsYXllckdyaWREaXYpO1xuICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNvbXB1dGVyR3JpZERpdik7XG4gIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJTaGlwcyk7XG5cbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICBib2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcbiAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChib2FyZERpdik7XG59XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcbiAgY29udGFpbmVyRGl2KCk7XG4gIGhlYWRlcigpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkRpdik7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlTG9hZCwgZ2FtZVNldHVwLCBib2FyZFNldHVwLCBkcmF3U2hpcHMsIGdhbWVPdmVyLCBzaGlwU2VsZWN0TW9kYWwgfVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBuYW1lID0gJ3BsYXllcjEnO1xuICBjb25zdCBhdHRhY2sgPSAoY29vcmQsIGVuZW15KSA9PiB7XG4gICAgcmV0dXJuIGVuZW15LnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICB9XG4gIHJldHVybiB7YXR0YWNrLCBnYW1lYm9hcmQsIG5hbWV9XG59XG5cblxuY29uc3QgQ29tcHV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtnYW1lYm9hcmR9ID0gUGxheWVyKCk7XG4gIGNvbnN0IG5hbWUgPSAnY29tcHV0ZXInO1xuICBsZXQgbGFzdEhpdCA9IFtdO1xuICBsZXQgc21hcnRTZWxlY3Rpb24gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNvb3JkKCkge1xuICAgIGNvbnN0IGNvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDc0IC0gNjUgKyAxKSArIDY1KSk7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSArIDEpICsgMSk7XG4gICAgcmV0dXJuIFtjb2wsIHJvd10gXG4gIH1cblxuICBmdW5jdGlvbiB2ZXJpZnlDb29yZChjb29yZCwgZW5lbXlDb29yZE1pc3NlZCwgZW5lbXlDb29yZEhpdHMpIHtcbiAgICBsZXQgdG90YWxIaXRzID0gZW5lbXlDb29yZE1pc3NlZC5jb25jYXQoZW5lbXlDb29yZEhpdHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxIaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IHRvdGFsSGl0cztcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudC5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgaXNTdWJzZXQgPSBjb29yZC5ldmVyeSgoZWxlbWVudCkgPT4gY3VycmVudFtqXS5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgICAgIGlmIChpc1N1YnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBpc1N1YnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBzbWFydEF0dGFjaygpIHtcbiAgICBjb25zdCBjb2xVcCA9IChsYXN0SGl0WzBdLmNoYXJDb2RlQXQoMCkgKyAxKTtcbiAgICBjb25zdCBjb2xEb3duID0gKGxhc3RIaXRbMF0uY2hhckNvZGVBdCgwKSAtIDEpO1xuICAgIGNvbnN0IHJvd1VwID0gKGxhc3RIaXRbMV0gKyAxKTtcbiAgICBjb25zdCByb3dEb3duID0gKGxhc3RIaXRbMV0gLSAxKTtcblxuICAgIGlmIChzbWFydFNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChjb2xVcCA8IDc1ICYmIGNvbERvd24gPiA2NCl7XG4gICAgICAgIHNtYXJ0U2VsZWN0aW9uLnB1c2goW1N0cmluZy5mcm9tQ2hhckNvZGUoY29sVXApLCBsYXN0SGl0WzFdXSk7XG4gICAgICAgIHNtYXJ0U2VsZWN0aW9uLnB1c2goW1N0cmluZy5mcm9tQ2hhckNvZGUoY29sRG93biksIGxhc3RIaXRbMV1dKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvd1VwIDwgMTEgJiYgcm93RG93biA+IDApIHtcbiAgICAgICAgc21hcnRTZWxlY3Rpb24ucHVzaChbbGFzdEhpdFswXSwgcm93VXBdKTtcbiAgICAgICAgc21hcnRTZWxlY3Rpb24ucHVzaChbbGFzdEhpdFswXSwgcm93RG93bl0pO1xuICAgICAgfSAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gICAgXG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgZW5lbXlDb29yZE1pc3NlZCwgZW5lbXlDb29yZEhpdHMpID0+IHtcbiAgICBsZXQgY29vcmQ7XG5cbiAgICBpZiAoc21hcnRTZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgY29vcmQgPSBzbWFydFNlbGVjdGlvbltzbWFydFNlbGVjdGlvbi5sZW5ndGggLSAxXTtcblxuICAgICAgd2hpbGUodmVyaWZ5Q29vcmQoY29vcmQsIGVuZW15Q29vcmRNaXNzZWQsIGVuZW15Q29vcmRIaXRzKSkge1xuICAgICAgICBzbWFydFNlbGVjdGlvbi5wb3AoKTtcbiAgICAgICAgY29vcmQgPSBzbWFydFNlbGVjdGlvbltzbWFydFNlbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHNtYXJ0U2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvb3JkID0gZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmQgPSBnZW5lcmF0ZUNvb3JkKCk7XG5cbiAgICAgICAgd2hpbGUodmVyaWZ5Q29vcmQoY29vcmQsIGVuZW15Q29vcmRNaXNzZWQsIGVuZW15Q29vcmRIaXRzKSkge1xuICAgICAgICAgIGNvb3JkID0gZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgXG4gICAgbGV0IGF0dGFjayA9IGVuZW15LnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIGxhc3RIaXQgPSBhdHRhY2sgPT09IHRydWUgPyBjb29yZCA6IFtdO1xuXG4gICAgaWYgKGF0dGFjayA9PT0gdHJ1ZSkgeyBcbiAgICAgIHNtYXJ0QXR0YWNrKCk7XG4gICAgICBsYXN0SGl0ID0gW107XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIFthdHRhY2ssIGNvb3JkXTtcbiAgfVxuICByZXR1cm4ge2F0dGFjaywgdmVyaWZ5Q29vcmQsIGdhbWVib2FyZCwgbmFtZX07XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAoc2l6ZSkgPT4ge1xuICBjb25zdCBsZW5ndGggPSBzaXplO1xuICBsZXQgaGl0Q291bnQgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtoaXRDb3VudCArPSAxO307XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge2xlbmd0aCA9PT0gaGl0Q291bnQgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTt9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRDb3VudDtcbiAgICB9LFxuICAgIGdldCBzdW5rU3RhdHVzKCkge1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfSxcbiAgICBsZW5ndGgsIGhpdCwgaXNTdW5rXG4gIH1cbn1cblxuZXhwb3J0IHtTaGlwfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi9nYW1lcGxheSc7XG5pbXBvcnQgeyBpbml0aWFsUGFnZUxvYWQsIGdhbWVTZXR1cCwgYm9hcmRTZXR1cCB9IGZyb20gJy4vcGFnZWxheW91dCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG5nYW1lU2V0dXAoKTtcbmJvYXJkU2V0dXAoKTtcbnN0YXJ0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==