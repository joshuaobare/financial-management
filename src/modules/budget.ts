import { createCalendar } from "../components/calendar";
import { Budget } from "../interfaces/budgetInterface";
import { BudgetService } from "../services/BudgetService";
import { TransactionService } from "../services/TransactionService";
import { DateHelper } from "../helpers/DateHelper";
import { openBudget, openTransaction } from "../index";
import { resetTransactionForm, transactionFormDialog } from "./transaction";
import "../../styles/budget.css";

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
const transactionService = new TransactionService();
const helper = new DateHelper();

const createBudgetModule = (budgetData: Budget[]): HTMLDivElement => {
  const budget = document.createElement("div");
  budget.className = "budget";
  const calendar = createCalendar(budgetData, "Budget");
  const budgetSidebar = document.createElement("div");
  budget.appendChild(calendar);
  budget.appendChild(budgetSidebar);
  return budget;
};

// this function gathers and values from the budget form for use during submission
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

  // the calendar header node is passed into the helper function to get start and end dates
  const calendarHeaderDate = document.getElementById("cal-curr-date");
  const unparsedDate: string[] = calendarHeaderDate?.dataset.date?.split(" ")!;
  const month = parseInt(unparsedDate[0]);
  const year = parseInt(unparsedDate[1]);
  const { start_date, end_date } = helper.getMonthStartAndEndByDate(
    year,
    month
  );

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

// this function is ran after successful budget creation
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

// this function populates the edit form fields with the record
// that needs to be edited
const populateEditBudgetForm = (budgetData: Budget) => {
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

// this function gathers and values from the edit budget form for use while
// updating a budget record
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
  const budget_id = (<HTMLInputElement>(
    document.getElementById("edit-budget-form-budget-id")
  )).value;
  const user_id = localStorage.getItem("user_id")!.toString();

  // the calendar header node is passed into the helper function to get start and end dates
  const calendarHeaderDate = document.getElementById("cal-curr-date");
  const unparsedDate: string[] = calendarHeaderDate?.dataset.date?.split(" ")!;
  const month = parseInt(unparsedDate[0]);
  const year = parseInt(unparsedDate[1]);
  const { start_date, end_date } = helper.getMonthStartAndEndByDate(
    year,
    month
  );
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

const createNewBudgetItem = async (e: Event) => {
  e.preventDefault();
  const budgetFormValues = getBudgetFormValues();
  const transactionFormValues = { ...getBudgetFormValues(), amount: 0 };
  const successfulBudgetSubmission = await budgetService.createBudget(
    budgetFormValues
  );

  if (successfulBudgetSubmission) {
    resetBudgetForm();
    budgetFormDialog.close();
    openBudget();
  }

  const successfulTransactionSubmission =
    await transactionService.createTransaction(transactionFormValues);

  if (successfulTransactionSubmission) {
    resetTransactionForm();
    transactionFormDialog.close();
  }
};

const updateBudgetItem = async (e: Event) => {
  e.preventDefault();
  const budgetData = { ...getEditBudgetFormValues(), created_at: null };
  const successfulSubmission = await budgetService.updateBudget(budgetData);

  if (successfulSubmission) {
    editBudgetFormDialog.close();
    openBudget();
  }
};

budgetForm?.addEventListener("submit", (e) => {
  createNewBudgetItem(e);
});

editBudgetForm?.addEventListener("submit", (e: Event) => {
  updateBudgetItem(e);
});

budgetDialogCloseBtn?.addEventListener("click", () => {
  budgetFormDialog!.close();
});

editBudgetDialogCloseBtn?.addEventListener("click", () => {
  editBudgetFormDialog!.close();
});

export {
  createBudgetModule,
  resetBudgetForm,
  budgetFormDialog,
  editBudgetFormDialog,
  populateEditBudgetForm,
};
