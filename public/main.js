/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _editBudget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editBudget */ "./src/editBudget.ts");
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
    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(budgetData);
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
        const request = yield fetch("http://localhost:8080/financial-management/php/createBudget.php", {
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
budgetForm === null || budgetForm === void 0 ? void 0 : budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBudgetForm();
});
editBudgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const budgetData = Object.assign(Object.assign({}, (0,_editBudget__WEBPACK_IMPORTED_MODULE_2__.getEditBudgetFormValues)()), { created_at: null });
    (0,_editBudget__WEBPACK_IMPORTED_MODULE_2__.updateBudget)(budgetData);
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
    console.log(componentData);
    componentData.forEach((item) => {
        main.append(row(item));
    });
    main.className = "budget-main";
    const footer = document.createElement("footer");
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

const createCalendar = (budgetData) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendar = document.createElement("div");
    calendar.className = "cal-cont";
    const calBody = document.createElement("div");
    const calHeader = calendarHeader(calBody, date, year, month, budgetData);
    calBody.id = "cal-body-cont";
    renderCalendarBody(calBody, date, year, month, budgetData);
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
const calendarHeader = (calBody, date, year, month, budgetData) => {
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
            renderCalendarBody(calBody, date, year, month, budgetData);
        });
    });
    return calendarHeader;
};
const renderCalendarBody = (calBody, date, year, month, budgetData) => {
    calBody.replaceChildren();
    calBody.appendChild(calendarBody(date, year, month, budgetData));
};
const calendarBody = (date, year, month, budgetData) => {
    const calendarBody = document.createElement("div");
    calendarBody.className = "cal-body";
    const start_date = new Date();
    start_date.setFullYear(year, month, 1);
    const end_date = new Date();
    end_date.setFullYear(year, month + 1, 0);
    const monthlyData = budgetData.filter((item) => {
        const itemStart = new Date(item.start_date).toISOString().split("T")[0];
        const itemEnd = new Date(item.end_date).toISOString().split("T")[0];
        const currentStart = new Date(start_date).toISOString().split("T")[0];
        const currentEnd = new Date(end_date).toISOString().split("T")[0];
        return itemStart >= currentStart && itemEnd <= currentEnd;
    });
    calendarBody.append((0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Income", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Bills", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Personal", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Savings", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Other", monthlyData));
    return calendarBody;
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
    const amount = parseInt(document.getElementById("edit-budget-form-amount").value);
    const title = (document.getElementById("edit-budget-form-title")).value;
    const description = (document.getElementById("edit-budget-form-description")).value;
    const budget_id = parseInt(document.getElementById("edit-budget-form-budget-id")
        .value);
    const user_id = parseInt(localStorage.getItem("user_id").toString());
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
/* harmony export */   openBudget: () => (/* binding */ openBudget)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.ts");
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
mainNavCont === null || mainNavCont === void 0 ? void 0 : mainNavCont.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar);
const fetchBudgetData = () => __awaiter(void 0, void 0, void 0, function* () {
    const userId = localStorage.getItem("user_id");
    try {
        const request = yield fetch(`http://localhost:8080/financial-management/php/fetchBudget.php?user_id=${userId}`, {
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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ryw2QkFBNkIsQ0FBQztBQUMvQyxVQUFVLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNyQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRWhDOzs7Ozs7O1VDVGxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2J1ZGdldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVkZ2V0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVsZXRlQnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0QnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2YmFyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZUJ1ZGdldCxcclxuICBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcyxcclxuICBwb3B1bGF0ZUJ1ZGdldEZvcm0sXHJcbn0gZnJvbSBcIi4vZWRpdEJ1ZGdldFwiO1xyXG5cclxuY29uc3QgZGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWRpYWxvZ1wiKTtcclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuY29uc3QgYnVkZ2V0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm1cIik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtXCIpXHJcbik7XHJcbmNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nLWNsb3NlXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImVkaXQtYnVkZ2V0LWRpYWxvZy1jbG9zZVwiXHJcbik7XHJcblxyXG5jbG9zZURpYWxvZz8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuZWRpdEJ1ZGdldERpYWxvZ0Nsb3NlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVkaXRCdWRnZXREaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlQnVkZ2V0ID0gKGJ1ZGdldERhdGE6IEJ1ZGdldFtdKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0XCI7XHJcbiAgLy9uZXdEaXY/LnNldEF0dHJpYnV0ZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJVREdFVCBIRUFESU5HXCI7XHJcbiAgY29uc3QgY2FsZW5kYXIgPSBjcmVhdGVDYWxlbmRhcihidWRnZXREYXRhKTtcclxuICBjb25zdCBidWRnZXRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXQuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xyXG4gIGJ1ZGdldC5hcHBlbmRDaGlsZChidWRnZXRTaWRlYmFyKTtcclxuICByZXR1cm4gYnVkZ2V0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnVkZ2V0Rm9ybVZhbHVlcyA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tdGl0bGVcIikpXHJcbiAgICAudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB1bnBhcnNlZERhdGU6IHN0cmluZ1tdID0gY2FsZW5kYXJIZWFkZXJEYXRlPy5kYXRhc2V0LmRhdGU/LnNwbGl0KFwiIFwiKSE7XHJcbiAgY29uc3QgbW9udGggPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMF0pO1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMV0pO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGVuZF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBlbmRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICB9O1xyXG59O1xyXG5jb25zdCByZXNldEJ1ZGdldEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYW1vdW50ID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbiAgY29uc3QgdGl0bGUgPSAoKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZSA9IFwiXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxufTtcclxuY29uc3Qgc3VibWl0QnVkZ2V0Rm9ybSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9maW5hbmNpYWwtbWFuYWdlbWVudC9waHAvY3JlYXRlQnVkZ2V0LnBocFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2V0QnVkZ2V0Rm9ybVZhbHVlcygpKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgcmVzZXRCdWRnZXRGb3JtKCk7XHJcbiAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICBvcGVuQnVkZ2V0KCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmJ1ZGdldEZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc3VibWl0QnVkZ2V0Rm9ybSgpO1xyXG59KTtcclxuXHJcbmVkaXRCdWRnZXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGJ1ZGdldERhdGEgPSB7IC4uLmdldEVkaXRCdWRnZXRGb3JtVmFsdWVzKCksIGNyZWF0ZWRfYXQ6IG51bGwgfTtcclxuICB1cGRhdGVCdWRnZXQoYnVkZ2V0RGF0YSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQnVkZ2V0LCByZXNldEJ1ZGdldEZvcm0sIGdldEJ1ZGdldEZvcm1WYWx1ZXMgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVCdWRnZXQsXHJcbiAgZ2V0RWRpdEJ1ZGdldEZvcm1WYWx1ZXMsXHJcbiAgcG9wdWxhdGVCdWRnZXRGb3JtLFxyXG59IGZyb20gXCIuL2VkaXRCdWRnZXRcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGRlbGV0ZUJ1ZGdldCB9IGZyb20gXCIuL2RlbGV0ZUJ1ZGdldFwiO1xyXG5cclxuY29uc3QgZGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWRpYWxvZ1wiKTtcclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCA9ICh0aXRsZTogc3RyaW5nLCBidWRnZXREYXRhOiBCdWRnZXRbXSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGJ1ZGdldERhdGEpO1xyXG4gIGNvbnN0IGJ1ZGdldENvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0Q29tcG9uZW50LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWNvbXBvbmVudFwiO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWhlYWRlclwiO1xyXG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckxlZnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICBoZWFkZXJMZWZ0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1sZWZ0IGJ1ZGdldC1oZWFkZXItbGVmdFwiO1xyXG4gIGNvbnN0IGhlYWRlck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTWlkLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1taWQgYnVkZ2V0LWhlYWRlci1taWRcIjtcclxuICBoZWFkZXJNaWQudGV4dENvbnRlbnQgPSBcIlBsYW5uZWRcIjtcclxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyUmlnaHQudGV4dENvbnRlbnQgPSBcIlJlY2VpdmVkXCI7XHJcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0IGJ1ZGdldC1oZWFkZXItcmlnaHRcIjtcclxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckxlZnQsIGhlYWRlck1pZCwgaGVhZGVyUmlnaHQpO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbXBvbmVudERhdGEgPSBidWRnZXREYXRhLmZpbHRlcihcclxuICAgIChidWRnZXRJdGVtKSA9PiBidWRnZXRJdGVtLmNhdGVnb3J5ID09PSB0aXRsZVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coY29tcG9uZW50RGF0YSk7XHJcbiAgY29tcG9uZW50RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBtYWluLmFwcGVuZChyb3coaXRlbSkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LW1haW5cIjtcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBmb290ZXIuY2xhc3NOYW1lID0gXCJidWRnZXQtZm9vdGVyXCI7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYnVkZ2V0Rm9ybVNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD4oXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgICApO1xyXG4gICAgYnVkZ2V0Rm9ybVNlbGVjdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgZGlhbG9nIS5zaG93TW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgYnVkZ2V0Q29tcG9uZW50LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIHJldHVybiBidWRnZXRDb21wb25lbnQ7XHJcbn07XHJcblxyXG5jb25zdCByb3cgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0KSA9PiB7XHJcbiAgY29uc3Qgc2luZ2xlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaW5nbGVSb3cuY2xhc3NOYW1lID0gXCJidWRnZXQtaXRlbVwiO1xyXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICBkZWxldGVJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBidWRnZXQtaXRlbS1kZWwtaWNvblwiO1xyXG4gIGNvbnN0IHJvd01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01haW4uY2xhc3NOYW1lID0gXCJidWRnZXQtcm93XCI7XHJcbiAgY29uc3Qgcm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TGVmdC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbGVmdCBidWRnZXQtcm93LWxlZnQtaW5wdXRcIjtcclxuICByb3dMZWZ0LnRleHRDb250ZW50ID0gYnVkZ2V0RGF0YS50aXRsZTtcclxuICBjb25zdCByb3dNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01pZC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbWlkXCI7XHJcbiAgcm93TWlkLnRleHRDb250ZW50ID0gYEtTaHMuICR7YnVkZ2V0RGF0YS5hbW91bnR9YDtcclxuICBjb25zdCByb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93UmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0XCI7XHJcbiAgcm93UmlnaHQudGV4dENvbnRlbnQgPSBcIktTaHMuIDAuMDBcIjtcclxuXHJcbiAgcm93TWFpbi5hcHBlbmQocm93TGVmdCwgcm93TWlkLCByb3dSaWdodCk7XHJcblxyXG4gIHJvd01haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBvcHVsYXRlQnVkZ2V0Rm9ybShidWRnZXREYXRhKTtcclxuICAgIGVkaXRCdWRnZXREaWFsb2cuc2hvdygpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRlbGV0ZUJ1ZGdldChidWRnZXREYXRhLmJ1ZGdldF9pZCk7XHJcbiAgfSk7XHJcblxyXG4gIHNpbmdsZVJvdy5hcHBlbmQoZGVsZXRlSWNvbiwgcm93TWFpbik7XHJcblxyXG4gIHJldHVybiBzaW5nbGVSb3c7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCdWRnZXRDb21wb25lbnQgfTtcclxuIiwiaW1wb3J0IHsgYnVkZ2V0RGF0YSB9IGZyb20gXCIuLi90ZXN0cy90ZXN0VmFsdWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCB9IGZyb20gXCIuL2J1ZGdldENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FsZW5kYXIgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0W10pOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXIuY2xhc3NOYW1lID0gXCJjYWwtY29udFwiO1xyXG4gIGNvbnN0IGNhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNhbEhlYWRlciA9IGNhbGVuZGFySGVhZGVyKGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBidWRnZXREYXRhKTtcclxuICBjYWxCb2R5LmlkID0gXCJjYWwtYm9keS1jb250XCI7XHJcbiAgcmVuZGVyQ2FsZW5kYXJCb2R5KGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBidWRnZXREYXRhKTtcclxuICBjYWxlbmRhci5hcHBlbmQoY2FsSGVhZGVyLCBjYWxCb2R5KTtcclxuXHJcbiAgcmV0dXJuIGNhbGVuZGFyO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ2FsZW5kYXJEYXRlID0gKFxyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlclxyXG4pID0+IHtcclxuICBjb25zdCBtb250aE5hbWVzID0gW1xyXG4gICAgXCJKYW51YXJ5XCIsXHJcbiAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICBcIk1hcmNoXCIsXHJcbiAgICBcIkFwcmlsXCIsXHJcbiAgICBcIk1heVwiLFxyXG4gICAgXCJKdW5lXCIsXHJcbiAgICBcIkp1bHlcIixcclxuICAgIFwiQXVndXN0XCIsXHJcbiAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgXCJPY3RvYmVyXCIsXHJcbiAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICBcIkRlY2VtYmVyXCIsXHJcbiAgXTtcclxuICBjYWxlbmRhckhlYWRlckRhdGUudGV4dENvbnRlbnQgPSBgJHttb250aE5hbWVzW21vbnRoXX0gJHt5ZWFyfWA7XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLmRhdGFzZXQuZGF0ZSA9IGAke21vbnRofSAke3llYXJ9YDtcclxufTtcclxuXHJcbmNvbnN0IGNhbGVuZGFySGVhZGVyID0gKFxyXG4gIGNhbEJvZHk6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXIsXHJcbiAgYnVkZ2V0RGF0YTogQnVkZ2V0W11cclxuKSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFySGVhZGVyLmNsYXNzTmFtZSA9IFwiY2FsLWhlYWRlclwiO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5jbGFzc05hbWUgPSBcImNhbC1jdXJyLWRhdGVcIjtcclxuICBjYWxlbmRhckhlYWRlckRhdGUuaWQgPSBcImNhbC1jdXJyLWRhdGVcIjtcclxuICByZW5kZXJDYWxlbmRhckRhdGUoY2FsZW5kYXJIZWFkZXJEYXRlLCBkYXRlLCB5ZWFyLCBtb250aCk7XHJcbiAgY29uc3QgY2FsZW5kYXJOYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjYWxlbmRhclByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjYWxlbmRhclByZXYudGV4dENvbnRlbnQgPSBcImNoZXZyb25fbGVmdFwiO1xyXG4gIGNhbGVuZGFyUHJldi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgY2FsLWNoZXZyb24tYnRuXCI7XHJcbiAgY2FsZW5kYXJQcmV2LmlkID0gXCJjYWwtY2hldnJvbi1wcmV2XCI7XHJcbiAgY29uc3QgY2FsZW5kYXJOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY2FsZW5kYXJOZXh0LnRleHRDb250ZW50ID0gXCJjaGV2cm9uX3JpZ2h0XCI7XHJcbiAgY2FsZW5kYXJOZXh0LmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBjYWwtY2hldnJvbi1idG5cIjtcclxuICBjYWxlbmRhck5leHQuaWQgPSBcImNhbC1jaGV2cm9uLW5leHRcIjtcclxuICBjYWxlbmRhck5hdmlnYXRpb24uYXBwZW5kKGNhbGVuZGFyUHJldiwgY2FsZW5kYXJOZXh0KTtcclxuICBjYWxlbmRhckhlYWRlci5hcHBlbmQoY2FsZW5kYXJIZWFkZXJEYXRlLCBjYWxlbmRhck5hdmlnYXRpb24pO1xyXG5cclxuICBjb25zdCBjaGV2cm9ucyA9IFtjYWxlbmRhck5leHQsIGNhbGVuZGFyUHJldl07XHJcblxyXG4gIHJlbmRlckNhbGVuZGFyRGF0ZShjYWxlbmRhckhlYWRlckRhdGUsIGRhdGUsIHllYXIsIG1vbnRoKTtcclxuXHJcbiAgY2hldnJvbnMuZm9yRWFjaCgoY2hldnJvbikgPT4ge1xyXG4gICAgY2hldnJvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtb250aCA9IGNoZXZyb24uaWQgPT09IFwiY2FsLWNoZXZyb24tcHJldlwiID8gbW9udGggLSAxIDogbW9udGggKyAxO1xyXG4gICAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgICAvLyBTZXQgdGhlIGRhdGUgdG8gdGhlIGZpcnN0IGRheSBvZiB0aGVcclxuICAgICAgICAvLyBtb250aCB3aXRoIHRoZSBuZXcgeWVhclxyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgbmV3IERhdGUoKS5nZXREYXRlKCkpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIHllYXIgdG8gdGhlIG5ldyB5ZWFyXHJcbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBtb250aCB0byB0aGUgbmV3IG1vbnRoXHJcbiAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyQ2FsZW5kYXJEYXRlKGNhbGVuZGFySGVhZGVyRGF0ZSwgZGF0ZSwgeWVhciwgbW9udGgpO1xyXG4gICAgICByZW5kZXJDYWxlbmRhckJvZHkoY2FsQm9keSwgZGF0ZSwgeWVhciwgbW9udGgsIGJ1ZGdldERhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYWxlbmRhckhlYWRlcjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyQm9keSA9IChcclxuICBjYWxCb2R5OiBIVE1MRGl2RWxlbWVudCxcclxuICBkYXRlOiBEYXRlLFxyXG4gIHllYXI6IG51bWJlcixcclxuICBtb250aDogbnVtYmVyLFxyXG4gIGJ1ZGdldERhdGE6IEJ1ZGdldFtdXHJcbikgPT4ge1xyXG4gIGNhbEJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY2FsQm9keS5hcHBlbmRDaGlsZChjYWxlbmRhckJvZHkoZGF0ZSwgeWVhciwgbW9udGgsIGJ1ZGdldERhdGEpKTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGVuZGFyQm9keSA9IChcclxuICBkYXRlOiBEYXRlLFxyXG4gIHllYXI6IG51bWJlcixcclxuICBtb250aDogbnVtYmVyLFxyXG4gIGJ1ZGdldERhdGE6IEJ1ZGdldFtdXHJcbik6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYWxlbmRhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keS5jbGFzc05hbWUgPSBcImNhbC1ib2R5XCI7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgc3RhcnRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZW5kX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGVuZF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcblxyXG4gIGNvbnN0IG1vbnRobHlEYXRhID0gYnVkZ2V0RGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1TdGFydCA9IG5ldyBEYXRlKGl0ZW0uc3RhcnRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBpdGVtRW5kID0gbmV3IERhdGUoaXRlbS5lbmRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBjdXJyZW50U3RhcnQgPSBuZXcgRGF0ZShzdGFydF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbmQgPSBuZXcgRGF0ZShlbmRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdGFydCA+PSBjdXJyZW50U3RhcnQgJiYgaXRlbUVuZCA8PSBjdXJyZW50RW5kO1xyXG4gIH0pO1xyXG5cclxuICBjYWxlbmRhckJvZHkuYXBwZW5kKFxyXG4gICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiSW5jb21lXCIsIG1vbnRobHlEYXRhKSxcclxuICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIkJpbGxzXCIsIG1vbnRobHlEYXRhKSxcclxuICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIlBlcnNvbmFsXCIsIG1vbnRobHlEYXRhKSxcclxuICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIlNhdmluZ3NcIiwgbW9udGhseURhdGEpLFxyXG4gICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiT3RoZXJcIiwgbW9udGhseURhdGEpXHJcbiAgKTtcclxuICByZXR1cm4gY2FsZW5kYXJCb2R5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FsZW5kYXIgfTtcclxuIiwiaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBkZWxldGVCdWRnZXQgPSBhc3luYyAoYnVkZ2V0X2lkOiBudW1iZXIpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC9kZWxldGVCdWRnZXQucGhwP2J1ZGdldF9pZD0ke2J1ZGdldF9pZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgb3BlbkJ1ZGdldCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkZWxldGVCdWRnZXQgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWRpYWxvZ1wiKVxyXG4pO1xyXG5cclxuY29uc3QgcG9wdWxhdGVCdWRnZXRGb3JtID0gKGJ1ZGdldERhdGE6IEJ1ZGdldCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICk7XHJcbiAgY2F0ZWdvcnkudmFsdWUgPSBidWRnZXREYXRhLmNhdGVnb3J5O1xyXG4gIGNvbnN0IGFtb3VudCA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApO1xyXG4gIGFtb3VudC52YWx1ZSA9IGJ1ZGdldERhdGEuYW1vdW50LnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgdGl0bGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApO1xyXG4gIHRpdGxlLnZhbHVlID0gYnVkZ2V0RGF0YS50aXRsZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICk7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBidWRnZXREYXRhLmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1zdGFydC1kYXRlXCIpXHJcbiAgKTtcclxuICBzdGFydERhdGUudmFsdWUgPSBidWRnZXREYXRhLnN0YXJ0X2RhdGUudG9TdHJpbmcoKTtcclxuICBjb25zdCBlbmREYXRlID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWVuZC1kYXRlXCIpXHJcbiAgKTtcclxuICBlbmREYXRlLnZhbHVlID0gYnVkZ2V0RGF0YS5lbmRfZGF0ZS50b1N0cmluZygpO1xyXG4gIGNvbnN0IGJ1ZGdldElkID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWJ1ZGdldC1pZFwiKVxyXG4gICk7XHJcbiAgYnVkZ2V0SWQudmFsdWUgPSBidWRnZXREYXRhLmJ1ZGdldF9pZC50b1N0cmluZygpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RWRpdEJ1ZGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KFxyXG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1hbW91bnRcIikpLnZhbHVlXHJcbiAgKTtcclxuICBjb25zdCB0aXRsZSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBidWRnZXRfaWQgPSBwYXJzZUludChcclxuICAgICg8SFRNTFRleHRBcmVhRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYnVkZ2V0LWlkXCIpKVxyXG4gICAgICAudmFsdWVcclxuICApO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIikhLnRvU3RyaW5nKCkpO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbC1jdXJyLWRhdGVcIik7XHJcbiAgY29uc3QgdW5wYXJzZWREYXRlOiBzdHJpbmdbXSA9IGNhbGVuZGFySGVhZGVyRGF0ZT8uZGF0YXNldC5kYXRlPy5zcGxpdChcIiBcIikhO1xyXG4gIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzBdKTtcclxuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzFdKTtcclxuICBjb25zdCBzdGFydF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBzdGFydF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZW5kX2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgYW1vdW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVzZXJfaWQsXHJcbiAgICBzdGFydF9kYXRlLFxyXG4gICAgZW5kX2RhdGUsXHJcbiAgICBidWRnZXRfaWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ1ZGdldCA9IGFzeW5jIChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKGJ1ZGdldERhdGEpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC91cGRhdGVCdWRnZXQucGhwXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShidWRnZXREYXRhKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICBlZGl0QnVkZ2V0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXBkYXRlQnVkZ2V0LCBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcywgcG9wdWxhdGVCdWRnZXRGb3JtIH07XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG5cclxuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBob21lRGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBjcmVhdGUgYW5kIHBvcHVsYXRlIGxlZnQgYW5kIHJpZ2h0IHBvcnRpb25zIG9mIHRoZSBoZWFkZXJcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBoZWFkZXJMZWZ0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIFwiO1xyXG4gIGhlYWRlclJpZ2h0LnRleHRDb250ZW50ID0gXCJKYWNrIVwiO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID0gXCJob21lLWhlYWRlclwiO1xyXG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiaG9tZS1oZWFkZXIgaG9tZS1oZWFkZXItcmlnaHRcIjtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBmb3IgdGFnIGxpbmUgYmVsb3cgd2VsY29tZSBtZXNzYWdlXHJcbiAgY29uc3QgaG9tZVRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVUYWdMaW5lLnRleHRDb250ZW50ID1cclxuICAgIFwiUmVhZHkgdG8gdGFrZSBjb250cm9sIG9mIHlvdXIgZmluYW5jZXM/IExldCdzIGdldCBzdGFydGVkLlwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFnTGluZSk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnVkZ2V0IH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnRuXCIpO1xyXG5jb25zdCBidWRnZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1idG5cIik7XHJcbmNvbnN0IG1haW5OYXZDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKTtcclxuXHJcbm1haW5OYXZDb250Py5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuY29uc3QgZmV0Y2hCdWRnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC9mZXRjaEJ1ZGdldC5waHA/dXNlcl9pZD0ke3VzZXJJZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmJ1ZGdldHMpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJ1ZGdldHM7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG9wZW5Ib21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59O1xyXG5cclxuaG9tZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5Ib21lKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlbkJ1ZGdldCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBidWRnZXREYXRhID0gYXdhaXQgZmV0Y2hCdWRnZXREYXRhKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb25zdCBidWRnZXQgPSBjcmVhdGVCdWRnZXQoYnVkZ2V0RGF0YSk7XHJcbiAgY29udGFpbmVyPy5hcHBlbmRDaGlsZChidWRnZXQpO1xyXG59O1xyXG5cclxuYnVkZ2V0QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgb3BlbkJ1ZGdldCgpO1xyXG59KTtcclxuXHJcbm9wZW5Ib21lKCk7XHJcblxyXG5leHBvcnQgeyBvcGVuQnVkZ2V0IH07XHJcbiIsImNvbnN0IG5hdmJhcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3QgbmF2YmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbm5hdmJhckxlZnQuc3JjID0gXCIuLi9wdWJsaWMvYXNzZXRzL2J3bG9nby5wbmdcIjtcclxubmF2YmFyTGVmdC5jbGFzc05hbWUgPSBcIm5hdmJhci1sZWZ0XCI7XHJcbmNvbnN0IG5hdmJhck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5hdmJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmF2YmFyLmFwcGVuZChuYXZiYXJMZWZ0LCBuYXZiYXJNaWQsIG5hdmJhclJpZ2h0KTtcclxuXHJcbmV4cG9ydCB7IG5hdmJhciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9