var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import createBudgetComponent from "./budgetComponent.js";
const fetchBudgetData = (budgetData) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = localStorage.getItem("user_id");
    try {
        const request = yield fetch(`http://localhost:8080/financial-management/php/fetchBudget.php?user_id=${userId}`, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });
        const response = yield request.json();
        if (response.budgets) {
            budgetData = response.budgets;
        }
    }
    catch (error) {
        console.error(error);
    }
});
const createCalendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendar = document.createElement("div");
    calendar.className = "cal-cont";
    const calHeader = calendarHeader(date, year, month);
    let budgetData = [];
    fetchBudgetData(budgetData);
    const calBody = calendarBody(date, year, month, budgetData);
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
const calendarHeader = (date, year, month) => {
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
            //renderCalendarDates(date, year, month, calDates, calendarHeaderDate);
        });
    });
    return calendarHeader;
};
const calendarBody = (date, year, month, budgetData) => {
    const calendarBody = document.createElement("div");
    calendarBody.className = "cal-body";
    calendarBody.append(createBudgetComponent("Income", budgetData), createBudgetComponent("Bills", budgetData), createBudgetComponent("Personal", budgetData), createBudgetComponent("Savings", budgetData), createBudgetComponent("Other", budgetData));
    return calendarBody;
};
export default createCalendar;
//# sourceMappingURL=calendar.js.map