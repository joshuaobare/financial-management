import { Budget } from "./interfaces/budgetInterface";
import BudgetCalculator from "./BudgetCalculator";

const calendarSidebar = (budgetData: Budget[]) => {
  const sidebar = document.createElement("div");

  sidebar.append(sidebarTop(budgetData), sidebarBottom(budgetData));
};

const sidebarTop = (budgetData: Budget[]) => {
  const budgetCalculator = new BudgetCalculator(budgetData);
  const section = document.createElement("div");
  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = "Monthly Breakdown";
  const body = document.createElement("div");
  const income = document.createElement("div");
  const totalSpend = document.createElement("div");
  const saving = document.createElement("div");
  return section;
};

const sidebarBottom = (budgetData: Budget[]) => {
  const section = document.createElement("div");
  return section;
};

export { calendarSidebar };
