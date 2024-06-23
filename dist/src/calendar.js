const createCalendar = () => {
    const calendar = document.createElement("div");
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendarHeaderDate = document.createElement("div");
    calendarHeaderDate.className = "cal-curr-date";
    calendarHeaderDate.id = "cal-curr-date";
    calendar.className = "cal-cont";
    const calHeader = calendarHeader(calendarHeaderDate);
    calendar.append(calHeader.calendarHeader, calendarBody(date, year, month, calendarHeaderDate, calHeader.calendarPrev, calHeader.calendarNext));
    return calendar;
};
const renderCalendarDates = (date, year, month, daySection, calendarHeaderDate) => {
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
    daySection === null || daySection === void 0 ? void 0 : daySection.replaceChildren();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const lastDay = new Date(year, month, lastDate).getDay();
    const monthLastDate = new Date(year, month, 0).getDate();
    for (let i = firstDay; i > 0; i--) {
        const newDay = document.createElement("li");
        newDay.textContent = (monthLastDate - i + 1).toString();
        daySection === null || daySection === void 0 ? void 0 : daySection.append(newDay);
    }
    // Loop to add the dates of the current month
    for (let i = 1; i <= lastDate; i++) {
        // Check if the current date is today
        let isToday = i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
            ? "active"
            : "";
        const newDay = document.createElement("li");
        newDay.textContent = i.toString();
        // lit += `<li class="${isToday}">${i}</li>`;
        daySection.appendChild(newDay);
    }
    for (let i = lastDay; i < 6; i++) {
        const newDay = document.createElement("li");
        newDay.textContent = (i - lastDay + 1).toString();
        daySection.appendChild(newDay);
    }
};
const calendarHeader = (calendarHeaderDate) => {
    const calendarHeader = document.createElement("div");
    calendarHeader.className = "cal-header";
    //   calendarHeaderDate.textContent = "June 2024";
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
    return { calendarHeader, calendarPrev, calendarNext };
};
const calendarBody = (date, year, month, calendarHeaderDate, calendarPrev, calendarNext) => {
    const calendarBody = document.createElement("div");
    calendarBody.className = "cal-body";
    const calendarWeekdays = document.createElement("ul");
    calendarWeekdays.className = "cal-weekdays";
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDays.forEach((day) => {
        const dayElement = document.createElement("li");
        dayElement.textContent = day;
        dayElement.className = "cal-body-header";
        calendarWeekdays.appendChild(dayElement);
    });
    const calDates = document.createElement("ul");
    calDates.className = "cal-dates";
    calDates.id = "cal-dates";
    calendarBody.append(calendarWeekdays, calDates);
    const chevrons = [calendarNext, calendarPrev];
    renderCalendarDates(date, year, month, calDates, calendarHeaderDate);
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
            renderCalendarDates(date, year, month, calDates, calendarHeaderDate);
        });
    });
    return calendarBody;
};
export default createCalendar;
//# sourceMappingURL=calendar.js.map