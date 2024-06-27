import createBudgetComponent from "./budgetComponent.js";

const createCalendar = (): HTMLDivElement => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const calendar = document.createElement("div");

  calendar.className = "cal-cont";
  const calHeader = calendarHeader(date, year, month);
  const calBody = calendarBody(date, year, month);
  calendar.append(calHeader, calBody);

  return calendar;
};

const renderCalendarDate = (
  calendarHeaderDate: HTMLDivElement,
  date: Date,
  year: number,
  month: number
) => {
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
};

const calendarHeader = (date: Date, year: number, month: number) => {
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
      } else {
        date = new Date();
      }
      renderCalendarDate(calendarHeaderDate, date, year, month);
      //renderCalendarDates(date, year, month, calDates, calendarHeaderDate);
    });
  });

  return calendarHeader;
};

const calendarBody = (
  date: Date,
  year: number,
  month: number
): HTMLDivElement => {
  const calendarBody = document.createElement("div");
  calendarBody.className = "cal-body";
  calendarBody.appendChild(createBudgetComponent("Income"));
  return calendarBody;
};

export default createCalendar;
