/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/transaction.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/transaction.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.transaction-component {
  width: 50%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.transaction-component-row,
.transaction-component-header {
  display: flex;
  gap: 10px;
  align-items: center;
}

.transaction-component-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
}

.transaction-component-item-del-icon {
  cursor: pointer;
}
.transaction-component-row {
  padding: 10px;
  cursor: pointer;
  width: 100%;
}
.transaction-component-header-left {
  font-size: 1rem;
  font-weight: 600;
}
.transaction-component-header-mid,
.transaction-component-header-right {
  font-size: 0.875rem;
  color: #8e999e;
}
.transaction-component-row-left {
  width: 50%;
}

.transaction-component-row-left-input {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.transaction-component-row-mid {
  width: 25%;
}

.transaction-component-row-right {
  width: 25%;
}

.transaction-component-main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
}

.transaction-component-footer {
  margin-top: 10px;
}

/* TRANSACTION DIALOG */
.transaction-dialog-cont {
  padding: 10px;
}
.transaction-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.transaction-form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
.transaction-form-item > label {
  width: 150px;
}
.transaction-form-item-input {
  padding: 10px;
  width: 250px;
}
`, "",{"version":3,"sources":["webpack://./styles/transaction.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,uBAAuB;EACvB,aAAa;EACb,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,eAAe;EACf,WAAW;AACb;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;;EAEE,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,uBAAuB;AACvB;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,YAAY;AACd","sourcesContent":[".transaction-component {\r\n  width: 50%;\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.transaction-component-row,\r\n.transaction-component-header {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.transaction-component-item {\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.transaction-component-item-del-icon {\r\n  cursor: pointer;\r\n}\r\n.transaction-component-row {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n.transaction-component-header-left {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n.transaction-component-header-mid,\r\n.transaction-component-header-right {\r\n  font-size: 0.875rem;\r\n  color: #8e999e;\r\n}\r\n.transaction-component-row-left {\r\n  width: 50%;\r\n}\r\n\r\n.transaction-component-row-left-input {\r\n  padding: 10px;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.transaction-component-row-mid {\r\n  width: 25%;\r\n}\r\n\r\n.transaction-component-row-right {\r\n  width: 25%;\r\n}\r\n\r\n.transaction-component-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.transaction-component-footer {\r\n  margin-top: 10px;\r\n}\r\n\r\n/* TRANSACTION DIALOG */\r\n.transaction-dialog-cont {\r\n  padding: 10px;\r\n}\r\n.transaction-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.transaction-form-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 5px;\r\n}\r\n.transaction-form-item > label {\r\n  width: 150px;\r\n}\r\n.transaction-form-item-input {\r\n  padding: 10px;\r\n  width: 250px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./styles/transaction.css":
/*!********************************!*\
  !*** ./styles/transaction.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_transaction_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./transaction.css */ "./node_modules/css-loader/dist/cjs.js!./styles/transaction.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_transaction_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_transaction_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_transaction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_transaction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/FinanceCalculator.ts":
/*!**********************************!*\
  !*** ./src/FinanceCalculator.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FinanceCalculator {
    constructor(financeData) {
        this.financeData = [];
        this.financeData = financeData;
    }
    financeCategoryCalculator(category) {
        let sum = 0;
        this.financeData.forEach((item) => {
            if (item.category === category) {
                sum += parseInt(item.amount);
            }
        });
        return sum;
    }
    totalMonthlySpend() {
        let sum = 0;
        this.financeData.forEach((item) => {
            if (item.category === "Income" || item.category === "Savings")
                return;
            sum += parseInt(item.amount);
        });
        return sum;
    }
    monthlyExcessCalculator() {
        let incomeTotal = 0;
        let totalSpend = 0;
        this.financeData.forEach((item) => {
            if (item.category === "Income") {
                incomeTotal += parseInt(item.amount);
                return;
            }
            if (item.category === "Savings")
                return;
            totalSpend += parseInt(item.amount);
        });
        return incomeTotal - totalSpend;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinanceCalculator);


/***/ }),

/***/ "./src/budget.ts":
/*!***********************!*\
  !*** ./src/budget.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBudget: () => (/* binding */ createBudget),
/* harmony export */   getBudgetFormValues: () => (/* binding */ getBudgetFormValues),
/* harmony export */   resetBudgetForm: () => (/* binding */ resetBudgetForm)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _editBudget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editBudget */ "./src/editBudget.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const dialog = document.getElementById("budget-dialog");
const editBudgetDialog = (document.getElementById("edit-budget-dialog"));
const budgetForm = document.getElementById("budget-form");
const editBudgetForm = (document.getElementById("edit-budget-form"));
const closeDialog = document.getElementById("budget-dialog-close");
const editBudgetDialogClose = document.getElementById("edit-budget-dialog-close");
closeDialog === null || closeDialog === void 0 ? void 0 : closeDialog.addEventListener("click", () => {
    dialog.close();
});
editBudgetDialogClose === null || editBudgetDialogClose === void 0 ? void 0 : editBudgetDialogClose.addEventListener("click", () => {
    editBudgetDialog.close();
});
const createBudget = (budgetData) => {
    const budget = document.createElement("div");
    budget.className = "budget";
    //newDiv?.setAttribute("background-color", "black");
    const heading = document.createElement("h1");
    heading.textContent = "BUDGET HEADING";
    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(budgetData, "Budget");
    const budgetSidebar = document.createElement("div");
    budget.appendChild(calendar);
    budget.appendChild(budgetSidebar);
    return budget;
};
const getBudgetFormValues = () => {
    var _a;
    const category = (document.getElementById("budget-form-category-select")).value;
    const amount = (document.getElementById("budget-form-amount")).value;
    const title = document.getElementById("budget-form-title")
        .value;
    const description = (document.getElementById("budget-form-description")).value;
    const user_id = localStorage.getItem("user_id");
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const unparsedDate = (_a = calendarHeaderDate === null || calendarHeaderDate === void 0 ? void 0 : calendarHeaderDate.dataset.date) === null || _a === void 0 ? void 0 : _a.split(" ");
    const month = parseInt(unparsedDate[0]);
    const year = parseInt(unparsedDate[1]);
    const start_date = new Date();
    start_date.setFullYear(year, month, 1);
    const end_date = new Date();
    end_date.setFullYear(year, month + 1, 0);
    return {
        category,
        amount,
        title,
        description,
        user_id,
        start_date,
        end_date,
    };
};
const resetBudgetForm = () => {
    const amount = ((document.getElementById("budget-form-amount")).value = "");
    const title = ((document.getElementById("budget-form-title")).value = "");
    const description = ((document.getElementById("budget-form-description")).value = "");
};
const submitBudgetForm = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.config.BASE_URL + "createBudget.php", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(getBudgetFormValues()),
        });
        const response = yield request.json();
        if (response.message) {
            resetBudgetForm();
            dialog.close();
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.openBudget)();
        }
    }
    catch (error) {
        console.error(error);
    }
});
const createTransactionRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_2__.config.BASE_URL + "createTransaction.php", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(Object.assign(Object.assign({}, getBudgetFormValues()), { amount: 0 })),
        });
        const response = yield request.json();
        if (response.message) {
            console.log(response.message);
        }
    }
    catch (error) {
        console.error(error);
    }
});
budgetForm === null || budgetForm === void 0 ? void 0 : budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBudgetForm();
    createTransactionRecord();
});
editBudgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const budgetData = Object.assign(Object.assign({}, (0,_editBudget__WEBPACK_IMPORTED_MODULE_3__.getEditBudgetFormValues)()), { created_at: null });
    (0,_editBudget__WEBPACK_IMPORTED_MODULE_3__.updateBudget)(budgetData);
});



/***/ }),

/***/ "./src/budgetComponent.ts":
/*!********************************!*\
  !*** ./src/budgetComponent.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBudgetComponent: () => (/* binding */ createBudgetComponent)
/* harmony export */ });
/* harmony import */ var _editBudget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editBudget */ "./src/editBudget.ts");
/* harmony import */ var _deleteBudget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteBudget */ "./src/deleteBudget.ts");


const dialog = document.getElementById("budget-dialog");
const editBudgetDialog = (document.getElementById("edit-budget-dialog"));
const createBudgetComponent = (title, budgetData) => {
    console.log(budgetData);
    const budgetComponent = document.createElement("div");
    budgetComponent.className = "budget-component";
    const header = document.createElement("header");
    header.className = "budget-header";
    const headerLeft = document.createElement("div");
    headerLeft.textContent = title;
    headerLeft.className = "budget-row-left budget-header-left";
    const headerMid = document.createElement("div");
    headerMid.className = "budget-row-mid budget-header-mid";
    headerMid.textContent = "Planned";
    const headerRight = document.createElement("div");
    headerRight.textContent = "Received";
    headerRight.className = "budget-row-right budget-header-right";
    header.append(headerLeft, headerMid, headerRight);
    const main = document.createElement("div");
    const componentData = budgetData.filter((budgetItem) => budgetItem.category === title);
    componentData.forEach((item) => {
        main.append(row(item));
    });
    main.className = "budget-main";
    const footer = document.createElement("div");
    footer.className = "budget-footer";
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Item";
    addBtn.addEventListener("click", () => {
        const budgetFormSelect = (document.getElementById("budget-form-category-select"));
        budgetFormSelect.value = title;
        dialog.showModal();
    });
    footer.appendChild(addBtn);
    budgetComponent.append(header, main, footer);
    return budgetComponent;
};
const row = (budgetData) => {
    const singleRow = document.createElement("div");
    singleRow.className = "budget-item";
    const deleteIcon = document.createElement("span");
    deleteIcon.textContent = "delete";
    deleteIcon.className = "material-symbols-outlined budget-item-del-icon";
    const rowMain = document.createElement("div");
    rowMain.className = "budget-row";
    const rowLeft = document.createElement("div");
    rowLeft.className = "budget-row-left budget-row-left-input";
    rowLeft.textContent = budgetData.title;
    const rowMid = document.createElement("div");
    rowMid.className = "budget-row-mid";
    rowMid.textContent = `KShs. ${budgetData.amount}`;
    const rowRight = document.createElement("div");
    rowRight.className = "budget-row-right";
    rowRight.textContent = "KShs. 0.00";
    rowMain.append(rowLeft, rowMid, rowRight);
    rowMain.addEventListener("click", () => {
        (0,_editBudget__WEBPACK_IMPORTED_MODULE_0__.populateBudgetForm)(budgetData);
        editBudgetDialog.show();
    });
    deleteIcon.addEventListener("click", () => {
        (0,_deleteBudget__WEBPACK_IMPORTED_MODULE_1__.deleteBudget)(budgetData.budget_id);
    });
    singleRow.append(deleteIcon, rowMain);
    return singleRow;
};



/***/ }),

/***/ "./src/calendar.ts":
/*!*************************!*\
  !*** ./src/calendar.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCalendar: () => (/* binding */ createCalendar)
/* harmony export */ });
/* harmony import */ var _budgetComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetComponent */ "./src/budgetComponent.ts");
/* harmony import */ var _calendarSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarSidebar */ "./src/calendarSidebar.ts");
/* harmony import */ var _transactionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactionComponent */ "./src/transactionComponent.ts");



const createCalendar = (financialData, parent) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendar = document.createElement("div");
    calendar.className = "cal";
    const calBody = document.createElement("div");
    const calHeader = calendarHeader(calBody, date, year, month, financialData, parent);
    calBody.id = "cal-body-cont";
    renderCalendarBody(calBody, date, year, month, financialData, parent);
    calendar.append(calHeader, calBody);
    return calendar;
};
const renderCalendarDate = (calendarHeaderDate, date, year, month) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    calendarHeaderDate.textContent = `${monthNames[month]} ${year}`;
    calendarHeaderDate.dataset.date = `${month} ${year}`;
};
const calendarHeader = (calBody, date, year, month, financialData, parent) => {
    const calendarHeader = document.createElement("div");
    calendarHeader.className = "cal-header";
    const calendarHeaderDate = document.createElement("div");
    calendarHeaderDate.className = "cal-curr-date";
    calendarHeaderDate.id = "cal-curr-date";
    renderCalendarDate(calendarHeaderDate, date, year, month);
    const calendarNavigation = document.createElement("div");
    const calendarPrev = document.createElement("span");
    calendarPrev.textContent = "chevron_left";
    calendarPrev.className = "material-symbols-outlined cal-chevron-btn";
    calendarPrev.id = "cal-chevron-prev";
    const calendarNext = document.createElement("span");
    calendarNext.textContent = "chevron_right";
    calendarNext.className = "material-symbols-outlined cal-chevron-btn";
    calendarNext.id = "cal-chevron-next";
    calendarNavigation.append(calendarPrev, calendarNext);
    calendarHeader.append(calendarHeaderDate, calendarNavigation);
    const chevrons = [calendarNext, calendarPrev];
    renderCalendarDate(calendarHeaderDate, date, year, month);
    chevrons.forEach((chevron) => {
        chevron.addEventListener("click", () => {
            month = chevron.id === "cal-chevron-prev" ? month - 1 : month + 1;
            if (month < 0 || month > 11) {
                // Set the date to the first day of the
                // month with the new year
                date = new Date(year, month, new Date().getDate());
                // Set the year to the new year
                year = date.getFullYear();
                // Set the month to the new month
                month = date.getMonth();
            }
            else {
                date = new Date();
            }
            renderCalendarDate(calendarHeaderDate, date, year, month);
            renderCalendarBody(calBody, date, year, month, financialData, parent);
        });
    });
    return calendarHeader;
};
const renderCalendarBody = (calBody, date, year, month, financialData, parent) => {
    calBody.replaceChildren();
    calBody.appendChild(calendarBody(date, year, month, financialData, parent));
};
const calendarBody = (date, year, month, financialData, parent) => {
    const calendarBody = document.createElement("div");
    calendarBody.className = "cal-body";
    const start_date = new Date();
    start_date.setFullYear(year, month, 1);
    const end_date = new Date();
    end_date.setFullYear(year, month + 1, 0);
    const monthlyData = financialData.filter((item) => {
        const itemStart = new Date(item.start_date).toISOString().split("T")[0];
        const itemEnd = new Date(item.end_date).toISOString().split("T")[0];
        const currentStart = new Date(start_date).toISOString().split("T")[0];
        const currentEnd = new Date(end_date).toISOString().split("T")[0];
        return itemStart >= currentStart && itemEnd <= currentEnd;
    });
    const calendarBodyLeft = document.createElement("div");
    calendarBodyLeft.className = "cal-body-left";
    const calendarBodyRight = document.createElement("div");
    calendarBodyRight.className = "cal-body-right";
    let calSidebar = null;
    if (parent === "Budget") {
        calSidebar = (0,_calendarSidebar__WEBPACK_IMPORTED_MODULE_1__.calendarSidebar)(monthlyData);
        calendarBodyLeft.append((0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Income", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Bills", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Personal", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Savings", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Other", monthlyData));
    }
    else {
        calSidebar = (0,_calendarSidebar__WEBPACK_IMPORTED_MODULE_1__.calendarSidebar)(monthlyData);
        calendarBodyLeft.append((0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Income", monthlyData), (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Bills", monthlyData), (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Personal", monthlyData), (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Savings", monthlyData), (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Other", monthlyData));
    }
    calendarBodyRight.append(calSidebar);
    calendarBody.append(calendarBodyLeft, calendarBodyRight);
    return calendarBody;
};



/***/ }),

/***/ "./src/calendarSidebar.ts":
/*!********************************!*\
  !*** ./src/calendarSidebar.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calendarSidebar: () => (/* binding */ calendarSidebar)
/* harmony export */ });
/* harmony import */ var _FinanceCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FinanceCalculator */ "./src/FinanceCalculator.ts");

const calendarSidebar = (financialData) => {
    const sidebar = document.createElement("div");
    sidebar.className = "cal-sidebar";
    sidebar.append(sidebarTop(financialData), sidebarBottom(financialData));
    return sidebar;
};
const sidebarTop = (financialData) => {
    const financeCalculator = new _FinanceCalculator__WEBPACK_IMPORTED_MODULE_0__["default"](financialData);
    const section = document.createElement("div");
    const sectionHeader = document.createElement("h2");
    sectionHeader.textContent = "Monthly Breakdown";
    const body = document.createElement("div");
    const incomeSection = document.createElement("div");
    const income = financeCalculator
        .financeCategoryCalculator("Income")
        .toString();
    incomeSection.textContent = `Income this month: ${income}`;
    const totalSpendSection = document.createElement("div");
    const totalSpend = financeCalculator.totalMonthlySpend();
    console.log(JSON.parse(JSON.stringify(financialData)));
    console.log(totalSpend);
    totalSpendSection.textContent = `Total spend this month: ${totalSpend}`;
    const savingSection = document.createElement("div");
    const netIncome = financeCalculator.monthlyExcessCalculator().toString();
    savingSection.textContent = `Leftover: ${netIncome}`;
    body.append(incomeSection, totalSpendSection, savingSection);
    section.append(sectionHeader, body);
    return section;
};
const sidebarBottom = (financialData) => {
    const section = document.createElement("div");
    return section;
};



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
    BASE_URL: "http://localhost:8080/financial-management/php/",
};



/***/ }),

/***/ "./src/deleteBudget.ts":
/*!*****************************!*\
  !*** ./src/deleteBudget.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteBudget: () => (/* binding */ deleteBudget)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const deleteBudget = (budget_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield fetch(`http://localhost:8080/financial-management/php/deleteBudget.php?budget_id=${budget_id}`, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });
        const response = yield request.json();
        if (response.message) {
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.openBudget)();
        }
    }
    catch (error) {
        console.error(error);
    }
});



