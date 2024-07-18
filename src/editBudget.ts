import { Budget } from "./interfaces/budgetInterface.js";

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
};

const updateBudget = () => {};
