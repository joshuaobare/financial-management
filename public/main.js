/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BudgetCalculator.ts":
/*!*********************************!*\
  !*** ./src/BudgetCalculator.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class BudgetCalculator {
    constructor(budgetData) {
        this.budgetData = [];
        this.budgetData = budgetData;
    }
    budgetCategoryCalculator(category) {
        let sum = 0;
        this.budgetData.forEach((item) => {
            if (item.category === category) {
                sum += parseInt(item.amount);
            }
        });
        return sum;
    }
    totalMonthlyAllocation() {
        let sum = 0;
        this.budgetData.forEach((item) => {
            if (item.category === "Income" || item.category === "Savings")
                return;
            sum += parseInt(item.amount);
        });
        return sum;
    }
    monthlyExcessCalculator() {
        let incomeTotal = 0;
        let totalSpend = 0;
        this.budgetData.forEach((item) => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BudgetCalculator);


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
/* harmony import */ var _calendarSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarSidebar */ "./src/calendarSidebar.ts");


const createCalendar = (budgetData) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendar = document.createElement("div");
    calendar.className = "cal";
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
    const calendarBodyLeft = document.createElement("div");
    calendarBodyLeft.className = "cal-body-left";
    const calendarBodyRight = document.createElement("div");
    calendarBodyRight.className = "cal-body-right";
    const calSidebar = (0,_calendarSidebar__WEBPACK_IMPORTED_MODULE_1__.calendarSidebar)(monthlyData);
    calendarBodyLeft.append((0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Income", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Bills", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Personal", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Savings", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Other", monthlyData));
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
/* harmony import */ var _BudgetCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BudgetCalculator */ "./src/BudgetCalculator.ts");

const calendarSidebar = (budgetData) => {
    const sidebar = document.createElement("div");
    sidebar.className = "cal-sidebar";
    sidebar.append(sidebarTop(budgetData), sidebarBottom(budgetData));
    return sidebar;
};
const sidebarTop = (budgetData) => {
    const budgetCalculator = new _BudgetCalculator__WEBPACK_IMPORTED_MODULE_0__["default"](budgetData);
    const section = document.createElement("div");
    const sectionHeader = document.createElement("h2");
    sectionHeader.textContent = "Monthly Breakdown";
    const body = document.createElement("div");
    const incomeSection = document.createElement("div");
    const income = budgetCalculator.budgetCategoryCalculator("Income").toString();
    incomeSection.textContent = `Income this month: ${income}`;
    const totalSpendSection = document.createElement("div");
    const totalSpend = budgetCalculator.totalMonthlyAllocation();
    console.log(JSON.parse(JSON.stringify(budgetData)));
    console.log(totalSpend);
    totalSpendSection.textContent = `Total spend this month: ${totalSpend}`;
    const savingSection = document.createElement("div");
    const netIncome = budgetCalculator.monthlyExcessCalculator().toString();
    savingSection.textContent = `Leftover: ${netIncome}`;
    body.append(incomeSection, totalSpendSection, savingSection);
    section.append(sectionHeader, body);
    return section;
};
const sidebarBottom = (budgetData) => {
    const section = document.createElement("div");
    return section;
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
/* harmony export */   openBudget: () => (/* binding */ openBudget)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.ts");
/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.ts");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction */ "./src/transaction.ts");
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
const fetchTransactionData = () => __awaiter(void 0, void 0, void 0, function* () {
    const userId = localStorage.getItem("user_id");
    try {
        const request = yield fetch(`http://localhost:8080/financial-management/php/fetchTransactions.php?user_id=${userId}`, {
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

const createTransaction = (transactionData) => {
    const transaction = document.createElement("div");
    transaction.className = "transaction";
    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(transactionData);
    transaction.appendChild(calendar);
    return transaction;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztBQUUyQjs7Ozs7OztVQ2I3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9CdWRnZXRDYWxjdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9idWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1ZGdldENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsZW5kYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyU2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVsZXRlQnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0QnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2YmFyLnRzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuY2xhc3MgQnVkZ2V0Q2FsY3VsYXRvciB7XHJcbiAgYnVkZ2V0RGF0YTogQnVkZ2V0W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoYnVkZ2V0RGF0YTogQnVkZ2V0W10pIHtcclxuICAgIHRoaXMuYnVkZ2V0RGF0YSA9IGJ1ZGdldERhdGE7XHJcbiAgfVxyXG5cclxuICBidWRnZXRDYXRlZ29yeUNhbGN1bGF0b3IoY2F0ZWdvcnk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuXHJcbiAgICB0aGlzLmJ1ZGdldERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3VtO1xyXG4gIH1cclxuXHJcbiAgdG90YWxNb250aGx5QWxsb2NhdGlvbigpOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgdGhpcy5idWRnZXREYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiSW5jb21lXCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gXCJTYXZpbmdzXCIpIHJldHVybjtcclxuICAgICAgc3VtICs9IHBhcnNlSW50KGl0ZW0uYW1vdW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdW07XHJcbiAgfVxyXG5cclxuICBtb250aGx5RXhjZXNzQ2FsY3VsYXRvcigpOiBudW1iZXIge1xyXG4gICAgbGV0IGluY29tZVRvdGFsID0gMDtcclxuICAgIGxldCB0b3RhbFNwZW5kID0gMDtcclxuXHJcbiAgICB0aGlzLmJ1ZGdldERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJJbmNvbWVcIikge1xyXG4gICAgICAgIGluY29tZVRvdGFsICs9IHBhcnNlSW50KGl0ZW0uYW1vdW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiU2F2aW5nc1wiKSByZXR1cm47XHJcbiAgICAgIHRvdGFsU3BlbmQgKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGluY29tZVRvdGFsIC0gdG90YWxTcGVuZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZGdldENhbGN1bGF0b3I7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlQnVkZ2V0LFxyXG4gIGdldEVkaXRCdWRnZXRGb3JtVmFsdWVzLFxyXG4gIHBvcHVsYXRlQnVkZ2V0Rm9ybSxcclxufSBmcm9tIFwiLi9lZGl0QnVkZ2V0XCI7XHJcblxyXG5jb25zdCBkaWFsb2cgPSA8SFRNTERpYWxvZ0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWRpYWxvZ1wiKVxyXG4pO1xyXG5jb25zdCBidWRnZXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybVwiKTtcclxuY29uc3QgZWRpdEJ1ZGdldEZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm1cIilcclxuKTtcclxuY29uc3QgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1kaWFsb2ctY2xvc2VcIik7XHJcbmNvbnN0IGVkaXRCdWRnZXREaWFsb2dDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiZWRpdC1idWRnZXQtZGlhbG9nLWNsb3NlXCJcclxuKTtcclxuXHJcbmNsb3NlRGlhbG9nPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGRpYWxvZyEuY2xvc2UoKTtcclxufSk7XHJcblxyXG5lZGl0QnVkZ2V0RGlhbG9nQ2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZWRpdEJ1ZGdldERpYWxvZyEuY2xvc2UoKTtcclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVCdWRnZXQgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0W10pOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgYnVkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXQuY2xhc3NOYW1lID0gXCJidWRnZXRcIjtcclxuICAvL25ld0Rpdj8uc2V0QXR0cmlidXRlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQlVER0VUIEhFQURJTkdcIjtcclxuICBjb25zdCBjYWxlbmRhciA9IGNyZWF0ZUNhbGVuZGFyKGJ1ZGdldERhdGEpO1xyXG4gIGNvbnN0IGJ1ZGdldFNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1ZGdldC5hcHBlbmRDaGlsZChjYWxlbmRhcik7XHJcbiAgYnVkZ2V0LmFwcGVuZENoaWxkKGJ1ZGdldFNpZGViYXIpO1xyXG4gIHJldHVybiBidWRnZXQ7XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdWRnZXRGb3JtVmFsdWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYW1vdW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgdGl0bGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS10aXRsZVwiKSlcclxuICAgIC52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgdXNlcl9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKTtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWwtY3Vyci1kYXRlXCIpO1xyXG4gIGNvbnN0IHVucGFyc2VkRGF0ZTogc3RyaW5nW10gPSBjYWxlbmRhckhlYWRlckRhdGU/LmRhdGFzZXQuZGF0ZT8uc3BsaXQoXCIgXCIpITtcclxuICBjb25zdCBtb250aCA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVswXSk7XHJcbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVsxXSk7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgc3RhcnRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZW5kX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGVuZF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGFtb3VudCxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICB1c2VyX2lkLFxyXG4gICAgc3RhcnRfZGF0ZSxcclxuICAgIGVuZF9kYXRlLFxyXG4gIH07XHJcbn07XHJcbmNvbnN0IHJlc2V0QnVkZ2V0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBhbW91bnQgPSAoKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxuICBjb25zdCB0aXRsZSA9ICgoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS10aXRsZVwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApKS52YWx1ZSA9IFwiXCIpO1xyXG59O1xyXG5jb25zdCBzdWJtaXRCdWRnZXRGb3JtID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC9jcmVhdGVCdWRnZXQucGhwXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnZXRCdWRnZXRGb3JtVmFsdWVzKCkpLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICByZXNldEJ1ZGdldEZvcm0oKTtcclxuICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuYnVkZ2V0Rm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzdWJtaXRCdWRnZXRGb3JtKCk7XHJcbn0pO1xyXG5cclxuZWRpdEJ1ZGdldEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZTogRXZlbnQpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgYnVkZ2V0RGF0YSA9IHsgLi4uZ2V0RWRpdEJ1ZGdldEZvcm1WYWx1ZXMoKSwgY3JlYXRlZF9hdDogbnVsbCB9O1xyXG4gIHVwZGF0ZUJ1ZGdldChidWRnZXREYXRhKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCdWRnZXQsIHJlc2V0QnVkZ2V0Rm9ybSwgZ2V0QnVkZ2V0Rm9ybVZhbHVlcyB9O1xyXG4iLCJpbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZUJ1ZGdldCxcclxuICBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcyxcclxuICBwb3B1bGF0ZUJ1ZGdldEZvcm0sXHJcbn0gZnJvbSBcIi4vZWRpdEJ1ZGdldFwiO1xyXG5pbXBvcnQgeyBvcGVuQnVkZ2V0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZGVsZXRlQnVkZ2V0IH0gZnJvbSBcIi4vZGVsZXRlQnVkZ2V0XCI7XHJcblxyXG5jb25zdCBkaWFsb2cgPSA8SFRNTERpYWxvZ0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWRpYWxvZ1wiKVxyXG4pO1xyXG5cclxuY29uc3QgY3JlYXRlQnVkZ2V0Q29tcG9uZW50ID0gKHRpdGxlOiBzdHJpbmcsIGJ1ZGdldERhdGE6IEJ1ZGdldFtdKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYnVkZ2V0RGF0YSk7XHJcbiAgY29uc3QgYnVkZ2V0Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXRDb21wb25lbnQuY2xhc3NOYW1lID0gXCJidWRnZXQtY29tcG9uZW50XCI7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWRnZXQtaGVhZGVyXCI7XHJcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTGVmdC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LWxlZnQgYnVkZ2V0LWhlYWRlci1sZWZ0XCI7XHJcbiAgY29uc3QgaGVhZGVyTWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJNaWQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LW1pZCBidWRnZXQtaGVhZGVyLW1pZFwiO1xyXG4gIGhlYWRlck1pZC50ZXh0Q29udGVudCA9IFwiUGxhbm5lZFwiO1xyXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXJSaWdodC50ZXh0Q29udGVudCA9IFwiUmVjZWl2ZWRcIjtcclxuICBoZWFkZXJSaWdodC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctcmlnaHQgYnVkZ2V0LWhlYWRlci1yaWdodFwiO1xyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyTWlkLCBoZWFkZXJSaWdodCk7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29tcG9uZW50RGF0YSA9IGJ1ZGdldERhdGEuZmlsdGVyKFxyXG4gICAgKGJ1ZGdldEl0ZW0pID0+IGJ1ZGdldEl0ZW0uY2F0ZWdvcnkgPT09IHRpdGxlXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhjb21wb25lbnREYXRhKTtcclxuICBjb21wb25lbnREYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIG1haW4uYXBwZW5kKHJvdyhpdGVtKSk7XHJcbiAgfSk7XHJcblxyXG4gIG1haW4uY2xhc3NOYW1lID0gXCJidWRnZXQtbWFpblwiO1xyXG5cclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5jbGFzc05hbWUgPSBcImJ1ZGdldC1mb290ZXJcIjtcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEl0ZW1cIjtcclxuXHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBidWRnZXRGb3JtU2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PihcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICAgICk7XHJcbiAgICBidWRnZXRGb3JtU2VsZWN0LnZhbHVlID0gdGl0bGU7XHJcbiAgICBkaWFsb2chLnNob3dNb2RhbCgpO1xyXG4gIH0pO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICBidWRnZXRDb21wb25lbnQuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcclxuXHJcbiAgcmV0dXJuIGJ1ZGdldENvbXBvbmVudDtcclxufTtcclxuXHJcbmNvbnN0IHJvdyA9IChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICBjb25zdCBzaW5nbGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpbmdsZVJvdy5jbGFzc05hbWUgPSBcImJ1ZGdldC1pdGVtXCI7XHJcbiAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGJ1ZGdldC1pdGVtLWRlbC1pY29uXCI7XHJcbiAgY29uc3Qgcm93TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TWFpbi5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3dcIjtcclxuICBjb25zdCByb3dMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dMZWZ0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1sZWZ0IGJ1ZGdldC1yb3ctbGVmdC1pbnB1dFwiO1xyXG4gIHJvd0xlZnQudGV4dENvbnRlbnQgPSBidWRnZXREYXRhLnRpdGxlO1xyXG4gIGNvbnN0IHJvd01pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TWlkLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1taWRcIjtcclxuICByb3dNaWQudGV4dENvbnRlbnQgPSBgS1Nocy4gJHtidWRnZXREYXRhLmFtb3VudH1gO1xyXG4gIGNvbnN0IHJvd1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dSaWdodC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctcmlnaHRcIjtcclxuICByb3dSaWdodC50ZXh0Q29udGVudCA9IFwiS1Nocy4gMC4wMFwiO1xyXG5cclxuICByb3dNYWluLmFwcGVuZChyb3dMZWZ0LCByb3dNaWQsIHJvd1JpZ2h0KTtcclxuXHJcbiAgcm93TWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcG9wdWxhdGVCdWRnZXRGb3JtKGJ1ZGdldERhdGEpO1xyXG4gICAgZWRpdEJ1ZGdldERpYWxvZy5zaG93KCk7XHJcbiAgfSk7XHJcbiAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZGVsZXRlQnVkZ2V0KGJ1ZGdldERhdGEuYnVkZ2V0X2lkKTtcclxuICB9KTtcclxuXHJcbiAgc2luZ2xlUm93LmFwcGVuZChkZWxldGVJY29uLCByb3dNYWluKTtcclxuXHJcbiAgcmV0dXJuIHNpbmdsZVJvdztcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCB9O1xyXG4iLCJpbXBvcnQgeyBidWRnZXREYXRhIH0gZnJvbSBcIi4uL3Rlc3RzL3Rlc3RWYWx1ZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnVkZ2V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYnVkZ2V0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IGNhbGVuZGFyU2lkZWJhciB9IGZyb20gXCIuL2NhbGVuZGFyU2lkZWJhclwiO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FsZW5kYXIgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0W10pOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXIuY2xhc3NOYW1lID0gXCJjYWxcIjtcclxuICBjb25zdCBjYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjYWxIZWFkZXIgPSBjYWxlbmRhckhlYWRlcihjYWxCb2R5LCBkYXRlLCB5ZWFyLCBtb250aCwgYnVkZ2V0RGF0YSk7XHJcbiAgY2FsQm9keS5pZCA9IFwiY2FsLWJvZHktY29udFwiO1xyXG4gIHJlbmRlckNhbGVuZGFyQm9keShjYWxCb2R5LCBkYXRlLCB5ZWFyLCBtb250aCwgYnVkZ2V0RGF0YSk7XHJcbiAgY2FsZW5kYXIuYXBwZW5kKGNhbEhlYWRlciwgY2FsQm9keSk7XHJcblxyXG4gIHJldHVybiBjYWxlbmRhcjtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckNhbGVuZGFyRGF0ZSA9IChcclxuICBjYWxlbmRhckhlYWRlckRhdGU6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXJcclxuKSA9PiB7XHJcbiAgY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICAgIFwiSmFudWFyeVwiLFxyXG4gICAgXCJGZWJydWFyeVwiLFxyXG4gICAgXCJNYXJjaFwiLFxyXG4gICAgXCJBcHJpbFwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuZVwiLFxyXG4gICAgXCJKdWx5XCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJTZXB0ZW1iZXJcIixcclxuICAgIFwiT2N0b2JlclwiLFxyXG4gICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJEZWNlbWJlclwiLFxyXG4gIF07XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLnRleHRDb250ZW50ID0gYCR7bW9udGhOYW1lc1ttb250aF19ICR7eWVhcn1gO1xyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZS5kYXRhc2V0LmRhdGUgPSBgJHttb250aH0gJHt5ZWFyfWA7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckhlYWRlciA9IChcclxuICBjYWxCb2R5OiBIVE1MRGl2RWxlbWVudCxcclxuICBkYXRlOiBEYXRlLFxyXG4gIHllYXI6IG51bWJlcixcclxuICBtb250aDogbnVtYmVyLFxyXG4gIGJ1ZGdldERhdGE6IEJ1ZGdldFtdXHJcbikgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckhlYWRlci5jbGFzc05hbWUgPSBcImNhbC1oZWFkZXJcIjtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckhlYWRlckRhdGUuY2xhc3NOYW1lID0gXCJjYWwtY3Vyci1kYXRlXCI7XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLmlkID0gXCJjYWwtY3Vyci1kYXRlXCI7XHJcbiAgcmVuZGVyQ2FsZW5kYXJEYXRlKGNhbGVuZGFySGVhZGVyRGF0ZSwgZGF0ZSwgeWVhciwgbW9udGgpO1xyXG4gIGNvbnN0IGNhbGVuZGFyTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2FsZW5kYXJQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY2FsZW5kYXJQcmV2LnRleHRDb250ZW50ID0gXCJjaGV2cm9uX2xlZnRcIjtcclxuICBjYWxlbmRhclByZXYuY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGNhbC1jaGV2cm9uLWJ0blwiO1xyXG4gIGNhbGVuZGFyUHJldi5pZCA9IFwiY2FsLWNoZXZyb24tcHJldlwiO1xyXG4gIGNvbnN0IGNhbGVuZGFyTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNhbGVuZGFyTmV4dC50ZXh0Q29udGVudCA9IFwiY2hldnJvbl9yaWdodFwiO1xyXG4gIGNhbGVuZGFyTmV4dC5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgY2FsLWNoZXZyb24tYnRuXCI7XHJcbiAgY2FsZW5kYXJOZXh0LmlkID0gXCJjYWwtY2hldnJvbi1uZXh0XCI7XHJcbiAgY2FsZW5kYXJOYXZpZ2F0aW9uLmFwcGVuZChjYWxlbmRhclByZXYsIGNhbGVuZGFyTmV4dCk7XHJcbiAgY2FsZW5kYXJIZWFkZXIuYXBwZW5kKGNhbGVuZGFySGVhZGVyRGF0ZSwgY2FsZW5kYXJOYXZpZ2F0aW9uKTtcclxuXHJcbiAgY29uc3QgY2hldnJvbnMgPSBbY2FsZW5kYXJOZXh0LCBjYWxlbmRhclByZXZdO1xyXG5cclxuICByZW5kZXJDYWxlbmRhckRhdGUoY2FsZW5kYXJIZWFkZXJEYXRlLCBkYXRlLCB5ZWFyLCBtb250aCk7XHJcblxyXG4gIGNoZXZyb25zLmZvckVhY2goKGNoZXZyb24pID0+IHtcclxuICAgIGNoZXZyb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbW9udGggPSBjaGV2cm9uLmlkID09PSBcImNhbC1jaGV2cm9uLXByZXZcIiA/IG1vbnRoIC0gMSA6IG1vbnRoICsgMTtcclxuICAgICAgaWYgKG1vbnRoIDwgMCB8fCBtb250aCA+IDExKSB7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBkYXRlIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhlXHJcbiAgICAgICAgLy8gbW9udGggd2l0aCB0aGUgbmV3IHllYXJcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSB5ZWFyIHRvIHRoZSBuZXcgeWVhclxyXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgbW9udGggdG8gdGhlIG5ldyBtb250aFxyXG4gICAgICAgIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlckNhbGVuZGFyRGF0ZShjYWxlbmRhckhlYWRlckRhdGUsIGRhdGUsIHllYXIsIG1vbnRoKTtcclxuICAgICAgcmVuZGVyQ2FsZW5kYXJCb2R5KGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBidWRnZXREYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FsZW5kYXJIZWFkZXI7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhckJvZHkgPSAoXHJcbiAgY2FsQm9keTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBidWRnZXREYXRhOiBCdWRnZXRbXVxyXG4pID0+IHtcclxuICBjYWxCb2R5LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGNhbEJvZHkuYXBwZW5kQ2hpbGQoY2FsZW5kYXJCb2R5KGRhdGUsIHllYXIsIG1vbnRoLCBidWRnZXREYXRhKSk7XHJcbn07XHJcblxyXG5jb25zdCBjYWxlbmRhckJvZHkgPSAoXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBidWRnZXREYXRhOiBCdWRnZXRbXVxyXG4pOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXJCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckJvZHkuY2xhc3NOYW1lID0gXCJjYWwtYm9keVwiO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGVuZF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBlbmRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG5cclxuICBjb25zdCBtb250aGx5RGF0YSA9IGJ1ZGdldERhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtU3RhcnQgPSBuZXcgRGF0ZShpdGVtLnN0YXJ0X2RhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgY29uc3QgaXRlbUVuZCA9IG5ldyBEYXRlKGl0ZW0uZW5kX2RhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgY29uc3QgY3VycmVudFN0YXJ0ID0gbmV3IERhdGUoc3RhcnRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBjdXJyZW50RW5kID0gbmV3IERhdGUoZW5kX2RhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG5cclxuICAgIHJldHVybiBpdGVtU3RhcnQgPj0gY3VycmVudFN0YXJ0ICYmIGl0ZW1FbmQgPD0gY3VycmVudEVuZDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJCb2R5TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJCb2R5TGVmdC5jbGFzc05hbWUgPSBcImNhbC1ib2R5LWxlZnRcIjtcclxuICBjb25zdCBjYWxlbmRhckJvZHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FsZW5kYXJCb2R5UmlnaHQuY2xhc3NOYW1lID0gXCJjYWwtYm9keS1yaWdodFwiO1xyXG4gIGNvbnN0IGNhbFNpZGViYXIgPSBjYWxlbmRhclNpZGViYXIobW9udGhseURhdGEpO1xyXG5cclxuICBjYWxlbmRhckJvZHlMZWZ0LmFwcGVuZChcclxuICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIkluY29tZVwiLCBtb250aGx5RGF0YSksXHJcbiAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJCaWxsc1wiLCBtb250aGx5RGF0YSksXHJcbiAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJQZXJzb25hbFwiLCBtb250aGx5RGF0YSksXHJcbiAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJTYXZpbmdzXCIsIG1vbnRobHlEYXRhKSxcclxuICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIk90aGVyXCIsIG1vbnRobHlEYXRhKVxyXG4gICk7XHJcbiAgY2FsZW5kYXJCb2R5UmlnaHQuYXBwZW5kKGNhbFNpZGViYXIpO1xyXG4gIGNhbGVuZGFyQm9keS5hcHBlbmQoY2FsZW5kYXJCb2R5TGVmdCwgY2FsZW5kYXJCb2R5UmlnaHQpO1xyXG4gIHJldHVybiBjYWxlbmRhckJvZHk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDYWxlbmRhciB9O1xyXG4iLCJpbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgQnVkZ2V0Q2FsY3VsYXRvciBmcm9tIFwiLi9CdWRnZXRDYWxjdWxhdG9yXCI7XHJcblxyXG5jb25zdCBjYWxlbmRhclNpZGViYXIgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0W10pID0+IHtcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwiY2FsLXNpZGViYXJcIjtcclxuXHJcbiAgc2lkZWJhci5hcHBlbmQoc2lkZWJhclRvcChidWRnZXREYXRhKSwgc2lkZWJhckJvdHRvbShidWRnZXREYXRhKSk7XHJcblxyXG4gIHJldHVybiBzaWRlYmFyO1xyXG59O1xyXG5cclxuY29uc3Qgc2lkZWJhclRvcCA9IChidWRnZXREYXRhOiBCdWRnZXRbXSkgPT4ge1xyXG4gIGNvbnN0IGJ1ZGdldENhbGN1bGF0b3IgPSBuZXcgQnVkZ2V0Q2FsY3VsYXRvcihidWRnZXREYXRhKTtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIk1vbnRobHkgQnJlYWtkb3duXCI7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5jb21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5jb21lID0gYnVkZ2V0Q2FsY3VsYXRvci5idWRnZXRDYXRlZ29yeUNhbGN1bGF0b3IoXCJJbmNvbWVcIikudG9TdHJpbmcoKTtcclxuICBpbmNvbWVTZWN0aW9uLnRleHRDb250ZW50ID0gYEluY29tZSB0aGlzIG1vbnRoOiAke2luY29tZX1gO1xyXG4gIGNvbnN0IHRvdGFsU3BlbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0b3RhbFNwZW5kID0gYnVkZ2V0Q2FsY3VsYXRvci50b3RhbE1vbnRobHlBbGxvY2F0aW9uKCk7XHJcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShidWRnZXREYXRhKSkpO1xyXG4gIGNvbnNvbGUubG9nKHRvdGFsU3BlbmQpO1xyXG4gIHRvdGFsU3BlbmRTZWN0aW9uLnRleHRDb250ZW50ID0gYFRvdGFsIHNwZW5kIHRoaXMgbW9udGg6ICR7dG90YWxTcGVuZH1gO1xyXG4gIGNvbnN0IHNhdmluZ1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5ldEluY29tZSA9IGJ1ZGdldENhbGN1bGF0b3IubW9udGhseUV4Y2Vzc0NhbGN1bGF0b3IoKS50b1N0cmluZygpO1xyXG4gIHNhdmluZ1NlY3Rpb24udGV4dENvbnRlbnQgPSBgTGVmdG92ZXI6ICR7bmV0SW5jb21lfWA7XHJcbiAgYm9keS5hcHBlbmQoaW5jb21lU2VjdGlvbiwgdG90YWxTcGVuZFNlY3Rpb24sIHNhdmluZ1NlY3Rpb24pO1xyXG4gIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25IZWFkZXIsIGJvZHkpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3Qgc2lkZWJhckJvdHRvbSA9IChidWRnZXREYXRhOiBCdWRnZXRbXSkgPT4ge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY2FsZW5kYXJTaWRlYmFyIH07XHJcbiIsImltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgZGVsZXRlQnVkZ2V0ID0gYXN5bmMgKGJ1ZGdldF9pZDogc3RyaW5nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9maW5hbmNpYWwtbWFuYWdlbWVudC9waHAvZGVsZXRlQnVkZ2V0LnBocD9idWRnZXRfaWQ9JHtidWRnZXRfaWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVsZXRlQnVkZ2V0IH07XHJcbiIsImltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuXHJcbmNvbnN0IHBvcHVsYXRlQnVkZ2V0Rm9ybSA9IChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApO1xyXG4gIGNhdGVnb3J5LnZhbHVlID0gYnVkZ2V0RGF0YS5jYXRlZ29yeTtcclxuICBjb25zdCBhbW91bnQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKTtcclxuICBhbW91bnQudmFsdWUgPSBidWRnZXREYXRhLmFtb3VudC50b1N0cmluZygpO1xyXG4gIGNvbnN0IHRpdGxlID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKTtcclxuICB0aXRsZS52YWx1ZSA9IGJ1ZGdldERhdGEudGl0bGU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSA8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tZGVzY3JpcHRpb25cIilcclxuICApO1xyXG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gYnVkZ2V0RGF0YS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBzdGFydERhdGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tc3RhcnQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgc3RhcnREYXRlLnZhbHVlID0gYnVkZ2V0RGF0YS5zdGFydF9kYXRlLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1lbmQtZGF0ZVwiKVxyXG4gICk7XHJcbiAgZW5kRGF0ZS52YWx1ZSA9IGJ1ZGdldERhdGEuZW5kX2RhdGUudG9TdHJpbmcoKTtcclxuICBjb25zdCBidWRnZXRJZCA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1idWRnZXQtaWRcIilcclxuICApO1xyXG4gIGJ1ZGdldElkLnZhbHVlID0gYnVkZ2V0RGF0YS5idWRnZXRfaWQudG9TdHJpbmcoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldEVkaXRCdWRnZXRGb3JtVmFsdWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1jYXRlZ29yeS1zZWxlY3RcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCBhbW91bnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS10aXRsZVwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGJ1ZGdldF9pZCA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYnVkZ2V0LWlkXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgdXNlcl9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKSEudG9TdHJpbmcoKTtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWwtY3Vyci1kYXRlXCIpO1xyXG4gIGNvbnN0IHVucGFyc2VkRGF0ZTogc3RyaW5nW10gPSBjYWxlbmRhckhlYWRlckRhdGU/LmRhdGFzZXQuZGF0ZT8uc3BsaXQoXCIgXCIpITtcclxuICBjb25zdCBtb250aCA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVswXSk7XHJcbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KHVucGFyc2VkRGF0ZVsxXSk7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZV9vYmogPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGVfb2JqLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxKTtcclxuICBjb25zdCBlbmRfZGF0ZV9vYmogPSBuZXcgRGF0ZSgpO1xyXG4gIGVuZF9kYXRlX29iai5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBzdGFydF9kYXRlX29iai50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICBjb25zdCBlbmRfZGF0ZSA9IGVuZF9kYXRlX29iai50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgYW1vdW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHVzZXJfaWQsXHJcbiAgICBzdGFydF9kYXRlLFxyXG4gICAgZW5kX2RhdGUsXHJcbiAgICBidWRnZXRfaWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ1ZGdldCA9IGFzeW5jIChidWRnZXREYXRhOiBCdWRnZXQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKGJ1ZGdldERhdGEpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC91cGRhdGVCdWRnZXQucGhwXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShidWRnZXREYXRhKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICBlZGl0QnVkZ2V0RGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgIG9wZW5CdWRnZXQoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXBkYXRlQnVkZ2V0LCBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcywgcG9wdWxhdGVCdWRnZXRGb3JtIH07XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG5cclxuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIHJldHVybiBob21lRGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBjcmVhdGUgYW5kIHBvcHVsYXRlIGxlZnQgYW5kIHJpZ2h0IHBvcnRpb25zIG9mIHRoZSBoZWFkZXJcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBoZWFkZXJMZWZ0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIFwiO1xyXG4gIGhlYWRlclJpZ2h0LnRleHRDb250ZW50ID0gXCJKYWNrIVwiO1xyXG4gIGhlYWRlckxlZnQuY2xhc3NOYW1lID0gXCJob21lLWhlYWRlclwiO1xyXG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwiaG9tZS1oZWFkZXIgaG9tZS1oZWFkZXItcmlnaHRcIjtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBmb3IgdGFnIGxpbmUgYmVsb3cgd2VsY29tZSBtZXNzYWdlXHJcbiAgY29uc3QgaG9tZVRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVUYWdMaW5lLnRleHRDb250ZW50ID1cclxuICAgIFwiUmVhZHkgdG8gdGFrZSBjb250cm9sIG9mIHlvdXIgZmluYW5jZXM/IExldCdzIGdldCBzdGFydGVkLlwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFnTGluZSk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnVkZ2V0IH0gZnJvbSBcIi4vYnVkZ2V0XCI7XHJcbmltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbiB9IGZyb20gXCIuL3RyYW5zYWN0aW9uXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIik7XHJcbmNvbnN0IGJ1ZGdldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWJ0blwiKTtcclxuY29uc3QgbWFpbk5hdkNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tYnRuXCIpO1xyXG5cclxubWFpbk5hdkNvbnQ/LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG5jb25zdCBmZXRjaEJ1ZGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL2ZldGNoQnVkZ2V0LnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuYnVkZ2V0cykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYnVkZ2V0cztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hUcmFuc2FjdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL2ZldGNoVHJhbnNhY3Rpb25zLnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UudHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS50cmFuc2FjdGlvbnM7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG9wZW5Ib21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59O1xyXG5cclxuaG9tZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5Ib21lKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlbkJ1ZGdldCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBidWRnZXREYXRhID0gPEJ1ZGdldFtdPmF3YWl0IGZldGNoQnVkZ2V0RGF0YSgpO1xyXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY29uc3QgYnVkZ2V0ID0gY3JlYXRlQnVkZ2V0KGJ1ZGdldERhdGEpO1xyXG4gIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQoYnVkZ2V0KTtcclxufTtcclxuXHJcbmJ1ZGdldEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5CdWRnZXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBvcGVuVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb25EYXRhID0gYXdhaXQgZmV0Y2hUcmFuc2FjdGlvbkRhdGEoKTtcclxuICBjb250YWluZXI/LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25EYXRhKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKHRyYW5zYWN0aW9uKTtcclxufTtcclxuXHJcbnRyYW5zYWN0aW9uQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG9wZW5UcmFuc2FjdGlvbigpO1xyXG59KTtcclxuXHJcbm9wZW5Ib21lKCk7XHJcblxyXG5leHBvcnQgeyBvcGVuQnVkZ2V0IH07XHJcbiIsImNvbnN0IG5hdmJhcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3QgbmF2YmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbm5hdmJhckxlZnQuc3JjID0gXCIuLi9wdWJsaWMvYXNzZXRzL2J3bG9nby5wbmdcIjtcclxubmF2YmFyTGVmdC5jbGFzc05hbWUgPSBcIm5hdmJhci1sZWZ0XCI7XHJcbmNvbnN0IG5hdmJhck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5hdmJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmF2YmFyLmFwcGVuZChuYXZiYXJMZWZ0LCBuYXZiYXJNaWQsIG5hdmJhclJpZ2h0KTtcclxuXHJcbmV4cG9ydCB7IG5hdmJhciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBjcmVhdGVUcmFuc2FjdGlvbiA9ICh0cmFuc2FjdGlvbkRhdGE6IEJ1ZGdldFtdKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRyYW5zYWN0aW9uLmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb25cIjtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXIgPSBjcmVhdGVDYWxlbmRhcih0cmFuc2FjdGlvbkRhdGEpO1xyXG4gIHRyYW5zYWN0aW9uLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zYWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb24gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==