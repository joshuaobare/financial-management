import { Transaction } from "./interfaces/transactionInterfact";
import { transactionFormDialog } from "./transaction";

const createTransactionComponent = (
  title: string,
  transactionData: Transaction[]
) => {
  const transactionComponent = document.createElement("div");
  transactionComponent.className = "transaction-component";
  const header = document.createElement("header");
  header.className = "transaction-component-header";
  const headerLeft = document.createElement("div");
  headerLeft.textContent = title;
  headerLeft.className =
    "transaction-component-row-left transaction-component-header-left";
  const headerRight = document.createElement("div");
  headerRight.textContent = "Amount";
  headerRight.className =
    "transaction-component-row-right transaction-component-header-right";
  header.append(headerLeft, headerRight);

  const main = document.createElement("div");

  const componentData = transactionData.filter(
    (budgetItem) => budgetItem.category === title
  );

  componentData.forEach((item) => {
    main.appendChild(row(item));
  });

  main.className = "transaction-component-main";

  const footer = document.createElement("div");
  footer.className = "transaction-component-footer";
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Item";

  addBtn.addEventListener("click", () => {
    const transactionFormSelect = <HTMLSelectElement>(
      document.getElementById("transaction-form-category-select")
    );
    transactionFormSelect.value = title;
    transactionFormDialog?.show();
  });

  footer.appendChild(addBtn);

  transactionComponent.append(header, main, footer);

  return transactionComponent;
};

const row = (transactionData: Transaction) => {
  const singleRow = document.createElement("div");
  singleRow.className = "transaction-component-item";
  const deleteIcon = document.createElement("span");
  deleteIcon.textContent = "delete";
  deleteIcon.className =
    "material-symbols-outlined transaction-component-item-del-icon";
  const rowMain = document.createElement("div");
  rowMain.className = "transaction-component-row";
  const rowLeft = document.createElement("div");
  rowLeft.className =
    "transaction-component-row-left transaction-component-row-left-input";
  rowLeft.textContent = transactionData.title;
  const rowRight = document.createElement("div");
  rowRight.className = "budget-row-right";
  rowRight.textContent = `KShs. ${transactionData.amount}`;

  rowMain.append(deleteIcon, rowLeft, rowRight);
  singleRow.append(rowMain);
  return singleRow;
};

export { createTransactionComponent };
