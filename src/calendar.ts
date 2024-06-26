const createCalendar = (): HTMLDivElement => {
  const calendar = document.createElement("div");

  calendar.className = "cal-cont";
  const calHeader = calendarHeader();
  calendar.appendChild(calHeader);

  return calendar;
};

const renderCalendarDate = (calendarHeaderDate: HTMLDivElement) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
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

const calendarHeader = () => {
  const calendarHeader = document.createElement("div");
  calendarHeader.className = "cal-header";

  const calendarHeaderDate = document.createElement("div");
  calendarHeaderDate.className = "cal-curr-date";
  calendarHeaderDate.id = "cal-curr-date";
  renderCalendarDate(calendarHeaderDate);
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
  return calendarHeader;

  //return { calendarHeader, calendarPrev, calendarNext };
};

const calendarBody = (
  date: Date,
  year: number,
  month: number,
  calendarHeaderDate: HTMLDivElement,
  calendarPrev: HTMLSpanElement,
  calendarNext: HTMLSpanElement
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
      } else {
        date = new Date();
      }

      renderCalendarDates(date, year, month, calDates, calendarHeaderDate);
    });
  });

  return calendarBody;
};

export default createCalendar;
