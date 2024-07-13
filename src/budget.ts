import createCalendar from "./calendar.js";
const dialog = <HTMLDialogElement>document.getElementById("budget-dialog");
const budgetForm = document.getElementById("budget-form");
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

const getBudgetFormValues = () => {
  const category = (<HTMLInputElement>(
    document.getElementById("budget-form-category-select")
  )).value;
  const amount = (<HTMLInputElement>(
    document.getElementById("budget-form-amount")
  )).value;
  const title = (<HTMLInputElement>document.getElementById("budget-form-title"))
    .value;
  const description = (<HTMLTextAreaElement>(
    document.getElementById("budget-form-description")
  )).value;
  const user_id = localStorage.getItem("user_id");

  const calendarHeaderDate = document.getElementById("cal-curr-date");
  const unparsedDate: string[] = calendarHeaderDate?.dataset.date?.split(" ")!;
  const month = parseInt(unparsedDate[0]);
  const year = parseInt(unparsedDate[1]);
  const start_date = new Date();
  start_date.setFullYear(year, month, 1);
  const end_date = new Date();
  end_date.setFullYear(year, month + 1, 0);

  return {
    category,
    amount,
    title,
    description,
    user_id,
    start_date,
    end_date,
  };
};
const resetBudgetForm = () => {
  const amount = ((<HTMLInputElement>(
    document.getElementById("budget-form-amount")
  )).value = "");
  const title = ((<HTMLInputElement>(
    document.getElementById("budget-form-title")
  )).value = "");
  const description = ((<HTMLTextAreaElement>(
    document.getElementById("budget-form-description")
  )).value = "");
};
const submitBudgetForm = async () => {
  try {
    const request = await fetch(
      "http://localhost:8080/financial-management/php/createBudget.php",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(getBudgetFormValues()),
      }
    );
    const response = await request.json();

    if (response.message) {
      resetBudgetForm();
      dialog.close();
    }
  } catch (error) {
    console.error(error);
  }
};

budgetForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBudgetForm();
});

export default createBudget;
