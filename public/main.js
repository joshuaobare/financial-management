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
/* harmony import */ var _transactionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactionComponent */ "./src/transactionComponent.ts");



const createCalendar = (financialData) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendar = document.createElement("div");
    calendar.className = "cal";
    const calBody = document.createElement("div");
    const calHeader = calendarHeader(calBody, date, year, month, financialData);
    calBody.id = "cal-body-cont";
    renderCalendarBody(calBody, date, year, month, financialData);
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
const calendarHeader = (calBody, date, year, month, financialData) => {
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
            renderCalendarBody(calBody, date, year, month, financialData);
        });
    });
    return calendarHeader;
};
const renderCalendarBody = (calBody, date, year, month, financialData) => {
    calBody.replaceChildren();
    calBody.appendChild(calendarBody(date, year, month, financialData));
};
const calendarBody = (date, year, month, financialData) => {
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
    const calSidebar = (0,_calendarSidebar__WEBPACK_IMPORTED_MODULE_1__.calendarSidebar)(monthlyData);
    if (financialData) {
        calendarBodyLeft.append((0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Income", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Bills", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Personal", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Savings", monthlyData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Other", monthlyData));
    }
    else {
        (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Income", monthlyData),
            (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Bills", monthlyData),
            (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Personal", monthlyData),
            (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Savings", monthlyData),
            (0,_transactionComponent__WEBPACK_IMPORTED_MODULE_2__.createTransactionComponent)("Other", monthlyData);
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
const createTransactionComponent = (title, transactionData) => {
    const transactionComponent = document.createElement("div");
    transactionComponent.className = "transaction-component";
    const header = document.createElement("header");
    header.className = "transaction-header";
    const headerLeft = document.createElement("div");
    headerLeft.textContent = title;
    headerLeft.className = "transaction-row-left transaction-header-left";
    const headerRight = document.createElement("div");
    headerRight.textContent = "Amount";
    headerRight.className = "transaction-row-right transaction-header-right";
    header.append(headerLeft, headerRight);
    return transactionComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQnVkZ2V0Q2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVkZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9idWRnZXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLnRzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhclNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbGV0ZUJ1ZGdldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdEJ1ZGdldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdmJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zYWN0aW9uQ29tcG9uZW50LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2J1ZGdldEludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXMvdHJhbnNhY3Rpb25JbnRlcmZhY3RcIjtcclxuY2xhc3MgRmluYW5jZUNhbGN1bGF0b3Ige1xyXG4gIGZpbmFuY2VEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZmluYW5jZURhdGE6IEJ1ZGdldFtdIHwgVHJhbnNhY3Rpb25bXSkge1xyXG4gICAgdGhpcy5maW5hbmNlRGF0YSA9IGZpbmFuY2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgZmluYW5jZUNhdGVnb3J5Q2FsY3VsYXRvcihjYXRlZ29yeTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG5cclxuICAgIHRoaXMuZmluYW5jZURhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3VtO1xyXG4gIH1cclxuXHJcbiAgdG90YWxNb250aGx5U3BlbmQoKTogbnVtYmVyIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG5cclxuICAgIHRoaXMuZmluYW5jZURhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJJbmNvbWVcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBcIlNhdmluZ3NcIikgcmV0dXJuO1xyXG4gICAgICBzdW0gKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN1bTtcclxuICB9XHJcblxyXG4gIG1vbnRobHlFeGNlc3NDYWxjdWxhdG9yKCk6IG51bWJlciB7XHJcbiAgICBsZXQgaW5jb21lVG90YWwgPSAwO1xyXG4gICAgbGV0IHRvdGFsU3BlbmQgPSAwO1xyXG5cclxuICAgIHRoaXMuZmluYW5jZURhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gXCJJbmNvbWVcIikge1xyXG4gICAgICAgIGluY29tZVRvdGFsICs9IHBhcnNlSW50KGl0ZW0uYW1vdW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiU2F2aW5nc1wiKSByZXR1cm47XHJcbiAgICAgIHRvdGFsU3BlbmQgKz0gcGFyc2VJbnQoaXRlbS5hbW91bnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGluY29tZVRvdGFsIC0gdG90YWxTcGVuZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbmFuY2VDYWxjdWxhdG9yO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IG9wZW5CdWRnZXQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZUJ1ZGdldCxcclxuICBnZXRFZGl0QnVkZ2V0Rm9ybVZhbHVlcyxcclxuICBwb3B1bGF0ZUJ1ZGdldEZvcm0sXHJcbn0gZnJvbSBcIi4vZWRpdEJ1ZGdldFwiO1xyXG5cclxuY29uc3QgZGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWRpYWxvZ1wiKTtcclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuY29uc3QgYnVkZ2V0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm1cIik7XHJcbmNvbnN0IGVkaXRCdWRnZXRGb3JtID0gPEhUTUxGb3JtRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtXCIpXHJcbik7XHJcbmNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZGlhbG9nLWNsb3NlXCIpO1xyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImVkaXQtYnVkZ2V0LWRpYWxvZy1jbG9zZVwiXHJcbik7XHJcblxyXG5jbG9zZURpYWxvZz8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuZWRpdEJ1ZGdldERpYWxvZ0Nsb3NlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVkaXRCdWRnZXREaWFsb2chLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlQnVkZ2V0ID0gKGJ1ZGdldERhdGE6IEJ1ZGdldFtdKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGJ1ZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0XCI7XHJcbiAgLy9uZXdEaXY/LnNldEF0dHJpYnV0ZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJVREdFVCBIRUFESU5HXCI7XHJcbiAgY29uc3QgY2FsZW5kYXIgPSBjcmVhdGVDYWxlbmRhcihidWRnZXREYXRhKTtcclxuICBjb25zdCBidWRnZXRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidWRnZXQuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xyXG4gIGJ1ZGdldC5hcHBlbmRDaGlsZChidWRnZXRTaWRlYmFyKTtcclxuICByZXR1cm4gYnVkZ2V0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnVkZ2V0Rm9ybVZhbHVlcyA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHRpdGxlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tdGl0bGVcIikpXHJcbiAgICAudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIik7XHJcblxyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsLWN1cnItZGF0ZVwiKTtcclxuICBjb25zdCB1bnBhcnNlZERhdGU6IHN0cmluZ1tdID0gY2FsZW5kYXJIZWFkZXJEYXRlPy5kYXRhc2V0LmRhdGU/LnNwbGl0KFwiIFwiKSE7XHJcbiAgY29uc3QgbW9udGggPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMF0pO1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh1bnBhcnNlZERhdGVbMV0pO1xyXG4gIGNvbnN0IHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHN0YXJ0X2RhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGVuZF9kYXRlID0gbmV3IERhdGUoKTtcclxuICBlbmRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCArIDEsIDApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICB9O1xyXG59O1xyXG5jb25zdCByZXNldEJ1ZGdldEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgYW1vdW50ID0gKCg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWFtb3VudFwiKVxyXG4gICkpLnZhbHVlID0gXCJcIik7XHJcbiAgY29uc3QgdGl0bGUgPSAoKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApKS52YWx1ZSA9IFwiXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCg8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWUgPSBcIlwiKTtcclxufTtcclxuY29uc3Qgc3VibWl0QnVkZ2V0Rm9ybSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9maW5hbmNpYWwtbWFuYWdlbWVudC9waHAvY3JlYXRlQnVkZ2V0LnBocFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2V0QnVkZ2V0Rm9ybVZhbHVlcygpKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgcmVzZXRCdWRnZXRGb3JtKCk7XHJcbiAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICBvcGVuQnVkZ2V0KCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmJ1ZGdldEZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc3VibWl0QnVkZ2V0Rm9ybSgpO1xyXG59KTtcclxuXHJcbmVkaXRCdWRnZXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGJ1ZGdldERhdGEgPSB7IC4uLmdldEVkaXRCdWRnZXRGb3JtVmFsdWVzKCksIGNyZWF0ZWRfYXQ6IG51bGwgfTtcclxuICB1cGRhdGVCdWRnZXQoYnVkZ2V0RGF0YSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQnVkZ2V0LCByZXNldEJ1ZGdldEZvcm0sIGdldEJ1ZGdldEZvcm1WYWx1ZXMgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVCdWRnZXQsXHJcbiAgZ2V0RWRpdEJ1ZGdldEZvcm1WYWx1ZXMsXHJcbiAgcG9wdWxhdGVCdWRnZXRGb3JtLFxyXG59IGZyb20gXCIuL2VkaXRCdWRnZXRcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGRlbGV0ZUJ1ZGdldCB9IGZyb20gXCIuL2RlbGV0ZUJ1ZGdldFwiO1xyXG5cclxuY29uc3QgZGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWRpYWxvZ1wiKTtcclxuY29uc3QgZWRpdEJ1ZGdldERpYWxvZyA9IDxIVE1MRGlhbG9nRWxlbWVudD4oXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1kaWFsb2dcIilcclxuKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ1ZGdldENvbXBvbmVudCA9ICh0aXRsZTogc3RyaW5nLCBidWRnZXREYXRhOiBCdWRnZXRbXSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGJ1ZGdldERhdGEpO1xyXG4gIGNvbnN0IGJ1ZGdldENvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnVkZ2V0Q29tcG9uZW50LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWNvbXBvbmVudFwiO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LWhlYWRlclwiO1xyXG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckxlZnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICBoZWFkZXJMZWZ0LmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1sZWZ0IGJ1ZGdldC1oZWFkZXItbGVmdFwiO1xyXG4gIGNvbnN0IGhlYWRlck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyTWlkLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LXJvdy1taWQgYnVkZ2V0LWhlYWRlci1taWRcIjtcclxuICBoZWFkZXJNaWQudGV4dENvbnRlbnQgPSBcIlBsYW5uZWRcIjtcclxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyUmlnaHQudGV4dENvbnRlbnQgPSBcIlJlY2VpdmVkXCI7XHJcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0IGJ1ZGdldC1oZWFkZXItcmlnaHRcIjtcclxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckxlZnQsIGhlYWRlck1pZCwgaGVhZGVyUmlnaHQpO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbXBvbmVudERhdGEgPSBidWRnZXREYXRhLmZpbHRlcihcclxuICAgIChidWRnZXRJdGVtKSA9PiBidWRnZXRJdGVtLmNhdGVnb3J5ID09PSB0aXRsZVxyXG4gICk7XHJcbiAgY29tcG9uZW50RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBtYWluLmFwcGVuZChyb3coaXRlbSkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluLmNsYXNzTmFtZSA9IFwiYnVkZ2V0LW1haW5cIjtcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBmb290ZXIuY2xhc3NOYW1lID0gXCJidWRnZXQtZm9vdGVyXCI7XHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYnVkZ2V0Rm9ybVNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD4oXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWZvcm0tY2F0ZWdvcnktc2VsZWN0XCIpXHJcbiAgICApO1xyXG4gICAgYnVkZ2V0Rm9ybVNlbGVjdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgZGlhbG9nIS5zaG93TW9kYWwoKTtcclxuICB9KTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgYnVkZ2V0Q29tcG9uZW50LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XHJcblxyXG4gIHJldHVybiBidWRnZXRDb21wb25lbnQ7XHJcbn07XHJcblxyXG5jb25zdCByb3cgPSAoYnVkZ2V0RGF0YTogQnVkZ2V0KSA9PiB7XHJcbiAgY29uc3Qgc2luZ2xlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaW5nbGVSb3cuY2xhc3NOYW1lID0gXCJidWRnZXQtaXRlbVwiO1xyXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICBkZWxldGVJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBidWRnZXQtaXRlbS1kZWwtaWNvblwiO1xyXG4gIGNvbnN0IHJvd01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01haW4uY2xhc3NOYW1lID0gXCJidWRnZXQtcm93XCI7XHJcbiAgY29uc3Qgcm93TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TGVmdC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbGVmdCBidWRnZXQtcm93LWxlZnQtaW5wdXRcIjtcclxuICByb3dMZWZ0LnRleHRDb250ZW50ID0gYnVkZ2V0RGF0YS50aXRsZTtcclxuICBjb25zdCByb3dNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd01pZC5jbGFzc05hbWUgPSBcImJ1ZGdldC1yb3ctbWlkXCI7XHJcbiAgcm93TWlkLnRleHRDb250ZW50ID0gYEtTaHMuICR7YnVkZ2V0RGF0YS5hbW91bnR9YDtcclxuICBjb25zdCByb3dSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93UmlnaHQuY2xhc3NOYW1lID0gXCJidWRnZXQtcm93LXJpZ2h0XCI7XHJcbiAgcm93UmlnaHQudGV4dENvbnRlbnQgPSBcIktTaHMuIDAuMDBcIjtcclxuXHJcbiAgcm93TWFpbi5hcHBlbmQocm93TGVmdCwgcm93TWlkLCByb3dSaWdodCk7XHJcblxyXG4gIHJvd01haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHBvcHVsYXRlQnVkZ2V0Rm9ybShidWRnZXREYXRhKTtcclxuICAgIGVkaXRCdWRnZXREaWFsb2cuc2hvdygpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRlbGV0ZUJ1ZGdldChidWRnZXREYXRhLmJ1ZGdldF9pZCk7XHJcbiAgfSk7XHJcblxyXG4gIHNpbmdsZVJvdy5hcHBlbmQoZGVsZXRlSWNvbiwgcm93TWFpbik7XHJcblxyXG4gIHJldHVybiBzaW5nbGVSb3c7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCdWRnZXRDb21wb25lbnQgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQnVkZ2V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYnVkZ2V0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQgeyBjYWxlbmRhclNpZGViYXIgfSBmcm9tIFwiLi9jYWxlbmRhclNpZGViYXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi90cmFuc2FjdGlvbkNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FsZW5kYXIgPSAoXHJcbiAgZmluYW5jaWFsRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdXHJcbik6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhci5jbGFzc05hbWUgPSBcImNhbFwiO1xyXG4gIGNvbnN0IGNhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNhbEhlYWRlciA9IGNhbGVuZGFySGVhZGVyKGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBmaW5hbmNpYWxEYXRhKTtcclxuICBjYWxCb2R5LmlkID0gXCJjYWwtYm9keS1jb250XCI7XHJcbiAgcmVuZGVyQ2FsZW5kYXJCb2R5KGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBmaW5hbmNpYWxEYXRhKTtcclxuICBjYWxlbmRhci5hcHBlbmQoY2FsSGVhZGVyLCBjYWxCb2R5KTtcclxuXHJcbiAgcmV0dXJuIGNhbGVuZGFyO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ2FsZW5kYXJEYXRlID0gKFxyXG4gIGNhbGVuZGFySGVhZGVyRGF0ZTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlclxyXG4pID0+IHtcclxuICBjb25zdCBtb250aE5hbWVzID0gW1xyXG4gICAgXCJKYW51YXJ5XCIsXHJcbiAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICBcIk1hcmNoXCIsXHJcbiAgICBcIkFwcmlsXCIsXHJcbiAgICBcIk1heVwiLFxyXG4gICAgXCJKdW5lXCIsXHJcbiAgICBcIkp1bHlcIixcclxuICAgIFwiQXVndXN0XCIsXHJcbiAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgXCJPY3RvYmVyXCIsXHJcbiAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICBcIkRlY2VtYmVyXCIsXHJcbiAgXTtcclxuICBjYWxlbmRhckhlYWRlckRhdGUudGV4dENvbnRlbnQgPSBgJHttb250aE5hbWVzW21vbnRoXX0gJHt5ZWFyfWA7XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLmRhdGFzZXQuZGF0ZSA9IGAke21vbnRofSAke3llYXJ9YDtcclxufTtcclxuXHJcbmNvbnN0IGNhbGVuZGFySGVhZGVyID0gKFxyXG4gIGNhbEJvZHk6IEhUTUxEaXZFbGVtZW50LFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXIsXHJcbiAgZmluYW5jaWFsRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdXHJcbikgPT4ge1xyXG4gIGNvbnN0IGNhbGVuZGFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckhlYWRlci5jbGFzc05hbWUgPSBcImNhbC1oZWFkZXJcIjtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJIZWFkZXJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckhlYWRlckRhdGUuY2xhc3NOYW1lID0gXCJjYWwtY3Vyci1kYXRlXCI7XHJcbiAgY2FsZW5kYXJIZWFkZXJEYXRlLmlkID0gXCJjYWwtY3Vyci1kYXRlXCI7XHJcbiAgcmVuZGVyQ2FsZW5kYXJEYXRlKGNhbGVuZGFySGVhZGVyRGF0ZSwgZGF0ZSwgeWVhciwgbW9udGgpO1xyXG4gIGNvbnN0IGNhbGVuZGFyTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY2FsZW5kYXJQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY2FsZW5kYXJQcmV2LnRleHRDb250ZW50ID0gXCJjaGV2cm9uX2xlZnRcIjtcclxuICBjYWxlbmRhclByZXYuY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGNhbC1jaGV2cm9uLWJ0blwiO1xyXG4gIGNhbGVuZGFyUHJldi5pZCA9IFwiY2FsLWNoZXZyb24tcHJldlwiO1xyXG4gIGNvbnN0IGNhbGVuZGFyTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNhbGVuZGFyTmV4dC50ZXh0Q29udGVudCA9IFwiY2hldnJvbl9yaWdodFwiO1xyXG4gIGNhbGVuZGFyTmV4dC5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgY2FsLWNoZXZyb24tYnRuXCI7XHJcbiAgY2FsZW5kYXJOZXh0LmlkID0gXCJjYWwtY2hldnJvbi1uZXh0XCI7XHJcbiAgY2FsZW5kYXJOYXZpZ2F0aW9uLmFwcGVuZChjYWxlbmRhclByZXYsIGNhbGVuZGFyTmV4dCk7XHJcbiAgY2FsZW5kYXJIZWFkZXIuYXBwZW5kKGNhbGVuZGFySGVhZGVyRGF0ZSwgY2FsZW5kYXJOYXZpZ2F0aW9uKTtcclxuXHJcbiAgY29uc3QgY2hldnJvbnMgPSBbY2FsZW5kYXJOZXh0LCBjYWxlbmRhclByZXZdO1xyXG5cclxuICByZW5kZXJDYWxlbmRhckRhdGUoY2FsZW5kYXJIZWFkZXJEYXRlLCBkYXRlLCB5ZWFyLCBtb250aCk7XHJcblxyXG4gIGNoZXZyb25zLmZvckVhY2goKGNoZXZyb24pID0+IHtcclxuICAgIGNoZXZyb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbW9udGggPSBjaGV2cm9uLmlkID09PSBcImNhbC1jaGV2cm9uLXByZXZcIiA/IG1vbnRoIC0gMSA6IG1vbnRoICsgMTtcclxuICAgICAgaWYgKG1vbnRoIDwgMCB8fCBtb250aCA+IDExKSB7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBkYXRlIHRvIHRoZSBmaXJzdCBkYXkgb2YgdGhlXHJcbiAgICAgICAgLy8gbW9udGggd2l0aCB0aGUgbmV3IHllYXJcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSB5ZWFyIHRvIHRoZSBuZXcgeWVhclxyXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgbW9udGggdG8gdGhlIG5ldyBtb250aFxyXG4gICAgICAgIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlckNhbGVuZGFyRGF0ZShjYWxlbmRhckhlYWRlckRhdGUsIGRhdGUsIHllYXIsIG1vbnRoKTtcclxuICAgICAgcmVuZGVyQ2FsZW5kYXJCb2R5KGNhbEJvZHksIGRhdGUsIHllYXIsIG1vbnRoLCBmaW5hbmNpYWxEYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FsZW5kYXJIZWFkZXI7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJDYWxlbmRhckJvZHkgPSAoXHJcbiAgY2FsQm9keTogSFRNTERpdkVsZW1lbnQsXHJcbiAgZGF0ZTogRGF0ZSxcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgbW9udGg6IG51bWJlcixcclxuICBmaW5hbmNpYWxEYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW11cclxuKSA9PiB7XHJcbiAgY2FsQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjYWxCb2R5LmFwcGVuZENoaWxkKGNhbGVuZGFyQm9keShkYXRlLCB5ZWFyLCBtb250aCwgZmluYW5jaWFsRGF0YSkpO1xyXG59O1xyXG5cclxuY29uc3QgY2FsZW5kYXJCb2R5ID0gKFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgeWVhcjogbnVtYmVyLFxyXG4gIG1vbnRoOiBudW1iZXIsXHJcbiAgZmluYW5jaWFsRGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdXHJcbik6IEhUTUxEaXZFbGVtZW50ID0+IHtcclxuICBjb25zdCBjYWxlbmRhckJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbGVuZGFyQm9keS5jbGFzc05hbWUgPSBcImNhbC1ib2R5XCI7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgc3RhcnRfZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgMSk7XHJcbiAgY29uc3QgZW5kX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGVuZF9kYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcblxyXG4gIGNvbnN0IG1vbnRobHlEYXRhID0gZmluYW5jaWFsRGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1TdGFydCA9IG5ldyBEYXRlKGl0ZW0uc3RhcnRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBpdGVtRW5kID0gbmV3IERhdGUoaXRlbS5lbmRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICBjb25zdCBjdXJyZW50U3RhcnQgPSBuZXcgRGF0ZShzdGFydF9kYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbmQgPSBuZXcgRGF0ZShlbmRfZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdGFydCA+PSBjdXJyZW50U3RhcnQgJiYgaXRlbUVuZCA8PSBjdXJyZW50RW5kO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckJvZHlMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckJvZHlMZWZ0LmNsYXNzTmFtZSA9IFwiY2FsLWJvZHktbGVmdFwiO1xyXG4gIGNvbnN0IGNhbGVuZGFyQm9keVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWxlbmRhckJvZHlSaWdodC5jbGFzc05hbWUgPSBcImNhbC1ib2R5LXJpZ2h0XCI7XHJcbiAgY29uc3QgY2FsU2lkZWJhciA9IGNhbGVuZGFyU2lkZWJhcihtb250aGx5RGF0YSk7XHJcblxyXG4gIGlmIChmaW5hbmNpYWxEYXRhIGFzIEJ1ZGdldFtdKSB7XHJcbiAgICBjYWxlbmRhckJvZHlMZWZ0LmFwcGVuZChcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiSW5jb21lXCIsIG1vbnRobHlEYXRhIGFzIEJ1ZGdldFtdKSxcclxuICAgICAgY3JlYXRlQnVkZ2V0Q29tcG9uZW50KFwiQmlsbHNcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pLFxyXG4gICAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJQZXJzb25hbFwiLCBtb250aGx5RGF0YSBhcyBCdWRnZXRbXSksXHJcbiAgICAgIGNyZWF0ZUJ1ZGdldENvbXBvbmVudChcIlNhdmluZ3NcIiwgbW9udGhseURhdGEgYXMgQnVkZ2V0W10pLFxyXG4gICAgICBjcmVhdGVCdWRnZXRDb21wb25lbnQoXCJPdGhlclwiLCBtb250aGx5RGF0YSBhcyBCdWRnZXRbXSlcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNyZWF0ZVRyYW5zYWN0aW9uQ29tcG9uZW50KFwiSW5jb21lXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIkJpbGxzXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIlBlcnNvbmFsXCIsIG1vbnRobHlEYXRhIGFzIFRyYW5zYWN0aW9uW10pLFxyXG4gICAgICBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudChcIlNhdmluZ3NcIiwgbW9udGhseURhdGEgYXMgVHJhbnNhY3Rpb25bXSksXHJcbiAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uQ29tcG9uZW50KFwiT3RoZXJcIiwgbW9udGhseURhdGEgYXMgVHJhbnNhY3Rpb25bXSk7XHJcbiAgfVxyXG4gIGNhbGVuZGFyQm9keVJpZ2h0LmFwcGVuZChjYWxTaWRlYmFyKTtcclxuICBjYWxlbmRhckJvZHkuYXBwZW5kKGNhbGVuZGFyQm9keUxlZnQsIGNhbGVuZGFyQm9keVJpZ2h0KTtcclxuICByZXR1cm4gY2FsZW5kYXJCb2R5O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FsZW5kYXIgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcbmltcG9ydCBCdWRnZXRDYWxjdWxhdG9yIGZyb20gXCIuL0J1ZGdldENhbGN1bGF0b3JcIjtcclxuXHJcbmNvbnN0IGNhbGVuZGFyU2lkZWJhciA9IChidWRnZXREYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10pID0+IHtcclxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwiY2FsLXNpZGViYXJcIjtcclxuXHJcbiAgc2lkZWJhci5hcHBlbmQoc2lkZWJhclRvcChidWRnZXREYXRhKSwgc2lkZWJhckJvdHRvbShidWRnZXREYXRhKSk7XHJcblxyXG4gIHJldHVybiBzaWRlYmFyO1xyXG59O1xyXG5cclxuY29uc3Qgc2lkZWJhclRvcCA9IChidWRnZXREYXRhOiBCdWRnZXRbXSB8IFRyYW5zYWN0aW9uW10pID0+IHtcclxuICBjb25zdCBidWRnZXRDYWxjdWxhdG9yID0gbmV3IEJ1ZGdldENhbGN1bGF0b3IoYnVkZ2V0RGF0YSk7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJNb250aGx5IEJyZWFrZG93blwiO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGluY29tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGluY29tZSA9IGJ1ZGdldENhbGN1bGF0b3IuYnVkZ2V0Q2F0ZWdvcnlDYWxjdWxhdG9yKFwiSW5jb21lXCIpLnRvU3RyaW5nKCk7XHJcbiAgaW5jb21lU2VjdGlvbi50ZXh0Q29udGVudCA9IGBJbmNvbWUgdGhpcyBtb250aDogJHtpbmNvbWV9YDtcclxuICBjb25zdCB0b3RhbFNwZW5kU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdG90YWxTcGVuZCA9IGJ1ZGdldENhbGN1bGF0b3IudG90YWxNb250aGx5QWxsb2NhdGlvbigpO1xyXG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYnVkZ2V0RGF0YSkpKTtcclxuICBjb25zb2xlLmxvZyh0b3RhbFNwZW5kKTtcclxuICB0b3RhbFNwZW5kU2VjdGlvbi50ZXh0Q29udGVudCA9IGBUb3RhbCBzcGVuZCB0aGlzIG1vbnRoOiAke3RvdGFsU3BlbmR9YDtcclxuICBjb25zdCBzYXZpbmdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuZXRJbmNvbWUgPSBidWRnZXRDYWxjdWxhdG9yLm1vbnRobHlFeGNlc3NDYWxjdWxhdG9yKCkudG9TdHJpbmcoKTtcclxuICBzYXZpbmdTZWN0aW9uLnRleHRDb250ZW50ID0gYExlZnRvdmVyOiAke25ldEluY29tZX1gO1xyXG4gIGJvZHkuYXBwZW5kKGluY29tZVNlY3Rpb24sIHRvdGFsU3BlbmRTZWN0aW9uLCBzYXZpbmdTZWN0aW9uKTtcclxuICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uSGVhZGVyLCBib2R5KTtcclxuICByZXR1cm4gc2VjdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IHNpZGViYXJCb3R0b20gPSAoYnVkZ2V0RGF0YTogQnVkZ2V0W10gfCBUcmFuc2FjdGlvbltdKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn07XHJcblxyXG5leHBvcnQgeyBjYWxlbmRhclNpZGViYXIgfTtcclxuIiwiaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBkZWxldGVCdWRnZXQgPSBhc3luYyAoYnVkZ2V0X2lkOiBzdHJpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZpbmFuY2lhbC1tYW5hZ2VtZW50L3BocC9kZWxldGVCdWRnZXQucGhwP2J1ZGdldF9pZD0ke2J1ZGdldF9pZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgb3BlbkJ1ZGdldCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkZWxldGVCdWRnZXQgfTtcclxuIiwiaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9idWRnZXRJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgb3BlbkJ1ZGdldCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBlZGl0QnVkZ2V0RGlhbG9nID0gPEhUTUxEaWFsb2dFbGVtZW50PihcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWRpYWxvZ1wiKVxyXG4pO1xyXG5cclxuY29uc3QgcG9wdWxhdGVCdWRnZXRGb3JtID0gKGJ1ZGdldERhdGE6IEJ1ZGdldCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICk7XHJcbiAgY2F0ZWdvcnkudmFsdWUgPSBidWRnZXREYXRhLmNhdGVnb3J5O1xyXG4gIGNvbnN0IGFtb3VudCA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1hbW91bnRcIilcclxuICApO1xyXG4gIGFtb3VudC52YWx1ZSA9IGJ1ZGdldERhdGEuYW1vdW50LnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgdGl0bGUgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tdGl0bGVcIilcclxuICApO1xyXG4gIHRpdGxlLnZhbHVlID0gYnVkZ2V0RGF0YS50aXRsZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1kZXNjcmlwdGlvblwiKVxyXG4gICk7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBidWRnZXREYXRhLmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1zdGFydC1kYXRlXCIpXHJcbiAgKTtcclxuICBzdGFydERhdGUudmFsdWUgPSBidWRnZXREYXRhLnN0YXJ0X2RhdGUudG9TdHJpbmcoKTtcclxuICBjb25zdCBlbmREYXRlID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWVuZC1kYXRlXCIpXHJcbiAgKTtcclxuICBlbmREYXRlLnZhbHVlID0gYnVkZ2V0RGF0YS5lbmRfZGF0ZS50b1N0cmluZygpO1xyXG4gIGNvbnN0IGJ1ZGdldElkID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWJ1ZGdldC1pZFwiKVxyXG4gICk7XHJcbiAgYnVkZ2V0SWQudmFsdWUgPSBidWRnZXREYXRhLmJ1ZGdldF9pZC50b1N0cmluZygpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RWRpdEJ1ZGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWNhdGVnb3J5LXNlbGVjdFwiKVxyXG4gICkpLnZhbHVlO1xyXG4gIGNvbnN0IGFtb3VudCA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYnVkZ2V0LWZvcm0tYW1vdW50XCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgdGl0bGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLXRpdGxlXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWJ1ZGdldC1mb3JtLWRlc2NyaXB0aW9uXCIpXHJcbiAgKSkudmFsdWU7XHJcbiAgY29uc3QgYnVkZ2V0X2lkID0gKDxIVE1MVGV4dEFyZWFFbGVtZW50PihcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1idWRnZXQtZm9ybS1idWRnZXQtaWRcIilcclxuICApKS52YWx1ZTtcclxuICBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpIS50b1N0cmluZygpO1xyXG5cclxuICBjb25zdCBjYWxlbmRhckhlYWRlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbC1jdXJyLWRhdGVcIik7XHJcbiAgY29uc3QgdW5wYXJzZWREYXRlOiBzdHJpbmdbXSA9IGNhbGVuZGFySGVhZGVyRGF0ZT8uZGF0YXNldC5kYXRlPy5zcGxpdChcIiBcIikhO1xyXG4gIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzBdKTtcclxuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQodW5wYXJzZWREYXRlWzFdKTtcclxuICBjb25zdCBzdGFydF9kYXRlX29iaiA9IG5ldyBEYXRlKCk7XHJcbiAgc3RhcnRfZGF0ZV9vYmouc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIDEpO1xyXG4gIGNvbnN0IGVuZF9kYXRlX29iaiA9IG5ldyBEYXRlKCk7XHJcbiAgZW5kX2RhdGVfb2JqLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcbiAgY29uc3Qgc3RhcnRfZGF0ZSA9IHN0YXJ0X2RhdGVfb2JqLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gIGNvbnN0IGVuZF9kYXRlID0gZW5kX2RhdGVfb2JqLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBhbW91bnQsXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXNlcl9pZCxcclxuICAgIHN0YXJ0X2RhdGUsXHJcbiAgICBlbmRfZGF0ZSxcclxuICAgIGJ1ZGdldF9pZCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlQnVkZ2V0ID0gYXN5bmMgKGJ1ZGdldERhdGE6IEJ1ZGdldCkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coYnVkZ2V0RGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL3VwZGF0ZUJ1ZGdldC5waHBcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1ZGdldERhdGEpLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XHJcbiAgICAgIGVkaXRCdWRnZXREaWFsb2cuY2xvc2UoKTtcclxuICAgICAgb3BlbkJ1ZGdldCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVCdWRnZXQsIGdldEVkaXRCdWRnZXRGb3JtVmFsdWVzLCBwb3B1bGF0ZUJ1ZGdldEZvcm0gfTtcclxuIiwiY29uc3QgY3JlYXRlSG9tZSA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XHJcblxyXG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgcmV0dXJuIGhvbWVEaXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIC8vIGNyZWF0ZSBhbmQgcG9wdWxhdGUgbGVmdCBhbmQgcmlnaHQgcG9ydGlvbnMgb2YgdGhlIGhlYWRlclxyXG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGhlYWRlckxlZnQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgXCI7XHJcbiAgaGVhZGVyUmlnaHQudGV4dENvbnRlbnQgPSBcIkphY2shXCI7XHJcbiAgaGVhZGVyTGVmdC5jbGFzc05hbWUgPSBcImhvbWUtaGVhZGVyXCI7XHJcbiAgaGVhZGVyUmlnaHQuY2xhc3NOYW1lID0gXCJob21lLWhlYWRlciBob21lLWhlYWRlci1yaWdodFwiO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckxlZnQsIGhlYWRlclJpZ2h0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGZvciB0YWcgbGluZSBiZWxvdyB3ZWxjb21lIG1lc3NhZ2VcclxuICBjb25zdCBob21lVGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZVRhZ0xpbmUudGV4dENvbnRlbnQgPVxyXG4gICAgXCJSZWFkeSB0byB0YWtlIGNvbnRyb2wgb2YgeW91ciBmaW5hbmNlcz8gTGV0J3MgZ2V0IHN0YXJ0ZWQuXCI7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVUYWdMaW5lKTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCdWRnZXQgfSBmcm9tIFwiLi9idWRnZXRcIjtcclxuaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gXCIuL2ludGVyZmFjZXMvYnVkZ2V0SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbiB9IGZyb20gXCIuL3RyYW5zYWN0aW9uXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIik7XHJcbmNvbnN0IGJ1ZGdldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVkZ2V0LWJ0blwiKTtcclxuY29uc3QgbWFpbk5hdkNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNhY3Rpb24tYnRuXCIpO1xyXG5cclxubWFpbk5hdkNvbnQ/LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG5jb25zdCBmZXRjaEJ1ZGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL2ZldGNoQnVkZ2V0LnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuYnVkZ2V0cykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYnVkZ2V0cztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hUcmFuc2FjdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvZmluYW5jaWFsLW1hbmFnZW1lbnQvcGhwL2ZldGNoVHJhbnNhY3Rpb25zLnBocD91c2VyX2lkPSR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UudHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS50cmFuc2FjdGlvbnM7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG9wZW5Ib21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XHJcbiAgY29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59O1xyXG5cclxuaG9tZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5Ib21lKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlbkJ1ZGdldCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBidWRnZXREYXRhID0gPEJ1ZGdldFtdPmF3YWl0IGZldGNoQnVkZ2V0RGF0YSgpO1xyXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgY29uc3QgYnVkZ2V0ID0gY3JlYXRlQnVkZ2V0KGJ1ZGdldERhdGEpO1xyXG4gIGNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQoYnVkZ2V0KTtcclxufTtcclxuXHJcbmJ1ZGdldEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIG9wZW5CdWRnZXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBvcGVuVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb25EYXRhID0gPFRyYW5zYWN0aW9uW10+YXdhaXQgZmV0Y2hUcmFuc2FjdGlvbkRhdGEoKTtcclxuICBjb250YWluZXI/LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25EYXRhKTtcclxuICBjb250YWluZXI/LmFwcGVuZENoaWxkKHRyYW5zYWN0aW9uKTtcclxufTtcclxuXHJcbnRyYW5zYWN0aW9uQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG9wZW5UcmFuc2FjdGlvbigpO1xyXG59KTtcclxuXHJcbm9wZW5Ib21lKCk7XHJcblxyXG5leHBvcnQgeyBvcGVuQnVkZ2V0IH07XHJcbiIsImNvbnN0IG5hdmJhcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3QgbmF2YmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbm5hdmJhckxlZnQuc3JjID0gXCIuLi9wdWJsaWMvYXNzZXRzL2J3bG9nby5wbmdcIjtcclxubmF2YmFyTGVmdC5jbGFzc05hbWUgPSBcIm5hdmJhci1sZWZ0XCI7XHJcbmNvbnN0IG5hdmJhck1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5hdmJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubmF2YmFyLmFwcGVuZChuYXZiYXJMZWZ0LCBuYXZiYXJNaWQsIG5hdmJhclJpZ2h0KTtcclxuXHJcbmV4cG9ydCB7IG5hdmJhciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90cmFuc2FjdGlvbkludGVyZmFjdFwiO1xyXG5cclxuY29uc3QgY3JlYXRlVHJhbnNhY3Rpb24gPSAodHJhbnNhY3Rpb25EYXRhOiBUcmFuc2FjdGlvbltdKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRyYW5zYWN0aW9uLmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb25cIjtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXIgPSBjcmVhdGVDYWxlbmRhcih0cmFuc2FjdGlvbkRhdGEpO1xyXG4gIHRyYW5zYWN0aW9uLmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zYWN0aW9uO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlVHJhbnNhY3Rpb24gfTtcclxuIiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RyYW5zYWN0aW9uSW50ZXJmYWN0XCI7XHJcblxyXG5jb25zdCBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCA9IChcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIHRyYW5zYWN0aW9uRGF0YTogVHJhbnNhY3Rpb25bXVxyXG4pID0+IHtcclxuICBjb25zdCB0cmFuc2FjdGlvbkNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdHJhbnNhY3Rpb25Db21wb25lbnQuY2xhc3NOYW1lID0gXCJ0cmFuc2FjdGlvbi1jb21wb25lbnRcIjtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSBcInRyYW5zYWN0aW9uLWhlYWRlclwiO1xyXG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlckxlZnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICBoZWFkZXJMZWZ0LmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tcm93LWxlZnQgdHJhbnNhY3Rpb24taGVhZGVyLWxlZnRcIjtcclxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyUmlnaHQudGV4dENvbnRlbnQgPSBcIkFtb3VudFwiO1xyXG4gIGhlYWRlclJpZ2h0LmNsYXNzTmFtZSA9IFwidHJhbnNhY3Rpb24tcm93LXJpZ2h0IHRyYW5zYWN0aW9uLWhlYWRlci1yaWdodFwiO1xyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyTGVmdCwgaGVhZGVyUmlnaHQpO1xyXG5cclxuICByZXR1cm4gdHJhbnNhY3Rpb25Db21wb25lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUcmFuc2FjdGlvbkNvbXBvbmVudCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9