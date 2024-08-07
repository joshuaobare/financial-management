import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import { calendarSidebar } from "./calendarSidebar";
import { renderChart } from "./chartComponent";
import "../../styles/insights.css";
import { Helper } from "../helpers/Helper";
import { renderMonthlySpendingChart } from "./monthlySpendingChart";
import FinanceCalculator from "../helpers/FinanceCalculator";
import { insightsStatisticsSection } from "./insightsStatistics";

const helper = new Helper();
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
  calBody.id = "cal-body-cont insights-cal-body-cont";
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

  const { start_date, end_date } = helper.getMonthStartAndEndByDate(
    year,
    month
  );
  const { prevStartDate, prevEndDate } = helper.getPreviousMonthDates(
    new Date(start_date),
    new Date(end_date)
  );

  const monthlyBudgetData = budgetData.filter((item) => {
    const itemStart = new Date(item.start_date).toISOString().split("T")[0];
    const itemEnd = new Date(item.end_date).toISOString().split("T")[0];
    const currentStart = start_date;
    const currentEnd = end_date;

    return itemStart >= currentStart && itemEnd <= currentEnd;
  });

  const monthlyTransactionData = transactionData.filter((item) => {
    const itemStart = new Date(item.start_date).toISOString().split("T")[0];
    const itemEnd = new Date(item.end_date).toISOString().split("T")[0];
    const currentStart = start_date;
    const currentEnd = end_date;

    return itemStart >= currentStart && itemEnd <= currentEnd;
  });

  const prevMonthlyBudgetData = budgetData.filter((item) => {
    const itemStart = new Date(item.start_date).toISOString().split("T")[0];
    const itemEnd = new Date(item.end_date).toISOString().split("T")[0];

    return itemStart >= prevStartDate && itemEnd <= prevEndDate;
  });

  const prevMonthlyTransactionData = transactionData.filter((item) => {
    const itemStart = new Date(item.start_date).toISOString().split("T")[0];
    const itemEnd = new Date(item.end_date).toISOString().split("T")[0];

    return itemStart >= prevStartDate && itemEnd <= prevEndDate;
  });
  const chartHeader = document.createElement("h2");
  chartHeader.textContent = "CHARTS";
  chartHeader.className = "insights-charts-header";

  calendarBody.append(
    insightsStatisticsSection(
      monthlyTransactionData,
      monthlyBudgetData,
      prevMonthlyTransactionData
    ),
    chartHeader,
    insightsTop(monthlyBudgetData, monthlyTransactionData),
    insightsMid(monthlyTransactionData, prevMonthlyTransactionData)
  );

  calendarBody.className = "insights-calendar-body";
  return calendarBody;
};

const insightsTop = (budgetData: Budget[], transactionData: Transaction[]) => {
  const component = document.createElement("div");
  component.className = "insights-top";
  const budget = document.createElement("div");
  budget.className = "insights-budget-section";
  const budgetHeader = document.createElement("header");
  const budgetChartCont = document.createElement("div");
  budgetChartCont.className = "insights-budget-chart-cont";
  const budgetChart = document.createElement("canvas");
  budgetChart.id = "insights-budget-chart";
  budgetChart.className = "insights-budget-chart";
  const budgetChartDesc = document.createElement("div");
  budgetChartDesc.textContent = "Budget allocation by category";
  budgetChartCont.append(budgetChart, budgetChartDesc);
  budgetHeader.textContent = "BUDGET";
  renderChart(budgetChart, budgetData);

  budget.append(budgetHeader, budgetChartCont);

  const transaction = document.createElement("div");
  transaction.className = "insights-transaction-section";
  const transactionHeader = document.createElement("header");
  const transactionChartCont = document.createElement("div");
  transactionChartCont.className = "insights-transaction-chart-cont";
  const transactionChart = document.createElement("canvas");
  transactionChart.id = "insights-transaction-chart";
  transactionChart.className = "insights-transaction-chart";
  const transactionChartDesc = document.createElement("div");
  transactionChartDesc.textContent = "Actual spending by category";

  transactionChartCont.append(transactionChart, transactionChartDesc);
  transactionHeader.textContent = "TRANSACTION";
  renderChart(transactionChart, transactionData);

  transaction.append(transactionHeader, transactionChartCont);

  component.append(budget, transaction);

  return component;
};

const insightsMid = (
  monthlyTransactionData: Transaction[],
  prevMonthlyTransactionData: Transaction[]
) => {
  const component = document.createElement("div");
  component.className = "insights-mid";
  const monthlySpendingComparisonCont = document.createElement("div");
  monthlySpendingComparisonCont.className = "insights-monthly-spending-cont";
  const monthlySpendingComparison = document.createElement("canvas");
  monthlySpendingComparison.id = "insights-monthly-spending-chart";
  monthlySpendingComparison.className = "insights-monthly-spending-chart";
  renderMonthlySpendingChart(
    monthlySpendingComparison,
    monthlyTransactionData,
    prevMonthlyTransactionData
  );
  monthlySpendingComparisonCont.appendChild(monthlySpendingComparison);
  component.appendChild(monthlySpendingComparisonCont);

  return component;
};

export { createInsightsCalendar };
