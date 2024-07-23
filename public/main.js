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
/* harmony export */   budgetFormDialog: () => (/* binding */ budgetFormDialog),
/* harmony export */   createBudget: () => (/* binding */ createBudget),
/* harmony export */   editBudgetFormDialog: () => (/* binding */ editBudgetFormDialog),
/* harmony export */   getBudgetFormValues: () => (/* binding */ getBudgetFormValues),
/* harmony export */   populateBudgetForm: () => (/* binding */ populateBudgetForm),
/* harmony export */   resetBudgetForm: () => (/* binding */ resetBudgetForm)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _budgetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budgetService */ "./src/budgetService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const budgetFormDialog = (document.getElementById("budget-dialog"));
const budgetForm = document.getElementById("budget-form");
const editBudgetForm = (document.getElementById("edit-budget-form"));
const budgetDialogCloseBtn = document.getElementById("budget-dialog-close");
const editBudgetDialogCloseBtn = document.getElementById("edit-budget-dialog-close");
const editBudgetFormDialog = (document.getElementById("edit-budget-dialog"));
const budgetService = new _budgetService__WEBPACK_IMPORTED_MODULE_2__.BudgetService();
const createBudget = (budgetData) => {
    const budget = document.createElement("div");
    budget.className = "budget";
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
const createTransactionRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_1__.config.BASE_URL + "createTransaction.php", {
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
    const budgetFormValues = getBudgetFormValues();
    const transactionFormValues = Object.assign(Object.assign({}, getBudgetFormValues()), { amount: 0 });
    budgetService.submitBudgetForm(budgetFormValues);
    createTransactionRecord();
});
editBudgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const budgetData = Object.assign(Object.assign({}, getEditBudgetFormValues()), { created_at: null });
    budgetService.updateBudget(budgetData);
});
budgetDialogCloseBtn === null || budgetDialogCloseBtn === void 0 ? void 0 : budgetDialogCloseBtn.addEventListener("click", () => {
    budgetFormDialog.close();
});
editBudgetDialogCloseBtn === null || editBudgetDialogCloseBtn === void 0 ? void 0 : editBudgetDialogCloseBtn.addEventListener("click", () => {
    editBudgetFormDialog.close();
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
/* harmony import */ var _deleteBudget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteBudget */ "./src/deleteBudget.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");


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
        _budget__WEBPACK_IMPORTED_MODULE_1__.budgetFormDialog.showModal();
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
        (0,_budget__WEBPACK_IMPORTED_MODULE_1__.populateBudgetForm)(budgetData);
        _budget__WEBPACK_IMPORTED_MODULE_1__.editBudgetFormDialog.show();
    });
    deleteIcon.addEventListener("click", () => {
        (0,_deleteBudget__WEBPACK_IMPORTED_MODULE_0__.deleteBudget)(budgetData.budget_id);
    });
    singleRow.append(deleteIcon, rowMain);
    return singleRow;
};



/***/ }),

