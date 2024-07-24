import { Budget } from "./interfaces/budgetInterface";
import { Transaction } from "./interfaces/transactionInterfact";
import FinanceCalculator from "./helpers/FinanceCalculator";

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
  const incomeSection = document.createElement("div");
  const income = financeCalculator
    .financeCategoryCalculator("Income")
    .toString();
  incomeSection.textContent = `Income this month: ${income}`;
  const totalSpendSection = document.createElement("div");
  const totalSpend = financeCalculator.totalMonthlySpend();
  console.log(JSON.parse(JSON.stringify(financialData)));
  console.log(totalSpend);
  totalSpendSection.textContent = `Total spend this month: ${totalSpend}`;
  const savingSection = document.createElement("div");
  const netIncome = financeCalculator.monthlyExcessCalculator().toString();
  savingSection.textContent = `Leftover: ${netIncome}`;
  body.append(incomeSection, totalSpendSection, savingSection);
  section.append(sectionHeader, body);
  return section;
};

const sidebarBottom = (financialData: Budget[] | Transaction[]) => {
  const section = document.createElement("div");
  return section;
};

export { calendarSidebar };