/***/ }),

/***/ "./src/editBudget.ts":
/*!***************************!*\
  !*** ./src/editBudget.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditBudgetFormValues: () => (/* binding */ getEditBudgetFormValues),
/* harmony export */   populateBudgetForm: () => (/* binding */ populateBudgetForm),
/* harmony export */   updateBudget: () => (/* binding */ updateBudget)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const editBudgetDialog = (document.getElementById("edit-budget-dialog"));
const populateBudgetForm = (budgetData) => {
    const category = (document.getElementById("edit-budget-form-category-select"));
    category.value = budgetData.category;
    const amount = (document.getElementById("edit-budget-form-amount"));
    amount.value = budgetData.amount.toString();
    const title = (document.getElementById("edit-budget-form-title"));
    title.value = budgetData.title;
    const description = (document.getElementById("edit-budget-form-description"));
    description.value = budgetData.description;
    const startDate = (document.getElementById("edit-budget-form-start-date"));
    startDate.value = budgetData.start_date.toString();
    const endDate = (document.getElementById("edit-budget-form-end-date"));
    endDate.value = budgetData.end_date.toString();
    const budgetId = (document.getElementById("edit-budget-form-budget-id"));
    budgetId.value = budgetData.budget_id.toString();
};
const getEditBudgetFormValues = () => {
    var _a;
    const category = (document.getElementById("edit-budget-form-category-select")).value;
    const amount = (document.getElementById("edit-budget-form-amount")).value;
    const title = (document.getElementById("edit-budget-form-title")).value;
    const description = (document.getElementById("edit-budget-form-description")).value;
    const budget_id = (document.getElementById("edit-budget-form-budget-id")).value;
    const user_id = localStorage.getItem("user_id").toString();
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const unparsedDate = (_a = calendarHeaderDate === null || calendarHeaderDate === void 0 ? void 0 : calendarHeaderDate.dataset.date) === null || _a === void 0 ? void 0 : _a.split(" ");
    const month = parseInt(unparsedDate[0]);
    const year = parseInt(unparsedDate[1]);
    const start_date_obj = new Date();
    start_date_obj.setFullYear(year, month, 1);
    const end_date_obj = new Date();
    end_date_obj.setFullYear(year, month + 1, 0);
    const start_date = start_date_obj.toISOString().split("T")[0];
    const end_date = end_date_obj.toISOString().split("T")[0];
    return {
        category,
        amount,
        title,
        description,
        user_id,
        start_date,
        end_date,
        budget_id,
    };
};
const updateBudget = (budgetData) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(budgetData);
    try {
        const request = yield fetch("http://localhost:8080/financial-management/php/updateBudget.php", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(budgetData),
        });
        const response = yield request.json();
        console.log(response);
        if (response.message) {
            editBudgetDialog.close();
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.openBudget)();
        }
    }
    catch (error) {
        console.error(error);
    }
});