/***/ "./src/budgetService.ts":
/*!******************************!*\
  !*** ./src/budgetService.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BudgetService: () => (/* binding */ BudgetService)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BudgetService {
    constructor() {
        this.fetchBudgetData = () => __awaiter(this, void 0, void 0, function* () {
            const userId = localStorage.getItem("user_id");
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + `fetchBudget.php?user_id=${userId}`, {
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
        this.submitBudgetForm = (budgetFormValues) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + "createBudget.php", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(budgetFormValues),
                });
                const response = yield request.json();
                if (response.message) {
                    (0,_budget__WEBPACK_IMPORTED_MODULE_2__.resetBudgetForm)();
                    _budget__WEBPACK_IMPORTED_MODULE_2__.budgetFormDialog.close();
                    (0,_index__WEBPACK_IMPORTED_MODULE_1__.openBudget)();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        this.updateBudget = (budgetData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch("http://localhost:8080/financial-management/php/updateBudget.php", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(budgetData),
                });
                const response = yield request.json();
                if (response.message) {
                    _budget__WEBPACK_IMPORTED_MODULE_2__.editBudgetFormDialog.close();
                    (0,_index__WEBPACK_IMPORTED_MODULE_1__.openBudget)();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}



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
/* harmony import */ var _budgetService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./budgetService */ "./src/budgetService.ts");
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
const budgetService = new _budgetService__WEBPACK_IMPORTED_MODULE_5__.BudgetService();
mainNavCont === null || mainNavCont === void 0 ? void 0 : mainNavCont.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar);
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
    const budgetData = yield budgetService.fetchBudgetData();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RyYW5zYWN0aW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy90cmFuc2FjdGlvbi5jc3M/MGUwNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9GaW5hbmNlQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9idWRnZXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1ZGdldFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhclNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVsZXRlQnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2YmFyLnRzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNhY3Rpb25Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudHJhbnNhY3Rpb24tY29tcG9uZW50IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdyxcclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbS1kZWwtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1sZWZ0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1taWQsXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyLXJpZ2h0IHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjOGU5OTllO1xyXG59XHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1taWQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LXJpZ2h0IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogVFJBTlNBQ1RJT04gRElBTE9HICovXHJcbi50cmFuc2FjdGlvbi1kaWFsb2ctY29udCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybS1pdGVtID4gbGFiZWwge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4udHJhbnNhY3Rpb24tZm9ybS1pdGVtLWlucHV0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy90cmFuc2FjdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50cmFuc2FjdGlvbi1jb21wb25lbnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3csXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbS1kZWwtaWNvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbGVmdCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1taWQsXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItcmlnaHQge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGNvbG9yOiAjOGU5OTllO1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQtaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LW1pZCB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1yaWdodCB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRSQU5TQUNUSU9OIERJQUxPRyAqL1xcclxcbi50cmFuc2FjdGlvbi1kaWFsb2ctY29udCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSA+IGxhYmVsIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbS1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90cmFuc2FjdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90cmFuc2FjdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5jbGFzcyBGaW5hbmNlQ2FsY3VsYXRvciB7XHJcbiAgZmluYW5jZURhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmaW5hbmNlRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdKSB7XHJcbiAgICB0aGlzLmZpbmFuY2VEYXRhID0gZmluYW5jZURhdGE7XHJcbiAgfVxyXG5cclxuICBmaW5hbmNlQ2F0ZWdvcnlDYWxjdWxhdG9yKGNhdGVnb3J5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgdGhpcy5maW5hbmNlRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgIHN1bSArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdW07XHJcbiAgfVxyXG5cclxuICB0b3RhbE1vbnRobHlTcGVuZCgpOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgdGhpcy5maW5hbmNlRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIkluY29tZVwiIHx8IGl0ZW0uY2F0ZWdvcnkgPT09IFwiU2F2aW5nc1wiKSByZXR1cm47XHJcbiAgICAgIHN1bSArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3VtO1xyXG4gIH1cclxuXHJcbiAgbW9udGhseUV4Y2Vzc0NhbGN1bGF0b3IoKTogbnVtYmVyIHtcclxuICAgIGxldCBpbmNvbWVUb3RhbCA9IDA7XHJcbiAgICBsZXQgdG90YWxTcGVuZCA9IDA7XHJcblxyXG4gICAgdGhpcy5maW5hbmNlRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIkluY29tZVwiKSB7XHJcbiAgICAgICAgaW5jb21lVG90YWwgKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJTYXZpbmdzXCIpIHJldHVybjtcclxuICAgICAgdG90YWxTcGVuZCArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5jb21lVG90YWwgLSB0b3RhbFNwZW5kO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmluYW5jZUNhbGN1bGF0b3I7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vYnVkZ2V0U2VydmljZVwiO1xyXG5cclxuY29uc3QgYnVkZ2V0Rm9ybURpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nXCIpXHJcbik7XHJcbmNvbnN0IGJ1ZGdldEZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm1cIik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtXCIpXHJcbik7XHJcbmNvbnN0IGJ1ZGdldERpYWxvZ0Nsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nLWNsb3NlXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImVkaXQtYnVkZ2V0LWRpYWxvZy1jbG9zZVwiXHJcbik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtRGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWRpYWxvZ1wiKVxyXG4pO1xyXG5jb25zdCBidWRnZXRTZXJ2aWNlID0gbmV3IEJ1ZGdldFNlcnZpY2UoKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ1ZGdldCA9IChidWRnZXREYXRhOiBCdWRnZXRbXSk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBidWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1ZGdldC5jbGFzc05hbWUgPSBcImJ1ZGdldFwiO1xyXG4gIGNvbnN0IGNhbGVuZGFyID0gY3JlYXRlQ2FsZW5kYXIoYnVkZ2V0RGF0YSwgXCJCdWRnZXRcIik7XHJcbiAgY29uc3QgYnVkZ2V0U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0LmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcclxuICBidWRnZXQuYXBwZW5kQ2hpbGQoYnVkZ2V0U2lkZWJhcik7XHJcbiAgcmV0dXJuIGJ1ZGdldDtcclxufTtcclxuXHJcbmNvbnN0IGdldEJ1ZGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBhbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB0aXRsZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLXRpdGxlXCIpKVxyXG4gICAgLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbC1jdXJyLWRhdGVcIik7XHJcbiAgY29uc3QgdW5wYXJzZWREYXRlOiBzdHJpbmdbXSA9IGNhbGVuZGFySGVhZGVyRGF0ZT8uZGF0YXNldC5kYXRlPy5zcGxpdChcIiBcIikhO1xyXG4gIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzBdKTtcclxuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzFdKTtcclxuICBjb25zdCBzdGFydF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBzdGFydF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZW5kX2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgYW1vdW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVzZXJfaWQsXHJcbiAgICBzdGFydF9kYXRlLFxyXG4gICAgZW5kX2RhdGUsXHJcbiAgfTtcclxufTtcclxuY29uc3QgcmVzZXRCdWRnZXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFtb3VudCA9ICgoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZSA9IFwiXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbn07XHJcblxyXG5jb25zdCBwb3B1bGF0ZUJ1ZGdldEZvcm0gPSAoYnVkZ2V0RGF0YTogQnVkZ2V0KSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKTtcclxuICBjYXRlZ29yeS52YWx1ZSA9IGJ1ZGdldERhdGEuY2F0ZWdvcnk7XHJcbiAgY29uc3QgYW1vdW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICk7XHJcbiAgYW1vdW50LnZhbHVlID0gYnVkZ2V0RGF0YS5hbW91bnQudG9TdHJpbmcoKTtcclxuICBjb25zdCB0aXRsZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS10aXRsZVwiKVxyXG4gICk7XHJcbiAgdGl0bGUudmFsdWUgPSBidWRnZXREYXRhLnRpdGxlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKTtcclxuICBkZXNjcmlwdGlvbi52YWx1ZSA9IGJ1ZGdldERhdGEuZGVzY3JpcHRpb247XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLXN0YXJ0LWRhdGVcIilcclxuICApO1xyXG4gIHN0YXJ0RGF0ZS52YWx1ZSA9IGJ1ZGdldERhdGEuc3RhcnRfZGF0ZS50b1N0cmluZygpO1xyXG4gIGNvbnN0IGVuZERhdGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tZW5kLWRhdGVcIilcclxuICApO1xyXG4gIGVuZERhdGUudmFsdWUgPSBidWRnZXREYXRhLmVuZF9kYXRlLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgYnVkZ2V0SWQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYnVkZ2V0LWlkXCIpXHJcbiAgKTtcclxuICBidWRnZXRJZC52YWx1ZSA9IGJ1ZGdldERhdGEuYnVkZ2V0X2lkLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcyA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYW1vdW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB0aXRsZSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBidWRnZXRfaWQgPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWJ1ZGdldC1pZFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIikhLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB1bnBhcnNlZERhdGU6IHN0cmluZ1tdID0gY2FsZW5kYXJIZWFkZXJEYXRlPy5kYXRhc2V0LmRhdGU/LnNwbGl0KFwiIFwiKSE7XHJcbiAgY29uc3QgbW9udGggPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMF0pO1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMV0pO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGVfb2JqID0gbmV3IERhdGUoKTtcclxuICBzdGFydF9kYXRlX29iai5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZW5kX2RhdGVfb2JqID0gbmV3IERhdGUoKTtcclxuICBlbmRfZGF0ZV9vYmouc2V0RnVsbFllYXIoeWVhciwgbW9udGggKyAxLCAwKTtcclxuICBjb25zdCBzdGFydF9kYXRlID0gc3RhcnRfZGF0ZV9vYmoudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgY29uc3QgZW5kX2RhdGUgPSBlbmRfZGF0ZV9vYmoudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGFtb3VudCxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICB1c2VyX2lkLFxyXG4gICAgc3RhcnRfZGF0ZSxcclxuICAgIGVuZF9kYXRlLFxyXG4gICAgYnVkZ2V0X2lkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVUcmFuc2FjdGlvblJlY29yZCA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGNvbmZpZy5CQVNFX1VSTCArIFwiY3JlYXRlVHJhbnNhY3Rpb24ucGhwXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmdldEJ1ZGdldEZvcm1WYWx1ZXMoKSwgYW1vdW50OiAwIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5idWRnZXRGb3JtPy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGJ1ZGdldEZvcm1WYWx1ZXMgPSBnZXRCdWRnZXRGb3JtVmFsdWVzKCk7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb25Gb3JtVmFsdWVzID0geyAuLi5nZXRCdWRnZXRGb3JtVmFsdWVzKCksIGFtb3VudDogMCB9O1xyXG4gIGJ1ZGdldFNlcnZpY2Uuc3VibWl0QnVkZ2V0Rm9ybShidWRnZXRGb3JtVmFsdWVzKTtcclxuICBjcmVhdGVUcmFuc2FjdGlvblJlY29yZCgpO1xyXG59KTtcclxuXHJcbmVkaXRCdWRnZXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGJ1ZGdldERhdGEgPSB7IC4uLmdldEVkaXRCdWRnZXRGb3JtVmFsdWVzKCksIGNyZWF0ZWRfYXQ6IG51bGwgfTtcclxuICBidWRnZXRTZXJ2aWNlLnVwZGF0ZUJ1ZGdldChidWRnZXREYXRhKTtcclxufSk7XHJcblxyXG5idWRnZXREaWFsb2dDbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBidWRnZXRGb3JtRGlhbG9nIS5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmVkaXRCdWRnZXREaWFsb2dDbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBlZGl0QnVkZ2V0Rm9ybURpYWxvZyEuY2xvc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUJ1ZGdldCxcclxuICByZXNldEJ1ZGdldEZvcm0sXHJcbiAgZ2V0QnVkZ2V0Rm9ybVZhbHVlcyxcclxuICBidWRnZXRGb3JtRGlhbG9nLFxyXG4gIGVkaXRCdWRnZXRGb3JtRGlhbG9nLFxyXG4gIHBvcHVsYXRlQnVkZ2V0Rm9ybSxcclxufTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGRlbGV0ZUJ1ZGdldCB9IGZyb20gXCIuL2RlbGV0ZUJ1ZGdldFwiO1xyXG5pbXBvcnQge1xyXG4gIGJ1ZGdldEZvcm1EaWFsb2csXHJcbiAgcG9wdWxhdGVCdWRnZXRGb3JtLFxyXG4gIGVkaXRCdWRnZXRGb3JtRGlhbG9nLFxyXG59IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5cclxuY29uc3QgY3JlYXRlQnVkZ2V0Q29tcG9uZW50ID0gKHRpdGxlOiBzdHJpbmcsIGJ1ZGdldERhdGE6IEJ1ZGdldFtdKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYnVkZ2V0RGF0YSk7XHJcbiAgY29uc3QgYnVkZ2V0Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXRDb21wb25lbnQuY2xhc3NOYW1lID0gXCJidWRnZXQtY29tcG9uZW50XCI7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWRnZXQtaGVhZGVyXCI7XHJcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTGVmdC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LWxlZnQgYnVkZ2V0LWhlYWRlci1sZWZ0XCI7XHJcbiAgY29uc3QgaGVhZGVyTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJNaWQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LW1pZCBidWRnZXQtaGVhZGVyLW1pZFwiO1xyXG4gIGhlYWRlck1pZC50ZXh0Q29udGVudCA9IFwiUGxhbm5lZFwiO1xyXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJSaWdodC50ZXh0Q29udGVudCA9IFwiUmVjZWl2ZWRcIjtcclxuICBoZWFkZXJSaWdodC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctcmlnaHQgYnVkZ2V0LWhlYWRlci1yaWdodFwiO1xyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyTWlkLCBoZWFkZXJSaWdodCk7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29tcG9uZW50RGF0YSA9IGJ1ZGdldERhdGEuZmlsdGVyKFxyXG4gICAgKGJ1ZGdldEl0ZW0pID0+IGJ1ZGdldEl0ZW0uY2F0ZWdvcnkgPT09IHRpdGxlXHJcbiAgKTtcclxuICBjb21wb25lbnREYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIG1haW4uYXBwZW5kKHJvdyhpdGVtKSk7XHJcbiAgfSk7XHJcblxyXG4gIG1haW4uY2xhc3NOYW1lID0gXCJidWRnZXQtbWFpblwiO1xyXG5cclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5jbGFzc05hbWUgPSBcImJ1ZGdldC1mb290ZXJcIjtcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEl0ZW1cIjtcclxuXHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBidWRnZXRGb3JtU2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PihcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICAgICk7XHJcbiAgICBidWRnZXRGb3JtU2VsZWN0LnZhbHVlID0gdGl0bGU7XHJcbiAgICBidWRnZXRGb3JtRGlhbG9nIS5zaG93TW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgYnVkZ2V0Q29tcG9uZW50LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIHJldHVybiBidWRnZXRDb21wb25lbnQ7XHJcbn07XHJcblxyXG5jb25zdCByb3cgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0KSA9PiB7XHJcbiAgY29uc3Qgc2luZ2xlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaW5nbGVSb3cuY2xhc3NOYW1lID0gXCJidWRnZXQtaXRlbVwiO1xyXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICBkZWxldGVJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBidWRnZXQtaXRlbS1kZWwtaWNvblwiO1xyXG4gIGNvbnN0IHJvd01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01haW4uY2xhc3NOYW1lID0gXCJidWRnZXQtcm93XCI7XHJcbiAgY29uc3Qgcm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TGVmdC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbGVmdCBidWRnZXQtcm93LWxlZnQtaW5wdXRcIjtcclxuICByb3dMZWZ0LnRleHRDb250ZW50ID0gYnVkZ2V0RGF0YS50aXRsZTtcclxuICBjb25zdCByb3dNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01pZC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbWlkXCI7XHJcbiAgcm93TWlkLnRleHRDb250ZW50ID0gYEtTaHMuICR7YnVkZ2V0RGF0YS5hbW91bnR9YDtcclxuICBjb25zdCByb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93UmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0XCI7XHJcbiAgcm93UmlnaHQudGV4dENvbnRlbnQgPSBcIktTaHMuIDAuMDBcIjtcclxuXHJcbiAgcm93TWFpbi5hcHBlbmQocm93TGVmdCwgcm93TWlkLCByb3dSaWdodCk7XHJcblxyXG4gIHJvd01haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBvcHVsYXRlQnVkZ2V0Rm9ybShidWRnZXREYXRhKTtcclxuICAgIGVkaXRCdWRnZXRGb3JtRGlhbG9nLnNob3coKTtcclxuICB9KTtcclxuICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkZWxldGVCdWRnZXQoYnVkZ2V0RGF0YS5idWRnZXRfaWQpO1xyXG4gIH0pO1xyXG5cclxuICBzaW5nbGVSb3cuYXBwZW5kKGRlbGV0ZUljb24sIHJvd01haW4pO1xyXG5cclxuICByZXR1cm4gc2luZ2xlUm93O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQnVkZ2V0Q29tcG9uZW50IH07XHJcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBvcGVuQnVkZ2V0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHtcclxuICBidWRnZXRGb3JtRGlhbG9nLFxyXG4gIHJlc2V0QnVkZ2V0Rm9ybSxcclxuICBlZGl0QnVkZ2V0Rm9ybURpYWxvZyxcclxufSBmcm9tIFwiLi9idWRnZXRcIjtcclxuXHJcbmNsYXNzIEJ1ZGdldFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZmV0Y2hCdWRnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGNvbmZpZy5CQVNFX1VSTCArIGBmZXRjaEJ1ZGdldC5waHA/dXNlcl9pZD0ke3VzZXJJZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuYnVkZ2V0cykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5idWRnZXRzO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdWJtaXRCdWRnZXRGb3JtID0gYXN5bmMgKGJ1ZGdldEZvcm1WYWx1ZXM6IGFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGNvbmZpZy5CQVNFX1VSTCArIFwiY3JlYXRlQnVkZ2V0LnBocFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYnVkZ2V0Rm9ybVZhbHVlcyksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICByZXNldEJ1ZGdldEZvcm0oKTtcclxuICAgICAgICBidWRnZXRGb3JtRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgb3BlbkJ1ZGdldCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1cGRhdGVCdWRnZXQgPSBhc3luYyAoYnVkZ2V0RGF0YTogQnVkZ2V0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL3VwZGF0ZUJ1ZGdldC5waHBcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYnVkZ2V0RGF0YSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICAgIGVkaXRCdWRnZXRGb3JtRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgb3BlbkJ1ZGdldCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBCdWRnZXRTZXJ2aWNlIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCB9IGZyb20gXCIuL2J1ZGdldENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCdWRnZXQsIGlzQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIGlzVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmltcG9ydCB7IGNhbGVuZGFyU2lkZWJhciB9IGZyb20gXCIuL2NhbGVuZGFyU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL3RyYW5zYWN0aW9uQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBjcmVhdGVDYWxlbmRhciA9IChcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyLmNsYXNzTmFtZSA9IFwiY2FsXCI7XHJcbiAgY29uc3QgY2FsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2FsSGVhZGVyID0gY2FsZW5kYXJIZWFkZXIoXHJcbiAgICBjYWxCb2R5LFxyXG4gICAgZGF0ZSxcclxuICAgIHllYXIsXHJcbiAgICBtb250aCxcclxuICAgIGZpbmFuY2lhbERhdGEsXHJcbiAgICBwYXJlbnRcclxuICApO1xyXG4gIGNhbEJvZHkuaWQgPSBcImNhbC1ib2R5LWNvbnRcIjtcclxuICByZW5kZXJDYWxlbmRhckJvZHkoY2FsQm9keSwgZGF0ZSwgeWVhciwgbW9udGgsIGZpbmFuY2lhbERhdGEsIHBhcmVudCk7XHJcbiAgY2FsZW5kYXIuYXBwZW5kKGNhbEhlYWRlciwgY2FsQm9keSk7XHJcblxyXG4gIHJldHVybiBjYWxlbmRhcjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyRGF0ZSA9IChcclxuICBjYWxlbmRhckhlYWRlckRhdGU6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXJcclxuKSA9PiB7XHJcbiAgY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICAgIFwiSmFudWFyeVwiLFxyXG4gICAgXCJGZWJydWFyeVwiLFxyXG4gICAgXCJNYXJjaFwiLFxyXG4gICAgXCJBcHJpbFwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuZVwiLFxyXG4gICAgXCJKdWx5XCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJTZXB0ZW1iZXJcIixcclxuICAgIFwiT2N0b2JlclwiLFxyXG4gICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJEZWNlbWJlclwiLFxyXG4gIF07XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhOYW1lc1ttb250aF19ICR7eWVhcn1gO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5kYXRhc2V0LmRhdGUgPSBgJHttb250aH0gJHt5ZWFyfWA7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckhlYWRlciA9IChcclxuICBjYWxCb2R5OiBIVE1MRGl2RWxlbWVudCxcclxuICBkYXRlOiBEYXRlLFxyXG4gIHllYXI6IG51bWJlcixcclxuICBtb250aDogbnVtYmVyLFxyXG4gIGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSxcclxuICBwYXJlbnQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICBjb25zdCBjYWxlbmRhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJIZWFkZXIuY2xhc3NOYW1lID0gXCJjYWwtaGVhZGVyXCI7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLmNsYXNzTmFtZSA9IFwiY2FsLWN1cnItZGF0ZVwiO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5pZCA9IFwiY2FsLWN1cnItZGF0ZVwiO1xyXG4gIHJlbmRlckNhbGVuZGFyRGF0ZShjYWxlbmRhckhlYWRlckRhdGUsIGRhdGUsIHllYXIsIG1vbnRoKTtcclxuICBjb25zdCBjYWxlbmRhck5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNhbGVuZGFyUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNhbGVuZGFyUHJldi50ZXh0Q29udGVudCA9IFwiY2hldnJvbl9sZWZ0XCI7XHJcbiAgY2FsZW5kYXJQcmV2LmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBjYWwtY2hldnJvbi1idG5cIjtcclxuICBjYWxlbmRhclByZXYuaWQgPSBcImNhbC1jaGV2cm9uLXByZXZcIjtcclxuICBjb25zdCBjYWxlbmRhck5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjYWxlbmRhck5leHQudGV4dENvbnRlbnQgPSBcImNoZXZyb25fcmlnaHRcIjtcclxuICBjYWxlbmRhck5leHQuY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGNhbC1jaGV2cm9uLWJ0blwiO1xyXG4gIGNhbGVuZGFyTmV4dC5pZCA9IFwiY2FsLWNoZXZyb24tbmV4dFwiO1xyXG4gIGNhbGVuZGFyTmF2aWdhdGlvbi5hcHBlbmQoY2FsZW5kYXJQcmV2LCBjYWxlbmRhck5leHQpO1xyXG4gIGNhbGVuZGFySGVhZGVyLmFwcGVuZChjYWxlbmRhckhlYWRlckRhdGUsIGNhbGVuZGFyTmF2aWdhdGlvbik7XHJcblxyXG4gIGNvbnN0IGNoZXZyb25zID0gW2NhbGVuZGFyTmV4dCwgY2FsZW5kYXJQcmV2XTtcclxuXHJcbiAgcmVuZGVyQ2FsZW5kYXJEYXRlKGNhbGVuZGFySGVhZGVyRGF0ZSwgZGF0ZSwgeWVhciwgbW9udGgpO1xyXG5cclxuICBjaGV2cm9ucy5mb3JFYWNoKChjaGV2cm9uKSA9PiB7XHJcbiAgICBjaGV2cm9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1vbnRoID0gY2hldnJvbi5pZCA9PT0gXCJjYWwtY2hldnJvbi1wcmV2XCIgPyBtb250aCAtIDEgOiBtb250aCArIDE7XHJcbiAgICAgIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xyXG4gICAgICAgIC8vIFNldCB0aGUgZGF0ZSB0byB0aGUgZmlyc3QgZGF5IG9mIHRoZVxyXG4gICAgICAgIC8vIG1vbnRoIHdpdGggdGhlIG5ldyB5ZWFyXHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBuZXcgRGF0ZSgpLmdldERhdGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgeWVhciB0byB0aGUgbmV3IHllYXJcclxuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIG1vbnRoIHRvIHRoZSBuZXcgbW9udGhcclxuICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJDYWxlbmRhckRhdGUoY2FsZW5kYXJIZWFkZXJEYXRlLCBkYXRlLCB5ZWFyLCBtb250aCk7XHJcbiAgICAgIHJlbmRlckNhbGVuZGFyQm9keShjYWxCb2R5LCBkYXRlLCB5ZWFyLCBtb250aCwgZmluYW5jaWFsRGF0YSwgcGFyZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FsZW5kYXJIZWFkZXI7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhckJvZHkgPSAoXHJcbiAgY2FsQm9keTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgY2FsQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjYWxCb2R5LmFwcGVuZENoaWxkKGNhbGVuZGFyQm9keShkYXRlLCB5ZWFyLCBtb250aCwgZmluYW5jaWFsRGF0YSwgcGFyZW50KSk7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckJvZHkgPSAoXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJCb2R5LmNsYXNzTmFtZSA9IFwiY2FsLWJvZHlcIjtcclxuICBjb25zdCBzdGFydF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBzdGFydF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZW5kX2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgY29uc3QgbW9udGhseURhdGEgPSBmaW5hbmNpYWxEYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbVN0YXJ0ID0gbmV3IERhdGUoaXRlbS5zdGFydF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGl0ZW1FbmQgPSBuZXcgRGF0ZShpdGVtLmVuZF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGN1cnJlbnRTdGFydCA9IG5ldyBEYXRlKHN0YXJ0X2RhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgY29uc3QgY3VycmVudEVuZCA9IG5ldyBEYXRlKGVuZF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgICByZXR1cm4gaXRlbVN0YXJ0ID49IGN1cnJlbnRTdGFydCAmJiBpdGVtRW5kIDw9IGN1cnJlbnRFbmQ7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFyQm9keUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keUxlZnQuY2xhc3NOYW1lID0gXCJjYWwtYm9keS1sZWZ0XCI7XHJcbiAgY29uc3QgY2FsZW5kYXJCb2R5UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keVJpZ2h0LmNsYXNzTmFtZSA9IFwiY2FsLWJvZHktcmlnaHRcIjtcclxuICBsZXQgY2FsU2lkZWJhciA9IG51bGw7XHJcblxyXG4gIGlmIChwYXJlbnQgPT09IFwiQnVkZ2V0XCIpIHtcclxuICAgIGNhbFNpZGViYXIgPSBjYWxlbmRhclNpZGViYXIobW9udGhseURhdGEgYXMgQnVkZ2V0W10pO1xyXG4gICAgY2FsZW5kYXJCb2R5TGVmdC5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIkluY29tZVwiLCBtb250aGx5RGF0YSBhcyBCdWRnZXRbXSksXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIkJpbGxzXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKSxcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiUGVyc29uYWxcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pLFxyXG4gICAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJTYXZpbmdzXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKSxcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiT3RoZXJcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYWxTaWRlYmFyID0gY2FsZW5kYXJTaWRlYmFyKG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pO1xyXG4gICAgY2FsZW5kYXJCb2R5TGVmdC5hcHBlbmQoXHJcbiAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uQ29tcG9uZW50KFwiSW5jb21lXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIkJpbGxzXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIlBlcnNvbmFsXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIlNhdmluZ3NcIiwgbW9udGhseURhdGEgYXMgVHJhbnNhY3Rpb25bXSksXHJcbiAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uQ29tcG9uZW50KFwiT3RoZXJcIiwgbW9udGhseURhdGEgYXMgVHJhbnNhY3Rpb25bXSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGNhbGVuZGFyQm9keVJpZ2h0LmFwcGVuZChjYWxTaWRlYmFyKTtcclxuICBjYWxlbmRhckJvZHkuYXBwZW5kKGNhbGVuZGFyQm9keUxlZnQsIGNhbGVuZGFyQm9keVJpZ2h0KTtcclxuICByZXR1cm4gY2FsZW5kYXJCb2R5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FsZW5kYXIgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmltcG9ydCBGaW5hbmNlQ2FsY3VsYXRvciBmcm9tIFwiLi9GaW5hbmNlQ2FsY3VsYXRvclwiO1xyXG5cclxuY29uc3QgY2FsZW5kYXJTaWRlYmFyID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gXCJjYWwtc2lkZWJhclwiO1xyXG5cclxuICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyVG9wKGZpbmFuY2lhbERhdGEpLCBzaWRlYmFyQm90dG9tKGZpbmFuY2lhbERhdGEpKTtcclxuXHJcbiAgcmV0dXJuIHNpZGViYXI7XHJcbn07XHJcblxyXG5jb25zdCBzaWRlYmFyVG9wID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IGZpbmFuY2VDYWxjdWxhdG9yID0gbmV3IEZpbmFuY2VDYWxjdWxhdG9yKGZpbmFuY2lhbERhdGEpO1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTW9udGhseSBCcmVha2Rvd25cIjtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmNvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmNvbWUgPSBmaW5hbmNlQ2FsY3VsYXRvclxyXG4gICAgLmZpbmFuY2VDYXRlZ29yeUNhbGN1bGF0b3IoXCJJbmNvbWVcIilcclxuICAgIC50b1N0cmluZygpO1xyXG4gIGluY29tZVNlY3Rpb24udGV4dENvbnRlbnQgPSBgSW5jb21lIHRoaXMgbW9udGg6ICR7aW5jb21lfWA7XHJcbiAgY29uc3QgdG90YWxTcGVuZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvdGFsU3BlbmQgPSBmaW5hbmNlQ2FsY3VsYXRvci50b3RhbE1vbnRobHlTcGVuZCgpO1xyXG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmluYW5jaWFsRGF0YSkpKTtcclxuICBjb25zb2xlLmxvZyh0b3RhbFNwZW5kKTtcclxuICB0b3RhbFNwZW5kU2VjdGlvbi50ZXh0Q29udGVudCA9IGBUb3RhbCBzcGVuZCB0aGlzIG1vbnRoOiAke3RvdGFsU3BlbmR9YDtcclxuICBjb25zdCBzYXZpbmdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuZXRJbmNvbWUgPSBmaW5hbmNlQ2FsY3VsYXRvci5tb250aGx5RXhjZXNzQ2FsY3VsYXRvcigpLnRvU3RyaW5nKCk7XHJcbiAgc2F2aW5nU2VjdGlvbi50ZXh0Q29udGVudCA9IGBMZWZ0b3ZlcjogJHtuZXRJbmNvbWV9YDtcclxuICBib2R5LmFwcGVuZChpbmNvbWVTZWN0aW9uLCB0b3RhbFNwZW5kU2VjdGlvbiwgc2F2aW5nU2VjdGlvbik7XHJcbiAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvbkhlYWRlciwgYm9keSk7XHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBzaWRlYmFyQm90dG9tID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY2FsZW5kYXJTaWRlYmFyIH07XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBCQVNFX1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlnIH07XHJcbiIsImltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgZGVsZXRlQnVkZ2V0ID0gYXN5bmMgKGJ1ZGdldF9pZDogc3RyaW5nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9maW5hbmNpYWwtbWFuYWdlbWVudC9waHAvZGVsZXRlQnVkZ2V0LnBocD9idWRnZXRfaWQ9JHtidWRnZXRfaWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVsZXRlQnVkZ2V0IH07XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG5cclxuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBob21lRGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBjcmVhdGUgYW5kIHBvcHVsYXRlIGxlZnQgYW5kIHJpZ2h0IHBvcnRpb25zIG9mIHRoZSBoZWFkZXJcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBoZWFkZXJMZWZ0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIFwiO1xyXG4gIGhlYWRlclJpZ2h0LnRleHRDb250ZW50ID0gXCJKYWNrIVwiO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID0gXCJob21lLWhlYWRlclwiO1xyXG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiaG9tZS1oZWFkZXIgaG9tZS1oZWFkZXItcmlnaHRcIjtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBmb3IgdGFnIGxpbmUgYmVsb3cgd2VsY29tZSBtZXNzYWdlXHJcbiAgY29uc3QgaG9tZVRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVUYWdMaW5lLnRleHRDb250ZW50ID1cclxuICAgIFwiUmVhZHkgdG8gdGFrZSBjb250cm9sIG9mIHlvdXIgZmluYW5jZXM/IExldCdzIGdldCBzdGFydGVkLlwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFnTGluZSk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnVkZ2V0IH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXMvdHJhbnNhY3Rpb25JbnRlcmZhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi90cmFuc2FjdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gXCIuL2J1ZGdldFNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKTtcclxuY29uc3QgYnVkZ2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtYnRuXCIpO1xyXG5jb25zdCBtYWluTmF2Q29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1idG5cIik7XHJcbmNvbnN0IGJ1ZGdldFNlcnZpY2UgPSBuZXcgQnVkZ2V0U2VydmljZSgpO1xyXG5cclxubWFpbk5hdkNvbnQ/LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG5jb25zdCBmZXRjaFRyYW5zYWN0aW9uRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgY29uZmlnLkJBU0VfVVJMICsgYGZldGNoVHJhbnNhY3Rpb25zLnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UudHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS50cmFuc2FjdGlvbnM7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG9wZW5Ib21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59O1xyXG5cclxuaG9tZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5Ib21lKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlbkJ1ZGdldCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBidWRnZXREYXRhID0gPEJ1ZGdldFtdPmF3YWl0IGJ1ZGdldFNlcnZpY2UuZmV0Y2hCdWRnZXREYXRhKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb25zdCBidWRnZXQgPSBjcmVhdGVCdWRnZXQoYnVkZ2V0RGF0YSk7XHJcbiAgY29udGFpbmVyPy5hcHBlbmRDaGlsZChidWRnZXQpO1xyXG59O1xyXG5cclxuYnVkZ2V0QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgb3BlbkJ1ZGdldCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IG9wZW5UcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB0cmFuc2FjdGlvbkRhdGEgPSA8VHJhbnNhY3Rpb25bXT5hd2FpdCBmZXRjaFRyYW5zYWN0aW9uRGF0YSgpO1xyXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbkRhdGEpO1xyXG4gIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQodHJhbnNhY3Rpb24pO1xyXG59O1xyXG5cclxudHJhbnNhY3Rpb25CdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgb3BlblRyYW5zYWN0aW9uKCk7XHJcbn0pO1xyXG5cclxub3BlbkhvbWUoKTtcclxuXHJcbmV4cG9ydCB7IG9wZW5CdWRnZXQsIG9wZW5UcmFuc2FjdGlvbiB9O1xyXG4iLCJjb25zdCBuYXZiYXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmNvbnN0IG5hdmJhckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5uYXZiYXJMZWZ0LnNyYyA9IFwiLi4vcHVibGljL2Fzc2V0cy9id2xvZ28ucG5nXCI7XHJcbm5hdmJhckxlZnQuY2xhc3NOYW1lID0gXCJuYXZiYXItbGVmdFwiO1xyXG5jb25zdCBuYXZiYXJNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBuYXZiYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm5hdmJhci5hcHBlbmQobmF2YmFyTGVmdCwgbmF2YmFyTWlkLCBuYXZiYXJSaWdodCk7XHJcblxyXG5leHBvcnQgeyBuYXZiYXIgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9jYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXMvdHJhbnNhY3Rpb25JbnRlcmZhY3RcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IG9wZW5UcmFuc2FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy90cmFuc2FjdGlvbi5jc3NcIjtcclxuXHJcbmNvbnN0IHRyYW5zYWN0aW9uRGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWRpYWxvZ1wiKVxyXG4pO1xyXG5jb25zdCB0cmFuc2FjdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm1cIik7XHJcblxyXG5jb25zdCBlZGl0VHJhbnNhY3Rpb25EaWFsb2cgPSA8SFRNTERpYWxvZ0VsZW1lbnQ+KFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10cmFuc2FjdGlvbi1kaWFsb2dcIilcclxuKTtcclxuY29uc3QgY2xvc2VUcmFuc2FjdGlvbkRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwidHJhbnNhY3Rpb24tZGlhbG9nLWNsb3NlXCJcclxuKTtcclxuY29uc3QgY2xvc3RFZGl0VHJhbnNhY3Rpb25EaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImVkaXQtdHJhbnNhY3Rpb24tZGlhbG9nLWNsb3NlXCJcclxuKTtcclxuXHJcbmNsb3NlVHJhbnNhY3Rpb25EaWFsb2c/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgdHJhbnNhY3Rpb25EaWFsb2cuY2xvc2UoKTtcclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVUcmFuc2FjdGlvbiA9ICh0cmFuc2FjdGlvbkRhdGE6IFRyYW5zYWN0aW9uW10pID0+IHtcclxuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdHJhbnNhY3Rpb24uY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvblwiO1xyXG5cclxuICBjb25zdCBjYWxlbmRhciA9IGNyZWF0ZUNhbGVuZGFyKHRyYW5zYWN0aW9uRGF0YSwgXCJUcmFuc2FjdGlvblwiKTtcclxuICB0cmFuc2FjdGlvbi5hcHBlbmRDaGlsZChjYWxlbmRhcik7XHJcblxyXG4gIHJldHVybiB0cmFuc2FjdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGdldFRyYW5zYWN0aW9uRm9ybVZhbHVlcyA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYW1vdW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB0aXRsZSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbC1jdXJyLWRhdGVcIik7XHJcbiAgY29uc3QgdW5wYXJzZWREYXRlOiBzdHJpbmdbXSA9IGNhbGVuZGFySGVhZGVyRGF0ZT8uZGF0YXNldC5kYXRlPy5zcGxpdChcIiBcIikhO1xyXG4gIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzBdKTtcclxuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzFdKTtcclxuICBjb25zdCBzdGFydF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBzdGFydF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZW5kX2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgYW1vdW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVzZXJfaWQsXHJcbiAgICBzdGFydF9kYXRlLFxyXG4gICAgZW5kX2RhdGUsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0VHJhbnNhY3Rpb25Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFtb3VudCA9ICgoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbiAgY29uc3QgdGl0bGUgPSAoKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS10aXRsZVwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRUcmFuc2FjdGlvbkZvcm0gPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChjb25maWcuQkFTRV9VUkwgKyBcImNyZWF0ZVRyYW5zYWN0aW9uLnBocFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2V0VHJhbnNhY3Rpb25Gb3JtVmFsdWVzKCkpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgIHJlc2V0VHJhbnNhY3Rpb25Gb3JtKCk7XHJcbiAgICAgIHRyYW5zYWN0aW9uRGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIG9wZW5UcmFuc2FjdGlvbigpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG50cmFuc2FjdGlvbkZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc3VibWl0VHJhbnNhY3Rpb25Gb3JtKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb24gfTtcclxuIiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmNvbnN0IHRyYW5zYWN0aW9uRGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWRpYWxvZ1wiKVxyXG4pO1xyXG5cclxuY29uc3QgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQgPSAoXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICB0cmFuc2FjdGlvbkRhdGE6IFRyYW5zYWN0aW9uW11cclxuKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb25Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRyYW5zYWN0aW9uQ29tcG9uZW50LmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tY29tcG9uZW50XCI7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyXCI7XHJcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTGVmdC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID1cclxuICAgIFwidHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0IHRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbGVmdFwiO1xyXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJSaWdodC50ZXh0Q29udGVudCA9IFwiQW1vdW50XCI7XHJcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID1cclxuICAgIFwidHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1yaWdodCB0cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyLXJpZ2h0XCI7XHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjb25zdCBjb21wb25lbnREYXRhID0gdHJhbnNhY3Rpb25EYXRhLmZpbHRlcihcclxuICAgIChidWRnZXRJdGVtKSA9PiBidWRnZXRJdGVtLmNhdGVnb3J5ID09PSB0aXRsZVxyXG4gICk7XHJcblxyXG4gIGNvbXBvbmVudERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChyb3coaXRlbSkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tY29tcG9uZW50LW1haW5cIjtcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXIuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtZm9vdGVyXCI7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25Gb3JtU2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PihcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICAgKTtcclxuICAgIHRyYW5zYWN0aW9uRm9ybVNlbGVjdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgdHJhbnNhY3Rpb25EaWFsb2c/LnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcblxyXG4gIHRyYW5zYWN0aW9uQ29tcG9uZW50LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIHJldHVybiB0cmFuc2FjdGlvbkNvbXBvbmVudDtcclxufTtcclxuXHJcbmNvbnN0IHJvdyA9ICh0cmFuc2FjdGlvbkRhdGE6IFRyYW5zYWN0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2luZ2xlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaW5nbGVSb3cuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtaXRlbVwiO1xyXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICBkZWxldGVJY29uLmNsYXNzTmFtZSA9XHJcbiAgICBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgdHJhbnNhY3Rpb24tY29tcG9uZW50LWl0ZW0tZGVsLWljb25cIjtcclxuICBjb25zdCByb3dNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dNYWluLmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tY29tcG9uZW50LXJvd1wiO1xyXG4gIGNvbnN0IHJvd0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd0xlZnQuY2xhc3NOYW1lID1cclxuICAgIFwidHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0IHRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3ctbGVmdC1pbnB1dFwiO1xyXG4gIHJvd0xlZnQudGV4dENvbnRlbnQgPSB0cmFuc2FjdGlvbkRhdGEudGl0bGU7XHJcbiAgY29uc3Qgcm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd1JpZ2h0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1yaWdodFwiO1xyXG4gIHJvd1JpZ2h0LnRleHRDb250ZW50ID0gYEtTaHMuICR7dHJhbnNhY3Rpb25EYXRhLmFtb3VudH1gO1xyXG5cclxuICByb3dNYWluLmFwcGVuZChkZWxldGVJY29uLCByb3dMZWZ0LCByb3dSaWdodCk7XHJcbiAgc2luZ2xlUm93LmFwcGVuZChyb3dNYWluKTtcclxuICByZXR1cm4gc2luZ2xlUm93O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=