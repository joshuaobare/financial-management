import { Budget } from "./interfaces/budgetInterface";
import {
  updateBudget,
  getEditBudgetFormValues,
  populateBudgetForm,
} from "./editBudget";
import { openBudget } from "./index";
import { deleteBudget } from "./deleteBudget";

const dialog = <HTMLDialogElement>document.getElementById("budget-dialog");
const editBudgetDialog = <HTMLDialogElement>(
  document.getElementById("edit-budget-dialog")
);

const createBudgetComponent = (title: string, budgetData: Budget[]) => {
  console.log(budgetData);
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
  headerRight.textContent = "Received";
  headerRight.className = "budget-row-right budget-header-right";
  header.append(headerLeft, headerMid, headerRight);
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

  addBtn.addEventListener("click", () => {
    const budgetFormSelect = <HTMLSelectElement>(
      document.getElementById("budget-form-category-select")
    );
    budgetFormSelect.value = title;
    dialog!.showModal();
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

  rowMain.append(rowLeft, rowMid, rowRight);

  rowMain.addEventListener("click", () => {
    populateBudgetForm(budgetData);
    editBudgetDialog.show();
  });
  deleteIcon.addEventListener("click", () => {
    deleteBudget(budgetData.budget_id);
  });

  singleRow.append(deleteIcon, rowMain);

  return singleRow;
};

export { createBudgetComponent };
