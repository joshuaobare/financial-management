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

/***/ "./src/budget.ts":
/*!***********************!*\
  !*** ./src/budget.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   budgetFormDialog: () => (/* binding */ budgetFormDialog),
/* harmony export */   createBudgetModule: () => (/* binding */ createBudgetModule),
/* harmony export */   editBudgetFormDialog: () => (/* binding */ editBudgetFormDialog),
/* harmony export */   populateEditBudgetForm: () => (/* binding */ populateEditBudgetForm),
/* harmony export */   resetBudgetForm: () => (/* binding */ resetBudgetForm)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
/* harmony import */ var _services_BudgetService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/BudgetService */ "./src/services/BudgetService.ts");
/* harmony import */ var _services_TransactionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/TransactionService */ "./src/services/TransactionService.ts");
/* harmony import */ var _helpers_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/Helper */ "./src/helpers/Helper.ts");




const budgetFormDialog = (document.getElementById("budget-dialog"));
const budgetForm = document.getElementById("budget-form");
const editBudgetForm = (document.getElementById("edit-budget-form"));
const budgetDialogCloseBtn = document.getElementById("budget-dialog-close");
const editBudgetDialogCloseBtn = document.getElementById("edit-budget-dialog-close");
const editBudgetFormDialog = (document.getElementById("edit-budget-dialog"));
const budgetService = new _services_BudgetService__WEBPACK_IMPORTED_MODULE_1__.BudgetService();
const transactionService = new _services_TransactionService__WEBPACK_IMPORTED_MODULE_2__.TransactionService();
const helper = new _helpers_Helper__WEBPACK_IMPORTED_MODULE_3__.Helper();
const createBudgetModule = (budgetData) => {
    const budget = document.createElement("div");
    budget.className = "budget";
    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(budgetData, "Budget");
    const budgetSidebar = document.createElement("div");
    budget.appendChild(calendar);
    budget.appendChild(budgetSidebar);
    return budget;
};
// this function gathers and values from the budget form for use during submission
const getBudgetFormValues = () => {
    const category = (document.getElementById("budget-form-category-select")).value;
    const amount = (document.getElementById("budget-form-amount")).value;
    const title = document.getElementById("budget-form-title")
        .value;
    const description = (document.getElementById("budget-form-description")).value;
    const user_id = localStorage.getItem("user_id");
    // the calendar header node is passed into the helper function to get start and end dates
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const { start_date, end_date } = helper.getMonthStartAndEndDates(calendarHeaderDate);
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
// this function is ran after successful budget creation
const resetBudgetForm = () => {
    const amount = ((document.getElementById("budget-form-amount")).value = "");
    const title = ((document.getElementById("budget-form-title")).value = "");
    const description = ((document.getElementById("budget-form-description")).value = "");
};
// this function populates the edit form fields with the record
// that needs to be edited
const populateEditBudgetForm = (budgetData) => {
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
// this function gathers and values from the edit budget form for use while
// updating a budget record
const getEditBudgetFormValues = () => {
    const category = (document.getElementById("edit-budget-form-category-select")).value;
    const amount = (document.getElementById("edit-budget-form-amount")).value;
    const title = (document.getElementById("edit-budget-form-title")).value;
    const description = (document.getElementById("edit-budget-form-description")).value;
    const budget_id = (document.getElementById("edit-budget-form-budget-id")).value;
    const user_id = localStorage.getItem("user_id").toString();
    // the calendar header node is passed into the helper function to get start and end dates
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const { start_date, end_date } = helper.getMonthStartAndEndDates(calendarHeaderDate);
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
budgetForm === null || budgetForm === void 0 ? void 0 : budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const budgetFormValues = getBudgetFormValues();
    const transactionFormValues = Object.assign(Object.assign({}, getBudgetFormValues()), { amount: 0 });
    budgetService.createBudget(budgetFormValues);
    transactionService.createTransaction(transactionFormValues);
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
/* harmony import */ var _services_BudgetService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/BudgetService */ "./src/services/BudgetService.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");


const budgetService = new _services_BudgetService__WEBPACK_IMPORTED_MODULE_0__.BudgetService();
const createBudgetComponent = (title, budgetData) => {
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
        (0,_budget__WEBPACK_IMPORTED_MODULE_1__.populateEditBudgetForm)(budgetData);
        _budget__WEBPACK_IMPORTED_MODULE_1__.editBudgetFormDialog.show();
    });
    deleteIcon.addEventListener("click", () => {
        budgetService.deleteBudget(budgetData.budget_id);
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
/* harmony import */ var _helpers_FinanceCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/FinanceCalculator */ "./src/helpers/FinanceCalculator.ts");

const calendarSidebar = (financialData) => {
    const sidebar = document.createElement("div");
    sidebar.className = "cal-sidebar";
    sidebar.append(sidebarTop(financialData), sidebarBottom(financialData));
    return sidebar;
};
const sidebarTop = (financialData) => {
    const financeCalculator = new _helpers_FinanceCalculator__WEBPACK_IMPORTED_MODULE_0__["default"](financialData);
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

/***/ "./src/helpers/FinanceCalculator.ts":
/*!******************************************!*\
  !*** ./src/helpers/FinanceCalculator.ts ***!
  \******************************************/
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

/***/ "./src/helpers/Helper.ts":
/*!*******************************!*\
  !*** ./src/helpers/Helper.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Helper: () => (/* binding */ Helper)
/* harmony export */ });
class Helper {
    constructor() {
        // this function takes the month and year in the calender header and returns
        // the month's start and end date
        this.getMonthStartAndEndDates = (calendarHeaderDate) => {
            var _a;
            const unparsedDate = (_a = calendarHeaderDate === null || calendarHeaderDate === void 0 ? void 0 : calendarHeaderDate.dataset.date) === null || _a === void 0 ? void 0 : _a.split(" ");
            const month = parseInt(unparsedDate[0]);
            const year = parseInt(unparsedDate[1]);
            // Create a new Date object for the start date and set it to the first day of the specified month and year
            const start_date_obj = new Date();
            start_date_obj.setFullYear(year, month, 1);
            // Create a new Date object for the end date and set it to the last day of the specified month and year
            const end_date_obj = new Date();
            end_date_obj.setFullYear(year, month + 1, 0);
            // Retrieve the days in YYYY-MM-DD format
            const start_date = start_date_obj.toISOString().split("T")[0];
            const end_date = end_date_obj.toISOString().split("T")[0];
            return { start_date, end_date };
        };
    }
}



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
/* harmony import */ var _services_BudgetService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/BudgetService */ "./src/services/BudgetService.ts");
/* harmony import */ var _services_TransactionService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/TransactionService */ "./src/services/TransactionService.ts");
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
const budgetService = new _services_BudgetService__WEBPACK_IMPORTED_MODULE_4__.BudgetService();
const transactionService = new _services_TransactionService__WEBPACK_IMPORTED_MODULE_5__.TransactionService();
mainNavCont === null || mainNavCont === void 0 ? void 0 : mainNavCont.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar);
const openHome = () => {
    const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.appendChild(home);
};
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", (e) => {
    openHome();
});
const openBudget = () => __awaiter(void 0, void 0, void 0, function* () {
    const budgetData = yield budgetService.fetchBudget();
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    const budget = (0,_budget__WEBPACK_IMPORTED_MODULE_1__.createBudgetModule)(budgetData);
    container === null || container === void 0 ? void 0 : container.appendChild(budget);
});
budgetBtn === null || budgetBtn === void 0 ? void 0 : budgetBtn.addEventListener("click", (e) => {
    openBudget();
});
const openTransaction = () => __awaiter(void 0, void 0, void 0, function* () {
    const transactionData = (yield transactionService.fetchTransactions());
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    const transaction = (0,_transaction__WEBPACK_IMPORTED_MODULE_3__.createTransactionModule)(transactionData);
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

/***/ "./src/services/BudgetService.ts":
/*!***************************************!*\
  !*** ./src/services/BudgetService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BudgetService: () => (/* binding */ BudgetService)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../budget */ "./src/budget.ts");
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
        this.fetchBudget = () => __awaiter(this, void 0, void 0, function* () {
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
        this.createBudget = (budgetFormValues) => __awaiter(this, void 0, void 0, function* () {
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
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + "updateBudget.php", {
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
        this.deleteBudget = (budget_id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + `deleteBudget.php?budget_id=${budget_id}`, {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                });
                const response = yield request.json();
                if (response.message) {
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

/***/ "./src/services/TransactionService.ts":
/*!********************************************!*\
  !*** ./src/services/TransactionService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transaction */ "./src/transaction.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class TransactionService {
    constructor() {
        this.fetchTransactions = () => __awaiter(this, void 0, void 0, function* () {
            const userId = localStorage.getItem("user_id");
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + `fetchTransactions.php?user_id=${userId}`, {
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
        this.createTransaction = (transactionFormValues) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + "createTransaction.php", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(transactionFormValues),
                });
                const response = yield request.json();
                if (response.message) {
                    (0,_transaction__WEBPACK_IMPORTED_MODULE_1__.resetTransactionForm)();
                    _transaction__WEBPACK_IMPORTED_MODULE_1__.transactionFormDialog.close();
                    (0,_index__WEBPACK_IMPORTED_MODULE_2__.openTransaction)();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        this.updateTransaction = (transactionData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL + "updateTransaction.php", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(transactionData),
                });
                const response = yield request.json();
                if (response.message) {
                    _transaction__WEBPACK_IMPORTED_MODULE_1__.editTransactionFormDialog.close();
                    (0,_index__WEBPACK_IMPORTED_MODULE_2__.openTransaction)();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        this.deleteTransaction = (transaction_id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(_config__WEBPACK_IMPORTED_MODULE_0__.config.BASE_URL +
                    `deleteTransaction.php?transaction_id=${transaction_id}`, {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                });
                const response = yield request.json();
                if (response.message) {
                    (0,_index__WEBPACK_IMPORTED_MODULE_2__.openTransaction)();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}



/***/ }),

/***/ "./src/transaction.ts":
/*!****************************!*\
  !*** ./src/transaction.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTransactionModule: () => (/* binding */ createTransactionModule),
/* harmony export */   editTransactionFormDialog: () => (/* binding */ editTransactionFormDialog),
/* harmony export */   populateEditTransactionForm: () => (/* binding */ populateEditTransactionForm),
/* harmony export */   resetTransactionForm: () => (/* binding */ resetTransactionForm),
/* harmony export */   transactionFormDialog: () => (/* binding */ transactionFormDialog)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
/* harmony import */ var _styles_transaction_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/transaction.css */ "./styles/transaction.css");
/* harmony import */ var _services_TransactionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/TransactionService */ "./src/services/TransactionService.ts");
/* harmony import */ var _helpers_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/Helper */ "./src/helpers/Helper.ts");




const transactionFormDialog = (document.getElementById("transaction-dialog"));
const transactionForm = (document.getElementById("transaction-form"));
const editTransactionFormDialog = (document.getElementById("edit-transaction-dialog"));
const editTransactionForm = (document.getElementById("edit-transaction-form"));
const transactionDialogCloseBtn = document.getElementById("transaction-dialog-close");
const editTransactionDialogCloseBtn = document.getElementById("edit-transaction-dialog-close");
const transactionService = new _services_TransactionService__WEBPACK_IMPORTED_MODULE_2__.TransactionService();
const helper = new _helpers_Helper__WEBPACK_IMPORTED_MODULE_3__.Helper();
const createTransactionModule = (transactionData) => {
    const transaction = document.createElement("div");
    transaction.className = "transaction";
    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(transactionData, "Transaction");
    transaction.appendChild(calendar);
    return transaction;
};
const getTransactionFormValues = () => {
    const category = (document.getElementById("transaction-form-category-select")).value;
    const amount = (document.getElementById("transaction-form-amount")).value;
    const title = (document.getElementById("transaction-form-title")).value;
    const description = (document.getElementById("transaction-form-description")).value;
    const user_id = localStorage.getItem("user_id");
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const { start_date, end_date } = helper.getMonthStartAndEndDates(calendarHeaderDate);
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
// this function gathers and values from the edit transaction form for use while
// updating a transaction record
const getEditTransactionFormValues = () => {
    const category = (document.getElementById("edit-transaction-form-category-select")).value;
    const amount = (document.getElementById("edit-transaction-form-amount")).value;
    const title = (document.getElementById("edit-transaction-form-title")).value;
    const description = (document.getElementById("edit-transaction-form-description")).value;
    const transaction_id = (document.getElementById("edit-transaction-form-transaction-id")).value;
    const user_id = localStorage.getItem("user_id").toString();
    // the calendar header node is passed into the helper function to get start and end dates
    const calendarHeaderDate = document.getElementById("cal-curr-date");
    const { start_date, end_date } = helper.getMonthStartAndEndDates(calendarHeaderDate);
    return {
        category,
        amount,
        title,
        description,
        user_id,
        start_date,
        end_date,
        transaction_id,
    };
};
// this function populates the edit form fields with the record
// that needs to be edited
const populateEditTransactionForm = (transactionData) => {
    const category = (document.getElementById("edit-transaction-form-category-select"));
    category.value = transactionData.category;
    const amount = (document.getElementById("edit-transaction-form-amount"));
    amount.value = transactionData.amount.toString();
    const title = (document.getElementById("edit-transaction-form-title"));
    title.value = transactionData.title;
    const description = (document.getElementById("edit-transaction-form-description"));
    description.value = transactionData.description;
    const startDate = (document.getElementById("edit-transaction-form-start-date"));
    startDate.value = transactionData.start_date.toString();
    const endDate = (document.getElementById("edit-transaction-form-end-date"));
    endDate.value = transactionData.end_date.toString();
    const transactionId = (document.getElementById("edit-transaction-form-transaction-id"));
    transactionId.value = transactionData.transaction_id.toString();
};
const resetTransactionForm = () => {
    const amount = ((document.getElementById("transaction-form-amount")).value = "");
    const title = ((document.getElementById("transaction-form-title")).value = "");
    const description = ((document.getElementById("transaction-form-description")).value = "");
};
transactionForm === null || transactionForm === void 0 ? void 0 : transactionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const transactionFormValues = getTransactionFormValues();
    transactionService.createTransaction(transactionFormValues);
});
editTransactionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const transactionData = Object.assign(Object.assign({}, getEditTransactionFormValues()), { created_at: null });
    transactionService.updateTransaction(transactionData);
});
transactionDialogCloseBtn === null || transactionDialogCloseBtn === void 0 ? void 0 : transactionDialogCloseBtn.addEventListener("click", () => {
    transactionFormDialog.close();
});
editTransactionDialogCloseBtn === null || editTransactionDialogCloseBtn === void 0 ? void 0 : editTransactionDialogCloseBtn.addEventListener("click", () => {
    editTransactionFormDialog.close();
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
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction */ "./src/transaction.ts");
/* harmony import */ var _services_TransactionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/TransactionService */ "./src/services/TransactionService.ts");


const transactionService = new _services_TransactionService__WEBPACK_IMPORTED_MODULE_1__.TransactionService();
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
        _transaction__WEBPACK_IMPORTED_MODULE_0__.transactionFormDialog === null || _transaction__WEBPACK_IMPORTED_MODULE_0__.transactionFormDialog === void 0 ? void 0 : _transaction__WEBPACK_IMPORTED_MODULE_0__.transactionFormDialog.show();
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
    rowMain.addEventListener("click", () => {
        (0,_transaction__WEBPACK_IMPORTED_MODULE_0__.populateEditTransactionForm)(transactionData);
        _transaction__WEBPACK_IMPORTED_MODULE_0__.editTransactionFormDialog.show();
    });
    deleteIcon.addEventListener("click", () => {
        transactionService.deleteTransaction(transactionData.transaction_id);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRW9DOzs7Ozs7O1VDMUZ0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy90cmFuc2FjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdHJhbnNhY3Rpb24uY3NzPzBlMDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9idWRnZXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhclNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9GaW5hbmNlQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0J1ZGdldFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1RyYW5zYWN0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zYWN0aW9uQ29tcG9uZW50LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRyYW5zYWN0aW9uLWNvbXBvbmVudCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3csXHJcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWl0ZW0tZGVsLWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbGVmdCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbWlkLFxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWhlYWRlci1yaWdodCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzhlOTk5ZTtcclxufVxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0IHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0LWlucHV0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3ctbWlkIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1yaWdodCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRSQU5TQUNUSU9OIERJQUxPRyAqL1xyXG4udHJhbnNhY3Rpb24tZGlhbG9nLWNvbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnRyYW5zYWN0aW9uLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1mb3JtLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbSA+IGxhYmVsIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLnRyYW5zYWN0aW9uLWZvcm0taXRlbS1pbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvdHJhbnNhY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudHJhbnNhY3Rpb24tY29tcG9uZW50IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LFxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWl0ZW0tZGVsLWljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyLWxlZnQge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbWlkLFxcclxcbi50cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyLXJpZ2h0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjb2xvcjogIzhlOTk5ZTtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3ctbGVmdCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1taWQge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3ctcmlnaHQge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zYWN0aW9uLWNvbXBvbmVudC1tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNhY3Rpb24tY29tcG9uZW50LWZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUUkFOU0FDVElPTiBESUFMT0cgKi9cXHJcXG4udHJhbnNhY3Rpb24tZGlhbG9nLWNvbnQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLnRyYW5zYWN0aW9uLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2FjdGlvbi1mb3JtLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi50cmFuc2FjdGlvbi1mb3JtLWl0ZW0gPiBsYWJlbCB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcbi50cmFuc2FjdGlvbi1mb3JtLWl0ZW0taW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHJhbnNhY3Rpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHJhbnNhY3Rpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9CdWRnZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1RyYW5zYWN0aW9uU2VydmljZVwiO1xyXG5pbXBvcnQgeyBIZWxwZXIgfSBmcm9tIFwiLi9oZWxwZXJzL0hlbHBlclwiO1xyXG5cclxuY29uc3QgYnVkZ2V0Rm9ybURpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nXCIpXHJcbik7XHJcbmNvbnN0IGJ1ZGdldEZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm1cIik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtXCIpXHJcbik7XHJcbmNvbnN0IGJ1ZGdldERpYWxvZ0Nsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nLWNsb3NlXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImVkaXQtYnVkZ2V0LWRpYWxvZy1jbG9zZVwiXHJcbik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtRGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWRpYWxvZ1wiKVxyXG4pO1xyXG5jb25zdCBidWRnZXRTZXJ2aWNlID0gbmV3IEJ1ZGdldFNlcnZpY2UoKTtcclxuY29uc3QgdHJhbnNhY3Rpb25TZXJ2aWNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xyXG5jb25zdCBoZWxwZXIgPSBuZXcgSGVscGVyKCk7XHJcblxyXG5jb25zdCBjcmVhdGVCdWRnZXRNb2R1bGUgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0W10pOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgYnVkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXQuY2xhc3NOYW1lID0gXCJidWRnZXRcIjtcclxuICBjb25zdCBjYWxlbmRhciA9IGNyZWF0ZUNhbGVuZGFyKGJ1ZGdldERhdGEsIFwiQnVkZ2V0XCIpO1xyXG4gIGNvbnN0IGJ1ZGdldFNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1ZGdldC5hcHBlbmRDaGlsZChjYWxlbmRhcik7XHJcbiAgYnVkZ2V0LmFwcGVuZENoaWxkKGJ1ZGdldFNpZGViYXIpO1xyXG4gIHJldHVybiBidWRnZXQ7XHJcbn07XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIGdhdGhlcnMgYW5kIHZhbHVlcyBmcm9tIHRoZSBidWRnZXQgZm9ybSBmb3IgdXNlIGR1cmluZyBzdWJtaXNzaW9uXHJcbmNvbnN0IGdldEJ1ZGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBhbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB0aXRsZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLXRpdGxlXCIpKVxyXG4gICAgLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG5cclxuICAvLyB0aGUgY2FsZW5kYXIgaGVhZGVyIG5vZGUgaXMgcGFzc2VkIGludG8gdGhlIGhlbHBlciBmdW5jdGlvbiB0byBnZXQgc3RhcnQgYW5kIGVuZCBkYXRlc1xyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB7IHN0YXJ0X2RhdGUsIGVuZF9kYXRlIH0gPVxyXG4gICAgaGVscGVyLmdldE1vbnRoU3RhcnRBbmRFbmREYXRlcyhjYWxlbmRhckhlYWRlckRhdGUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiBpcyByYW4gYWZ0ZXIgc3VjY2Vzc2Z1bCBidWRnZXQgY3JlYXRpb25cclxuY29uc3QgcmVzZXRCdWRnZXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFtb3VudCA9ICgoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZSA9IFwiXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbn07XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHBvcHVsYXRlcyB0aGUgZWRpdCBmb3JtIGZpZWxkcyB3aXRoIHRoZSByZWNvcmRcclxuLy8gdGhhdCBuZWVkcyB0byBiZSBlZGl0ZWRcclxuY29uc3QgcG9wdWxhdGVFZGl0QnVkZ2V0Rm9ybSA9IChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApO1xyXG4gIGNhdGVnb3J5LnZhbHVlID0gYnVkZ2V0RGF0YS5jYXRlZ29yeTtcclxuICBjb25zdCBhbW91bnQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKTtcclxuICBhbW91bnQudmFsdWUgPSBidWRnZXREYXRhLmFtb3VudC50b1N0cmluZygpO1xyXG4gIGNvbnN0IHRpdGxlID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKTtcclxuICB0aXRsZS52YWx1ZSA9IGJ1ZGdldERhdGEudGl0bGU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSA8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gYnVkZ2V0RGF0YS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBzdGFydERhdGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tc3RhcnQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgc3RhcnREYXRlLnZhbHVlID0gYnVkZ2V0RGF0YS5zdGFydF9kYXRlLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1lbmQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgZW5kRGF0ZS52YWx1ZSA9IGJ1ZGdldERhdGEuZW5kX2RhdGUudG9TdHJpbmcoKTtcclxuICBjb25zdCBidWRnZXRJZCA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1idWRnZXQtaWRcIilcclxuICApO1xyXG4gIGJ1ZGdldElkLnZhbHVlID0gYnVkZ2V0RGF0YS5idWRnZXRfaWQudG9TdHJpbmcoKTtcclxufTtcclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gZ2F0aGVycyBhbmQgdmFsdWVzIGZyb20gdGhlIGVkaXQgYnVkZ2V0IGZvcm0gZm9yIHVzZSB3aGlsZVxyXG4vLyB1cGRhdGluZyBhIGJ1ZGdldCByZWNvcmRcclxuY29uc3QgZ2V0RWRpdEJ1ZGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgdGl0bGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYnVkZ2V0X2lkID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1idWRnZXQtaWRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpIS50b1N0cmluZygpO1xyXG5cclxuICAvLyB0aGUgY2FsZW5kYXIgaGVhZGVyIG5vZGUgaXMgcGFzc2VkIGludG8gdGhlIGhlbHBlciBmdW5jdGlvbiB0byBnZXQgc3RhcnQgYW5kIGVuZCBkYXRlc1xyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB7IHN0YXJ0X2RhdGUsIGVuZF9kYXRlIH0gPVxyXG4gICAgaGVscGVyLmdldE1vbnRoU3RhcnRBbmRFbmREYXRlcyhjYWxlbmRhckhlYWRlckRhdGUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICAgIGJ1ZGdldF9pZCxcclxuICB9O1xyXG59O1xyXG5cclxuYnVkZ2V0Rm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBidWRnZXRGb3JtVmFsdWVzID0gZ2V0QnVkZ2V0Rm9ybVZhbHVlcygpO1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uRm9ybVZhbHVlcyA9IHsgLi4uZ2V0QnVkZ2V0Rm9ybVZhbHVlcygpLCBhbW91bnQ6IDAgfTtcclxuICBidWRnZXRTZXJ2aWNlLmNyZWF0ZUJ1ZGdldChidWRnZXRGb3JtVmFsdWVzKTtcclxuICB0cmFuc2FjdGlvblNlcnZpY2UuY3JlYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25Gb3JtVmFsdWVzKTtcclxufSk7XHJcblxyXG5lZGl0QnVkZ2V0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBidWRnZXREYXRhID0geyAuLi5nZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcygpLCBjcmVhdGVkX2F0OiBudWxsIH07XHJcbiAgYnVkZ2V0U2VydmljZS51cGRhdGVCdWRnZXQoYnVkZ2V0RGF0YSk7XHJcbn0pO1xyXG5cclxuYnVkZ2V0RGlhbG9nQ2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYnVkZ2V0Rm9ybURpYWxvZyEuY2xvc2UoKTtcclxufSk7XHJcblxyXG5lZGl0QnVkZ2V0RGlhbG9nQ2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZWRpdEJ1ZGdldEZvcm1EaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVCdWRnZXRNb2R1bGUsXHJcbiAgcmVzZXRCdWRnZXRGb3JtLFxyXG4gIGJ1ZGdldEZvcm1EaWFsb2csXHJcbiAgZWRpdEJ1ZGdldEZvcm1EaWFsb2csXHJcbiAgcG9wdWxhdGVFZGl0QnVkZ2V0Rm9ybSxcclxufTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9CdWRnZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgYnVkZ2V0Rm9ybURpYWxvZyxcclxuICBwb3B1bGF0ZUVkaXRCdWRnZXRGb3JtLFxyXG4gIGVkaXRCdWRnZXRGb3JtRGlhbG9nLFxyXG59IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5cclxuY29uc3QgYnVkZ2V0U2VydmljZSA9IG5ldyBCdWRnZXRTZXJ2aWNlKCk7XHJcbmNvbnN0IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCA9ICh0aXRsZTogc3RyaW5nLCBidWRnZXREYXRhOiBCdWRnZXRbXSkgPT4ge1xyXG4gIGNvbnN0IGJ1ZGdldENvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0Q29tcG9uZW50LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWNvbXBvbmVudFwiO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWhlYWRlclwiO1xyXG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckxlZnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICBoZWFkZXJMZWZ0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1sZWZ0IGJ1ZGdldC1oZWFkZXItbGVmdFwiO1xyXG4gIGNvbnN0IGhlYWRlck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTWlkLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1taWQgYnVkZ2V0LWhlYWRlci1taWRcIjtcclxuICBoZWFkZXJNaWQudGV4dENvbnRlbnQgPSBcIlBsYW5uZWRcIjtcclxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyUmlnaHQudGV4dENvbnRlbnQgPSBcIlJlY2VpdmVkXCI7XHJcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0IGJ1ZGdldC1oZWFkZXItcmlnaHRcIjtcclxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckxlZnQsIGhlYWRlck1pZCwgaGVhZGVyUmlnaHQpO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbXBvbmVudERhdGEgPSBidWRnZXREYXRhLmZpbHRlcihcclxuICAgIChidWRnZXRJdGVtKSA9PiBidWRnZXRJdGVtLmNhdGVnb3J5ID09PSB0aXRsZVxyXG4gICk7XHJcbiAgY29tcG9uZW50RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBtYWluLmFwcGVuZChyb3coaXRlbSkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LW1haW5cIjtcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXIuY2xhc3NOYW1lID0gXCJidWRnZXQtZm9vdGVyXCI7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYnVkZ2V0Rm9ybVNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD4oXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgICApO1xyXG4gICAgYnVkZ2V0Rm9ybVNlbGVjdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgYnVkZ2V0Rm9ybURpYWxvZyEuc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gIGJ1ZGdldENvbXBvbmVudC5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpO1xyXG5cclxuICByZXR1cm4gYnVkZ2V0Q29tcG9uZW50O1xyXG59O1xyXG5cclxuY29uc3Qgcm93ID0gKGJ1ZGdldERhdGE6IEJ1ZGdldCkgPT4ge1xyXG4gIGNvbnN0IHNpbmdsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2luZ2xlUm93LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWl0ZW1cIjtcclxuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XHJcbiAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgYnVkZ2V0LWl0ZW0tZGVsLWljb25cIjtcclxuICBjb25zdCByb3dNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dNYWluLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvd1wiO1xyXG4gIGNvbnN0IHJvd0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd0xlZnQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LWxlZnQgYnVkZ2V0LXJvdy1sZWZ0LWlucHV0XCI7XHJcbiAgcm93TGVmdC50ZXh0Q29udGVudCA9IGJ1ZGdldERhdGEudGl0bGU7XHJcbiAgY29uc3Qgcm93TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dNaWQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LW1pZFwiO1xyXG4gIHJvd01pZC50ZXh0Q29udGVudCA9IGBLU2hzLiAke2J1ZGdldERhdGEuYW1vdW50fWA7XHJcbiAgY29uc3Qgcm93UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd1JpZ2h0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1yaWdodFwiO1xyXG4gIHJvd1JpZ2h0LnRleHRDb250ZW50ID0gXCJLU2hzLiAwLjAwXCI7XHJcblxyXG4gIHJvd01haW4uYXBwZW5kKHJvd0xlZnQsIHJvd01pZCwgcm93UmlnaHQpO1xyXG5cclxuICByb3dNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwb3B1bGF0ZUVkaXRCdWRnZXRGb3JtKGJ1ZGdldERhdGEpO1xyXG4gICAgZWRpdEJ1ZGdldEZvcm1EaWFsb2cuc2hvdygpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1ZGdldFNlcnZpY2UuZGVsZXRlQnVkZ2V0KGJ1ZGdldERhdGEuYnVkZ2V0X2lkKTtcclxuICB9KTtcclxuXHJcbiAgc2luZ2xlUm93LmFwcGVuZChkZWxldGVJY29uLCByb3dNYWluKTtcclxuXHJcbiAgcmV0dXJuIHNpbmdsZVJvdztcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCdWRnZXRDb21wb25lbnQgfSBmcm9tIFwiLi9idWRnZXRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnVkZ2V0LCBpc0J1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBpc1RyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhclNpZGViYXIgfSBmcm9tIFwiLi9jYWxlbmRhclNpZGViYXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi90cmFuc2FjdGlvbkNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FsZW5kYXIgPSAoXHJcbiAgZmluYW5jaWFsRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdLFxyXG4gIHBhcmVudDogc3RyaW5nXHJcbik6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhci5jbGFzc05hbWUgPSBcImNhbFwiO1xyXG4gIGNvbnN0IGNhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNhbEhlYWRlciA9IGNhbGVuZGFySGVhZGVyKFxyXG4gICAgY2FsQm9keSxcclxuICAgIGRhdGUsXHJcbiAgICB5ZWFyLFxyXG4gICAgbW9udGgsXHJcbiAgICBmaW5hbmNpYWxEYXRhLFxyXG4gICAgcGFyZW50XHJcbiAgKTtcclxuICBjYWxCb2R5LmlkID0gXCJjYWwtYm9keS1jb250XCI7XHJcbiAgcmVuZGVyQ2FsZW5kYXJCb2R5KGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBmaW5hbmNpYWxEYXRhLCBwYXJlbnQpO1xyXG4gIGNhbGVuZGFyLmFwcGVuZChjYWxIZWFkZXIsIGNhbEJvZHkpO1xyXG5cclxuICByZXR1cm4gY2FsZW5kYXI7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhckRhdGUgPSAoXHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlOiBIVE1MRGl2RWxlbWVudCxcclxuICBkYXRlOiBEYXRlLFxyXG4gIHllYXI6IG51bWJlcixcclxuICBtb250aDogbnVtYmVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IG1vbnRoTmFtZXMgPSBbXHJcbiAgICBcIkphbnVhcnlcIixcclxuICAgIFwiRmVicnVhcnlcIixcclxuICAgIFwiTWFyY2hcIixcclxuICAgIFwiQXByaWxcIixcclxuICAgIFwiTWF5XCIsXHJcbiAgICBcIkp1bmVcIixcclxuICAgIFwiSnVseVwiLFxyXG4gICAgXCJBdWd1c3RcIixcclxuICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICBcIk9jdG9iZXJcIixcclxuICAgIFwiTm92ZW1iZXJcIixcclxuICAgIFwiRGVjZW1iZXJcIixcclxuICBdO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS50ZXh0Q29udGVudCA9IGAke21vbnRoTmFtZXNbbW9udGhdfSAke3llYXJ9YDtcclxuICBjYWxlbmRhckhlYWRlckRhdGUuZGF0YXNldC5kYXRlID0gYCR7bW9udGh9ICR7eWVhcn1gO1xyXG59O1xyXG5cclxuY29uc3QgY2FsZW5kYXJIZWFkZXIgPSAoXHJcbiAgY2FsQm9keTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10sXHJcbiAgcGFyZW50OiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFySGVhZGVyLmNsYXNzTmFtZSA9IFwiY2FsLWhlYWRlclwiO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5jbGFzc05hbWUgPSBcImNhbC1jdXJyLWRhdGVcIjtcclxuICBjYWxlbmRhckhlYWRlckRhdGUuaWQgPSBcImNhbC1jdXJyLWRhdGVcIjtcclxuICByZW5kZXJDYWxlbmRhckRhdGUoY2FsZW5kYXJIZWFkZXJEYXRlLCBkYXRlLCB5ZWFyLCBtb250aCk7XHJcbiAgY29uc3QgY2FsZW5kYXJOYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjYWxlbmRhclByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjYWxlbmRhclByZXYudGV4dENvbnRlbnQgPSBcImNoZXZyb25fbGVmdFwiO1xyXG4gIGNhbGVuZGFyUHJldi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgY2FsLWNoZXZyb24tYnRuXCI7XHJcbiAgY2FsZW5kYXJQcmV2LmlkID0gXCJjYWwtY2hldnJvbi1wcmV2XCI7XHJcbiAgY29uc3QgY2FsZW5kYXJOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY2FsZW5kYXJOZXh0LnRleHRDb250ZW50ID0gXCJjaGV2cm9uX3JpZ2h0XCI7XHJcbiAgY2FsZW5kYXJOZXh0LmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBjYWwtY2hldnJvbi1idG5cIjtcclxuICBjYWxlbmRhck5leHQuaWQgPSBcImNhbC1jaGV2cm9uLW5leHRcIjtcclxuICBjYWxlbmRhck5hdmlnYXRpb24uYXBwZW5kKGNhbGVuZGFyUHJldiwgY2FsZW5kYXJOZXh0KTtcclxuICBjYWxlbmRhckhlYWRlci5hcHBlbmQoY2FsZW5kYXJIZWFkZXJEYXRlLCBjYWxlbmRhck5hdmlnYXRpb24pO1xyXG5cclxuICBjb25zdCBjaGV2cm9ucyA9IFtjYWxlbmRhck5leHQsIGNhbGVuZGFyUHJldl07XHJcblxyXG4gIHJlbmRlckNhbGVuZGFyRGF0ZShjYWxlbmRhckhlYWRlckRhdGUsIGRhdGUsIHllYXIsIG1vbnRoKTtcclxuXHJcbiAgY2hldnJvbnMuZm9yRWFjaCgoY2hldnJvbikgPT4ge1xyXG4gICAgY2hldnJvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtb250aCA9IGNoZXZyb24uaWQgPT09IFwiY2FsLWNoZXZyb24tcHJldlwiID8gbW9udGggLSAxIDogbW9udGggKyAxO1xyXG4gICAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgICAvLyBTZXQgdGhlIGRhdGUgdG8gdGhlIGZpcnN0IGRheSBvZiB0aGVcclxuICAgICAgICAvLyBtb250aCB3aXRoIHRoZSBuZXcgeWVhclxyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgbmV3IERhdGUoKS5nZXREYXRlKCkpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIHllYXIgdG8gdGhlIG5ldyB5ZWFyXHJcbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBtb250aCB0byB0aGUgbmV3IG1vbnRoXHJcbiAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyQ2FsZW5kYXJEYXRlKGNhbGVuZGFySGVhZGVyRGF0ZSwgZGF0ZSwgeWVhciwgbW9udGgpO1xyXG4gICAgICByZW5kZXJDYWxlbmRhckJvZHkoY2FsQm9keSwgZGF0ZSwgeWVhciwgbW9udGgsIGZpbmFuY2lhbERhdGEsIHBhcmVudCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNhbGVuZGFySGVhZGVyO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ2FsZW5kYXJCb2R5ID0gKFxyXG4gIGNhbEJvZHk6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXIsXHJcbiAgZmluYW5jaWFsRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdLFxyXG4gIHBhcmVudDogc3RyaW5nXHJcbikgPT4ge1xyXG4gIGNhbEJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY2FsQm9keS5hcHBlbmRDaGlsZChjYWxlbmRhckJvZHkoZGF0ZSwgeWVhciwgbW9udGgsIGZpbmFuY2lhbERhdGEsIHBhcmVudCkpO1xyXG59O1xyXG5cclxuY29uc3QgY2FsZW5kYXJCb2R5ID0gKFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXIsXHJcbiAgZmluYW5jaWFsRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdLFxyXG4gIHBhcmVudDogc3RyaW5nXHJcbik6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYWxlbmRhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keS5jbGFzc05hbWUgPSBcImNhbC1ib2R5XCI7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgc3RhcnRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZW5kX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGVuZF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcblxyXG4gIGNvbnN0IG1vbnRobHlEYXRhID0gZmluYW5jaWFsRGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1TdGFydCA9IG5ldyBEYXRlKGl0ZW0uc3RhcnRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBpdGVtRW5kID0gbmV3IERhdGUoaXRlbS5lbmRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBjdXJyZW50U3RhcnQgPSBuZXcgRGF0ZShzdGFydF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbmQgPSBuZXcgRGF0ZShlbmRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdGFydCA+PSBjdXJyZW50U3RhcnQgJiYgaXRlbUVuZCA8PSBjdXJyZW50RW5kO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckJvZHlMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckJvZHlMZWZ0LmNsYXNzTmFtZSA9IFwiY2FsLWJvZHktbGVmdFwiO1xyXG4gIGNvbnN0IGNhbGVuZGFyQm9keVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckJvZHlSaWdodC5jbGFzc05hbWUgPSBcImNhbC1ib2R5LXJpZ2h0XCI7XHJcbiAgbGV0IGNhbFNpZGViYXIgPSBudWxsO1xyXG5cclxuICBpZiAocGFyZW50ID09PSBcIkJ1ZGdldFwiKSB7XHJcbiAgICBjYWxTaWRlYmFyID0gY2FsZW5kYXJTaWRlYmFyKG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKTtcclxuICAgIGNhbGVuZGFyQm9keUxlZnQuYXBwZW5kKFxyXG4gICAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJJbmNvbWVcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pLFxyXG4gICAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJCaWxsc1wiLCBtb250aGx5RGF0YSBhcyBCdWRnZXRbXSksXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIlBlcnNvbmFsXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKSxcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiU2F2aW5nc1wiLCBtb250aGx5RGF0YSBhcyBCdWRnZXRbXSksXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIk90aGVyXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FsU2lkZWJhciA9IGNhbGVuZGFyU2lkZWJhcihtb250aGx5RGF0YSBhcyBUcmFuc2FjdGlvbltdKTtcclxuICAgIGNhbGVuZGFyQm9keUxlZnQuYXBwZW5kKFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIkluY29tZVwiLCBtb250aGx5RGF0YSBhcyBUcmFuc2FjdGlvbltdKSxcclxuICAgICAgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQoXCJCaWxsc1wiLCBtb250aGx5RGF0YSBhcyBUcmFuc2FjdGlvbltdKSxcclxuICAgICAgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQoXCJQZXJzb25hbFwiLCBtb250aGx5RGF0YSBhcyBUcmFuc2FjdGlvbltdKSxcclxuICAgICAgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQoXCJTYXZpbmdzXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIk90aGVyXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pXHJcbiAgICApO1xyXG4gIH1cclxuICBjYWxlbmRhckJvZHlSaWdodC5hcHBlbmQoY2FsU2lkZWJhcik7XHJcbiAgY2FsZW5kYXJCb2R5LmFwcGVuZChjYWxlbmRhckJvZHlMZWZ0LCBjYWxlbmRhckJvZHlSaWdodCk7XHJcbiAgcmV0dXJuIGNhbGVuZGFyQm9keTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNhbGVuZGFyIH07XHJcbiIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQgRmluYW5jZUNhbGN1bGF0b3IgZnJvbSBcIi4vaGVscGVycy9GaW5hbmNlQ2FsY3VsYXRvclwiO1xyXG5cclxuY29uc3QgY2FsZW5kYXJTaWRlYmFyID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gXCJjYWwtc2lkZWJhclwiO1xyXG5cclxuICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyVG9wKGZpbmFuY2lhbERhdGEpLCBzaWRlYmFyQm90dG9tKGZpbmFuY2lhbERhdGEpKTtcclxuXHJcbiAgcmV0dXJuIHNpZGViYXI7XHJcbn07XHJcblxyXG5jb25zdCBzaWRlYmFyVG9wID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IGZpbmFuY2VDYWxjdWxhdG9yID0gbmV3IEZpbmFuY2VDYWxjdWxhdG9yKGZpbmFuY2lhbERhdGEpO1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTW9udGhseSBCcmVha2Rvd25cIjtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmNvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmNvbWUgPSBmaW5hbmNlQ2FsY3VsYXRvclxyXG4gICAgLmZpbmFuY2VDYXRlZ29yeUNhbGN1bGF0b3IoXCJJbmNvbWVcIilcclxuICAgIC50b1N0cmluZygpO1xyXG4gIGluY29tZVNlY3Rpb24udGV4dENvbnRlbnQgPSBgSW5jb21lIHRoaXMgbW9udGg6ICR7aW5jb21lfWA7XHJcbiAgY29uc3QgdG90YWxTcGVuZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvdGFsU3BlbmQgPSBmaW5hbmNlQ2FsY3VsYXRvci50b3RhbE1vbnRobHlTcGVuZCgpO1xyXG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmluYW5jaWFsRGF0YSkpKTtcclxuICBjb25zb2xlLmxvZyh0b3RhbFNwZW5kKTtcclxuICB0b3RhbFNwZW5kU2VjdGlvbi50ZXh0Q29udGVudCA9IGBUb3RhbCBzcGVuZCB0aGlzIG1vbnRoOiAke3RvdGFsU3BlbmR9YDtcclxuICBjb25zdCBzYXZpbmdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuZXRJbmNvbWUgPSBmaW5hbmNlQ2FsY3VsYXRvci5tb250aGx5RXhjZXNzQ2FsY3VsYXRvcigpLnRvU3RyaW5nKCk7XHJcbiAgc2F2aW5nU2VjdGlvbi50ZXh0Q29udGVudCA9IGBMZWZ0b3ZlcjogJHtuZXRJbmNvbWV9YDtcclxuICBib2R5LmFwcGVuZChpbmNvbWVTZWN0aW9uLCB0b3RhbFNwZW5kU2VjdGlvbiwgc2F2aW5nU2VjdGlvbik7XHJcbiAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvbkhlYWRlciwgYm9keSk7XHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBzaWRlYmFyQm90dG9tID0gKGZpbmFuY2lhbERhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY2FsZW5kYXJTaWRlYmFyIH07XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBCQVNFX1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlnIH07XHJcbiIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmNsYXNzIEZpbmFuY2VDYWxjdWxhdG9yIHtcclxuICBmaW5hbmNlRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZpbmFuY2VEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10pIHtcclxuICAgIHRoaXMuZmluYW5jZURhdGEgPSBmaW5hbmNlRGF0YTtcclxuICB9XHJcblxyXG4gIGZpbmFuY2VDYXRlZ29yeUNhbGN1bGF0b3IoY2F0ZWdvcnk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuXHJcbiAgICB0aGlzLmZpbmFuY2VEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KGl0ZW0uYW1vdW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN1bTtcclxuICB9XHJcblxyXG4gIHRvdGFsTW9udGhseVNwZW5kKCk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuXHJcbiAgICB0aGlzLmZpbmFuY2VEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiSW5jb21lXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJTYXZpbmdzXCIpIHJldHVybjtcclxuICAgICAgc3VtICs9IHBhcnNlSW50KGl0ZW0uYW1vdW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdW07XHJcbiAgfVxyXG5cclxuICBtb250aGx5RXhjZXNzQ2FsY3VsYXRvcigpOiBudW1iZXIge1xyXG4gICAgbGV0IGluY29tZVRvdGFsID0gMDtcclxuICAgIGxldCB0b3RhbFNwZW5kID0gMDtcclxuXHJcbiAgICB0aGlzLmZpbmFuY2VEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiSW5jb21lXCIpIHtcclxuICAgICAgICBpbmNvbWVUb3RhbCArPSBwYXJzZUludChpdGVtLmFtb3VudCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSBcIlNhdmluZ3NcIikgcmV0dXJuO1xyXG4gICAgICB0b3RhbFNwZW5kICs9IHBhcnNlSW50KGl0ZW0uYW1vdW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbmNvbWVUb3RhbCAtIHRvdGFsU3BlbmQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaW5hbmNlQ2FsY3VsYXRvcjtcclxuIiwiY2xhc3MgSGVscGVyIHtcclxuICAvLyB0aGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBtb250aCBhbmQgeWVhciBpbiB0aGUgY2FsZW5kZXIgaGVhZGVyIGFuZCByZXR1cm5zXHJcbiAgLy8gdGhlIG1vbnRoJ3Mgc3RhcnQgYW5kIGVuZCBkYXRlXHJcbiAgZ2V0TW9udGhTdGFydEFuZEVuZERhdGVzID0gKGNhbGVuZGFySGVhZGVyRGF0ZTogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XHJcbiAgICBjb25zdCB1bnBhcnNlZERhdGU6IHN0cmluZ1tdID1cclxuICAgICAgY2FsZW5kYXJIZWFkZXJEYXRlPy5kYXRhc2V0LmRhdGU/LnNwbGl0KFwiIFwiKSE7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVswXSk7XHJcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzFdKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgRGF0ZSBvYmplY3QgZm9yIHRoZSBzdGFydCBkYXRlIGFuZCBzZXQgaXQgdG8gdGhlIGZpcnN0IGRheSBvZiB0aGUgc3BlY2lmaWVkIG1vbnRoIGFuZCB5ZWFyXHJcbiAgICBjb25zdCBzdGFydF9kYXRlX29iaiA9IG5ldyBEYXRlKCk7XHJcbiAgICBzdGFydF9kYXRlX29iai5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IERhdGUgb2JqZWN0IGZvciB0aGUgZW5kIGRhdGUgYW5kIHNldCBpdCB0byB0aGUgbGFzdCBkYXkgb2YgdGhlIHNwZWNpZmllZCBtb250aCBhbmQgeWVhclxyXG4gICAgY29uc3QgZW5kX2RhdGVfb2JqID0gbmV3IERhdGUoKTtcclxuICAgIGVuZF9kYXRlX29iai5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG5cclxuICAgIC8vIFJldHJpZXZlIHRoZSBkYXlzIGluIFlZWVktTU0tREQgZm9ybWF0XHJcbiAgICBjb25zdCBzdGFydF9kYXRlID0gc3RhcnRfZGF0ZV9vYmoudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBlbmRfZGF0ZSA9IGVuZF9kYXRlX29iai50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgICByZXR1cm4geyBzdGFydF9kYXRlLCBlbmRfZGF0ZSB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhlbHBlciB9O1xyXG4iLCJjb25zdCBjcmVhdGVIb21lID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcclxuXHJcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gaG9tZURpdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGFuZCBwb3B1bGF0ZSBsZWZ0IGFuZCByaWdodCBwb3J0aW9ucyBvZiB0aGUgaGVhZGVyXHJcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgaGVhZGVyTGVmdC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSBcIjtcclxuICBoZWFkZXJSaWdodC50ZXh0Q29udGVudCA9IFwiSmFjayFcIjtcclxuICBoZWFkZXJMZWZ0LmNsYXNzTmFtZSA9IFwiaG9tZS1oZWFkZXJcIjtcclxuICBoZWFkZXJSaWdodC5jbGFzc05hbWUgPSBcImhvbWUtaGVhZGVyIGhvbWUtaGVhZGVyLXJpZ2h0XCI7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyUmlnaHQpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZm9yIHRhZyBsaW5lIGJlbG93IHdlbGNvbWUgbWVzc2FnZVxyXG4gIGNvbnN0IGhvbWVUYWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lVGFnTGluZS50ZXh0Q29udGVudCA9XHJcbiAgICBcIlJlYWR5IHRvIHRha2UgY29udHJvbCBvZiB5b3VyIGZpbmFuY2VzPyBMZXQncyBnZXQgc3RhcnRlZC5cIjtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZVRhZ0xpbmUpO1xyXG4gIHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1ZGdldE1vZHVsZSB9IGZyb20gXCIuL2J1ZGdldFwiO1xyXG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zYWN0aW9uTW9kdWxlIH0gZnJvbSBcIi4vdHJhbnNhY3Rpb25cIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9CdWRnZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1RyYW5zYWN0aW9uU2VydmljZVwiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnRuXCIpO1xyXG5jb25zdCBidWRnZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1idG5cIik7XHJcbmNvbnN0IG1haW5OYXZDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWJ0blwiKTtcclxuY29uc3QgYnVkZ2V0U2VydmljZSA9IG5ldyBCdWRnZXRTZXJ2aWNlKCk7XHJcbmNvbnN0IHRyYW5zYWN0aW9uU2VydmljZSA9IG5ldyBUcmFuc2FjdGlvblNlcnZpY2UoKTtcclxuXHJcbm1haW5OYXZDb250Py5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuY29uc3Qgb3BlbkhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZSA9IGNyZWF0ZUhvbWUoKTtcclxuICBjb250YWluZXI/LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbn07XHJcblxyXG5ob21lQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgb3BlbkhvbWUoKTtcclxufSk7XHJcblxyXG5jb25zdCBvcGVuQnVkZ2V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGJ1ZGdldERhdGEgPSA8QnVkZ2V0W10+YXdhaXQgYnVkZ2V0U2VydmljZS5mZXRjaEJ1ZGdldCgpO1xyXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY29uc3QgYnVkZ2V0ID0gY3JlYXRlQnVkZ2V0TW9kdWxlKGJ1ZGdldERhdGEpO1xyXG4gIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQoYnVkZ2V0KTtcclxufTtcclxuXHJcbmJ1ZGdldEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5CdWRnZXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBvcGVuVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb25EYXRhID0gPFRyYW5zYWN0aW9uW10+KFxyXG4gICAgYXdhaXQgdHJhbnNhY3Rpb25TZXJ2aWNlLmZldGNoVHJhbnNhY3Rpb25zKClcclxuICApO1xyXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbk1vZHVsZSh0cmFuc2FjdGlvbkRhdGEpO1xyXG4gIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQodHJhbnNhY3Rpb24pO1xyXG59O1xyXG5cclxudHJhbnNhY3Rpb25CdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgb3BlblRyYW5zYWN0aW9uKCk7XHJcbn0pO1xyXG5cclxub3BlbkhvbWUoKTtcclxuXHJcbmV4cG9ydCB7IG9wZW5CdWRnZXQsIG9wZW5UcmFuc2FjdGlvbiB9O1xyXG4iLCJjb25zdCBuYXZiYXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmNvbnN0IG5hdmJhckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5uYXZiYXJMZWZ0LnNyYyA9IFwiLi4vcHVibGljL2Fzc2V0cy9id2xvZ28ucG5nXCI7XHJcbm5hdmJhckxlZnQuY2xhc3NOYW1lID0gXCJuYXZiYXItbGVmdFwiO1xyXG5jb25zdCBuYXZiYXJNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBuYXZiYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm5hdmJhci5hcHBlbmQobmF2YmFyTGVmdCwgbmF2YmFyTWlkLCBuYXZiYXJSaWdodCk7XHJcblxyXG5leHBvcnQgeyBuYXZiYXIgfTtcclxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCBhcyByZXNldEJ1ZGdldENvbXBvbmVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIGJ1ZGdldEZvcm1EaWFsb2csXHJcbiAgcmVzZXRCdWRnZXRGb3JtLFxyXG4gIGVkaXRCdWRnZXRGb3JtRGlhbG9nLFxyXG59IGZyb20gXCIuLi9idWRnZXRcIjtcclxuXHJcbmNsYXNzIEJ1ZGdldFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZmV0Y2hCdWRnZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgY29uZmlnLkJBU0VfVVJMICsgYGZldGNoQnVkZ2V0LnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5idWRnZXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJ1ZGdldHM7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNyZWF0ZUJ1ZGdldCA9IGFzeW5jIChidWRnZXRGb3JtVmFsdWVzOiBhbnkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChjb25maWcuQkFTRV9VUkwgKyBcImNyZWF0ZUJ1ZGdldC5waHBcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1ZGdldEZvcm1WYWx1ZXMpLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgICAgcmVzZXRCdWRnZXRGb3JtKCk7XHJcbiAgICAgICAgYnVkZ2V0Rm9ybURpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHJlc2V0QnVkZ2V0Q29tcG9uZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUJ1ZGdldCA9IGFzeW5jIChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChjb25maWcuQkFTRV9VUkwgKyBcInVwZGF0ZUJ1ZGdldC5waHBcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1ZGdldERhdGEpLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICBlZGl0QnVkZ2V0Rm9ybURpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHJlc2V0QnVkZ2V0Q29tcG9uZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRlbGV0ZUJ1ZGdldCA9IGFzeW5jIChidWRnZXRfaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGNvbmZpZy5CQVNFX1VSTCArIGBkZWxldGVCdWRnZXQucGhwP2J1ZGdldF9pZD0ke2J1ZGdldF9pZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICAgIHJlc2V0QnVkZ2V0Q29tcG9uZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJ1ZGdldFNlcnZpY2UgfTtcclxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlc2V0VHJhbnNhY3Rpb25Gb3JtLFxyXG4gIHRyYW5zYWN0aW9uRm9ybURpYWxvZyxcclxuICBlZGl0VHJhbnNhY3Rpb25Gb3JtRGlhbG9nLFxyXG59IGZyb20gXCIuLi90cmFuc2FjdGlvblwiO1xyXG5pbXBvcnQgeyBvcGVuVHJhbnNhY3Rpb24gYXMgcmVzZXRUcmFuc2FjdGlvbk1vZHVsZSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcblxyXG5jbGFzcyBUcmFuc2FjdGlvblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZmV0Y2hUcmFuc2FjdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgY29uZmlnLkJBU0VfVVJMICsgYGZldGNoVHJhbnNhY3Rpb25zLnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS50cmFuc2FjdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudHJhbnNhY3Rpb25zO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjcmVhdGVUcmFuc2FjdGlvbiA9IGFzeW5jICh0cmFuc2FjdGlvbkZvcm1WYWx1ZXM6IGFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGNvbmZpZy5CQVNFX1VSTCArIFwiY3JlYXRlVHJhbnNhY3Rpb24ucGhwXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbkZvcm1WYWx1ZXMpLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgICAgcmVzZXRUcmFuc2FjdGlvbkZvcm0oKTtcclxuICAgICAgICB0cmFuc2FjdGlvbkZvcm1EaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICByZXNldFRyYW5zYWN0aW9uTW9kdWxlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVRyYW5zYWN0aW9uID0gYXN5bmMgKHRyYW5zYWN0aW9uRGF0YTogVHJhbnNhY3Rpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChjb25maWcuQkFTRV9VUkwgKyBcInVwZGF0ZVRyYW5zYWN0aW9uLnBocFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodHJhbnNhY3Rpb25EYXRhKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgICAgZWRpdFRyYW5zYWN0aW9uRm9ybURpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHJlc2V0VHJhbnNhY3Rpb25Nb2R1bGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlVHJhbnNhY3Rpb24gPSBhc3luYyAodHJhbnNhY3Rpb25faWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGNvbmZpZy5CQVNFX1VSTCArXHJcbiAgICAgICAgICBgZGVsZXRlVHJhbnNhY3Rpb24ucGhwP3RyYW5zYWN0aW9uX2lkPSR7dHJhbnNhY3Rpb25faWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICByZXNldFRyYW5zYWN0aW9uTW9kdWxlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgb3BlblRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3RyYW5zYWN0aW9uLmNzc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9UcmFuc2FjdGlvblNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGVscGVyIH0gZnJvbSBcIi4vaGVscGVycy9IZWxwZXJcIjtcclxuXHJcbmNvbnN0IHRyYW5zYWN0aW9uRm9ybURpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1kaWFsb2dcIilcclxuKTtcclxuY29uc3QgdHJhbnNhY3Rpb25Gb3JtID0gPEhUTUxGb3JtRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtXCIpXHJcbik7XHJcblxyXG5jb25zdCBlZGl0VHJhbnNhY3Rpb25Gb3JtRGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZGlhbG9nXCIpXHJcbik7XHJcbmNvbnN0IGVkaXRUcmFuc2FjdGlvbkZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZm9ybVwiKVxyXG4pO1xyXG5jb25zdCB0cmFuc2FjdGlvbkRpYWxvZ0Nsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJ0cmFuc2FjdGlvbi1kaWFsb2ctY2xvc2VcIlxyXG4pO1xyXG5jb25zdCBlZGl0VHJhbnNhY3Rpb25EaWFsb2dDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiZWRpdC10cmFuc2FjdGlvbi1kaWFsb2ctY2xvc2VcIlxyXG4pO1xyXG5cclxuY29uc3QgdHJhbnNhY3Rpb25TZXJ2aWNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xyXG5jb25zdCBoZWxwZXIgPSBuZXcgSGVscGVyKCk7XHJcblxyXG5jb25zdCBjcmVhdGVUcmFuc2FjdGlvbk1vZHVsZSA9ICh0cmFuc2FjdGlvbkRhdGE6IFRyYW5zYWN0aW9uW10pID0+IHtcclxuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdHJhbnNhY3Rpb24uY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvblwiO1xyXG5cclxuICBjb25zdCBjYWxlbmRhciA9IGNyZWF0ZUNhbGVuZGFyKHRyYW5zYWN0aW9uRGF0YSwgXCJUcmFuc2FjdGlvblwiKTtcclxuICB0cmFuc2FjdGlvbi5hcHBlbmRDaGlsZChjYWxlbmRhcik7XHJcblxyXG4gIHJldHVybiB0cmFuc2FjdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGdldFRyYW5zYWN0aW9uRm9ybVZhbHVlcyA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYW1vdW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tZm9ybS1hbW91bnRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB0aXRsZSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbC1jdXJyLWRhdGVcIik7XHJcbiAgY29uc3QgeyBzdGFydF9kYXRlLCBlbmRfZGF0ZSB9ID1cclxuICAgIGhlbHBlci5nZXRNb250aFN0YXJ0QW5kRW5kRGF0ZXMoY2FsZW5kYXJIZWFkZXJEYXRlKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgYW1vdW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVzZXJfaWQsXHJcbiAgICBzdGFydF9kYXRlLFxyXG4gICAgZW5kX2RhdGUsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gZ2F0aGVycyBhbmQgdmFsdWVzIGZyb20gdGhlIGVkaXQgdHJhbnNhY3Rpb24gZm9ybSBmb3IgdXNlIHdoaWxlXHJcbi8vIHVwZGF0aW5nIGEgdHJhbnNhY3Rpb24gcmVjb3JkXHJcbmNvbnN0IGdldEVkaXRUcmFuc2FjdGlvbkZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRyYW5zYWN0aW9uLWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYW1vdW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10cmFuc2FjdGlvbi1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10cmFuc2FjdGlvbi1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRyYW5zYWN0aW9uLWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZm9ybS10cmFuc2FjdGlvbi1pZFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIikhLnRvU3RyaW5nKCk7XHJcblxyXG4gIC8vIHRoZSBjYWxlbmRhciBoZWFkZXIgbm9kZSBpcyBwYXNzZWQgaW50byB0aGUgaGVscGVyIGZ1bmN0aW9uIHRvIGdldCBzdGFydCBhbmQgZW5kIGRhdGVzXHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWwtY3Vyci1kYXRlXCIpO1xyXG4gIGNvbnN0IHsgc3RhcnRfZGF0ZSwgZW5kX2RhdGUgfSA9XHJcbiAgICBoZWxwZXIuZ2V0TW9udGhTdGFydEFuZEVuZERhdGVzKGNhbGVuZGFySGVhZGVyRGF0ZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGFtb3VudCxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICB1c2VyX2lkLFxyXG4gICAgc3RhcnRfZGF0ZSxcclxuICAgIGVuZF9kYXRlLFxyXG4gICAgdHJhbnNhY3Rpb25faWQsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gcG9wdWxhdGVzIHRoZSBlZGl0IGZvcm0gZmllbGRzIHdpdGggdGhlIHJlY29yZFxyXG4vLyB0aGF0IG5lZWRzIHRvIGJlIGVkaXRlZFxyXG5jb25zdCBwb3B1bGF0ZUVkaXRUcmFuc2FjdGlvbkZvcm0gPSAodHJhbnNhY3Rpb25EYXRhOiBUcmFuc2FjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRyYW5zYWN0aW9uLWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKTtcclxuICBjYXRlZ29yeS52YWx1ZSA9IHRyYW5zYWN0aW9uRGF0YS5jYXRlZ29yeTtcclxuICBjb25zdCBhbW91bnQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZm9ybS1hbW91bnRcIilcclxuICApO1xyXG4gIGFtb3VudC52YWx1ZSA9IHRyYW5zYWN0aW9uRGF0YS5hbW91bnQudG9TdHJpbmcoKTtcclxuICBjb25zdCB0aXRsZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10cmFuc2FjdGlvbi1mb3JtLXRpdGxlXCIpXHJcbiAgKTtcclxuICB0aXRsZS52YWx1ZSA9IHRyYW5zYWN0aW9uRGF0YS50aXRsZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10cmFuc2FjdGlvbi1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKTtcclxuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRyYW5zYWN0aW9uRGF0YS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBzdGFydERhdGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZm9ybS1zdGFydC1kYXRlXCIpXHJcbiAgKTtcclxuICBzdGFydERhdGUudmFsdWUgPSB0cmFuc2FjdGlvbkRhdGEuc3RhcnRfZGF0ZS50b1N0cmluZygpO1xyXG4gIGNvbnN0IGVuZERhdGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZm9ybS1lbmQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgZW5kRGF0ZS52YWx1ZSA9IHRyYW5zYWN0aW9uRGF0YS5lbmRfZGF0ZS50b1N0cmluZygpO1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdHJhbnNhY3Rpb24tZm9ybS10cmFuc2FjdGlvbi1pZFwiKVxyXG4gICk7XHJcbiAgdHJhbnNhY3Rpb25JZC52YWx1ZSA9IHRyYW5zYWN0aW9uRGF0YS50cmFuc2FjdGlvbl9pZC50b1N0cmluZygpO1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRUcmFuc2FjdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYW1vdW50ID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zYWN0aW9uLWZvcm0tYW1vdW50XCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCB0aXRsZSA9ICgoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxufTtcclxuXHJcbnRyYW5zYWN0aW9uRm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0cmFuc2FjdGlvbkZvcm1WYWx1ZXMgPSBnZXRUcmFuc2FjdGlvbkZvcm1WYWx1ZXMoKTtcclxuICB0cmFuc2FjdGlvblNlcnZpY2UuY3JlYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25Gb3JtVmFsdWVzKTtcclxufSk7XHJcblxyXG5lZGl0VHJhbnNhY3Rpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uRGF0YSA9IHtcclxuICAgIC4uLmdldEVkaXRUcmFuc2FjdGlvbkZvcm1WYWx1ZXMoKSxcclxuICAgIGNyZWF0ZWRfYXQ6IG51bGwsXHJcbiAgfTtcclxuICB0cmFuc2FjdGlvblNlcnZpY2UudXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25EYXRhKTtcclxufSk7XHJcblxyXG50cmFuc2FjdGlvbkRpYWxvZ0Nsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHRyYW5zYWN0aW9uRm9ybURpYWxvZy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmVkaXRUcmFuc2FjdGlvbkRpYWxvZ0Nsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVkaXRUcmFuc2FjdGlvbkZvcm1EaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVUcmFuc2FjdGlvbk1vZHVsZSxcclxuICByZXNldFRyYW5zYWN0aW9uRm9ybSxcclxuICB0cmFuc2FjdGlvbkZvcm1EaWFsb2csXHJcbiAgZWRpdFRyYW5zYWN0aW9uRm9ybURpYWxvZyxcclxuICBwb3B1bGF0ZUVkaXRUcmFuc2FjdGlvbkZvcm0sXHJcbn07XHJcbiIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGVkaXRUcmFuc2FjdGlvbkZvcm1EaWFsb2csXHJcbiAgcG9wdWxhdGVFZGl0VHJhbnNhY3Rpb25Gb3JtLFxyXG4gIHRyYW5zYWN0aW9uRm9ybURpYWxvZyxcclxufSBmcm9tIFwiLi90cmFuc2FjdGlvblwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9UcmFuc2FjdGlvblNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IHRyYW5zYWN0aW9uU2VydmljZSA9IG5ldyBUcmFuc2FjdGlvblNlcnZpY2UoKTtcclxuY29uc3QgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQgPSAoXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICB0cmFuc2FjdGlvbkRhdGE6IFRyYW5zYWN0aW9uW11cclxuKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb25Db21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRyYW5zYWN0aW9uQ29tcG9uZW50LmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tY29tcG9uZW50XCI7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyXCI7XHJcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTGVmdC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID1cclxuICAgIFwidHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1sZWZ0IHRyYW5zYWN0aW9uLWNvbXBvbmVudC1oZWFkZXItbGVmdFwiO1xyXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJSaWdodC50ZXh0Q29udGVudCA9IFwiQW1vdW50XCI7XHJcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID1cclxuICAgIFwidHJhbnNhY3Rpb24tY29tcG9uZW50LXJvdy1yaWdodCB0cmFuc2FjdGlvbi1jb21wb25lbnQtaGVhZGVyLXJpZ2h0XCI7XHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjb25zdCBjb21wb25lbnREYXRhID0gdHJhbnNhY3Rpb25EYXRhLmZpbHRlcihcclxuICAgIChidWRnZXRJdGVtKSA9PiBidWRnZXRJdGVtLmNhdGVnb3J5ID09PSB0aXRsZVxyXG4gICk7XHJcblxyXG4gIGNvbXBvbmVudERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChyb3coaXRlbSkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tY29tcG9uZW50LW1haW5cIjtcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXIuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnQtZm9vdGVyXCI7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25Gb3JtU2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PihcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2FjdGlvbi1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICAgKTtcclxuICAgIHRyYW5zYWN0aW9uRm9ybVNlbGVjdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgdHJhbnNhY3Rpb25Gb3JtRGlhbG9nPy5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5cclxuICB0cmFuc2FjdGlvbkNvbXBvbmVudC5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpO1xyXG5cclxuICByZXR1cm4gdHJhbnNhY3Rpb25Db21wb25lbnQ7XHJcbn07XHJcblxyXG5jb25zdCByb3cgPSAodHJhbnNhY3Rpb25EYXRhOiBUcmFuc2FjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNpbmdsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2luZ2xlUm93LmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tY29tcG9uZW50LWl0ZW1cIjtcclxuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XHJcbiAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPVxyXG4gICAgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHRyYW5zYWN0aW9uLWNvbXBvbmVudC1pdGVtLWRlbC1pY29uXCI7XHJcbiAgY29uc3Qgcm93TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TWFpbi5jbGFzc05hbWUgPSBcInRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3dcIjtcclxuICBjb25zdCByb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dMZWZ0LmNsYXNzTmFtZSA9XHJcbiAgICBcInRyYW5zYWN0aW9uLWNvbXBvbmVudC1yb3ctbGVmdCB0cmFuc2FjdGlvbi1jb21wb25lbnQtcm93LWxlZnQtaW5wdXRcIjtcclxuICByb3dMZWZ0LnRleHRDb250ZW50ID0gdHJhbnNhY3Rpb25EYXRhLnRpdGxlO1xyXG4gIGNvbnN0IHJvd1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dSaWdodC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctcmlnaHRcIjtcclxuICByb3dSaWdodC50ZXh0Q29udGVudCA9IGBLU2hzLiAke3RyYW5zYWN0aW9uRGF0YS5hbW91bnR9YDtcclxuXHJcbiAgcm93TWFpbi5hcHBlbmQoZGVsZXRlSWNvbiwgcm93TGVmdCwgcm93UmlnaHQpO1xyXG5cclxuICByb3dNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBwb3B1bGF0ZUVkaXRUcmFuc2FjdGlvbkZvcm0odHJhbnNhY3Rpb25EYXRhKTtcclxuICAgIGVkaXRUcmFuc2FjdGlvbkZvcm1EaWFsb2cuc2hvdygpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRyYW5zYWN0aW9uU2VydmljZS5kZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbkRhdGEudHJhbnNhY3Rpb25faWQpO1xyXG4gIH0pO1xyXG5cclxuICBzaW5nbGVSb3cuYXBwZW5kKHJvd01haW4pO1xyXG4gIHJldHVybiBzaW5nbGVSb3c7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==