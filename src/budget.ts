import createCalendar from "./calendar.js";

const createBudget = (): HTMLDivElement => {
  const budget = document.createElement("div");
  budget.className = "budget";
  //newDiv?.setAttribute("background-color", "black");
  const heading = document.createElement("h1");
  heading.textContent = "BUDGET HEADING";
  const calendar = createCalendar();
  const budgetSidebar = document.createElement("div");
  budget.appendChild(calendar);
  budget.appendChild(budgetSidebar);
  return budget;
};

export default createBudget;
