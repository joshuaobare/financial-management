const createCalendar = (): HTMLDivElement => {
  const calendar = document.createElement("div");
  calendar.className = "cal-cont";
  const calendarHeader = document.createElement("div");
  calendarHeader.className = "cal-header";
  const calendarHeaderDate = document.createElement("div");
  const calendarNavigation = document.createElement("div");
  const calendarPrev = document.createElement("span");
  calendarPrev.textContent = "chevron_left";
  calendarPrev.className = "material-symbols-rounded";
  const calendarNext = document.createElement("span");
  calendarNext.textContent = "chevron_right";
  calendarNext.className = "material-symbols-rounded";
  calendarNavigation.append(calendarPrev, calendarNext);
  calendarHeader.append(calendarHeaderDate, calendarNavigation);

  return calendar;
};