/***/ }),

/***/ "./src/home.ts":
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHome: () => (/* binding */ createHome)
/* harmony export */ });
const createHome = () => {
    const homeDiv = document.createElement("div");
    const header = createHeader();
    homeDiv.appendChild(header);
    return homeDiv;
};
const createHeader = () => {
    const header = document.createElement("div");
    // create and populate left and right portions of the header
    const headerLeft = document.createElement("span");
    const headerRight = document.createElement("span");
    headerLeft.textContent = "Welcome ";
    headerRight.textContent = "Jack!";
    headerLeft.className = "home-header";
    headerRight.className = "home-header home-header-right";
    header.append(headerLeft, headerRight);
    // Create a div for tag line below welcome message
    const homeTagLine = document.createElement("div");
    homeTagLine.textContent =
        "Ready to take control of your finances? Let's get started.";
    header.appendChild(homeTagLine);
    return header;
};



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openBudget: () => (/* binding */ openBudget),
/* harmony export */   openTransaction: () => (/* binding */ openTransaction)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.ts");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction */ "./src/transaction.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const container = document.getElementById("container");
const homeBtn = document.getElementById("home-btn");
const budgetBtn = document.getElementById("budget-btn");
const mainNavCont = document.getElementById("main-nav");
const transactionBtn = document.getElementById("transaction-btn");
mainNavCont === null || mainNavCont === void 0 ? void 0 : mainNavCont.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar);
const fetchBudgetData = () => __awaiter(void 0, void 0, void 0, function* () {
    const userId = localStorage.getItem("user_id");
    try {
        const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_4__.config.BASE_URL + `fetchBudget.php?user_id=${userId}`, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });
        const response = yield request.json();
        if (response.budgets) {
            return response.budgets;
        }
    }
    catch (error) {
        console.error(error);
    }
});
const fetchTransactionData = () => __awaiter(void 0, void 0, void 0, function* () {
    const userId = localStorage.getItem("user_id");
    try {
        const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_4__.config.BASE_URL + `fetchTransactions.php?user_id=${userId}`, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });
        const response = yield request.json();
        if (response.transactions) {
            return response.transactions;
        }
    }
    catch (error) {
        console.error(error);
    }
});
const openHome = () => {
    const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(home);
};
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", (e) => {
    openHome();
});
const openBudget = () => __awaiter(void 0, void 0, void 0, function* () {
    const budgetData = yield fetchBudgetData();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    const budget = (0,_budget__WEBPACK_IMPORTED_MODULE_1__.createBudget)(budgetData);
    container === null || container === void 0 ? void 0 : container.appendChild(budget);
});
budgetBtn === null || budgetBtn === void 0 ? void 0 : budgetBtn.addEventListener("click", (e) => {
    openBudget();
});
const openTransaction = () => __awaiter(void 0, void 0, void 0, function* () {
    const transactionData = yield fetchTransactionData();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    const transaction = (0,_transaction__WEBPACK_IMPORTED_MODULE_3__.createTransaction)(transactionData);
    container === null || container === void 0 ? void 0 : container.appendChild(transaction);
});
transactionBtn === null || transactionBtn === void 0 ? void 0 : transactionBtn.addEventListener("click", () => {
    openTransaction();
});
openHome();



/***/ }),

/***/ "./src/navbar.ts":
/*!***********************!*\
  !*** ./src/navbar.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navbar: () => (/* binding */ navbar)
/* harmony export */ });
const navbar = document.createElement("div");
const navbarLeft = document.createElement("img");
navbarLeft.src = "../public/assets/bwlogo.png";
navbarLeft.className = "navbar-left";
const navbarMid = document.createElement("div");
const navbarRight = document.createElement("div");
navbar.append(navbarLeft, navbarMid, navbarRight);



/***/ }),

/***/ "./src/transaction.ts":
/*!****************************!*\
  !*** ./src/transaction.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTransaction: () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _styles_transaction_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/transaction.css */ "./styles/transaction.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const transactionDialog = (document.getElementById("transaction-dialog"));
