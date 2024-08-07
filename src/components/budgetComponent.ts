import { Budget } from "../interfaces/budgetInterface";
import { openBudget } from "../index";
import { BudgetService } from "../services/BudgetService";
import {
  budgetFormDialog,
  populateEditBudgetForm,
  editBudgetFormDialog,
} from "../modules/budget";

const budgetService = new BudgetService();
const createBudgetComponent = (title: string, budgetData: Budget[]) => {
  const budgetComponent = document.createElement("div");
  budgetComponent.className = "budget-component";
  const header = document.createElement("header");
  header.className = "budget-header";
  const headerLeft = document.createElement("div");
  headerLeft.textContent = title;
  headerLeft.className = "budget-row-left budget-header-left";
  const headerMid = document.createElement("div");
  headerMid.className = "budget-row-mid budget-header-mid";
  headerMid.textContent = "Planned";
  const headerRight = document.createElement("div");
  headerRight.textContent = "Amount";
  headerRight.className = "budget-row-right budget-header-right";
  header.append(headerLeft, headerRight);
  const main = document.createElement("div");
  const componentData = budgetData.filter(
    (budgetItem) => budgetItem.category === title
  );
  componentData.forEach((item) => {
    main.append(row(item));
  });

  main.className = "budget-main";

  const footer = document.createElement("div");
  footer.className = "budget-footer";
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Item";
  addBtn.className = "budget-add-btn";

  addBtn.addEventListener("click", () => {
    const budgetFormSelect = <HTMLSelectElement>(
      document.getElementById("budget-form-category-select")
    );
    budgetFormSelect.value = title;
    budgetFormDialog!.showModal();
  });

  footer.appendChild(addBtn);
  budgetComponent.append(header, main, footer);

  return budgetComponent;
};

const row = (budgetData: Budget) => {
  const singleRow = document.createElement("div");
  singleRow.className = "budget-item";
  const deleteIcon = document.createElement("span");
  deleteIcon.textContent = "delete";
  deleteIcon.className = "material-symbols-outlined budget-item-del-icon";
  const rowMain = document.createElement("div");
  rowMain.className = "budget-row";
  const rowLeft = document.createElement("div");
  rowLeft.className = "budget-row-left budget-row-left-input";
  rowLeft.textContent = budgetData.title;
  const rowMid = document.createElement("div");
  rowMid.className = "budget-row-mid";
  rowMid.textContent = `KShs. ${budgetData.amount}`;
  const rowRight = document.createElement("div");
  rowRight.className = "budget-row-right";
  rowRight.textContent = "KShs. 0.00";

  rowMain.append(rowLeft, rowMid);

  rowMain.addEventListener("click", () => {
    populateEditBudgetForm(budgetData);
    editBudgetFormDialog.show();
  });
  deleteIcon.addEventListener("click", () => {
    deleteBudgetItem(budgetData);
  });

  singleRow.append(deleteIcon, rowMain);

  return singleRow;
};

const deleteBudgetItem = async (budgetData: Budget) => {
  const successfulSubmission = await budgetService.deleteBudget(
    budgetData.budget_id
  );

  if (successfulSubmission) {
    openBudget();
  }
};

export { createBudgetComponent };
