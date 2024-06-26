const createBudgetComponent = (title: string) => {
  const budgetComponent = document.createElement("div");
  const header = document.createElement("header");
  const headerLeft = document.createElement("div");
  headerLeft.textContent = title;
  headerLeft.className = "budget-row-left";
  const headerMid = document.createElement("div");
  headerMid.className = "budget-row-mid";
  headerMid.textContent = "Planned";
  const headerRight = document.createElement("div");
  headerRight.textContent = "Received";
  headerRight.className = "budget-row-right";
  header.append(headerLeft, headerMid, headerRight);
  const main = document.createElement("div");
  main.append(row(), row());
  const footer = document.createElement("footer");
  const addBtn = document.createElement("button");
  footer.appendChild(addBtn);
  budgetComponent.append(header, main, footer);

  return budgetComponent;
};

const row = () => {
  const singleRow = document.createElement("div");
  const rowLeft = document.createElement("input");
  rowLeft.className = "budget-row-left";
  const rowMid = document.createElement("div");
  rowMid.className = "budget-row-mid";
  rowMid.textContent = "KShs. 0.00";
  const rowRight = document.createElement("div");
  rowRight.className = "budget-row-right";

  singleRow.append(rowLeft, rowMid, rowRight);

  return singleRow;
};

export default createBudgetComponent;