const transactionForm = document.getElementById("transaction-form");
const editTransactionDialog = (document.getElementById("edit-transaction-dialog"));
const closeTransactionDialog = document.getElementById("transaction-dialog-close");
const clostEditTransactionDialog = document.getElementById("edit-transaction-dialog-close");
closeTransactionDialog === null || closeTransactionDialog === void 0 ? void 0 : closeTransactionDialog.addEventListener("click", () => {
    transactionDialog.close();
});
const createTransaction = (transactionData) => {
    const transaction = document.createElement("div");
    transaction.className = "transaction";
    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(transactionData, "Transaction");
    transaction.appendChild(calendar);
    return transaction;
};
const getTransactionFormValues = () => {
    var _a;
    const category = (document.getElementById("transaction-form-category-select")).value;
    const amount = (document.getElementById("transaction-form-amount")).value;
    const title = (document.getElementById("transaction-form-title")).value;
    const description = (document.getElementById("transaction-form-description")).value;
    const user_id = localStorage.getItem("user_id");
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const unparsedDate = (_a = calendarHeaderDate === null || calendarHeaderDate === void 0 ? void 0 : calendarHeaderDate.dataset.date) === null || _a === void 0 ? void 0 : _a.split(" ");
    const month = parseInt(unparsedDate[0]);
    const year = parseInt(unparsedDate[1]);
    const start_date = new Date();
    start_date.setFullYear(year, month, 1);
    const end_date = new Date();
    end_date.setFullYear(year, month + 1, 0);
    return {
        category,
        amount,
        title,
        description,
        user_id,
        start_date,
        end_date,
    };
};
const resetTransactionForm = () => {
    const amount = ((document.getElementById("transaction-form-amount")).value = "");
    const title = ((document.getElementById("transaction-form-title")).value = "");
    const description = ((document.getElementById("transaction-form-description")).value = "");
};
const submitTransactionForm = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_1__.config.BASE_URL + "createTransaction.php", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(getTransactionFormValues()),
        });
        const response = yield request.json();
        if (response.message) {
            resetTransactionForm();
            transactionDialog.close();
            (0,_index__WEBPACK_IMPORTED_MODULE_2__.openTransaction)();
        }
    }
    catch (error) {
        console.error(error);
    }
});
transactionForm === null || transactionForm === void 0 ? void 0 : transactionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitTransactionForm();
});



/***/ }),

/***/ "./src/transactionComponent.ts":
/*!*************************************!*\
  !*** ./src/transactionComponent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTransactionComponent: () => (/* binding */ createTransactionComponent)
