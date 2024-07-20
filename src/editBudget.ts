import { Budget } from "./interfaces/budgetInterface";
import { openBudget } from "./index";

const editBudgetDialog = <HTMLDialogElement>(
  document.getElementById("edit-budget-dialog")
);

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

const updateBudget = async (budgetData: Budget) => {
  //console.log(budgetData);
  try {
    const request = await fetch(
      "http://localhost:8080/financial-management/php/updateBudget.php",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(budgetData),
      }
    );
    const response = await request.json();
    console.log(response);
    if (response.message) {
      editBudgetDialog.close();
      openBudget();
    }
  } catch (error) {
    console.error(error);
  }
};

export { updateBudget, getEditBudgetFormValues, populateBudgetForm };
