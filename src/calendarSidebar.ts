import { Budget } from "./interfaces/budgetInterface";
import BudgetCalculator from "./BudgetCalculator";

const calendarSidebar = (budgetData: Budget[]) => {
  const sidebar = document.createElement("div");
  sidebar.className = "cal-sidebar";

  sidebar.append(sidebarTop(budgetData), sidebarBottom(budgetData));

  return sidebar;
};

const sidebarTop = (budgetData: Budget[]) => {
  const budgetCalculator = new BudgetCalculator(budgetData);
  const section = document.createElement("div");
  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = "Monthly Breakdown";
  const body = document.createElement("div");
  const incomeSection = document.createElement("div");
  const income = budgetCalculator.budgetCategoryCalculator("Income").toString();
  incomeSection.textContent = `Income this month: ${income}`;
  const totalSpendSection = document.createElement("div");
  const totalSpend = budgetCalculator.totalMonthlyAllocation();
  console.log(JSON.parse(JSON.stringify(budgetData)));
  console.log(totalSpend);
  totalSpendSection.textContent = `Total spend this month: ${totalSpend}`;
  const savingSection = document.createElement("div");
  const netIncome = budgetCalculator.monthlyExcessCalculator().toString();
  savingSection.textContent = `Leftover: ${netIncome}`;
  body.append(incomeSection, totalSpendSection, savingSection);
  section.append(sectionHeader, body);
  return section;
};

const sidebarBottom = (budgetData: Budget[]) => {
  const section = document.createElement("div");
  return section;
};

export { calendarSidebar };
