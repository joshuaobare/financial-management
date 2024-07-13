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

const submitBudget = () => {
  const category = <HTMLInputElement>(
    document.getElementById("budget-form-category-select")
  );
  const amount = <HTMLInputElement>(
    document.getElementById("budget-form-amount")
  );
  const title = <HTMLInputElement>document.getElementById("budget-form-title");
  const description = <HTMLTextAreaElement>(
    document.getElementById("budget-form-description")
  );
  const calendarHeaderDate = document.getElementById("cal-curr-date");
};

export default createBudget;
