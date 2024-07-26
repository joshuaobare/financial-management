import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import { calendarSidebar } from "./calendarSidebar";

const createInsightsCalendar = (
  budgetData: Budget[],
  transactionData: Transaction[]
): HTMLDivElement => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const calendar = document.createElement("div");
  calendar.className = "cal";
  const calBody = document.createElement("div");
  const calHeader = calendarHeader(
    calBody,
    date,
    year,
    month,
    budgetData,
    transactionData
  );
  calBody.id = "cal-body-cont";
  renderCalendarBody(calBody, date, year, month, budgetData, transactionData);
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
  calendarHeaderDate.dataset.date = `${month} ${year}`;
};

const calendarHeader = (
  calBody: HTMLDivElement,
  date: Date,
  year: number,
  month: number,
  budgetData: Budget[],
  transactionData: Transaction[]
) => {
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
      renderCalendarBody(
        calBody,
        date,
        year,
        month,
        budgetData,
        transactionData
      );
    });
  });

  return calendarHeader;
};

const renderCalendarBody = (
  calBody: HTMLDivElement,
  date: Date,
  year: number,
  month: number,
  budgetData: Budget[],
  transactionData: Transaction[]
) => {
  calBody.replaceChildren();
  calBody.appendChild(
    calendarBody(date, year, month, budgetData, transactionData)
  );
};

const calendarBody = (
  date: Date,
  year: number,
  month: number,
  budgetData: Budget[],
  transactionData: Transaction[]
): HTMLDivElement => {
  const calendarBody = document.createElement("div");
  calendarBody.className = "cal-body";
  const start_date = new Date();
  start_date.setFullYear(year, month, 1);
  const end_date = new Date();
  end_date.setFullYear(year, month + 1, 0);

  const monthlyBudgetData = budgetData.filter((item) => {
    const itemStart = new Date(item.start_date).toISOString().split("T")[0];
    const itemEnd = new Date(item.end_date).toISOString().split("T")[0];
    const currentStart = new Date(start_date).toISOString().split("T")[0];
    const currentEnd = new Date(end_date).toISOString().split("T")[0];

    return itemStart >= currentStart && itemEnd <= currentEnd;
  });

  const monthlyTransactionData = transactionData.filter((item) => {
    const itemStart = new Date(item.start_date).toISOString().split("T")[0];
    const itemEnd = new Date(item.end_date).toISOString().split("T")[0];
    const currentStart = new Date(start_date).toISOString().split("T")[0];
    const currentEnd = new Date(end_date).toISOString().split("T")[0];

    return itemStart >= currentStart && itemEnd <= currentEnd;
  });

  const monthlyInsights = document.createElement("div");
  const transactionInsights = calendarSidebar(monthlyTransactionData);
  const budgetInsights = calendarSidebar(monthlyBudgetData);

  monthlyInsights.append(budgetInsights, transactionInsights);
  calendarBody.appendChild(monthlyInsights);
  return calendarBody;
};

export { createInsightsCalendar };
