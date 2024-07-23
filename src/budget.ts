import { createCalendar } from "./calendar";
import { Budget } from "./interfaces/budgetInterface";
import { openBudget } from "./index";
import { config } from "./config";
import { BudgetService } from "./budgetService";

const budgetFormDialog = <HTMLDialogElement>(
  document.getElementById("budget-dialog")
);
const budgetForm = <HTMLFormElement>document.getElementById("budget-form");
const editBudgetForm = <HTMLFormElement>(
  document.getElementById("edit-budget-form")
);
const budgetDialogCloseBtn = document.getElementById("budget-dialog-close");
const editBudgetDialogCloseBtn = document.getElementById(
  "edit-budget-dialog-close"
);
const editBudgetFormDialog = <HTMLDialogElement>(
  document.getElementById("edit-budget-dialog")
);
const budgetService = new BudgetService();

const createBudget = (budgetData: Budget[]): HTMLDivElement => {
  const budget = document.createElement("div");
  budget.className = "budget";
  const calendar = createCalendar(budgetData, "Budget");
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

const populateBudgetForm = (budgetData: Budget) => {
  const category = <HTMLInputElement>(
    document.getElementById("edit-budget-form-category-select")
  );
  category.value = budgetData.category;
  const amount = <HTMLInputElement>(
    document.getElementById("edit-budget-form-amount")
  );
  amount.value = budgetData.amount.toString();
  const title = <HTMLInputElement>(
    document.getElementById("edit-budget-form-title")
  );
  title.value = budgetData.title;
  const description = <HTMLTextAreaElement>(
    document.getElementById("edit-budget-form-description")
  );
  description.value = budgetData.description;
  const startDate = <HTMLInputElement>(
    document.getElementById("edit-budget-form-start-date")
  );
  startDate.value = budgetData.start_date.toString();
  const endDate = <HTMLInputElement>(
    document.getElementById("edit-budget-form-end-date")
  );
  endDate.value = budgetData.end_date.toString();
  const budgetId = <HTMLInputElement>(
    document.getElementById("edit-budget-form-budget-id")
  );
  budgetId.value = budgetData.budget_id.toString();
};

const getEditBudgetFormValues = () => {
  const category = (<HTMLInputElement>(
    document.getElementById("edit-budget-form-category-select")
  )).value;
  const amount = (<HTMLInputElement>(
    document.getElementById("edit-budget-form-amount")
  )).value;
  const title = (<HTMLInputElement>(
    document.getElementById("edit-budget-form-title")
  )).value;
  const description = (<HTMLTextAreaElement>(
    document.getElementById("edit-budget-form-description")
  )).value;
  const budget_id = (<HTMLTextAreaElement>(
    document.getElementById("edit-budget-form-budget-id")
  )).value;
  const user_id = localStorage.getItem("user_id")!.toString();

  const calendarHeaderDate = document.getElementById("cal-curr-date");
  const unparsedDate: string[] = calendarHeaderDate?.dataset.date?.split(" ")!;
  const month = parseInt(unparsedDate[0]);
  const year = parseInt(unparsedDate[1]);
  const start_date_obj = new Date();
  start_date_obj.setFullYear(year, month, 1);
  const end_date_obj = new Date();
  end_date_obj.setFullYear(year, month + 1, 0);
  const start_date = start_date_obj.toISOString().split("T")[0];
  const end_date = end_date_obj.toISOString().split("T")[0];

  return {
    category,
    amount,
    title,
    description,
    user_id,
    start_date,
    end_date,
    budget_id,
  };
};

const createTransactionRecord = async () => {
  try {
    const request = await fetch(config.BASE_URL + "createTransaction.php", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...getBudgetFormValues(), amount: 0 }),
    });
    const response = await request.json();

    if (response.message) {
      console.log(response.message);
    }
  } catch (error) {
    console.error(error);
  }
};

budgetForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const budgetFormValues = getBudgetFormValues();
  const transactionFormValues = { ...getBudgetFormValues(), amount: 0 };
  budgetService.submitBudgetForm(budgetFormValues);
  createTransactionRecord();
});

editBudgetForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const budgetData = { ...getEditBudgetFormValues(), created_at: null };
  budgetService.updateBudget(budgetData);
});

budgetDialogCloseBtn?.addEventListener("click", () => {
  budgetFormDialog!.close();
});

editBudgetDialogCloseBtn?.addEventListener("click", () => {
  editBudgetFormDialog!.close();
});

export {
  createBudget,
  resetBudgetForm,
  getBudgetFormValues,
  budgetFormDialog,
  editBudgetFormDialog,
  populateBudgetForm,
};