/* harmony export */ });
const transactionDialog = (document.getElementById("transaction-dialog"));
const createTransactionComponent = (title, transactionData) => {
    const transactionComponent = document.createElement("div");
    transactionComponent.className = "transaction-component";
    const header = document.createElement("header");
    header.className = "transaction-component-header";
    const headerLeft = document.createElement("div");
    headerLeft.textContent = title;
    headerLeft.className =
        "transaction-component-row-left transaction-component-header-left";
    const headerRight = document.createElement("div");
    headerRight.textContent = "Amount";
    headerRight.className =
        "transaction-component-row-right transaction-component-header-right";
    header.append(headerLeft, headerRight);
    const main = document.createElement("div");
    const componentData = transactionData.filter((budgetItem) => budgetItem.category === title);
    componentData.forEach((item) => {
        main.appendChild(row(item));
    });
    main.className = "transaction-component-main";
    const footer = document.createElement("div");
    footer.className = "transaction-component-footer";
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Item";
    addBtn.addEventListener("click", () => {
        const transactionFormSelect = (document.getElementById("transaction-form-category-select"));
        transactionFormSelect.value = title;
        transactionDialog === null || transactionDialog === void 0 ? void 0 : transactionDialog.show();
    });
    footer.appendChild(addBtn);
    transactionComponent.append(header, main, footer);
    return transactionComponent;
};
const row = (transactionData) => {
    const singleRow = document.createElement("div");
    singleRow.className = "transaction-component-item";
    const deleteIcon = document.createElement("span");
    deleteIcon.textContent = "delete";
    deleteIcon.className =
        "material-symbols-outlined transaction-component-item-del-icon";
    const rowMain = document.createElement("div");
    rowMain.className = "transaction-component-row";
    const rowLeft = document.createElement("div");
    rowLeft.className =
        "transaction-component-row-left transaction-component-row-left-input";
    rowLeft.textContent = transactionData.title;
    const rowRight = document.createElement("div");
    rowRight.className = "budget-row-right";
    rowRight.textContent = `KShs. ${transactionData.amount}`;
    rowMain.append(deleteIcon, rowLeft, rowRight);
    singleRow.append(rowMain);
    return singleRow;
};



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RyYW5zYWN0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy90cmFuc2FjdGlvbi5jc3M/MGUwNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9GaW5hbmNlQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9idWRnZXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhclNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVsZXRlQnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0QnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2YmFyLnRzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNhY3Rpb25Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudHJhbnNhY3Rpb24tY29tcG9uZW50IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdyxcclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbS1kZWwtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1sZWZ0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1taWQsXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyLXJpZ2h0IHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjOGU5OTllO1xyXG59XHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1taWQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LXJpZ2h0IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gRElBTE9HICovXHJcbi50cmFuc2FjdGlvbi1kaWFsb2ctY29udCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybS1pdGVtID4gbGFiZWwge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybS1pdGVtLWlucHV0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy90cmFuc2FjdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50cmFuc2FjdGlvbi1jb21wb25lbnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3csXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbS1kZWwtaWNvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbGVmdCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1taWQsXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItcmlnaHQge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGNvbG9yOiAjOGU5OTllO1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQtaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LW1pZCB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1yaWdodCB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRSQU5TQUNUSU9OIERJQUxPRyAqL1xcclxcbi50cmFuc2FjdGlvbi1kaWFsb2ctY29udCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSA+IGxhYmVsIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbS1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90cmFuc2FjdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90cmFuc2FjdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5jbGFzcyBGaW5hbmNlQ2FsY3VsYXRvciB7XHJcbiAgZmluYW5jZURhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmaW5hbmNlRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdKSB7XHJcbiAgICB0aGlzLmZpbmFuY2VEYXRhID0gZmluYW5jZURhdGE7XHJcbiAgfVxyXG5cclxuICBmaW5hbmNlQ2F0ZWdvcnlDYWxjdWxhdG9yKGNhdGVnb3J5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgdGhpcy5maW5hbmNlRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgIHN1bSArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdW07XHJcbiAgfVxyXG5cclxuICB0b3RhbE1vbnRobHlTcGVuZCgpOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgdGhpcy5maW5hbmNlRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIkluY29tZVwiIHx8IGl0ZW0uY2F0ZWdvcnkgPT09IFwiU2F2aW5nc1wiKSByZXR1cm47XHJcbiAgICAgIHN1bSArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3VtO1xyXG4gIH1cclxuXHJcbiAgbW9udGhseUV4Y2Vzc0NhbGN1bGF0b3IoKTogbnVtYmVyIHtcclxuICAgIGxldCBpbmNvbWVUb3RhbCA9IDA7XHJcbiAgICBsZXQgdG90YWxTcGVuZCA9IDA7XHJcblxyXG4gICAgdGhpcy5maW5hbmNlRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIkluY29tZVwiKSB7XHJcbiAgICAgICAgaW5jb21lVG90YWwgKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJTYXZpbmdzXCIpIHJldHVybjtcclxuICAgICAgdG90YWxTcGVuZCArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5jb21lVG90YWwgLSB0b3RhbFNwZW5kO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmluYW5jZUNhbGN1bGF0b3I7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZUJ1ZGdldCxcclxuICBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcyxcclxuICBwb3B1bGF0ZUJ1ZGdldEZvcm0sXHJcbn0gZnJvbSBcIi4vZWRpdEJ1ZGdldFwiO1xyXG5cclxuY29uc3QgZGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWRpYWxvZ1wiKTtcclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuY29uc3QgYnVkZ2V0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm1cIik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtXCIpXHJcbik7XHJcbmNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nLWNsb3NlXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImVkaXQtYnVkZ2V0LWRpYWxvZy1jbG9zZVwiXHJcbik7XHJcblxyXG5jbG9zZURpYWxvZz8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuZWRpdEJ1ZGdldERpYWxvZ0Nsb3NlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVkaXRCdWRnZXREaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlQnVkZ2V0ID0gKGJ1ZGdldERhdGE6IEJ1ZGdldFtdKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0XCI7XHJcbiAgLy9uZXdEaXY/LnNldEF0dHJpYnV0ZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJVREdFVCBIRUFESU5HXCI7XHJcbiAgY29uc3QgY2FsZW5kYXIgPSBjcmVhdGVDYWxlbmRhcihidWRnZXREYXRhLCBcIkJ1ZGdldFwiKTtcclxuICBjb25zdCBidWRnZXRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXQuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xyXG4gIGJ1ZGdldC5hcHBlbmRDaGlsZChidWRnZXRTaWRlYmFyKTtcclxuICByZXR1cm4gYnVkZ2V0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnVkZ2V0Rm9ybVZhbHVlcyA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tdGl0bGVcIikpXHJcbiAgICAudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB1bnBhcnNlZERhdGU6IHN0cmluZ1tdID0gY2FsZW5kYXJIZWFkZXJEYXRlPy5kYXRhc2V0LmRhdGU/LnNwbGl0KFwiIFwiKSE7XHJcbiAgY29uc3QgbW9udGggPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMF0pO1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMV0pO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGVuZF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBlbmRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICB9O1xyXG59O1xyXG5jb25zdCByZXNldEJ1ZGdldEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYW1vdW50ID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbiAgY29uc3QgdGl0bGUgPSAoKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZSA9IFwiXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxufTtcclxuY29uc3Qgc3VibWl0QnVkZ2V0Rm9ybSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGNvbmZpZy5CQVNFX1VSTCArIFwiY3JlYXRlQnVkZ2V0LnBocFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2V0QnVkZ2V0Rm9ybVZhbHVlcygpKSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICByZXNldEJ1ZGdldEZvcm0oKTtcclxuICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlVHJhbnNhY3Rpb25SZWNvcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChjb25maWcuQkFTRV9VUkwgKyBcImNyZWF0ZVRyYW5zYWN0aW9uLnBocFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5nZXRCdWRnZXRGb3JtVmFsdWVzKCksIGFtb3VudDogMCB9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuYnVkZ2V0Rm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzdWJtaXRCdWRnZXRGb3JtKCk7XHJcbiAgY3JlYXRlVHJhbnNhY3Rpb25SZWNvcmQoKTtcclxufSk7XHJcblxyXG5lZGl0QnVkZ2V0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBidWRnZXREYXRhID0geyAuLi5nZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcygpLCBjcmVhdGVkX2F0OiBudWxsIH07XHJcbiAgdXBkYXRlQnVkZ2V0KGJ1ZGdldERhdGEpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUJ1ZGdldCwgcmVzZXRCdWRnZXRGb3JtLCBnZXRCdWRnZXRGb3JtVmFsdWVzIH07XHJcbiIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlQnVkZ2V0LFxyXG4gIGdldEVkaXRCdWRnZXRGb3JtVmFsdWVzLFxyXG4gIHBvcHVsYXRlQnVkZ2V0Rm9ybSxcclxufSBmcm9tIFwiLi9lZGl0QnVkZ2V0XCI7XHJcbmltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBkZWxldGVCdWRnZXQgfSBmcm9tIFwiLi9kZWxldGVCdWRnZXRcIjtcclxuXHJcbmNvbnN0IGRpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1kaWFsb2dcIik7XHJcbmNvbnN0IGVkaXRCdWRnZXREaWFsb2cgPSA8SFRNTERpYWxvZ0VsZW1lbnQ+KFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZGlhbG9nXCIpXHJcbik7XHJcblxyXG5jb25zdCBjcmVhdGVCdWRnZXRDb21wb25lbnQgPSAodGl0bGU6IHN0cmluZywgYnVkZ2V0RGF0YTogQnVkZ2V0W10pID0+IHtcclxuICBjb25zb2xlLmxvZyhidWRnZXREYXRhKTtcclxuICBjb25zdCBidWRnZXRDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1ZGdldENvbXBvbmVudC5jbGFzc05hbWUgPSBcImJ1ZGdldC1jb21wb25lbnRcIjtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImJ1ZGdldC1oZWFkZXJcIjtcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJMZWZ0LnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgaGVhZGVyTGVmdC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbGVmdCBidWRnZXQtaGVhZGVyLWxlZnRcIjtcclxuICBjb25zdCBoZWFkZXJNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlck1pZC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbWlkIGJ1ZGdldC1oZWFkZXItbWlkXCI7XHJcbiAgaGVhZGVyTWlkLnRleHRDb250ZW50ID0gXCJQbGFubmVkXCI7XHJcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlclJpZ2h0LnRleHRDb250ZW50ID0gXCJSZWNlaXZlZFwiO1xyXG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1yaWdodCBidWRnZXQtaGVhZGVyLXJpZ2h0XCI7XHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJNaWQsIGhlYWRlclJpZ2h0KTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb21wb25lbnREYXRhID0gYnVkZ2V0RGF0YS5maWx0ZXIoXHJcbiAgICAoYnVkZ2V0SXRlbSkgPT4gYnVkZ2V0SXRlbS5jYXRlZ29yeSA9PT0gdGl0bGVcclxuICApO1xyXG4gIGNvbXBvbmVudERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmQocm93KGl0ZW0pKTtcclxuICB9KTtcclxuXHJcbiAgbWFpbi5jbGFzc05hbWUgPSBcImJ1ZGdldC1tYWluXCI7XHJcblxyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWZvb3RlclwiO1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgSXRlbVwiO1xyXG5cclxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGJ1ZGdldEZvcm1TZWxlY3QgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICAgKTtcclxuICAgIGJ1ZGdldEZvcm1TZWxlY3QudmFsdWUgPSB0aXRsZTtcclxuICAgIGRpYWxvZyEuc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gIGJ1ZGdldENvbXBvbmVudC5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpO1xyXG5cclxuICByZXR1cm4gYnVkZ2V0Q29tcG9uZW50O1xyXG59O1xyXG5cclxuY29uc3Qgcm93ID0gKGJ1ZGdldERhdGE6IEJ1ZGdldCkgPT4ge1xyXG4gIGNvbnN0IHNpbmdsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2luZ2xlUm93LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWl0ZW1cIjtcclxuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XHJcbiAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYnVkZ2V0LWl0ZW0tZGVsLWljb25cIjtcclxuICBjb25zdCByb3dNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dNYWluLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvd1wiO1xyXG4gIGNvbnN0IHJvd0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd0xlZnQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LWxlZnQgYnVkZ2V0LXJvdy1sZWZ0LWlucHV0XCI7XHJcbiAgcm93TGVmdC50ZXh0Q29udGVudCA9IGJ1ZGdldERhdGEudGl0bGU7XHJcbiAgY29uc3Qgcm93TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dNaWQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LW1pZFwiO1xyXG4gIHJvd01pZC50ZXh0Q29udGVudCA9IGBLU2hzLiAke2J1ZGdldERhdGEuYW1vdW50fWA7XHJcbiAgY29uc3Qgcm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd1JpZ2h0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1yaWdodFwiO1xyXG4gIHJvd1JpZ2h0LnRleHRDb250ZW50ID0gXCJLU2hzLiAwLjAwXCI7XHJcblxyXG4gIHJvd01haW4uYXBwZW5kKHJvd0xlZnQsIHJvd01pZCwgcm93UmlnaHQpO1xyXG5cclxuICByb3dNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwb3B1bGF0ZUJ1ZGdldEZvcm0oYnVkZ2V0RGF0YSk7XHJcbiAgICBlZGl0QnVkZ2V0RGlhbG9nLnNob3coKTtcclxuICB9KTtcclxuICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkZWxldGVCdWRnZXQoYnVkZ2V0RGF0YS5idWRnZXRfaWQpO1xyXG4gIH0pO1xyXG5cclxuICBzaW5nbGVSb3cuYXBwZW5kKGRlbGV0ZUljb24sIHJvd01haW4pO1xyXG5cclxuICByZXR1cm4gc2luZ2xlUm93O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQnVkZ2V0Q29tcG9uZW50IH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCB9IGZyb20gXCIuL2J1ZGdldENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCdWRnZXQsIGlzQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIGlzVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmltcG9ydCB7IGNhbGVuZGFyU2lkZWJhciB9IGZyb20gXCIuL2NhbGVuZGFyU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL3RyYW5zYWN0aW9uQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBjcmVhdGVDYWxlbmRhciA9IChcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyLmNsYXNzTmFtZSA9IFwiY2FsXCI7XHJcbiAgY29uc3QgY2FsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2FsSGVhZGVyID0gY2FsZW5kYXJIZWFkZXIoXHJcbiAgICBjYWxCb2R5LFxyXG4gICAgZGF0ZSxcclxuICAgIHllYXIsXHJcbiAgICBtb250aCxcclxuICAgIGZpbmFuY2lhbERhdGEsXHJcbiAgICBwYXJlbnRcclxuICApO1xyXG4gIGNhbEJvZHkuaWQgPSBcImNhbC1ib2R5LWNvbnRcIjtcclxuICByZW5kZXJDYWxlbmRhckJvZHkoY2FsQm9keSwgZGF0ZSwgeWVhciwgbW9udGgsIGZpbmFuY2lhbERhdGEsIHBhcmVudCk7XHJcbiAgY2FsZW5kYXIuYXBwZW5kKGNhbEhlYWRlciwgY2FsQm9keSk7XHJcblxyXG4gIHJldHVybiBjYWxlbmRhcjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyRGF0ZSA9IChcclxuICBjYWxlbmRhckhlYWRlckRhdGU6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXJcclxuKSA9PiB7XHJcbiAgY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICAgIFwiSmFudWFyeVwiLFxyXG4gICAgXCJGZWJydWFyeVwiLFxyXG4gICAgXCJNYXJjaFwiLFxyXG4gICAgXCJBcHJpbFwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuZVwiLFxyXG4gICAgXCJKdWx5XCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJTZXB0ZW1iZXJcIixcclxuICAgIFwiT2N0b2JlclwiLFxyXG4gICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJEZWNlbWJlclwiLFxyXG4gIF07XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhOYW1lc1ttb250aF19ICR7eWVhcn1gO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5kYXRhc2V0LmRhdGUgPSBgJHttb250aH0gJHt5ZWFyfWA7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckhlYWRlciA9IChcclxuICBjYWxCb2R5OiBIVE1MRGl2RWxlbWVudCxcclxuICBkYXRlOiBEYXRlLFxyXG4gIHllYXI6IG51bWJlcixcclxuICBtb250aDogbnVtYmVyLFxyXG4gIGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSxcclxuICBwYXJlbnQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICBjb25zdCBjYWxlbmRhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJIZWFkZXIuY2xhc3NOYW1lID0gXCJjYWwtaGVhZGVyXCI7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLmNsYXNzTmFtZSA9IFwiY2FsLWN1cnItZGF0ZVwiO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5pZCA9IFwiY2FsLWN1cnItZGF0ZVwiO1xyXG4gIHJlbmRlckNhbGVuZGFyRGF0ZShjYWxlbmRhckhlYWRlckRhdGUsIGRhdGUsIHllYXIsIG1vbnRoKTtcclxuICBjb25zdCBjYWxlbmRhck5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNhbGVuZGFyUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNhbGVuZGFyUHJldi50ZXh0Q29udGVudCA9IFwiY2hldnJvbl9sZWZ0XCI7XHJcbiAgY2FsZW5kYXJQcmV2LmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBjYWwtY2hldnJvbi1idG5cIjtcclxuICBjYWxlbmRhclByZXYuaWQgPSBcImNhbC1jaGV2cm9uLXByZXZcIjtcclxuICBjb25zdCBjYWxlbmRhck5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjYWxlbmRhck5leHQudGV4dENvbnRlbnQgPSBcImNoZXZyb25fcmlnaHRcIjtcclxuICBjYWxlbmRhck5leHQuY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGNhbC1jaGV2cm9uLWJ0blwiO1xyXG4gIGNhbGVuZGFyTmV4dC5pZCA9IFwiY2FsLWNoZXZyb24tbmV4dFwiO1xyXG4gIGNhbGVuZGFyTmF2aWdhdGlvbi5hcHBlbmQoY2FsZW5kYXJQcmV2LCBjYWxlbmRhck5leHQpO1xyXG4gIGNhbGVuZGFySGVhZGVyLmFwcGVuZChjYWxlbmRhckhlYWRlckRhdGUsIGNhbGVuZGFyTmF2aWdhdGlvbik7XHJcblxyXG4gIGNvbnN0IGNoZXZyb25zID0gW2NhbGVuZGFyTmV4dCwgY2FsZW5kYXJQcmV2XTtcclxuXHJcbiAgcmVuZGVyQ2FsZW5kYXJEYXRlKGNhbGVuZGFySGVhZGVyRGF0ZSwgZGF0ZSwgeWVhciwgbW9udGgpO1xyXG5cclxuICBjaGV2cm9ucy5mb3JFYWNoKChjaGV2cm9uKSA9PiB7XHJcbiAgICBjaGV2cm9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1vbnRoID0gY2hldnJvbi5pZCA9PT0gXCJjYWwtY2hldnJvbi1wcmV2XCIgPyBtb250aCAtIDEgOiBtb250aCArIDE7XHJcbiAgICAgIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xyXG4gICAgICAgIC8vIFNldCB0aGUgZGF0ZSB0byB0aGUgZmlyc3QgZGF5IG9mIHRoZVxyXG4gICAgICAgIC8vIG1vbnRoIHdpdGggdGhlIG5ldyB5ZWFyXHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBuZXcgRGF0ZSgpLmdldERhdGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgeWVhciB0byB0aGUgbmV3IHllYXJcclxuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIG1vbnRoIHRvIHRoZSBuZXcgbW9udGhcclxuICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJDYWxlbmRhckRhdGUoY2FsZW5kYXJIZWFkZXJEYXRlLCBkYXRlLCB5ZWFyLCBtb250aCk7XHJcbiAgICAgIHJlbmRlckNhbGVuZGFyQm9keShjYWxCb2R5LCBkYXRlLCB5ZWFyLCBtb250aCwgZmluYW5jaWFsRGF0YSwgcGFyZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FsZW5kYXJIZWFkZXI7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhckJvZHkgPSAoXHJcbiAgY2FsQm9keTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgY2FsQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjYWxCb2R5LmFwcGVuZENoaWxkKGNhbGVuZGFyQm9keShkYXRlLCB5ZWFyLCBtb250aCwgZmluYW5jaWFsRGF0YSwgcGFyZW50KSk7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckJvZHkgPSAoXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJCb2R5LmNsYXNzTmFtZSA9IFwiY2FsLWJvZHlcIjtcclxuICBjb25zdCBzdGFydF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBzdGFydF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZW5kX2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgY29uc3QgbW9udGhseURhdGEgPSBmaW5hbmNpYWxEYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbVN0YXJ0ID0gbmV3IERhdGUoaXRlbS5zdGFydF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGl0ZW1FbmQgPSBuZXcgRGF0ZShpdGVtLmVuZF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGN1cnJlbnRTdGFydCA9IG5ldyBEYXRlKHN0YXJ0X2RhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgY29uc3QgY3VycmVudEVuZCA9IG5ldyBEYXRlKGVuZF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgICByZXR1cm4gaXRlbVN0YXJ0ID49IGN1cnJlbnRTdGFydCAmJiBpdGVtRW5kIDw9IGN1cnJlbnRFbmQ7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFyQm9keUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keUxlZnQuY2xhc3NOYW1lID0gXCJjYWwtYm9keS1sZWZ0XCI7XHJcbiAgY29uc3QgY2FsZW5kYXJCb2R5UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keVJpZ2h0LmNsYXNzTmFtZSA9IFwiY2FsLWJvZHktcmlnaHRcIjtcclxuICBsZXQgY2FsU2lkZWJhciA9IG51bGw7XHJcblxyXG4gIGlmIChwYXJlbnQgPT09IFwiQnVkZ2V0XCIpIHtcclxuICAgIGNhbFNpZGViYXIgPSBjYWxlbmRhclNpZGViYXIobW9udGhseURhdGEgYXMgQnVkZ2V0W10pO1xyXG4gICAgY2FsZW5kYXJCb2R5TGVmdC5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIkluY29tZVwiLCBtb250aGx5RGF0YSBhcyBCdWRnZXRbXSksXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIkJpbGxzXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKSxcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiUGVyc29uYWxcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pLFxyXG4gICAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJTYXZpbmdzXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKSxcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiT3RoZXJcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYWxTaWRlYmFyID0gY2FsZW5kYXJTaWRlYmFyKG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pO1xyXG4gICAgY2FsZW5kYXJCb2R5TGVmdC5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uQ29tcG9uZW50KFwiSW5jb21lXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIkJpbGxzXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIlBlcnNvbmFsXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIlNhdmluZ3NcIiwgbW9udGhseURhdGEgYXMgVHJhbnNhY3Rpb25bXSksXHJcbiAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uQ29tcG9uZW50KFwiT3RoZXJcIiwgbW9udGhseURhdGEgYXMgVHJhbnNhY3Rpb25bXSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGNhbGVuZGFyQm9keVJpZ2h0LmFwcGVuZChjYWxTaWRlYmFyKTtcclxuICBjYWxlbmRhckJvZHkuYXBwZW5kKGNhbGVuZGFyQm9keUxlZnQsIGNhbGVuZGFyQm9keVJpZ2h0KTtcclxuICByZXR1cm4gY2FsZW5kYXJCb2R5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FsZW5kYXIgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmltcG9ydCBGaW5hbmNlQ2FsY3VsYXRvciBmcm9tIFwiLi9GaW5hbmNlQ2FsY3VsYXRvclwiO1xyXG5cclxuY29uc3QgY2FsZW5kYXJTaWRlYmFyID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gXCJjYWwtc2lkZWJhclwiO1xyXG5cclxuICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyVG9wKGZpbmFuY2lhbERhdGEpLCBzaWRlYmFyQm90dG9tKGZpbmFuY2lhbERhdGEpKTtcclxuXHJcbiAgcmV0dXJuIHNpZGViYXI7XHJcbn07XHJcblxyXG5jb25zdCBzaWRlYmFyVG9wID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IGZpbmFuY2VDYWxjdWxhdG9yID0gbmV3IEZpbmFuY2VDYWxjdWxhdG9yKGZpbmFuY2lhbERhdGEpO1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTW9udGhseSBCcmVha2Rvd25cIjtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmNvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmNvbWUgPSBmaW5hbmNlQ2FsY3VsYXRvclxyXG4gICAgLmZpbmFuY2VDYXRlZ29yeUNhbGN1bGF0b3IoXCJJbmNvbWVcIilcclxuICAgIC50b1N0cmluZygpO1xyXG4gIGluY29tZVNlY3Rpb24udGV4dENvbnRlbnQgPSBgSW5jb21lIHRoaXMgbW9udGg6ICR7aW5jb21lfWA7XHJcbiAgY29uc3QgdG90YWxTcGVuZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvdGFsU3BlbmQgPSBmaW5hbmNlQ2FsY3VsYXRvci50b3RhbE1vbnRobHlTcGVuZCgpO1xyXG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmluYW5jaWFsRGF0YSkpKTtcclxuICBjb25zb2xlLmxvZyh0b3RhbFNwZW5kKTtcclxuICB0b3RhbFNwZW5kU2VjdGlvbi50ZXh0Q29udGVudCA9IGBUb3RhbCBzcGVuZCB0aGlzIG1vbnRoOiAke3RvdGFsU3BlbmR9YDtcclxuICBjb25zdCBzYXZpbmdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuZXRJbmNvbWUgPSBmaW5hbmNlQ2FsY3VsYXRvci5tb250aGx5RXhjZXNzQ2FsY3VsYXRvcigpLnRvU3RyaW5nKCk7XHJcbiAgc2F2aW5nU2VjdGlvbi50ZXh0Q29udGVudCA9IGBMZWZ0b3ZlcjogJHtuZXRJbmNvbWV9YDtcclxuICBib2R5LmFwcGVuZChpbmNvbWVTZWN0aW9uLCB0b3RhbFNwZW5kU2VjdGlvbiwgc2F2aW5nU2VjdGlvbik7XHJcbiAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvbkhlYWRlciwgYm9keSk7XHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBzaWRlYmFyQm90dG9tID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY2FsZW5kYXJTaWRlYmFyIH07XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBCQVNFX1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlnIH07XHJcbiIsImltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgZGVsZXRlQnVkZ2V0ID0gYXN5bmMgKGJ1ZGdldF9pZDogc3RyaW5nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9maW5hbmNpYWwtbWFuYWdlbWVudC9waHAvZGVsZXRlQnVkZ2V0LnBocD9idWRnZXRfaWQ9JHtidWRnZXRfaWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVsZXRlQnVkZ2V0IH07XHJcbiIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuXHJcbmNvbnN0IHBvcHVsYXRlQnVkZ2V0Rm9ybSA9IChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApO1xyXG4gIGNhdGVnb3J5LnZhbHVlID0gYnVkZ2V0RGF0YS5jYXRlZ29yeTtcclxuICBjb25zdCBhbW91bnQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKTtcclxuICBhbW91bnQudmFsdWUgPSBidWRnZXREYXRhLmFtb3VudC50b1N0cmluZygpO1xyXG4gIGNvbnN0IHRpdGxlID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKTtcclxuICB0aXRsZS52YWx1ZSA9IGJ1ZGdldERhdGEudGl0bGU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSA8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gYnVkZ2V0RGF0YS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBzdGFydERhdGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tc3RhcnQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgc3RhcnREYXRlLnZhbHVlID0gYnVkZ2V0RGF0YS5zdGFydF9kYXRlLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1lbmQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgZW5kRGF0ZS52YWx1ZSA9IGJ1ZGdldERhdGEuZW5kX2RhdGUudG9TdHJpbmcoKTtcclxuICBjb25zdCBidWRnZXRJZCA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1idWRnZXQtaWRcIilcclxuICApO1xyXG4gIGJ1ZGdldElkLnZhbHVlID0gYnVkZ2V0RGF0YS5idWRnZXRfaWQudG9TdHJpbmcoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldEVkaXRCdWRnZXRGb3JtVmFsdWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBhbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS10aXRsZVwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGJ1ZGdldF9pZCA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYnVkZ2V0LWlkXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgdXNlcl9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKSEudG9TdHJpbmcoKTtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWwtY3Vyci1kYXRlXCIpO1xyXG4gIGNvbnN0IHVucGFyc2VkRGF0ZTogc3RyaW5nW10gPSBjYWxlbmRhckhlYWRlckRhdGU/LmRhdGFzZXQuZGF0ZT8uc3BsaXQoXCIgXCIpITtcclxuICBjb25zdCBtb250aCA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVswXSk7XHJcbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVsxXSk7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZV9vYmogPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGVfb2JqLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZV9vYmogPSBuZXcgRGF0ZSgpO1xyXG4gIGVuZF9kYXRlX29iai5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBzdGFydF9kYXRlX29iai50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IGVuZF9kYXRlX29iai50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgYW1vdW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVzZXJfaWQsXHJcbiAgICBzdGFydF9kYXRlLFxyXG4gICAgZW5kX2RhdGUsXHJcbiAgICBidWRnZXRfaWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ1ZGdldCA9IGFzeW5jIChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKGJ1ZGdldERhdGEpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC91cGRhdGVCdWRnZXQucGhwXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShidWRnZXREYXRhKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICBlZGl0QnVkZ2V0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXBkYXRlQnVkZ2V0LCBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcywgcG9wdWxhdGVCdWRnZXRGb3JtIH07XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG5cclxuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBob21lRGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBjcmVhdGUgYW5kIHBvcHVsYXRlIGxlZnQgYW5kIHJpZ2h0IHBvcnRpb25zIG9mIHRoZSBoZWFkZXJcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBoZWFkZXJMZWZ0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIFwiO1xyXG4gIGhlYWRlclJpZ2h0LnRleHRDb250ZW50ID0gXCJKYWNrIVwiO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID0gXCJob21lLWhlYWRlclwiO1xyXG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiaG9tZS1oZWFkZXIgaG9tZS1oZWFkZXItcmlnaHRcIjtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBmb3IgdGFnIGxpbmUgYmVsb3cgd2VsY29tZSBtZXNzYWdlXHJcbiAgY29uc3QgaG9tZVRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVUYWdMaW5lLnRleHRDb250ZW50ID1cclxuICAgIFwiUmVhZHkgdG8gdGFrZSBjb250cm9sIG9mIHlvdXIgZmluYW5jZXM/IExldCdzIGdldCBzdGFydGVkLlwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFnTGluZSk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnVkZ2V0IH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXMvdHJhbnNhY3Rpb25JbnRlcmZhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi90cmFuc2FjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKTtcclxuY29uc3QgYnVkZ2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtYnRuXCIpO1xyXG5jb25zdCBtYWluTmF2Q29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1idG5cIik7XHJcblxyXG5tYWluTmF2Q29udD8uYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuXHJcbmNvbnN0IGZldGNoQnVkZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgY29uZmlnLkJBU0VfVVJMICsgYGZldGNoQnVkZ2V0LnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuYnVkZ2V0cykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYnVkZ2V0cztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hUcmFuc2FjdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGNvbmZpZy5CQVNFX1VSTCArIGBmZXRjaFRyYW5zYWN0aW9ucy5waHA/dXNlcl9pZD0ke3VzZXJJZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnRyYW5zYWN0aW9ucykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudHJhbnNhY3Rpb25zO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBvcGVuSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lID0gY3JlYXRlSG9tZSgpO1xyXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY29udGFpbmVyPy5hcHBlbmRDaGlsZChob21lKTtcclxufTtcclxuXHJcbmhvbWVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICBvcGVuSG9tZSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IG9wZW5CdWRnZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYnVkZ2V0RGF0YSA9IDxCdWRnZXRbXT5hd2FpdCBmZXRjaEJ1ZGdldERhdGEoKTtcclxuICBjb250YWluZXI/LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGNvbnN0IGJ1ZGdldCA9IGNyZWF0ZUJ1ZGdldChidWRnZXREYXRhKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKGJ1ZGdldCk7XHJcbn07XHJcblxyXG5idWRnZXRCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICBvcGVuQnVkZ2V0KCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlblRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uRGF0YSA9IDxUcmFuc2FjdGlvbltdPmF3YWl0IGZldGNoVHJhbnNhY3Rpb25EYXRhKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uRGF0YSk7XHJcbiAgY29udGFpbmVyPy5hcHBlbmRDaGlsZCh0cmFuc2FjdGlvbik7XHJcbn07XHJcblxyXG50cmFuc2FjdGlvbkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBvcGVuVHJhbnNhY3Rpb24oKTtcclxufSk7XHJcblxyXG5vcGVuSG9tZSgpO1xyXG5cclxuZXhwb3J0IHsgb3BlbkJ1ZGdldCwgb3BlblRyYW5zYWN0aW9uIH07XHJcbiIsImNvbnN0IG5hdmJhcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3QgbmF2YmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbm5hdmJhckxlZnQuc3JjID0gXCIuLi9wdWJsaWMvYXNzZXRzL2J3bG9nby5wbmdcIjtcclxubmF2YmFyTGVmdC5jbGFzc05hbWUgPSBcIm5hdmJhci1sZWZ0XCI7XHJcbmNvbnN0IG5hdmJhck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5hdmJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmF2YmFyLmFwcGVuZChuYXZiYXJMZWZ0LCBuYXZiYXJNaWQsIG5hdmJhclJpZ2h0KTtcclxuXHJcbmV4cG9ydCB7IG5hdmJhciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgb3BlblRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3RyYW5zYWN0aW9uLmNzc1wiO1xyXG5cclxuY29uc3QgdHJhbnNhY3Rpb25EaWFsb2cgPSA8SFRNTERpYWxvZ0VsZW1lbnQ+KFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZGlhbG9nXCIpXHJcbik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybVwiKTtcclxuXHJcbmNvbnN0IGVkaXRUcmFuc2FjdGlvbkRpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRyYW5zYWN0aW9uLWRpYWxvZ1wiKVxyXG4pO1xyXG5jb25zdCBjbG9zZVRyYW5zYWN0aW9uRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJ0cmFuc2FjdGlvbi1kaWFsb2ctY2xvc2VcIlxyXG4pO1xyXG5jb25zdCBjbG9zdEVkaXRUcmFuc2FjdGlvbkRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiZWRpdC10cmFuc2FjdGlvbi1kaWFsb2ctY2xvc2VcIlxyXG4pO1xyXG5cclxuY2xvc2VUcmFuc2FjdGlvbkRpYWxvZz8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICB0cmFuc2FjdGlvbkRpYWxvZy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRyYW5zYWN0aW9uID0gKHRyYW5zYWN0aW9uRGF0YTogVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0cmFuc2FjdGlvbi5jbGFzc05hbWUgPSBcInRyYW5zYWN0aW9uXCI7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFyID0gY3JlYXRlQ2FsZW5kYXIodHJhbnNhY3Rpb25EYXRhLCBcIlRyYW5zYWN0aW9uXCIpO1xyXG4gIHRyYW5zYWN0aW9uLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zYWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHJhbnNhY3Rpb25Gb3JtVmFsdWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBhbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS10aXRsZVwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB1bnBhcnNlZERhdGU6IHN0cmluZ1tdID0gY2FsZW5kYXJIZWFkZXJEYXRlPy5kYXRhc2V0LmRhdGU/LnNwbGl0KFwiIFwiKSE7XHJcbiAgY29uc3QgbW9udGggPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMF0pO1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMV0pO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGVuZF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBlbmRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRUcmFuc2FjdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYW1vdW50ID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tYW1vdW50XCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCB0aXRsZSA9ICgoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFRyYW5zYWN0aW9uRm9ybSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGNvbmZpZy5CQVNFX1VSTCArIFwiY3JlYXRlVHJhbnNhY3Rpb24ucGhwXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnZXRUcmFuc2FjdGlvbkZvcm1WYWx1ZXMoKSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgcmVzZXRUcmFuc2FjdGlvbkZvcm0oKTtcclxuICAgICAgdHJhbnNhY3Rpb25EaWFsb2cuY2xvc2UoKTtcclxuICAgICAgb3BlblRyYW5zYWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbnRyYW5zYWN0aW9uRm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzdWJtaXRUcmFuc2FjdGlvbkZvcm0oKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXMvdHJhbnNhY3Rpb25JbnRlcmZhY3RcIjtcclxuY29uc3QgdHJhbnNhY3Rpb25EaWFsb2cgPSA8SFRNTERpYWxvZ0VsZW1lbnQ+KFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZGlhbG9nXCIpXHJcbik7XHJcblxyXG5jb25zdCBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCA9IChcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIHRyYW5zYWN0aW9uRGF0YTogVHJhbnNhY3Rpb25bXVxyXG4pID0+IHtcclxuICBjb25zdCB0cmFuc2FjdGlvbkNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdHJhbnNhY3Rpb25Db21wb25lbnQuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnRcIjtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcInRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXJcIjtcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJMZWZ0LnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgaGVhZGVyTGVmdC5jbGFzc05hbWUgPVxyXG4gICAgXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQgdHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1sZWZ0XCI7XHJcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlclJpZ2h0LnRleHRDb250ZW50ID0gXCJBbW91bnRcIjtcclxuICBoZWFkZXJSaWdodC5jbGFzc05hbWUgPVxyXG4gICAgXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LXJpZ2h0IHRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItcmlnaHRcIjtcclxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckxlZnQsIGhlYWRlclJpZ2h0KTtcclxuXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudERhdGEgPSB0cmFuc2FjdGlvbkRhdGEuZmlsdGVyKFxyXG4gICAgKGJ1ZGdldEl0ZW0pID0+IGJ1ZGdldEl0ZW0uY2F0ZWdvcnkgPT09IHRpdGxlXHJcbiAgKTtcclxuXHJcbiAgY29tcG9uZW50RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHJvdyhpdGVtKSk7XHJcbiAgfSk7XHJcblxyXG4gIG1haW4uY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtbWFpblwiO1xyXG5cclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5jbGFzc05hbWUgPSBcInRyYW5zYWN0aW9uLWNvbXBvbmVudC1mb290ZXJcIjtcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEl0ZW1cIjtcclxuXHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbkZvcm1TZWxlY3QgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+KFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgICApO1xyXG4gICAgdHJhbnNhY3Rpb25Gb3JtU2VsZWN0LnZhbHVlID0gdGl0bGU7XHJcbiAgICB0cmFuc2FjdGlvbkRpYWxvZz8uc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuXHJcbiAgdHJhbnNhY3Rpb25Db21wb25lbnQuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zYWN0aW9uQ29tcG9uZW50O1xyXG59O1xyXG5cclxuY29uc3Qgcm93ID0gKHRyYW5zYWN0aW9uRGF0YTogVHJhbnNhY3Rpb24pID0+IHtcclxuICBjb25zdCBzaW5nbGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpbmdsZVJvdy5jbGFzc05hbWUgPSBcInRyYW5zYWN0aW9uLWNvbXBvbmVudC1pdGVtXCI7XHJcbiAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gIGRlbGV0ZUljb24uY2xhc3NOYW1lID1cclxuICAgIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB0cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbS1kZWwtaWNvblwiO1xyXG4gIGNvbnN0IHJvd01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01haW4uY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtcm93XCI7XHJcbiAgY29uc3Qgcm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TGVmdC5jbGFzc05hbWUgPVxyXG4gICAgXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQgdHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0LWlucHV0XCI7XHJcbiAgcm93TGVmdC50ZXh0Q29udGVudCA9IHRyYW5zYWN0aW9uRGF0YS50aXRsZTtcclxuICBjb25zdCByb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93UmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0XCI7XHJcbiAgcm93UmlnaHQudGV4dENvbnRlbnQgPSBgS1Nocy4gJHt0cmFuc2FjdGlvbkRhdGEuYW1vdW50fWA7XHJcblxyXG4gIHJvd01haW4uYXBwZW5kKGRlbGV0ZUljb24sIHJvd0xlZnQsIHJvd1JpZ2h0KTtcclxuICBzaW5nbGVSb3cuYXBwZW5kKHJvd01haW4pO1xyXG4gIHJldHVybiBzaW5nbGVSb3c7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==