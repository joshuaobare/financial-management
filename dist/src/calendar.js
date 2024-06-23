const createCalendar = () => {
    const calendar = document.createElement("div");
    calendar.className = "cal-cont";
    const calendarHeader = document.createElement("div");
    calendarHeader.className = "cal-header";
    const calendarHeaderDate = document.createElement("div");
    calendarHeaderDate.textContent = "June 2024";
    const calendarNavigation = document.createElement("div");
    const calendarPrev = document.createElement("span");
    calendarPrev.textContent = "chevron_left";
    calendarPrev.className = "material-symbols-outlined cal-chevron-btn";
    const calendarNext = document.createElement("span");
    calendarNext.textContent = "chevron_right";
    calendarNext.className = "material-symbols-outlined cal-chevron-btn";
    calendarNavigation.append(calendarPrev, calendarNext);
    calendarHeader.append(calendarHeaderDate, calendarNavigation);
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
    const calendarDates = document.createElement("ul");
    calendarDates.className = "cal-dates";
    calendarBody.append(calendarWeekdays, calendarDates);
    calendar.append(calendarHeader, calendarBody);
    return calendar;
};
export default createCalendar;
//# sourceMappingURL=calendar.js.map