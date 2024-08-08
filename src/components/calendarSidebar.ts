import { Budget } from "../interfaces/budgetInterface";
import { Transaction } from "../interfaces/transactionInterfact";
import FinanceCalculator from "../helpers/FinanceCalculator";
import { renderChart } from "./chartComponent";

// Entry point: calendar component and home module
const calendarSidebar = (financialData: Budget[] | Transaction[]) => {
  const sidebar = document.createElement("div");
  sidebar.className = "cal-sidebar";

  sidebar.append(sidebarTop(financialData), sidebarBottom(financialData));

  return sidebar;
};

const sidebarTop = (financialData: Budget[] | Transaction[]) => {
  const financeCalculator = new FinanceCalculator(financialData);
  const section = document.createElement("div");
  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = "Monthly Breakdown";
  const body = document.createElement("div");
  const incomeSectionCont = document.createElement("div");
  const incomeSection = document.createElement("div");
  const income = financeCalculator
    .financeCategoryCalculator("Income")
    .toString();
  incomeSection.textContent = `INCOME`;
  incomeSection.className = "cal-prop-title";
  const incomeAmount = document.createElement("div");
  incomeAmount.textContent = `KShs. ${income}`;
  incomeAmount.className = "cal-prop-amount";
  incomeSectionCont.append(incomeSection, incomeAmount);
  incomeSectionCont.className = "cal-sidebar-row";

  const totalSpendSectionCont = document.createElement("div");
  const totalSpendSection = document.createElement("div");
  totalSpendSection.className = "cal-prop-title";
  const totalSpend = financeCalculator.totalMonthlySpend();
  totalSpendSection.textContent = `EXPENSES`;
  const totalSpendAmount = document.createElement("div");
  totalSpendAmount.className = "cal-prop-amount";
  totalSpendAmount.textContent = `KShs. ${totalSpend}`;
  totalSpendSectionCont.append(totalSpendSection, totalSpendAmount);
  totalSpendSectionCont.className = "cal-sidebar-row";

  const savingSectionCont = document.createElement("div");
  const savingSection = document.createElement("div");
  savingSection.className = "cal-prop-title";
  const savingAmount = document.createElement("div");
  const netIncome = financeCalculator.monthlyExcessCalculator();
  savingSection.textContent = `LEFTOVER`;
  savingAmount.style.color = netIncome >= 0 ? "green" : "red";
  savingAmount.textContent = `KShs. ${netIncome.toString()}`;
  savingAmount.className = "cal-prop-amount";
  savingSectionCont.append(savingSection, savingAmount);
  savingSectionCont.className = "cal-sidebar-row";
  body.append(incomeSectionCont, totalSpendSectionCont, savingSectionCont);
  section.append(sectionHeader, body);
  return section;
};

const sidebarBottom = (financialData: Budget[] | Transaction[]) => {
  const section = document.createElement("div");
  const canvasCont = document.createElement("div");
  const canvas = document.createElement("canvas");
  canvas.id = "cal-sidebar-chart";
  canvasCont.className = "cal-sidebar-chart-cont";
  renderChart(canvas, financialData);
  canvasCont.append(canvas);
  section.append(canvasCont);
  return section;
};

export { calendarSidebar };
