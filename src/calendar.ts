const createCalendar = (): HTMLDivElement => {
  const calendar = document.createElement("div");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  calendar.className = "cal-cont";
  calendar.append(calendarHeader(), calendarBody(date, year, month));

  return calendar;
};

const renderCalendarDates = (
  date: Date,
  year: number,
  month: number,
  daySection: HTMLUListElement
) => {
  const currDate = document.getElementById("cal-curr-date");

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const lastDay = new Date(year, month, lastDate).getDay();
  const monthLastDate = new Date(year, month, 0).getDate();

  for (let i = firstDay; i > 0; i--) {
    const newDay = document.createElement("li");
    newDay.textContent = (monthLastDate - i + 1).toString();
    daySection?.append(newDay);
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastDate; i++) {
    // Check if the current date is today
    let isToday =
      i === date.getDate() &&
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

const calendarHeader = (): HTMLDivElement => {
  const calendarHeader = document.createElement("div");
  calendarHeader.className = "cal-header";
  const calendarHeaderDate = document.createElement("div");
  calendarHeaderDate.className = "cal-curr-date";
  calendarHeaderDate.id = "cal-curr-date";
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

  return calendarHeader;
};

const calendarBody = (
  date: Date,
  year: number,
  month: number
): HTMLDivElement => {
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

  renderCalendarDates(date, year, month, calDates);

  return calendarBody;
};

export default createCalendar;
