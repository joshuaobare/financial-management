/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/budget.ts":
      /*!***********************!*\
  !*** ./src/budget.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBudget: () => (/* binding */ createBudget),\n/* harmony export */   getBudgetFormValues: () => (/* binding */ getBudgetFormValues),\n/* harmony export */   resetBudgetForm: () => (/* binding */ resetBudgetForm)\n/* harmony export */ });\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");\n/* harmony import */ var _editBudget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editBudget */ "./src/editBudget.ts");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst dialog = document.getElementById("budget-dialog");\nconst editBudgetDialog = (document.getElementById("edit-budget-dialog"));\nconst budgetForm = document.getElementById("budget-form");\nconst editBudgetForm = (document.getElementById("edit-budget-form"));\nconst closeDialog = document.getElementById("budget-dialog-close");\nconst editBudgetDialogClose = document.getElementById("edit-budget-dialog-close");\ncloseDialog === null || closeDialog === void 0 ? void 0 : closeDialog.addEventListener("click", () => {\n    dialog.close();\n});\neditBudgetDialogClose === null || editBudgetDialogClose === void 0 ? void 0 : editBudgetDialogClose.addEventListener("click", () => {\n    editBudgetDialog.close();\n});\nconst createBudget = (budgetData) => {\n    const budget = document.createElement("div");\n    budget.className = "budget";\n    //newDiv?.setAttribute("background-color", "black");\n    const heading = document.createElement("h1");\n    heading.textContent = "BUDGET HEADING";\n    const calendar = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(budgetData);\n    const budgetSidebar = document.createElement("div");\n    budget.appendChild(calendar);\n    budget.appendChild(budgetSidebar);\n    return budget;\n};\nconst getBudgetFormValues = () => {\n    var _a;\n    const category = (document.getElementById("budget-form-category-select")).value;\n    const amount = (document.getElementById("budget-form-amount")).value;\n    const title = document.getElementById("budget-form-title")\n        .value;\n    const description = (document.getElementById("budget-form-description")).value;\n    const user_id = localStorage.getItem("user_id");\n    const calendarHeaderDate = document.getElementById("cal-curr-date");\n    const unparsedDate = (_a = calendarHeaderDate === null || calendarHeaderDate === void 0 ? void 0 : calendarHeaderDate.dataset.date) === null || _a === void 0 ? void 0 : _a.split(" ");\n    const month = parseInt(unparsedDate[0]);\n    const year = parseInt(unparsedDate[1]);\n    const start_date = new Date();\n    start_date.setFullYear(year, month, 1);\n    const end_date = new Date();\n    end_date.setFullYear(year, month + 1, 0);\n    return {\n        category,\n        amount,\n        title,\n        description,\n        user_id,\n        start_date,\n        end_date,\n    };\n};\nconst resetBudgetForm = () => {\n    const amount = ((document.getElementById("budget-form-amount")).value = "");\n    const title = ((document.getElementById("budget-form-title")).value = "");\n    const description = ((document.getElementById("budget-form-description")).value = "");\n};\nconst submitBudgetForm = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const request = yield fetch("http://localhost:8080/financial-management/php/createBudget.php", {\n            method: "POST",\n            headers: { "Content-type": "application/json" },\n            body: JSON.stringify(getBudgetFormValues()),\n        });\n        const response = yield request.json();\n        if (response.message) {\n            resetBudgetForm();\n            dialog.close();\n            (0,_index__WEBPACK_IMPORTED_MODULE_1__.openBudget)();\n        }\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\nbudgetForm === null || budgetForm === void 0 ? void 0 : budgetForm.addEventListener("submit", (e) => {\n    e.preventDefault();\n    submitBudgetForm();\n});\neditBudgetForm.addEventListener("submit", (e) => {\n    e.preventDefault();\n    const budgetData = Object.assign(Object.assign({}, (0,_editBudget__WEBPACK_IMPORTED_MODULE_2__.getEditBudgetFormValues)()), { created_at: null });\n    (0,_editBudget__WEBPACK_IMPORTED_MODULE_2__.updateBudget)(budgetData);\n});\n\n\n\n//# sourceURL=webpack:///./src/budget.ts?'
        );

        /***/
      },

    /***/ "./src/budgetComponent.ts":
      /*!********************************!*\
  !*** ./src/budgetComponent.ts ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBudgetComponent: () => (/* binding */ createBudgetComponent)\n/* harmony export */ });\n/* harmony import */ var _editBudget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editBudget */ "./src/editBudget.ts");\n/* harmony import */ var _deleteBudget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteBudget */ "./src/deleteBudget.ts");\n\n\nconst dialog = document.getElementById("budget-dialog");\nconst editBudgetDialog = (document.getElementById("edit-budget-dialog"));\nconst createBudgetComponent = (title, budgetData) => {\n    console.log(budgetData);\n    const budgetComponent = document.createElement("div");\n    budgetComponent.className = "budget-component";\n    const header = document.createElement("header");\n    header.className = "budget-header";\n    const headerLeft = document.createElement("div");\n    headerLeft.textContent = title;\n    headerLeft.className = "budget-row-left budget-header-left";\n    const headerMid = document.createElement("div");\n    headerMid.className = "budget-row-mid budget-header-mid";\n    headerMid.textContent = "Planned";\n    const headerRight = document.createElement("div");\n    headerRight.textContent = "Received";\n    headerRight.className = "budget-row-right budget-header-right";\n    header.append(headerLeft, headerMid, headerRight);\n    const main = document.createElement("div");\n    const componentData = budgetData.filter((budgetItem) => budgetItem.category === title);\n    console.log(componentData);\n    componentData.forEach((item) => {\n        main.append(row(item));\n    });\n    main.className = "budget-main";\n    const footer = document.createElement("footer");\n    footer.className = "budget-footer";\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Item";\n    addBtn.addEventListener("click", () => {\n        const budgetFormSelect = (document.getElementById("budget-form-category-select"));\n        budgetFormSelect.value = title;\n        dialog.showModal();\n    });\n    footer.appendChild(addBtn);\n    budgetComponent.append(header, main, footer);\n    return budgetComponent;\n};\nconst row = (budgetData) => {\n    const singleRow = document.createElement("div");\n    singleRow.className = "budget-item";\n    const deleteIcon = document.createElement("span");\n    deleteIcon.textContent = "delete";\n    deleteIcon.className = "material-symbols-outlined budget-item-del-icon";\n    const rowMain = document.createElement("div");\n    rowMain.className = "budget-row";\n    const rowLeft = document.createElement("div");\n    rowLeft.className = "budget-row-left budget-row-left-input";\n    rowLeft.textContent = budgetData.title;\n    const rowMid = document.createElement("div");\n    rowMid.className = "budget-row-mid";\n    rowMid.textContent = `KShs. ${budgetData.amount}`;\n    const rowRight = document.createElement("div");\n    rowRight.className = "budget-row-right";\n    rowRight.textContent = "KShs. 0.00";\n    rowMain.append(rowLeft, rowMid, rowRight);\n    rowMain.addEventListener("click", () => {\n        (0,_editBudget__WEBPACK_IMPORTED_MODULE_0__.populateBudgetForm)(budgetData);\n        editBudgetDialog.show();\n    });\n    deleteIcon.addEventListener("click", () => {\n        (0,_deleteBudget__WEBPACK_IMPORTED_MODULE_1__.deleteBudget)(budgetData.budget_id);\n    });\n    singleRow.append(deleteIcon, rowMain);\n    return singleRow;\n};\n\n\n\n//# sourceURL=webpack:///./src/budgetComponent.ts?'
        );

        /***/
      },

    /***/ "./src/calendar.ts":
      /*!*************************!*\
  !*** ./src/calendar.ts ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCalendar: () => (/* binding */ createCalendar)\n/* harmony export */ });\n/* harmony import */ var _budgetComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetComponent */ "./src/budgetComponent.ts");\n\nconst createCalendar = (budgetData) => {\n    const date = new Date();\n    const year = date.getFullYear();\n    const month = date.getMonth();\n    const calendar = document.createElement("div");\n    calendar.className = "cal-cont";\n    const calHeader = calendarHeader(date, year, month);\n    const calBody = calendarBody(date, year, month, budgetData);\n    calendar.append(calHeader, calBody);\n    return calendar;\n};\nconst renderCalendarDate = (calendarHeaderDate, date, year, month) => {\n    const monthNames = [\n        "January",\n        "February",\n        "March",\n        "April",\n        "May",\n        "June",\n        "July",\n        "August",\n        "September",\n        "October",\n        "November",\n        "December",\n    ];\n    calendarHeaderDate.textContent = `${monthNames[month]} ${year}`;\n    calendarHeaderDate.dataset.date = `${month} ${year}`;\n};\nconst calendarHeader = (date, year, month) => {\n    const calendarHeader = document.createElement("div");\n    calendarHeader.className = "cal-header";\n    const calendarHeaderDate = document.createElement("div");\n    calendarHeaderDate.className = "cal-curr-date";\n    calendarHeaderDate.id = "cal-curr-date";\n    renderCalendarDate(calendarHeaderDate, date, year, month);\n    const calendarNavigation = document.createElement("div");\n    const calendarPrev = document.createElement("span");\n    calendarPrev.textContent = "chevron_left";\n    calendarPrev.className = "material-symbols-outlined cal-chevron-btn";\n    calendarPrev.id = "cal-chevron-prev";\n    const calendarNext = document.createElement("span");\n    calendarNext.textContent = "chevron_right";\n    calendarNext.className = "material-symbols-outlined cal-chevron-btn";\n    calendarNext.id = "cal-chevron-next";\n    calendarNavigation.append(calendarPrev, calendarNext);\n    calendarHeader.append(calendarHeaderDate, calendarNavigation);\n    const chevrons = [calendarNext, calendarPrev];\n    renderCalendarDate(calendarHeaderDate, date, year, month);\n    chevrons.forEach((chevron) => {\n        chevron.addEventListener("click", () => {\n            month = chevron.id === "cal-chevron-prev" ? month - 1 : month + 1;\n            if (month < 0 || month > 11) {\n                // Set the date to the first day of the\n                // month with the new year\n                date = new Date(year, month, new Date().getDate());\n                // Set the year to the new year\n                year = date.getFullYear();\n                // Set the month to the new month\n                month = date.getMonth();\n            }\n            else {\n                date = new Date();\n            }\n            renderCalendarDate(calendarHeaderDate, date, year, month);\n            //renderCalendarDates(date, year, month, calDates, calendarHeaderDate);\n        });\n    });\n    return calendarHeader;\n};\nconst calendarBody = (date, year, month, budgetData) => {\n    const calendarBody = document.createElement("div");\n    calendarBody.className = "cal-body";\n    calendarBody.append((0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Income", budgetData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Bills", budgetData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Personal", budgetData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Savings", budgetData), (0,_budgetComponent__WEBPACK_IMPORTED_MODULE_0__.createBudgetComponent)("Other", budgetData));\n    return calendarBody;\n};\n\n\n\n//# sourceURL=webpack:///./src/calendar.ts?'
        );

        /***/
      },

    /***/ "./src/deleteBudget.ts":
      /*!*****************************!*\
  !*** ./src/deleteBudget.ts ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteBudget: () => (/* binding */ deleteBudget)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst deleteBudget = (budget_id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const request = yield fetch(`http://localhost:8080/financial-management/php/deleteBudget.php?budget_id=${budget_id}`, {\n            method: "GET",\n            headers: { "Content-type": "application/json" },\n        });\n        const response = yield request.json();\n        if (response.message) {\n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.openBudget)();\n        }\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\n\n\n\n//# sourceURL=webpack:///./src/deleteBudget.ts?'
        );

        /***/
      },

    /***/ "./src/editBudget.ts":
      /*!***************************!*\
  !*** ./src/editBudget.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEditBudgetFormValues: () => (/* binding */ getEditBudgetFormValues),\n/* harmony export */   populateBudgetForm: () => (/* binding */ populateBudgetForm),\n/* harmony export */   updateBudget: () => (/* binding */ updateBudget)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst editBudgetDialog = (document.getElementById("edit-budget-dialog"));\nconst populateBudgetForm = (budgetData) => {\n    const category = (document.getElementById("edit-budget-form-category-select"));\n    category.value = budgetData.category;\n    const amount = (document.getElementById("edit-budget-form-amount"));\n    amount.value = budgetData.amount.toString();\n    const title = (document.getElementById("edit-budget-form-title"));\n    title.value = budgetData.title;\n    const description = (document.getElementById("edit-budget-form-description"));\n    description.value = budgetData.description;\n    const startDate = (document.getElementById("edit-budget-form-start-date"));\n    startDate.value = budgetData.start_date.toString();\n    const endDate = (document.getElementById("edit-budget-form-end-date"));\n    endDate.value = budgetData.end_date.toString();\n    const budgetId = (document.getElementById("edit-budget-form-budget-id"));\n    budgetId.value = budgetData.budget_id.toString();\n};\nconst getEditBudgetFormValues = () => {\n    var _a;\n    const category = (document.getElementById("edit-budget-form-category-select")).value;\n    const amount = parseInt(document.getElementById("edit-budget-form-amount").value);\n    const title = (document.getElementById("edit-budget-form-title")).value;\n    const description = (document.getElementById("edit-budget-form-description")).value;\n    const budget_id = parseInt(document.getElementById("edit-budget-form-budget-id")\n        .value);\n    const user_id = parseInt(localStorage.getItem("user_id").toString());\n    const calendarHeaderDate = document.getElementById("cal-curr-date");\n    const unparsedDate = (_a = calendarHeaderDate === null || calendarHeaderDate === void 0 ? void 0 : calendarHeaderDate.dataset.date) === null || _a === void 0 ? void 0 : _a.split(" ");\n    const month = parseInt(unparsedDate[0]);\n    const year = parseInt(unparsedDate[1]);\n    const start_date = new Date();\n    start_date.setFullYear(year, month, 1);\n    const end_date = new Date();\n    end_date.setFullYear(year, month + 1, 0);\n    return {\n        category,\n        amount,\n        title,\n        description,\n        user_id,\n        start_date,\n        end_date,\n        budget_id,\n    };\n};\nconst updateBudget = (budgetData) => __awaiter(void 0, void 0, void 0, function* () {\n    //console.log(budgetData);\n    try {\n        const request = yield fetch("http://localhost:8080/financial-management/php/updateBudget.php", {\n            method: "POST",\n            headers: { "Content-type": "application/json" },\n            body: JSON.stringify(budgetData),\n        });\n        const response = yield request.json();\n        console.log(response);\n        if (response.message) {\n            editBudgetDialog.close();\n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.openBudget)();\n        }\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\n\n\n\n//# sourceURL=webpack:///./src/editBudget.ts?'
        );

        /***/
      },

    /***/ "./src/home.ts":
      /*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\nconst createHome = () => {\n    const homeDiv = document.createElement("div");\n    const header = createHeader();\n    homeDiv.appendChild(header);\n    return homeDiv;\n};\nconst createHeader = () => {\n    const header = document.createElement("div");\n    // create and populate left and right portions of the header\n    const headerLeft = document.createElement("span");\n    const headerRight = document.createElement("span");\n    headerLeft.textContent = "Welcome ";\n    headerRight.textContent = "Jack!";\n    headerLeft.className = "home-header";\n    headerRight.className = "home-header home-header-right";\n    header.append(headerLeft, headerRight);\n    // Create a div for tag line below welcome message\n    const homeTagLine = document.createElement("div");\n    homeTagLine.textContent =\n        "Ready to take control of your finances? Let\'s get started.";\n    header.appendChild(homeTagLine);\n    return header;\n};\n\n\n\n//# sourceURL=webpack:///./src/home.ts?'
        );

        /***/
      },

    /***/ "./src/index.ts":
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openBudget: () => (/* binding */ openBudget)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.ts");\n/* harmony import */ var _budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget */ "./src/budget.ts");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.ts");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst container = document.getElementById("container");\nconst homeBtn = document.getElementById("home-btn");\nconst budgetBtn = document.getElementById("budget-btn");\nconst mainNavCont = document.getElementById("main-nav");\nmainNavCont === null || mainNavCont === void 0 ? void 0 : mainNavCont.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar);\nconst fetchBudgetData = () => __awaiter(void 0, void 0, void 0, function* () {\n    const userId = localStorage.getItem("user_id");\n    try {\n        const request = yield fetch(`http://localhost:8080/financial-management/php/fetchBudget.php?user_id=${userId}`, {\n            method: "GET",\n            headers: { "Content-type": "application/json" },\n        });\n        const response = yield request.json();\n        if (response.budgets) {\n            return response.budgets;\n        }\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\nconst openHome = () => {\n    const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n    container === null || container === void 0 ? void 0 : container.replaceChildren();\n    container === null || container === void 0 ? void 0 : container.appendChild(home);\n};\nhomeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", (e) => {\n    openHome();\n});\nconst openBudget = () => __awaiter(void 0, void 0, void 0, function* () {\n    const budgetData = yield fetchBudgetData();\n    container === null || container === void 0 ? void 0 : container.replaceChildren();\n    const budget = (0,_budget__WEBPACK_IMPORTED_MODULE_1__.createBudget)(budgetData);\n    container === null || container === void 0 ? void 0 : container.appendChild(budget);\n});\nbudgetBtn === null || budgetBtn === void 0 ? void 0 : budgetBtn.addEventListener("click", (e) => {\n    openBudget();\n});\nopenHome();\n\n\n\n//# sourceURL=webpack:///./src/index.ts?'
        );

        /***/
      },

    /***/ "./src/navbar.ts":
      /*!***********************!*\
  !*** ./src/navbar.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navbar: () => (/* binding */ navbar)\n/* harmony export */ });\nconst navbar = document.createElement("div");\nconst navbarLeft = document.createElement("img");\nnavbarLeft.src = "../public/assets/bwlogo.png";\nnavbarLeft.className = "navbar-left";\nconst navbarMid = document.createElement("div");\nconst navbarRight = document.createElement("div");\nnavbar.append(navbarLeft, navbarMid, navbarRight);\n\n\n\n//# sourceURL=webpack:///./src/navbar.ts?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.ts");
  /******/
  /******/
})();
