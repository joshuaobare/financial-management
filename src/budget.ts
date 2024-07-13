import createCalendar from "./calendar.js";
const dialog = <HTMLDialogElement>document.getElementById("budget-dialog");
const closeDialog = document.getElementById("budget-dialog-close");

closeDialog?.addEventListener("click", () => {
  dialog!.close();
});

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
